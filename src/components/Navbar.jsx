import React, { useState, useEffect } from 'react';
import { Search, ExternalLink } from 'lucide-react';

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
