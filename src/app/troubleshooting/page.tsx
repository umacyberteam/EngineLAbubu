import type { Metadata } from "next";
import { PageTitle, PostList } from "@/components/blocks";
import { troubles } from "@/data/troubles";

export const metadata: Metadata = {
  title: "Troubleshooting motor",
  description: "Kenapa motor susah hidup, brebet, cepat panas, bergetar, atau kehilangan tenaga? Penyebab dan cara cek.",
};

export default function TroubleshootingIndex() {
  return (
    <>
      <PageTitle
        title="Troubleshooting motor"
        lede="Gejala yang sering muncul, penyebabnya dari yang paling umum, cara mengeceknya, dan solusinya."
      />
      <div className="wrap pb-16">
        <div className="mt-6">
          <PostList
            items={troubles.map((t) => ({
              href: `/troubleshooting/${t.slug}`,
              title: t.title,
              desc: t.desc,
              meta: `Penyebab yang sering: ${t.causes
                .slice(0, 3)
                .map((c) => c.name.toLowerCase())
                .join(", ")}`,
            }))}
          />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.9rem] text-muted">
          Panduan ini membantu menelusuri penyebab awal. Untuk pekerjaan yang menyangkut rem, kelistrikan bertegangan tinggi, atau bagian dalam mesin, percayakan ke bengkel.
        </p>
      </div>
    </>
  );
}
