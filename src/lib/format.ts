const make = (digits: number) =>
  new Intl.NumberFormat("id-ID", { minimumFractionDigits: digits, maximumFractionDigits: digits });

const f0 = make(0);
const f1 = make(1);
const f2 = make(2);
const f3 = make(3);

export const fmt0 = (n: number) => f0.format(n);
export const fmt1 = (n: number) => f1.format(n);
export const fmt2 = (n: number) => f2.format(n);
export const fmt3 = (n: number) => f3.format(n);
