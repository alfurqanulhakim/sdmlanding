import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Search,
  Filter,
  GraduationCap,
  Users,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { recruitmentService } from '../services/api';
import { RECRUITMENT_STAGES } from '../data/mockData';

export default function CareerPage({ onSelectVacancy, onOpenStatusModal }) {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await recruitmentService.getVacancies();
      setVacancies(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'Guru', label: 'Tenaga Pendidik / Guru' },
    { id: 'Tenaga Kependidikan', label: 'Tenaga Kependidikan / Staf' },
  ];

  const filtered = vacancies.filter((v) => {
    const matchSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.education.toLowerCase().includes(searchQuery.toLowerCase());

    const matchCat = selectedCategory === 'all' || v.category === selectedCategory;
    const matchGender =
      selectedGender === 'all' ||
      v.gender.toLowerCase().includes(selectedGender.toLowerCase());

    return matchSearch && matchCat && matchGender;
  });

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="hero-page-banner">
        <div className="container-custom relative z-10 max-w-4xl space-y-6">
          <div className="eyebrow-accent">
            <span>PUSAT KARIER & REKRUTMEN &bull; BIBIT-BIBIT ZAITUNU</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Temukan Kesempatan Pengabdian <br />
            <span className="text-[#f1d493]">Terbaik Anda.</span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
            Penerimaan resmi calon asatidzah dan tenaga kependidikan Yayasan Dar el-Iman berbasis perencanaan kebutuhan Manpower Planning (MPP). Salurkan ilmu dan keahlian Anda di jalan dakwah Islam.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenStatusModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#f1d493] border border-white/20 text-xs font-bold transition-all"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Sudah Mendaftar? Lacak Status Seleksi Anda</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILTER & VACANCIES LIST */}
      <section className="page-section bg-white border-b border-slate-200/80">
        <div className="container-custom space-y-10">
          {/* Search & Filter Box */}
          <div className="bg-slate-50 p-5 sm:p-6 rounded-3xl border border-slate-200/90 space-y-4 max-w-4xl mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari formasi, nama unit sekolah, atau kualifikasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-emerald-700"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                      selectedCategory === c.id
                        ? 'bg-emerald-800 text-white'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-slate-500 font-semibold">Kriteria Gender:</span>
                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-hidden"
                >
                  <option value="all">Semua Gender</option>
                  <option value="Ikhwan">Khusus Ikhwan</option>
                  <option value="Akhwat">Khusus Akhwat</option>
                </select>
              </div>
            </div>
          </div>

          {/* Vacancies Grid */}
          {loading ? (
            <div className="text-center py-16 text-slate-400 text-sm">
              Memuat data formasi rekrutmen...
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3">
              <p className="text-sm font-bold text-slate-700">
                Tidak ditemukan lowongan yang cocok dengan pencarian Anda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedGender('all');
                }}
                className="text-xs font-bold text-emerald-800 hover:underline"
              >
                Reset Filter Pencarian
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((vac) => (
                <div
                  key={vac.id}
                  className="card-alhakim flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {vac.code}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {vac.status} &bull; {vac.quota} Formasi
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-900 leading-snug">
                        {vac.title}
                      </h3>
                      <div className="text-xs font-bold text-emerald-800 mt-1">
                        {vac.unit}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 pt-1">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate">{vac.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Kriteria: {vac.gender}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Batas Lamaran: {vac.deadline}</span>
                      </div>
                    </div>

                    {vac.requirements && (
                      <div className="pt-2 border-t border-slate-100 space-y-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          Persyaratan Ringkas:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {vac.requirements.slice(0, 2).map((req, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="truncate">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onSelectVacancy(vac)}
                      id={`btn-apply-${vac.id}`}
                      className="btn-simak-pill text-xs w-full py-2.5 justify-center"
                    >
                      <span>Lamar Formasi Ini</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. ALUR TAHAPAN SELEKSI */}
      <section className="page-section-alt">
        <div className="container-custom space-y-10">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Alur 5 Tahapan Seleksi Rekrutmen
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Proses seleksi transparan untuk memastikan keselarasan kompetensi, adab, dan komitmen syar'i calon pendidik.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {RECRUITMENT_STAGES.map((st) => (
              <div
                key={st.id}
                className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-black">
                  {st.step}
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-snug">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
