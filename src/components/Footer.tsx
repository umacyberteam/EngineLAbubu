import Link from "next/link";
import { Logo } from "./Logo";
import { NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="no-print mt-6 bg-ink text-[#d7e0e4]">
      <div className="wrap grid gap-x-12 gap-y-6 py-9 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 text-[1.35rem] font-extrabold tracking-tight text-white no-underline">
            <Logo />
            <span>Engine Lab</span>
          </Link>
          <p className="mt-2.5 max-w-[52ch] text-[0.92rem] text-[#aebcc2]">
            Kalkulator dan panduan permesinan motor untuk yang suka tahu isi mesinnya. Hasil hitungan bersifat teoretis dan tidak menggantikan buku servis motormu.
          </p>
        </div>
        <nav aria-label="Menu footer" className="flex flex-col gap-1.5">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="font-semibold text-white no-underline hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
