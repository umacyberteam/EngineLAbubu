import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { troubles } from "@/data/troubles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/kalkulasi-mesin", "/artikel", "/troubleshooting", "/panduan-kirian"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...articles.map((a) => ({ url: `${SITE_URL}/artikel/${a.slug}` })),
    ...troubles.map((t) => ({ url: `${SITE_URL}/troubleshooting/${t.slug}` })),
  ];
}
