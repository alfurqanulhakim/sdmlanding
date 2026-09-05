import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { RECRUITMENT_STAGES } from '../data/mockData';
import { recruitmentService } from '../services/api';

export default function StatusTrackerModal({ onClose }) {
  const [identifier, setIdentifier] = useState('');
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError('Masukkan Kode Registrasi, Nomor WhatsApp, atau 6 digit NIK Anda.');
      return;
    }

    setSearching(true);
    setError('');
    setResult(null);

    try {
      const data = await recruitmentService.trackStatus(identifier);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Data lamaran tidak ditemukan. Pastikan nomor/kode registrasi yang Anda masukkan sesuai.');
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="modal-backdrop-overlay" role="dialog" aria-modal="true">
      <div className="modal-dialog-card">
        {/* Header */}
        <div className="modal-head-row">
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--emerald-main)', background: 'var(--emerald-soft)', padding: '3px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '6px' }}>
              Layanan Mandiri Pelamar
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-title)' }}>
              Pelacak Status Seleksi Rekrutmen
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Pantau perkembangan tahapan seleksi Anda secara mandiri dan transparan
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-close-modal"
            aria-label="Tutup pelacak status"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Input Box */}
        <form onSubmit={handleSearch} style={{ marginTop: '16px' }}>
          <div className="form-field-group">
            <label className="form-field-label">
              Kode Registrasi / No. WhatsApp / NIK
            </label>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Contoh: REG-2026-781923 atau 081234567890"
                className="form-field-input"
                style={{ flex: 1 }}
              />
              <button
                type="submit"
                disabled={searching}
                className="btn-hero-primary"
                style={{ padding: '12px 22px', fontSize: '0.85rem', flexShrink: 0 }}
              >
                <Search size={15} />
                <span>{searching ? 'Mencari...' : 'Lacak'}</span>
              </button>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '6px' }}>
              Demi privasi, kami hanya menampilkan inisial dan tidak mempublikasikan data sensitif.
            </p>
          </div>

          {error && (
            <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}
        </form>

        {/* Tracking Result View */}
        {result && (
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-card)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Applicant Summary Card */}
            <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border-card)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--emerald-main)', fontFamily: 'monospace' }}>
                  {result.registrationCode}
                </span>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', background: '#ffffff', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--border-card)' }}>
                  Update: {result.updatedAt}
                </span>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 900, color: 'var(--text-title)' }}>
                  {result.applicantName}
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  {result.positionApplied} &bull; {result.unitApplied}
                </p>
              </div>

              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-dark)', background: 'var(--emerald-soft)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--emerald-border)' }}>
                Status Terkini: {result.statusText}
              </div>

              {result.notes && (
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Catatan Panitia: "{result.notes}"
                </p>
              )}
            </div>

            {/* Visual Growth Pipeline Stepper */}
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-title)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                Alur Tahapan Seleksi Masuk:
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {RECRUITMENT_STAGES.map((stage, idx) => {
                  const isPast = idx < result.currentStageIndex;
                  const isCurrent = idx === result.currentStageIndex;

                  return (
                    <div
                      key={stage.id}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid',
                        borderColor: isCurrent ? 'var(--emerald-main)' : isPast ? 'var(--emerald-border)' : 'var(--border-card)',
                        background: isCurrent ? 'var(--emerald-soft)' : isPast ? '#ffffff' : 'var(--bg-page)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            display: 'grid',
                            placeItems: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 900,
                            flexShrink: 0,
                            background: isPast || isCurrent ? 'var(--emerald-main)' : '#cbd5e1',
                            color: '#ffffff',
                          }}
                        >
                          {isPast ? <CheckCircle2 size={15} /> : stage.step}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.84rem', fontWeight: isCurrent ? 800 : 600, color: isCurrent ? 'var(--navy-dark)' : 'var(--text-body)' }}>
                            {stage.title}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                            {stage.desc}
                          </div>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: isPast ? 'var(--emerald-soft)' : isCurrent ? 'var(--gold-soft)' : '#f1f5f9',
                          color: isPast ? 'var(--emerald-main)' : isCurrent ? 'var(--gold-deep)' : 'var(--text-light)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {isPast ? 'Selesai' : isCurrent ? 'Tahap Aktif' : 'Menunggu'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
