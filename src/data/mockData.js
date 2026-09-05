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

// 3. Unit Pendidikan & Lembaga Resmi Yayasan Dar el-Iman (Grouped)
export const MOCK_UNITS = [
  {
    category: 'Pendidikan Anak Usia Dini (PAUD)',
    categorySlug: 'paud',
    desc: 'Penanaman tauhid sejak dini, pembiasaan adab islami, dan metode bermain yang bermakna.',
    units: [
      { id: 'tkit-1', name: 'TK IT Dar el-Iman 1', location: 'Padang, Sumbar', focus: 'Tahfidz Juz 30 & Adab' },
      { id: 'tkit-2', name: 'TK IT Dar el-Iman 2', location: 'Padang, Sumbar', focus: 'Karakter & Kemandirian' },
      { id: 'tkit-3', name: 'TK IT Dar el-Iman 3', location: 'Padang, Sumbar', focus: 'Kecakapan Sensorik & Doa' },
      { id: 'taud-saqu', name: 'TAUD SaQu Dar el-Iman', location: 'Padang, Sumbar', focus: 'Tahfidz Al-Qur\'an Usia Dini' },
    ],
  },
  {
    category: 'Pendidikan Dasar (Dikdas)',
    categorySlug: 'dikdas',
    desc: 'Pondasi akademik kuat berpadu kurikulum tahfidz mutqin dan keteladanan akhlak.',
    units: [
      { id: 'mit', name: 'Madrasah Ibtidaiyah Terpadu (MIT)', location: 'Padang', focus: 'Integrasi Sains & Diniyah' },
      { id: 'sdit-1', name: 'SD IT Dar el-Iman 1', location: 'Gurun Laweh, Padang', focus: 'Sekolah Rujukan & Penggerak' },
      { id: 'sdit-2', name: 'SD IT Dar el-Iman 2', location: 'Sawahan, Padang', focus: 'Tahsin Bersanad & Adab' },
      { id: 'sdit-3', name: 'SD IT Dar el-Iman 3', location: 'Nanggalo, Padang', focus: 'Pendidikan Ramah Anak' },
    ],
  },
  {
    category: 'Pendidikan Menengah (Dikmen)',
    categorySlug: 'dikmen',
    desc: 'Membentuk generasi tangguh berwawasan global, hafizh Al-Qur\'an, dan berprestasi.',
    units: [
      { id: 'smpit-padang', name: 'SMP IT Dar el-Iman Padang', location: 'Gunung Juaro, Padang', focus: 'Fullday & Boarding' },
      { id: 'smpit-50kota', name: 'SMP IT Dar el-Iman 50 Kota', location: 'Kab. 50 Kota, Sumbar', focus: 'Penguatan Diniyah & Tahfidz' },
      { id: 'smait', name: 'SMA IT Dar el-Iman Padang', location: 'Islamic Center Padang', focus: 'Persiapan PTN & Studi Timur Tengah' },
    ],
  },
  {
    category: 'Pesantren & Asrama',
    categorySlug: 'pesantren',
    desc: 'Kawah candradimuka pembinaan santri 24 jam dengan suasana ilmiah dan ukhuwah.',
    units: [
      { id: 'ponpes-putra', name: 'Pondok Pesantren Putra Dar el-Iman', location: 'Padang', focus: 'Kitab Turats & Bahasa Arab' },
      { id: 'ponpes-putri', name: 'Pondok Pesantren Putri Dar el-Iman', location: 'Padang', focus: 'Tahfidzul Qur\'an & Tarbiyah Nisa\'' },
    ],
  },
  {
    category: 'Dakwah, Sosial & Operasional',
    categorySlug: 'operasional',
    desc: 'Pilar penopang dakwah umat, kemanusiaan, logistik, dan kemandirian ekonomi syariah.',
    units: [
      { id: 'dei-peduli', name: 'Dar el-Iman Peduli', location: 'Padang', focus: 'Sosial, Kemanusiaan & ZISWAF' },
      { id: 'media-dakwah', name: 'Divisi Media & Dakwah', location: 'Padang', focus: 'Radio Surau & Konten Syiar' },
      { id: 'koperasi', name: 'Koperasi Syariah Dar el-Iman', location: 'Padang', focus: 'Pemberdayaan Ekonomi Umat' },
      { id: 'sarpras-logistik', name: 'Divisi Sarpras & Logistik', location: 'Padang', focus: 'Infrastruktur & Fasilitas Lembaga' },
    ],
  },
];

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

// 8. Tim SDM & Layanan
export const TEAM_SDM_DATA = {
  quote: {
    lead: 'Menemani Setiap Langkah Pertumbuhan Talenta Rabbani',
    text: 'Yayasan Dar el-Iman berkomitmen menghadirkan ekosistem kerja yang memuliakan ilmu, menghargai integritas, dan memberikan ruang bagi asatidzah untuk mendedikasikan potensi terbaiknya demi izzul Islam wal muslimin.',
    title: 'Divisi Sumber Daya Manusia (SDM)',
    org: 'Yayasan Dar el-Iman Padang',
  },
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
