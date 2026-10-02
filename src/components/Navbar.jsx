import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, Smartphone } from 'lucide-react';

export default function Navbar({ activeRoute, onNavigate, onOpenStatusModal }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'unit', label: 'Unit Lembaga' },
    { id: 'kenapa-kami', label: 'Kenapa Kami' },
    { id: 'karier', label: 'Lowongan' },
    { id: 'our-team', label: 'Our Team' },
  ];

  return (
    <header className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Brand Logo & Title */}
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="nav-brand-btn"
        id="brand-logo-btn"
      >
        <div className="nav-brand-logos">
          <img
            src="/logo-yayasan.png"
            alt="Logo Yayasan Dar el-Iman"
            style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ width: '1px', height: '18px', backgroundColor: '#cbd5e1' }} />
          <img
            src="/logo-sdm.png"
            alt="Logo SDM Dar el-Iman"
            style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
          />
        </div>
        <div className="nav-brand-text">
          <div className="nav-brand-title">
            <span>ZAITUNU</span>
            <span className="nav-brand-badge">SDM</span>
          </div>
          <p className="nav-brand-sub">
            Yayasan Dar el-Iman Padang
          </p>
        </div>
      </button>

      {/* Floating Pill Nav Bar */}
      <div className="nav-pill-wrapper">
        <nav className="nav-pill-box" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const isActive = activeRoute === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`nav-pill-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Action Buttons (Right) */}
      <div className="nav-actions">
        <button
          type="button"
          onClick={() => {
            if (activeRoute !== 'home') {
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('unduh-simak');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 200);
            } else {
              const el = document.getElementById('unduh-simak');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="btn-nav-download"
          id="btn-nav-download-app"
          title="Aplikasi Android SIMAK Pintar di Google Play Store"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '14px',
              height: '14px',
              minWidth: '14px',
              minHeight: '14px',
              maxWidth: '14px',
              maxHeight: '14px',
              flexShrink: 0,
              display: 'inline-block',
            }}
          >
            <path fill="#4285F4" d="M47.1 22.1c-3.1 3.3-4.8 8.1-4.8 14.1v439.6c0 6 1.7 10.8 4.8 14.1l2.4 2.2L277.6 264v-16L49.5 19.9l-2.4 2.2z"/>
            <path fill="#FBBC04" d="M354.2 340.6l-76.6-76.6V248l76.6-76.6 2.4 1.4 90.9 51.6c25.9 14.7 25.9 38.8 0 53.6l-90.9 51.6-2.4 1.4z"/>
            <path fill="#EA4335" d="M277.6 264L47.1 492.1c7.7 8.1 20.3 9.1 34.3 1.2l242.8-137.9L277.6 264z"/>
            <path fill="#34A853" d="M277.6 248l46.6-26.5L81.4 83.6c-14-7.9-26.6-6.9-34.3 1.2L277.6 248z"/>
          </svg>
          <span className="btn-nav-download-text">Google Play</span>
        </button>

        <button
          type="button"
          onClick={onOpenStatusModal}
          className="btn-nav-status"
          id="btn-nav-track-status"
        >
          <Search size={14} />
          <span>Cek Status</span>
        </button>

        <a
          href="https://simak.sdmdareliman.web.id"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-nav-simak"
          title="Login Portal SIMAK Internal Pegawai (Buka Tab Baru)"
        >
          <span>Portal SIMAK</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </header>
  );
}
