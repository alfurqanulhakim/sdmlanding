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
  Building2,
  GraduationCap,
  Calendar,
  BookOpen,
  User,
  Copy,
  Check,
} from 'lucide-react';
import { recruitmentService } from '../services/api';

export default function ApplicationModal({ vacancy, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [codeCopied, setCodeCopied] = useState(false);

  // Quick Autofill Profile State
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookingUp, setLookingUp] = useState(false);
  const [lookupSuccess, setLookupSuccess] = useState(false);
  const [lookupError, setLookupError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    // Step 2: Data Pribadi
    fullName: '',
    nik: '',
    whatsapp: '',
    email: '',
    gender: 'Ikhwan',
    birthDate: '',

    // Step 3: Pendidikan & Pengalaman
    lastEducation: 'S1',
    institution: '',
    gpa: '',
    experience: '',

    // Step 4: Al-Qur'an & Portofolio
    quranMemorization: '3-5 Juz',
    tahsinSkill: 'Baik (Mutqin)',
    microteachingLink: '',

    // Step 5: Dokumen
    cvFile: null,
  });

  const handleLookupProfile = async () => {
    if (!lookupQuery.trim()) {
      setLookupError('Silakan masukkan NIK, No. WhatsApp, atau Kode Registrasi lama Anda.');
      return;
    }
    setLookingUp(true);
    setLookupError('');
    setLookupSuccess(false);

    try {
      const data = await recruitmentService.lookupProfile(lookupQuery.trim());
      if (data) {
        setFormData((prev) => ({
          ...prev,
          fullName: data.fullName || prev.fullName,
          nik: data.nik || prev.nik,
          whatsapp: data.whatsapp || prev.whatsapp,
          email: data.email || prev.email,
          gender: data.gender || prev.gender,
          birthDate: data.birthDate || prev.birthDate,
          lastEducation: data.lastEducation || prev.lastEducation,
          institution: data.institution || prev.institution,
          gpa: data.gpa || prev.gpa,
          experience: data.experience || prev.experience,
          quranMemorization: data.quranMemorization || prev.quranMemorization,
          tahsinSkill: data.tahsinSkill || prev.tahsinSkill,
          microteachingLink: data.microteachingLink || prev.microteachingLink,
        }));
        setLookupSuccess(true);
        if (currentStep === 1) {
          setCurrentStep(2);
        }
      }
    } catch (err) {
      setLookupError(err.message || 'Data profil sebelumnya belum ditemukan.');
    } finally {
      setLookingUp(false);
    }
  };

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
      if (!formData.fullName.trim()) return 'Nama lengkap wajib diisi sesuai KTP/Ijazah.';
      if (!formData.nik.trim() || formData.nik.length < 16) return 'NIK harus terdiri dari 16 digit angka.';
      if (!formData.whatsapp.trim() || formData.whatsapp.length < 9) return 'Nomor WhatsApp aktif wajib diisi.';
      if (!formData.email.trim() || !formData.email.includes('@')) return 'Alamat email valid wajib diisi.';
    }
    if (currentStep === 3) {
      if (!formData.institution.trim()) return 'Nama Universitas / Sekolah Tinggi / Ma\'had wajib diisi.';
      if (!formData.experience.trim()) return 'Ringkasan pengalaman kerja / mengajar wajib diisi.';
    }
    if (currentStep === 5) {
      if (!formData.cvFile) return 'Mohon unggah berkas CV / Resume (format PDF, maks. 5MB).';
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
    if (e) e.preventDefault();
    const err = validateStep();
    if (err) {
      setErrorMessage(err);
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    const payload = new FormData();
    payload.append('vacancyId', vacancy.id || '');
    if (vacancy.mpp_quota_id) {
      payload.append('mpp_quota_id', vacancy.mpp_quota_id);
    }
    payload.append('vacancyTitle', vacancy.title || '');
    payload.append('unit', vacancy.unit || '');
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        payload.append(key, formData[key]);
      }
    });

    try {
      const result = await recruitmentService.submitApplication(payload);
      setSubmitting(false);

      if (result && result.success) {
        setSuccessData(result.data);
      } else {
        setErrorMessage(result?.message || 'Gagal mengirim lamaran. Silakan periksa kembali formulir Anda.');
      }
    } catch (error) {
      setSubmitting(false);
      setErrorMessage(error.message || 'Terjadi kendala saat menghubungkan ke server. Silakan coba sesaat lagi.');
    }
  };

  const handleCopyCode = () => {
    if (successData?.registrationCode) {
      navigator.clipboard.writeText(successData.registrationCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 3000);
    }
  };

  const stepLabels = [
    'Persyaratan',
    'Data Diri',
    'Pendidikan',
    'Al-Qur\'an',
    'Berkas CV',
  ];

  return (
    <div className="modal-backdrop-overlay" role="dialog" aria-modal="true" style={{ zIndex: 110 }}>
      <div className="modal-dialog-card" style={{ maxWidth: '640px', padding: '28px' }}>
        {/* Modal Header */}
        <div className="modal-head-row" style={{ borderBottom: '1px solid var(--border-card)', paddingBottom: '16px', marginBottom: '18px' }}>
          <div>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: vacancy.isTalentPool ? '#b45309' : 'var(--emerald-main)',
                background: vacancy.isTalentPool ? '#fef3c7' : 'var(--emerald-soft)',
                padding: '3px 10px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '6px',
              }}
            >
              {vacancy.isTalentPool ? 'Pendaftaran Talent Pool SDM' : 'Pendaftaran Online Formasi'}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-title)', lineHeight: 1.3 }}>
              {vacancy.title}
            </h3>
            <p style={{ fontSize: '0.82rem', color: vacancy.isTalentPool ? '#d97706' : 'var(--emerald-main)', fontWeight: 700, marginTop: '2px' }}>
              {vacancy.isTalentPool ? 'Basis Data Kandidat Prioritas: Seluruh Unit Yayasan Dar el-Iman' : `Unit Penempatan: ${vacancy.unit}`}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-close-modal"
            aria-label="Tutup formulir pendaftaran"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success Screen */}
        {successData ? (
          <div style={{ textAlign: 'center', padding: '24px 8px 12px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--emerald-soft)',
                color: 'var(--emerald-main)',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 16px',
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h4 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-title)', marginBottom: '8px' }}>
              Alhamdulillah, Lamaran Terkirim!
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto 20px', lineHeight: 1.6 }}>
              Berkas lamaran Anda telah berhasil masuk ke basis data rekapitulasi SDM Yayasan Dar el-Iman.
            </p>

            {/* Registration Code Card */}
            <div
              style={{
                background: '#f8faf9',
                border: '1.5px dashed var(--emerald-border)',
                borderRadius: '16px',
                padding: '20px',
                maxWidth: '380px',
                margin: '0 auto 24px',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                Kode Registrasi Pelamar Anda:
              </span>
              <div
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: 'var(--emerald-main)',
                  fontFamily: 'monospace',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                }}
              >
                {successData.registrationCode}
              </div>

              <button
                type="button"
                onClick={handleCopyCode}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: codeCopied ? 'var(--emerald-main)' : '#ffffff',
                  color: codeCopied ? '#ffffff' : 'var(--text-title)',
                  border: '1px solid var(--border-card)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {codeCopied ? <Check size={14} /> : <Copy size={14} />}
                <span>{codeCopied ? 'Kode Berhasil Disalin!' : 'Salin Kode Registrasi'}</span>
              </button>

              <p style={{ fontSize: '0.74rem', color: 'var(--text-light)', marginTop: '10px' }}>
                Simpan nomor ini untuk melacak status seleksi Anda di menu <strong>Cek Status</strong>.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="btn-hero-primary"
              style={{ padding: '12px 32px', fontSize: '0.88rem' }}
            >
              Selesai & Tutup
            </button>
          </div>
        ) : (
          <div>
            {/* Horizontal Stepper Progress Indicator (Zero Stacking) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid var(--border-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {[1, 2, 3, 4, 5].map((step, idx) => {
                  const isCurrent = currentStep === step;
                  const isPast = currentStep > step;
                  return (
                    <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          background: isCurrent ? 'var(--emerald-main)' : isPast ? 'var(--emerald-soft)' : '#f1f5f9',
                          color: isCurrent ? '#ffffff' : isPast ? 'var(--emerald-main)' : 'var(--text-light)',
                          border: `1.5px solid ${isCurrent ? 'var(--emerald-main)' : isPast ? 'var(--emerald-border)' : '#e2e8f0'}`,
                          transition: 'all 0.2s',
                        }}
                      >
                        {isPast ? <Check size={14} /> : step}
                      </div>
                      {idx < 4 && (
                        <div
                          style={{
                            width: '16px',
                            height: '2px',
                            background: isPast ? 'var(--emerald-main)' : '#e2e8f0',
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                Langkah {currentStep} dari 5: <span style={{ color: 'var(--emerald-main)' }}>{stepLabels[currentStep - 1]}</span>
              </div>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#991b1b',
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '18px',
                }}
              >
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* STEP 1: Persyaratan & Kualifikasi Formasi */}
            {currentStep === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  style={{
                    background: 'var(--emerald-soft)',
                    border: '1px solid var(--emerald-border)',
                    borderRadius: '16px',
                    padding: '18px 20px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: 'var(--text-title)',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Sparkles size={16} color="var(--emerald-main)" />
                    <span>Kualifikasi & Persyaratan Minimal:</span>
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {vacancy.requirements && vacancy.requirements.length > 0 ? (
                      vacancy.requirements.map((req, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)' }}>
                          <CheckCircle2 size={16} color="var(--emerald-main)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{req}</span>
                        </div>
                      ))
                    ) : (
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-body)' }}>
                        Kualifikasi pendidikan relevan, komitmen adab islami, dan siap mengikuti tahapan seleksi.
                      </div>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '10px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <div style={{ background: '#f8faf9', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-card)' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', display: 'block' }}>Pendidikan Minimal:</span>
                    <strong>{vacancy.education || 'S1'}</strong>
                  </div>
                  <div style={{ background: '#f8faf9', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-card)' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', display: 'block' }}>Kriteria Gender:</span>
                    <strong>{vacancy.gender || 'Ikhwan / Akhwat'}</strong>
                  </div>
                  <div style={{ background: '#f8faf9', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-card)' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', display: 'block' }}>Batas Pendaftaran:</span>
                    <strong>{vacancy.deadline || 'Sesuai Kuota'}</strong>
                  </div>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Pastikan Anda telah membaca kualifikasi di atas dan menyiapkan data yang valid. Klik tombol <strong>Lanjutkan</strong> di bawah untuk mulai mengisi biodata diri.
                </p>

                {/* Fast Track / 1-Click Autofill Card */}
                <div
                  style={{
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    marginTop: '4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 800, color: '#166534' }}>
                      <Sparkles size={15} color="#16a34a" />
                      <span>Pernah Melamar Sebelumnya? (Isi Otomatis / 1-Click)</span>
                    </div>
                    {lookupSuccess && (
                      <span style={{ fontSize: '0.74rem', color: '#15803d', fontWeight: 700, background: '#dcfce7', padding: '2px 8px', borderRadius: '6px' }}>
                        ✓ Profil Berhasil Dimuat
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.76rem', color: '#166534', margin: '0 0 10px', lineHeight: 1.4 }}>
                    Masukkan NIK, Nomor WhatsApp, atau Kode Registrasi lama Anda untuk memuat biodata secara instan tanpa perlu mengisi ulang.
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="Contoh: 13710XXXXXXXXXXX atau 0812XXXXXXXX"
                      value={lookupQuery}
                      onChange={(e) => {
                        setLookupQuery(e.target.value);
                        setLookupError('');
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleLookupProfile();
                        }
                      }}
                      style={{
                        flex: 1,
                        fontSize: '0.82rem',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #86efac',
                        background: '#ffffff',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleLookupProfile}
                      disabled={lookingUp}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        padding: '8px 16px',
                        borderRadius: '8px',
                        background: '#16a34a',
                        color: '#ffffff',
                        border: 'none',
                        cursor: lookingUp ? 'not-allowed' : 'pointer',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {lookingUp ? 'Mencari...' : 'Muat Data'}
                    </button>
                  </div>
                  {lookupError && (
                    <div style={{ fontSize: '0.75rem', color: '#b91c1c', marginTop: '6px' }}>
                      {lookupError}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2: Data Pribadi Pelamar */}
            {currentStep === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {lookupSuccess && (
                  <div
                    style={{
                      background: '#f0fdf4',
                      border: '1px solid #86efac',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontSize: '0.8rem',
                      color: '#166534',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <CheckCircle2 size={16} color="#16a34a" />
                    <span>Data profil Anda berhasil dimuat dari arsip pendaftaran sebelumnya. Anda dapat memperbarui jika ada perubahan.</span>
                  </div>
                )}
                <div className="form-field-group">
                  <label className="form-field-label">
                    Nama Lengkap (Sesuai KTP / Ijazah) <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Contoh: Muhammad Hakim, S.Pd."
                    className="form-field-input"
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  <div className="form-field-group">
                    <label className="form-field-label">
                      Nomor Induk Kependudukan (NIK) <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="nik"
                      maxLength="16"
                      value={formData.nik}
                      onChange={handleChange}
                      placeholder="16 digit angka NIK KTP"
                      className="form-field-input"
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">
                      Nomor WhatsApp Aktif <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Contoh: 081234567890"
                      className="form-field-input"
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  <div className="form-field-group">
                    <label className="form-field-label">
                      Alamat Email Aktif <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="form-field-input"
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">
                      Jenis Kelamin <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="form-field-input"
                    >
                      <option value="Ikhwan">Ikhwan (Laki-laki)</option>
                      <option value="Akhwat">Akhwat (Perempuan)</option>
                    </select>
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="form-field-input"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: Pendidikan & Pengalaman Kerja */}
            {currentStep === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  <div className="form-field-group">
                    <label className="form-field-label">
                      Jenjang Pendidikan Terakhir <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select
                      name="lastEducation"
                      value={formData.lastEducation}
                      onChange={handleChange}
                      className="form-field-input"
                    >
                      <option value="SMA/MA/Ponpes">SMA / MA / Ma'had Aly / Pondok</option>
                      <option value="D3">Diploma 3 (D3)</option>
                      <option value="S1">Sarjana (S1)</option>
                      <option value="S2">Magister (S2)</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">
                      Indeks Prestasi Kumulatif (IPK)
                    </label>
                    <input
                      type="text"
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleChange}
                      placeholder="Contoh: 3.75 (Skala 4.00)"
                      className="form-field-input"
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">
                    Nama Perguruan Tinggi / Ma'had / Kampus <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Contoh: Universitas Negeri Padang / STDI Imam Syafi'i"
                    className="form-field-input"
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">
                    Ringkasan Pengalaman Kerja / Mengajar Sebelumnya <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    rows="3"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Sebutkan nama instansi/sekolah, posisi, dan lama pengalaman kerja Anda..."
                    className="form-field-input"
                    style={{ resize: 'vertical' }}
                    required
                  />
                </div>
              </div>
            )}

            {/* STEP 4: Al-Qur'an & Portofolio */}
            {currentStep === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  <div className="form-field-group">
                    <label className="form-field-label">
                      Jumlah Hafalan Al-Qur'an (Mutqin)
                    </label>
                    <select
                      name="quranMemorization"
                      value={formData.quranMemorization}
                      onChange={handleChange}
                      className="form-field-input"
                    >
                      <option value="1-2 Juz">1 – 2 Juz (Juz 30 & 29)</option>
                      <option value="3-5 Juz">3 – 5 Juz</option>
                      <option value="6-10 Juz">6 – 10 Juz</option>
                      <option value="11-20 Juz">11 – 20 Juz</option>
                      <option value="30 Juz">30 Juz Lengkap</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">
                      Tingkat Keterampilan Tahsin & Tajwid
                    </label>
                    <select
                      name="tahsinSkill"
                      value={formData.tahsinSkill}
                      onChange={handleChange}
                      className="form-field-input"
                    >
                      <option value="Memiliki Sanad">Memiliki Sanad Qira'ah</option>
                      <option value="Baik (Mutqin)">Lancar & Menguasai Kaidah Tajwid (Mutqin)</option>
                      <option value="Menengah">Taraf Belajar / Menengah</option>
                    </select>
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">
                    Tautan Video Microteaching / Portofolio (Opsional)
                  </label>
                  <input
                    type="url"
                    name="microteachingLink"
                    value={formData.microteachingLink}
                    onChange={handleChange}
                    placeholder="Contoh: https://drive.google.com/... atau tautan YouTube"
                    className="form-field-input"
                  />
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-light)', marginTop: '4px' }}>
                    Jika menggunakan Google Drive, pastikan izin tautan diatur ke <em>"Siapa saja yang memiliki link"</em>.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 5: Berkas CV & Pengiriman */}
            {currentStep === 5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-field-group">
                  <label className="form-field-label">
                    Unggah Curriculum Vitae (CV / Resume) <span style={{ color: '#ef4444' }}>*</span>
                  </label>

                  <div
                    style={{
                      border: '2px dashed #cbd5e1',
                      borderRadius: '16px',
                      padding: '24px',
                      textAlign: 'center',
                      background: '#f8faf9',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s',
                    }}
                    onClick={() => document.getElementById('cv-file-input').click()}
                  >
                    <input
                      type="file"
                      id="cv-file-input"
                      name="cvFile"
                      accept=".pdf"
                      onChange={handleChange}
                      style={{ display: 'none' }}
                    />
                    <Upload size={32} color="var(--emerald-main)" style={{ margin: '0 auto 8px' }} />
                    <span
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        color: formData.cvFile ? 'var(--emerald-main)' : 'var(--text-title)',
                        display: 'block',
                      }}
                    >
                      {formData.cvFile ? formData.cvFile.name : 'Klik untuk Memilih File CV (PDF)'}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-light)' }}>
                      Format PDF, ukuran maksimal 5 MB
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    background: '#f1f5f9',
                    border: '1px solid var(--border-card)',
                    borderRadius: '12px',
                    padding: '14px',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ color: 'var(--text-title)' }}>Pernyataan Kejujuran:</strong>
                  <p style={{ marginTop: '4px' }}>
                    Dengan menekan tombol kirim lamaran, saya menyatakan bahwa data dan dokumen yang saya sampaikan adalah benar dan siap diverifikasi oleh panitia seleksi SDM Yayasan Dar el-Iman.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Footer Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                marginTop: '24px',
                borderTop: '1px solid var(--border-card)',
              }}
            >
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    borderRadius: '10px',
                    background: '#ffffff',
                    border: '1px solid var(--border-card)',
                    color: 'var(--text-muted)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <ChevronLeft size={16} />
                  <span>Kembali</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-hero-primary"
                  style={{ padding: '10px 24px', fontSize: '0.84rem' }}
                >
                  <span>Lanjutkan</span>
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="btn-hero-primary"
                  style={{
                    padding: '12px 28px',
                    fontSize: '0.86rem',
                    background: 'var(--emerald-main)',
                    color: '#ffffff',
                  }}
                >
                  <span>{submitting ? 'Mengirimkan Berkas...' : 'Kirim Berkas Lamaran Sekarang'}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
