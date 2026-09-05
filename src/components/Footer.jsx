import React from 'react';
import { MapPin, Phone, Mail, Globe, ExternalLink, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="container space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/95 p-1.5 rounded-xl shadow-xs">
                <img
                  src="/logo-yayasan.png"
                  alt="Yayasan Dar el-Iman"
                  className="h-8 w-auto object-contain"
                />
                <div className="h-5 w-px bg-slate-300" />
                <img
                  src="/logo-sdm.png"
                  alt="SDM Dar el-Iman"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">
                  SDM DAR EL-IMAN
                </div>
                <div className="text-[11px] text-slate-400">
                  Yayasan Dar el-Iman Padang
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Lembaga dakwah, pendidikan, dan sosial berakhlak mulia di Kota Padang, Sumatera Barat.
              Membina asatidzah dan santri di atas pemahaman Ahlussunnah wal Jama'ah.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://simak.sdmdareliman.web.id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-simak-portal text-xs px-4 py-2 rounded-xl flex items-center gap-2"
              >
                <span>Login Portal SIMAK</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Kontak & Alamat Kantor */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Sekretariat Yayasan
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Jl. Gunung Juaro, Kelurahan Surau Gadang, Kecamatan Nanggalo, Kota Padang, Sumatera Barat 25143
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp SDM: +62 812-3456-7890
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:sdm@dareliman.web.id"
                  className="hover:text-emerald-300 transition-colors"
                >
                  sdm@dareliman.web.id
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://dareliman.or.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  www.dareliman.or.id
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Unit */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#nilai-utama" className="hover:text-white transition-colors">Visi & Nilai Budaya</a></li>
              <li><a href="#unit-pendidikan" className="hover:text-white transition-colors">19 Unit Pendidikan</a></li>
              <li><a href="#kenapa-kami" className="hover:text-white transition-colors">Kenapa Mengabdi?</a></li>
              <li><a href="#pusat-karir" className="hover:text-white transition-colors">Lowongan Karir</a></li>
              <li><a href="#alur-seleksi" className="hover:text-white transition-colors">Alur Seleksi</a></li>
            </ul>
          </div>

          {/* Col 4: Portal Sistem */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Sistem Terintegrasi
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://simak.sdmdareliman.web.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 font-bold flex items-center gap-1 text-slate-200"
                >
                  <span>Portal SIMAK</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><span className="text-slate-500">Manpower Planning (MPP)</span></li>
              <li><span className="text-slate-500">Skala Upah Dua Titik</span></li>
              <li><span className="text-slate-500">KPI Kinerja Pegawai</span></li>
              <li><span className="text-slate-500">Presensi & Penggajian</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <b>Yayasan Dar el-Iman Padang</b>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Dikelola oleh Bidang SDM & Ketenagakerjaan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
