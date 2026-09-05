import React from 'react';
import { BookOpen, ShieldCheck, Sparkles, Users2, Check } from 'lucide-react';
import { CORE_VALUES } from '../data/landingData';

const iconMap = {
  BookOpen: BookOpen,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Users2: Users2,
};

export default function CoreValues() {
  return (
    <section id="nilai-utama" className="py-20 bg-white border-y border-slate-200/80">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="section-tag mx-auto">Visi & Nilai Budaya Kerja</div>
          <h2 className="section-title">
            Fondasi Spritual & Profesionalisme <span className="gradient-text">SDM Dar el-Iman</span>
          </h2>
          <p className="section-desc mx-auto">
            Di Yayasan Dar el-Iman, bekerja bukan sekadar menunaikan kewajiban keduniawian, melainkan amanah dakwah
            dan ibadah mulia untuk mencetak generasi berkarakter salafus shalih.
          </p>
        </div>

        {/* Visi & Misi Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-900 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 translate-x-16 -translate-y-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Visi Box */}
            <div className="lg:col-span-5 space-y-3 lg:border-r lg:border-slate-800 lg:pr-8">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                Visi Bidang SDM
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                "Pusat Keunggulan Pengelolaan Talenta Pendidik Berbasis Al-Qur'an & As-Sunnah."
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mewujudkan ekosistem kerja islami yang memuliakan guru dan karyawan, melahirkan asatidzah berkompetensi tinggi,
                dan menghadirkan lingkungan belajar penuh keteladanan di Kota Padang.
              </p>
            </div>

            {/* Misi Box */}
            <div className="lg:col-span-7 space-y-3.5">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                Misi Strategis SDM
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 bg-slate-800/60 p-3.5 rounded-2xl border border-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Membina aqidah shahihah, adab, dan kompetensi pedagogik guru secara berkelanjutan.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-800/60 p-3.5 rounded-2xl border border-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Sistem remunerasi & evaluasi kinerja (KPI) yang adil, transparan, dan menyejahterakan.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-800/60 p-3.5 rounded-2xl border border-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Rekrutmen talenta asatidzah yang terukur dan selaras kebutuhan formasi Manpower Planning.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-800/60 p-3.5 rounded-2xl border border-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Digitalisasi manajemen administrasi kepegawaian modern dan cepat melalui ekosistem SIMAK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              4 Nilai Luhur Budaya Kerja (*Core Values*)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Prinsip yang dipegang teguh oleh setiap insan pendidik dan tenaga kependidikan Dar el-Iman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((item) => {
              const IconComp = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl p-6 bg-slate-50 border border-slate-200/90 space-y-4 card-hover relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs">
                      <IconComp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 font-serif opacity-70">
                      {item.arabic}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-slate-900">{item.title}</h4>
                    <div className="text-xs font-bold text-amber-600 mt-0.5">{item.subtitle}</div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
