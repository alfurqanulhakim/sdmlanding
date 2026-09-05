import React from 'react';
import {
  Sparkles,
  Anchor,
  Shield,
  GitFork,
  Leaf,
  Sprout,
  HeartHandshake,
  BookOpenCheck,
  ClockCheck,
  ShieldCheck,
  Smile,
  CheckCircle2,
  BookmarkCheck,
  FileText,
} from 'lucide-react';
import { ZAITUNU_METAPHOR, PINTAR_VALUES } from '../data/mockData';

const iconMap = {
  Anchor: Anchor,
  Shield: Shield,
  GitFork: GitFork,
  Leaf: Leaf,
  Sparkles: Sparkles,
  Sprout: Sprout,
  HeartHandshake: HeartHandshake,
  BookOpenCheck: BookOpenCheck,
  ClockCheck: ClockCheck,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
};

export default function AboutPage() {
  const visi =
    "Menjadi lembaga yang menyebarkan dakwah di Sumatera Barat pada khususnya dan di Indonesia pada umumnya yang mengajak masyarakat kepada pemahaman agama yang benar berdasarkan Al-Qur'an dan Sunnah sesuai dengan pemahaman Salafus Shalih.";

  const misi = [
    "Menyelenggarakan Kajian-kajian Ilmiah dengan metode Tashfiyah (memurnikan ajaran Islam dari syirik, bid'ah, khurafat) dan Tarbiyah (mendidik) berdasarkan Al-Qur'an dan As-Sunnah pemahaman Salafus Shalih.",
    "Menyelenggarakan pendidikan formal berbasis Islam (TK, SD, SMP, SMA, Pondok Pesantren, & Perguruan Tinggi) dan pendidikan non-formal sistematis (Tadribud Du'at, Bahasa Arab, Tahsin, MDA, Muallaf).",
    "Menyelenggarakan kegiatan sosial kemasyarakatan (santunan dhuafa, tanggap bencana, janda dan yatim).",
    "Menjalankan pengelolaan dana umat serta usaha ekonomi produktif sesuai prinsip syariah dalam mendukung dakwah Islam.",
    "Menyelenggarakan dakwah melalui media modern, radio, TV dakwah, dan Islamic Center terpadu.",
  ];

  return (
    <main>
      {/* 1. HERO BANNER */}
      <section className="hero-section-box">
        <div className="site-container">
          <div style={{ maxWidth: '780px' }}>
            <div className="hero-eyebrow">
              TENTANG KAMI &bull; FILOSOFI ZAITUNU
            </div>

            <h1 className="hero-title">
              Berakar pada Nilai, Bertumbuh dalam Kompetensi, <br />
              <span className="hero-title-highlight">Berbuah dalam Pengabdian.</span>
            </h1>

            <p className="hero-desc">
              Mengenal ekosistem talenta SDM Yayasan Dar el-Iman yang terinspirasi dari pohon zaitun yang diberkahi, serta nilai-nilai luhur PINTAR yang menjadi kompas moral setiap insan pendidik.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LANDASAN STRATEGIS: VISI & MISI RESMI */}
      <section className="content-section white-bg">
        <div className="site-container">
          <div className="grid-overview">
            {/* Visi Box */}
            <div>
              <div className="section-tagline">
                <BookmarkCheck size={14} />
                <span>Visi Yayasan Dar el-Iman</span>
              </div>
              <div className="quote-editorial-card">
                <blockquote style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-title)', lineHeight: 1.5, marginBottom: '16px', fontStyle: 'italic' }}>
                  "{visi}"
                </blockquote>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  Menjadi rujukan lembaga pendidikan dan dakwah bermanhaj Ahlussunnah wal Jama'ah di Ranah Minang yang menebar manfaat bagi umat di seluruh pelosok negeri.
                </p>
              </div>
            </div>

            {/* Misi List */}
            <div>
              <div className="section-tagline" style={{ color: 'var(--gold-deep)' }}>
                <FileText size={14} />
                <span>5 Misi Strategis Yayasan</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {misi.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-page)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '16px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                    }}
                  >
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--emerald-main)',
                      color: '#ffffff',
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      {idx + 1}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, fontWeight: 500 }}>
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METAFORA POHON ZAITUN (6 PILAR ORGANISASI) */}
      <section className="content-section alt-bg">
        <div className="site-container">
          <div className="section-head-box">
            <div className="section-tagline">
              <Sparkles size={14} />
              <span>Filosofi Induk Organisasi</span>
            </div>
            <h2 className="section-title">
              6 Bagian Anatomi Pohon Zaitun
            </h2>
            <p className="section-subtitle">
              Setiap bagian pohon merepresentasikan pilar tata kelola SDM Yayasan Dar el-Iman yang kokoh dan berkelanjutan.
            </p>
          </div>

          <div className="grid-3-col">
            {(ZAITUNU_METAPHOR?.parts || ZAITUNU_METAPHOR?.pillars || []).map((part, idx) => {
              const IconComp = iconMap[part.icon] || Sparkles;
              return (
                <div key={idx} className="card-numbered">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div className="number-badge-box">
                        0{idx + 1}
                      </div>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--emerald-soft)', color: 'var(--emerald-main)', display: 'grid', placeItems: 'center' }}>
                        <IconComp size={20} />
                      </div>
                    </div>

                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--emerald-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                      {part.part}
                    </span>

                    <h3 className="card-title" style={{ marginBottom: '8px' }}>
                      {part.meaning}
                    </h3>

                    <p className="card-desc">
                      {part.action}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 6 BUDAYA ORGANISASI PINTAR */}
      <section className="content-section white-bg">
        <div className="site-container">
          <div className="section-head-box">
            <div className="section-tagline">
              <CheckCircle2 size={14} />
              <span>Core Values SDM</span>
            </div>
            <h2 className="section-title">
              Budaya Organisasi PINTAR
            </h2>
            <p className="section-subtitle">
              Enam nilai utama yang memandu perilaku harian, komunikasi antar unit, serta standar pengabdian seluruh asatidzah dan staf.
            </p>
          </div>

          <div className="grid-3-col">
            {PINTAR_VALUES.map((val, idx) => {
              const IconComp = iconMap[val.icon] || Sparkles;
              return (
                <div key={val.code} className="card-numbered">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{
                        fontSize: '1.4rem',
                        fontWeight: 900,
                        color: 'var(--emerald-main)',
                        background: 'var(--emerald-soft)',
                        padding: '6px 14px',
                        borderRadius: '12px',
                        border: '1px solid var(--emerald-border)',
                      }}>
                        {val.letter}
                      </div>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--bg-alt)', color: 'var(--text-body)', display: 'grid', placeItems: 'center' }}>
                        <IconComp size={20} />
                      </div>
                    </div>

                    <h3 className="card-title">
                      {val.name}
                    </h3>

                    <p className="card-desc" style={{ marginBottom: '16px' }}>
                      {val.desc}
                    </p>

                    <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '14px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--emerald-main)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        Indikator Utama:
                      </span>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 600 }}>
                        {val.indicator}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
