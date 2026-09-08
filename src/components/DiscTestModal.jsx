import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  BrainCircuit,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { DISC_QUESTIONS } from '../data/discQuestionsData';
import { recruitmentService } from '../services/api';

export default function DiscTestModal({ applicant, onClose, onComplete }) {
  const [questions, setQuestions] = useState(DISC_QUESTIONS);
  const [answers, setAnswers] = useState({}); // { [qNo]: { most: number, least: number } }
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Load questions from API if available, fallback to local
  useEffect(() => {
    async function loadQuestions() {
      try {
        const res = await recruitmentService.getDiscQuestions(applicant?.registrationCode);
        if (res && Array.isArray(res.questions) && res.questions.length === 24) {
          setQuestions(res.questions);
        }
      } catch (err) {
        // Fallback to local DISC_QUESTIONS
      }
    }
    loadQuestions();
  }, [applicant?.registrationCode]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !submitting && !submitResult) {
        if (Object.keys(answers).length > 0) {
          if (window.confirm('Apakah Anda yakin ingin menutup lembar tes? Jawaban yang belum dikirim akan hilang.')) {
            onClose();
          }
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, submitting, submitResult, answers]);

  // Handle radio selection for Most (P) and Least (K)
  const handleSelect = (qNo, type, statementIdx) => {
    setAnswers((prev) => {
      const current = prev[qNo] || { most: null, least: null };
      const otherType = type === 'most' ? 'least' : 'most';

      let newMost = current.most;
      let newLeast = current.least;

      if (type === 'most') {
        newMost = statementIdx;
        // Jika statement yang sama sebelumnya dipilih sebagai Least (K), reset Least
        if (newLeast === statementIdx) {
          newLeast = null;
        }
      } else {
        newLeast = statementIdx;
        // Jika statement yang sama sebelumnya dipilih sebagai Most (P), reset Most
        if (newMost === statementIdx) {
          newMost = null;
        }
      }

      return {
        ...prev,
        [qNo]: { most: newMost, least: newLeast },
      };
    });
    setErrorMessage('');
  };

  // Count completed questions
  const totalQuestions = questions.length;
  const completedCount = Object.values(answers).filter(
    (a) => a && a.most !== null && a.least !== null && a.most !== a.least
  ).length;
  const progressPercent = Math.round((completedCount / totalQuestions) * 100);
  const isAllCompleted = completedCount === totalQuestions;

  // Submit test to backend
  const handleSubmit = async () => {
    if (!isAllCompleted) {
      // Find first unanswered
      const firstUnanswered = questions.findIndex((q) => {
        const a = answers[q.no];
        return !a || a.most === null || a.least === null || a.most === a.least;
      });
      if (firstUnanswered !== -1) {
        setActiveQuestionIndex(firstUnanswered);
        setErrorMessage(`Harap lengkapi nomor ${firstUnanswered + 1} sebelum mengirim.`);
      }
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      // Format payload answers array 24 items
      const answersPayload = questions.map((q) => {
        const a = answers[q.no];
        return {
          question_no: q.no,
          most: a.most,
          least: a.least,
        };
      });

      const payload = {
        registration_code: applicant?.registrationCode || 'GUEST',
        full_name: applicant?.applicantName || '',
        answers: answersPayload,
      };

      const res = await recruitmentService.submitDiscTest(payload);
      if (res && res.success) {
        setSubmitResult(res.data);
        if (onComplete) {
          onComplete(res.data);
        }
      } else {
        throw new Error(res?.message || 'Gagal menyimpan jawaban tes.');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Terjadi kesalahan saat menyimpan jawaban tes. Silakan coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  const currentQ = questions[activeQuestionIndex] || questions[0];
  const currentAns = answers[currentQ?.no] || { most: null, least: null };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(3, 28, 21, 0.85)',
        backdropFilter: 'blur(6px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '780px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '94vh',
          animation: 'fadeIn 0.2s ease-out',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #031c15 0%, #063b2d 100%)',
            color: '#ffffff',
            padding: '18px 24px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '6px',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <BrainCircuit size={20} color="#f59e0b" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                  Tes Psikotes Kepribadian D.I.S.C.
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#a7f3d0', margin: 0 }}>
                  Portal Rekrutmen Terintegrasi SIMAK &bull; Yayasan Dar el-Iman
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (submitResult || Object.keys(answers).length === 0 || window.confirm('Tutup lembar tes? Jawaban yang belum tersimpan akan hilang.')) {
                  onClose();
                }
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Candidate Profile Pill & Progress */}
          {applicant && !submitResult && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '8px 12px',
                borderRadius: '10px',
                marginTop: '10px',
              }}
            >
              <div style={{ fontSize: '0.78rem' }}>
                Kandidat: <strong>{applicant.applicantName}</strong> &bull; Kode: <span style={{ fontFamily: 'monospace', color: '#f59e0b', fontWeight: 'bold' }}>{applicant.registrationCode}</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 'bold', color: isAllCompleted ? '#34d399' : '#f1d493' }}>
                {completedCount} dari {totalQuestions} Nomor Selesai ({progressPercent}%)
              </div>
            </div>
          )}

          {/* Progress bar line */}
          {!submitResult && (
            <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '2px', marginTop: '10px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${progressPercent}%`,
                  background: isAllCompleted ? '#10b981' : '#f59e0b',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '20px 24px', overflowY: 'auto', flex: 1 }}>
          {submitResult ? (
            /* Result Screen */
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: '#ecfdf5',
                  color: '#059669',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 4px 14px rgba(5, 150, 105, 0.2)',
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-title)', marginBottom: '8px' }}>
                Alhamdulillah, Tes DISC Anda Berhasil Disimpan!
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 20px' }}>
                Lembar jawaban tes kepribadian Anda telah diverifikasi oleh sistem dan otomatis terhubung ke akun Biro SDM Yayasan Dar el-Iman untuk tahapan seleksi berikutnya.
              </p>

              {/* Profile Card */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '20px',
                  maxWidth: '560px',
                  margin: '0 auto 24px',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Sparkles size={18} color="#d97706" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#92400e', textTransform: 'uppercase' }}>
                    Hasil Profil Kepribadian
                  </span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#047857', marginBottom: '8px' }}>
                  {submitResult.profile_label}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.5 }}>
                  {submitResult.personality_summary}
                </p>
              </div>

              <button
                onClick={onClose}
                style={{
                  background: 'var(--emerald-main)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 28px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(4, 120, 87, 0.25)',
                }}
              >
                Kembali ke Status Seleksi
              </button>
            </div>
          ) : (
            /* Active Test Mode */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Instructions Box */}
              <div
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <Info size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.78rem', color: '#166534', lineHeight: 1.45 }}>
                  <strong>Petunjuk Pengerjaan:</strong>
                  <ul style={{ paddingLeft: '16px', marginTop: '4px', marginBottm: 0 }}>
                    <li>Pilih <strong>[P]</strong> pada kalimat yang <strong>PALING</strong> menggambarkan diri Anda.</li>
                    <li>Pilih <strong>[K]</strong> pada kalimat yang <strong>PALING TIDAK (KURANG)</strong> menggambarkan diri Anda.</li>
                    <li>Tiap nomor hanya boleh memiliki <strong>1 pilihan [P]</strong> dan <strong>1 pilihan [K]</strong>.</li>
                  </ul>
                </div>
              </div>

              {/* Number Navigation Bar */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Daftar Nomor Soal (1 - 24):
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                    Klik nomor untuk berpindah soal
                  </span>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '6px',
                  }}
                >
                  {questions.map((q, idx) => {
                    const ans = answers[q.no];
                    const isDone = ans && ans.most !== null && ans.least !== null && ans.most !== ans.least;
                    const isActive = idx === activeQuestionIndex;

                    return (
                      <button
                        key={q.no}
                        type="button"
                        onClick={() => setActiveQuestionIndex(idx)}
                        style={{
                          aspectRatio: '1',
                          borderRadius: '8px',
                          border: isActive ? '2px solid #047857' : '1px solid #cbd5e1',
                          background: isActive
                            ? '#ecfdf5'
                            : isDone
                            ? '#10b981'
                            : '#ffffff',
                          color: isDone && !isActive ? '#ffffff' : isActive ? '#065f46' : '#64748b',
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          display: 'grid',
                          placeItems: 'center',
                          padding: 0,
                          transition: 'all 0.15s ease',
                          boxShadow: isActive ? '0 0 0 2px rgba(4, 120, 87, 0.2)' : 'none',
                        }}
                      >
                        {q.no}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Question Card */}
              <div
                style={{
                  background: '#ffffff',
                  border: '2px solid var(--border-card)',
                  borderRadius: '16px',
                  padding: '20px',
                  marginTop: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        background: 'var(--emerald-main)',
                        color: '#ffffff',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontWeight: 900,
                        fontSize: '0.85rem',
                      }}
                    >
                      Nomor {currentQ.no}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      dari 24 Butir Soal
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: currentAns.most !== null && currentAns.least !== null ? '#ecfdf5' : '#fffbeb',
                      color: currentAns.most !== null && currentAns.least !== null ? '#059669' : '#b45309',
                      border: currentAns.most !== null && currentAns.least !== null ? '1px solid #a7f3d0' : '1px solid #fde68a',
                    }}
                  >
                    {currentAns.most !== null && currentAns.least !== null ? 'Sudah Terisi Lengkap' : 'Belum Lengkap'}
                  </span>
                </div>

                {/* Matrix Table */}
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                      <th
                        style={{
                          width: '70px',
                          textAlign: 'center',
                          padding: '8px 4px',
                          fontSize: '0.78rem',
                          fontWeight: 900,
                          color: '#065f46',
                          background: '#ecfdf5',
                          borderRadius: '8px 0 0 0',
                        }}
                      >
                        [P]<br />
                        <span style={{ fontSize: '0.68rem', fontWeight: 600 }}>Paling</span>
                      </th>
                      <th
                        style={{
                          width: '70px',
                          textAlign: 'center',
                          padding: '8px 4px',
                          fontSize: '0.78rem',
                          fontWeight: 900,
                          color: '#991b1b',
                          background: '#fef2f2',
                        }}
                      >
                        [K]<br />
                        <span style={{ fontSize: '0.68rem', fontWeight: 600 }}>Kurang</span>
                      </th>
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '8px 12px',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          color: 'var(--text-title)',
                          background: '#f8fafc',
                          borderRadius: '0 8px 0 0',
                        }}
                      >
                        Pernyataan Perilaku / Karakter
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentQ.statements.map((st, sIdx) => {
                      const isMost = currentAns.most === sIdx;
                      const isLeast = currentAns.least === sIdx;

                      return (
                        <tr
                          key={sIdx}
                          style={{
                            borderBottom: '1px solid #e2e8f0',
                            background: isMost ? '#f0fdf4' : isLeast ? '#fef2f2' : '#ffffff',
                            transition: 'background 0.15s ease',
                          }}
                        >
                          {/* Radio P (Most) */}
                          <td
                            style={{
                              textAlign: 'center',
                              padding: '12px 4px',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleSelect(currentQ.no, 'most', sIdx)}
                          >
                            <input
                              type="radio"
                              name={`q_${currentQ.no}_p`}
                              checked={isMost}
                              onChange={() => handleSelect(currentQ.no, 'most', sIdx)}
                              style={{ width: '18px', height: '18px', accentColor: '#059669', cursor: 'pointer' }}
                            />
                          </td>

                          {/* Radio K (Least) */}
                          <td
                            style={{
                              textAlign: 'center',
                              padding: '12px 4px',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleSelect(currentQ.no, 'least', sIdx)}
                          >
                            <input
                              type="radio"
                              name={`q_${currentQ.no}_k`}
                              checked={isLeast}
                              onChange={() => handleSelect(currentQ.no, 'least', sIdx)}
                              style={{ width: '18px', height: '18px', accentColor: '#dc2626', cursor: 'pointer' }}
                            />
                          </td>

                          {/* Statement Text */}
                          <td
                            style={{
                              padding: '12px',
                              fontSize: '0.85rem',
                              fontWeight: isMost || isLeast ? 700 : 500,
                              color: isMost ? '#065f46' : isLeast ? '#991b1b' : 'var(--text-body)',
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              // If neither selected, default to Most on click
                              if (!isMost && !isLeast) {
                                handleSelect(currentQ.no, 'most', sIdx);
                              }
                            }}
                          >
                            {st.text}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Question Prev / Next Controls */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                  <button
                    type="button"
                    disabled={activeQuestionIndex === 0}
                    onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'none',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: activeQuestionIndex === 0 ? '#94a3b8' : 'var(--text-body)',
                      cursor: activeQuestionIndex === 0 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <ChevronLeft size={16} /> Sebelumnya
                  </button>

                  <button
                    type="button"
                    disabled={activeQuestionIndex === totalQuestions - 1}
                    onClick={() => setActiveQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'none',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: activeQuestionIndex === totalQuestions - 1 ? '#94a3b8' : 'var(--text-body)',
                      cursor: activeQuestionIndex === totalQuestions - 1 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    Berikutnya <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div
                  style={{
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    color: '#991b1b',
                  }}
                >
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer / Sticky Action Bar */}
        {!submitResult && (
          <div
            style={{
              background: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Status: <strong style={{ color: isAllCompleted ? '#059669' : '#b45309' }}>{completedCount} dari 24 soal terisi</strong>
              </div>
              <a
                href="https://docs.google.com/forms/d/1VUe96YlumNFOJLYwwRfedVKi1BuiqHHKBpY5MDnzQVQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.72rem',
                  color: '#64748b',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '2px',
                }}
              >
                Ada kendala? Gunakan Google Form Alternatif <ExternalLink size={11} />
              </a>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={onClose}
                disabled={submitting}
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#64748b',
                  cursor: 'pointer',
                }}
              >
                Tutup
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  background: isAllCompleted ? '#047857' : '#94a3b8',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 22px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  cursor: submitting ? 'wait' : isAllCompleted ? 'pointer' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: isAllCompleted ? '0 4px 12px rgba(4, 120, 87, 0.25)' : 'none',
                  transition: 'background 0.2s ease',
                }}
              >
                {submitting ? (
                  'Menganalisis & Menyimpan...'
                ) : isAllCompleted ? (
                  <>
                    <Send size={15} /> Kirim Lembar Jawaban DISC
                  </>
                ) : (
                  `Lengkapi ${totalQuestions - completedCount} Soal Lagi`
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
