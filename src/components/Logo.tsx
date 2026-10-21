export function Logo({ className = "h-8 w-[26px] flex-none" }: { className?: string }) {
  return (
    <svg viewBox="0 0 26 32" aria-hidden="true" className={className}>
      <rect x="3" y="2" width="20" height="26" rx="2" fill="#f4c20d" stroke="#16252d" strokeWidth="2.4" />
      <line x1="3" x2="23" y1="8" y2="8" stroke="#16252d" strokeWidth="2.2" />
      <line x1="3" x2="23" y1="12" y2="12" stroke="#16252d" strokeWidth="2.2" />
      <line x1="3" x2="23" y1="16" y2="16" stroke="#16252d" strokeWidth="2.2" />
      <circle cx="13" cy="22" r="2.6" fill="#16252d" />
    </svg>
  );
}
