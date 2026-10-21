"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  chamberForRatio,
  compression,
  displacement,
  finalRatio,
  octaneHint,
  parseNum,
  tireDiameter,
  topSpeed,
} from "@/lib/calc";
import { fmt0, fmt1, fmt2, fmt3 } from "@/lib/format";
import { CalcHead, Details, Facts, Field, Readout, Row2 } from "./ui";
import { CylinderSvg, GaugeSvg, SprocketSvg } from "./svgs";

/* ---------- Hook: satu gerakan piston saat halaman dibuka ---------- */
function useIntro(): number {
  const [t, setT] = useState(1);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let start: number | null = null;
    const dur = 1100;
    setT(0);
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setT(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return t;
}

/* ---------- Kalkulator CC ---------- */
const CHIPS = [
  { label: "110 cc", bore: "50", stroke: "55,6" },
  { label: "125 cc", bore: "52,4", stroke: "57,9" },
  { label: "155 cc", bore: "58", stroke: "58,7" },
];

type CylinderProps = {
  bore: string;
  stroke: string;
  onBore: (v: string) => void;
  onStroke: (v: string) => void;
  layout: "hero" | "section";
  idPrefix: string;
};

export function CylinderCalc({ bore, stroke, onBore, onStroke, layout, idPrefix }: CylinderProps) {
  const t = useIntro();
  const b = parseNum(bore);
  const s = parseNum(stroke);
  const valid = b > 0 && s > 0;
  const cc = valid ? displacement(b, s) : NaN;

  const typeText = (() => {
    if (!valid) return "";
    const ratio = b / s;
    const kind =
      ratio > 1.03
        ? "Oversquare (bore lebih besar dari langkah): condong ke putaran tinggi."
        : ratio < 0.97
          ? "Undersquare (langkah lebih panjang dari bore): condong ke torsi putaran rendah."
          : "Square (bore ≈ langkah): karakter seimbang.";
    return `${kind} Rasio bore:langkah ${fmt2(ratio)}.`;
  })();

  const controls = (
    <>
      <div className="mb-4 mt-3.5 flex flex-wrap gap-2" role="group" aria-label="Contoh ukuran umum">
        {CHIPS.map((c) => (
          <button
            key={c.label}
            type="button"
            className="chip"
            aria-pressed={parseNum(c.bore) === b && parseNum(c.stroke) === s}
            onClick={() => {
              onBore(c.bore);
              onStroke(c.stroke);
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
      <Row2>
        <Field id={`${idPrefix}-bore`} label="Diameter piston (bore)" unit="mm" value={bore} onChange={onBore} />
        <Field id={`${idPrefix}-stroke`} label="Langkah (stroke)" unit="mm" value={stroke} onChange={onStroke} />
      </Row2>
    </>
  );

  const result = (
    <>
      <Readout label="Kapasitas silinder" value={valid ? (cc >= 100 ? fmt1(cc) : fmt2(cc)) : "—"} unit="cc" />
      <Facts items={[{ label: "Dalam liter", value: valid ? `${fmt3(cc / 1000)} liter` : "—" }]} />
      <p className="hint">{typeText}</p>
      <p className={"hint" + (valid ? "" : " hint-error")}>
        {valid ? "Pakai satuan milimeter. Koma atau titik sama-sama bisa." : "Isi bore dan langkah dengan angka lebih dari 0."}
      </p>
    </>
  );

  const svg = (
    <div className={valid ? "" : "opacity-40"}>
      <CylinderSvg bore={valid ? b : 52.4} stroke={valid ? s : 57.9} t={valid ? t : 1} />
    </div>
  );

  if (layout === "hero") {
    return (
      <div className="panel" aria-label="Kalkulator CC singkat">
        {svg}
        {result}
        {controls}
      </div>
    );
  }
  return (
    <div className="grid items-start gap-[clamp(20px,4vw,48px)] md:grid-cols-[0.9fr_1.1fr]">
      <div className="panel">
        {controls}
        {result}
        <p className="hint mt-2">Untuk mesin multisilinder, kalikan hasilnya dengan jumlah silinder.</p>
      </div>
      <div>{svg}</div>
    </div>
  );
}

/* Pembungkus untuk beranda */
export function HeroCalc() {
  const [bore, setBore] = useState("52,4");
  const [stroke, setStroke] = useState("57,9");
  return <CylinderCalc layout="hero" idPrefix="hero" bore={bore} stroke={stroke} onBore={setBore} onStroke={setStroke} />;
}

/* ---------- Rasio kompresi ---------- */
function CompressionCalc({ ccBore, ccStroke }: { ccBore: string; ccStroke: string }) {
  const [bore, setBore] = useState("52,4");
  const [stroke, setStroke] = useState("57,9");
  const [chamber, setChamber] = useState("13,9");
  const [gasket, setGasket] = useState("");
  const [deck, setDeck] = useState("");
  const [piston, setPiston] = useState("");
  const [target, setTarget] = useState("");

  const bn = parseNum(bore);
  const sn = parseNum(stroke);
  const cn = parseNum(chamber);
  const opt = (v: string) => {
    const n = parseNum(v);
    return Number.isNaN(n) ? 0 : n;
  };
  const required = bn > 0 && sn > 0 && cn > 0;
  const r = required
    ? compression({ bore: bn, stroke: sn, chamberCc: cn, gasketMm: opt(gasket), deckMm: opt(deck), pistonCc: opt(piston) })
    : null;

  let error = "Semua volume dalam cc, ukuran tinggi dalam mm.";
  let isError = false;
  if (!required) {
    error = "Isi bore, langkah, dan volume ruang bakar dengan angka lebih dari 0.";
    isError = true;
  } else if (!r) {
    error = "Total volume ruang bakar harus lebih dari 0. Cek isi cekungan piston (minus berarti kubah).";
    isError = true;
  }

  let need = "";
  if (r) {
    const tg = parseNum(target);
    if (tg > 1) {
      const needed = chamberForRatio(r.vd, tg);
      const diff = needed - r.vc;
      need = `Untuk rasio ${fmt2(tg)}:1, volume ruang bakar total harus ${fmt2(needed)} cc. `;
      if (Math.abs(diff) < 0.005) need += "Sudah pas.";
      else if (diff < 0) need += `Kurangi ${fmt2(-diff)} cc (misalnya bubut kepala silinder atau paking lebih tipis).`;
      else need += `Tambah ${fmt2(diff)} cc.`;
    }
  }

  const share = r ? (r.vc / (r.vd + r.vc)) * 100 : 10;

  return (
    <div className="grid items-start gap-[clamp(20px,4vw,48px)] md:grid-cols-[0.9fr_1.1fr]">
      <div className="panel">
        <Row2>
          <Field id="k-bore" label="Diameter piston (bore)" unit="mm" value={bore} onChange={setBore} />
          <Field id="k-stroke" label="Langkah (stroke)" unit="mm" value={stroke} onChange={setStroke} />
        </Row2>
        <button
          type="button"
          className="chip mb-3.5"
          onClick={() => {
            setBore(ccBore);
            setStroke(ccStroke);
          }}
        >
          Ambil dari kalkulator CC di atas
        </button>
        <Field
          id="k-chamber"
          label="Volume ruang bakar"
          unit="cc"
          value={chamber}
          onChange={setChamber}
          hint="Ruang di kepala silinder saat piston di titik mati atas, tidak termasuk paking dan piston (diisi di kolom tambahan)."
        />
        <Details summary="Kolom tambahan untuk hasil lebih teliti">
          <Field id="k-gasket" label="Tebal paking kepala silinder" unit="mm" value={gasket} onChange={setGasket} required={false} hint="Kosongkan bila sudah termasuk di volume ruang bakar." />
          <Field id="k-deck" label="Celah piston di titik mati atas" unit="mm" value={deck} onChange={setDeck} required={false} hint="Jarak puncak piston ke bidang atas blok. Minus bila piston menonjol." />
          <Field id="k-piston" label="Volume cekungan piston" unit="cc" value={piston} onChange={setPiston} required={false} hint="Isi minus bila piston berkubah." />
        </Details>
        <Field id="k-target" label="Target rasio kompresi (opsional)" unit=": 1" value={target} onChange={setTarget} required={false} hint="Isi bila ingin tahu ruang bakar yang dibutuhkan, misalnya 11." />
      </div>

      <div className="panel">
        <Readout label="Rasio kompresi" value={r ? fmt2(r.ratio) : "—"} unit=": 1" />
        <div className="my-1.5 flex h-[38px] overflow-hidden rounded-md shadow-[0_0_0_1px_var(--color-line)]" aria-hidden="true">
          <div className="min-w-1 bg-signal" style={{ width: `${share}%` }} />
          <div className="flex-1 bg-blue" />
        </div>
        <div className="mb-3.5 flex flex-wrap justify-between gap-3 text-[0.85rem] font-semibold">
          <span>
            <i className="mr-1.5 inline-block h-2.5 w-2.5 rounded-[2px] bg-signal" />
            Ruang bakar {r ? fmt2(r.vc) : "—"} cc
          </span>
          <span>
            <i className="mr-1.5 inline-block h-2.5 w-2.5 rounded-[2px] bg-blue" />
            Volume langkah {r ? fmt2(r.vd) : "—"} cc
          </span>
        </div>
        <Facts
          items={[
            { label: "Volume langkah (CC)", value: r ? `${fmt2(r.vd)} cc` : "—" },
            { label: "Volume ruang bakar total", value: r ? `${fmt2(r.vc)} cc` : "—" },
          ]}
        />
        {r ? (
          <p className="mt-3 rounded-lg bg-panel px-3.5 py-2.5 text-[0.95rem] shadow-[0_0_0_1px_var(--color-line)]">
            {octaneHint(r.ratio)}
          </p>
        ) : null}
        <p className="hint mt-3">{need}</p>
        <p className={"hint mt-2" + (isError ? " hint-error" : "")}>{error}</p>
      </div>
    </div>
  );
}

/* ---------- Rasio gear ---------- */
function GearCalc({ onUseRatio }: { onUseRatio: (total: number) => void }) {
  const [front, setFront] = useState("14");
  const [rear, setRear] = useState("36");
  const [primary, setPrimary] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [front2, setFront2] = useState("");
  const [rear2, setRear2] = useState("");

  const fr = Math.round(parseNum(front));
  const rr = Math.round(parseNum(rear));
  const valid = fr > 0 && rr > 0;
  const ratio = valid ? finalRatio(fr, rr) : NaN;
  const p = parseNum(primary);
  const g = parseNum(gearbox);
  const total = valid ? ratio * (p > 0 ? p : 1) * (g > 0 ? g : 1) : NaN;

  let compare = "";
  const f2v = parseNum(front2);
  const r2v = parseNum(rear2);
  if (valid && f2v > 0 && r2v > 0) {
    const ratio2 = finalRatio(f2v, r2v);
    const k = ratio2 / ratio;
    const pct = (k - 1) * 100;
    const spd = (1 / k - 1) * 100;
    if (Math.abs(pct) < 0.05) compare = "Rasio sama persis dengan setelan awal.";
    else if (pct > 0)
      compare = `Rasio naik ${fmt1(pct)}% (jadi ${fmt3(ratio2)}): tarikan awal lebih galak, top speed teoretis turun sekitar ${fmt1(-spd)}% bila RPM batas tetap.`;
    else
      compare = `Rasio turun ${fmt1(-pct)}% (jadi ${fmt3(ratio2)}): tarikan awal lebih ringan, top speed teoretis naik sekitar ${fmt1(spd)}% bila mesin masih kuat menarik.`;
  }

  return (
    <div className="grid items-start gap-[clamp(20px,4vw,48px)] md:grid-cols-[0.9fr_1.1fr]">
      <div className="panel">
        <Row2>
          <Field id="g-front" label="Gigi depan (gear kecil)" unit="gigi" value={front} onChange={setFront} />
          <Field id="g-rear" label="Gigi belakang (gear besar)" unit="gigi" value={rear} onChange={setRear} />
        </Row2>
        <Details summary="Rasio total dan bandingkan setelan">
          <Row2>
            <Field id="g-primary" label="Rasio primer" unit=": 1" value={primary} onChange={setPrimary} required={false} hint="Dari buku servis." />
            <Field id="g-gearbox" label="Rasio gigi transmisi" unit=": 1" value={gearbox} onChange={setGearbox} required={false} hint="Gigi yang dipakai." />
          </Row2>
          <p className="hint mb-2.5">Kosongkan bila tidak dipakai. Untuk membandingkan, isi gigi setelan baru:</p>
          <Row2>
            <Field id="g-front2" label="Gigi depan baru" unit="gigi" value={front2} onChange={setFront2} required={false} />
            <Field id="g-rear2" label="Gigi belakang baru" unit="gigi" value={rear2} onChange={setRear2} required={false} />
          </Row2>
        </Details>
      </div>

      <div className="panel">
        <Readout label="Rasio gear akhir" value={valid ? fmt3(ratio) : "—"} unit=": 1" />
        <SprocketSvg front={valid ? Math.min(fr, 80) : 14} rear={valid ? Math.min(rr, 80) : 36} />
        <Facts
          items={[
            { label: "Rasio total", value: valid ? `${fmt3(total)} : 1` : "—" },
            { label: "Artinya", value: valid ? `${fmt2(total)} putaran mesin per 1 putaran roda` : "—" },
          ]}
        />
        {compare ? (
          <p className="mb-3 rounded-lg bg-panel px-3.5 py-2.5 text-[0.95rem] shadow-[0_0_0_1px_var(--color-line)]">{compare}</p>
        ) : null}
        <p className={"hint" + (valid ? "" : " hint-error")}>
          {valid
            ? "Jumlah gigi: depan = gear kecil di mesin, belakang = gear besar di roda."
            : "Isi jumlah gigi depan dan belakang dengan angka lebih dari 0."}
        </p>
        <button type="button" className="chip mt-3" disabled={!valid} onClick={() => onUseRatio(total)}>
          Pakai rasio total ini di kalkulator top speed
        </button>
      </div>
    </div>
  );
}

/* ---------- Top speed ---------- */
function SpeedCalc({ ratio, onRatio }: { ratio: string; onRatio: (v: string) => void }) {
  const [rpm, setRpm] = useState("9000");
  const [tw, setTw] = useState("90");
  const [ta, setTa] = useState("90");
  const [tr, setTr] = useState("14");

  const v = [parseNum(rpm), parseNum(ratio), parseNum(tw), parseNum(ta), parseNum(tr)];
  const valid = v.every((n) => n > 0);
  const d = valid ? tireDiameter(v[2], v[3], v[4]) : NaN;
  const kmh = valid ? topSpeed(v[0], v[1], d) : NaN;

  return (
    <div className="grid items-start gap-[clamp(20px,4vw,48px)] md:grid-cols-[0.9fr_1.1fr]">
      <div className="panel">
        <Field id="s-rpm" label="Putaran mesin (RPM)" unit="rpm" value={rpm} onChange={setRpm} />
        <Field id="s-ratio" label="Rasio gear total" unit=": 1" value={ratio} onChange={onRatio} hint="Dari mesin sampai roda." />
        <Details summary="Ukuran ban">
          <div className="grid grid-cols-3 gap-2.5">
            <Field id="s-tw" label="Lebar" unit="mm" value={tw} onChange={setTw} />
            <Field id="s-ta" label="Profil" unit="%" value={ta} onChange={setTa} />
            <Field id="s-tr" label="Ring" unit="inci" value={tr} onChange={setTr} />
          </div>
          <p className="hint">Contoh ban 90/90-14 berarti lebar 90 mm, profil 90%, ring 14 inci.</p>
        </Details>
        <div className="rounded-lg bg-panel px-[18px] py-3.5 text-[0.92rem] shadow-[0_0_0_1px_var(--color-line)]">
          <strong className="mb-0.5 block">Motor matic?</strong>
          Isi rasio total dengan rasio CVT tertinggi (di kecepatan maksimum) dikali reduksi gear akhir.
        </div>
      </div>

      <div className="panel">
        <Readout label="Kecepatan teoretis" value={valid ? fmt1(kmh) : "—"} unit="km/jam" />
        <GaugeSvg speed={valid ? kmh : 0} />
        <Facts
          items={[
            { label: "Dalam meter per detik", value: valid ? `${fmt1(kmh / 3.6)} m/s` : "—" },
            { label: "Diameter ban", value: valid ? `${fmt0(d)} mm (keliling ${fmt2((Math.PI * d) / 1000)} m)` : "—" },
          ]}
        />
        <p className={"hint" + (valid ? "" : " hint-error")}>
          {valid
            ? "Hasil teoretis: tanpa slip, tanpa hambatan angin. Di jalan biasanya lebih rendah."
            : "Isi RPM dan rasio gear dengan angka lebih dari 0."}
        </p>
      </div>
    </div>
  );
}

/* ---------- Halaman kalkulasi ---------- */
export function Calculators() {
  const [ccBore, setCcBore] = useState("52,4");
  const [ccStroke, setCcStroke] = useState("57,9");
  const [speedRatio, setSpeedRatio] = useState("9");

  const jump = [
    { href: "#cc", label: "CC" },
    { href: "#kompresi", label: "Rasio kompresi" },
    { href: "#rasio-gear", label: "Rasio gear" },
    { href: "#top-speed", label: "Top speed" },
  ];

  const section = "scroll-mt-16 border-b border-line py-[clamp(36px,6vw,64px)] last:border-b-0";

  return (
    <>
      <nav aria-label="Loncat ke kalkulator" className="no-print sticky top-0 z-20 border-b border-line bg-paper">
        <div className="wrap flex gap-2 overflow-x-auto py-2.5">
          {jump.map((j) => (
            <a
              key={j.href}
              href={j.href}
              className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.92rem] font-bold text-ink no-underline shadow-[inset_0_0_0_1.5px_var(--color-line)] hover:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
            >
              {j.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="cc" className={section}>
        <div className="wrap">
          <CalcHead title="Kalkulator CC">
            Masukkan diameter piston (bore) dan langkah (stroke) dalam milimeter. Kapasitas silinder langsung muncul.
          </CalcHead>
          <CylinderCalc layout="section" idPrefix="cc" bore={ccBore} stroke={ccStroke} onBore={setCcBore} onStroke={setCcStroke} />
        </div>
      </section>

      <section id="kompresi" className={section}>
        <div className="wrap">
          <CalcHead title="Kalkulator rasio kompresi">
            Hitung rasio kompresi statis dari ukuran silinder dan volume ruang bakar. Isi kolom tambahan bila kamu ingin hasil yang lebih teliti.
          </CalcHead>
          <CompressionCalc ccBore={ccBore} ccStroke={ccStroke} />
          <p className="mt-[18px] max-w-[70ch] text-[0.9rem] text-muted">
            Saran oktan hanya patokan kasar. Ikuti rekomendasi pabrikan, dan baca{" "}
            <Link href="/artikel/hubungan-rasio-kompresi-dengan-oktan-bensin" className="text-blue">
              hubungan rasio kompresi dengan oktan bensin
            </Link>
            . Volume ruang bakar bisa diukur dengan buret dan cairan (cc wheeling) atau dilihat di spesifikasi kepala silinder.
          </p>
        </div>
      </section>

      <section id="rasio-gear" className={section}>
        <div className="wrap">
          <CalcHead title="Kalkulator rasio gear">
            Hitung rasio gear sekunder dari jumlah gigi depan dan belakang. Tambahkan rasio primer dan transmisi bila ingin rasio total.
          </CalcHead>
          <GearCalc
            onUseRatio={(total) => {
              setSpeedRatio(fmt3(total).replace(/\./g, ""));
              window.location.hash = "top-speed";
            }}
          />
        </div>
      </section>

      <section id="top-speed" className={section}>
        <div className="wrap">
          <CalcHead title="Kalkulator top speed">
            Masukkan RPM dan rasio gear total. Ukuran ban sudah terisi contoh dan bisa diubah di kolom tambahan.
          </CalcHead>
          <SpeedCalc ratio={speedRatio} onRatio={setSpeedRatio} />
          <p className="mt-[18px] max-w-[70ch] text-[0.9rem] text-muted">
            Hasil adalah kecepatan di putaran mesin yang kamu masukkan, tanpa slip dan tanpa hambatan angin. Pada kenyataannya tenaga mesin harus cukup untuk menahan hambatan itu, jadi RPM yang tercapai di jalan bisa lebih rendah.
          </p>
        </div>
      </section>
    </>
  );
}
