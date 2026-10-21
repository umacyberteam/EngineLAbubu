import type { KirianPart, KirianSection } from "./types";

export const kirianIntro = "<p><strong>Kirian</strong> adalah sebutan bengkel lokal untuk seluruh area CVT pada motor matic: pulley depan dan belakang, roller, van belt, per CVT, kopling sentrifugal dengan kampas ganda dan per sentri, serta mangkok ganda. Semua bagian ini bekerja sebagai satu sistem yang menyalurkan tenaga mesin ke roda sambil mengubah rasio secara otomatis.</p>\n<p>Setelan kirian sangat memengaruhi karakter motor: galak di awal, enteng di putaran bawah, atau panjang di kecepatan tinggi. Karena itu kirian jadi bagian yang paling sering dimodifikasi di motor matic.</p>";

export const kirianSections: KirianSection[] = [
  {
    "id": "cara-kerja",
    "title": "Cara kerja singkat",
    "kind": "html",
    "body": "<p>CVT (<em>continuously variable transmission</em>) tidak memakai gigi bertingkat. Rasio berubah mulus karena belt berpindah posisi di antara dua pulley.</p>\n<ol>\n  <li><strong>Start:</strong> mesin berputar, kopling sentrifugal di sisi belakang belum mengikat. Begitu putaran naik, kampas ganda terlempar ke luar dan menggesek mangkok ganda sehingga motor mulai bergerak.</li>\n  <li><strong>Akselerasi:</strong> putaran pulley depan naik, roller terlempar keluar menekan pulley sliding sehingga pulley depan menyempit. Belt terdorong ke jari-jari yang lebih besar.</li>\n  <li><strong>Kecepatan naik:</strong> belt di pulley belakang tertarik ke jari-jari lebih kecil melawan tekanan per CVT. Rasio turun dari besar (sekitar 2,5 : 1) ke kecil (sekitar 0,8 : 1).</li>\n</ol>\n<p>Angka rasio di atas hanya gambaran umum. Tiap model punya rentang rasionya sendiri.</p>"
  },
  {
    "id": "demo",
    "title": "Lihat belt berpindah posisi",
    "kind": "demo"
  },
  {
    "id": "komponen",
    "title": "Komponen kirian dan istilah bengkelnya",
    "kind": "parts"
  },
  {
    "id": "efek-setelan",
    "title": "Efek mengganti komponen pada karakter motor",
    "kind": "html",
    "body": "<p>Satu komponen berubah, karakter motor ikut berubah. Tabel ini ringkasan arah efeknya. Hasil nyata tergantung kombinasi dan kondisi komponen lain.</p>\n<div class=\"table-scroll\"><table>\n<thead><tr><th>Komponen</th><th>Lebih ringan / lembek</th><th>Lebih berat / keras</th></tr></thead>\n<tbody>\n<tr><td><strong>Roller</strong></td><td>Putaran mesin naik lebih tinggi sebelum rasio berpindah. Tarikan awal dan tengah lebih galak, tetapi mesin bisa mentok di putaran atas sebelum belt mencapai rasio terpanjang.</td><td>Rasio berpindah lebih awal pada putaran lebih rendah. Tarikan awal lebih malas, top speed lebih mudah tercapai bila tenaga mesin cukup.</td></tr>\n<tr><td><strong>Per CVT</strong></td><td>Belt cepat naik ke rasio panjang. Putaran mesin lebih rendah saat kecepatan naik, nafas lebih panjang.</td><td>Belt bertahan di rasio pendek lebih lama. Putaran mesin lebih tinggi, tarikan lebih berisi di bawah.</td></tr>\n<tr><td><strong>Per sentri</strong></td><td>Kopling masuk pada putaran lebih rendah. Start lebih halus tetapi bisa terasa lemah bila terlalu lembek.</td><td>Kopling masuk pada putaran lebih tinggi. Start lebih galak (mesin ditahan di putaran tenaga), tetapi lebih mudah nyentak.</td></tr>\n</tbody></table></div>\n<div class=\"note\"><strong>Satu per satu</strong>Ubah satu komponen dalam satu waktu, lalu uji. Kalau tiga komponen diganti sekaligus, kamu tidak akan tahu mana yang memberi efek, dan tidak bisa menelusuri bila hasilnya jelek.</div>"
  },
  {
    "id": "gejala",
    "title": "Gejala dan komponen yang dicurigai",
    "kind": "html",
    "body": "<div class=\"table-scroll\"><table>\n<thead><tr><th>Gejala</th><th>Dicurigai</th></tr></thead>\n<tbody>\n<tr><td>Getaran atau nyentak saat mulai jalan</td><td>Kampas ganda, per sentri, mangkok ganda, roller</td></tr>\n<tr><td>Putaran mesin naik tetapi motor tidak melaju (slip)</td><td>Van belt, kampas ganda terglazur, oli membasahi belt</td></tr>\n<tr><td>Bunyi mencicit atau berdecit saat gas dibuka</td><td>Van belt, pulley kotor atau berminyak</td></tr>\n<tr><td>Bunyi gemeretak atau menggelinding dari area CVT</td><td>Roller aus atau pecah, bearing pulley</td></tr>\n<tr><td>Tarikan atas habis, top speed turun</td><td>Roller aus, belt menipis, per CVT lemah</td></tr>\n<tr><td>Motor tersendat di putaran bawah</td><td>Roller bentuk oval, pulley sliding seret</td></tr>\n<tr><td>Bau gosong dari area CVT</td><td>Kampas ganda tipis atau slip, belt aus</td></tr>\n<tr><td>Motor menyeret saat gas dilepas</td><td>Per sentri patah atau lemah, kampas ganda tertahan</td></tr>\n</tbody></table></div>"
  },
  {
    "id": "perawatan",
    "title": "Perawatan dan interval yang umum",
    "kind": "html",
    "body": "<p>Interval resmi berbeda tiap model. Ikuti buku servis motormu. Angka berikut hanya kisaran umum untuk pemakaian harian di jalan perkotaan.</p>\n<ul>\n  <li><strong>Bersihkan area CVT:</strong> kira-kira setiap servis berkala, atau sekitar setiap 8.000 sampai 12.000 km. Bersihkan debu kampas dengan semprotan angin atau kuas.</li>\n  <li><strong>Ganti roller:</strong> sering bersamaan dengan van belt, kira-kira di kisaran 20.000 sampai 25.000 km, atau bila sudah oval dan berbidang datar.</li>\n  <li><strong>Ganti van belt:</strong> umumnya 20.000 sampai 30.000 km, atau bila lebarnya sudah di bawah batas servis atau terlihat retak halus.</li>\n  <li><strong>Ganti kampas ganda dan per sentri:</strong> bila ketebalan kampas tinggal mendekati batas, atau terasa nyentak dan getaran.</li>\n  <li><strong>Cek bearing dan seal:</strong> bila ada bunyi dengung atau oli dari area CVT.</li>\n</ul>\n<div class=\"note\"><strong>Langkah cek van belt</strong>Ukur lebarnya dengan jangka sorong, lalu bandingkan dengan batas minimal di buku servis. Lihat bagian dalam belt dari retak, bergerigi tidak rata, atau permukaan mengilap.</div>"
  },
  {
    "id": "kesalahan",
    "title": "Kesalahan yang sering dilakukan",
    "kind": "html",
    "body": "<ul>\n  <li><strong>Memberi pelumas, gemuk, atau semprotan pada pulley dan belt.</strong> Belt jadi slip. Pelumas hanya boleh di titik yang ditentukan, bukan pada permukaan yang disentuh belt.</li>\n  <li><strong>Ganti satu komponen saja padahal yang lain sudah aus.</strong> Roller baru dengan belt lama atau pulley berkerak membuat hasilnya tidak maksimal.</li>\n  <li><strong>Membersihkan CVT dengan cairan yang meninggalkan residu.</strong> Pakai pembersih yang cepat kering dan tidak berminyak.</li>\n  <li><strong>Mengganti roller terlalu ringan hanya demi tarikan awal.</strong> Putaran bisa mentok dan top speed turun.</li>\n  <li><strong>Memasang per racing terlalu keras untuk jalan harian.</strong> Start nyentak dan komponen lebih cepat aus.</li>\n  <li><strong>Lupa menyesuaikan kirian setelah mesin dimodifikasi.</strong> Bore up, knalpot, atau kompresi baru mengubah kurva tenaga.</li>\n  <li><strong>Memasang cover CVT tanpa memeriksa saluran udaranya.</strong> Filter CVT yang tersumbat membuat area ini panas dan belt cepat aus.</li>\n</ul>"
  }
];

