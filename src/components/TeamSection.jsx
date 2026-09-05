import React from 'react';
import {
  Users,
  MessageSquare,
  HelpCircle,
  Phone,
  Mail,
  Clock,
  MapPin,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { TEAM_SDM_DATA, FAQS_DATA } from '../data/mockData';

export default function TeamSection() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <section id="our-team" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200/80">
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="badge-pill badge-emerald mx-auto">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            <span>Our Team • Divisi SDM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Orang-Orang di Balik <span className="title-gradient-zaitunu">Perjalanan Talenta</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Mendampingi setiap asatidzah dan pegawai dari proses penyambutan, penempatan, pembinaan, hingga tercapainya kemaslahatan dakwah bersama.
          </p>
        </div>

        {/* Leadership Message Card */}
        <div className="card-zaitunu p-8 sm:p-10 max-w-4xl mx-auto bg-white border-slate-200 space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Sambutan Pengelolaan Sumber Daya Manusia
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              "{TEAM_SDM_DATA.quote.lead}"
            </h3>
            <blockquote className="text-sm sm:text-base text-slate-600 leading-relaxed italic border-l-4 border-emerald-700 pl-4 py-1">
              "{TEAM_SDM_DATA.quote.text}"
            </blockquote>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-black text-sm">
                SDM
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 leading-tight">
                  {TEAM_SDM_DATA.quote.title}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {TEAM_SDM_DATA.quote.org}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of HR Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {TEAM_SDM_DATA.services.map((srv, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center text-xs font-bold">
                0{i + 1}
              </div>
              <h4 className="text-sm font-black text-slate-900 leading-snug">
                {srv.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-black text-slate-900">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <p className="text-xs text-slate-500">
              Informasi seputar kualifikasi pelamar dan proses seleksi di Yayasan Dar el-Iman
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
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-800 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-50 animate-fade-in">
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
