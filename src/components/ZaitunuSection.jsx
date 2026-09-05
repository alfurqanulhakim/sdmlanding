import React, { useState } from 'react';
import {
  Anchor,
  Shield,
  GitFork,
  Leaf,
  Sparkles,
  Sprout,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ZAITUNU_METAPHOR } from '../data/mockData';

const iconMap = {
  Anchor: Anchor,
  Shield: Shield,
  GitFork: GitFork,
  Leaf: Leaf,
  Sparkles: Sparkles,
  Sprout: Sprout,
};

export default function ZaitunuSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="tentang-kami" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="badge-pill badge-emerald mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Konsep Ekosistem SDM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Apa itu <span className="title-gradient-zaitunu">Zaitunu?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Seperti pohon zaitun yang tumbuh dari akar yang kuat, manusia berkembang melalui nilai, pembinaan, kompetensi, pengalaman, dan kesempatan. Zaitunu menggambarkan perjalanan setiap insan Dar el-Iman untuk bertumbuh dan memberikan manfaat.
          </p>
        </div>

        {/* The Tree Architecture Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ZAITUNU_METAPHOR.pillars.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Leaf;
            const isHovered = activeTab === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(idx)}
                className={`card-zaitunu p-6 sm:p-7 flex flex-col justify-between space-y-5 cursor-pointer relative overflow-hidden transition-all ${
                  isHovered ? 'ring-2 ring-emerald-600/30 shadow-card-hover' : ''
                }`}
              >
                {/* Top Badge: Metaphor Part */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      {item.part}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-emerald-700 flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-emerald-700" />
                    </div>
                  </div>

                  {/* Title & Meaning */}
                  <div>
                    <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wide">
                      {item.symbol}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mt-0.5 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtitle / Key Takeaway */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>Bagian dari Ekosistem Zaitunu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200/90 text-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-black text-slate-900">
              "Pohon yang Baik, Akarnya Teguh Menghujam dan Cabangnya Menjulang ke Langit"
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Sebagaimana perumpamaan kalimat thayyibah dalam Al-Qur'an (QS. Ibrahim: 24), kami mengikhtiarkan lingkungan yang memfasilitasi setiap pegawai untuk berakar pada akidah dan adab, bertumbuh dalam keilmuan, dan menelurkan karya terbaik.
            </p>
          </div>

          <a
            href="#pintar"
            className="btn-zaitunu-primary shrink-0 text-xs px-5 py-3 whitespace-nowrap"
          >
            <span>Pelajari Nilai PINTAR</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
