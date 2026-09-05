import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Upload,
  AlertCircle,
  FileText,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { recruitmentService } from '../services/api';

export default function ApplicationModal({ vacancy, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    // Step 2: Data Pribadi
    fullName: '',
    nik: '',
    whatsapp: '',
    email: '',
    gender: 'Ikhwan',
    birthDate: '',

    // Step 3: Pendidikan
    lastEducation: 'S1',
    institution: '',
    gpa: '',
    experience: '',

    // Step 4: Al-Qur'an & Portofolio
    quranMemorization: '5',
    tahsinSkill: 'Baik (Mutqin)',
    microteachingLink: '',

    // Step 5: Dokumen
    cvFile: null,
    applicationLetter: null,
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Step Validation
  const validateStep = () => {
    setErrorMessage('');
    if (currentStep === 2) {
      if (!formData.fullName.trim()) return 'Nama lengkap wajib diisi.';
      if (!formData.nik.trim() || formData.nik.length < 16) return 'NIK harus 16 digit angka.';
      if (!formData.whatsapp.trim() || formData.whatsapp.length < 10) return 'Nomor WhatsApp aktif wajib diisi.';
      if (!formData.email.trim() || !formData.email.includes('@')) return 'Alamat email valid wajib diisi.';
    }
    if (currentStep === 3) {
      if (!formData.institution.trim()) return 'Nama Universitas / Ma\'had wajib diisi.';
      if (!formData.experience.trim()) return 'Ringkasan pengalaman kerja wajib diisi.';
    }
    if (currentStep === 5) {
      if (!formData.cvFile) return 'Mohon unggah berkas CV / Resume (PDF).';
    }
    return null;
  };

  const handleNext = () => {
    const err = validateStep();
    if (err) {
      setErrorMessage(err);
      return;
    }
    setErrorMessage('');
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrev = () => {
    setErrorMessage('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateStep();
    if (err) {
      setErrorMessage(err);
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    const payload = new FormData();
    payload.append('vacancyId', vacancy.id);
    payload.append('vacancyTitle', vacancy.title);
    payload.append('unit', vacancy.unit);
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        payload.append(key, formData[key]);
      }
    });

    const result = await recruitmentService.submitApplication(payload);
    setSubmitting(false);

    if (result && result.success) {
      setSuccessData(result.data);
    } else {
      setErrorMessage(result?.message || 'Gagal mengirim lamaran. Silakan coba lagi.');
    }
  };

  return (
    <div className="modal-backdrop animate-fade-in" role="dialog" aria-modal="true">
      <div className="modal-content-box p-6 sm:p-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="space-y-0.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
              Pendaftaran Online Formasi
            </span>
            <h3 className="text-lg font-black text-slate-900 leading-snug">
              {vacancy.title}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Unit: {vacancy.unit}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Tutup formulir lamaran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Screen */}
        {successData ? (
          <div className="py-8 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-black text-slate-900">
                Lamaran Berhasil Dikirim!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Jazakumullahu khairan kepada <strong>{formData.fullName}</strong>. Berkas lamaran Anda telah tercatat di sistem rekrutmen SDM Yayasan Dar el-Iman.
              </p>
            </div>

            {/* Registration Code Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto space-y-1 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Kode Registrasi Pelamar
              </span>
              <div className="text-xl font-black text-emerald-800 font-mono tracking-wider">
                {successData.registrationCode}
              </div>
              <p className="text-[11px] text-slate-500">
                Simpan nomor ini untuk melacak perkembangan tahapan seleksi Anda.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="btn-zaitunu-primary text-xs py-2.5 px-6 w-full sm:w-auto"
              >
                Selesai & Tutup
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 pt-4">
            {/* Stepper Progress Indicator */}
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] transition-all ${
                      currentStep === step
                        ? 'bg-emerald-800 text-white font-extrabold shadow-xs'
                        : currentStep > step
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <span className="text-slate-600 font-semibold">
                Langkah {currentStep} dari 5
              </span>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Step 1: Formasi & Persyaratan */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <h4 className="text-sm font-bold text-emerald-950">
                    Kualifikasi & Persyaratan Minimal:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-900">
                    {vacancy.requirements && vacancy.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-slate-600 space-y-2">
                  <p>
                    Pastikan Anda telah membaca kualifikasi di atas dengan seksama dan bersedia mengikuti seluruh alur seleksi yang ditetapkan Yayasan Dar el-Iman.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Data Pribadi */}
            {currentStep === 2 && (
              <div className="space-y-3.5 animate-fade-in text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nama Lengkap (Sesuai KTP / Ijazah) *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Contoh: Muhammad Hakim, S.Pd."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Nomor Induk Kependudukan (NIK) *
                    </label>
                    <input
                      type="text"
                      name="nik"
                      maxLength="16"
                      value={formData.nik}
                      onChange={handleChange}
                      placeholder="16 digit angka NIK KTP"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Contoh: 081234567890"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Email Aktif *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Jenis Kelamin *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden bg-white"
                    >
                      <option value="Ikhwan">Ikhwan (Laki-laki)</option>
                      <option value="Akhwat">Akhwat (Perempuan)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Pendidikan & Pengalaman */}
            {currentStep === 3 && (
              <div className="space-y-3.5 animate-fade-in text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Pendidikan Terakhir *
                    </label>
                    <select
                      name="lastEducation"
                      value={formData.lastEducation}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden bg-white"
                    >
                      <option value="SMA/MA/Ponpes">SMA / MA / Ma'had Aly</option>
                      <option value="D3">Diploma 3 (D3)</option>
                      <option value="S1">Sarjana (S1)</option>
                      <option value="S2">Magister (S2)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Indeks Prestasi Kumulatif (IPK)
                    </label>
                    <input
                      type="text"
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleChange}
                      placeholder="Contoh: 3.65"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nama Perguruan Tinggi / Ma'had *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Contoh: Universitas Negeri Padang / STDI Imam Syafi'i"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Ringkasan Pengalaman Kerja / Mengajar *
                  </label>
                  <textarea
                    rows="3"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Sebutkan instansi, posisi, dan durasi pengabdian sebelumnya..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Kemampuan Al-Qur'an & Portofolio */}
            {currentStep === 4 && (
              <div className="space-y-3.5 animate-fade-in text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Jumlah Hafalan Al-Qur'an Mutqin
                    </label>
                    <select
                      name="quranMemorization"
                      value={formData.quranMemorization}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden bg-white"
                    >
                      <option value="1-2 Juz">1 – 2 Juz (Juz 30 & 29)</option>
                      <option value="3-5 Juz">3 – 5 Juz</option>
                      <option value="6-10 Juz">6 – 10 Juz</option>
                      <option value="11-20 Juz">11 – 20 Juz</option>
                      <option value="30 Juz">30 Juz Lengkap</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Predikat Bacaan / Tahsin
                    </label>
                    <select
                      name="tahsinSkill"
                      value={formData.tahsinSkill}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden bg-white"
                    >
                      <option value="Memiliki Sanad">Memiliki Sanad Qira'ah</option>
                      <option value="Baik (Mutqin)">Lancar & Menguasai Tajwid (Mutqin)</option>
                      <option value="Menengah">Taraf Belajar / Menengah</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tautan Video Microteaching / Portofolio (Opsional)
                  </label>
                  <input
                    type="url"
                    name="microteachingLink"
                    value={formData.microteachingLink}
                    onChange={handleChange}
                    placeholder="Link Google Drive / YouTube video simulasi mengajar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Pastikan akses link Google Drive diatur ke "Siapa saja yang memiliki link".
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Upload Berkas Dokumen */}
            {currentStep === 5 && (
              <div className="space-y-4 animate-fade-in text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Unggah Curriculum Vitae (CV / Resume) * (Format PDF, maks. 5MB)
                  </label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:border-emerald-600 transition-colors bg-slate-50">
                    <input
                      type="file"
                      id="cv-upload"
                      name="cvFile"
                      accept=".pdf"
                      onChange={handleChange}
                      className="hidden"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center gap-1.5">
                      <Upload className="w-6 h-6 text-emerald-700" />
                      <span className="font-semibold text-slate-700">
                        {formData.cvFile ? formData.cvFile.name : 'Klik untuk memilih file CV (PDF)'}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        PDF maksimal 5 MB
                      </span>
                    </label>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <span className="font-bold text-slate-800">Pernyataan Kejujuran:</span>
                  <p>
                    Dengan menekan tombol kirim lamaran, saya menyatakan bahwa data dan dokumen yang saya sampaikan adalah benar dan siap diverifikasi oleh panitia seleksi SDM Yayasan Dar el-Iman.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-zaitunu-primary text-xs py-2 px-5"
                >
                  <span>Lanjutkan</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="btn-zaitunu-primary text-xs py-2.5 px-6 bg-emerald-800 hover:bg-emerald-700"
                >
                  {submitting ? 'Mengirimkan Berkas...' : 'Kirim Lamaran Sekarang'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
