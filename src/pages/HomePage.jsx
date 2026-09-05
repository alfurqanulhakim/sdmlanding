import React from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Building2,
  Compass,
  ArrowDownRight,
} from 'lucide-react';
import { ZAITUNU_METAPHOR, PINTAR_VALUES, MOCK_VACANCIES } from '../data/mockData';

export default function HomePage({ onNavigate, onSelectVacancy, onOpenStatusModal }) {
  const quickStats = [
    { label: 'Unit Lembaga & Sekolah', val: '19+' },
    { label: 'Asatidzah & Tenaga Pendidik', val: '500+' },
    { label: 'Santri & Peserta Didik', val: '5.000+' },
    { label: 'Manhaj Ahlussunnah', val: '100%' },
  ];

  return (
    <div>
      {/* 1. HERO SECTION (DARK DEEP FOREST WITH ARCHITECTURAL GRID) */}
      <section className="hero-page-banner">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="eyebrow-accent">
              <span>ZAITUNU &bull; HUMAN CAPITAL & CAREER ECOSYSTEM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white tracking-tight leading-[1.12]">
              Bertumbuh dan Menebar Kebaikan Bersama <br className="hidden sm:block" />
              <span className="text-[#f1d493]">Yayasan Dar el-Iman.</span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
              Portal resmi SDM dan pusat karier Yayasan Dar el-Iman untuk menemukan kesempatan bertumbuh, berkontribusi, dan mengabdi bersama ekosistem pendidikan dan dakwah bermanhaj Salafus Shalih.
            </p>

            {/* Tagline Box */}
            <div className="inline-block py-2.5 px-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <p className="text-xs sm:text-sm font-semibold text-[#f1d493] italic tracking-wide">
                "{ZAITUNU_METAPHOR.tagline}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => onNavigate('karier')}
                className="btn-simak-pill px-6 py-3.5 text-sm"
              >
                <span>Jelajahi Lowongan Karier</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('tentang')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white font-bold text-sm hover:bg-white/15 transition-all"
              >
                <span>Filosofi Zaitunu & PINTAR</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Numbers Bar at Bottom of Hero */}
        <div className="container-custom mt-16 pt-8 border-t border-white/15 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-[#f1d493]">
                  {item.val}
                </div>
                <div className="text-xs text-emerald-200/90 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW: BERAKAR PADA NILAI, BERTUMBUH DALAM KOMPETENSI */}
      <section className="page-section bg-white border-b border-slate-200/80">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-emerald-800 tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Pohon Zaitun yang Diberkahi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Membangun Generasi Rabbani Lewat Keteladanan.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Di Yayasan Dar el-Iman, mengabdi bukan sekadar profesi mencari nafkah, melainkan ikhtiar menanam amal jariyah. Seperti pohon zaitun yang akarnya menancap teguh dan rantingnya berbuah kemanfaatan, kami memfasilitasi setiap asatidzah untuk berkembang dalam adab dan keahlian.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('tentang')}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 underline underline-offset-4"
                >
                  <span>Baca Selengkapnya Tentang Zaitunu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3 Numbered Highlight Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="card-alhakim">
                <div className="number-badge">01</div>
                <h3 className="text-base font-black text-slate-900 mb-2">Nilai PINTAR</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Peduli, Islami, Niat Mulia, Taat, Amanah, dan Ramah sebagai ruh setiap aktivitas kepegawaian.
                </p>
              </div>

              <div className="card-alhakim">
                <div className="number-badge">02</div>
                <h3 className="text-base font-black text-slate-900 mb-2">19+ Unit Kerja</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Jalur pengabdian di jenjang PAUD, Sekolah Dasar, Menengah, Boarding, hingga Lembaga Dakwah.
                </p>
              </div>

              <div className="card-alhakim">
                <div className="number-badge">03</div>
                <h3 className="text-base font-black text-slate-900 mb-2">Jenjang Terukur</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Skala Upah Dua Titik, KPI transparan, jaminan BPJS, dan digitalisasi satu pintu dengan SIMAK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECENT VACANCIES TEASER */}
      <section className="page-section-alt border-b border-slate-200/80">
        <div className="container-custom space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-bold text-emerald-800 tracking-widest uppercase flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pusat Karier & Rekrutmen</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Formasi Terbuka Periode Ini
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('karier')}
              className="btn-simak-pill text-xs px-5 py-2.5 self-start sm:self-auto"
            >
              <span>Lihat Semua Lowongan ({MOCK_VACANCIES.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_VACANCIES.slice(0, 3).map((vac) => (
              <div
                key={vac.id}
                className="card-alhakim flex flex-col justify-between space-y-4 bg-white"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {vac.code}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {vac.status}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {vac.title}
                  </h3>
                  <p className="text-xs text-emerald-800 font-semibold">
                    {vac.unit}
                  </p>
                  <p className="text-xs text-slate-500">
                    Kriteria: {vac.gender} &bull; {vac.education}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Batas: {vac.deadline}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectVacancy(vac)}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                  >
                    <span>Lamar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING INVITATION BANNER */}
      <section className="page-section bg-white text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Mulai Perjalanan Pengabdian Anda Hari Ini
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Jelajahi halaman profil unit dan budaya kerja kami untuk mengenal lebih dekat lingkungan yang akan menjadi wadah Anda berdedikasi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('unit')}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              Lihat 19 Unit Lembaga
            </button>
            <button
              type="button"
              onClick={() => onNavigate('kenapa-kami')}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              Kesejahteraan & Benefit
            </button>
            <button
              type="button"
              onClick={() => onNavigate('our-team')}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              Our Team & Layanan SDM
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
