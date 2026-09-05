import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  Sparkles,
  Heart,
} from 'lucide-react';
import { TEAM_SDM_DATA } from '../data/mockData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="container-custom space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl">
                <img
                  src="/logo-yayasan.png"
                  alt="Logo Yayasan Dar el-Iman"
                  className="h-8 w-auto object-contain"
                />
                <div className="h-5 w-px bg-slate-200" />
                <img
                  src="/logo-sdm.png"
                  alt="Logo SDM Dar el-Iman"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">
                  ZAITUNU • SDM
                </div>
                <div className="text-[11px] text-slate-400">
                  Yayasan Dar el-Iman Padang
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pusat pengelolaan talenta, budaya organisasi PINTAR, dan rekrutmen asatidzah di bawah naungan Yayasan Dar el-Iman Padang, Sumatera Barat.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://simak.sdmdareliman.web.id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-simak-external text-xs py-2 px-3.5"
              >
                <span>Login Portal SIMAK Pegawai</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>

          {/* Kontak & Sekretariat */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Sekretariat Pusat & Helpdesk SDM
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {TEAM_SDM_DATA.helpdesk.location}
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${TEAM_SDM_DATA.helpdesk.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Recruitment: {TEAM_SDM_DATA.helpdesk.whatsapp}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${TEAM_SDM_DATA.helpdesk.email}`}
                  className="hover:text-emerald-300 transition-colors"
                >
                  {TEAM_SDM_DATA.helpdesk.email}
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

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-emerald-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-emerald-400 transition-colors">
                  Tentang Zaitunu
                </a>
              </li>
              <li>
                <a href="#pintar" className="hover:text-emerald-400 transition-colors">
                  Core Values PINTAR
                </a>
              </li>
              <li>
                <a href="#unit" className="hover:text-emerald-400 transition-colors">
                  Unit Lembaga & Sekolah
                </a>
              </li>
              <li>
                <a href="#karier" className="hover:text-emerald-400 transition-colors">
                  Pusat Lowongan Karier
                </a>
              </li>
              <li>
                <a href="#our-team" className="hover:text-emerald-400 transition-colors">
                  Our Team & Layanan SDM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} Yayasan Dar el-Iman Padang. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Ekosistem SDM Digital</span>
            <span className="text-emerald-500 font-bold">ZAITUNU</span>
            <span>&bull; Terhubung ke SIMAK</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
