import type { Article } from "./types";

export const articles: Article[] = [
  {
    "slug": "apa-itu-cc-pada-mesin-motor",
    "title": "Apa Itu CC pada Mesin Motor?",
    "desc": "CC adalah volume yang disapu piston dalam satu langkah. Pahami artinya, kenapa dipakai, dan apa saja yang tidak ditentukan oleh CC.",
    "category": "Kapasitas mesin",
    "minutes": 5,
    "related": [
      "cara-menghitung-cc-motor-dari-bore-dan-stroke",
      "bore-up-dan-stroke-up-bedanya",
      "kompresi-mesin-dan-cara-kerjanya"
    ],
    "calc": {
      "anchor": "cc",
      "text": "Hitung CC motor dari bore dan langkah"
    },
    "body": "<p>CC adalah singkatan dari <em>centimeter cubic</em>, atau sentimeter kubik. Pada mesin motor, angka ini menunjukkan volume ruang yang disapu piston ketika bergerak dari titik mati atas (TMA) ke titik mati bawah (TMB). Karena itu CC sering disebut juga kapasitas silinder, isi silinder, atau volume langkah.</p>\n\n<h2>Apa yang sebenarnya diukur CC</h2>\n<p>Bayangkan silinder sebagai tabung dan piston sebagai tutup yang bisa naik turun di dalamnya. Saat piston turun dari atas ke bawah, ia membuka ruang kosong. Ruang itulah yang diisi campuran udara dan bensin. Besarnya ruang itu, dalam satuan cm³, adalah CC.</p>\n<p>Perlu dicatat, CC <strong>tidak</strong> menghitung ruang bakar di atas piston saat posisinya di TMA. Ruang itu punya angka sendiri dan dipakai untuk menghitung rasio kompresi.</p>\n<div class=\"formula\">1 cc = 1 cm³ = 1 ml<small>Motor 125 cc artinya piston menyapu sekitar 125 ml untuk setiap langkahnya. Motor dengan beberapa silinder dijumlahkan.</small></div>\n\n<h2>Kenapa CC dipakai sebagai patokan</h2>\n<p>Semakin besar volume yang disapu piston, semakin banyak udara dan bensin yang bisa masuk per siklus. Campuran yang lebih banyak berarti energi pembakaran yang lebih besar. Itu sebabnya CC menjadi ukuran paling umum untuk mengelompokkan motor: 110 cc, 125 cc, 150 cc, 250 cc, dan seterusnya.</p>\n\n<h2>CC besar belum tentu lebih kencang</h2>\n<p>Tenaga mesin tidak ditentukan oleh CC saja. Putaran mesin (RPM), rasio kompresi, bentuk ruang bakar, ukuran klep, saluran masuk dan buang, pengaturan injeksi atau karburator, sampai gigi rasio akhir ikut menentukan. Dua motor 150 cc bisa punya tenaga yang cukup berbeda, dan motor 125 cc yang berputar tinggi bisa menyaingi motor 150 cc yang disetel santai.</p>\n<ul>\n  <li><strong>CC besar:</strong> potensi tenaga dan torsi lebih tinggi, konsumsi bensin biasanya ikut naik.</li>\n  <li><strong>CC kecil:</strong> lebih irit dan ringan, tenaga bergantung pada seberapa efisien mesin dirancang.</li>\n</ul>\n\n<h2>Cara membaca angka di spesifikasi</h2>\n<p>Di brosur biasanya tertulis angka seperti <em>124,8 cc</em> atau <em>155,1 cc</em>, lalu di nama motor dibulatkan menjadi 125 atau 155. Di dekatnya sering ada pasangan angka <em>bore x stroke</em>, misalnya 52,4 x 57,9 mm. Dua angka itu adalah bahan untuk menghitung CC, dan cara hitungnya dibahas di artikel berikutnya.</p>\n\n<h2>Istilah yang sering muncul bersama CC</h2>\n<ul>\n  <li><strong>Bore:</strong> diameter lubang silinder.</li>\n  <li><strong>Stroke (langkah):</strong> jarak tempuh piston dari TMA ke TMB.</li>\n  <li><strong>TMA / TMB:</strong> posisi piston paling atas dan paling bawah.</li>\n  <li><strong>Rasio kompresi:</strong> perbandingan volume saat piston di TMB dengan saat di TMA.</li>\n</ul>"
  },
  {
    "slug": "cara-menghitung-cc-motor-dari-bore-dan-stroke",
    "title": "Cara Menghitung CC Motor dari Bore dan Stroke",
    "desc": "Rumus, contoh hitungan 125 cc dan 155 cc, serta cara mengukur bore dan langkah dengan benar.",
    "category": "Kapasitas mesin",
    "minutes": 6,
    "related": [
      "apa-itu-cc-pada-mesin-motor",
      "bore-up-dan-stroke-up-bedanya",
      "kompresi-mesin-dan-cara-kerjanya"
    ],
    "calc": {
      "anchor": "cc",
      "text": "Coba hitung langsung dengan kalkulator CC"
    },
    "body": "<p>Kalau kamu tahu diameter silinder (bore) dan panjang langkah (stroke) dalam milimeter, CC bisa dihitung dengan satu rumus saja. Ini rumus volume tabung yang disesuaikan dengan satuan mm dan cc.</p>\n\n<div class=\"formula\">CC = π / 4 × bore² × stroke ÷ 1000<small>Bore dan stroke dalam milimeter. Dibagi 1000 karena 1 cm³ = 1000 mm³. Untuk mesin multisilinder, kalikan hasilnya dengan jumlah silinder.</small></div>\n\n<h2>Contoh 1: mesin 125 cc</h2>\n<p>Bore 52,4 mm dan stroke 57,9 mm.</p>\n<ol>\n  <li>Kuadratkan bore: 52,4 × 52,4 = 2.745,76</li>\n  <li>Kalikan π/4 (0,7854): 2.745,76 × 0,7854 = 2.156,4</li>\n  <li>Kalikan stroke: 2.156,4 × 57,9 = 124.858</li>\n  <li>Bagi 1000: <strong>124,86 cc</strong></li>\n</ol>\n<p>Di brosur, angka seperti ini lazim tertulis 124,8 cc atau 125 cc. Selisih kecil muncul karena pabrikan membulatkan bore dan stroke atau memotong angka di belakang koma.</p>\n\n<h2>Contoh 2: mesin 155 cc</h2>\n<p>Bore 58,0 mm dan stroke 58,7 mm: 58² = 3.364 → × 0,7854 = 2.642,1 → × 58,7 = 155.087 → ÷ 1000 = <strong>155,09 cc</strong>.</p>\n\n<h2>Tabel contoh ukuran umum</h2>\n<div class=\"table-scroll\"><table>\n<thead><tr><th>Bore (mm)</th><th>Stroke (mm)</th><th>Hasil (cc)</th></tr></thead>\n<tbody>\n<tr><td>50,0</td><td>55,6</td><td>109,2</td></tr>\n<tr><td>52,4</td><td>57,9</td><td>124,9</td></tr>\n<tr><td>58,0</td><td>58,7</td><td>155,1</td></tr>\n<tr><td>57,0</td><td>57,9</td><td>147,7</td></tr>\n</tbody></table></div>\n\n<h2>Cara mengukur bore dan stroke</h2>\n<ul>\n  <li><strong>Bore:</strong> ukur diameter dalam silinder dengan <em>bore gauge</em> atau jangka sorong berujung dalam. Ukur di beberapa kedalaman dan dua arah. Pakai ukuran lubang silinder, bukan diameter piston, karena piston sedikit lebih kecil untuk memberi celah.</li>\n  <li><strong>Stroke:</strong> pasang dial gauge pada puncak piston, putar kruk as, lalu catat selisih antara posisi tertinggi dan terendah. Cara lain, stroke sama dengan dua kali jarak antara sumbu kruk as dan sumbu pin kruk (offset).</li>\n</ul>\n\n<div class=\"note\"><strong>Kesalahan umum</strong>Memasukkan bore dalam cm tetapi stroke dalam mm. Samakan satuannya dulu. Kalau memakai cm, hasilnya langsung dalam cm³ tanpa dibagi 1000.</div>\n\n<h2>Kapan hasilnya sedikit meleset</h2>\n<p>Hasil hitungan adalah volume teoretis dari ukuran nominal. Silinder yang sudah aus atau dibor oversize akan punya bore sedikit berbeda dari angka pabrik, jadi CC sebenarnya ikut bergeser. Karena itu setelah bore up, hitung ulang dengan ukuran bore yang baru.</p>"
  },
  {
    "slug": "bore-up-dan-stroke-up-bedanya",
    "title": "Apa Itu Bore Up dan Stroke Up? Apa Bedanya?",
    "desc": "Dua cara menaikkan CC mesin: memperbesar diameter silinder atau memperpanjang langkah piston. Ini beda efek dan konsekuensinya.",
    "category": "Kapasitas mesin",
    "minutes": 6,
    "related": [
      "cara-menghitung-cc-motor-dari-bore-dan-stroke",
      "kompresi-mesin-dan-cara-kerjanya",
      "apa-itu-knocking-mesin-ngelitik"
    ],
    "calc": {
      "anchor": "cc",
      "text": "Bandingkan CC sebelum dan sesudah bore atau stroke up"
    },
    "body": "<p>Bore up dan stroke up adalah dua cara menaikkan volume silinder. Keduanya sama-sama menambah CC, tetapi bagian mesin yang diubah berbeda, dan karakter tenaganya pun berbeda.</p>\n\n<h2>Bore up</h2>\n<p>Bore up berarti memperbesar diameter lubang silinder, lalu memasang piston yang lebih besar. Di bengkel dikenal dengan istilah oversize (OS), misalnya OS 25, OS 50, OS 75, dan OS 100, yang masing-masing menambah diameter 0,25 mm, 0,50 mm, dan seterusnya. Langkah piston tetap sama.</p>\n<ul>\n  <li><strong>Efek:</strong> permukaan piston lebih lebar sehingga ruang untuk klep lebih lega, kecepatan rata-rata piston tidak naik, dan mesin lebih mudah dibawa ke putaran tinggi.</li>\n  <li><strong>Batasnya:</strong> ketebalan dinding silinder. Terlalu tipis membuat panas sulit dibuang dan silinder bisa retak. Blok yang memakai sleeve (liner) bisa dibor lebih jauh dengan mengganti sleeve.</li>\n</ul>\n<p>Contoh: bore 52,4 mm menjadi 53,4 mm (naik 1 mm) menambah CC sekitar 3,9%. Mesin 124,9 cc menjadi sekitar 129,7 cc.</p>\n\n<h2>Stroke up</h2>\n<p>Stroke up berarti memperpanjang langkah piston. Caranya mengganti kruk as dengan offset pin kruk yang lebih besar, atau memakai kruk as stroker. Bore tetap sama.</p>\n<ul>\n  <li><strong>Efek:</strong> tuas kruk lebih panjang sehingga torsi di putaran bawah sampai menengah biasanya lebih terasa, tarikan lebih berisi.</li>\n  <li><strong>Batasnya:</strong> piston bergerak lebih jauh per putaran, jadi kecepatan piston naik dan getaran bisa bertambah. Piston di TMA juga bisa membentur kepala silinder atau klep, sedangkan di TMB bisa menyentuh bak kruk dan bagian bawah blok.</li>\n</ul>\n<p>Contoh: stroke 57,9 mm menjadi 58,9 mm (naik 1 mm) menambah CC sekitar 1,7%. Satu milimeter di bore memberi tambahan CC lebih dari dua kali lipat dibanding satu milimeter di stroke pada ukuran umum motor harian.</p>\n\n<h2>Perbandingan singkat</h2>\n<div class=\"table-scroll\"><table>\n<thead><tr><th></th><th>Bore up</th><th>Stroke up</th></tr></thead>\n<tbody>\n<tr><td>Yang diubah</td><td>Silinder dan piston</td><td>Kruk as (dan sering piston, blok)</td></tr>\n<tr><td>Karakter</td><td>Nafas panjang di putaran atas</td><td>Torsi besar di putaran bawah-menengah</td></tr>\n<tr><td>Risiko utama</td><td>Dinding silinder tipis, panas naik</td><td>Getaran, piston menyentuh bagian lain</td></tr>\n<tr><td>Biaya</td><td>Relatif lebih murah</td><td>Biasanya lebih mahal dan lebih rumit</td></tr>\n</tbody></table></div>\n\n<h2>Yang ikut berubah setelah CC naik</h2>\n<ul>\n  <li><strong>Rasio kompresi:</strong> berubah. Cek ulang dan sesuaikan dengan oktan bensin.</li>\n  <li><strong>Suplai bahan bakar dan udara:</strong> jet karburator, injektor, atau pemetaan ECU perlu menyesuaikan.</li>\n  <li><strong>Knalpot dan klep:</strong> aliran gas yang bertambah menuntut saluran buang yang cocok.</li>\n  <li><strong>Kirian (CVT):</strong> pada motor matic, karakter tenaga yang berubah bisa membuat setelan roller dan per CVT perlu disesuaikan.</li>\n  <li><strong>Aturan:</strong> perubahan CC pada kendaraan bermotor berkaitan dengan dokumen kendaraan. Cek aturan yang berlaku di daerahmu.</li>\n</ul>\n<p>Banyak builder menggabungkan keduanya (bore up dan stroke up) untuk hasil yang lebih besar. Hitung kombinasinya dulu di kalkulator CC agar tahu ke mana angka akhirnya.</p>"
  },
  {
    "slug": "kompresi-mesin-dan-cara-kerjanya",
    "title": "Apa Itu Kompresi Mesin dan Bagaimana Cara Kerjanya?",
    "desc": "Rasio kompresi, tekanan kompresi, dan peran langkah kompresi dalam siklus mesin empat tak.",
    "category": "Kompresi mesin",
    "minutes": 6,
    "related": [
      "hubungan-rasio-kompresi-dengan-oktan-bensin",
      "apakah-oktan-bensin-berpengaruh-terhadap-kompresi-mesin",
      "apa-itu-knocking-mesin-ngelitik"
    ],
    "calc": {
      "anchor": "kompresi",
      "text": "Hitung rasio kompresi mesinmu"
    },
    "body": "<p>Kompresi adalah proses memampatkan campuran udara dan bensin sebelum dibakar. Semakin padat campurannya, semakin kuat ledakan yang dihasilkan, dan semakin banyak energi yang bisa diubah menjadi gerakan.</p>\n\n<h2>Empat langkah, satu di antaranya kompresi</h2>\n<ol>\n  <li><strong>Hisap:</strong> piston turun, campuran udara-bensin masuk lewat klep isap.</li>\n  <li><strong>Kompresi:</strong> klep menutup, piston naik dan memampatkan campuran.</li>\n  <li><strong>Usaha (tenaga):</strong> busi memercik, campuran terbakar, tekanan mendorong piston turun.</li>\n  <li><strong>Buang:</strong> piston naik lagi mendorong gas sisa keluar lewat klep buang.</li>\n</ol>\n\n<h2>Rasio kompresi</h2>\n<p>Rasio kompresi (compression ratio, CR) adalah perbandingan antara volume total silinder saat piston di TMB dengan volume ruang bakar saat piston di TMA.</p>\n<div class=\"formula\">CR = (Vd + Vc) ÷ Vc<small>Vd = volume langkah (CC satu silinder). Vc = volume ruang bakar saat piston di TMA, sudah termasuk ruang di kepala silinder, paking, dan cekungan atau kubah piston.</small></div>\n<p>Contoh: mesin dengan Vd 124,9 cc dan Vc 13,9 cc punya CR (124,9 + 13,9) ÷ 13,9 ≈ <strong>10,0 : 1</strong>. Artinya campuran dimampatkan hingga sepersepuluh volume awalnya.</p>\n\n<h2>Rasio kompresi tidak sama dengan tekanan kompresi</h2>\n<ul>\n  <li><strong>Rasio kompresi</strong> adalah angka perbandingan yang ditentukan oleh bentuk dan ukuran mesin. Tidak berubah selama komponen tidak diubah.</li>\n  <li><strong>Tekanan kompresi</strong> adalah tekanan sebenarnya di dalam silinder saat mesin diputar, diukur dengan alat <em>compression tester</em> (satuan kg/cm², psi, atau kPa). Nilai ini turun bila ring piston aus, klep bocor, atau paking rusak.</li>\n</ul>\n<p>Angka tekanan normal berbeda tiap mesin. Pakai angka dari buku servis motormu sebagai acuan, bukan angka umum.</p>\n\n<h2>Kenapa kompresi tinggi menaikkan tenaga</h2>\n<p>Mesin dengan kompresi lebih tinggi memeras lebih banyak energi dari bensin yang sama. Efisiensinya naik, tenaga naik, dan konsumsi bahan bakar per tenaga turun. Itulah sebabnya mesin modern cenderung memakai rasio kompresi 10 sampai 12:1.</p>\n<div class=\"note caution\"><strong>Ada harganya</strong>Campuran yang dimampatkan makin panas. Kalau terlalu panas, bensin bisa terbakar sendiri sebelum busi memercik. Ini disebut knocking, dan itulah alasan kompresi tinggi menuntut bensin beroktan lebih tinggi.</div>\n\n<h2>Penyebab kompresi berubah</h2>\n<ul>\n  <li><strong>Naik:</strong> kepala silinder dibubut (dimilling), paking diganti yang lebih tipis, piston kubah, kerak karbon menumpuk di ruang bakar.</li>\n  <li><strong>Turun:</strong> ring piston atau silinder aus, klep tidak menutup rapat, paking kepala bocor, celah klep tidak sesuai.</li>\n</ul>"
  },
  {
    "slug": "apakah-oktan-bensin-berpengaruh-terhadap-kompresi-mesin",
    "title": "Apakah Oktan Bensin Berpengaruh terhadap Kompresi Mesin?",
    "desc": "Oktan tidak mengubah rasio kompresi. Yang terjadi sebaliknya: kompresi menentukan oktan yang dibutuhkan.",
    "category": "Bensin dan oktan",
    "minutes": 4,
    "related": [
      "hubungan-rasio-kompresi-dengan-oktan-bensin",
      "bensin-ron-90-92-95-98-perbedaannya",
      "oktan-tidak-sesuai-dengan-kompresi-mesin"
    ],
    "calc": {
      "anchor": "kompresi",
      "text": "Cek rasio kompresi dan saran oktan"
    },
    "body": "<p>Jawaban singkatnya: <strong>tidak</strong>. Oktan bensin tidak menaikkan atau menurunkan rasio kompresi mesin. Rasio kompresi ditentukan oleh bentuk fisik mesin, yaitu ukuran silinder, langkah, ruang bakar, paking, dan piston. Mengisi Pertamax tidak membuat mesin Pertalite-mu jadi berkompresi tinggi.</p>\n\n<h2>Oktan itu ukuran apa</h2>\n<p>Angka oktan (RON) menunjukkan seberapa tahan bensin terhadap terbakar sendiri saat dimampatkan. Bukan ukuran kekuatan ledakan, bukan pula ukuran energi. Bensin RON 92 lebih tahan tekanan dan panas dibanding RON 90 sebelum \"meledak sendiri\".</p>\n\n<h2>Hubungannya sebenarnya terbalik</h2>\n<p>Yang benar adalah: <strong>rasio kompresi menentukan oktan minimum yang dibutuhkan mesin</strong>. Semakin tinggi kompresi, semakin tinggi tekanan dan suhu di akhir langkah kompresi, sehingga bensin harus lebih tahan.</p>\n\n<div class=\"table-scroll\"><table>\n<thead><tr><th>Yang berubah</th><th>Rasio kompresi</th><th>Oktan yang dibutuhkan</th></tr></thead>\n<tbody>\n<tr><td>Ganti ke bensin oktan lebih tinggi</td><td>Tetap</td><td>Tidak berubah</td></tr>\n<tr><td>Kepala silinder dibubut / paking tipis</td><td>Naik</td><td>Naik</td></tr>\n<tr><td>Bore up dengan piston kubah</td><td>Biasanya naik</td><td>Biasanya naik</td></tr>\n<tr><td>Ruang bakar berkerak karbon</td><td>Naik sedikit</td><td>Naik sedikit</td></tr>\n</tbody></table></div>\n\n<h2>Lalu kenapa ada yang merasa \"kompresinya naik\"?</h2>\n<ul>\n  <li><strong>Pengapian disesuaikan ECU.</strong> Pada motor injeksi dengan sensor knock atau pemetaan adaptif, oktan lebih tinggi bisa membuat ECU memajukan waktu pengapian sehingga tenaga sedikit lebih baik. Rasio kompresinya tetap sama.</li>\n  <li><strong>Pembakaran lebih tenang.</strong> Karena tidak ada ngelitik, mesin terasa lebih halus dan responsif.</li>\n  <li><strong>Hasil ukur tekanan berbeda.</strong> Tekanan yang terbaca di compression tester dipengaruhi kondisi ring, klep, dan kerak karbon, bukan oktan bensin.</li>\n</ul>\n\n<h2>Kesimpulan praktis</h2>\n<p>Gunakan oktan sesuai rekomendasi pabrikan. Kalau kompresi mesin kamu naikkan lewat modifikasi, naikkan juga oktan bensinnya. Kalau tidak ada perubahan di mesin, bensin beroktan lebih tinggi dari anjuran tidak akan menambah kompresi.</p>"
  },
  {
    "slug": "hubungan-rasio-kompresi-dengan-oktan-bensin",
    "title": "Hubungan Rasio Kompresi Mesin dengan Oktan Bensin",
    "desc": "Kenapa kompresi tinggi butuh oktan tinggi, tabel patokan kasar, dan faktor lain yang ikut menentukan.",
    "category": "Bensin dan oktan",
    "minutes": 6,
    "related": [
      "bensin-ron-90-92-95-98-perbedaannya",
      "oktan-tidak-sesuai-dengan-kompresi-mesin",
      "apa-itu-knocking-mesin-ngelitik"
    ],
    "calc": {
      "anchor": "kompresi",
      "text": "Hitung rasio kompresi dan lihat saran oktan"
    },
    "body": "<p>Rasio kompresi dan oktan bensin saling terkait lewat satu hal: suhu di akhir langkah kompresi. Campuran yang dimampatkan makin panas. Bila suhunya melewati batas tahan bensin, campuran terbakar sendiri sebelum busi memercik, dan itu merusak.</p>\n\n<h2>Cara kerjanya</h2>\n<ol>\n  <li>Piston naik memampatkan campuran dan suhunya naik.</li>\n  <li>Makin tinggi rasio kompresi, makin tinggi tekanan dan suhu itu.</li>\n  <li>Bensin beroktan rendah mudah terbakar sendiri pada suhu tertentu. Bensin beroktan tinggi lebih tahan.</li>\n  <li>Karena itu mesin berkompresi tinggi memerlukan oktan lebih tinggi supaya pembakaran tetap dimulai oleh busi, bukan oleh panas.</li>\n</ol>\n\n<h2>Patokan kasar</h2>\n<div class=\"table-scroll\"><table>\n<thead><tr><th>Rasio kompresi statis</th><th>Oktan yang umumnya cocok</th></tr></thead>\n<tbody>\n<tr><td>Di bawah 9,0 : 1</td><td>RON 90</td></tr>\n<tr><td>9,0 sampai 10,5 : 1</td><td>RON 92</td></tr>\n<tr><td>10,5 sampai 12,0 : 1</td><td>RON 92 sampai 95, tergantung pengapian dan pengaturan bahan bakar</td></tr>\n<tr><td>Di atas 12,0 : 1</td><td>RON 98 atau lebih, sering bahan bakar balap</td></tr>\n</tbody></table></div>\n<div class=\"note\"><strong>Hanya patokan</strong>Tabel ini rule of thumb. Buku manual motormu selalu lebih benar. Banyak mesin modern berinjeksi berkompresi sekitar 11:1 tetapi hanya meminta RON 92 karena bentuk ruang bakarnya efisien dan ECU-nya mengatur pengapian.</div>\n\n<h2>Faktor lain yang menggeser kebutuhan oktan</h2>\n<ul>\n  <li><strong>Waktu pengapian:</strong> pengapian yang terlalu maju mendorong knocking.</li>\n  <li><strong>Campuran miskin (terlalu sedikit bensin):</strong> pembakaran lebih panas, lebih rawan knocking.</li>\n  <li><strong>Suhu udara dan suhu mesin:</strong> cuaca panas, macet, atau pendingin yang lemah menaikkan kebutuhan oktan.</li>\n  <li><strong>Beban:</strong> menanjak atau membawa beban berat menuntut tekanan lebih tinggi.</li>\n  <li><strong>Kerak karbon:</strong> menyempitkan ruang bakar sehingga kompresi efektifnya naik dan muncul titik panas.</li>\n  <li><strong>Ketinggian:</strong> di dataran tinggi tekanan udara lebih rendah sehingga tekanan akhir kompresi turun dan kebutuhan oktan sedikit berkurang.</li>\n  <li><strong>Kompresor atau turbo:</strong> tekanan masuk yang dipaksa menaikkan kebutuhan oktan jauh lebih besar.</li>\n</ul>\n\n<h2>Kompresi statis dan dinamis</h2>\n<p>Angka rasio kompresi dari rumus adalah kompresi statis. Kenyataannya klep isap baru menutup setelah piston mulai naik, jadi kompresi sebenarnya (dinamis) lebih rendah dari angka statis, dan besarnya bergantung pada durasi kem. Dua mesin berkompresi statis sama bisa punya kebutuhan oktan berbeda, dan itu normal.</p>\n\n<h2>Langkah praktis sebelum mengubah mesin</h2>\n<ol>\n  <li>Hitung rasio kompresi baru dengan kalkulator.</li>\n  <li>Cocokkan dengan oktan yang akan kamu pakai.</li>\n  <li>Setelah perubahan, tes dengan beban ringan dulu dan dengarkan suara ngelitik.</li>\n</ol>"
  },
  {
    "slug": "bensin-ron-90-92-95-98-perbedaannya",
    "title": "Bensin RON 90, 92, 95, dan 98: Apa Perbedaannya?",
    "desc": "Arti RON, perbedaan angka 90, 92, 95, dan 98, dan cara memilih yang sesuai dengan motormu.",
    "category": "Bensin dan oktan",
    "minutes": 5,
    "related": [
      "apakah-bensin-oktan-tinggi-selalu-membuat-motor-lebih-kencang",
      "hubungan-rasio-kompresi-dengan-oktan-bensin",
      "oktan-tidak-sesuai-dengan-kompresi-mesin"
    ],
    "calc": {
      "anchor": "kompresi",
      "text": "Cek saran oktan dari rasio kompresi mesinmu"
    },
    "body": "<p>RON, singkatan dari <em>Research Octane Number</em>, adalah angka yang mengukur ketahanan bensin terhadap terbakar sendiri (knocking) saat dimampatkan di mesin uji. Semakin besar angkanya, semakin tahan.</p>\n\n<h2>Yang berbeda, dan yang tidak</h2>\n<ul>\n  <li><strong>Berbeda:</strong> ketahanan terhadap knocking. Selain itu, tiap merek punya paket aditif sendiri, misalnya pembersih injektor atau pelindung ruang bakar.</li>\n  <li><strong>Hampir sama:</strong> kandungan energi per liter. Oktan tinggi bukan berarti bensinnya \"lebih bertenaga\" per tetes.</li>\n</ul>\n\n<h2>Gambaran per angka</h2>\n<div class=\"table-scroll\"><table>\n<thead><tr><th>RON</th><th>Contoh produk di Indonesia</th><th>Cocok untuk</th></tr></thead>\n<tbody>\n<tr><td>90</td><td>Pertalite</td><td>Mesin berkompresi rendah sampai menengah yang menetapkan RON minimum 90</td></tr>\n<tr><td>92</td><td>Pertamax, Shell Super</td><td>Kebanyakan motor injeksi modern dan mesin berkompresi sekitar 9 sampai 11 : 1</td></tr>\n<tr><td>95</td><td>Shell V-Power</td><td>Mesin berkompresi tinggi, atau yang sudah dimodifikasi ringan</td></tr>\n<tr><td>98</td><td>Pertamax Turbo, Shell V-Power Nitro+</td><td>Kompresi sangat tinggi, bore up atau tuning agresif, atau yang diwajibkan pabrikan</td></tr>\n</tbody></table></div>\n<p class=\"disclaimer\">Nama produk dan angkanya bisa berubah mengikuti kebijakan penjual. Selalu cek label RON di dispenser SPBU.</p>\n\n<h2>RON, MON, dan AKI</h2>\n<p>RON diuji pada kondisi mesin yang lebih ringan. MON diuji pada kondisi lebih berat. Di Amerika Serikat angka di pompa adalah rata-rata keduanya (AKI) sehingga angkanya tampak lebih kecil. Di Indonesia yang dipakai RON, jadi jangan membandingkan angka di manual impor dengan angka SPBU begitu saja.</p>\n\n<h2>Cara memilih</h2>\n<ol>\n  <li>Buka buku manual atau tutup tangki. Banyak motor mencantumkan RON minimum.</li>\n  <li>Pakai angka itu atau satu tingkat di atasnya.</li>\n  <li>Jangan turun di bawah anjuran. Risikonya knocking, bukan sekadar boros.</li>\n  <li>Kalau mesin dimodifikasi sehingga kompresinya naik, naikkan RON-nya.</li>\n</ol>\n\n<h2>Boleh dicampur?</h2>\n<p>Boleh. Semua berbasis bensin, jadi campuran dua oktan menghasilkan oktan di antaranya. Tidak perlu menguras tangki ketika ingin pindah dari RON 90 ke 92 atau sebaliknya.</p>"
  },
  {
    "slug": "apakah-bensin-oktan-tinggi-selalu-membuat-motor-lebih-kencang",
    "title": "Apakah Bensin Oktan Tinggi Selalu Membuat Motor Lebih Kencang?",
    "desc": "Tidak selalu. Ini kapan oktan tinggi memberi manfaat nyata dan kapan hanya menguras dompet.",
    "category": "Bensin dan oktan",
    "minutes": 5,
    "related": [
      "bensin-ron-90-92-95-98-perbedaannya",
      "hubungan-rasio-kompresi-dengan-oktan-bensin",
      "oktan-tidak-sesuai-dengan-kompresi-mesin"
    ],
    "calc": {
      "anchor": "kompresi",
      "text": "Cek apakah kompresi mesinmu butuh oktan lebih tinggi"
    },
    "body": "<p>Tidak. Oktan tinggi bukan tombol tambah tenaga. Oktan hanya membuat bensin lebih tahan terhadap terbakar sendiri. Mesin baru bisa memanfaatkan itu kalau memang dirancang atau disetel untuk memakainya.</p>\n\n<h2>Kapan oktan tinggi tidak terasa</h2>\n<ul>\n  <li><strong>Mesin standar berkompresi rendah.</strong> Mesin yang sudah nyaman dengan RON 90 tidak punya \"ruang\" yang bisa dimanfaatkan. Pengapian dan campuran bahan bakar sudah ditetapkan.</li>\n  <li><strong>ECU tanpa kemampuan adaptif.</strong> Pemetaan tetap membuat mesin berperilaku sama, apa pun bensinnya.</li>\n  <li><strong>Mesin dalam kondisi buruk.</strong> Busi lemah, filter udara kotor, atau CVT slip lebih berpengaruh daripada beda oktan.</li>\n</ul>\n\n<h2>Kapan oktan tinggi benar-benar membantu</h2>\n<ul>\n  <li><strong>Kompresi tinggi.</strong> Mesin yang memang berkompresi tinggi dari pabrik, atau yang sudah dibubut, bore up, atau dipasang piston kubah.</li>\n  <li><strong>Mesin dengan sensor knock atau pemetaan adaptif.</strong> Bila sebelumnya ECU menarik mundur pengapian untuk menghindari ngelitik, oktan lebih tinggi bisa memberi sedikit tenaga tambahan.</li>\n  <li><strong>Turbo atau supercharger.</strong> Tekanan paksa menaikkan kebutuhan oktan sangat besar.</li>\n  <li><strong>Pemetaan custom.</strong> Tuner yang memajukan pengapian untuk mengejar tenaga memerlukan oktan lebih tinggi agar aman.</li>\n  <li><strong>Kondisi berat.</strong> Cuaca panas, macet panjang, atau tanjakan dengan beban membuat mesin lebih mudah mengelitik.</li>\n</ul>\n\n<h2>Cara membuktikannya di motormu</h2>\n<ol>\n  <li>Habiskan bensin sampai hampir kosong, lalu isi penuh dengan oktan A dan catat jarak tempuh serta liter yang terisi.</li>\n  <li>Lakukan rute yang sama, kecepatan sama, beban sama.</li>\n  <li>Setelah itu ulangi dengan oktan B.</li>\n  <li>Bandingkan kilometer per liter dan perasaan tarikan. Bila selisihnya tidak terasa dan tidak terukur, oktan tinggi tidak memberi apa-apa untuk mesinmu.</li>\n</ol>\n\n<div class=\"note\"><strong>Soal harga</strong>Bila selisih jarak tempuh per liternya kecil, hitung biaya per kilometer, bukan harga per liter. Kadang bensin oktan tinggi tidak lebih irit, kadang hanya tipis. Pilih yang sesuai manfaat nyata.</div>\n\n<h2>Intinya</h2>\n<p>Oktan tinggi itu perlindungan dan ruang gerak, bukan tenaga gratis. Pakai sesuai kebutuhan mesin, dan naikkan hanya ketika mesinmu memang memerlukannya.</p>"
  },
  {
    "slug": "oktan-tidak-sesuai-dengan-kompresi-mesin",
    "title": "Apa yang Terjadi Jika Oktan Bensin Tidak Sesuai dengan Kompresi Mesin?",
    "desc": "Oktan terlalu rendah bisa merusak mesin, oktan terlalu tinggi hanya boros. Ini gejala dan cara menanganinya.",
    "category": "Bensin dan oktan",
    "minutes": 5,
    "related": [
      "apa-itu-knocking-mesin-ngelitik",
      "hubungan-rasio-kompresi-dengan-oktan-bensin",
      "bensin-ron-90-92-95-98-perbedaannya"
    ],
    "calc": {
      "anchor": "kompresi",
      "text": "Hitung rasio kompresi mesinmu"
    },
    "body": "<p>Ketidakcocokan bisa berarti dua hal, dan dampaknya sangat berbeda. Oktan lebih rendah dari kebutuhan itu berbahaya. Oktan lebih tinggi dari kebutuhan itu aman, hanya mubazir.</p>\n\n<h2>Oktan terlalu rendah</h2>\n<p>Campuran terbakar sendiri sebelum waktunya dan tekanan melonjak di dalam silinder. Gejalanya bertahap:</p>\n<ul>\n  <li><strong>Suara ngelitik atau denting</strong> terutama saat gas ditarik dalam atau menanjak.</li>\n  <li><strong>Tenaga turun.</strong> Pada motor injeksi, ECU menarik mundur pengapian untuk melindungi mesin sehingga tarikan loyo.</li>\n  <li><strong>Mesin cepat panas.</strong></li>\n  <li><strong>Konsumsi bensin naik.</strong></li>\n</ul>\n<p>Bila dibiarkan lama atau berat, kerusakan yang mungkin muncul:</p>\n<ul>\n  <li>Puncak piston berlubang atau erosi.</li>\n  <li>Alur ring piston retak, ring patah.</li>\n  <li>Paking kepala silinder bocor.</li>\n  <li>Busi meleleh atau elektrodanya rusak.</li>\n  <li>Bantalan pin kruk aus lebih cepat karena hentakan tekanan.</li>\n</ul>\n\n<h2>Oktan terlalu tinggi</h2>\n<p>Tidak berbahaya. Mesin tetap berjalan normal. Yang terjadi:</p>\n<ul>\n  <li>Biaya bensin lebih besar tanpa manfaat berarti.</li>\n  <li>Pada mesin kompresi rendah, tenaga dan irit biasanya sama saja, kadang terasa sedikit berbeda karena aditif.</li>\n</ul>\n\n<h2>Jika kamu terlanjur salah isi oktan</h2>\n<ol>\n  <li><strong>Terlanjur isi oktan lebih rendah:</strong> isi tambahan dengan oktan lebih tinggi bila memungkinkan agar rata-rata naik. Kendarai dengan gas ringan sampai menengah, hindari tarikan penuh dan tanjakan berat. Kalau terdengar ngelitik terus-menerus, hentikan dan kuras tangki.</li>\n  <li><strong>Terlanjur isi oktan lebih tinggi:</strong> tidak masalah. Jalankan seperti biasa.</li>\n</ol>\n\n<h2>Tanda mesin perlu oktan lebih tinggi</h2>\n<ul>\n  <li>Suara ngelitik hanya muncul saat beban berat atau udara panas.</li>\n  <li>Hilang atau berkurang setelah ganti ke oktan lebih tinggi.</li>\n  <li>Baru muncul setelah mesin dimodifikasi (bubut kepala, bore up, piston kubah).</li>\n</ul>\n\n<div class=\"note caution\"><strong>Jangan diremehkan</strong>Kerusakan akibat knocking sering baru terlihat setelah mesin dibongkar. Kalau ngelitik tidak hilang setelah oktan dinaikkan, penyebabnya bukan di bensin. Bawa ke bengkel dan periksa pengapian, campuran bahan bakar, serta kerak karbon.</div>"
  },
  {
    "slug": "apa-itu-knocking-mesin-ngelitik",
    "title": "Apa Itu Knocking atau Mesin Ngelitik?",
    "desc": "Knocking adalah pembakaran liar di dalam silinder. Kenali jenis, penyebab, dan cara mencegahnya.",
    "category": "Masalah mesin",
    "minutes": 6,
    "related": [
      "oktan-tidak-sesuai-dengan-kompresi-mesin",
      "hubungan-rasio-kompresi-dengan-oktan-bensin",
      "kompresi-mesin-dan-cara-kerjanya"
    ],
    "calc": {
      "anchor": "kompresi",
      "text": "Cek rasio kompresi dan saran oktan"
    },
    "body": "<p>Knocking, yang di bengkel disebut mesin ngelitik atau nyekrek, adalah pembakaran tidak normal di dalam silinder. Campuran yang seharusnya terbakar merata dari titik busi malah meledak di beberapa titik sekaligus. Hasilnya gelombang tekanan yang memukul dinding silinder dan puncak piston, terdengar seperti butiran logam kecil dikocok atau bunyi \"tik-tik-tik\".</p>\n\n<h2>Dua jenis yang sering tertukar</h2>\n<ul>\n  <li><strong>Detonasi:</strong> sebagian campuran yang tersisa di ujung ruang bakar terbakar sendiri setelah api busi menyebar. Dua api bertemu dan menghasilkan lonjakan tekanan.</li>\n  <li><strong>Pre-ignition (pengapian dini):</strong> campuran sudah menyala sebelum busi memercik, dipicu titik panas seperti kerak karbon membara atau elektroda busi terlalu panas. Ini lebih berbahaya karena piston masih naik melawan tekanan.</li>\n</ul>\n\n<h2>Penyebab umum</h2>\n<ol>\n  <li><strong>Oktan bensin terlalu rendah</strong> untuk rasio kompresi mesin.</li>\n  <li><strong>Pengapian terlalu maju</strong> atau sensor yang salah baca.</li>\n  <li><strong>Campuran terlalu miskin</strong> (kurang bensin) karena injektor kotor, jet tersumbat, atau kebocoran udara di intake.</li>\n  <li><strong>Kerak karbon</strong> di kepala piston dan ruang bakar yang menaikkan kompresi dan membentuk titik panas.</li>\n  <li><strong>Busi tidak sesuai</strong> (nilai panas terlalu tinggi).</li>\n  <li><strong>Mesin terlalu panas:</strong> pendingin lemah, oli kurang atau salah, kipas tidak bekerja.</li>\n  <li><strong>Modifikasi kompresi</strong> tanpa menyesuaikan bahan bakar dan pengapian.</li>\n</ol>\n\n<h2>Kenali gejalanya</h2>\n<ul>\n  <li>Bunyi denting logam dari mesin saat gas dibuka, terutama di tanjakan.</li>\n  <li>Tarikan melemah dan terasa seperti tersendat.</li>\n  <li>Mesin panas lebih cepat dari biasanya.</li>\n  <li>Busi berwarna putih atau berbintik.</li>\n</ul>\n<div class=\"note\"><strong>Belum tentu knocking</strong>Bunyi \"tik-tik\" juga bisa datang dari celah klep yang terlalu longgar, rantai keteng yang kendor, atau bantalan yang aus. Bedanya, bunyi klep ada di putaran rendah dan tetap saat idle, sedangkan knocking muncul saat gas dibuka dan mesin sedang berbeban.</div>\n\n<h2>Cara mencegah</h2>\n<ul>\n  <li>Pakai oktan sesuai anjuran atau satu tingkat lebih tinggi.</li>\n  <li>Bersihkan kerak karbon, throttle body, dan injektor secara berkala.</li>\n  <li>Pakai busi sesuai spesifikasi dan ganti sesuai jadwal.</li>\n  <li>Pastikan sistem pendingin dan oli dalam kondisi baik.</li>\n  <li>Cek kebocoran udara pada manifold dan selang vakum.</li>\n  <li>Setelah modifikasi kompresi, atur ulang pengapian dan campuran bahan bakar.</li>\n</ul>\n\n<div class=\"note caution\"><strong>Bahayanya</strong>Knocking ringan sesekali tidak langsung merusak, tetapi knocking yang terus-menerus dapat melubangi piston, mematahkan ring, dan membocorkan paking kepala dalam waktu singkat. Kurangi gas dan periksa mesin begitu bunyinya terdengar konsisten.</div>"
  }
];
