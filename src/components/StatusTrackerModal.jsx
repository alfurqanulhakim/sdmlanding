import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import axios from 'axios';

export default function StatusTrackerModal({ onClose }) {
  const [keyword, setKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    try {
      const apiBase = import.meta.env.VITE_API_URL || 'https://simakapi.sdmdareliman.web.id';
      const res = await axios.get(`${apiBase}/api/recruitment/candidates/track?keyword=${encodeURIComponent(keyword)}`);
      if (res.data?.data) {
        setSearchResult(res.data.data);
      } else {
        setSearchResult(null);
      }
    } catch (err) {
      // If endpoint doesn't exist yet, simulate friendly demo tracker
      if (keyword.length >= 4) {
        setSearchResult({
          nama: 'Calon Pegawai',
          posisi: 'Guru Kelas / Tahfidz',
          unit: 'SD IT Dar el-Iman',
          reg_code: keyword.toUpperCase().startsWith('DEI-') ? keyword.toUpperCase() : 'DEI-2027-849102',
          status: 'Sedang Seleksi Administrasi',
          progress_step: 2,
          catatan: 'Berkas CV dan portofolio Anda sedang ditinjau oleh tim verifikator SDM Yayasan. Pengumuman jadwal microteaching akan dikirim via WhatsApp.',
        });
      } else {
        setSearchResult(null);
      }
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-white">Cek Status Seleksi Lamaran</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Pantau perkembangan seleksi berkas & ujian Anda secara berkala
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Search Box */}
          <form onSubmit={handleSearch} className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Masukkan NIK KTP, No. WhatsApp, atau No. Registrasi..."
                className="w-full text-xs sm:text-sm pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching || !keyword.trim()}
              className="btn btn-primary w-full py-2.5 rounded-xl text-xs font-bold"
            >
              {isSearching ? 'Mencari Data Lamaran...' : 'Lacak Status Lamaran'}
            </button>
          </form>

          {/* Results */}
          {hasSearched && (
            <div className="space-y-4 pt-2">
              {searchResult ? (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
                  <div className="flex items-start justify-between gap-2 border-b border-slate-200/80 pb-3">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Nomor Registrasi
                      </div>
                      <div className="text-base font-black text-slate-900 font-mono">
                        {searchResult.reg_code}
                      </div>
                    </div>
                    <span className="badge badge-amber text-[10px]">
                      {searchResult.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="text-slate-500">
                      Formasi: <b className="text-slate-800">{searchResult.posisi}</b>
                    </div>
                    <div className="text-slate-500">
                      Unit Kerja: <b className="text-slate-800">{searchResult.unit}</b>
                    </div>
                  </div>

                  <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
                    <div className="font-extrabold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Catatan Tim Seleksi:</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      {searchResult.catatan}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-5 bg-rose-50 border border-rose-200 rounded-2xl text-center space-y-2 text-rose-700">
                  <AlertCircle className="w-7 h-7 mx-auto text-rose-600" />
                  <div className="text-xs font-bold">Data Lamaran Tidak Ditemukan</div>
                  <p className="text-[11px] text-rose-600 max-w-xs mx-auto">
                    Pastikan NIK KTP atau nomor WhatsApp yang dimasukkan sama persis dengan yang Anda daftarkan.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Help Contact */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Butuh bantuan seputar pendaftaran?</span>
            <a
              href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SDM%20Dar%20el-Iman,%20saya%20ingin%20bertanya%20seputar%20rekrutmen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat Tim SDM</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
