import React, { useState } from 'react';
import {
  Briefcase,
  Search,
  Filter,
  Users,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { INITIAL_VACANCIES, RECRUITMENT_STAGES } from '../data/landingData';

export default function CareerSection({ onSelectVacancy, onOpenStatusModal }) {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('Semua');
  const [filterGender, setFilterGender] = useState('Semua');

  const categories = ['Semua', 'Pendidik', 'Tenaga Kependidikan', 'Pengasuhan'];
  const genders = ['Semua', 'Ikhwan & Akhwat', 'Ikhwan', 'Akhwat'];

  const filteredVacancies = INITIAL_VACANCIES.filter((v) => {
    const matchSearch =
      v.posisi.toLowerCase().includes(search.toLowerCase()) ||
      v.unit.toLowerCase().includes(search.toLowerCase()) ||
      v.pendidikan.toLowerCase().includes(search.toLowerCase());

    const matchCat = filterCategory === 'Semua' || v.kategori === filterCategory;
    const matchGen = filterGender === 'Semua' || v.gender.toLowerCase().includes(filterGender.toLowerCase());

    return matchSearch && matchCat && matchGen;
  });

  return (
    <section id="pusat-karir" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="section-tag mx-auto">Pusat Karir & E-Recruitment</div>
          <h2 className="section-title">
            Formasi Lowongan Guru & Staf <span className="gradient-text">Tahun Ajaran 2027/2028</span>
          </h2>
          <p className="section-desc mx-auto">
            Temukan formasi yang sesuai dengan kompetensi dan latar belakang pendidikan Anda.
            Seluruh data formasi terintegrasi langsung dengan perencanaan Manpower Planning (MPP) Yayasan.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari formasi jabatan, guru mata pelajaran, atau unit..."
                className="w-full text-xs sm:text-sm pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 transition-all font-medium"
              />
            </div>

            {/* Category Select */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="text-xs sm:text-sm px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:bg-white focus:border-emerald-600"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    Kategori: {c}
                  </option>
                ))}
              </select>

              {/* Gender Select */}
              <select
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
                className="text-xs sm:text-sm px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:bg-white focus:border-emerald-600"
              >
                {genders.map((g) => (
                  <option key={g} value={g}>
                    Gender: {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Menampilkan <b>{filteredVacancies.length}</b> formasi aktif yang siap dilamar
            </span>
            <button
              onClick={onOpenStatusModal}
              className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1"
            >
              <span>Sudah pernah melamar? Cek status Anda</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Vacancies Grid */}
        {filteredVacancies.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">Tidak ada lowongan yang sesuai</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Coba gunakan kata kunci lain atau setel filter kategori dan gender ke "Semua".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVacancies.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between card-hover space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="badge badge-emerald text-[10px]">
                      {item.kategori}
                    </span>
                    <span className="badge badge-amber text-[10px]">
                      {item.urgensi}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">
                      {item.posisi}
                    </h3>
                    <div className="text-xs font-bold text-emerald-700 mt-1">
                      {item.unit}
                    </div>
                  </div>

                  {/* Highlights info */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-100 bg-slate-50/60 rounded-xl px-3">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Kebutuhan</span>
                      <span className="font-extrabold text-slate-800">{item.kebutuhan} Orang</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Gender</span>
                      <span className="font-bold text-slate-800">{item.gender}</span>
                    </div>
                  </div>

                  {/* Requirements List */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.pendidikan}</span>
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-slate-600 pt-1">
                      {item.syarat.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onSelectVacancy(item)}
                  className="btn btn-primary w-full py-3 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-1.5 mt-2"
                >
                  <span>Lamar Posisi Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 5 Alur Rekrutmen Stepper Section */}
        <div id="alur-seleksi" className="pt-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              5 Tahapan Alur Rekrutmen Calon Pegawai
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Proses seleksi kami dirancang transparan, objektif, dan mengedepankan adab serta kompetensi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {RECRUITMENT_STAGES.map((stg) => (
              <div
                key={stg.step}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs space-y-2.5 relative"
              >
                <div className="w-8 h-8 rounded-xl gradient-emerald text-white flex items-center justify-center font-black text-xs">
                  {stg.step}
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-snug">
                  {stg.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {stg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
