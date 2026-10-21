"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { NAV } from "@/lib/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="no-print bg-paper">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-4 pb-3.5 pt-[18px]">
        <Link href="/" className="inline-flex items-center gap-2.5 text-[1.35rem] font-extrabold tracking-tight text-ink no-underline">
          <Logo />
          <span>Engine Lab</span>
        </Link>
        <nav
          aria-label="Menu utama"
          className="flex w-full gap-1 overflow-x-auto sm:w-auto sm:flex-wrap sm:overflow-visible"
        >
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  "whitespace-nowrap border-b-[3px] px-3 py-2 font-semibold text-ink no-underline hover:border-line " +
                  (active ? "border-blue hover:border-blue" : "border-transparent")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="ruler" aria-hidden="true" />
    </header>
  );
}
