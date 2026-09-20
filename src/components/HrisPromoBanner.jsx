import React from 'react';
import { Sparkles, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import laptopImg from '../assets/Laptop.png';
import hpImg from '../assets/HP.png';

// SVG Icon WhatsApp
function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.507 14.307l-.009.075c-.238-.12-1.406-.694-1.624-.774-.219-.08-.378-.119-.537.12-.159.239-.616.774-.755.933-.139.16-.279.18-.518.06-.239-.12-1.008-.372-1.92-1.185-.71-.633-1.19-1.415-1.33-1.654-.139-.24-.015-.37.105-.489.108-.107.24-.279.359-.419.12-.14.16-.239.24-.398.08-.16.04-.299-.02-.419-.06-.12-.538-1.296-.737-1.774-.194-.467-.393-.404-.538-.412l-.459-.008c-.16 0-.418.06-.637.299-.219.24-.836.817-.836 1.993 0 1.176.856 2.312.976 2.472.12.16 1.684 2.57 4.078 3.604.57.246 1.015.393 1.363.504.572.182 1.093.156 1.504.095.459-.069 1.406-.575 1.605-1.131.199-.556.199-1.032.139-1.132-.06-.1-.219-.16-.458-.279zM12.04 2C6.544 2 2.08 6.464 2.08 11.96c0 1.83.497 3.542 1.362 5.019L2 22l5.176-1.358a9.914 9.914 0 004.864 1.278c5.496 0 9.96-4.464 9.96-9.96C22 6.464 17.536 2 12.04 2zm0 18.232c-1.579 0-3.053-.455-4.305-1.242l-.309-.196-3.203.84.855-3.123-.205-.327a8.234 8.234 0 01-1.265-4.224c0-4.557 3.708-8.265 8.227-8.265 4.52 0 8.227 3.708 8.227 8.265 0 4.557-3.707 8.265-8.227 8.265z" />
    </svg>
  );
}

export default function HrisPromoBanner() {
  const waNumber = '085158366127';
  const waCleanNumber = '6285158366127';
  const defaultMessage = encodeURIComponent(
    "Assalamu'alaikum Admin SIMAK SDM, saya tertarik untuk menjadwalkan demo sistem HRIS Kelola SDM. Mohon informasi jadwal dan penjelasan fiturnya."
  );
  const waLink = `https://wa.me/${waCleanNumber}?text=${defaultMessage}`;

  const featurePills = [
    'Presensi Geofencing GPS & Face',
    'Manajemen Cuti & Izin Online',
    'Payroll & E-Slip Gaji Terpadu',
    'Evaluasi KPI & Kinerja Pegawai',
    'Multi-Platform Web & Mobile',
  ];

  return (
    <section className="hris-promo-section" id="hris-ad-showcase">
      {/* Ambient background glow & matrix grid */}
      <div className="hris-promo-ambient-glow left" />
      <div className="hris-promo-ambient-glow right" />
      <div className="hris-promo-grid-overlay" />

      <div className="site-container hris-promo-container">
        <div className="hris-promo-layout">
          {/* LEFT COLUMN: MARKETING COPY & CTA */}
          <div className="hris-promo-content">
            {/* Eyebrow Badge */}
            <div className="hris-promo-badge">
              <Sparkles size={14} className="hris-badge-icon" />
              <span>SOLUSI MODERN HRIS & KEPEGAWAIAN</span>
            </div>

            {/* Main Headline (matches user request) */}
            <h2 className="hris-promo-title">
              Kelola SDM Lebih Efektif, <br />
              <span className="hris-title-gradient">Terintegrasi dan Berbasis Data</span>
            </h2>

            {/* Body Copy (refined from user reference) */}
            <p className="hris-promo-desc">
              <strong>SIMAK SDM</strong> adalah solusi <em>Human Resource Information System (HRIS)</em> komprehensif yang dirancang untuk membantu yayasan, lembaga pendidikan, instansi pemerintah, BUMN, BUMD, rumah sakit, perguruan tinggi, dan organisasi lainnya dalam mengelola seluruh proses tata kelola sumber daya manusia secara digital, terintegrasi, dan efisien.
            </p>

            {/* Feature Pills */}
            <div className="hris-feature-pills">
              {featurePills.map((pill, idx) => (
                <div key={idx} className="hris-feature-pill">
                  <CheckCircle2 size={14} className="hris-pill-check" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

            {/* CTA & Support Buttons */}
            <div className="hris-promo-actions">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hris-btn-wa-demo"
                id="btn-jadwalkan-demo-wa"
              >
                <div className="hris-wa-icon-box">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="hris-wa-text-group">
                  <span className="hris-wa-label">Jadwalkan Demo</span>
                  <span className="hris-wa-sub">Gratis &bull; Konsultasi Langsung</span>
                </div>
                <ArrowRight size={18} className="hris-wa-arrow" />
              </a>

              <div className="hris-wa-meta-note">
                <span className="hris-online-dot" />
                <span>Langsung terhubung dengan Tim Ahli SDM via WhatsApp: <strong>{waNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FLOATING DEVICES SHOWCASE */}
          <div className="hris-promo-visual">
            <div className="hris-device-stage">
              {/* Radial Backdrop Glow */}
              <div className="hris-stage-spotlight" />

              {/* FLOATING LAPTOP MOCKUP */}
              <div className="hris-laptop-wrapper">
                <img
                  src={laptopImg}
                  alt="SIMAK SDM Dashboard Desktop Mockup"
                  className="hris-laptop-img"
                  loading="lazy"
                />
                {/* Floating Soft Shadow for Laptop */}
                <div className="hris-laptop-shadow" />
              </div>

              {/* FLOATING SMARTPHONE MOCKUP (Front-Right Overlap) */}
              <div className="hris-phone-wrapper">
                <img
                  src={hpImg}
                  alt="SIMAK SDM Mobile App Mockup"
                  className="hris-phone-img"
                  loading="lazy"
                />
                {/* Floating Soft Shadow for Phone */}
                <div className="hris-phone-shadow" />
              </div>

              {/* Floating Stat Chip 1 */}
              <div className="hris-floating-stat stat-top">
                <div className="stat-pulse-dot" />
                <div>
                  <div className="stat-stat-title">Presensi Geofencing</div>
                  <div className="stat-stat-val">96.5% Akurasi Tepat Waktu</div>
                </div>
              </div>

              {/* Floating Stat Chip 2 */}
              <div className="hris-floating-stat stat-bottom">
                <Shield size={16} color="#34d399" />
                <div>
                  <div className="stat-stat-title">Keamanan Data SDM</div>
                  <div className="stat-stat-val">Enkripsi & Multi-Level Akses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
