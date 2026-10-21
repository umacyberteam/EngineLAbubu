import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-[clamp(60px,12vw,140px)]">
      <div className="wrap">
        <h1 className="mb-3.5 text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold">Halaman tidak ditemukan</h1>
        <p className="max-w-[46ch] text-[1.2rem] text-muted">
          Alamat yang kamu buka tidak ada. Mungkin salah ketik atau halamannya sudah dipindah.
        </p>
        <p className="mt-6">
          <Link href="/" className="btn">
            Kembali ke beranda
          </Link>
        </p>
      </div>
    </div>
  );
}
