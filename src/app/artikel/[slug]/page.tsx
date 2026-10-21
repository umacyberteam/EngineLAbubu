import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crumbs, Cta, PostList } from "@/components/blocks";
import { articles } from "@/data/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.desc,
    alternates: { canonical: `/artikel/${a.slug}` },
    openGraph: { title: a.title, description: a.desc, type: "article" },
  };
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const related = a.related
    .map((s) => articles.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <article className="pb-[clamp(40px,6vw,72px)] pt-[clamp(28px,5vw,56px)]">
      <div className="wrap">
        <Crumbs trail={[{ href: "/", label: "Beranda" }, { href: "/artikel", label: "Artikel" }]} />
        <header className="mb-7 max-w-[760px]">
          <h1 className="mb-3.5 text-[clamp(1.9rem,4.2vw,3rem)] font-extrabold">{a.title}</h1>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[0.92rem] text-muted">
            <span>{a.category}</span>
            <span>{a.minutes} menit baca</span>
          </div>
        </header>

        <div className="prose-body" dangerouslySetInnerHTML={{ __html: a.body }} />

        <Cta text={a.calc.text} href={`/kalkulasi-mesin#${a.calc.anchor}`} button="Buka kalkulator" />

        <aside className="mt-11 max-w-[680px]">
          <h2 className="mb-2 text-[1.2rem] font-extrabold">Baca juga</h2>
          <PostList items={related.map((r) => ({ href: `/artikel/${r.slug}`, title: r.title }))} />
        </aside>
      </div>
    </article>
  );
}
