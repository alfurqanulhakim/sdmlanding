import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Search, Sparkles } from 'lucide-react';

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
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'PINTAR', href: '#pintar' },
    { label: 'Unit', href: '#unit' },
    { label: 'Kenapa Kami', href: '#kenapa-kami' },
    { label: 'Karier', href: '#karier' },
    { label: 'Our Team', href: '#our-team' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav-scrolled py-2.5' : 'glass-nav-header py-3.5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#beranda" className="flex items-center gap-3.5 group" id="brand-logo-link">
          <div className="flex items-center gap-2.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs group-hover:border-emerald-300 transition-colors">
            <img
              src="/logo-yayasan.png"
              alt="Logo Yayasan Dar el-Iman"
              className="h-8 md:h-9 w-auto object-contain"
            />
            <div className="h-5 w-px bg-slate-200" />
            <img
              src="/logo-sdm.png"
              alt="Logo SDM Dar el-Iman"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-extrabold text-slate-900 leading-tight text-sm tracking-tight flex items-center gap-1.5">
              <span>ZAITUNU</span>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-200 uppercase">
                SDM
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Yayasan Dar el-Iman Padang
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-emerald-800 hover:bg-emerald-50/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenStatusModal}
            id="nav-btn-track-status"
            className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-emerald-800 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 border border-slate-200"
          >
            <Search className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cek Status</span>
          </button>

          <a
            href="https://simak.sdmdareliman.web.id"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-btn-simak"
            className="btn-simak-external"
            title="Buka Portal Internal SIMAK di tab baru"
          >
            <span>Login Portal SIMAK</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 border-b border-slate-200 shadow-xl px-5 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStatusModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-emerald-700" />
              <span>Cek Status Lamaran</span>
            </button>

            <a
              href="https://simak.sdmdareliman.web.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-simak-external justify-center py-2.5"
            >
              <span>Login Portal SIMAK ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
