/**
 * ZAITUNU PROJECT — Curated Master Data
 * Website Publik SDM & Career Portal Yayasan Dar el-Iman
 */

// 1. Konsep Metafora Zaitunu
export const ZAITUNU_METAPHOR = {
  brand: 'ZAITUNU',
  subtitle: 'Human Capital & Career Ecosystem',
  tagline: 'Berakar pada Nilai. Bertumbuh dalam Kompetensi. Berbuah dalam Pengabdian.',
  overview:
    'Seperti pohon zaitun yang diberkahi, kokoh akarnya, rimbun dedaunannya, dan melimpah buah kemanfaatannya. Zaitunu merefleksikan ekosistem pembinaan sumber daya manusia di Yayasan Dar el-Iman yang berlandaskan syariah, profesional, dan menumbuhkan setiap insan menuju puncak pengabdian terbaik.',
  pillars: [
    {
      id: 'akar',
      part: 'Akar (Root)',
      symbol: 'Spiritual Foundation',
      title: 'Core Values PINTAR',
      desc: 'Nilai-nilai luhur (Peduli, Islami, Niat Mulia, Taat, Amanah, Ramah) yang tertanam kuat di hati setiap insan pendidik sebagai kompas moral dan spiritual.',
      icon: 'Anchor',
      color: 'emerald',
    },
    {
      id: 'batang',
      part: 'Batang (Trunk)',
      symbol: 'System & Governance',
      title: 'Tata Kelola & Sistem SDM',
      desc: 'Struktur kelembagaan yang kokoh melalui digitalisasi SIMAK, SOP operasional terstandar, skala upah dua titik yang adil, serta evaluasi kinerja transparan.',
      icon: 'Shield',
      color: 'blue',
    },
    {
      id: 'cabang',
      part: 'Cabang (Branches)',
      symbol: 'Career Paths & Units',
      title: '19+ Unit & Jalur Karier',
      desc: 'Beragam wadah pengabdian mulai dari PAUD, Sekolah Dasar, Menengah, Pesantren Boarding, hingga Lembaga Dakwah dan Sosial kemasyarakatan.',
      icon: 'GitFork',
      color: 'amber',
    },
    {
      id: 'daun',
      part: 'Daun (Leaves)',
      symbol: 'Human Talent',
      title: 'Asatidzah & Pegawai',
      desc: 'Ratusan pendidik dan tenaga kependidikan yang terus memperbarui keilmuan, menyejukkan lingkungan belajar, dan menjadi teladan bagi santri.',
      icon: 'Leaf',
      color: 'emerald',
    },
    {
      id: 'buah',
      part: 'Buah (Fruits)',
      symbol: 'Outcomes & Impact',
      title: 'Pendidikan, Dakwah & Kemanfaatan',
      desc: 'Generasi Rabbani yang bertauhid lurus, berakhlak mulia, cerdas, serta keberkahan amal jariyah bagi para guru dan kaum muslimin.',
      icon: 'Sparkles',
      color: 'gold',
    },
    {
      id: 'bibit',
      part: 'Bibit (Seedlings)',
      symbol: 'New Talents',
      title: 'Talenta & Calon Pegawai',
      desc: 'Pribadi-pribadi berintegritas yang disambut melalui seleksi objektif untuk memulai perjalanan pengabdian dan bertumbuh bersama.',
      icon: 'Sprout',
      color: 'teal',
    },
  ],
};

// Aliases for bulletproof compatibility
ZAITUNU_METAPHOR.pillars.forEach((p) => {
  p.meaning = p.title;
  p.action = p.desc;
});
ZAITUNU_METAPHOR.parts = ZAITUNU_METAPHOR.pillars;

