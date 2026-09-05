import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, Menu, X } from 'lucide-react';

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
    { id: 'unit', label: 'Unit' },
    { id: 'kenapa-kami', label: 'Kenapa Kami' },
    { id: 'karier', label: 'Karier' },
    { id: 'our-team', label: 'Our Team' },
  ];

  return (
    <header className={`top-navbar-container ${isScrolled ? 'top-navbar-scrolled' : ''}`}>
      {/* Brand Logo & Name */}
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="brand-wrapper text-left bg-transparent border-none cursor-pointer"
        id="brand-logo-btn"
      >
        <div className="brand-logos">
          <img
            src="/logo-yayasan.png"
            alt="Logo Yayasan Dar el-Iman"
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <div className="h-4 w-px bg-slate-300" />
          <img
            src="/logo-sdm.png"
            alt="Logo SDM Dar el-Iman"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </div>
        <div className="hidden sm:block leading-tight">
          <div className="text-xs sm:text-sm font-black text-white tracking-tight flex items-center gap-1.5">
            <span>ZAITUNU</span>
            <span className="text-[10px] font-bold bg-[#f1d493] text-[#063b2d] px-1.5 py-0.2 rounded">
              SDM
            </span>
          </div>
          <p className="text-[11px] text-emerald-200/80 font-medium">
            Yayasan Dar el-Iman Padang
          </p>
        </div>
      </button>

      {/* Floating Pill Nav Bar (alhakimmembantu.asia style) */}
      <div className="nav-center-wrapper">
        <nav className="floating-nav-pills" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const isActive = activeRoute === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={isActive ? 'active' : ''}
              >
                {item.label}
              </button>
            );
          })}
          <a href="#kontak" className="hidden md:inline-flex">
            Kontak
          </a>
        </nav>
      </div>

      {/* Action CTA Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenStatusModal}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-white hover:text-[#f1d493] hover:bg-white/10 transition-colors"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Cek Status</span>
        </button>

        <a
          href="https://simak.sdmdareliman.web.id"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-simak-pill"
          title="Login Portal SIMAK Internal Pegawai (Buka Tab Baru)"
        >
          <span>Portal SIMAK</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
