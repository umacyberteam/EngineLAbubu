import type { Metadata } from "next";
import { Fragment } from "react";
import { Crumbs, Cta } from "@/components/blocks";
import { CvtDemo } from "@/components/CvtDemo";
import { kirianIntro, kirianParts, kirianSections } from "@/data/kirian";

export const metadata: Metadata = {
  title: "Panduan kirian CVT motor matic",
  description:
    "Panduan komponen kirian atau CVT: roller, pulley, van belt, per sentri, per CVT, kampas ganda, mangkok ganda, dan efeknya pada karakter motor.",
};

export default function KirianPage() {
  return (
    <article className="pb-[clamp(40px,6vw,72px)] pt-[clamp(28px,5vw,56px)]">
      <div className="wrap">
        <Crumbs trail={[{ href: "/", label: "Beranda" }, { label: "Panduan kirian" }]} />
        <header className="mb-7 max-w-[760px]">
          <h1 className="mb-3.5 text-[clamp(1.9rem,4.2vw,3rem)] font-extrabold">Panduan kirian: komponen CVT motor matic</h1>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[0.92rem] text-muted">
            <span>Motor matic</span>
            <span>8 menit baca</span>
          </div>
        </header>

        <ul className="m-0 mb-2 flex max-w-[680px] list-none flex-wrap gap-2 p-0">
          {kirianSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block rounded-full px-3.5 py-1.5 text-[0.9rem] font-semibold text-ink no-underline shadow-[inset_0_0_0_1.5px_var(--color-line)] hover:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="prose-body">
          <div dangerouslySetInnerHTML={{ __html: kirianIntro }} />
          {kirianSections.map((s) => (
            <Fragment key={s.id}>
              <h2 id={s.id} className="scroll-mt-4">
                {s.title}
              </h2>
              {s.kind === "html" ? <div dangerouslySetInnerHTML={{ __html: s.body }} /> : null}
              {s.kind === "demo" ? <CvtDemo /> : null}
              {s.kind === "parts" ? (
                <ul className="list-none p-0">
                  {kirianParts.map((p) => (
                    <li key={p.name} className="m-0 border-t border-line py-3.5">
                      <h3 className="mt-0! mb-1">{p.name}</h3>
                      <span className="mb-1 block font-head text-[0.88rem] font-semibold text-muted">Juga disebut: {p.alias}</span>
                      <p className="mb-1.5">{p.desc}</p>
                      <p className="mb-0">
                        <strong>Tanda aus:</strong> {p.wear}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Fragment>
          ))}
        </div>

        <Cta
          text="Motor matic bergetar saat tarikan awal? Telusuri penyebabnya."
          href="/troubleshooting/motor-matic-bergetar-saat-tarikan-awal"
          button="Baca troubleshooting"
        />
      </div>
    </article>
  );
}
