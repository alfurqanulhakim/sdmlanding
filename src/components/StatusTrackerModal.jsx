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
      setError('Data lamaran tidak ditemukan. Pastikan data yang Anda masukkan sesuai.');
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="modal-backdrop animate-fade-in" role="dialog" aria-modal="true">
      <div className="modal-content-box p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="space-y-0.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
              Layanan Mandiri Pelamar
            </span>
            <h3 className="text-lg font-black text-slate-900">
              Pelacak Status Seleksi Rekrutmen
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Pantau perkembangan tahapan seleksi secara transparan
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Tutup pelacak status"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Box */}
        <form onSubmit={handleSearch} className="pt-5 space-y-3">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700">
              Kode Registrasi / No. WhatsApp / NIK
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Contoh: REG-2026-781923 atau 081234567890"
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-emerald-600 focus:outline-hidden"
              />
              <button
                type="submit"
                disabled={searching}
                className="btn-zaitunu-primary text-xs py-2 px-5 shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>{searching ? 'Mencari...' : 'Lacak'}</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Demi privasi, kami hanya menampilkan inisial dan tidak menampilkan data sensitif pelamar.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </form>

        {/* Tracking Result View */}
        {result && (
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-6 animate-fade-in">
            {/* Applicant Summary Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-800 font-mono">
                  {result.registrationCode}
                </span>
                <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Update: {result.updatedAt}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-black text-slate-900">
                  {result.applicantName}
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  {result.positionApplied} • {result.unitApplied}
                </p>
              </div>

              <div className="text-xs font-semibold text-emerald-900 bg-emerald-100/60 p-2.5 rounded-xl border border-emerald-200/60">
                Status Terkini: {result.statusText}
              </div>

              {result.notes && (
                <p className="text-[11px] text-slate-500 italic pt-1">
                  Catatan Panitia: "{result.notes}"
                </p>
              )}
            </div>

            {/* Visual Growth Pipeline Stepper */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Alur Tahapan Pertumbuhan Seleksi:
              </span>

              <div className="space-y-2.5">
                {RECRUITMENT_STAGES.map((stage, idx) => {
                  const isPast = idx < result.currentStageIndex;
                  const isCurrent = idx === result.currentStageIndex;
                  const isFuture = idx > result.currentStageIndex;

                  return (
                    <div
                      key={stage.id}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                        isCurrent
                          ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-950'
                          : isPast
                          ? 'bg-slate-50/60 border-slate-200 text-slate-500'
                          : 'bg-white border-slate-100 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                            isPast
                              ? 'bg-emerald-600 text-white'
                              : isCurrent
                              ? 'bg-emerald-800 text-white'
                              : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {isPast ? <CheckCircle2 className="w-3.5 h-3.5" /> : stage.step}
                        </div>
                        <div>
                          <div className="leading-tight">{stage.title}</div>
                          <div className="text-[10px] font-normal text-slate-500">
                            {stage.desc}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                          isPast
                            ? 'text-emerald-700 bg-emerald-100'
                            : isCurrent
                            ? 'text-amber-800 bg-amber-100'
                            : 'text-slate-400 bg-slate-100'
                        }`}
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
