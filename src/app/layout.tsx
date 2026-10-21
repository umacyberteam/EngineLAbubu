import type { Metadata, Viewport } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Engine Lab: kalkulator dan panduan permesinan motor",
    template: "%s | Engine Lab",
  },
  description:
    "Kalkulator CC, rasio kompresi, rasio gear, top speed, artikel permesinan, troubleshooting, dan panduan kirian CVT motor.",
  openGraph: { siteName: "Engine Lab", locale: "id_ID", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#e6eaec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body>
        <a
          href="#isi"
          className="absolute -left-[999px] top-2 z-[100] bg-ink px-3.5 py-2 text-white focus:left-2"
        >
          Lewati ke isi halaman
        </a>
        <Header />
        <main id="isi">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
