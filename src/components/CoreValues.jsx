import React from 'react';
import {
  HeartHandshake,
  BookOpenCheck,
  Sparkles,
  ClockCheck,
  ShieldCheck,
  Smile,
  CheckCircle2,
  Anchor,
} from 'lucide-react';
import { PINTAR_VALUES } from '../data/mockData';

const iconMap = {
  HeartHandshake: HeartHandshake,
  BookOpenCheck: BookOpenCheck,
  Sparkles: Sparkles,
  ClockCheck: ClockCheck,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
};

export default function CoreValues() {
  return (
    <section id="pintar" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200/80">
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="badge-pill badge-emerald mx-auto">
            <Anchor className="w-3.5 h-3.5 text-emerald-700" />
            <span>Fondasi Nilai Organisasi</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Nilai yang Menjadi <span className="title-gradient-zaitunu">Akar</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Sebagaimana pohon zaitun yang mampu bertahan ratusan tahun karena akarnya yang menghujam kokoh, insan Yayasan Dar el-Iman bertumpu pada 6 pilar nilai utama <strong>PINTAR</strong>.
          </p>
        </div>

        {/* 6 PINTAR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PINTAR_VALUES.map((val) => {
            const IconComp = iconMap[val.icon] || Sparkles;

            return (
              <div
                key={val.id}
                className="card-zaitunu p-6 sm:p-7 flex flex-col justify-between space-y-5 relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Letter Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-2xl shadow-xs">
                        {val.letter}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 leading-tight">
                          {val.title}
                        </h3>
                        <div className="text-[11px] font-bold text-emerald-700">
                          {val.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-emerald-700" />
                    </div>
                  </div>

                  {/* Summary Callout */}
                  <div className="text-xs font-semibold text-slate-800 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/80 leading-snug">
                    "{val.summary}"
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                {/* Behavioral Indicators List */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Indikator Perilaku Utama:
                  </div>
                  <ul className="space-y-1.5">
                    {val.indicators.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
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
    </section>
  );
}
