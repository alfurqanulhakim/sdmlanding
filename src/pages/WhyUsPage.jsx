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
    <div>
      {/* 1. HERO BANNER */}
      <section className="hero-page-banner">
        <div className="container-custom relative z-10 max-w-4xl space-y-6">
          <div className="eyebrow-accent">
            <span>KESEJAHTERAAN & KULTUR KERJA &bull; DAUN-DAUN ZAITUNU</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Mengapa Bertumbuh Bersama <br />
            <span className="text-[#f1d493]">Yayasan Dar el-Iman?</span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
            Kami meyakini bahwa pendidik dan tenaga kependidikan yang tenang, terlindungi, dan terfasilitasi dengan baik akan melahirkan proses belajar mengajar yang menginspirasi generasi umat.
          </p>
        </div>
      </section>

      {/* 2. 6 PILARS OF BENEFITS */}
      <section className="page-section bg-white border-b border-slate-200/80">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold text-emerald-800 tracking-widest uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Komitmen Resmi SDM Yayasan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              6 Pilar Keberkahan & Kesejahteraan
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Prinsip keadilan, transparansi, dan pemenuhan hak pegawai sesuai regulasi dan tuntunan syariat Islam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS_DATA.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Award;
              const num = String(idx + 1).padStart(2, '0');

              return (
                <div key={item.id} className="card-alhakim flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="number-badge">{num}</div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Terstandar dalam Kebijakan SDM</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SIMAK INTEGRATION SPOTLIGHT */}
      <section className="page-section-alt">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Ekosistem Digital SIMAK
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                Kemudahan Administrasi Kepegawaian dalam Satu Sentuhan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seluruh pegawai Yayasan Dar el-Iman terhubung ke sistem <strong>SIMAK Pintar</strong>. Presensi berbasis radius GPS sekolah, perizinan cuti online, monitoring slip remunerasi, hingga laporan ketercapaian KPI dapat diakses secara transparan langsung dari ponsel pintar asatidzah.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('karier')}
                className="btn-simak-pill text-xs px-5 py-2.5"
              >
                <span>Lihat Formasi Lowongan</span>
              </button>

              <a
                href="https://simak.sdmdareliman.web.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                <span>Buka Portal Internal SIMAK ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
