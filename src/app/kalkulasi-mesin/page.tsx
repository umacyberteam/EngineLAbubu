import type { Metadata } from "next";
import { Calculators } from "@/components/Calculators";
import { PageTitle } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Kalkulasi mesin",
  description: "Kalkulator CC, rasio kompresi, rasio gear, dan top speed motor. Masukkan angka, hasil langsung muncul.",
};

export default function KalkulasiPage() {
  return (
    <>
      <PageTitle
        title="Kalkulasi mesin"
        lede="Empat alat hitung untuk urusan permesinan motor. Semua berjalan di browser, tanpa kirim data ke mana pun."
      />
      <div className="mt-8 border-t border-line" />
      <Calculators />
    </>
  );
}
