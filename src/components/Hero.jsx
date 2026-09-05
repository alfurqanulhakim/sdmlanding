import React from 'react';
import { ArrowDownRight, Users, School, Award, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden gradient-hero">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none -mr-20" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Portal Resmi Talenta & Karir SDM Dar el-Iman</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Membangun Generasi Rabbani Lewat <span className="gradient-text">Keteladanan & Ilmu</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Selamat datang di pusat pengelolaan sumber daya manusia dan rekrutmen asatidzah Yayasan Dar el-Iman Padang.
              Wadah pengabdian mulia bagi Anda yang bertekad mendedikasikan ilmu, adab, dan profesionalisme demi dakwah Islam.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#pusat-karir"
                id="hero-cta-lowongan"
                className="btn btn-primary w-full sm:w-auto px-6 py-3.5 text-sm font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25"
              >
                <span>Lihat Lowongan Formasi Guru & Staf</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#nilai-utama"
                id="hero-cta-budaya"
                className="btn btn-outline w-full sm:w-auto px-6 py-3.5 text-sm font-bold rounded-2xl flex items-center justify-center gap-2"
              >
                <span>Pelajari Budaya Kerja Kami</span>
              </a>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Lingkungan Kerja Sunnah & Berkah</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Jenjang Karir Terukur (Skala Upah 2 Titik)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Reward Ibadah Umroh Pegawai</span>
              </div>
            </div>
          </div>

          {/* Graphical Card & Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Box */}
              <div className="rounded-3xl p-6 sm:p-8 gradient-emerald text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Official Logos Badge */}
                  <div className="flex items-center justify-between bg-emerald-950/50 border border-emerald-500/30 p-2.5 rounded-2xl backdrop-blur-xs">
                    <div className="flex items-center gap-2">
                      <div className="bg-white/95 p-1.5 rounded-xl shadow-xs">
                        <img
                          src="/logo-yayasan.png"
                          alt="Yayasan Dar el-Iman"
                          className="h-7 w-auto object-contain"
                        />
                      </div>
                      <div className="bg-white/95 p-1.5 rounded-xl shadow-xs">
                        <img
                          src="/logo-sdm.png"
                          alt="SDM Dar el-Iman"
                          className="h-7 w-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-amber-300 tracking-wide">DAR EL-IMAN PADANG</div>
                      <div className="text-[10px] text-emerald-200">Divisi Sumber Daya Manusia</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      Dedikasi Penuh Menempa Generasi Penghafal Al-Qur'an
                    </h2>
                    <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                      "Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya." (HR. Bukhari).
                      Bersama mengabdi dalam lingkungan yang menyejukkan hati.
                    </p>
                  </div>

                  {/* Highlights Grid inside the card */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-3.5 backdrop-blur-xs">
                      <div className="text-2xl sm:text-3xl font-black text-amber-300">19+</div>
                      <div className="text-xs text-emerald-100 font-semibold mt-0.5">Unit Pendidikan & Dakwah</div>
                    </div>

                    <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-3.5 backdrop-blur-xs">
                      <div className="text-2xl sm:text-3xl font-black text-white">500+</div>
                      <div className="text-xs text-emerald-100 font-semibold mt-0.5">Asatidzah & Karyawan</div>
                    </div>

                    <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-3.5 backdrop-blur-xs">
                      <div className="text-2xl sm:text-3xl font-black text-white">5.000+</div>
                      <div className="text-xs text-emerald-100 font-semibold mt-0.5">Santri Terbina</div>
                    </div>

                    <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-3.5 backdrop-blur-xs">
                      <div className="text-2xl sm:text-3xl font-black text-amber-300">100%</div>
                      <div className="text-xs text-emerald-100 font-semibold mt-0.5">Transparansi SIMAK</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 glass-card p-3.5 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Seleksi Resmi 2027/2028</div>
                  <div className="text-[11px] text-emerald-600 font-bold">Terhubung Kuota MPP SIMAK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
