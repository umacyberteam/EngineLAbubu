import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crumbs, Cta, PostList } from "@/components/blocks";
import { troubles } from "@/data/troubles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return troubles.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = troubles.find((x) => x.slug === slug);
  if (!t) return {};
  return {
    title: t.title,
    description: t.desc,
    alternates: { canonical: `/troubleshooting/${t.slug}` },
  };
}

export default async function TroubleshootingPage({ params }: Props) {
  const { slug } = await params;
  const t = troubles.find((x) => x.slug === slug);
  if (!t) notFound();

  const related = t.related
    .map((s) => troubles.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <article className="pb-[clamp(40px,6vw,72px)] pt-[clamp(28px,5vw,56px)]">
      <div className="wrap">
        <Crumbs trail={[{ href: "/", label: "Beranda" }, { href: "/troubleshooting", label: "Troubleshooting" }]} />
        <header className="mb-7 max-w-[760px]">
          <h1 className="text-[clamp(1.9rem,4.2vw,3rem)] font-extrabold">{t.title}</h1>
        </header>

        <div className="mb-2 max-w-[680px] rounded-[12px] bg-panel px-[22px] py-[18px] shadow-[0_0_0_1px_var(--color-line)]">
          <h2 className="mb-1.5 text-[1.1rem] font-extrabold">Jawaban singkat</h2>
          <p className="m-0 font-body text-[1.1rem] leading-relaxed">{t.answer}</p>
        </div>

        <div className="prose-body">
          <h2>Penyebab, dari yang paling sering</h2>
          <ol className="list-none p-0">
            {t.causes.map((c, i) => (
              <li key={c.name} className="relative m-0 border-t border-line py-[18px] pl-[54px]">
                <span className="absolute left-0 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink font-head font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-0! mb-1.5 text-[1.12rem]">{c.name}</h3>
                <p className="mb-2">{c.why}</p>
                <p className="mb-2">
                  <b className="font-head text-[0.9rem]">Cara cek:</b> {c.check}
                </p>
                <p className="mb-0">
                  <b className="font-head text-[0.9rem]">Solusi:</b> {c.fix}
                </p>
              </li>
            ))}
          </ol>

          {t.caution ? (
            <div className="note caution">
              <strong>Keselamatan</strong>
              {t.caution}
            </div>
          ) : null}
          <div className="note caution">
            <strong>Kapan ke bengkel</strong>
            {t.workshop}
          </div>

          <h2>Pencegahan</h2>
          <p>{t.prevent}</p>
        </div>

        {t.kirian ? (
          <Cta
            text="Banyak masalah matic berasal dari kirian. Pelajari komponen dan istilahnya."
            href="/panduan-kirian"
            button="Baca panduan kirian"
          />
        ) : null}

        <aside className="mt-11 max-w-[680px]">
          <h2 className="mb-2 text-[1.2rem] font-extrabold">Masalah lain yang berkaitan</h2>
          <PostList items={related.map((r) => ({ href: `/troubleshooting/${r.slug}`, title: r.title }))} />
        </aside>
      </div>
    </article>
  );
}
