import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Search, Sparkles, LogIn } from 'lucide-react';

export default function Navbar({ onOpenStatusModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Visi & Nilai', href: '#nilai-utama' },
    { label: 'Unit Pendidikan', href: '#unit-pendidikan' },
    { label: 'Kenapa Kami', href: '#kenapa-kami' },
    { label: 'Pusat Karir', href: '#pusat-karir' },
    { label: 'Alur Seleksi', href: '#alur-seleksi' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-md'
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo with Official Yayasan & SDM Logos */}
        <a href="#beranda" className="flex items-center gap-3 group" id="brand-logo-link">
          <div className="flex items-center gap-2 bg-white/90 p-1 rounded-xl border border-slate-200/60 shadow-xs group-hover:scale-105 transition-transform">
            <img
              src="/logo-yayasan.png"
              alt="Logo Yayasan Dar el-Iman"
              className="h-9 w-auto object-contain"
            />
            <div className="h-6 w-px bg-slate-200" />
            <img
              src="/logo-sdm.png"
              alt="Logo SDM Dar el-Iman"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-black text-slate-900 leading-tight text-sm tracking-tight flex items-center gap-1.5">
              <span>SDM DAR EL-IMAN</span>
              <span className="text-[10px] uppercase font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded border border-emerald-300">
                Official
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Yayasan Dar el-Iman Padang
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenStatusModal}
            id="btn-cek-status-desktop"
            className="btn btn-outline text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5"
            title="Cek status perkembangan lamaran Anda"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Cek Status Lamaran</span>
          </button>

          <a
            href="https://simak.sdmdareliman.web.id"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-portal-simak-desktop"
            className="btn btn-simak-portal text-xs px-4 py-2 rounded-xl flex items-center gap-1.5"
            title="Buka Portal Internal Pegawai SIMAK"
          >
            <LogIn className="w-3.5 h-3.5 text-amber-400" />
            <span>Portal SIMAK Pegawai</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="btn-mobile-menu-toggle"
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Buka menu navigasi"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStatusModal();
              }}
              id="btn-cek-status-mobile"
              className="btn btn-outline w-full justify-center text-xs py-2.5"
            >
              <Search className="w-4 h-4" />
              <span>Cek Status Lamaran</span>
            </button>

            <a
              href="https://simak.sdmdareliman.web.id"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-portal-simak-mobile"
              className="btn btn-simak-portal w-full justify-center text-xs py-2.5"
            >
              <LogIn className="w-4 h-4 text-amber-400" />
              <span>Login Portal SIMAK Pegawai</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
