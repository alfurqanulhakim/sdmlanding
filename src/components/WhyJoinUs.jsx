import React from 'react';
import {
  HeartHandshake,
  TrendingUp,
  ShieldCheck,
  Award,
  GraduationCap,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { WHY_JOIN_US } from '../data/landingData';

const iconMap = {
  HeartHandshake: HeartHandshake,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Award: Award,
  GraduationCap: GraduationCap,
  Smartphone: Smartphone,
};

export default function WhyJoinUs() {
  return (
    <section id="kenapa-kami" className="py-20 bg-white border-b border-slate-200/80">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="section-tag mx-auto">Kesejahteraan & Karir</div>
          <h2 className="section-title">
            Mengapa Mengabdi Bersama <span className="gradient-text">Dar el-Iman?</span>
          </h2>
          <p className="section-desc mx-auto">
            Kami meyakini bahwa guru dan tenaga kependidikan yang bahagia dan terlindungi akan melahirkan
            proses belajar mengajar yang menginspirasi generasi umat.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_JOIN_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={index}
                className="bg-slate-50/80 rounded-3xl p-7 border border-slate-200/80 card-hover space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                  <IconComponent className="w-6 h-6 text-amber-300" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Box */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="text-amber-400 text-xs font-black uppercase tracking-wider">
              Peluang Karir & Amal Jariyah
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Siap Mendedikasikan Ilmu untuk Generasi Qur'ani?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
              Lihat formasi kebutuhan guru kelas, guru tahfidz, bahasa Arab, dan staf kependidikan yang sedang dibuka.
            </p>
          </div>

          <a
            href="#pusat-karir"
            className="btn btn-gold px-6 py-3.5 rounded-2xl font-extrabold text-sm shrink-0 flex items-center gap-2 shadow-lg relative z-10"
          >
            <span>Daftar Sekarang di Pusat Karir</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
