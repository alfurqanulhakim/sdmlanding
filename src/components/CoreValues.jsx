import React, { useState } from 'react';
import {
  HeartHandshake,
  BookOpenCheck,
  Sparkles,
  ClockCheck,
  ShieldCheck,
  Smile,
  CheckCircle2,
  Check,
  BookmarkCheck,
  Compass,
  FileText,
} from 'lucide-react';
import { STRATEGIC_FOUNDATION, PINTAR_VALUES } from '../data/landingData';

const iconMap = {
  HeartHandshake: HeartHandshake,
  BookOpenCheck: BookOpenCheck,
  Sparkles: Sparkles,
  ClockCheck: ClockCheck,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
};

export default function CoreValues() {
  const [activeTab, setActiveTab] = useState('p');

  return (
    <section id="nilai-utama" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="section-tag mx-auto">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Landasan Strategis & Nilai Lembaga</span>
          </div>
          <h2 className="section-title">
            Visi, Misi & Budaya Organisasi <span className="gradient-text">"PINTAR"</span>
          </h2>
          <p className="section-desc mx-auto">
            Bekerja di Yayasan Dar el-Iman bukan sekadar menunaikan tugas profesi, melainkan amanah dakwah
            dan ibadah mulia untuk mencetak generasi Rabbani berlandaskan Al-Qur'an dan As-Sunnah.
          </p>
        </div>

        {/* 1. Visi & Misi Strategis Yayasan Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 translate-x-20 -translate-y-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-0 bottom-0 -translate-x-10 translate-y-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Visi Box */}
            <div className="lg:col-span-5 space-y-4 lg:border-r lg:border-slate-800 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-black uppercase tracking-wider">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>Visi Yayasan Dar el-Iman</span>
              </div>
              <blockquote className="text-base sm:text-lg font-bold text-white leading-relaxed italic border-l-4 border-amber-400 pl-4 py-1">
                "{STRATEGIC_FOUNDATION.visi}"
              </blockquote>
              <p className="text-xs text-slate-400 leading-relaxed">
                Menjadi pilar dakwah Ahlussunnah wal Jama'ah yang mengakar di Ranah Minang dan memberikan kontribusi nyata bagi pendidikan serta kemanusiaan di Indonesia.
              </p>
            </div>

            {/* Misi Box */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-black uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>5 Misi Strategis Yayasan</span>
              </div>
              <div className="space-y-2.5 pt-1">
                {STRATEGIC_FOUNDATION.misi.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-slate-800/70 hover:bg-slate-800 transition-colors p-3.5 rounded-2xl border border-slate-700/60"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-xs font-extrabold">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. 6 Pilar Budaya Organisasi PINTAR */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Dokumen Master Budaya Organisasi
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              6 Pilar Budaya Kerja <span className="text-emerald-700">"PINTAR"</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Standar baku perilaku kerja, akhlak, dan indikator penilaian evaluasi kinerja (KPI) asatidzah & tenaga kependidikan.
            </p>
          </div>

          {/* Grid 6 Kartu Nilai PINTAR */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PINTAR_VALUES.map((val) => {
              const IconComp = iconMap[val.icon] || Sparkles;
              return (
                <div
                  key={val.id}
                  className={`rounded-3xl p-6 bg-slate-50 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:bg-white relative flex flex-col justify-between space-y-4 group ${val.cardBorder}`}
                >
                  <div className="space-y-4">
                    {/* Header Pilar: Huruf & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs font-black text-xl group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                          {val.letter}
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-slate-900 leading-tight">
                            {val.title}
                          </h4>
                          <span className="text-[11px] font-bold text-slate-500">
                            {val.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Tagline Budaya */}
                    <div className="text-xs font-bold text-emerald-800 bg-emerald-50/80 px-3 py-1.5 rounded-xl border border-emerald-200/60 leading-snug">
                      "{val.tagline}"
                    </div>

                    {/* Definisi */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  {/* Indikator Perilaku Risalah */}
                  <div className="pt-3 border-t border-slate-200/80 space-y-2">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Indikator Perilaku Utama:
                    </div>
                    <ul className="space-y-1.5">
                      {val.indicators.slice(0, 3).map((ind, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-slate-600 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
