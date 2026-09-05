import React, { useState } from 'react';
import {
  Users,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { TEAM_SDM_DATA, FAQS_DATA } from '../data/mockData';

export default function TeamPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="hero-page-banner">
        <div className="container-custom relative z-10 max-w-4xl space-y-6">
          <div className="eyebrow-accent">
            <span>OUR TEAM &bull; DIVISI SUMBER DAYA MANUSIA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Orang-Orang di Balik <br />
            <span className="text-[#f1d493]">Perjalanan Talenta Rabbani.</span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
            Mendampingi setiap asatidzah dan pegawai mulai dari tahapan seleksi, orientasi, pembinaan berkelanjutan, hingga tercapainya kemaslahatan dakwah dan pendidikan bersama.
          </p>
        </div>
      </section>

      {/* 2. SAMBUTAN PIMPINAN */}
      <section className="page-section bg-white border-b border-slate-200/80">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto card-alhakim space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Pesan Pimpinan Pengelolaan SDM
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                "{TEAM_SDM_DATA.quote.lead}"
              </h2>
              <blockquote className="text-sm sm:text-base text-slate-600 leading-relaxed italic border-l-4 border-emerald-800 pl-4 py-1">
                "{TEAM_SDM_DATA.quote.text}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 font-black flex items-center justify-center text-xs">
                SDM
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">
                  {TEAM_SDM_DATA.quote.title}
                </div>
                <div className="text-xs text-slate-500">
                  {TEAM_SDM_DATA.quote.org}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 PILAR LAYANAN SDM */}
      <section className="page-section-alt border-b border-slate-200/80">
        <div className="container-custom space-y-10">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Layanan & Tanggung Jawab Divisi SDM
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Empat fokus pelayanan dalam mengayomi seluruh asatidzah dan pegawai di lingkungan yayasan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM_SDM_DATA.services.map((srv, i) => (
              <div key={i} className="card-alhakim space-y-3 bg-white">
                <div className="number-badge">0{i + 1}</div>
                <h3 className="text-base font-black text-slate-900 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HELPDESK & FAQS */}
      <section className="page-section bg-white">
        <div className="container-custom space-y-16">
          {/* Helpdesk Contact Card */}
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-slate-900 text-white space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#f1d493] uppercase tracking-wider">
                Helpdesk & Layanan Rekrutmen
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Memiliki Pertanyaan Seputar Rekrutmen?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Tim administrasi SDM kami siap membantu Anda selama jam operasional kerja.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs">
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`https://wa.me/${TEAM_SDM_DATA.helpdesk.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors"
                  >
                    WhatsApp: {TEAM_SDM_DATA.helpdesk.whatsapp}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`mailto:${TEAM_SDM_DATA.helpdesk.email}`}
                    className="hover:text-amber-300 transition-colors"
                  >
                    Email: {TEAM_SDM_DATA.helpdesk.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Jam Kerja: {TEAM_SDM_DATA.helpdesk.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {TEAM_SDM_DATA.helpdesk.location}
                </span>
              </div>
            </div>
          </div>

          {/* FAQs List */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-slate-900">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h3>
              <p className="text-xs text-slate-500">
                Kompilasi jawaban atas pertanyaan umum para calon pelamar
              </p>
            </div>

            <div className="space-y-3">
              {FAQS_DATA.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-800 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isOpen ? 'rotate-180 text-emerald-700' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-50 animate-fade-in">
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
    </div>
  );
}
