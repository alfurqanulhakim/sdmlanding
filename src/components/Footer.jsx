import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { TEAM_SDM_DATA } from '../data/mockData';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (route) => (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.hash = `#/${route === 'home' ? '' : route}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const contacts = TEAM_SDM_DATA?.contacts || TEAM_SDM_DATA?.helpdesk || {};
  const address = contacts.address || contacts.location || 'Gedung Sekretariat Pusat Yayasan Dar el-Iman, Padang';
  const whatsapp = contacts.whatsapp || '+62 821-7000-0000';
  const waRaw = contacts.waRaw || '6282170000000';
  const email = contacts.email || 'sdm@dareliman.web.id';
  const workHours = contacts.workHours || contacts.hours || 'Senin – Jumat | 08.00 – 16.00 WIB';

  return (
    <footer id="kontak" className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#ffffff', padding: '6px 10px', borderRadius: '12px' }}>
                <img
                  src="/logo-yayasan.png"
                  alt="Logo Yayasan Dar el-Iman"
                  style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                />
                <div style={{ width: '1px', height: '18px', backgroundColor: '#cbd5e1' }} />
                <img
                  src="/logo-sdm.png"
                  alt="Logo SDM Dar el-Iman"
                  style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 900, color: '#ffffff', fontSize: '1rem', lineHeight: 1.2 }}>
                  ZAITUNU &bull; SDM
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                  Yayasan Dar el-Iman Padang
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.65, maxWidth: '360px', marginBottom: '20px' }}>
              Pusat pengelolaan talenta, pembinaan budaya PINTAR, dan rekrutmen asatidzah di bawah naungan Yayasan Dar el-Iman Padang, Sumatera Barat.
            </p>

            <a
              href="https://simak.sdmdareliman.web.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-simak"
              style={{ display: 'inline-flex', padding: '8px 18px', fontSize: '0.78rem' }}
            >
              <span>Login Portal SIMAK Pegawai</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Sekretariat & Kontak */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 className="footer-col-title">
              Sekretariat & Helpdesk Rekrutmen
            </h4>

            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.6 }}>
                <MapPin size={16} color="var(--emerald-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{address}</span>
              </li>

              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--emerald-light)" style={{ flexShrink: 0 }} />
                <a
                  href={`https://wa.me/${waRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item"
                >
                  WhatsApp: {whatsapp} ({workHours})
                </a>
              </li>

              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--emerald-light)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${email}`} className="footer-link-item">
                  {email}
                </a>
              </li>

              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe size={16} color="var(--emerald-light)" style={{ flexShrink: 0 }} />
                <a href="https://dareliman.or.id" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                  www.dareliman.or.id
                </a>
              </li>
            </ul>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h4 className="footer-col-title">
              Navigasi Halaman
            </h4>

            <ul className="footer-links-list">
              <li>
                <a href="#/" onClick={handleNav('home')} className="footer-link-item">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#/tentang" onClick={handleNav('tentang')} className="footer-link-item">
                  Tentang Zaitunu & PINTAR
                </a>
              </li>
              <li>
                <a href="#/unit" onClick={handleNav('unit')} className="footer-link-item">
                  Unit Pendidikan & Lembaga
                </a>
              </li>
              <li>
                <a href="#/kenapa-kami" onClick={handleNav('kenapa-kami')} className="footer-link-item">
                  Kesejahteraan (Kenapa Kami)
                </a>
              </li>
              <li>
                <a href="#/karier" onClick={handleNav('karier')} className="footer-link-item">
                  Pusat Lowongan Karier
                </a>
              </li>
              <li>
                <a href="#/our-team" onClick={handleNav('our-team')} className="footer-link-item">
                  Our Team & Layanan SDM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="footer-bottom-bar">
          <p>
            &copy; {currentYear} Yayasan Dar el-Iman Padang. All Rights Reserved.
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Portal SDM Digital</span>
            <strong style={{ color: 'var(--gold-light)' }}>ZAITUNU</strong>
            <span>&bull; Terintegrasi ke SIMAK</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
