import React from 'react';
import { ArrowDownRight, MessageCircle, Sparkles } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Soft Ambient Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Mari Mengabdi Bersama</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
          Siap Bertumbuh dan Berbuah Bersama <br />
          <span className="text-emerald-400">Yayasan Dar el-Iman?</span>
        </h2>

        <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-xl mx-auto">
          Setiap ilmu yang diajarkan, setiap adab yang dicontohkan, adalah investasi akhirat yang tak terputus. Temukan formasi yang tepat dan bergabunglah dalam keluarga besar asatidzah Dar el-Iman.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#karier"
            className="btn-zaitunu-primary w-full sm:w-auto px-7 py-3 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-400 font-extrabold"
          >
            <span>Lihat Formasi Lowongan</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/6282170000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-zaitunu-secondary w-full sm:w-auto px-6 py-3 text-xs bg-emerald-900/90 text-white border-emerald-700 hover:bg-emerald-800"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Tanya Panitia Rekrutmen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
