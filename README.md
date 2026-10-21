# Engine Lab

Website kalkulator dan panduan permesinan motor. Dibangun dengan **Next.js (App Router)**, **React**, **TypeScript**, dan **Tailwind CSS v4**.

## Isi website

| Halaman | Isi |
| --- | --- |
| `/` | Beranda dengan kalkulator CC singkat |
| `/kalkulasi-mesin` | Kalkulator CC, rasio kompresi, rasio gear, top speed |
| `/artikel` dan `/artikel/[slug]` | 10 artikel permesinan |
| `/troubleshooting` dan `/troubleshooting/[slug]` | 5 halaman "Kenapa motor ..." |
| `/panduan-kirian` | Panduan komponen kirian atau CVT, lengkap dengan diagram interaktif |

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk uji build produksi: `npm run build` lalu `npm start`.

## Push ke GitHub

File `gitignore.txt` dibuat tanpa titik di depan supaya aman di Zip. Ganti namanya dulu:

```bash
mv gitignore.txt .gitignore      # Windows: ren gitignore.txt .gitignore
git init
git add .
git commit -m "Engine Lab"
git branch -M main
git remote add origin https://github.com/USERNAME/engine-lab.git
git push -u origin main
```

Setelah `npm install`, file `package-lock.json` ikut dibuat. Commit juga file itu.

## Deploy ke Vercel

1. Import repo GitHub di Vercel. Framework otomatis terdeteksi sebagai Next.js, tidak perlu ubah setelan.
2. (Opsional) Tambah environment variable `NEXT_PUBLIC_SITE_URL` berisi alamat situsmu, misalnya `https://engine-lab.vercel.app`. Dipakai untuk sitemap dan metadata.

## Struktur

```
src/
  app/            halaman (App Router), layout, sitemap, robots
  components/     Header, Footer, kalkulator (client), diagram SVG
  data/           isi artikel, troubleshooting, dan panduan kirian
  lib/            rumus hitung (calc.ts) dan format angka
```

- Menambah atau mengubah artikel: edit `src/data/articles.ts`. Halaman dan sitemap ikut otomatis.
- Rumus ada di `src/lib/calc.ts` dan terpisah dari tampilan.
- Warna dan font diatur di `src/app/globals.css` (blok `@theme`).

Hasil kalkulator bersifat teoretis. Rujuk buku servis motor untuk angka resmi.
