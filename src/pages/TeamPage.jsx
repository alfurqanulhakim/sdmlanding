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
  GraduationCap,
  Award,
  Briefcase,
  Quote,
  Calendar,
  Scale,
  FileCheck,
} from 'lucide-react';
import { TEAM_SDM_DATA, FAQS_DATA } from '../data/mockData';

export default function TeamPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const leader = TEAM_SDM_DATA?.leader || {};
  const officers = TEAM_SDM_DATA?.officers || [];
  const contacts = TEAM_SDM_DATA?.contacts || TEAM_SDM_DATA?.helpdesk || {};
  const pillars = TEAM_SDM_DATA?.pillars || TEAM_SDM_DATA?.services || [];

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
              Mendampingi Langkah <br />
              <span className="hero-title-highlight">Pengabdian Talenta Rabbani.</span>
            </h1>

            <p className="hero-desc">
              Mengenal pimpinan dan ekosistem pengelolaan talenta Yayasan Dar el-Iman yang berdedikasi mengayomi ratusan asatidzah dan pegawai demi kemajuan pendidikan dan dakwah Islam bermanhaj Salafus Shalih.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROFIL & KATA SAMBUTAN KEPALA BIDANG SDM (USTADZ REDO PRATAMA HARISTA) */}
      <section className="content-section white-bg">
        <div className="site-container">
          <div className="section-head-box">
            <div className="section-tagline">
              <Sparkles size={14} />
              <span>Kepemimpinan SDM</span>
            </div>
            <h2 className="section-title">
              Profil & Sambutan Kepala Bidang SDM
            </h2>
            <p className="section-subtitle">
              Amanah memimpin tata kelola kepegawaian, pengembangan budaya PINTAR, dan pemenuhan hak talenta di Yayasan Dar el-Iman Padang.
            </p>
          </div>

          {/* Profile Card & Speech Container */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            marginBottom: '48px',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '0',
            }}>
              {/* Left Column: Photo & Biography */}
              <div style={{
                background: 'linear-gradient(135deg, #031c15 0%, #063b2d 100%)',
                color: '#ffffff',
                padding: 'clamp(28px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
              }}>
                <div>
                  {/* Photo Frame */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '280px',
                    margin: '0 auto 24px auto',
                  }}>
                    <div style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '3px solid var(--gold-light)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                      background: '#0a2e24',
                    }}>
                      <img
                        src={leader.photo || '/ustadz-redo.jpg'}
                        alt={leader.name || 'Ustadz Redo Pratama Harista, S.Sos.'}
                        style={{
                          width: '100%',
                          height: '320px',
                          objectFit: 'cover',
                          objectPosition: 'top center',
                          display: 'block',
                        }}
                      />
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--gold-vibrant)',
                      color: 'var(--navy-dark)',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      padding: '4px 14px',
                      borderRadius: '100px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}>
                      Kepala Bidang SDM
                    </div>
                  </div>

                  {/* Leader Name & Identity */}
                  <div style={{ textAlign: 'center', marginTop: '18px' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.25, marginBottom: '6px' }}>
                      {leader.name || 'Redo Pratama Harista, S.Sos.'}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '4px' }}>
                      {leader.title || 'Kepala Bidang SDM Yayasan Dar el-Iman'}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#cde4de' }}>
                      Periode: {leader.period || '2021 – Sekarang'} &bull; {leader.birth || 'Solok, 16 Desember 1991'}
                    </p>
                  </div>
                </div>

                {/* Educational & Certification Badges */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <GraduationCap size={18} color="var(--gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.8rem', color: '#e0eee9', lineHeight: 1.5 }}>
                      <strong>Pendidikan:</strong> <br />
                      {leader.education || 'S1 Ilmu Administrasi Negara • Magister Ekonomi Syariah (Peminatan Manajemen SDM)'}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Award size={18} color="var(--gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.8rem', color: '#e0eee9', lineHeight: 1.5 }}>
                      <strong>Sertifikasi & Lisensi:</strong> <br />
                      Sertifikasi BNSP Pengurus Koperasi Simpan Pinjam
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <ShieldCheck size={18} color="var(--gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.8rem', color: '#e0eee9', lineHeight: 1.5 }}>
                      <strong>Keahlian Profesional:</strong> <br />
                      Manajemen SDM, KPI & Performance Management, Compensation & Benefit, Organization Development, GA & HSE.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Kata Sambutan Resmi */}
              <div style={{
                padding: 'clamp(28px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <Quote size={20} color="var(--emerald-main)" />
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--emerald-main)' }}>
                      Kata Sambutan Resmi
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', fontWeight: 900, color: 'var(--text-title)', lineHeight: 1.35, marginBottom: '20px' }}>
                    "{leader?.welcomeMessage?.lead || 'Merawat Akar Nilai, Mengokohkan Pengabdian untuk Generasi Rabbani'}"
                  </h3>

                  <div style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p>
                      <strong>Assalamu'alaikum Warahmatullahi Wabarakatuh.</strong>
                    </p>
                    <p>
                      Alhamdulillah, segala puji dan syukur hanya milik Allah <em>Subhanahu wa Ta'ala</em> yang telah mempertemukan kita dalam niat tulus menegakkan syiar dakwah dan pendidikan Islam bermanhaj Salafus Shalih di Ranah Minang.
                    </p>
                    <p>
                      Bagi kami di Bidang Sumber Daya Manusia Yayasan Dar el-Iman, pengelolaan SDM bukan sekadar urusan administratif personalia, melainkan amanah besar merawat fitrah dan memfasilitasi para mujahid pendidikan. Mengambil inspirasi dari pohon zaitun—<strong>Zaitunu</strong>—kami berikhtiar memastikan setiap asatidzah dan pegawai memiliki akar akidah yang kokoh, bertumbuh dalam keilmuan dan kompetensi profesional, serta berbuah lebat dalam kemanfaatan bagi umat.
                    </p>
                    <p>
                      Melalui tata kelola modern berlandaskan syariah, keadilan Skala Upah Dua Titik, keterbukaan penilaian kinerja KPI, jaminan perlindungan sosial, dan digitalisasi sistem SIMAK, kami berkomitmen menghadirkan lingkungan kerja yang tenang, saling menguatkan, dan penuh ketenteraman lahir batin.
                    </p>
                    <p>
                      Kepada para calon pendidik dan pegawai yang berniat bergabung, mari songsong kesempatan ini dengan niat yang lurus. Mari bersama-sama bertumbuh dan menanam amal jariyah di Yayasan Dar el-Iman.
                    </p>
                    <p style={{ fontStyle: 'italic', color: 'var(--emerald-main)', fontWeight: 700 }}>
                      Wassalamu'alaikum Warahmatullahi Wabarakatuh.
                    </p>
                  </div>
                </div>

                {/* Riwayat Jejak Pengabdian (Career Journey) */}
                <div style={{ marginTop: '32px', borderTop: '1px solid var(--border-card)', paddingTop: '24px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-title)', display: 'block', marginBottom: '14px' }}>
                    Jejak Pengabdian di Yayasan Dar el-Iman:
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {leader?.careerJourney && leader.careerJourney.map((j, idx) => (
                      <div key={idx} style={{ background: 'var(--bg-page)', padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--emerald-main)' }}>
                          {j.year}
                        </div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-title)' }}>
                          {j.role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROFIL KEPALA BAGIAN LEGAL & PERSONALIA (ALFURQANUL HAKIM, S.H., C.W.C.) */}
      <section className="content-section white-bg" style={{ paddingTop: '0px' }}>
        <div className="site-container">
          <div className="section-head-box">
            <div className="section-tagline">
              <Scale size={14} />
              <span>Legalitas & Personalia SDM</span>
            </div>
            <h2 className="section-title">
              Kepala Bagian Legal & Personalia
            </h2>
            <p className="section-subtitle">
              Pilar kepastian hukum ketenagakerjaan, kepatuhan kontrak kerja PKWT, dan pengawasan kinerja pegawai berbasis SIMAK & Katalog KPI.
            </p>
          </div>

          {/* Card Profil Alfurqanul Hakim */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            marginBottom: '48px',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '0',
            }}>
              {/* Left Column: Photo & Credentials */}
              <div style={{
                background: 'linear-gradient(135deg, #063b2d 0%, #031c15 100%)',
                color: '#ffffff',
                padding: 'clamp(28px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
              }}>
                <div>
                  {/* Photo Frame */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '280px',
                    margin: '0 auto 24px auto',
                  }}>
                    <div style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '3px solid var(--gold-light)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                      background: '#0a2e24',
                    }}>
                      <img
                        src="/alfurqanul-hakim.png"
                        alt="Alfurqanul Hakim, S.H., C.W.C."
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/alfurqanul-hakim.svg';
                        }}
                        style={{
                          width: '100%',
                          height: '320px',
                          objectFit: 'cover',
                          objectPosition: 'top center',
                          display: 'block',
                        }}
                      />
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--gold-vibrant)',
                      color: 'var(--navy-dark)',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      padding: '4px 14px',
                      borderRadius: '100px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}>
                      Kabag Legal & Personalia
                    </div>
                  </div>

                  {/* Identity */}
                  <div style={{ textAlign: 'center', marginTop: '18px' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.25, marginBottom: '6px' }}>
                      Alfurqanul Hakim, S.H., C.W.C.
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '4px' }}>
                      Kepala Bagian Legal & Personalia (HR & Legal Manager)
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#cde4de' }}>
                      Yayasan Dar el-Iman Padang
                    </p>
                  </div>
                </div>

                {/* Badges & Education */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <GraduationCap size={18} color="var(--gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.8rem', color: '#e0eee9', lineHeight: 1.5 }}>
                      <strong>Pendidikan:</strong> <br />
                      S1 Ilmu Hukum (Universitas Andalas) &bull; Sedang Menempuh Magister (S2) Hukum Keluarga Islam (UIN Mahmud Yunus Batusangkar)
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Award size={18} color="var(--gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.8rem', color: '#e0eee9', lineHeight: 1.5 }}>
                      <strong>Sertifikasi Profesi:</strong> <br />
                      Sertifikasi Profesi Advokat (PERADI) &bull; Certified Waqf Competence (C.W.C.)
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Key Responsibilities */}
              <div style={{
                padding: 'clamp(28px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <ShieldCheck size={20} color="var(--emerald-main)" />
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--emerald-main)' }}>
                      Mandat & Integritas Kelembagaan
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.45rem)', fontWeight: 900, color: 'var(--text-title)', lineHeight: 1.35, marginBottom: '16px' }}>
                    Memastikan Kepatuhan Regulasi & Keadilan Hubungan Industrial
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '20px' }}>
                    Alfurqanul Hakim bertanggung jawab atas pengelolaan tata kelola Sumber Daya Manusia (SDM) dan kepatuhan hukum di lingkungan Yayasan Dar El-Iman. Dengan latar belakang pendidikan Ilmu Hukum dari Universitas Andalas dan sertifikasi profesi Advokat (PERADI), beliau memastikan setiap kebijakan operasional, pengelolaan hubungan industrial, dan legalitas kelembagaan berjalan sesuai dengan hukum positif yang berlaku serta selaras dengan prinsip syariat Islam.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-title)' }}>
                      Fokus Tanggung Jawab Utama:
                    </span>

                    <div style={{ background: 'var(--bg-page)', padding: '14px 18px', borderRadius: '14px', border: '1px solid var(--border-card)' }}>
                      <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--emerald-main)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={16} />
                        <span>Manajemen SDM & Kinerja Pegawai</span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                        Mengawasi sistem administrasi personalia melalui platform SIMAK dan memimpin implementasi evaluasi kinerja pegawai berbasis <strong>Katalog KPI</strong> YDEI.
                      </p>
                    </div>

                    <div style={{ background: 'var(--bg-page)', padding: '14px 18px', borderRadius: '14px', border: '1px solid var(--border-card)' }}>
                      <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--emerald-main)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={16} />
                        <span>Kepatuhan Legal & Kontrak Kerja (PKWT)</span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                        Mengelola penyusunan dan audit Perjanjian Kerja Waktu Tertentu (PKWT), SOP internal kepegawaian, serta mitigasi risiko hukum kelembagaan.
                      </p>
                    </div>

                    <div style={{ background: 'var(--bg-page)', padding: '14px 18px', borderRadius: '14px', border: '1px solid var(--border-card)' }}>
                      <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--emerald-main)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={16} />
                        <span>Hubungan Industrial & Mediasi Internal</span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                        Menjadi mediator internal dan memastikan pemenuhan hak serta kewajiban ketenagakerjaan secara adil, transparan, dan amanah.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', borderTop: '1px solid var(--border-card)', paddingTop: '16px' }}>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
                    <strong>Latar Belakang Profesional:</strong> Memiliki rekam jejak di sektor finansial sebagai praktisi <em>Legal, Appraisal, & Remedial</em> di PT Sarana Sumatera Barat Ventura, yang membekalinya dengan ketajaman analisis hukum aset dan resolusi mediasi kelembagaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4 PILAR LAYANAN SDM */}
      <section className="content-section alt-bg">
        <div className="site-container">
          <div className="section-head-box">
            <div className="section-tagline">
              <ShieldCheck size={14} />
              <span>Standar Layanan SDM</span>
            </div>
            <h2 className="section-title">
              Layanan & Tanggung Jawab Bidang SDM
            </h2>
            <p className="section-subtitle">
              Empat pilar utama pelayanan dalam mendampingi seluruh asatidzah dan pegawai di lingkungan yayasan.
            </p>
          </div>

          <div className="grid-2-col">
            {pillars.map((pillar, idx) => (
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
                Hubungi Bidang SDM Yayasan
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                Memiliki pertanyaan seputar proses seleksi, status berkas lamaran, atau administrasi kepegawaian? Tim kami siap melayani Anda.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href={`https://wa.me/${contacts.waRaw || '6282170000000'}?text=Bismillah,%20saya%20ingin%20bertanya%20seputar%20SDM%20Yayasan%20Dar%20el-Iman`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-primary"
                  style={{ width: 'fit-content' }}
                >
                  <MessageCircle size={16} />
                  <span>Chat WhatsApp Resmi ({contacts.whatsapp || '+62 821-7000-0000'})</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <Mail size={16} color="var(--emerald-main)" />
                  <span>{contacts.email || 'sdm@dareliman.web.id'}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <Clock size={16} color="var(--emerald-main)" />
                  <span>{contacts.workHours || contacts.hours || 'Senin – Jumat | 08.00 – 16.00 WIB'}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <MapPin size={16} color="var(--emerald-main)" />
                  <span>{contacts.address || contacts.location || 'Gedung Sekretariat Pusat Yayasan Dar el-Iman, Kota Padang'}</span>
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
