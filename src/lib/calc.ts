/* Fungsi hitung murni Engine Lab. Tanpa React, bisa dites terpisah. */

const PI = Math.PI;

/** Terima "52,4" maupun "52.4". Kembalikan NaN bila kosong atau bukan angka. */
export function parseNum(v: string | null | undefined): number {
  if (v === null || v === undefined) return NaN;
  let s = String(v).trim().replace(/\s/g, "");
  if (s === "") return NaN;
  if (s.includes(",") && s.includes(".")) s = s.replace(/\./g, "");
  s = s.replace(",", ".");
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

/** Volume langkah (cc) dari bore dan stroke dalam mm, satu silinder. */
export function displacement(bore: number, stroke: number): number {
  return ((PI / 4) * bore * bore * stroke) / 1000;
}

export type CompressionInput = {
  bore: number;
  stroke: number;
  chamberCc: number;
  gasketMm?: number;
  deckMm?: number;
  pistonCc?: number;
};

export type CompressionResult = {
  vd: number;
  vc: number;
  ratio: number;
};

/** Rasio kompresi statis. Volume dalam cc, tinggi dalam mm. */
export function compression(o: CompressionInput): CompressionResult | null {
  const vd = displacement(o.bore, o.stroke);
  const area = ((PI / 4) * o.bore * o.bore) / 1000; // cc per mm tinggi
  const vc = o.chamberCc + area * (o.gasketMm ?? 0) + area * (o.deckMm ?? 0) + (o.pistonCc ?? 0);
  if (!(vc > 0)) return null;
  return { vd, vc, ratio: (vd + vc) / vc };
}

/** Volume ruang bakar total yang dibutuhkan untuk mencapai rasio target. */
export function chamberForRatio(vd: number, target: number): number {
  return vd / (target - 1);
}

/** Saran oktan kasar dari rasio kompresi statis. */
export function octaneHint(cr: number): string {
  if (cr < 9.0) return "RON 90 umumnya sudah cukup.";
  if (cr < 10.5) return "RON 92 umumnya jadi batas aman.";
  if (cr < 12.0)
    return "Disarankan RON 92 sampai 95 tergantung setelan pengapian; mesin karburator dengan setelan agresif lebih aman di RON 95.";
  return "Rasio setinggi ini biasanya butuh RON 98 atau lebih, sering untuk balap.";
}

/** Rasio gear sekunder: gigi belakang dibagi gigi depan. */
export function finalRatio(front: number, rear: number): number {
  return rear / front;
}

/** Diameter luar ban (mm) dari ukuran lebar/profil-ring, misalnya 90/90-14. */
export function tireDiameter(width: number, aspect: number, rim: number): number {
  return rim * 25.4 + (2 * width * aspect) / 100;
}

/** Kecepatan teoretis (km/jam) dari RPM, rasio total, dan diameter ban (mm). */
export function topSpeed(rpm: number, ratio: number, tireMm: number): number {
  const circumM = (PI * tireMm) / 1000;
  return (rpm * circumM * 60) / (ratio * 1000);
}

export type BeltLine = { x1: number; y1: number; x2: number; y2: number };

/** Garis singgung luar dua lingkaran sejajar sumbu X (rantai atau van belt). */
export function beltLines(
  x1: number,
  r1: number,
  x2: number,
  r2: number,
  y: number,
): { top: BeltLine; bottom: BeltLine } {
  const s = (r1 - r2) / (x2 - x1);
  const c = Math.sqrt(1 - s * s);
  return {
    top: { x1: x1 + r1 * s, y1: y - r1 * c, x2: x2 + r2 * s, y2: y - r2 * c },
    bottom: { x1: x1 + r1 * s, y1: y + r1 * c, x2: x2 + r2 * s, y2: y + r2 * c },
  };
}