// 2. Core Values PINTAR (Wajib & Resmi Sesuai Dokumen Master)
export const PINTAR_VALUES = [
  {
    id: 'p',
    letter: 'P',
    title: 'Peduli',
    subtitle: 'Care & Environment Alignment',
    summary: 'Peduli kepada sesama, lingkungan kerja, peserta didik, dan masyarakat.',
    desc: 'Sikap merasa terpanggil untuk melakukan hal-hal yang bermanfaat, memiliki empati tinggi, mengamalkan nilai itsar, serta konsisten menjaga kebersihan dan kelestarian fasilitas bersama.',
    indicators: [
      'Proaktif membantu rekan kerja yang membutuhkan tanpa harus diminta',
      'Keterlibatan aktif dalam program sosial kemanusiaan dan umat',
      'Responsif dan solutif terhadap pelayanan santri dan wali murid',
      'Konsisten memelihara kerapian ruang kerja dan aset lembaga',
    ],
    icon: 'HeartHandshake',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  {
    id: 'i',
    letter: 'I',
    title: 'Islami',
    subtitle: 'Syar\'i & Ilmiah',
    summary: 'Menjadikan nilai-nilai Islam sebagai dasar sikap dan perilaku.',
    desc: 'Memiliki aqidah yang lurus dan akhlak mulia sesuai pemahaman As-Salafus Ash-Shalih. Diwujudkan melalui prinsip Al-Ilmu Qoblal Qouli wal \'Amali, serta semangat Tashfiyah & Tarbiyah.',
    indicators: [
      'Keteladanan adab, cara berkomunikasi, dan berpakaian sesuai sunnah',
      'Integritas ilmiah memastikan materi bersumber dari dalil yang shahih',
      'Semangat belajar aktif (Tarbiyah) meningkatkan kompetensi diri',
      'Menerapkan adab islami dalam setiap interaksi dinas dan sosial',
    ],
    icon: 'BookOpenCheck',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
  },
  {
    id: 'n',
    letter: 'N',
    title: 'Niat Mulia',
    subtitle: 'Sincerity & Integrity',
    summary: 'Bekerja dengan niat yang baik dan orientasi pengabdian.',
    desc: 'Upaya setiap pegawai untuk senantiasa meluruskan niat bekerja ikhlas karena Allah Ta\'ala, sehingga rutinitas kerja bermakna ibadah akhirat dan mendatangkan keberkahan.',
    indicators: [
      'Konsistensi integritas dan mutu kerja, baik diawasi maupun mandiri',
      'Berpikir positif (Husnuzhan) menyikapi tantangan dan dinamika kerja',
      'Mengutamakan kemaslahatan dakwah dan pendidikan di atas ego pribadi',
      'Hadirnya rasa muraqabatullah (merasa diawasi Allah) dalam bertugas',
    ],
    icon: 'Sparkles',
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
  },
  {
    id: 't',
    letter: 'T',
    title: 'Taat',
    subtitle: 'Discipline & Compliance',
    summary: 'Taat kepada Allah, aturan syariat, ketentuan yayasan, dan SOP organisasi.',
    desc: 'Sikap patuh, disiplin, dan berkomitmen tinggi terhadap aturan organisasi, norma kelembagaan, serta arahan pimpinan selama tidak bertentangan dengan syariat Islam.',
    indicators: [
      'Mematuhi seluruh SOP, tata tertib, dan jam kerja tepat waktu',
      'Ekselensi eksekusi arahan pimpinan secara cepat, tepat, dan solutif',
      'Komitmen mutu dalam pemenuhan target kurikulum dan administrasi',
      'Menjaga ketertiban organisasi melalui pelaporan yang transparan',
    ],
    icon: 'ClockCheck',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  {
    id: 'a',
    letter: 'A',
    title: 'Amanah',
    subtitle: 'Trustworthy & Professional',
    summary: 'Menjalankan tanggung jawab dengan integritas dan dapat dipertanggungjawabkan.',
    desc: 'Sikap bertanggung jawab, jujur, dan berintegritas tinggi dalam menjalankan tugas, kewajiban, serta pengelolaan amanah umat berlandaskan 5 indikator risalah pegawai.',
    indicators: [
      'Profesional dan akuntabel mengelola target kerja secara produktif',
      'Berempati memperlakukan orang lain sebagaimana ingin diperlakukan',
      'Adil dan tertib prosedur tanpa pilih kasih (first-come, first-served)',
      'Teguh menolak sogokan, suap, maupun gratifikasi terkait jabatan',
      'Memanfaatkan seluruh waktu kerja secara produktif untuk urusan dinas',
    ],
    icon: 'ShieldCheck',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    id: 'r',
    letter: 'R',
    title: 'Ramah',
    subtitle: 'Humble & Conducive',
    summary: 'Membangun interaksi yang santun, positif, terbuka, dan menghargai orang lain.',
    desc: 'Sikap yang hangat, santun, dan komunikatif guna mewujudkan lingkungan kerja serta ekosistem pendidikan yang sehat, bersahabat, nyaman, dan terbebas dari ghibah.',
    indicators: [
      'Membudayakan 5S: Senyum, Sapa, Salam, Sopan, dan Santun',
      'Komunikasi santun dan menghindari tutur kata yang menyakiti sesama',
      'Menjaga iklim kerja yang kondusif, menjauhi ghibah, dan mempererat ukhuwah',
      'Menyambut tamu, orang tua santri, dan masyarakat dengan ramah',
    ],
    icon: 'Smile',
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
  },
];

PINTAR_VALUES.forEach((v) => {
  v.code = v.id;
  v.name = v.title;
  v.indicator = Array.isArray(v.indicators) ? v.indicators[0] : (v.indicator || '');
});

// 3. Unit Pendidikan & Lembaga Resmi Yayasan Dar el-Iman (Grouped)
export const MOCK_UNITS = [
  {
    category: 'Pendidikan Anak Usia Dini (PAUD)',
    categorySlug: 'paud',
    desc: 'Penanaman tauhid sejak dini, pembiasaan adab islami, dan metode bermain yang bermakna.',
    units: [
      { id: 'tkit-1', code: 'TKIT-1', name: 'TK IT Dar el-Iman 1', location: 'Padang, Sumbar', address: 'Jl. Gunung Juaro, Surau Gadang, Padang', focus: 'Tahfidz Juz 30 & Adab', desc: 'Rintisan awal pembinaan adab, doa harian, dan kecakapan motorik anak usia dini.', studentCount: '120+' },
      { id: 'tkit-2', code: 'TKIT-2', name: 'TK IT Dar el-Iman 2', location: 'Padang, Sumbar', address: 'Sawahan, Padang Timur, Padang', focus: 'Karakter & Kemandirian', desc: 'Pengenalan nilai-nilai sunnah, stimulasi bahasa, dan kemandirian perilaku.', studentCount: '95+' },
      { id: 'tkit-3', code: 'TKIT-3', name: 'TK IT Dar el-Iman 3', location: 'Padang, Sumbar', address: 'Nanggalo, Padang', focus: 'Kecakapan Sensorik & Doa', desc: 'Pembiasaan akhlak mulia dan kecintaan menghafal Al-Qur\'an sejak masa balita.', studentCount: '80+' },
      { id: 'taud-saqu', code: 'TAUD', name: 'TAUD SaQu Dar el-Iman', location: 'Padang, Sumbar', address: 'Islamic Center Dar el-Iman, Padang', focus: 'Tahfidz Al-Qur\'an Usia Dini', desc: 'Metode intensif talaqqi Al-Qur\'an dan tahsin khusus usia pra-sekolah dasar.', studentCount: '150+' },
    ],
  },
  {
    category: 'Pendidikan Dasar (Dikdas)',
    categorySlug: 'dikdas',
    desc: 'Pondasi akademik kuat berpadu kurikulum tahfidz mutqin dan keteladanan akhlak.',
    units: [
      { id: 'mit', code: 'MIT', name: 'Madrasah Ibtidaiyah Terpadu (MIT)', location: 'Padang', address: 'Jl. Belanti Indah, Lolong Belanti, Padang', focus: 'Integrasi Sains & Diniyah', desc: 'Kurikulum Kemenag berpadu penguatan diniyah salaf dan tahfidz mutqin.', studentCount: '340+' },
      { id: 'sdit-1', code: 'SDIT-1', name: 'SD IT Dar el-Iman 1', location: 'Gurun Laweh, Padang', address: 'Jl. Gurun Laweh, Nanggalo, Padang', focus: 'Sekolah Rujukan & Penggerak', desc: 'Sekolah dasar pelopor dengan kurikulum terpadu nasional dan muatan lokal sunnah.', studentCount: '620+' },
      { id: 'sdit-2', code: 'SDIT-2', name: 'SD IT Dar el-Iman 2', location: 'Sawahan, Padang', address: 'Jl. Sawahan No. 12, Padang Timur', focus: 'Tahsin Bersanad & Adab', desc: 'Fokus pembinaan karakter santri dan akselerasi hafalan Al-Qur\'an.', studentCount: '480+' },
      { id: 'sdit-3', code: 'SDIT-3', name: 'SD IT Dar el-Iman 3', location: 'Nanggalo, Padang', address: 'Jl. Joni Anwar, Lapai, Nanggalo, Padang', focus: 'Pendidikan Ramah Anak', desc: 'Suasana belajar inspiratif dengan pembinaan akhlak mulia dan prestasi akademik.', studentCount: '390+' },
    ],
  },
  {
    category: 'Pendidikan Menengah (Dikmen)',
    categorySlug: 'dikmen',
    desc: 'Membentuk generasi tangguh berwawasan global, hafizh Al-Qur\'an, dan berprestasi.',
    units: [
      { id: 'smpit-padang', code: 'SMPIT', name: 'SMP IT Dar el-Iman Padang', location: 'Gunung Juaro, Padang', address: 'Kompleks Islamic Center, Nanggalo, Padang', focus: 'Fullday & Boarding', desc: 'Persiapan matang ilmu syar\'i, sains modern, dan bahasa Arab aktif.', studentCount: '510+' },
      { id: 'smpit-50kota', code: 'SMPIT-50K', name: 'SMP IT Dar el-Iman 50 Kota', location: 'Kab. 50 Kota, Sumbar', address: 'Kec. Harau, Kab. Lima Puluh Kota, Sumbar', focus: 'Penguatan Diniyah & Tahfidz', desc: 'Kampus alam berbasis keteladanan santri di Kabupaten 50 Kota.', studentCount: '220+' },
      { id: 'smait', code: 'SMAIT', name: 'SMA IT Dar el-Iman Padang', location: 'Islamic Center Padang', address: 'Jl. Gunung Juaro, Nanggalo, Padang', focus: 'Persiapan PTN & Studi Timur Tengah', desc: 'Lulusan diproyeksikan melanjutkan ke Universitas Islam Madinah, LIPIA, dan PTN ternama.', studentCount: '380+' },
    ],
  },
  {
    category: 'Pesantren & Asrama',
    categorySlug: 'pesantren',
    desc: 'Kawah candradimuka pembinaan santri 24 jam dengan suasana ilmiah dan ukhuwah.',
    units: [
      { id: 'ponpes-putra', code: 'PONTREN-PA', name: 'Pondok Pesantren Putra Dar el-Iman', location: 'Padang', address: 'Kompleks Islamic Center Putra, Nanggalo, Padang', focus: 'Kitab Turats & Bahasa Arab', desc: 'Pendidikan kader ulama, talaqqi kitab ulama salaf, dan penguasaan bahasa Arab 24 jam.', studentCount: '320+' },
      { id: 'ponpes-putri', code: 'PONTREN-PI', name: 'Pondok Pesantren Putri Dar el-Iman', location: 'Padang', address: 'Kompleks Putri Dar el-Iman, Kuranji, Padang', focus: 'Tahfidzul Qur\'an & Tarbiyah Nisa\'', desc: 'Pembentukan shahabiyah masa depan dengan keteguhan adab dan hafalan mutqin.', studentCount: '290+' },
    ],
  },
  {
    category: 'Dakwah, Sosial & Operasional',
    categorySlug: 'operasional',
    desc: 'Pilar penopang dakwah umat, kemanusiaan, logistik, dan kemandirian ekonomi syariah.',
    units: [
      { id: 'dei-peduli', code: 'PEDULI', name: 'Dar el-Iman Peduli', location: 'Padang', address: 'Gedung Pusat DEI, Nanggalo, Padang', focus: 'Sosial, Kemanusiaan & ZISWAF', desc: 'Lembaga amil zakat dan aksi tanggap darurat bencana di wilayah Sumatera Barat.', studentCount: '' },
      { id: 'media-dakwah', code: 'MEDIA', name: 'Divisi Media & Radio Surau', location: 'Padang', address: 'Studio Radio Surau FM, Padang', focus: 'Radio Surau & Konten Syiar', desc: 'Pusat penyiaran radio dakwah FM, streaming video, dan publikasi media sosial resmi.', studentCount: '' },
      { id: 'koperasi', code: 'KOP-SYAR', name: 'Koperasi Syariah Dar el-Iman', location: 'Padang', address: 'Jl. Gunung Juaro, Nanggalo, Padang', focus: 'Pemberdayaan Ekonomi Umat', desc: 'Lembaga simpan pinjam syariah dan unit usaha ritel untuk kesejahteraan pegawai.', studentCount: '' },
      { id: 'sarpras-logistik', code: 'SARPRAS', name: 'Divisi Sarpras & Logistik', location: 'Padang', address: 'Gedung Workshop Yayasan Dar el-Iman', focus: 'Infrastruktur & Fasilitas Lembaga', desc: 'Pengelolaan aset, pemeliharaan gedung sekolah, dan armada transportasi santri.', studentCount: '' },
    ],
  },
];

// Add items alias to MOCK_UNITS for full backward compatibility
MOCK_UNITS.forEach((g) => {
  g.items = g.units;
});

// 4. Manfaat & Nilai Mengabdi (Why Join Us)
export const BENEFITS_DATA = [
  {
    id: 'lingkungan-islami',
    title: 'Lingkungan Kerja Islami & Sunnah',
    desc: 'Kultur kerja yang menjunjung tinggi shalat berjamaah awal waktu, kajian ilmu rutin, saling mengingatkan dalam kebaikan, dan bebas dari iklim ghibah.',
    icon: 'Sun',
  },
  {
    id: 'jenjang-karier',
    title: 'Jenjang Karier yang Terukur',
    desc: 'Struktur kepangkatan dan remunerasi transparan berlandaskan Skala Upah Dua Titik yang menghargai dedikasi, keahlian, dan masa pengabdian.',
    icon: 'TrendingUp',
  },
  {
    id: 'kpi-kompetensi',
    title: 'Pengembangan Berbasis KPI',
    desc: 'Evaluasi kinerja objektif yang mengintegrasikan target operasional dan perilaku budaya PINTAR untuk memandu perkembangan setiap pegawai.',
    icon: 'Award',
  },
  {
    id: 'jaminan-sosial',
    title: 'Jaminan Sosial & Kesehatan Lengkap',
    desc: 'Perlindungan ketenagakerjaan melalui program BPJS Ketenagakerjaan dan BPJS Kesehatan untuk memberikan ketenangan bagi keluarga pegawai.',
    icon: 'ShieldCheck',
  },
  {
    id: 'pembinaan-daurah',
    title: 'Pelatihan & Daurah Rutin',
    desc: 'Kesempatan mengikuti sertifikasi tahsin bersanad, daurah keilmuan berkala bersama asatidzah berkompeten, dan lokakarya pedagogik.',
    icon: 'GraduationCap',
  },
  {
    id: 'ekosistem-simak',
    title: 'Administrasi Terpadu Melalui SIMAK',
    desc: 'Kemudahan pencatatan presensi GPS, pengajuan izin, pemantauan slip gaji, dan administrasi kepegawaian melalui aplikasi SIMAK Pintar.',
    icon: 'Laptop',
  },
];

// 5. Data Lowongan Formasi (Sesuai Manpower Planning MPP 2027/2028)
export const MOCK_VACANCIES = [
  {
    id: 'vac-01',
    code: 'MPP-TFZ-2701',
    title: 'Guru Tahfidz Al-Qur\'an',
    unit: 'SD IT & SMP IT Dar el-Iman',
    unitCategory: 'dikdas',
    category: 'Guru',
    gender: 'Ikhwan / Akhwat',
    quota: 6,
    education: 'Minimal D3 / S1 / Mutakhorrij Ma\'had Aly',
    requirements: [
      'Hafal Al-Qur\'an minimal 10 Juz (mutqin)',
      'Memiliki sanad qira\'ah atau sertifikat tahsin diutamakan',
      'Mampu berbahasa Arab komunikatif menjadi nilai tambah',
      'Memiliki keteladanan akhlak dan berakidah lurus',
    ],
    deadline: '30 November 2026',
    status: 'Dibuka',
  },
  {
    id: 'vac-02',
    code: 'MPP-DNY-2702',
    title: 'Guru Diniyah / Pendidikan Agama Islam',
    unit: 'SD IT & SMA IT Dar el-Iman',
    unitCategory: 'dikdas',
    category: 'Guru',
    gender: 'Ikhwan',
    quota: 4,
    education: 'S1 Pendidikan Agama Islam / Syariah / Ushuluddin',
    requirements: [
      'Memahami aqidah shahihah bermanhaj Salafus Shalih',
      'Mampu membaca kitab turats gundul dengan baik',
      'Memiliki keterampilan pedagogik dan manajemen kelas yang baik',
      'Berpengalaman mengajar di sekolah formal / pesantren',
    ],
    deadline: '30 November 2026',
    status: 'Dibuka',
  },
  {
    id: 'vac-03',
    code: 'MPP-ARB-2703',
    title: 'Guru Bahasa Arab',
    unit: 'SMP IT & SMA IT Dar el-Iman',
    unitCategory: 'dikmen',
    category: 'Guru',
    gender: 'Ikhwan / Akhwat',
    quota: 3,
    education: 'S1 Pendidikan Bahasa Arab / Sastra Arab',
    requirements: [
      'Kecakapan bahasa Arab lisan dan tulisan yang aktif',
      'Menguasai kaidah Nahwu dan Sharaf secara mendalam',
      'Mampu menyusun bahan ajar interaktif dan menyenangkan',
    ],
    deadline: '25 November 2026',
    status: 'Dibuka',
  },
  {
    id: 'vac-04',
    code: 'MPP-TMT-2704',
    title: 'Guru Kelas / Tematik SD IT',
    unit: 'SD IT 1, 2, 3 Dar el-Iman',
    unitCategory: 'dikdas',
    category: 'Guru',
    gender: 'Akhwat',
    quota: 5,
    education: 'S1 PGSD / Pendidikan Guru Sekolah Dasar',
    requirements: [
      'Paham kurikulum nasional terintegrasi nilai-nilai islami',
      'Sabar, penyayang anak, dan komunikatif dengan wali murid',
      'Mampu membaca Al-Qur\'an dengan tartil',
    ],
    deadline: '15 Desember 2026',
    status: 'Dibuka',
  },
  {
    id: 'vac-05',
    code: 'MPP-ITS-2705',
    title: 'Staff IT Support & Web Developer',
    unit: 'Kantor Pusat Yayasan / SIMAK',
    unitCategory: 'operasional',
    category: 'Tenaga Kependidikan',
    gender: 'Ikhwan',
    quota: 2,
    education: 'S1 / D3 Teknik Informatika / Sistem Informasi',
    requirements: [
      'Menguasai React / Vite / JavaScript dan basic framework PHP/Laravel',
      'Memahami pengelolaan database, jaringan LAN, dan server Linux',
      'Dapat bekerja tim secara teliti, amanah, dan proaktif',
    ],
    deadline: '20 Desember 2026',
    status: 'Dibuka',
  },
  {
    id: 'vac-06',
    code: 'MPP-MSR-2706',
    title: 'Musyrif / Pembina Asrama Santri',
    unit: 'Pondok Pesantren Putra Dar el-Iman',
    unitCategory: 'pesantren',
    category: 'Tenaga Kependidikan',
    gender: 'Ikhwan',
    quota: 4,
    education: 'Alumni Pesantren / Ma\'had / S1',
    requirements: [
      'Siap tinggal di asrama dan membimbing santri 24 jam',
      'Hafal Al-Qur\'an minimal 5 Juz',
      'Tegas, mengayomi, dan memiliki jiwa kepemimpinan islami',
    ],
    deadline: '10 Desember 2026',
    status: 'Dibuka',
  },
];

// 6. Tahapan Seleksi & Pertumbuhan
export const RECRUITMENT_STAGES = [
  {
    id: 'adm',
    step: 1,
    title: 'Administrasi Berkas',
    desc: 'Verifikasi kelengkapan identitas, ijazah, transkrip nilai, dan dokumen pendukung.',
    icon: 'FileText',
  },
  {
    id: 'quran',
    step: 2,
    title: 'Tes Baca Al-Qur\'an',
    desc: 'Uji makharijul huruf, tajwid, kefasihan bacaan, serta jumlah hafalan mutqin.',
    icon: 'BookOpen',
  },
  {
    id: 'microteaching',
    step: 3,
    title: 'Microteaching & Wawancara',
    desc: 'Praktek mengajar langsung, uji pedagogik, serta wawancara komitmen syar\'i.',
    icon: 'Users',
  },
  {
    id: 'mcu',
    step: 4,
    title: 'Medical Check-Up (MCU)',
    desc: 'Pemeriksaan kesehatan jasmani guna memastikan kesiapan optimal dalam bertugas.',
    icon: 'Activity',
  },
  {
    id: 'final',
    step: 5,
    title: 'Hasil Akhir & Akad SIMAK',
    desc: 'Penetapan Surat Keputusan (SK), penandatanganan akad, dan aktivasi akun SIMAK.',
    icon: 'CheckCircle2',
  },
];

// 7. Data Mock Pelamar untuk Tracker Demo
export const MOCK_APPLICANTS = [
  {
    registrationCode: 'REG-2026-781923',
    nik: '1371010001000001',
    whatsapp: '081234567890',
    applicantName: 'Fulan bin Fulan',
    positionApplied: 'Guru Tahfidz Al-Qur\'an',
    unitApplied: 'SD IT Dar el-Iman 1',
    currentStageIndex: 2, // Tahap 3: Microteaching & Wawancara
    statusText: 'Lolos Tes Baca Al-Qur\'an • Menunggu Jadwal Microteaching',
    updatedAt: '4 September 2026',
    notes: 'Jadwal microteaching akan dikonfirmasikan via WhatsApp resmi panitia rekrutmen.',
  },
];

// 8. Tim SDM & Layanan (Resmi Dokumen Master Ustadz Redo Pratama Harista, S.Sos.)
export const TEAM_SDM_DATA = {
  leader: {
    name: 'Redo Pratama Harista, S.Sos.',
    title: 'Kepala Bidang SDM Yayasan Dar el-Iman',
    period: '2021 – Sekarang',
    photo: '/ustadz-redo.jpg',
    birth: 'Solok, 16 Desember 1991',
    education: 'S1 Ilmu Administrasi Negara • Sedang Menempuh Magister Ekonomi Syariah (Peminatan Manajemen SDM)',
    certifications: [
      'Sertifikasi BNSP Pengurus Koperasi Simpan Pinjam',
      'Pelatihan & Workshop Profesional (sejak 2022): Manajemen SDM, KPI, Compensation & Benefit, Training Management, Organization Development, GA & HSE',
    ],
    careerJourney: [
      { year: '2016 – 2017', role: 'Karier Profesional Bank BUMN' },
      { year: '2017', role: 'Bergabung di Yayasan Dar el-Iman' },
      { year: '2017 – 2019', role: 'Kepala Tata Usaha SD IT Dar el-Iman 1' },
      { year: '2019 – 2020', role: 'Wakil Kepala Kurikulum SD IT Dar el-Iman 1' },
      { year: '2020 – 2021', role: 'Staf Sumber Daya Manusia (SDM) Yayasan' },
      { year: '2021 – 2025', role: 'Kepala Bidang SDM Yayasan Dar el-Iman' },
    ],
    welcomeMessage: {
      lead: 'Merawat Akar Nilai, Mengokohkan Pengabdian untuk Generasi Rabbani',
      greeting: 'Assalamu\'alaikum Warahmatullahi Wabarakatuh.\n\nAlhamdulillah, segala puji hanya milik Allah Subhanahu wa Ta\'ala yang telah mempertemukan kita dalam niat mulia menegakkan dakwah dan pendidikan Islam bermanhaj Salafus Shalih di Ranah Minang.\n\nBagi kami di Bidang Sumber Daya Manusia Yayasan Dar el-Iman, mengelola SDM bukan sekadar urusan administratif personalia, melainkan amanah besar merawat fitrah para mujahid pendidikan. Sebagaimana filosofi pohon zaitun—Zaitunu—kami berikhtiar memastikan setiap asatidzah dan pegawai memiliki akar akidah yang kokoh, bertumbuh dalam keilmuan dan kompetensi profesional, serta berbuah lebat dalam pengabdian yang ikhlas.\n\nMelalui sistem manajemen modern berlandaskan syariah, keadilan Skala Upah Dua Titik, keterbukaan KPI, jaminan perlindungan sosial, dan digitalisasi SIMAK, kami siap mendampingi perjalanan karier antum semua. Selamat bergabung, bertumbuh, dan mengukir amal jariyah bersama keluarga besar Yayasan Dar el-Iman.',
    },
  },
  quote: {
    lead: 'Menemani Setiap Langkah Pertumbuhan Talenta Rabbani',
    text: 'Yayasan Dar el-Iman berkomitmen menghadirkan ekosistem kerja yang memuliakan ilmu, menghargai integritas, dan memberikan ruang bagi asatidzah untuk mendedikasikan potensi terbaiknya demi izzul Islam wal muslimin.',
    title: 'Redo Pratama Harista, S.Sos.',
    role: 'Kepala Bidang SDM',
    org: 'Yayasan Dar el-Iman Padang',
  },
  pillars: [
    {
      title: 'Perencanaan Formasi (MPP)',
      desc: 'Pemetaan kebutuhan tenaga pendidik secara terukur sesuai perkembangan peserta didik dan kurikulum lembaga.',
    },
    {
      title: 'Daurah & Kompetensi',
      desc: 'Penyelenggaraan pelatihan pedagogik, tahsin bersanad, dan pembinaan adab berkala bersama asatidzah kompeten.',
    },
    {
      title: 'Kesejahteraan & Benefit',
      desc: 'Pengelolaan jaminan sosial BPJS Ketenagakerjaan & Kesehatan, Skala Upah Dua Titik yang adil, serta apresiasi ibadah umroh.',
    },
    {
      title: 'Digitalisasi SIMAK',
      desc: 'Layanan administrasi satu pintu untuk efisiensi presensi, cuti, pemantauan slip gaji, dan evaluasi KPI.',
    },
  ],
  services: [
    {
      title: 'Perencanaan Formasi (MPP)',
      desc: 'Pemetaan kebutuhan tenaga pendidik secara terukur sesuai perkembangan peserta didik.',
    },
    {
      title: 'Daurah & Kompetensi',
      desc: 'Penyelenggaraan pelatihan pedagogik, tahsin bersanad, dan pembinaan adab berkala.',
    },
    {
      title: 'Kesejahteraan & Benefit',
      desc: 'Pengelolaan jaminan sosial, BPJS, remunerasi adil, serta apresiasi ibadah umroh.',
    },
    {
      title: 'Digitalisasi SIMAK',
      desc: 'Layanan administrasi satu pintu untuk efisiensi presensi, cuti, dan evaluasi kinerja.',
    },
  ],
  officers: [
    {
      name: 'Alfurqanul Hakim, S.H., C.W.C.',
      role: 'Kepala Bagian Legal & Personalia',
      positionTitle: 'HR & Legal Manager',
      photo: '/alfurqanul-hakim.png',
      education: 'S1 Ilmu Hukum (Universitas Andalas) • Sedang Menempuh Magister (S2) Hukum Keluarga Islam (UIN Mahmud Yunus Batusangkar)',
      certifications: [
        'Sertifikasi Profesi Advokat (PERADI)',
        'Certified Waqf Competence (C.W.C.)',
      ],
      bio: 'Alfurqanul Hakim bertanggung jawab atas pengelolaan tata kelola Sumber Daya Manusia (SDM) dan kepatuhan hukum di lingkungan Yayasan Dar El-Iman. Dengan latar belakang pendidikan Ilmu Hukum dari Universitas Andalas dan sertifikasi profesi Advokat (PERADI), beliau memastikan setiap kebijakan operasional, pengelolaan hubungan industrial, dan legalitas kelembagaan berjalan sesuai dengan hukum positif yang berlaku serta selaras dengan prinsip syariat Islam.',
      responsibilities: [
        {
          title: 'Manajemen SDM & Kinerja',
          desc: 'Mengawasi sistem administrasi personalia melalui platform SIMAK dan memimpin implementasi evaluasi kinerja pegawai berbasis Katalog KPI YDEI.',
        },
        {
          title: 'Kepatuhan Legal & Kontrak',
          desc: 'Mengelola penyusunan dan audit Perjanjian Kerja Waktu Tertentu (PKWT), SOP internal, serta mitigasi risiko hukum kelembagaan.',
        },
        {
          title: 'Hubungan Industrial',
          desc: 'Menjadi mediator internal dan memastikan pemenuhan hak serta kewajiban ketenagakerjaan secara adil, transparan, dan amanah.',
        },
      ],
      background: 'Memiliki rekam jejak profesional di sektor finansial sebagai praktisi Legal, Appraisal, & Remedial di PT Sarana Sumatera Barat Ventura, yang membekalinya dengan ketajaman analisis hukum, audit aset, dan resolusi mediasi kelembagaan.',
    },
  ],
  contacts: {
    whatsapp: '+62 821-7000-0000',
    waRaw: '6282170000000',
    email: 'sdm@dareliman.web.id',
    workHours: 'Senin – Jumat | 08.00 – 16.00 WIB',
    address: 'Gedung Sekretariat Pusat Yayasan Dar el-Iman, Jl. Gunung Juaro, Surau Gadang, Kec. Nanggalo, Kota Padang, Sumbar 25143',
  },
  helpdesk: {
    whatsapp: '+62 821-7000-0000',
    email: 'sdm@dareliman.web.id',
    hours: 'Senin – Jumat | 08.00 – 16.00 WIB',
    location: 'Gedung Sekretariat Pusat Yayasan Dar el-Iman, Jl. Gunung Juaro, Surau Gadang, Kec. Nanggalo, Kota Padang, Sumbar 25143',
  },
};

// 9. FAQ seputar Rekrutmen
export const FAQS_DATA = [
  {
    q: 'Apakah pelamar non-alumni pesantren boleh mendaftar?',
    a: 'Tentu. Kami membuka kesempatan luas bagi lulusan perguruan tinggi umum maupun ma\'had, selama memenuhi kualifikasi kompetensi, memiliki akidah yang lurus, dan berakhlak mulia.',
  },
  {
    q: 'Bagaimana proses seleksi bagi pelamar yang berada di luar Kota Padang?',
    a: 'Untuk tahapan administrasi berkas dan wawancara awal dapat difasilitasi secara online. Namun untuk tahapan microteaching dan tes baca Al-Qur\'an tatap muka sangat dianjurkan untuk penilaian objektivitas.',
  },
  {
    q: 'Apakah ada masa percobaan (probation) bagi pegawai baru?',
    a: 'Setiap pegawai baru akan menjalani masa orientasi dan kontrak evaluasi awal untuk penyesuaian kultur kerja PINTAR dan pendampingan kurikulum.',
  },
];
