import Link from "next/link";
import { HeroCalc } from "@/components/Calculators";
import { Cta, PostList, SectionHead } from "@/components/blocks";
import { articles } from "@/data/articles";
import { troubles } from "@/data/troubles";

const tools = [
  { href: "/kalkulasi-mesin#cc", name: "Kalkulator CC", eq: "CC = π/4 × bore² × langkah ÷ 1000" },
  { href: "/kalkulasi-mesin#kompresi", name: "Rasio kompresi", eq: "CR = (volume langkah + ruang bakar) ÷ ruang bakar" },
  { href: "/kalkulasi-mesin#rasio-gear", name: "Rasio gear", eq: "Rasio = gigi belakang ÷ gigi depan" },
  { href: "/kalkulasi-mesin#top-speed", name: "Top speed", eq: "Km/jam = RPM × keliling roda × 60 ÷ rasio ÷ 1000" },
];

const featured = [
  "cara-menghitung-cc-motor-dari-bore-dan-stroke",
  "bore-up-dan-stroke-up-bedanya",
  "hubungan-rasio-kompresi-dengan-oktan-bensin",
  "apa-itu-knocking-mesin-ngelitik",
];

export default function HomePage() {
  const featuredArticles = featured
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <section className="pb-[clamp(40px,6vw,72px)] pt-[clamp(32px,6vw,72px)]">
        <div className="wrap grid items-center gap-[clamp(28px,5vw,64px)] md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="mb-5 text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.02]">
              Hitung mesin motormu, pahami kenapa dia begitu.
            </h1>
            <p className="max-w-[46ch] text-[clamp(1.1rem,2vw,1.3rem)] leading-normal text-muted">
              Kalkulator CC, rasio kompresi, rasio gear, dan top speed, ditambah artikel dan panduan perawatan dengan bahasa bengkel.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/kalkulasi-mesin" className="btn">
                Buka kalkulator
              </Link>
              <Link href="/troubleshooting" className="btn-ghost">
                Motor lagi bermasalah?
              </Link>
            </div>
          </div>
          <HeroCalc />
        </div>
      </section>

      <section className="pb-[clamp(40px,7vw,80px)]">
        <div className="wrap">
          <SectionHead title="Kalkulasi mesin" action={<p className="m-0 max-w-[52ch] text-muted">Masukkan angka yang kamu punya, hasilnya langsung muncul.</p>} />
          <div className="ruler" aria-hidden="true" />
          <ul className="m-0 list-none p-0">
            {tools.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="grid items-baseline gap-x-8 gap-y-1 border-b border-line px-2 py-[22px] text-ink no-underline hover:bg-panel md:grid-cols-[1fr_1.1fr_auto]"
                >
                  <span className="text-[1.35rem] font-extrabold">{t.name}</span>
                  <span className="font-medium tabular-nums text-muted">{t.eq}</span>
                  <span className="whitespace-nowrap font-bold text-blue">Hitung</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-[clamp(40px,7vw,80px)]">
        <div className="wrap">
          <SectionHead
            title="Artikel populer"
            action={
              <Link href="/artikel" className="text-blue">
                Semua artikel
              </Link>
            }
          />
          <PostList items={featuredArticles.map((a) => ({ href: `/artikel/${a.slug}`, title: a.title, desc: a.desc }))} />
        </div>
      </section>

      <section className="pb-[clamp(40px,7vw,80px)]">
        <div className="wrap">
          <SectionHead
            title="Kenapa motorku begini?"
            action={
              <Link href="/troubleshooting" className="text-blue">
                Semua troubleshooting
              </Link>
            }
          />
          <PostList items={troubles.map((t) => ({ href: `/troubleshooting/${t.slug}`, title: t.title }))} />
        </div>
      </section>

      <section className="pb-[clamp(40px,7vw,80px)]">
        <div className="wrap">
          <Cta
            wide
            text="Kirian atau CVT motor matic punya istilah bengkel yang bikin bingung. Panduannya dibahas komponen per komponen."
            href="/panduan-kirian"
            button="Baca panduan kirian"
          />
        </div>
      </section>
    </>
  );
}
