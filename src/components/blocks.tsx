import Link from "next/link";
import type { ReactNode } from "react";

export function PageTitle({ title, lede }: { title: string; lede: string }) {
  return (
    <div className="pb-2 pt-[clamp(32px,5vw,56px)]">
      <div className="wrap">
        <h1 className="mb-3.5 text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold">{title}</h1>
        <p className="max-w-[46ch] text-[clamp(1.1rem,2vw,1.3rem)] leading-normal text-muted">{lede}</p>
      </div>
    </div>
  );
}

export type PostItem = { href: string; title: string; desc?: string; meta?: string };

export function PostList({ items }: { items: PostItem[] }) {
  return (
    <ul className="post-list">
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href}>
            <span className="t">{it.title}</span>
            {it.desc ? <span className="d">{it.desc}</span> : null}
            {it.meta ? <span className="m">{it.meta}</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Crumbs({ trail }: { trail: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Jejak halaman" className="mb-[18px] text-[0.9rem] text-muted">
      {trail.map((c, i) => (
        <span key={c.label}>
          {i > 0 ? " / " : ""}
          {c.href ? (
            <Link href={c.href} className="text-muted hover:text-ink">
              {c.label}
            </Link>
          ) : (
            c.label
          )}
        </span>
      ))}
    </nav>
  );
}

export function Cta({ text, href, button, wide = false }: { text: string; href: string; button: string; wide?: boolean }) {
  return (
    <div
      className={
        "no-print mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3.5 rounded-[12px] bg-ink px-[22px] py-5 text-white " +
        (wide ? "" : "max-w-[680px]")
      }
    >
      <p className="m-0 max-w-[38ch] font-semibold">{text}</p>
      <Link href={href} className="inline-block rounded-[4px] bg-signal px-5 py-3 font-bold text-ink no-underline hover:bg-white">
        {button}
      </Link>
    </div>
  );
}

export function SectionHead({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="mb-2 flex flex-wrap items-end justify-between gap-4">
      <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold">{title}</h2>
      {action}
    </div>
  );
}
