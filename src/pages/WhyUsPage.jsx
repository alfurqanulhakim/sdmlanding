import React from 'react';
import {
  Sun,
  TrendingUp,
  Award,
  ShieldCheck,
  GraduationCap,
  Laptop,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { BENEFITS_DATA } from '../data/mockData';

const iconMap = {
  Sun: Sun,
  TrendingUp: TrendingUp,
  Award: Award,
  ShieldCheck: ShieldCheck,
  GraduationCap: GraduationCap,
  Laptop: Laptop,
};

export default function WhyUsPage({ onNavigate }) {
  return (
    <main>
      {/* 1. HERO BANNER */}
      <section className="hero-section-box">
        <div className="site-container">
          <div style={{ maxWidth: '780px' }}>
            <div className="hero-eyebrow">
              KESEJAHTERAAN & KULTUR KERJA &bull; DAUN-DAUN ZAITUNU
            </div>

            <h1 className="hero-title">
              Mengapa Bertumbuh Bersama <br />
              <span className="hero-title-highlight">Yayasan Dar el-Iman?</span>
            </h1>

            <p className="hero-desc">
              Kami meyakini bahwa pendidik dan tenaga kependidikan yang tenang, terlindungi, dan terfasilitasi dengan baik akan melahirkan proses belajar mengajar yang menginspirasi generasi umat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 6 PILARS OF BENEFITS */}
      <section className="content-section white-bg">
        <div className="site-container">
          <div className="section-head-box">
            <div className="section-tagline">
              <Sparkles size={14} />
              <span>Komitmen Resmi SDM Yayasan</span>
            </div>
            <h2 className="section-title">
              6 Pilar Keberkahan & Kesejahteraan
            </h2>
            <p className="section-subtitle">
              Prinsip keadilan, transparansi, dan pemenuhan hak pegawai sesuai regulasi ketenagakerjaan dan tuntunan syariat Islam.
            </p>
          </div>

          <div className="grid-3-col">
            {BENEFITS_DATA.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Award;
              const num = String(idx + 1).padStart(2, '0');

              return (
                <div key={item.id} className="card-numbered">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div className="number-badge-box">{num}</div>
                      <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--emerald-soft)', color: 'var(--emerald-main)', display: 'grid', placeItems: 'center' }}>
                        <IconComp size={22} />
                      </div>
                    </div>

                    <h3 className="card-title">
                      {item.title}
                    </h3>

                    <p className="card-desc">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA: JOIN THE ECOSYSTEM */}
      <section style={{ background: 'var(--navy-dark)', color: '#ffffff', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="section-tagline" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>
              <Sparkles size={14} />
              <span>Jalur Pengabdian Mulia</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.25 }}>
              Siap Bertumbuh Bersama Kami?
            </h2>
            <p style={{ color: '#cde4de', fontSize: '0.98rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Daftarkan diri Anda pada formasi lowongan aktif dan mulailah perjalanan pengabdian dakwah pendidikan bersama Yayasan Dar el-Iman.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('karier')}
              className="btn-hero-primary"
              style={{ padding: '14px 32px' }}
            >
              <span>Lihat Formasi Karier Aktif</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
