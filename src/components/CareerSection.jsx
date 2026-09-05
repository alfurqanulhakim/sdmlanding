import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Search,
  Filter,
  Calendar,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Share2,
} from 'lucide-react';
import { recruitmentService } from '../services/api';

export default function CareerSection({ onSelectVacancy, onOpenStatusModal, onShareVacancy }) {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');

  useEffect(() => {
    async function loadVacancies() {
      setLoading(true);
      const data = await recruitmentService.getVacancies();
      setVacancies(data);
      setLoading(false);
    }
    loadVacancies();
  }, []);

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'Guru', label: 'Tenaga Pendidik / Guru' },
    { id: 'Tenaga Kependidikan', label: 'Tenaga Kependidikan / Staf' },
  ];

  const filteredVacancies = vacancies.filter((v) => {
    const matchSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.education.toLowerCase().includes(searchQuery.toLowerCase());

    const matchCat =
      selectedCategory === 'all' || v.category === selectedCategory;

    const matchGender =
      selectedGender === 'all' ||
      v.gender.toLowerCase().includes(selectedGender.toLowerCase());

    return matchSearch && matchCat && matchGender;
  });

  return (
    <section id="karier" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="badge-pill badge-emerald mx-auto">
            <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
            <span>Pusat Rekrutmen & Karier</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Temukan Kesempatan <span className="title-gradient-zaitunu">Pengabdian Anda</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Formasi resmi penerimaan pendidik dan tenaga kependidikan Yayasan Dar el-Iman berbasis perencanaan kebutuhan riil Manpower Planning (MPP).
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200/80 space-y-4 max-w-4xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari formasi, unit sekolah, atau kualifikasi pendidikan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 text-xs">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-800 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-slate-500 font-semibold">Gender:</span>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-hidden focus:border-emerald-600"
              >
                <option value="all">Semua Gender</option>
                <option value="Ikhwan">Khusus Ikhwan</option>
                <option value="Akhwat">Khusus Akhwat</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vacancies List */}
        {loading ? (
          <div className="text-center py-16 text-slate-400 text-sm">
            Memuat data formasi lowongan...
          </div>
        ) : filteredVacancies.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3">
            <p className="text-sm font-bold text-slate-700">
              Tidak ditemukan formasi yang cocok dengan kata kunci pencarian Anda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedGender('all');
              }}
              className="text-xs font-bold text-emerald-700 hover:underline"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVacancies.map((vac) => (
              <div
                key={vac.id}
                className="card-zaitunu p-6 sm:p-7 flex flex-col justify-between space-y-5"
              >
                {/* Header Card */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {vac.code}
                    </span>
                    <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {vac.status} • {vac.quota} Formasi
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

                  <div className="pt-2 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{vac.education}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Kriteria: {vac.gender}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Batas Lamaran: {vac.deadline}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectVacancy(vac)}
                    id={`btn-apply-${vac.id}`}
                    className="btn-zaitunu-primary text-xs py-2 px-4 flex-1"
                  >
                    <span>Lamar Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onShareVacancy && onShareVacancy({
                      title: vac.title,
                      unit: vac.unit,
                      url: `${window.location.origin}/#/karier`,
                      customText: `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nInformasi Lowongan Kerja Yayasan Dar el-Iman Padang:\n📌 Formasi: ${vac.title}\n🏢 Unit: ${vac.unit}\n🎓 Kualifikasi: ${vac.education}\n👥 Kriteria: ${vac.gender}\n📅 Batas: ${vac.deadline}\n\nDaftar online sekarang di:\nhttps://sdmdareliman.web.id/#/karier`,
                    })}
                    className="btn-share-job"
                    style={{ padding: '8px 12px', fontSize: '0.75rem' }}
                    title="Bagikan lowongan ini"
                    aria-label={`Bagikan lowongan ${vac.title}`}
                  >
                    <Share2 size={14} />
                    <span>Bagikan</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tracker Banner Callout */}
        <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-black text-emerald-950">
              Sudah Pernah Mengirimkan Lamaran Sebelumnya?
            </h4>
            <p className="text-xs text-emerald-800">
              Anda dapat memeriksa status tahapan seleksi secara berkala dengan memasukkan nomor WhatsApp atau NIK Anda.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenStatusModal}
            className="btn-zaitunu-secondary text-xs py-2 px-4 whitespace-nowrap bg-white border-emerald-300 text-emerald-900 shrink-0"
          >
            <span>Cek Status Lamaran Anda</span>
          </button>
        </div>
      </div>
    </section>
  );
}
