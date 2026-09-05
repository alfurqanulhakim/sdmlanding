import React, { useState } from 'react';
import {
  Users,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { TEAM_SDM_DATA, FAQS_DATA } from '../data/mockData';

export default function TeamPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      {/* 1. HERO BANNER */}
      <section className="hero-section-box">
        <div className="site-container">
          <div style={{ maxWidth: '780px' }}>
            <div className="hero-eyebrow">
              OUR TEAM &bull; DIVISI SUMBER DAYA MANUSIA
            </div>

            <h1 className="hero-title">
              Orang-Orang di Balik <br />
              <span className="hero-title-highlight">Perjalanan Talenta Rabbani.</span>
            </h1>

            <p className="hero-desc">
              Mendampingi setiap asatidzah dan pegawai mulai dari tahapan seleksi, orientasi, pembinaan berkelanjutan, hingga tercapainya kemaslahatan dakwah dan pendidikan bersama.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN PIMPINAN */}
      <section className="content-section white-bg">
        <div className="site-container-narrow">
          <div className="quote-editorial-card">
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--emerald-main)', background: 'var(--emerald-soft)', padding: '4px 12px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>
              Pesan Pimpinan Pengelolaan SDM
            </span>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-title)', lineHeight: 1.35, marginBottom: '16px' }}>
              "{TEAM_SDM_DATA.quote.lead}"
            </h2>

            <blockquote style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '24px' }}>
              "{TEAM_SDM_DATA.quote.text}"
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-card)', paddingTop: '18px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--emerald-main)', color: 'var(--gold-light)', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.85rem' }}>
                SDM
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-title)' }}>
                  {TEAM_SDM_DATA.quote.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {TEAM_SDM_DATA.quote.org}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 PILAR LAYANAN SDM */}
      <section className="content-section alt-bg">
        <div className="site-container">
          <div className="section-head-box">
            <div className="section-tagline">
              <ShieldCheck size={14} />
              <span>Standar Layanan</span>
            </div>
            <h2 className="section-title">
              Layanan & Tanggung Jawab Divisi SDM
            </h2>
            <p className="section-subtitle">
              Empat fokus utama dalam mengayomi seluruh asatidzah dan pegawai di lingkungan yayasan.
            </p>
          </div>

          <div className="grid-2-col">
            {TEAM_SDM_DATA.pillars.map((pillar, idx) => (
              <div key={idx} className="card-numbered">
                <div>
                  <div className="number-badge-box">
                    0{idx + 1}
                  </div>
                  <h3 className="card-title">
                    {pillar.title}
                  </h3>
                  <p className="card-desc">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HELPDESK & KONTAK KAMI */}
      <section className="content-section white-bg">
        <div className="site-container">
          <div className="grid-overview">
            <div>
              <div className="section-tagline">
                <MessageCircle size={14} />
                <span>Pusat Bantuan & Konsultasi</span>
              </div>
              <h2 className="section-title">
                Hubungi Divisi SDM Yayasan
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                Memiliki pertanyaan seputar proses seleksi, status lamaran, atau administrasi kepegawaian? Tim kami siap melayani Anda.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href={`https://wa.me/${TEAM_SDM_DATA.contacts.waRaw}?text=Bismillah,%20saya%20ingin%20bertanya%20seputar%20SDM%20Yayasan%20Dar%20el-Iman`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-primary"
                  style={{ width: 'fit-content' }}
                >
                  <MessageCircle size={16} />
                  <span>Chat WhatsApp Resmi ({TEAM_SDM_DATA.contacts.whatsapp})</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <Mail size={16} color="var(--emerald-main)" />
                  <span>{TEAM_SDM_DATA.contacts.email}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <Clock size={16} color="var(--emerald-main)" />
                  <span>{TEAM_SDM_DATA.contacts.workHours}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <MapPin size={16} color="var(--emerald-main)" />
                  <span>{TEAM_SDM_DATA.contacts.address}</span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '18px' }}>
                Pertanyaan yang Sering Diajukan (FAQ)
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {FAQS_DATA.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        background: 'var(--bg-page)',
                        border: '1px solid var(--border-card)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        transition: 'all 0.2s',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          textAlign: 'left',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          color: 'var(--text-title)',
                        }}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          size={18}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s',
                            flexShrink: 0,
                            color: 'var(--emerald-main)',
                          }}
                        />
                      </button>
                      {isOpen && (
                        <div style={{ padding: '0 20px 16px 20px', fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65, borderTop: '1px solid var(--border-card)', paddingTop: '12px' }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
