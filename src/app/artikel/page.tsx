import type { Metadata } from "next";
import { PageTitle, PostList } from "@/components/blocks";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artikel permesinan motor",
  description: "Artikel tentang CC, bore up, stroke up, rasio kompresi, oktan bensin, dan knocking pada mesin motor.",
};

const ORDER = ["Kapasitas mesin", "Kompresi mesin", "Bensin dan oktan", "Masalah mesin"];

export default function ArtikelIndex() {
  return (
    <>
      <PageTitle title="Artikel" lede="Penjelasan permesinan motor dari dasar: CC, kompresi, sampai oktan bensin." />
      <div className="wrap pb-16">
        {ORDER.map((cat) => {
          const items = articles.filter((a) => a.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat} className="mt-9">
              <h2 className="mb-2 text-[1.25rem] font-extrabold">{cat}</h2>
              <PostList
                items={items.map((a) => ({
                  href: `/artikel/${a.slug}`,
                  title: a.title,
                  desc: a.desc,
                  meta: `${a.minutes} menit baca`,
                }))}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
