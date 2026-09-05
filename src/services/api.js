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

  // Kirim lamaran pelamar baru langsung ke API SIMAK
  async submitApplication(formData) {
    try {
      const response = await api.post('/api/public/recruitment/apply', formData);
      return response.data;
    } catch (err) {
      console.error('Gagal mengirim berkas lamaran ke API:', err);
      const validationErrors = err.response?.data?.errors;
      let errMsg = err.response?.data?.message;
      if (validationErrors) {
        errMsg = Object.values(validationErrors).flat().join(', ');
      }
      throw new Error(errMsg || err.message || 'Gagal mengirim lamaran ke server SIMAK.');
    }
  },

  // Lacak status seleksi pelamar berdasarkan NIK / No. Registrasi / WA
  async trackStatus(identifier) {
    try {
      const response = await api.get(`/api/public/recruitment/track?query=${encodeURIComponent(identifier)}`);
      if (response.data && response.data.data) {
        return response.data.data;
      }
      throw new Error('Data lamaran tidak ditemukan.');
    } catch (err) {
      const msg = err.response?.data?.message || 'Data lamaran tidak ditemukan. Pastikan Anda sudah mendaftar formasi atau periksa kembali nomor yang Anda masukkan.';
      throw new Error(msg);
    }
  },
};

export default api;
