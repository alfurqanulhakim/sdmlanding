import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Users,
  CheckCircle2,
  Calendar,
  Building2,
  Share2,
} from 'lucide-react';
import { ZAITUNU_METAPHOR, PINTAR_VALUES, MOCK_VACANCIES } from '../data/mockData';
import { recruitmentService } from '../services/api';

export default function HomePage({ onNavigate, onSelectVacancy, onOpenStatusModal, onShareVacancy }) {
  const quickStats = [
    { label: 'Unit Lembaga & Sekolah', val: '19+' },
    { label: 'Asatidzah & Tenaga Pendidik', val: '500+' },
    { label: 'Santri & Peserta Didik', val: '5.000+' },
    { label: 'Manhaj Ahlussunnah', val: '100%' },
  ];

  const [featuredVacancies, setFeaturedVacancies] = useState(MOCK_VACANCIES.slice(0, 3));

  useEffect(() => {
    async function loadFeatured() {
      const data = await recruitmentService.getVacancies();
      if (data && data.length > 0) {
        setFeaturedVacancies(data.slice(0, 3));
      }
    }
    loadFeatured();
  }, []);

  return (
    <main>
      {/* 1. HERO SECTION (ARCHITECTURAL GRID — ZERO COLLISION) */}
      <section className="hero-section-box">
        <div className="site-container">
          <div style={{ maxWidth: '780px' }}>
            <div className="hero-eyebrow">
              ZAITUNU &bull; HUMAN CAPITAL & CAREER ECOSYSTEM
            </div>

            <h1 className="hero-title">
              Bertumbuh dan Menebar <br />
              Kebaikan Bersama <br />
              <span className="hero-title-highlight">Yayasan Dar el-Iman.</span>
            </h1>

            <p className="hero-desc">
              Portal resmi SDM dan pusat karier Yayasan Dar el-Iman untuk menemukan kesempatan bertumbuh, berkontribusi, dan mengabdi bersama ekosistem pendidikan dan dakwah bermanhaj Salafus Shalih.
            </p>

            {/* Tagline Badge */}
            <div className="hero-tagline-box">
              "{ZAITUNU_METAPHOR.tagline}"
            </div>

            {/* Hero Action Buttons — STRICT GAP & ISOLATION */}
            <div className="hero-btn-group">
              <button
                type="button"
                onClick={() => onNavigate('karier')}
                className="btn-hero-primary"
                id="btn-hero-explore-career"
              >
                <span>Jelajahi Lowongan Karier</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('tentang')}
                className="btn-hero-outline"
                id="btn-hero-about-zaitunu"
              >
                <span>Filosofi Zaitunu & PINTAR</span>
              </button>

              <button
                type="button"
                onClick={() => onShareVacancy && onShareVacancy({
                  title: 'Portal Karier & SDM Yayasan Dar el-Iman Padang',
                  url: `${window.location.origin}/#/karier`,
                  customText: `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nBagi ikhwan dan akhawat yang sedang mencari peluang pengabdian dan berkarir di dunia pendidikan dakwah Islam:\n\nYayasan Dar el-Iman Padang membuka formasi Tenaga Pendidik (Guru) dan Tenaga Kependidikan untuk berbagai unit sekolah.\n\nInformasi formasi dan pendaftaran online dapat diakses di:\nhttps://sdmdareliman.web.id/#/karier`,
                })}
                className="btn-hero-outline"
                id="btn-hero-share-portal"
                title="Bagikan portal karir ke teman & keluarga"
              >
                <Share2 size={16} />
                <span>Bagikan Info Karir</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="hero-stats-row">
            {quickStats.map((item, idx) => (
              <div key={idx}>
                <div className="stat-item-num">{item.val}</div>
                <div className="stat-item-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW: EDITORIAL GRID WITH BREATHING SPACE */}
      <section className="content-section white-bg">
        <div className="site-container">
          <div className="grid-overview">
            <div>
              <div className="section-tagline">
                <Sparkles size={14} />
                <span>Pohon Zaitun yang Diberkahi</span>
              </div>
              <h2 className="section-title">
                Membangun Generasi Rabbani Lewat Keteladanan.
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                Di Yayasan Dar el-Iman, mengabdi bukan sekadar profesi mencari nafkah, melainkan ikhtiar menanam amal jariyah. Seperti pohon zaitun yang akarnya menancap teguh dan rantingnya berbuah kemanfaatan, kami memfasilitasi setiap asatidzah untuk berkembang dalam adab dan keahlian.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('tentang')}
                className="btn-hero-primary"
                style={{ background: 'var(--emerald-main)', color: '#ffffff' }}
              >
                <span>Pelajari Filosofi Zaitunu</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card-numbered">
                <div className="number-badge-box">01</div>
                <div>
                  <h3 className="card-title">Nilai Luhur PINTAR</h3>
                  <p className="card-desc">
                    Peduli, Islami, Niat Mulia, Taat, Amanah, dan Rapi menjadi fondasi adab dan etika kerja seluruh asatidzah serta pegawai.
                  </p>
                </div>
              </div>

              <div className="card-numbered">
                <div className="number-badge-box">02</div>
                <div>
                  <h3 className="card-title">19+ Unit Kerja Terpadu</h3>
                  <p className="card-desc">
                    Jalur pengabdian menyeluruh di jenjang PAUD, Sekolah Dasar, Menengah, Pesantren Boarding, hingga divisi operasional sosial dakwah.
                  </p>
                </div>
              </div>

              <div className="card-numbered">
                <div className="number-badge-box">03</div>
                <div>
                  <h3 className="card-title">Karier & Kesejahteraan Terukur</h3>
                  <p className="card-desc">
                    Skala Upah Dua Titik berbasis keadilan, penilaian KPI transparan, jaminan BPJS, serta daurah manhaj berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEASER FORMASI LOWONGAN TERBARU */}
      <section className="content-section alt-bg">
        <div className="site-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}>
            <div className="section-head-box" style={{ marginBottom: 0 }}>
              <div className="section-tagline">
                <Briefcase size={14} />
                <span>Peluang Pengabdian</span>
              </div>
              <h2 className="section-title">
                Formasi Lowongan Terbaru
              </h2>
              <p className="section-subtitle">
                Bergabunglah bersama keluarga besar Yayasan Dar el-Iman untuk tahun ajaran baru.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('karier')}
              className="btn-hero-primary"
              style={{ padding: '10px 22px', fontSize: '0.84rem' }}
            >
              <span>Lihat Semua Lowongan</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid-3-col">
            {featuredVacancies.map((job) => (
              <div key={job.id} className="vacancy-card">
                <div>
                  <div className="vacancy-top-tags">
                    <span className="tag-badge-green">{job.category}</span>
                    <span className="tag-badge-slate">{job.gender}</span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '14px', marginBottom: '8px', lineHeight: 1.3 }}>
                    {job.title}
                  </h3>

                  <div className="vacancy-meta-list">
                    <div className="vacancy-meta-item">
                      <Building2 size={15} color="var(--emerald-main)" />
                      <span>{job.unit}</span>
                    </div>
                    <div className="vacancy-meta-item">
                      <GraduationCap size={15} color="var(--emerald-main)" />
                      <span>{job.education}</span>
                    </div>
                    <div className="vacancy-meta-item">
                      <Calendar size={15} color="var(--emerald-main)" />
                      <span>Batas: {job.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="vacancy-card-actions">
                  <button
                    type="button"
                    onClick={() => onSelectVacancy(job)}
                    className="btn-apply-job"
                  >
                    <span>Lamar Sekarang</span>
                    <ArrowRight size={14} />
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
                    <Share2 size={15} />
                    <span>Bagikan</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section style={{ background: 'var(--navy-dark)', color: '#ffffff', padding: '72px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--gold-light)', textTransform: 'uppercase', display: 'inline-block', marginBottom: '12px' }}>
              Transparansi Proses Seleksi
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.25 }}>
              Sudah Mengirimkan Berkas Lamaran?
            </h2>
            <p style={{ color: '#cde4de', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.65 }}>
              Lacak perkembangan verifikasi berkas, tes wawancara, dan microteaching Anda secara mandiri dan transparan melalui sistem pelacak status kami.
            </p>
            <button
              type="button"
              onClick={onOpenStatusModal}
              className="btn-hero-primary"
              style={{ padding: '14px 32px' }}
            >
              <span>Lacak Status Seleksi Anda</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
