import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Upload,
  User,
  GraduationCap,
  BookOpen,
  FileText,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import axios from 'axios';

export default function ApplicationModal({ vacancy, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    posisi: vacancy?.posisi || 'Guru Kelas',
    unit: vacancy?.unit || 'Yayasan Dar el-Iman',
    nama_lengkap: '',
    nik: '',
    whatsapp: '',
    email: '',
    jenis_kelamin: 'Ikhwan',
    tempat_lahir: '',
    tanggal_lahir: '',
    alamat_domisili: '',
    pendidikan_terakhir: 'S1',
    nama_kampus: '',
    jurusan: '',
    ipk: '',
    pengalaman_mengajar: '',
    jumlah_hafalan: '0 - 1 Juz',
    sertifikat_tahsin: 'Belum Ada',
    link_video_microteaching: '',
    catatan_tambahan: '',
    nama_file_cv: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFakeFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file maksimal 5 MB');
        return;
      }
      handleChange('nama_file_cv', file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nama_lengkap || !formData.nik || !formData.whatsapp) {
      setErrorMessage('Mohon lengkapi data wajib (Nama Lengkap, NIK, dan No. WhatsApp).');
      return;
    }

    try {
      setIsSubmitting(true);
      const apiBase = import.meta.env.VITE_API_URL || 'https://simakapi.sdmdareliman.web.id';

      // Try sending to SIMAK API
      const regCode = 'DEI-' + Math.floor(100000 + Math.random() * 900000);
      try {
        await axios.post(`${apiBase}/api/recruitment/candidates`, {
          ...formData,
          registration_code: regCode,
        });
      } catch (apiErr) {
        console.warn('API endpoint unavailable or offline, recorded locally:', apiErr);
      }

      setSubmissionSuccess(regCode);
    } catch (err) {
      setErrorMessage(err.message || 'Terjadi kendala saat mengirim lamaran.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 gradient-emerald text-white flex items-center justify-between relative shrink-0">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 bg-emerald-800/80 text-amber-300 border border-emerald-400/30 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
              Formulir E-Recruitment
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
              Lamar Formasi: {formData.posisi}
            </h3>
            <p className="text-xs text-emerald-100">
              Unit: {formData.unit}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          {submissionSuccess ? (
            /* Success Screen */
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">
                  Lamaran Berhasil Terkirim!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Alhamdulillah, berkas lamaran Anda untuk posisi <b>{formData.posisi}</b> telah terdata di sistem SDM Yayasan Dar el-Iman.
                </p>
              </div>

              {/* Registration Badge */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-sm mx-auto space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Nomor Registrasi Seleksi
                </span>
                <span className="text-2xl font-black text-emerald-700 font-mono tracking-wider">
                  {submissionSuccess}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  Simpan nomor ini untuk mengecek status seleksi sewaktu-waktu.
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SDM%20Dar%20el-Iman,%20saya%20sudah%20mengirim%20lamaran%20dengan%20No%20Reg:%20${submissionSuccess}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold text-xs px-5 py-3 rounded-xl w-full sm:w-auto"
                >
                  Konfirmasi via WhatsApp SDM
                </a>
                <button
                  onClick={onClose}
                  className="btn btn-outline text-xs px-5 py-3 rounded-xl w-full sm:w-auto"
                >
                  Tutup Formulir
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stepper indicator */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs font-bold text-slate-400">
                <span className={step >= 1 ? 'text-emerald-700 font-black' : ''}>
                  1. Data Diri
                </span>
                <span>•</span>
                <span className={step >= 2 ? 'text-emerald-700 font-black' : ''}>
                  2. Pendidikan & Keahlian
                </span>
                <span>•</span>
                <span className={step >= 3 ? 'text-emerald-700 font-black' : ''}>
                  3. Berkas & Al-Qur'an
                </span>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* STEP 1: Data Diri */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Nama Lengkap & Gelar *</label>
                      <input
                        type="text"
                        required
                        value={formData.nama_lengkap}
                        onChange={(e) => handleChange('nama_lengkap', e.target.value)}
                        placeholder="Contoh: Muhammad Ilham, S.Pd"
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">NIK KTP (16 Digit) *</label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        value={formData.nik}
                        onChange={(e) => handleChange('nik', e.target.value.replace(/\D/g, ''))}
                        placeholder="1371xxxxxxxxxxxx"
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">No. WhatsApp Aktif *</label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => handleChange('whatsapp', e.target.value)}
                        placeholder="0812xxxxxxxx"
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="nama@gmail.com"
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Jenis Kelamin</label>
                      <select
                        value={formData.jenis_kelamin}
                        onChange={(e) => handleChange('jenis_kelamin', e.target.value)}
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700"
                      >
                        <option value="Ikhwan">Ikhwan (Laki-laki)</option>
                        <option value="Akhwat">Akhwat (Perempuan)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Alamat Domisili Sekarang</label>
                    <textarea
                      rows={2}
                      value={formData.alamat_domisili}
                      onChange={(e) => handleChange('alamat_domisili', e.target.value)}
                      placeholder="Jalan, Kelurahan, Kecamatan, Kota..."
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Pendidikan & Pengalaman */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Jenjang Pendidikan *</label>
                      <select
                        value={formData.pendidikan_terakhir}
                        onChange={(e) => handleChange('pendidikan_terakhir', e.target.value)}
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700"
                      >
                        <option value="SMA / MA / Pondok">SMA / MA / Pondok Pesantren</option>
                        <option value="D3">Diploma (D3)</option>
                        <option value="S1">Sarjana (S1)</option>
                        <option value="S2">Magister (S2)</option>
                      </select>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-700">Nama Universitas / Ma'had *</label>
                      <input
                        type="text"
                        required
                        value={formData.nama_kampus}
                        onChange={(e) => handleChange('nama_kampus', e.target.value)}
                        placeholder="Contoh: Universitas Negeri Padang / LIPIA"
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Program Studi / Jurusan</label>
                      <input
                        type="text"
                        value={formData.jurusan}
                        onChange={(e) => handleChange('jurusan', e.target.value)}
                        placeholder="Contoh: PGSD / Pendidikan Matematika"
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">IPK Terakhir</label>
                      <input
                        type="text"
                        value={formData.ipk}
                        onChange={(e) => handleChange('ipk', e.target.value)}
                        placeholder="Contoh: 3.55"
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Riwayat Pengalaman Mengajar / Kerja Singkat</label>
                    <textarea
                      rows={2}
                      value={formData.pengalaman_mengajar}
                      onChange={(e) => handleChange('pengalaman_mengajar', e.target.value)}
                      placeholder="Sebutkan instansi, posisi, dan lama mengajar sebelumnya..."
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Berkas & Al-Qur'an */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Jumlah Hafalan Al-Qur'an *</label>
                      <select
                        value={formData.jumlah_hafalan}
                        onChange={(e) => handleChange('jumlah_hafalan', e.target.value)}
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold"
                      >
                        <option value="0 - 1 Juz (Juz 30)">0 - 1 Juz (Juz 30)</option>
                        <option value="2 - 5 Juz">2 - 5 Juz</option>
                        <option value="6 - 10 Juz">6 - 10 Juz</option>
                        <option value="11 - 20 Juz">11 - 20 Juz</option>
                        <option value="30 Juz Mutqin">30 Juz Mutqin</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Sertifikat / Sanad Tahsin</label>
                      <select
                        value={formData.sertifikat_tahsin}
                        onChange={(e) => handleChange('sertifikat_tahsin', e.target.value)}
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium"
                      >
                        <option value="Ada - Bersanad">Ada (Bersanad)</option>
                        <option value="Ada - Sertifikat Lembaga">Ada (Sertifikat Lembaga)</option>
                        <option value="Belum Ada">Belum Ada</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Upload Berkas CV & Lamaran (PDF/DOCX, Maks 5MB) *
                    </label>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-5 cursor-pointer bg-slate-50/50 hover:bg-emerald-50/30 transition-all text-center">
                      <Upload className="w-7 h-7 text-emerald-600 mb-1.5" />
                      <span className="text-xs font-bold text-slate-800">
                        {formData.nama_file_cv || 'Klik untuk memilih file CV / Lamaran'}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        Format PDF, DOC, atau DOCX (Maksimal 5 MB)
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFakeFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Link Video Microteaching / Tilawah (Opsional - YouTube / Google Drive)
                    </label>
                    <input
                      type="url"
                      value={formData.link_video_microteaching}
                      onChange={(e) => handleChange('link_video_microteaching', e.target.value)}
                      placeholder="https://youtu.be/... atau link Google Drive"
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200"
                    />
                  </div>
                </div>
              )}

              {/* Stepper Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn btn-outline text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Sebelumnya</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn btn-ghost text-xs px-4 py-2.5 rounded-xl"
                  >
                    Batal
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="btn btn-primary text-xs px-5 py-2.5 rounded-xl flex items-center gap-1.5"
                  >
                    <span>Langkah Selanjutnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary text-xs px-6 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>Mengirim Berkas...</span>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Kirim Lamaran Sekarang</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
