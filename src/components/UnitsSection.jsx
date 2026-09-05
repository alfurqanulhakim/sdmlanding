import React, { useState } from 'react';
import { School, MapPin, Building2, BookOpen, Users, Sparkles, Filter } from 'lucide-react';
import { MOCK_UNITS } from '../data/mockData';

export default function UnitsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'paud', label: 'PAUD / TK IT' },
    { id: 'dikdas', label: 'Pendidikan Dasar' },
    { id: 'dikmen', label: 'Pendidikan Menengah' },
    { id: 'pesantren', label: 'Pesantren Boarding' },
    { id: 'operasional', label: 'Dakwah & Operasional' },
  ];

  const filteredGroups = activeCategory === 'all'
    ? MOCK_UNITS
    : MOCK_UNITS.filter((g) => g.categorySlug === activeCategory);

  return (
    <section id="unit" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="badge-pill badge-emerald mx-auto">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cabang-Cabang Ekosistem</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Unit Pendidikan & <span className="title-gradient-zaitunu">Lembaga Dakwah</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Yayasan Dar el-Iman menaungi ragam jenjang pendidikan dan divisi operasional yang memberikan ruang bertumbuh dan berkontribusi bagi asatidzah serta tenaga profesional.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === c.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Units Grid Grouped */}
        <div className="space-y-12">
          {filteredGroups.map((group) => (
            <div key={group.categorySlug} className="space-y-4">
              {/* Category Header */}
              <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  {group.category}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {group.desc}
                </p>
              </div>

              {/* Units Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.units.map((unit) => (
                  <div
                    key={unit.id}
                    className="card-zaitunu p-5 flex flex-col justify-between space-y-3 hover:border-emerald-300"
                  >
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <School className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-black text-slate-900 leading-snug">
                        {unit.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{unit.location}</span>
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-200/60 block truncate">
                        Fokus: {unit.focus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
