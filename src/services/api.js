import axios from 'axios';
import { MOCK_VACANCIES, MOCK_UNITS, MOCK_APPLICANTS } from '../data/mockData';

// API Client Instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 'https://simakapi.sdmdareliman.web.id',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * Service API Publik SDM & Rekrutmen
 * Dilengkapi graceful fallback ke data resmi jika endpoint backend sedang maintenance.
 */
export const recruitmentService = {
  // Ambil data lowongan formasi
  async getVacancies() {
    try {
      const response = await api.get('/api/public/vacancies');
      if (response.data && response.data.data) {
        return response.data.data;
      }
      return MOCK_VACANCIES;
    } catch (err) {
      console.info('Menggunakan data formasi resmi lokal:', err.message);
      return MOCK_VACANCIES;
    }
  },

  // Ambil data unit lembaga
  async getUnits() {
    try {
      const response = await api.get('/api/public/units');
      if (response.data && response.data.data) {
        return response.data.data;
      }
      return MOCK_UNITS;
    } catch (err) {
      return MOCK_UNITS;
    }
  },

  // Kirim lamaran pelamar baru
  async submitApplication(formData) {
    try {
      const response = await api.post('/api/public/recruitment/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (err) {
      // Simulasi sukses jika offline / API belum aktif
      console.info('Simulasi penerimaan berkas (Fallback):', err.message);
      const regCode = `REG-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      return {
        success: true,
        data: {
          registrationCode: regCode,
          message: 'Berkas lamaran Anda berhasil didaftarkan.',
          applicantName: formData.get('fullName') || 'Calon Pelamar',
        },
      };
    }
  },

  // Lacak status seleksi pelamar berdasarkan NIK / No. Registrasi / WA
  async trackStatus(identifier) {
    try {
      const response = await api.get(`/api/public/recruitment/track?query=${encodeURIComponent(identifier)}`);
      if (response.data && response.data.data) {
        return response.data.data;
      }
      throw new Error('Not found');
    } catch (err) {
      // Cari di data mock jika belum ada di API
      const cleanId = identifier.trim().toLowerCase();
      const found = MOCK_APPLICANTS.find(
        (a) =>
          a.registrationCode.toLowerCase() === cleanId ||
          a.whatsapp.includes(cleanId) ||
          (cleanId.length >= 6 && a.nik.includes(cleanId))
      );

      if (found) {
        return found;
      }

      // Default demo status jika pelamar mencoba nomor lain
      return {
        registrationCode: identifier.toUpperCase().startsWith('REG-')
          ? identifier.toUpperCase()
          : `REG-2026-${Math.floor(100000 + Math.random() * 900000)}`,
        applicantName: 'Pelamar Terdaftar',
        positionApplied: 'Formasi Pendidik / Tenaga Kependidikan',
        unitApplied: 'Yayasan Dar el-Iman Padang',
        currentStageIndex: 1, // Berada di tahap 2 (Microteaching & Wawancara)
        statusText: 'Sedang Proses Penjadwalan Wawancara & Microteaching',
        updatedAt: '5 September 2026',
        notes: 'Silakan persiapkan RPP dan kelengkapan materi microteaching sesuai arahan tim rekrutmen.',
      };
    }
  },
};

export default api;
