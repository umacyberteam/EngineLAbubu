export const SITE_NAME = "Engine Lab";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const NAV = [
  { href: "/kalkulasi-mesin", label: "Kalkulasi mesin" },
  { href: "/artikel", label: "Artikel" },
  { href: "/troubleshooting", label: "Troubleshooting" },
  { href: "/panduan-kirian", label: "Panduan kirian" },
] as const;
