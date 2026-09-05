import React from 'react';
import {
  Sparkles,
  Anchor,
  Shield,
  GitFork,
  Leaf,
  Sprout,
  HeartHandshake,
  BookOpenCheck,
  ClockCheck,
  ShieldCheck,
  Smile,
  CheckCircle2,
  FileText,
  BookmarkCheck,
} from 'lucide-react';
import { ZAITUNU_METAPHOR, PINTAR_VALUES } from '../data/mockData';

const iconMap = {
  Anchor: Anchor,
  Shield: Shield,
  GitFork: GitFork,
  Leaf: Leaf,
  Sparkles: Sparkles,
  Sprout: Sprout,
  HeartHandshake: HeartHandshake,
  BookOpenCheck: BookOpenCheck,
  ClockCheck: ClockCheck,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
};

export default function AboutPage() {
  const visi =
    "Menjadi lembaga yang menyebarkan dakwah di Sumatera Barat pada khususnya dan di Indonesia pada umumnya yang mengajak masyarakat kepada pemahaman agama yang benar berdasarkan Al-Qur'an dan Sunnah sesuai dengan pemahaman Salafus Shalih.";

  const misi = [
    "Menyelenggarakan Kajian-kajian Ilmiah dengan metode Tashfiyah (memurnikan ajaran Islam dari syirik, bid'ah, khurafat) dan Tarbiyah (mendidik) berdasarkan Al-Qur'an dan As-Sunnah pemahaman Salafus Shalih.",
    "Menyelenggarakan pendidikan formal berbasis Islam (TK, SD, SMP, SMA, Pondok Pesantren, & Perguruan Tinggi) dan pendidikan non-formal sistematis (Tadribud Du'at, Bahasa Arab, Tahsin, MDA, Muallaf).",
    "Menyelenggarakan kegiatan sosial kemasyarakatan (santunan dhuafa, tanggap bencana, janda dan yatim).",
    "Menjalankan pengelolaan dana umat serta usaha ekonomi produktif sesuai prinsip syariah dalam mendukung dakwah Islam.",
    "Menyelenggarakan dakwah melalui media modern, radio, TV dakwah, dan Islamic Center terpadu.",
  ];

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="hero-page-banner">
        <div className="container-custom relative z-10 max-w-4xl space-y-6">
          <div className="eyebrow-accent">
            <span>TENTANG KAMI &bull; FILOSOFI ZAITUNU</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Berakar pada Nilai, Bertumbuh dalam Kompetensi, <br />
            <span className="text-[#f1d493]">Berbuah dalam Pengabdian.</span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
            Mengenal ekosistem talenta SDM Yayasan Dar el-Iman yang terinspirasi dari pohon zaitun yang diberkahi, serta nilai-nilai luhur PINTAR yang menjadi kompas moral setiap insan pendidik.
          </p>
        </div>
      </section>

      {/* 2. LANDASAN STRATEGIS: VISI & MISI RESMI */}
      <section className="page-section bg-white border-b border-slate-200/80">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Visi Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-emerald-800 tracking-widest uppercase flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-emerald-700" />
                <span>Visi Yayasan Dar el-Iman</span>
              </div>
              <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-snug italic border-l-4 border-[#f59e0b] pl-4 py-1">
                "{visi}"
              </blockquote>
              <p className="text-xs text-slate-500 leading-relaxed">
                Menjadi rujukan lembaga pendidikan dan dakwah bermanhaj Ahlussunnah wal Jama'ah di Ranah Minang yang menebar manfaat bagi umat di seluruh pelosok negeri.
              </p>
            </div>

            {/* Misi Box */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-amber-700 tracking-widest uppercase flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>5 Misi Strategis Yayasan</span>
              </div>
              <div className="space-y-3">
                {misi.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0 text-xs font-extrabold mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METAFORA POHON ZAITUN (6 BAGIAN) */}
      <section className="page-section-alt border-b border-slate-200/80">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold text-emerald-800 tracking-widest uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Arsitektur Ekosistem Zaitunu</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              Bagaimana Pohon Zaitunu Bertumbuh
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Zaitunu menggambarkan perjalanan setiap insan Dar el-Iman. Tidak ada buah yang lebat tanpa akar yang kuat, dan tidak ada dedaunan yang rimbun tanpa batang yang kokoh menopang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZAITUNU_METAPHOR.pillars.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Leaf;
              return (
                <div key={item.id} className="card-alhakim space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 uppercase">
                      {item.part}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-emerald-800 flex items-center justify-center border border-slate-200">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wide">
                      {item.symbol}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES PINTAR (NILAI YANG MENJADI AKAR) */}
      <section className="page-section bg-white">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold text-emerald-800 tracking-widest uppercase flex items-center gap-2">
              <Anchor className="w-3.5 h-3.5 text-emerald-700" />
              <span>Nilai Budaya Kerja Yayasan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              6 Pilar Budaya Organisasi "PINTAR"
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enam standar baku akhlak dan perilaku kerja yang menjadi rujukan dalam pembinaan serta evaluasi kinerja (KPI) asatidzah dan pegawai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PINTAR_VALUES.map((val) => {
              const IconComp = iconMap[val.icon] || Sparkles;
              return (
                <div
                  key={val.id}
                  className="card-alhakim flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-[#f1d493] flex items-center justify-center font-black text-2xl shadow-xs">
                          {val.letter}
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-slate-900 leading-tight">
                            {val.title}
                          </h3>
                          <div className="text-[11px] font-bold text-emerald-700">
                            {val.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200">
                        <IconComp className="w-5 h-5 text-emerald-700" />
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      "{val.summary}"
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Indikator Perilaku:
                    </div>
                    <ul className="space-y-1.5">
                      {val.indicators.map((ind, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
