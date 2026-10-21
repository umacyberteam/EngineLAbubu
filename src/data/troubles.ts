import type { Trouble } from "./types";

export const troubles: Trouble[] = [
  {
    "slug": "motor-susah-hidup-saat-mesin-dingin",
    "title": "Kenapa Motor Susah Hidup saat Mesin Dingin?",
    "shortTitle": "Susah hidup saat mesin dingin",
    "desc": "Pagi hari motor harus diengkol berkali-kali, atau baru hidup setelah dipancing gas. Ini penyebab dan cara mengeceknya.",
    "answer": "Mesin dingin butuh campuran lebih kaya, percikan busi yang kuat, dan putaran starter yang cukup. Kalau salah satu dari tiga hal itu lemah (aki, busi, atau pengaturan bahan bakar saat dingin), motor jadi susah hidup. Penyebab paling sering: aki mulai drop, busi kotor atau celahnya salah, dan choke atau sensor suhu yang tidak bekerja.",
    "causes": [
      {
        "name": "Aki lemah atau terminal kotor",
        "why": "Udara dingin menurunkan kemampuan aki. Starter berputar lambat, percikan busi ikut lemah.",
        "check": "Dengarkan putaran starter. Kalau berat dan lambat, atau lampu meredup saat distarter, aki patut dicurigai. Cek tegangan: aki sehat sekitar 12,6 volt saat diam.",
        "fix": "Bersihkan terminal dan kencangkan. Isi ulang atau ganti aki bila drop."
      },
      {
        "name": "Busi kotor, basah, atau celah tidak tepat",
        "why": "Busi yang berkerak atau basah bensin tidak bisa memercik dengan baik saat campuran masih dingin.",
        "check": "Lepas busi dan lihat elektrodanya. Warna cokelat muda itu normal. Hitam berminyak atau basah menandakan masalah. Ukur celah dengan feeler gauge sesuai buku servis.",
        "fix": "Bersihkan atau ganti busi. Setel celah sesuai spesifikasi."
      },
      {
        "name": "Choke atau sistem start dingin bermasalah",
        "why": "Pada karburator, choke atau starter otomatis memperkaya campuran. Bila macet, campuran terlalu miskin atau terlalu basah. Pada injeksi, ECU memperkaya campuran berdasarkan sensor suhu mesin.",
        "check": "Karburator: cek kerja tuas choke atau katup starter dan kabelnya. Injeksi: bila lampu indikator FI menyala atau berkedip, ada sensor yang bermasalah dan perlu dibaca dengan alat scan.",
        "fix": "Bersihkan atau setel choke. Ganti sensor suhu mesin atau sensor suhu udara bila terbukti rusak."
      },
      {
        "name": "Bensin lama, kotor, atau bercampur air",
        "why": "Bensin yang lama tersimpan kehilangan zat yang mudah menguap, sehingga sulit menyala saat dingin.",
        "check": "Perhatikan apakah motor lama tidak dipakai. Lihat apakah ada air atau endapan di tangki atau di saringan bensin.",
        "fix": "Kuras dan ganti bensin. Bersihkan atau ganti saringan bensin."
      },
      {
        "name": "Filter udara kotor atau saluran masuk bocor",
        "why": "Aliran udara yang kurang membuat campuran terlalu kaya. Kebocoran udara membuatnya terlalu miskin.",
        "check": "Buka filter udara, cek kondisi. Periksa karet intake dan selang vakum dari retak.",
        "fix": "Bersihkan atau ganti filter. Ganti karet intake yang retak."
      },
      {
        "name": "Kompresi bocor",
        "why": "Ring piston aus atau klep tidak menutup rapat membuat tekanan di silinder rendah, dan masalah ini terasa jelas saat mesin dingin.",
        "check": "Ukur tekanan kompresi dengan compression tester dan bandingkan dengan buku servis. Cek juga celah klep.",
        "fix": "Setel celah klep. Bila tekanan tetap rendah, perlu turun mesin di bengkel."
      }
    ],
    "workshop": "Ke bengkel bila motor mengalami hidup-mati terus-menerus, tercium bensin pekat di knalpot, lampu FI menyala, atau tekanan kompresi di bawah batas servis.",
    "prevent": "Panaskan mesin sebentar sebelum jalan. Ganti busi sesuai jadwal. Jaga aki dengan memakai motor rutin atau mengisinya ulang. Jangan menggas berlebihan saat mesin dingin karena justru bisa membanjiri busi.",
    "related": [
      "motor-brebet-saat-digas",
      "mesin-motor-cepat-panas"
    ]
  },
  {
    "slug": "motor-brebet-saat-digas",
    "title": "Kenapa Motor Brebet saat Digas?",
    "shortTitle": "Brebet saat digas",
    "desc": "Mesin terputus-putus, tersendat, atau terasa batuk saat gas dibuka. Cek penyebabnya dari yang paling sering.",
    "answer": "Brebet berarti mesin tidak mendapat campuran bensin dan udara atau percikan api yang konsisten saat beban naik. Penyebab paling umum adalah bensin yang tidak sampai dengan lancar (saringan, injektor, atau jet kotor), busi lemah, dan kebocoran udara di intake.",
    "causes": [
      {
        "name": "Injektor, throttle body, atau jet karburator kotor",
        "why": "Saluran bahan bakar yang sempit tersumbat endapan. Saat gas dibuka, bensin yang masuk tidak cukup.",
        "check": "Motor injeksi: bersihkan throttle body dan cek apakah semprotan injektor rata. Karburator: cek apakah jet pilot dan jet utama bersih dengan melihatnya langsung.",
        "fix": "Bersihkan injektor, throttle body, dan jet dengan cairan pembersih yang sesuai. Ganti bila rusak."
      },
      {
        "name": "Saringan bensin atau pompa bensin lemah",
        "why": "Aliran dan tekanan bensin tidak cukup saat kebutuhan naik di putaran tinggi.",
        "check": "Brebet terasa makin parah pada gas penuh atau tanjakan. Cek saringan bensin dari kotoran dan ukur tekanan bila alatnya ada.",
        "fix": "Ganti saringan bensin. Ganti pompa bila tekanannya di bawah spesifikasi."
      },
      {
        "name": "Busi aus atau koil lemah",
        "why": "Percikan yang lemah gagal membakar campuran yang makin padat saat gas dibuka.",
        "check": "Lepas busi dan periksa elektroda serta celahnya. Cek kabel busi, tutup busi (cop), dan koil dari retak atau panas berlebih.",
        "fix": "Ganti busi dan tutup busi. Ganti koil bila hasil tes percikan lemah."
      },
      {
        "name": "Kebocoran udara di intake",
        "why": "Udara ekstra masuk dari retakan karet manifold sehingga campuran terlalu miskin.",
        "check": "Dengarkan desis di dekat intake saat mesin hidup. Semprot sedikit cairan pembersih elektrik di sekitar karet intake dengan hati-hati. Bila putaran mesin berubah, ada kebocoran.",
        "fix": "Ganti karet intake atau selang vakum yang retak. Kencangkan klem."
      },
      {
        "name": "Sensor bermasalah (TPS, MAP, suhu)",
        "why": "Sensor yang salah baca membuat ECU menentukan campuran dan pengapian yang salah.",
        "check": "Lampu FI menyala atau berkedip. Baca kode kesalahan dengan alat scan.",
        "fix": "Ganti sensor yang terbukti rusak. Bersihkan konektor yang kotor."
      },
      {
        "name": "Filter udara tersumbat",
        "why": "Udara yang masuk kurang membuat campuran terlalu kaya dan mesin tersedak saat gas dibuka cepat.",
        "check": "Buka dan lihat apakah filter pekat atau basah oli.",
        "fix": "Bersihkan atau ganti filter udara."
      },
      {
        "name": "Bensin tercampur air atau kotoran",
        "why": "Air tidak bisa terbakar dan membuat mesin tersendat mendadak, sering setelah hujan atau isi di tempat yang kurang bersih.",
        "check": "Perhatikan apakah brebet muncul setelah isi bensin di tempat tertentu. Cek endapan di tangki atau saringan.",
        "fix": "Kuras tangki, ganti bensin, dan bersihkan saringan."
      }
    ],
    "workshop": "Bawa ke bengkel bila brebet muncul bersama lampu FI menyala, bau bensin berlebihan, atau tidak hilang setelah busi, filter, dan pembersihan throttle body dilakukan.",
    "prevent": "Pakai bensin dari SPBU yang terpercaya, ganti busi dan filter sesuai jadwal, dan bersihkan throttle body setiap beberapa ribu kilometer.",
    "related": [
      "motor-tiba-tiba-kehilangan-tenaga",
      "motor-susah-hidup-saat-mesin-dingin"
    ]
  },
  {
    "slug": "mesin-motor-cepat-panas",
    "title": "Kenapa Mesin Motor Cepat Panas?",
    "shortTitle": "Mesin cepat panas",
    "desc": "Jarum temperatur naik cepat, mesin terasa panas di kaki, atau lampu overheat menyala. Cek dari sistem pendingin sampai pengapian.",
    "answer": "Mesin panas karena panas yang dihasilkan lebih besar dari panas yang dibuang. Paling sering penyebabnya: cairan pendingin atau oli kurang, kipas dan radiator tidak bekerja baik, campuran terlalu miskin, atau mesin dipaksa kerja berat dalam kondisi macet.",
    "causes": [
      {
        "name": "Cairan pendingin atau oli mesin kurang",
        "why": "Pada motor berpendingin cair, kurangnya coolant membuat panas tidak terbuang. Pada motor berpendingin udara, oli ikut berperan sebagai pendingin.",
        "check": "Cek level coolant di tabung cadangan saat mesin dingin. Cek level oli lewat jendela atau batang celup.",
        "fix": "Tambah coolant atau oli sesuai spesifikasi. Cari sumber bocor bila level cepat turun."
      },
      {
        "name": "Kipas radiator tidak berputar",
        "why": "Saat macet atau kecepatan rendah, aliran udara alami tidak cukup, kipas yang mati membuat suhu cepat melonjak.",
        "check": "Setelah mesin panas dan idle, dengarkan apakah kipas menyala. Cek sekring, relay, dan konektor kipas.",
        "fix": "Ganti kipas, relay, atau sensor suhu kipas yang rusak."
      },
      {
        "name": "Radiator tersumbat, kotor, atau tutupnya lemah",
        "why": "Kerak dan lumpur menyumbat sirip, sedangkan tutup radiator yang lemah tidak menahan tekanan sehingga titik didih turun.",
        "check": "Lihat sirip radiator dari sumbatan debu atau lumpur. Cek karet tutup radiator.",
        "fix": "Bersihkan sirip dengan semprotan air lembut. Kuras dan ganti coolant, ganti tutup radiator bila lemah."
      },
      {
        "name": "Termostat atau pompa air bermasalah",
        "why": "Termostat yang macet menutup menahan aliran coolant. Pompa air yang lemah gagal mengalirkan coolant.",
        "check": "Mesin cepat panas padahal level coolant dan kipas normal. Selang radiator atas panas sekali sedangkan bawah dingin.",
        "fix": "Ganti termostat atau seal pompa air di bengkel."
      },
      {
        "name": "Campuran terlalu miskin atau pengapian terlalu maju",
        "why": "Pembakaran jadi lebih panas dan mesin cepat memanas.",
        "check": "Cek kebocoran intake, injektor atau jet kotor, dan warna busi yang putih.",
        "fix": "Bersihkan sistem bahan bakar, atasi kebocoran udara, setel pengapian."
      },
      {
        "name": "Oktan tidak sesuai atau kerak karbon menumpuk",
        "why": "Bensin beroktan terlalu rendah memicu knocking, kerak karbon menambah titik panas.",
        "check": "Ada bunyi ngelitik saat gas ditarik atau saat menanjak.",
        "fix": "Pakai oktan sesuai anjuran dan bersihkan ruang bakar."
      },
      {
        "name": "CVT slip atau rem menyeret",
        "why": "Kehilangan tenaga akibat gesekan membuat mesin bekerja ekstra dan menghasilkan panas.",
        "check": "Roda terasa berat saat dilepas dari gas, atau cakram rem berwarna kebiruan dan panas.",
        "fix": "Periksa kirian dan sistem rem, perbaiki yang menyeret."
      }
    ],
    "workshop": "Bila jarum suhu masuk zona merah, matikan mesin dan jangan dipaksa jalan. Pemakaian dalam keadaan overheat dapat melengkungkan kepala silinder, membuat paking bocor, dan menggores silinder.",
    "prevent": "Cek coolant dan oli secara berkala, bersihkan radiator, ganti coolant sesuai jadwal, dan hindari menahan putaran tinggi terlalu lama di kondisi macet.",
    "related": [
      "motor-tiba-tiba-kehilangan-tenaga",
      "motor-brebet-saat-digas"
    ],
    "caution": "Jangan membuka tutup radiator saat mesin panas. Cairan dan uap bertekanan bisa menyembur dan menyebabkan luka bakar. Tunggu hingga mesin benar-benar dingin."
  },
  {
    "slug": "motor-matic-bergetar-saat-tarikan-awal",
    "title": "Kenapa Motor Matic Bergetar saat Tarikan Awal?",
    "shortTitle": "Matic bergetar saat tarikan awal",
    "desc": "Motor matic bergetar atau nyentak ketika mulai jalan. Hampir selalu berasal dari kirian (CVT), terutama sisi kopling.",
    "answer": "Getaran saat mulai jalan hampir selalu datang dari sistem kopling sentrifugal di CVT: kampas ganda yang aus atau licin, per kampas ganda (per sentri) yang lemah atau tidak seragam, atau mangkok ganda yang tidak rata. Roller dan van belt yang aus juga bisa membuatnya bergetar.",
    "causes": [
      {
        "name": "Kampas ganda aus atau terglazur",
        "why": "Kampas kopling yang tipis atau mengkilap (glazing) tidak mencengkeram mangkok secara halus. Gerakannya melompat-lompat dan terasa sebagai getaran.",
        "check": "Buka cover CVT dan ukur ketebalan kampas dengan jangka sorong. Lihat permukaan apakah mengkilap atau tidak rata.",
        "fix": "Ganti satu set kampas ganda. Ganti per sentri sekalian bila sudah lama."
      },
      {
        "name": "Per kampas ganda (per sentri) lemah atau tidak seragam",
        "why": "Pegas yang kekuatannya tidak sama membuat kampas menempel tidak serempak.",
        "check": "Bandingkan panjang dan kekakuan ketiga atau dua pegas. Ada yang lebih pendek atau lebih lembek.",
        "fix": "Ganti semua per sekaligus dengan satu set."
      },
      {
        "name": "Mangkok ganda bergelombang, baret, atau oval",
        "why": "Permukaan mangkok yang tidak rata membuat kampas bergetar saat masuk.",
        "check": "Lihat permukaan dalam mangkok: bergelombang, baret dalam, atau ada bekas panas berwarna kebiruan.",
        "fix": "Ganti mangkok ganda. Bila tipis, bubut hanya jika masih di atas batas servis."
      },
      {
        "name": "Roller aus atau berat tidak sama",
        "why": "Roller yang berbentuk oval atau memiliki bidang datar menyebabkan pulley depan bergerak tersendat.",
        "check": "Ukur diameter dan panjang tiap roller, dan timbang bila memungkinkan. Lihat apakah ada bidang datar.",
        "fix": "Ganti satu set roller."
      },
      {
        "name": "Van belt retak atau aus",
        "why": "Belt yang menipis atau bergerigi tidak lagi mencengkeram pulley dengan halus.",
        "check": "Ukur lebar belt dan bandingkan dengan batas minimal di buku servis. Lihat retak halus pada sisi dalam.",
        "fix": "Ganti van belt bersama roller bila keduanya sudah lama."
      },
      {
        "name": "Pulley kotor, seret, atau per CVT lemah",
        "why": "Debu kampas dan kotoran membuat gerakan pulley tidak halus. Per CVT yang lemah mengubah ritme perpindahan rasio.",
        "check": "Bersihkan dan lihat apakah pulley bergerak halus. Perhatikan apakah per CVT sudah lebih pendek dari standarnya.",
        "fix": "Bersihkan dengan pembersih yang sesuai (tanpa pelumas pada permukaan belt). Ganti per CVT bila sudah lemah."
      },
      {
        "name": "Dudukan mesin atau as roda belakang longgar",
        "why": "Getaran bisa berasal dari luar CVT, misalnya karet engine mounting aus atau baut kendor.",
        "check": "Goyangkan mesin, cek karet dan baut mounting.",
        "fix": "Ganti karet dan kencangkan baut sesuai torsi."
      }
    ],
    "workshop": "Bila getaran disertai bunyi dengung keras, bau gosong, atau motor tersendat dari diam, jangan ditunda. Kampas yang tinggal tipis dapat merusak mangkok sekaligus.",
    "prevent": "Cek kirian secara berkala, ganti komponen aus per set (kampas ganda dan per sentri sekaligus, roller dan belt sekaligus), dan jaga CVT bebas dari oli dan gemuk yang tidak sesuai.",
    "related": [
      "motor-tiba-tiba-kehilangan-tenaga",
      "mesin-motor-cepat-panas"
    ],
    "kirian": true
  },
  {
    "slug": "motor-tiba-tiba-kehilangan-tenaga",
    "title": "Kenapa Motor Tiba-Tiba Kehilangan Tenaga?",
    "shortTitle": "Tiba-tiba kehilangan tenaga",
    "desc": "Tarikan mendadak loyo atau motor tidak mau melaju. Urutan cek dari bahan bakar, udara, pengapian, hingga transmisi.",
    "answer": "Tenaga bergantung pada tiga hal yang harus lengkap: bensin yang cukup, udara yang cukup, dan api yang kuat, ditambah penyaluran tenaga ke roda yang tidak slip. Kehilangan tenaga mendadak biasanya karena salah satunya terganggu, atau ECU masuk mode darurat untuk melindungi mesin.",
    "causes": [
      {
        "name": "ECU masuk mode darurat (limp mode)",
        "why": "Pada motor injeksi, sensor rusak atau mesin overheat membuat ECU membatasi tenaga.",
        "check": "Lampu FI menyala atau berkedip. Tenaga turun mendadak tapi mesin tetap hidup.",
        "fix": "Baca kode kesalahan dan perbaiki sensornya. Matikan mesin dan dinginkan bila penyebabnya panas."
      },
      {
        "name": "Bahan bakar terhambat",
        "why": "Saringan atau pompa bensin lemah, atau ada air dalam bensin.",
        "check": "Tenaga hilang saat gas ditarik dalam dan pulih saat gas dilepas. Cek saringan, pompa, dan kualitas bensin.",
        "fix": "Ganti saringan, pompa, atau kuras tangki."
      },
      {
        "name": "Udara terhambat",
        "why": "Filter udara sangat kotor atau throttle body berkerak.",
        "check": "Buka filter udara dan lihat kondisinya. Cek apakah katup throttle bergerak halus.",
        "fix": "Ganti filter dan bersihkan throttle body."
      },
      {
        "name": "Pengapian lemah",
        "why": "Busi, tutup busi, atau koil mulai gagal sehingga sebagian siklus tidak terbakar.",
        "check": "Mesin terasa pincang atau brebet bersama kehilangan tenaga. Periksa busi dan koil.",
        "fix": "Ganti busi atau koil yang lemah."
      },
      {
        "name": "Kirian (CVT) slip",
        "why": "Van belt aus, roller aus, atau kampas ganda licin membuat tenaga mesin tidak sampai ke roda. Putaran mesin naik tapi motor tidak melaju.",
        "check": "RPM tinggi tetapi kecepatan tidak mengikuti, sering disertai bau gosong. Buka CVT dan periksa belt, roller, dan kampas.",
        "fix": "Ganti komponen kirian yang aus. Cek juga kebocoran oli yang membasahi belt."
      },
      {
        "name": "Knalpot tersumbat",
        "why": "Gas buang yang tidak bisa keluar membuat tenaga turun dan mesin panas.",
        "check": "Tenaga hilang di putaran atas, knalpot sangat panas, atau suara aneh dari muffler. Cek apakah ada penyok atau sumbatan.",
        "fix": "Bersihkan atau ganti knalpot."
      },
      {
        "name": "Kompresi turun",
        "why": "Ring piston atau klep aus sehingga tekanan pembakaran bocor.",
        "check": "Ukur tekanan kompresi dan bandingkan dengan buku servis. Biasanya disertai asap putih dan konsumsi oli naik.",
        "fix": "Setel celah klep. Bila rendah, perlu perbaikan mesin."
      },
      {
        "name": "Rem menyeret atau ban kurang angin",
        "why": "Hambatan luar membuat motor terasa berat seperti kehilangan tenaga.",
        "check": "Putar roda dengan tangan saat motor diangkat, dan cek tekanan ban.",
        "fix": "Bersihkan dan setel rem, isi angin ban sesuai anjuran."
      }
    ],
    "workshop": "Jangan memaksa jalan bila tenaga hilang disertai suara logam, asap pekat, bau gosong, atau jarum suhu di zona merah. Matikan mesin dan cek dulu.",
    "prevent": "Ikuti jadwal servis berkala untuk busi, filter, belt, dan oli. Jangan mengabaikan lampu FI yang menyala, dan isi bensin di tempat yang bersih.",
    "related": [
      "motor-brebet-saat-digas",
      "motor-matic-bergetar-saat-tarikan-awal"
    ]
  }
];
