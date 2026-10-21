"use client";

import { useState } from "react";
import { fmt2 } from "@/lib/format";
import { CvtSvg } from "./svgs";

export function CvtDemo() {
  const [pos, setPos] = useState(0);
  const t = pos / 100;
  const ratio = (60 - 20 * t) / (24 + 26 * t);
  const desc =
    t < 0.15
      ? "Posisi start: belt di jari-jari kecil pulley depan. Rasio besar, torsi ke roda besar, putaran roda lambat."
      : t > 0.85
        ? "Posisi kecepatan tinggi: belt di jari-jari besar pulley depan. Rasio kecil, roda berputar lebih cepat dari mesin."
        : "Posisi transisi: roller terlempar keluar, pulley depan merapat, belt naik ke jari-jari lebih besar.";

  return (
    <div className="my-7 max-w-[760px] font-head text-base leading-normal">
      <p className="mb-3 font-body">Geser untuk melihat belt berpindah dari posisi start sampai kecepatan tinggi.</p>
      <div className="panel">
        <CvtSvg t={t} />
        <div className="mb-3.5 mt-3 rounded-lg bg-signal px-[18px] pb-3 pt-3.5 text-ink" aria-live="polite">
          <div className="text-[0.92rem] font-semibold">Rasio CVT</div>
          <div className="text-[clamp(2.2rem,6vw,3.4rem)] font-extrabold leading-[1.05] tabular-nums">{fmt2(ratio)} : 1</div>
        </div>
        <p className="hint mb-3">{desc}</p>
        <label htmlFor="cvt-slider" className="font-semibold">
          Posisi belt
        </label>
        <input
          id="cvt-slider"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="mt-1 w-full accent-blue"
        />
        <div className="flex justify-between text-[0.88rem] font-semibold text-muted">
          <span>Start</span>
          <span>Kecepatan tinggi</span>
        </div>
      </div>
      <p className="mt-4 font-body text-base text-muted">
        Gambar ini disederhanakan. Pada motor sungguhan, perpindahan terjadi karena sisi geser pulley bergerak merapat atau merenggang dan belt ikut naik atau turun di alurnya.
      </p>
    </div>
  );
}
