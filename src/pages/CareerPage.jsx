import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Search,
  Filter,
  GraduationCap,
  Users,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  AlertCircle,
  Share2,
  LayoutGrid,
  List,
} from 'lucide-react';
import { recruitmentService } from '../services/api';
import { RECRUITMENT_STAGES } from '../data/mockData';

export default function CareerPage({ onSelectVacancy, onOpenStatusModal, onShareVacancy }) {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [viewMode, setViewMode] = useState(() => {
    try {
      return localStorage.getItem('career_view_mode') || 'grid';
    } catch {
      return 'grid';
    }
  });

  const handleSetViewMode = (mode) => {
    setViewMode(mode);
    try {
      localStorage.setItem('career_view_mode', mode);
    } catch {}
  };

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await recruitmentService.getVacancies();
      setVacancies(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'Guru', label: 'Tenaga Pendidik / Guru' },
    { id: 'Tenaga Kependidikan', label: 'Tenaga Kependidikan / Staf' },
  ];

  const genderOptions = [
    { id: 'all', label: 'Semua Gender' },
    { id: 'Ikhwan', label: 'Ikhwan' },
    { id: 'Akhawat', label: 'Akhawat' },
  ];

  const filtered = vacancies.filter((v) => {
    const title = (v.title || '').toLowerCase();
    const unit = (v.unit || '').toLowerCase();
    const education = (v.education || '').toLowerCase();
    const q = searchQuery.toLowerCase();

    const matchSearch = title.includes(q) || unit.includes(q) || education.includes(q);

    const matchCat =
      selectedCategory === 'all' ||
      v.category === selectedCategory ||
      (selectedCategory === 'Guru' && (v.category?.includes('Guru') || title.includes('guru') || title.includes('tahsin') || title.includes('tahfidz')));

    const matchGender =
      selectedGender === 'all' ||
      (v.gender || '').toLowerCase().includes(selectedGender.toLowerCase()) ||
      (v.gender || '').toLowerCase().includes('bebas');

    return matchSearch && matchCat && matchGender;
  });

  return (
    <main>
      {/* 1. HERO BANNER */}
      <section className="hero-section-box">
        <div className="site-container">
          <div style={{ maxWidth: '780px' }}>
            <div className="hero-eyebrow">
              PUSAT KARIER & REKRUTMEN &bull; BIBIT-BIBIT ZAITUNU
            </div>

            <h1 className="hero-title">
              Temukan Kesempatan <br />
              <span className="hero-title-highlight">Pengabdian Terbaik Anda.</span>
            </h1>

            <p className="hero-desc">
              Penerimaan resmi calon asatidzah dan tenaga kependidikan Yayasan Dar el-Iman berbasis perencanaan kebutuhan Manpower Planning (MPP). Salurkan ilmu dan keahlian Anda di jalan dakwah Islam.
            </p>

            <div style={{ marginTop: '24px' }}>
              <button
                type="button"
                onClick={onOpenStatusModal}
                className="btn-hero-outline"
                id="btn-career-track-modal"
              >
                <Search size={15} />
                <span>Sudah Mendaftar? Lacak Status Seleksi Anda</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & VACANCIES LIST */}
      <section className="content-section white-bg">
        <div className="site-container">
          {/* SEARCH & FILTER PANEL — GUARANTEED ISOLATION */}
          <div className="search-filter-panel">
            <div className="search-box-wrapper">
              <Search className="search-box-icon" />
              <input
                type="text"
                placeholder="Cari formasi lowongan, nama unit sekolah, atau kualifikasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-box-input"
                id="career-search-input"
              />
            </div>

            <div className="filter-bar-row">
              {/* Category Pills */}
              <div className="filter-btn-group">
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-title)', marginRight: '6px' }}>
                  Kategori:
                </span>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCategory(c.id)}
                    className={`filter-pill-btn ${selectedCategory === c.id ? 'active' : ''}`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Gender Pills */}
              <div className="filter-btn-group">
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-title)', marginRight: '6px' }}>
                  Gender:
                </span>
                {genderOptions.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGender(g.id)}
                    className={`filter-pill-btn ${selectedGender === g.id ? 'active' : ''}`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid var(--border-card)', paddingTop: '14px' }}>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                Menampilkan <strong style={{ color: 'var(--emerald-main)' }}>{filtered.length}</strong> formasi aktif yang sesuai dengan pencarian Anda.
              </div>
              <div className="view-mode-toggle-group">
                <button
                  type="button"
                  onClick={() => handleSetViewMode('grid')}
                  className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  title="Tampilan Grid Kartu"
                  aria-label="Tampilan Grid Kartu"
                >
                  <LayoutGrid size={15} />
                  <span>Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSetViewMode('list')}
                  className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                  title="Tampilan List Baris"
                  aria-label="Tampilan List Baris"
                >
                  <List size={15} />
                  <span>List</span>
                </button>
              </div>
            </div>
          </div>

          {/* VACANCIES GRID */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              Memuat daftar formasi lowongan...
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-alt)', borderRadius: '20px', border: '1px solid var(--border-card)' }}>
              <AlertCircle size={40} color="var(--text-light)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '8px' }}>
                Tidak Ada Formasi yang Cocok
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 20px' }}>
                Silakan coba ubah kata kunci pencarian atau reset filter kategori/gender untuk melihat semua formasi yang tersedia.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedGender('all');
                  }}
                  className="btn-hero-primary"
                  style={{ fontSize: '0.85rem', padding: '10px 24px' }}
                >
                  Reset Pencarian
                </button>
                <button
                  type="button"
                  onClick={() => onSelectVacancy && onSelectVacancy({
                    id: 'talent-pool',
                    title: 'Talent Pool & General Application',
                    category: 'Umum / Talent Pool',
                    unit: 'Yayasan Dar el-Iman (Semua Unit)',
                    gender: 'Ikhwan / Akhwat',
                    education: 'D3 / S1 / S2 / Sederajat',
                    isTalentPool: true,
                    requirements: [
                      'Memiliki komitmen adab islami sesuai manhaj salaf',
                      'Memiliki latar belakang pendidikan / keahlian yang relevan dengan bidang pendidikan & dakwah',
                      'Mampu membaca Al-Qur\'an dengan baik',
                      'Bersedia dihubungi oleh Tim SDM jika ada pembukaan formasi baru yang sesuai kualifikasi',
                    ],
                    deadline: 'Sepanjang Tahun (Terbuka)',
                  })}
                  style={{
                    fontSize: '0.85rem',
                    padding: '10px 24px',
                    borderRadius: '50px',
                    background: '#fef3c7',
                    color: '#92400e',
                    border: '1px solid #fde68a',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Sparkles size={15} color="#d97706" />
                  <span>Daftar ke Talent Pool</span>
                </button>
              </div>
            </div>
          ) : viewMode === 'list' ? (
            /* VACANCIES LIST VIEW */
            <div className="vacancy-list-container">
              {filtered.map((job) => (
                <div key={job.id} className="vacancy-list-item">
                  <div className="vacancy-list-info">
                    <div className="vacancy-list-header">
                      <h3 className="vacancy-list-title">{job.title}</h3>
                      <span className="tag-badge-green">{job.category}</span>
                      <span className="tag-badge-slate">{job.gender}</span>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '4px 0 10px' }}>
                      {job.requirements?.[0] || 'Kualifikasi pendidikan relevan & komitmen adab islami sesuai visi Yayasan Dar el-Iman.'}
                    </p>

                    <div className="vacancy-list-meta">
                      <div className="vacancy-list-meta-item">
                        <Building2 size={16} color="var(--emerald-main)" />
                        <span>{job.unit}</span>
                      </div>
                      <div className="vacancy-list-meta-item">
                        <GraduationCap size={16} color="var(--emerald-main)" />
                        <span>{job.education}</span>
                      </div>
                      <div className="vacancy-list-meta-item">
                        <Calendar size={16} color="var(--emerald-main)" />
                        <span>Batas: <strong>{job.deadline}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="vacancy-list-actions">
                    <button
                      type="button"
                      onClick={() => onSelectVacancy(job)}
                      className="btn-apply-job"
                    >
                      <span>Lamar Formasi</span>
                      <ArrowRight size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onShareVacancy && onShareVacancy({
                        title: job.title,
                        unit: job.unit,
                        url: `${window.location.origin}/#/karier`,
                        customText: `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nInformasi Lowongan Kerja Yayasan Dar el-Iman Padang:\n📌 Formasi: ${job.title}\n🏢 Unit: ${job.unit}\n🎓 Kualifikasi: ${job.education}\n👥 Kriteria: ${job.gender}\n📅 Batas: ${job.deadline}\n\nDaftar online sekarang di:\nhttps://sdmdareliman.web.id/#/karier`,
                      })}
                      className="btn-share-job"
                      title="Bagikan lowongan ini"
                      aria-label={`Bagikan lowongan ${job.title}`}
                    >
                      <Share2 size={16} />
                      <span>Bagikan</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* VACANCIES GRID VIEW */
            <div className="grid-3-col">
              {filtered.map((job) => (
                <div key={job.id} className="vacancy-card">
                  <div>
                    <div className="vacancy-top-tags">
                      <span className="tag-badge-green">{job.category}</span>
                      <span className="tag-badge-slate">{job.gender}</span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '16px', marginBottom: '10px', lineHeight: 1.3 }}>
                      {job.title}
                    </h3>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {job.requirements[0] || 'Kualifikasi pendidikan relevan & komitmen adab islami.'}
                    </p>

                    <div className="vacancy-meta-list">
                      <div className="vacancy-meta-item">
                        <Building2 size={16} color="var(--emerald-main)" />
                        <span>{job.unit}</span>
                      </div>
                      <div className="vacancy-meta-item">
                        <GraduationCap size={16} color="var(--emerald-main)" />
                        <span>{job.education}</span>
                      </div>
                      <div className="vacancy-meta-item">
                        <Calendar size={16} color="var(--emerald-main)" />
                        <span>Batas: <strong>{job.deadline}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="vacancy-card-actions">
                    <button
                      type="button"
                      onClick={() => onSelectVacancy(job)}
                      className="btn-apply-job"
                    >
                      <span>Lamar Formasi Ini</span>
                      <ArrowRight size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onShareVacancy && onShareVacancy({
                        title: job.title,
                        unit: job.unit,
                        url: `${window.location.origin}/#/karier`,
                        customText: `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nInformasi Lowongan Kerja Yayasan Dar el-Iman Padang:\n📌 Formasi: ${job.title}\n🏢 Unit: ${job.unit}\n🎓 Kualifikasi: ${job.education}\n👥 Kriteria: ${job.gender}\n📅 Batas: ${job.deadline}\n\nDaftar online sekarang di:\nhttps://sdmdareliman.web.id/#/karier`,
                      })}
                      className="btn-share-job"
                      title="Bagikan lowongan ini"
                      aria-label={`Bagikan lowongan ${job.title}`}
                    >
                      <Share2 size={16} />
                      <span>Bagikan</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* BANNER TALENT POOL / GENERAL APPLICATION */}
          <div
            style={{
              marginTop: '40px',
              padding: '24px clamp(20px, 4vw, 32px)',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
              color: '#ffffff',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              border: '1px solid rgba(167, 243, 208, 0.3)',
              boxShadow: '0 10px 28px rgba(6, 78, 59, 0.15)',
            }}
          >
            <div style={{ maxWidth: '620px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#a7f3d0',
                  display: 'inline-block',
                  marginBottom: '6px',
                }}
              >
                Database Kandidat & Pelamar Umum
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', marginBottom: '6px' }}>
                Belum Menemukan Posisi yang Sesuai?
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#ecfdf5', lineHeight: 1.6, margin: 0 }}>
                Daftarkan profil dan unggah CV Anda ke <strong>Talent Pool Yayasan Dar el-Iman</strong>. Tim SDM kami akan meninjau basis data ini dan menghubungi Anda begitu formasi yang relevan dibuka.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectVacancy && onSelectVacancy({
                id: 'talent-pool',
                title: 'Talent Pool & General Application',
                category: 'Umum / Talent Pool',
                unit: 'Yayasan Dar el-Iman (Semua Unit)',
                gender: 'Ikhwan / Akhwat',
                education: 'D3 / S1 / S2 / Sederajat',
                isTalentPool: true,
                requirements: [
                  'Memiliki komitmen adab islami sesuai manhaj salaf',
                  'Memiliki latar belakang pendidikan / keahlian yang relevan dengan bidang pendidikan & dakwah',
                  'Mampu membaca Al-Qur\'an dengan baik',
                  'Bersedia dihubungi oleh Tim SDM jika ada pembukaan formasi baru yang sesuai kualifikasi',
                ],
                deadline: 'Sepanjang Tahun (Terbuka)',
              })}
              className="btn-hero-primary"
              style={{ padding: '12px 24px', fontSize: '0.86rem', background: '#f59e0b', color: '#031c15', borderColor: '#f59e0b', fontWeight: 800 }}
            >
              <Sparkles size={16} />
              <span>Daftar ke Talent Pool</span>
            </button>
          </div>

          {/* BANNER SEBARKAN KEBAIKAN */}
          <div
            style={{
              marginTop: '24px',
              padding: '24px clamp(20px, 4vw, 32px)',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #031c15 0%, #063b2d 100%)',
              color: '#ffffff',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              boxShadow: '0 10px 28px rgba(3, 28, 21, 0.15)',
            }}
          >
            <div style={{ maxWidth: '620px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--gold-light)',
                  display: 'inline-block',
                  marginBottom: '6px',
                }}
              >
                Peluang Amal Jariyah
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                Bantu Sebarkan Informasi Formasi Ini
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#d1fae5', lineHeight: 1.6 }}>
                <em>"Barangsiapa yang menunjuki kepada kebaikan maka dia akan mendapatkan pahala seperti pahala orang yang mengerjakannya."</em> (HR. Muslim No. 1893). Bagikan kabar lowongan ini kepada keluarga, rekan sejawat, dan kerabat yang membutuhkan.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onShareVacancy && onShareVacancy({
                title: 'Pusat Karier & Lowongan Kerja SDM Yayasan Dar el-Iman Padang',
                url: `${window.location.origin}/#/karier`,
                customText: `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nBagi ikhwan dan akhawat yang mencari peluang pengabdian dan berkarir di dunia pendidikan dakwah Islam:\n\nYayasan Dar el-Iman Padang membuka formasi Tenaga Pendidik (Guru) dan Tenaga Kependidikan untuk berbagai unit sekolah.\n\nInformasi formasi dan pendaftaran online dapat diakses di:\nhttps://sdmdareliman.web.id/#/karier`,
              })}
              className="btn-hero-primary"
              style={{ padding: '12px 24px', fontSize: '0.86rem' }}
            >
              <Share2 size={16} />
              <span>Bagikan Portal Karir Sekarang</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. TAHAPAN REKRUTMEN SELEKSI */}
      <section className="content-section alt-bg">
        <div className="site-container">
          <div className="section-head-box">
            <div className="section-tagline">
              <CheckCircle2 size={14} />
              <span>Transparan & Terstandarisasi</span>
            </div>
            <h2 className="section-title">
              6 Tahapan Seleksi Masuk
            </h2>
            <p className="section-subtitle">
              Alur rekrutmen dirancang untuk menjamin kesesuaian adab islami, manhaj salaf, kompetensi pedagogik, dan integritas calon pegawai.
            </p>
          </div>

          <div className="grid-3-col">
            {RECRUITMENT_STAGES.map((stage) => (
              <div key={stage.step} className="card-numbered">
                <div className="number-badge-box">
                  0{stage.step}
                </div>
                <div>
                  <h3 className="card-title">{stage.title}</h3>
                  <p className="card-desc">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
