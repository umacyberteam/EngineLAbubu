import { beltLines } from "@/lib/calc";
import { fmt1 } from "@/lib/format";

/* ---------- Potongan silinder ---------- */
export function CylinderSvg({ bore, stroke, t = 1 }: { bore: number; stroke: number; t?: number }) {
  const k = 250 / Math.max(bore, stroke, 30);
  const w = bore * k;
  const h = stroke * k;
  const cx = 170;
  const x0 = cx - w / 2;
  const x1 = cx + w / 2;
  const tdc = 92;
  const bdc = tdc + h;
  const pistonH = 66;
  const wall = 14;
  const py = tdc + (bdc - tdc) * t;
  const bottom = bdc + pistonH + 12;
  const dy = tdc - 70;
  const dx = x1 + wall + 26;

  return (
    <svg
      viewBox={`0 0 400 ${bottom + 8}`}
      className="block h-auto w-full"
      role="img"
      aria-label={`Potongan silinder dengan bore ${fmt1(bore)} mm dan langkah ${fmt1(stroke)} mm`}
    >
      <rect x={x0} y={tdc} width={w} height={bottom - tdc} fill="#fff" />
      <rect x={x0} y={tdc} width={w} height={h} fill="#f4c20d" opacity={0.55} />
      <rect x={x0 + 2} y={tdc} width={w - 4} height={pistonH} fill="none" stroke="#566870" strokeWidth={1.5} strokeDasharray="5 4" />
      <rect x={x0 + 2} y={py} width={w - 4} height={pistonH} fill="#9fb0b7" stroke="#16252d" strokeWidth={2} />
      {[1, 2, 3].map((i) => (
        <line key={i} x1={x0 + 2} x2={x1 - 2} y1={py + i * 9} y2={py + i * 9} stroke="#16252d" strokeWidth={1.6} />
      ))}
      <line x1={x0 + 2} x2={x1 - 2} y1={py + 44} y2={py + 44} stroke="#16252d" strokeWidth={1} opacity={0.4} />
      <circle cx={cx} cy={py + 48} r={6} fill="#e6eaec" stroke="#16252d" strokeWidth={2} />

      <rect x={x0 - wall} y={tdc - 38} width={wall} height={bottom - tdc + 38} fill="#16252d" />
      <rect x={x1} y={tdc - 38} width={wall} height={bottom - tdc + 38} fill="#16252d" />
      <rect x={x0 - wall} y={tdc - 38} width={w + wall * 2} height={38} fill="#16252d" />
      <rect x={cx - 5} y={tdc - 56} width={10} height={20} fill="#566870" />

      <g stroke="#1f55c7" strokeWidth={1.6}>
        <line x1={x0} x2={x1} y1={dy} y2={dy} />
        <line x1={x0} x2={x0} y1={dy - 6} y2={dy + 6} />
        <line x1={x1} x2={x1} y1={dy - 6} y2={dy + 6} />
      </g>
      <text x={cx} y={dy - 10} textAnchor="middle" fontSize={15} fontWeight={700} fill="#1f55c7">
        Bore {fmt1(bore)} mm
      </text>

      <g stroke="#1f55c7" strokeWidth={1.6}>
        <line x1={dx} x2={dx} y1={tdc} y2={bdc} />
        <line x1={dx - 6} x2={dx + 6} y1={tdc} y2={tdc} />
        <line x1={dx - 6} x2={dx + 6} y1={bdc} y2={bdc} />
      </g>
      <text
        transform={`translate(${dx + 22} ${(tdc + bdc) / 2}) rotate(90)`}
        textAnchor="middle"
        fontSize={15}
        fontWeight={700}
        fill="#1f55c7"
      >
        Langkah {fmt1(stroke)} mm
      </text>
    </svg>
  );
}

/* ---------- Dua gear + rantai ---------- */
function Ring({ cx, y, r, n }: { cx: number; y: number; r: number; n: number }) {
  const dash = (2 * Math.PI * r) / n / 2;
  return (
    <g>
      <circle cx={cx} cy={y} r={r} fill="#f6f8f8" stroke="#16252d" strokeWidth={2} />
      <circle cx={cx} cy={y} r={r + 2} fill="none" stroke="#16252d" strokeWidth={6} strokeDasharray={`${dash} ${dash}`} />
      <circle cx={cx} cy={y} r={4} fill="#16252d" />
    </g>
  );
}

