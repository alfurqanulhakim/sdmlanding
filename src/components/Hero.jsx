import React from 'react';
import { ArrowDownRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ZAITUNU_METAPHOR } from '../data/mockData';

export default function Hero() {
  const quickStats = [
    { label: 'Unit Pendidikan & Dakwah', val: '19+' },
    { label: 'Asatidzah & Tenaga Pendidik', val: '500+' },
    { label: 'Santri & Peserta Didik', val: '5.000+' },
    { label: 'Ekosistem Berlandaskan Sunnah', val: '100%' },
  ];

  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50">
      {/* Subtle Ambient Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Brand Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-extrabold tracking-wide uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{ZAITUNU_METAPHOR.brand} • {ZAITUNU_METAPHOR.subtitle}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.2]">
            Bertumbuh dan Menebar Kebaikan Bersama{' '}
            <span className="title-gradient-zaitunu">Yayasan Dar el-Iman</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Portal resmi SDM dan pusat karier Yayasan Dar el-Iman untuk menemukan kesempatan bertumbuh, berkontribusi, dan mengabdi bersama ekosistem pendidikan dan dakwah.
          </p>

          {/* Concept Tagline Bar */}
          <div className="inline-block py-2 px-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <p className="text-xs sm:text-sm font-semibold text-emerald-900 tracking-wide italic">
              "{ZAITUNU_METAPHOR.tagline}"
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#karier"
              id="hero-cta-lowongan"
              className="btn-zaitunu-primary w-full sm:w-auto px-7 py-3.5"
            >
              <span>Jelajahi Lowongan</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#kenapa-kami"
              id="hero-cta-budaya"
              className="btn-zaitunu-secondary w-full sm:w-auto px-6 py-3.5"
            >
              <span>Kenali Lingkungan Kerja Kami</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Lingkungan Kerja Syar'i & Sunnah</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Sistem Karier & Skala Upah Terukur</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-700" />
              <span>Budaya Organisasi PINTAR</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid (Clean, Airy, Configurable) */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickStats.map((st, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-2xl bg-white/70 border border-slate-200/60 shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {st.val}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-1 leading-snug">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
