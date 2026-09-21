import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Download,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  HelpCircle,
  FileText,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { appReleaseService } from '../services/api';
import hpImg from '../assets/HP.png';

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
  const fileSize = release?.file_size_formatted || '28.5 MB';
  const releaseDate = release?.release_date_formatted || 'Rilis Resmi';

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(
    downloadUrl
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
                <Smartphone size={14} className="text-emerald-400" />
                <span>APLIKASI MOBILE ANDROID RESMI</span>
              </div>

              <h2 className="simak-download-heading">
                SIMAK PINTAR <br />
                <span className="text-gradient-emerald">Di Genggaman Anda</span>
              </h2>

              <p className="simak-download-desc">
                Nikmati kemudahan presensi berbasis GPS & foto selfie, pengajuan cuti,
                pemantauan slip gaji, hingga informasi tugas harian langsung dari smartphone Android Anda.
              </p>

              {/* Version & Specs Card */}
              <div className="simak-specs-box">
                <div className="specs-item">
                  <span className="specs-label">Versi Aplikasi</span>
                  <div className="specs-val-group">
                    <span className="specs-val font-mono">v{currentVersion}</span>
                    <span className="specs-tag">Terbaru</span>
                  </div>
                </div>

                <div className="specs-divider" />

                <div className="specs-item">
                  <span className="specs-label">Ukuran Berkas</span>
                  <span className="specs-val">{fileSize}</span>
                </div>

                <div className="specs-divider" />

                <div className="specs-item">
                  <span className="specs-label">Dukungan OS</span>
                  <span className="specs-val">Android 8.0+</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="simak-download-actions">
                <a
                  href={downloadUrl}
                  className="btn-download-apk"
                  id="btn-download-simak-apk"
                  download
                >
                  <Download size={18} />
                  <span>Unduh SIMAK Pintar (.APK)</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="btn-qr-trigger"
                  title="Tampilkan QR Code untuk scan di HP"
                >
                  <QrCode size={18} />
                  <span>Scan QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowGuideModal(true)}
                  className="btn-guide-trigger"
                >
                  <HelpCircle size={18} />
                  <span>Panduan Pasang</span>
                </button>
              </div>

              {/* Trust Badge */}
              <div className="simak-trust-row">
                <div className="trust-item">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Bebas Virus & Terverifikasi Admin</span>
                </div>
                <div className="trust-item">
                  <Clock size={16} className="text-emerald-400" />
                  <span>{releaseDate}</span>
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
                  alt="Aplikasi SIMAK Pintar Android"
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
                <QrCode size={20} className="text-emerald-500" />
                <h3 className="modal-title">Scan QR untuk Unduh di HP</h3>
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
                Buka kamera atau aplikasi scanner di ponsel Android Anda, lalu arahkan ke QR Code berikut:
              </p>

              <div className="qr-box-wrapper">
                <img
                  src={qrImageUrl}
                  alt={`QR Code Download SIMAK Pintar v${currentVersion}`}
                  className="qr-img"
                  loading="lazy"
                />
              </div>

              <div className="qr-badge mt-4">
                <span>SIMAK Pintar Android v{currentVersion}</span>
              </div>

              <p className="text-xs text-slate-500 mt-3 font-mono break-all">
                {downloadUrl}
              </p>
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
                <h3 className="modal-title">Cara Memasang APK di HP Android</h3>
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
                    <h4 className="step-title">Unduh File APK</h4>
                    <p className="step-desc">
                      Klik tombol <strong>"Unduh SIMAK Pintar (.APK)"</strong> di atas atau scan QR Code langsung dari browser HP Anda. Tunggu proses unduhan selesai.
                    </p>
                  </div>
                </div>

                <div className="guide-step-item">
                  <div className="step-num">2</div>
                  <div className="step-content">
                    <h4 className="step-title">Izinkan Sumber Tidak Dikenal</h4>
                    <p className="step-desc">
                      Buka file hasil unduh. Jika muncul peringatan keamanan (misal dari Chrome/Browser), pilih <strong>Setelan</strong> lalu aktifkan <strong>"Izinkan pemasangan aplikasi dari sumber ini"</strong> (*Install unknown apps*).
                    </p>
                  </div>
                </div>

                <div className="guide-step-item">
                  <div className="step-num">3</div>
                  <div className="step-content">
                    <h4 className="step-title">Pasang dan Mulai Gunakan</h4>
                    <p className="step-desc">
                      Pilih <strong>Install / Pasang</strong>. Setelah selesai, buka aplikasi <strong>SIMAK PINTAR</strong>, login menggunakan akun NIY/Email Anda, dan izinkan akses lokasi (GPS) serta kamera.
                    </p>
                  </div>
                </div>
              </div>

              <div className="guide-note-box">
                <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800">
                  Aplikasi ini dikembangkan dan didistribusikan secara resmi oleh Tim IT & SDM Yayasan Dar el-Iman untuk seluruh pegawai dan unit kerja.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href={downloadUrl}
                  className="btn-download-apk text-sm py-2 px-4"
                  download
                  onClick={() => setShowGuideModal(false)}
                >
                  <Download size={16} />
                  <span>Unduh Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
