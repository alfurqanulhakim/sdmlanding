import React, { useState } from 'react';
import { UserCheck, Sparkles, ChevronDown, ChevronUp, HelpCircle, Heart, Quote } from 'lucide-react';
import { FAQS } from '../data/landingData';

export default function TeamSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const sdmDivisions = [
    {
      title: 'Rekrutmen & Onboarding',
      desc: 'Menjaring talenta asatidzah terbaik, verifikasi syahadah tahsin, dan pengenalan budaya kerja Dar el-Iman.',
    },
    {
      title: 'Kinerja & Evaluasi Jabatan',
      desc: 'Pengelolaan KPI digital dan sistem grading dua titik untuk memastikan objektivitas karir pegawai.',
    },
    {
      title: 'Kompensasi & Kesejahteraan',
      desc: 'Manajemen payroll tepat waktu, BPJS Ketenagakerjaan/Kesehatan, dan program apresiasi umroh asatidzah.',
    },
    {
      title: 'Pembinaan Ruhiyah & Diklat',
      desc: 'Penyelenggaraan kajian berkala, sertifikasi metode pembelajaran islami, dan pelatihan kompetensi guru.',
    },
  ];

  return (
    <section id="tim-sdm" className="py-20 bg-white">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="section-tag mx-auto">Pengelolaan Talenta</div>
          <h2 className="section-title">
            Melayani & Membina Insan Pendidikan <span className="gradient-text">Dengan Sepenuh Hati</span>
          </h2>
          <p className="section-desc mx-auto">
            Bidang SDM Yayasan Dar el-Iman berkomitmen mengelola lebih dari 500 guru dan karyawan
            dengan manajemen modern yang tetap berpegang teguh pada adab-adab syar'i.
          </p>
        </div>

        {/* Leadership Message Card */}
        <div className="rounded-3xl p-7 sm:p-10 bg-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <Quote className="w-10 h-10 text-amber-400 opacity-60" />
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                "Pendidikan bukan sekadar transfer ilmu materi di dalam kelas, melainkan transfer keteladanan akhlak dan keimanan.
                Di Dar el-Iman, kami memandang setiap ustadz, ustadzah, dan staf sebagai pilar dakwah terpenting yang wajib dimuliakan, dibina, dan disejahterakan."
              </p>
              <div className="pt-2">
                <div className="font-extrabold text-white text-base">Kepala Bidang SDM & Ketenagakerjaan</div>
                <div className="text-xs text-amber-400 font-bold">Yayasan Dar el-Iman Padang</div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 space-y-3 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/80 text-white flex items-center justify-center mx-auto text-xl font-black">
                <Heart className="w-8 h-8 text-amber-300" />
              </div>
              <div className="text-sm font-black text-white">Komitmen Mutu SDM</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Menghadirkan pelayanan administrasi kepegawaian yang cepat, responsif, dan ramah melalui sistem digital SIMAK.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars of HR Service */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Pilar Pelayanan & Fungsi Bidang SDM
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fokus kerja terstruktur untuk mendukung keberhasilan proses pendidikan santri
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sdmDivisions.map((div, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 space-y-3 card-hover"
              >
                <span className="text-xs font-black text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-lg">
                  Fungsi 0{idx + 1}
                </span>
                <h4 className="text-base font-black text-slate-900 leading-snug">
                  {div.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {div.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="pt-10 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-600" />
              <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Informasi penting seputar kualifikasi rekrutmen dan seleksi calon asatidzah
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