export const kirianParts: KirianPart[] = [
  {
    "name": "Pulley depan (primer)",
    "alias": "puli depan, kipas, pulley sliding, rumah roller",
    "desc": "Pasangan dua sisi berbentuk cakram miring yang terpasang di kruk as. Satu sisi tetap (sering disebut kipas karena bersirip untuk membuang panas) dan satu sisi bisa bergeser (pulley sliding atau rumah roller). Ketika sisi geser merapat, belt naik ke jari-jari lebih besar.",
    "wear": "Permukaan tempat belt bergores atau mengilap, sliding seret, bos (collar) longgar."
  },
  {
    "name": "Roller",
    "alias": "weight roller, pemberat pulley",
    "desc": "Pemberat berbentuk silinder di dalam rumah roller. Saat putaran naik, roller terlempar ke luar dan mendorong pulley sliding. Bobot roller dalam gram menentukan kapan rasio mulai berpindah.",
    "wear": "Berbentuk oval, ada bidang datar, retak, atau beratnya tidak sama antar roller."
  },
  {
    "name": "Van belt",
    "alias": "belt, sabuk CVT",
    "desc": "Sabuk karet bergerigi yang menyalurkan tenaga dari pulley depan ke belakang. Lebarnya menentukan seberapa jauh belt bisa bergerak di pulley.",
    "wear": "Lebar di bawah batas servis, retak halus, gerigi hilang, permukaan mengilap."
  },
  {
    "name": "Pulley belakang (sekunder)",
    "alias": "puli belakang, pulley sekunder",
    "desc": "Pasangan cakram di sisi roda yang juga terdiri dari sisi tetap dan sisi geser. Pergerakannya berlawanan dengan pulley depan: ketika belt naik di depan, belt turun di belakang.",
    "wear": "Alur pemandu (slider) aus, bunyi dengung, permukaan belt berkerak."
  },
  {
    "name": "Per CVT",
    "alias": "pegas pulley belakang, torque spring",
    "desc": "Pegas besar di dalam pulley belakang yang menekan sisi geser agar menjepit belt. Kekuatannya menentukan seberapa besar tahanan terhadap perpindahan rasio.",
    "wear": "Lebih pendek dari standar, tidak bisa kembali ke panjang awal, atau patah."
  },
  {
    "name": "Kampas ganda",
    "alias": "kampas kopling, clutch shoe",
    "desc": "Tiga (atau dua) pemberat berlapis kampas pada kopling sentrifugal. Saat putaran naik, kampas terlempar ke luar dan menggesek mangkok ganda sehingga roda ikut berputar.",
    "wear": "Kampas tipis, terglazur, tidak rata, tercium gosong."
  },
  {
    "name": "Per sentri",
    "alias": "per kampas ganda, per kopling",
    "desc": "Pegas kecil yang menahan kampas ganda tetap di dalam sampai putaran tertentu. Kekuatannya menentukan putaran saat motor mulai bergerak.",
    "wear": "Panjangnya tidak sama antar per, lemah, atau patah. Biasanya diganti satu set."
  },
  {
    "name": "Mangkok ganda",
    "alias": "mangkok kopling, rumah kopling, clutch housing",
    "desc": "Mangkok di sisi roda yang bersentuhan dengan kampas. Permukaan dalamnya harus halus dan rata agar gesekan stabil.",
    "wear": "Bergelombang, baret, oval, atau bekas panas kebiruan."
  },
  {
    "name": "Cover CVT dan saluran udara",
    "alias": "tutup CVT, filter CVT",
    "desc": "Rumah yang menutup seluruh sistem. Saluran udara dan filternya mencegah debu masuk sambil membuang panas.",
    "wear": "Filter tersumbat, seal bocor, debu kampas menumpuk."
  }
];
