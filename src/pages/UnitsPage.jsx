import React, { useState } from 'react';
import { School, MapPin, Building2, Filter, Sparkles } from 'lucide-react';
import { MOCK_UNITS } from '../data/mockData';

export default function UnitsPage() {
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
    <div>
      {/* 1. HERO BANNER */}
      <section className="hero-page-banner">
        <div className="container-custom relative z-10 max-w-4xl space-y-6">
          <div className="eyebrow-accent">
            <span>DIREKTORI LEMBAGA &bull; CABANG-CABANG ZAITUNU</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Unit Pendidikan, Pesantren & <br />
            <span className="text-[#f1d493]">Lembaga Sosial Dakwah.</span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
            Yayasan Dar el-Iman menaungi ragam jenjang pendidikan Islam terpadu dan divisi operasional yang memberikan wadah berkarya, bertumbuh, dan mengabdi bagi ratusan asatidzah di Kota Padang dan sekitarnya.
          </p>
        </div>
      </section>

      {/* 2. UNITS DIRECTORY WITH FILTER */}
      <section className="page-section bg-white">
        <div className="container-custom space-y-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-1">
              <h2 className="text-xl font-black text-slate-900">
                Pilih Kategori Unit
              </h2>
              <p className="text-xs text-slate-500">
                Filter berdasarkan jenjang pendidikan atau divisi operasional
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeCategory === c.id
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grouped Units Grid */}
          <div className="space-y-12">
            {filteredGroups.map((group) => (
              <div key={group.categorySlug} className="space-y-4">
                <div className="border-b border-slate-200/80 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    {group.category}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {group.desc}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {group.units.map((unit) => (
                    <div
                      key={unit.id}
                      className="card-alhakim flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                          <School className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-black text-slate-900 leading-snug">
                          {unit.name}
                        </h4>
                        <p className="text-xs text-slate-500 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{unit.location}</span>
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50/80 px-2 py-1 rounded border border-emerald-200/60 block truncate">
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
    </div>
  );
}
