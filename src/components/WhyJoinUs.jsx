import React from 'react';
import {
  Sun,
  TrendingUp,
  Award,
  ShieldCheck,
  GraduationCap,
  Laptop,
  CheckCircle2,
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

export default function WhyJoinUs() {
  return (
    <section id="kenapa-kami" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/80">
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="badge-pill badge-gold mx-auto">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>Kesejahteraan & Pengembangan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Mengapa Bertumbuh Bersama <span className="title-gradient-zaitunu">Dar el-Iman?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pendidik dan tenaga kependidikan adalah daun-daun pelindung generasi. Kami berkomitmen menyediakan iklim kerja yang tenang, teratur, adil, dan mendukung pertumbuhan potensi Anda.
          </p>
        </div>

        {/* Benefits Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS_DATA.map((item) => {
            const IconComp = iconMap[item.icon] || Award;

            return (
              <div
                key={item.id}
                className="card-zaitunu p-6 sm:p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200/70">
                    <IconComp className="w-6 h-6 text-emerald-700" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Komitmen Resmi SDM Yayasan</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
