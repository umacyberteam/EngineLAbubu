import type { ReactNode } from "react";
import { parseNum } from "@/lib/calc";

export function Field({
  id,
  label,
  value,
  onChange,
  unit,
  hint,
  required = true,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  unit?: string;
  hint?: string;
  required?: boolean;
}) {
  const n = parseNum(value);
  const invalid = value.trim() !== "" && (required ? !(n > 0) : Number.isNaN(n));
  return (
    <div className="mb-3.5">
      <label htmlFor={id} className="mb-1 block text-[0.95rem] font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={invalid || undefined}
          className={"input" + (unit ? " pr-14" : "")}
        />
        {unit ? (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted">
            {unit}
          </span>
        ) : null}
      </div>
      {hint ? <p className="mt-1 text-[0.85rem] text-muted">{hint}</p> : null}
    </div>
  );
}

export function Row2({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 items-end gap-x-3 min-[420px]:grid-cols-2">{children}</div>;
}

export function Readout({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="mb-3.5 rounded-lg bg-signal px-[18px] pb-3 pt-3.5 text-ink" aria-live="polite">
      <div className="text-[0.92rem] font-semibold">{label}</div>
      <div className="text-[clamp(2.2rem,6vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em] tabular-nums">
        {value}
        {unit ? <span className="ml-1.5 text-[0.45em] font-bold tracking-normal">{unit}</span> : null}
      </div>
    </div>
  );
}

export function Facts({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ul className="m-0 mb-3 list-none p-0">
      {items.map((it) => (
        <li key={it.label} className="flex justify-between gap-4 border-b border-line py-2 tabular-nums">
          <span className="text-muted">{it.label}</span>
          <strong className="text-right">{it.value}</strong>
        </li>
      ))}
    </ul>
  );
}

export function Details({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="group mb-3.5 mt-1.5">
      <summary className="cursor-pointer py-1.5 font-bold text-blue group-open:mb-2">{summary}</summary>
      {children}
    </details>
  );
}

export function CalcHead({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-[22px] max-w-[62ch]">
      <h2 className="mb-2 text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold">{title}</h2>
      <p className="m-0 text-muted">{children}</p>
    </div>
  );
}
