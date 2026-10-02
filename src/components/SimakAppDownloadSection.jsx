import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Download,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { appReleaseService } from '../services/api';
import hpImg from '../assets/HP.png';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.dareliman.simakv1';

function GooglePlayIcon({ className = 'w-7 h-7 shrink-0' }) {
  return (
    <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4285F4"
        d="M47.1 22.1c-3.1 3.3-4.8 8.1-4.8 14.1v439.6c0 6 1.7 10.8 4.8 14.1l2.4 2.2L277.6 264v-16L49.5 19.9l-2.4 2.2z"
      />
      <path
        fill="#FBBC04"
        d="M354.2 340.6l-76.6-76.6V248l76.6-76.6 2.4 1.4 90.9 51.6c25.9 14.7 25.9 38.8 0 53.6l-90.9 51.6-2.4 1.4z"
      />
      <path
        fill="#EA4335"
        d="M277.6 264L47.1 492.1c7.7 8.1 20.3 9.1 34.3 1.2l242.8-137.9L277.6 264z"
      />
      <path
        fill="#34A853"
        d="M277.6 248l46.6-26.5L81.4 83.6c-14-7.9-26.6-6.9-34.3 1.2L277.6 248z"
      />
    </svg>
  );
}

export default function SimakAppDownloadSection() {
  const [release, setRelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadRelease() {
      try {
        const data = await appReleaseService.getLatestRelease();
        if (isMounted && data) {
          setRelease(data);
        }
      } catch (err) {
        console.error('Error fetching release:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadRelease();
    return () => {
      isMounted = false;
    };
  }, []);

  const downloadUrl = appReleaseService.getDownloadUrl(release?.id);
  const currentVersion = release?.version || '1.0.0';

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(
    PLAY_STORE_URL
  )}`;

  return (
    <section className="simak-download-section" id="unduh-simak">
      <div className="site-container">
        <div className="simak-download-card">
          {/* Ambient Glows */}
          <div className="download-ambient-glow top-right" />
          <div className="download-ambient-glow bottom-left" />

          <div className="simak-download-grid">
            {/* LEFT / TOP CONTENT */}
            <div className="simak-download-info">
              {/* Badge */}
              <div className="simak-pill-badge">
                <GooglePlayIcon className="w-4 h-4" />
                <span>KINI TERSEDIA DI GOOGLE PLAY STORE</span>
              </div>

              <h2 className="simak-download-heading">
                SIMAK PINTAR <br />
                <span className="text-gradient-emerald">Di Genggaman Anda</span>
              </h2>

              <p className="simak-download-desc">
                Aplikasi resmi SDM Yayasan Dar el-Iman kini telah resmi meluncur di{' '}
                <strong className="text-white">Google Play Store</strong>! Nikmati kemudahan
                presensi berbasis GPS & foto selfie, pengajuan cuti, pemantauan slip gaji, hingga
                informasi tugas harian langsung dari smartphone Android Anda.
              </p>

              {/* Version & Specs Card */}
              <div className="simak-specs-box">
                <div className="specs-item">
                  <span className="specs-label">Distribusi Resmi</span>
                  <div className="specs-val-group">
                    <span className="specs-val font-semibold">Google Play</span>
                    <span className="specs-tag">Official</span>
                  </div>
                </div>

                <div className="specs-divider" />

                <div className="specs-item">
                  <span className="specs-label">Package ID</span>
                  <div className="specs-val-group">
                    <span className="specs-val font-mono text-xs">com.dareliman.simakv1</span>
                    <span className="specs-tag">v{currentVersion}</span>
                  </div>
                </div>

                <div className="specs-divider" />

                <div className="specs-item">
                  <span className="specs-label">Keamanan & OS</span>
                  <span className="specs-val">Play Protect • Android 8.0+</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="simak-download-actions">
                {/* Main Google Play Store Button */}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-google-play"
                  id="btn-download-playstore"
                  title="Buka Aplikasi SIMAK Pintar di Google Play Store"
                >
                  <GooglePlayIcon className="w-7 h-7" />
                  <div className="btn-google-play-text">
                    <span className="btn-google-play-sub">TEMUKAN DI</span>
                    <span className="btn-google-play-title">Google Play</span>
                  </div>
                  <ExternalLink size={16} className="text-emerald-400 ml-1 opacity-80" />
                </a>

                {/* QR Code Trigger Button */}
                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="btn-qr-trigger"
                  title="Tampilkan QR Code untuk scan di HP"
                >
                  <QrCode size={18} />
                  <span>Scan QR</span>
                </button>

                {/* Guide Trigger Button */}
                <button
                  type="button"
                  onClick={() => setShowGuideModal(true)}
                  className="btn-guide-trigger"
                >
                  <HelpCircle size={18} />
                  <span>Panduan Pasang</span>
                </button>
              </div>

              {/* Direct APK Download Fallback */}
              <div className="simak-apk-fallback-row">
                <span className="text-xs text-emerald-200/60">Perangkat tanpa Google Play Store?</span>
                <a
                  href={downloadUrl}
                  className="btn-apk-fallback"
                  id="btn-download-simak-apk-direct"
                  download
                  title="Unduh langsung berkas instalasi APK mandiri"
                >
                  <Download size={13} />
                  <span>Unduh Berkas .APK Alternatif</span>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="simak-trust-row">
                <div className="trust-item">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Terverifikasi Google Play Protect</span>
                </div>
                <div className="trust-item">
                  <Sparkles size={16} className="text-emerald-400" />
                  <span>Pembaruan Otomatis</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Rilis Resmi Yayasan Dar el-Iman</span>
                </div>
              </div>

              {/* Changelog preview if available */}
              {release?.changelog && (
                <div className="simak-changelog-box">
                  <div className="changelog-header">
                    <FileText size={14} className="text-emerald-400" />
                    <span>Catatan Pembaruan (v{currentVersion}):</span>
                  </div>
                  <p className="changelog-text">{release.changelog}</p>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: PREVIEW MOCKUP */}
            <div className="simak-download-preview">
              <div className="phone-mockup-wrapper">
                <img
                  src={hpImg}
                  alt="Aplikasi SIMAK Pintar di Google Play Store"
                  className="phone-mockup-img"
                />
                {/* Floating Quick Card */}
                <div className="phone-floating-card">
                  <div className="floating-card-icon">
                    <Sparkles size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="floating-card-title">Presensi Geolokasi</h4>
                    <p className="floating-card-sub">Akurat, Ringan & Cepat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR CODE MODAL */}
      {showQrModal && (
        <div className="simak-modal-overlay" onClick={() => setShowQrModal(false)}>
          <div
            className="simak-modal-card qr-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="flex items-center gap-2">
                <GooglePlayIcon className="w-5 h-5" />
                <h3 className="modal-title">Scan QR untuk Buka di Google Play</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="modal-close-btn"
              >
                &times;
              </button>
            </div>

            <div className="modal-body text-center">
              <p className="text-sm text-slate-600 mb-4">
                Buka kamera atau aplikasi Google Lens/Scanner di ponsel Android Anda, lalu arahkan ke QR Code berikut:
              </p>

              <div className="qr-box-wrapper">
                <img
                  src={qrImageUrl}
                  alt="QR Code Google Play Store SIMAK Pintar"
                  className="qr-img"
                  loading="lazy"
                />
              </div>

              <div className="qr-badge mt-4">
                <span>SIMAK Pintar • Google Play Store</span>
              </div>

              <p className="text-xs text-slate-500 mt-3 font-mono break-all">
                {PLAY_STORE_URL}
              </p>

              <div className="mt-5 flex justify-center">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-google-play text-sm py-2 px-4"
                >
                  <GooglePlayIcon className="w-5 h-5" />
                  <div className="btn-google-play-text">
                    <span className="btn-google-play-sub">BUKA LANGSUNG DI</span>
                    <span className="btn-google-play-title text-sm">Google Play Store</span>
                  </div>
                  <ExternalLink size={14} className="ml-1 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INSTALLATION GUIDE MODAL */}
      {showGuideModal && (
        <div className="simak-modal-overlay" onClick={() => setShowGuideModal(false)}>
          <div
            className="simak-modal-card guide-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="flex items-center gap-2">
                <HelpCircle size={20} className="text-emerald-500" />
                <h3 className="modal-title">Cara Memasang dari Google Play Store</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowGuideModal(false)}
                className="modal-close-btn"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="guide-steps-list">
                <div className="guide-step-item">
                  <div className="step-num">1</div>
                  <div className="step-content">
                    <h4 className="step-title">Buka Halaman Google Play Store</h4>
                    <p className="step-desc">
                      Klik tombol <strong>"Google Play"</strong> di atas atau scan QR Code langsung menggunakan kamera HP Android Anda untuk membuka halaman aplikasi <strong>SIMAK Pintar</strong>.
                    </p>
                  </div>
                </div>

                <div className="guide-step-item">
                  <div className="step-num">2</div>
                  <div className="step-content">
                    <h4 className="step-title">Klik "Install" / "Pasang"</h4>
                    <p className="step-desc">
                      Tekan tombol <strong>Install</strong>. Google Play Protect akan memindai dan memasang aplikasi secara otomatis ke smartphone Anda dengan aman.
                    </p>
                  </div>
                </div>

                <div className="guide-step-item">
                  <div className="step-num">3</div>
                  <div className="step-content">
                    <h4 className="step-title">Buka Aplikasi & Login</h4>
                    <p className="step-desc">
                      Setelah instalasi selesai, buka aplikasi <strong>SIMAK PINTAR</strong>, login menggunakan akun NIY / Email Anda, serta berikan izin lokasi (GPS) dan kamera untuk kelancaran presensi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="guide-note-box">
                <ShieldCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-900 leading-relaxed">
                  Aplikasi telah resmi diverifikasi oleh Google Play Protect dan dikembangkan oleh <strong>Yayasan Dar el-Iman Padang</strong> untuk seluruh pegawai dan unit kerja.
                </p>
              </div>

              <div className="mt-6 flex justify-end gap-3 items-center">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-google-play text-sm py-2 px-4"
                  onClick={() => setShowGuideModal(false)}
                >
                  <GooglePlayIcon className="w-5 h-5" />
                  <div className="btn-google-play-text">
                    <span className="btn-google-play-sub">PASANG SEKARANG DI</span>
                    <span className="btn-google-play-title text-sm">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