export function SprocketSvg({ front, rear }: { front: number; rear: number }) {
  const k = 62 / Math.max(front, rear, 20);
  const rF = front * k;
  const rR = rear * k;
  const xF = 80;
  const xR = 300;
  const y = 90;
  const b = beltLines(xF, rF, xR, rR, y);
  return (
    <svg viewBox="0 0 380 190" className="block h-auto w-full" role="img" aria-label="Dua gear dihubungkan rantai, ukurannya mengikuti jumlah gigi">
      <line {...b.top} stroke="#1f55c7" strokeWidth={3} strokeDasharray="6 3" />
      <line {...b.bottom} stroke="#1f55c7" strokeWidth={3} strokeDasharray="6 3" />
      <Ring cx={xF} y={y} r={rF} n={front} />
      <Ring cx={xR} y={y} r={rR} n={rear} />
      <text x={xF} y={176} textAnchor="middle" fontSize={14} fontWeight={700} fill="#16252d">
        Depan {front}T
      </text>
      <text x={xR} y={176} textAnchor="middle" fontSize={14} fontWeight={700} fill="#16252d">
        Belakang {rear}T
      </text>
    </svg>
  );
}

/* ---------- Penunjuk kecepatan ---------- */
export function GaugeSvg({ speed }: { speed: number }) {
  const max = 200;
  const cx = 150;
  const cy = 140;
  const r = 105;
  const s = Math.max(0, Math.min(speed, max));
  const pt = (v: number): [number, number] => {
    const a = Math.PI * (1 - v / max);
    return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
  };
  const p0 = pt(0);
  const p1 = pt(s);
  const pEnd = pt(max);
  const needle = pt(s);
  const ticks = Array.from({ length: 11 }, (_, i) => i * 20);

  return (
    <svg viewBox="0 -10 300 170" className="block h-auto w-full" role="img" aria-label={`Penunjuk kecepatan ${fmt1(speed)} km/jam`}>
      <path d={`M ${p0[0]} ${p0[1]} A ${r} ${r} 0 0 1 ${pEnd[0]} ${pEnd[1]}`} fill="none" stroke="#b7c2c7" strokeWidth={16} />
      {s > 0 ? (
        <path d={`M ${p0[0]} ${p0[1]} A ${r} ${r} 0 0 1 ${p1[0]} ${p1[1]}`} fill="none" stroke="#f4c20d" strokeWidth={16} />
      ) : null}
      {ticks.map((v) => {
        const a = Math.PI * (1 - v / max);
        const c = Math.cos(a);
        const sn = Math.sin(a);
        return (
          <g key={v}>
            <line x1={cx + (r + 14) * c} y1={cy - (r + 14) * sn} x2={cx + (r + 22) * c} y2={cy - (r + 22) * sn} stroke="#16252d" strokeWidth={2} />
            <text x={cx + (r + 36) * c} y={cy - (r + 36) * sn + 4} textAnchor="middle" fontSize={11} fontWeight={600} fill="#566870">
              {v}
            </text>
          </g>
        );
      })}
      <line
        x1={cx}
        y1={cy}
        x2={cx + (needle[0] - cx) * 0.88}
        y2={cy + (needle[1] - cy) * 0.88}
        stroke="#16252d"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={9} fill="#16252d" />
    </svg>
  );
}

/* ---------- Diagram CVT ---------- */
export function CvtSvg({ t }: { t: number }) {
  const r1 = 24 + 26 * t;
  const r2 = 60 - 20 * t;
  const x1 = 110;
  const x2 = 330;
  const y = 120;
  const b = beltLines(x1, r1, x2, r2, y);
  return (
    <svg viewBox="0 0 440 240" className="block h-auto w-full" role="img" aria-label="Dua pulley CVT dan van belt yang berubah posisi">
      <circle cx={x1} cy={y} r={62} fill="none" stroke="#b7c2c7" strokeWidth={1.5} strokeDasharray="4 4" />
      <circle cx={x2} cy={y} r={62} fill="none" stroke="#b7c2c7" strokeWidth={1.5} strokeDasharray="4 4" />
      <line {...b.top} stroke="#16252d" strokeWidth={7} strokeLinecap="round" />
      <line {...b.bottom} stroke="#16252d" strokeWidth={7} strokeLinecap="round" />
      <circle cx={x1} cy={y} r={r1} fill="#f4c20d" stroke="#16252d" strokeWidth={7} />
      <circle cx={x2} cy={y} r={r2} fill="#9fb0b7" stroke="#16252d" strokeWidth={7} />
      <circle cx={x1} cy={y} r={5} fill="#16252d" />
      <circle cx={x2} cy={y} r={5} fill="#16252d" />
      <text x={x1} y={206} textAnchor="middle" fontSize={14} fontWeight={700} fill="#16252d">Pulley depan (primer)</text>
      <text x={x1} y={224} textAnchor="middle" fontSize={12} fill="#566870">ada roller di dalamnya</text>
      <text x={x2} y={206} textAnchor="middle" fontSize={14} fontWeight={700} fill="#16252d">Pulley belakang (sekunder)</text>
      <text x={x2} y={224} textAnchor="middle" fontSize={12} fill="#566870">ada per CVT di dalamnya</text>
      <text x={220} y={34} textAnchor="middle" fontSize={13} fontWeight={700} fill="#16252d">Van belt</text>
    </svg>
  );
}
