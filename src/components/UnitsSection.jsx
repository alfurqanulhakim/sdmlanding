import React, { useState } from 'react';
import { School, MapPin, Users, Award, Sparkles, ChevronRight } from 'lucide-react';
import { SCHOOL_UNITS } from '../data/landingData';

export default function UnitsSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Anak Usia Dini', 'Pendidikan Dasar', 'Pendidikan Menengah', 'Pendidikan Lanjutan', 'Lembaga Dakwah & Sosial'];

  const filteredUnits = activeCategory === 'Semua'
    ? SCHOOL_UNITS
    : SCHOOL_UNITS.filter((u) => u.category === activeCategory);

  return (
    <section id="unit-pendidikan" className="py-20 bg-slate-50">
      <div className="container space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="section-tag mx-auto">19 Unit Pendidikan & Dakwah</div>
          <h2 className="section-title">
            Jejaring Pendidikan Berkualitas <span className="gradient-text">Dari PAUD Hingga Aliyah</span>
          </h2>
          <p className="section-desc mx-auto">
            Yayasan Dar el-Iman menaungi belasan jenjang pendidikan formal terpadu dan pondok pesantren boarding di Kota Padang,
            menyediakan lingkungan belajar kondusif dengan fasilitas representatif.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-800/20 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 card-hover flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {unit.category}
                  </span>
                  <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-[10px] font-extrabold">
                    {unit.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {unit.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {unit.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{unit.location}</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Users className="w-3.5 h-3.5 text-amber-500" />
                  <span>{unit.santriCount} Santri</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
