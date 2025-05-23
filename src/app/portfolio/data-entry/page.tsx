'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';

const layanan = [
  {
    kategori: "Data Entry & Administrasi Umum",
    items: [
      "Pengetikan format jadwal trip (Word & PDF, siap cetak)",
      "Pengetikan format jadwal kunjungan perusahaan (Word, Excel, PDF)",
    ],
  },
  {
    kategori: "Asistensi Penulisan Naskah Dinas – Instansi Pemerintah",
    items: [
      "Riset data dari dokumen PDF dan PowerPoint",
      "Analisis berdasarkan data lapangan dan riset sebelumnya",
      "Penyusunan manajemen risiko dengan pendekatan SWOT",
    ],
  },
  {
    kategori: "Asistensi Akademik",
    items: [
      "Revisi Skripsi – Fakultas Manajemen & FEB (Word, Excel, PowerPoint, PDF, screenshot SPSS)",
      "Penulisan Skripsi – Fakultas Ilmu Komunikasi (FIKOM) (Word, Excel, transkrip video, notulen, PowerPoint, PDF)",
      "Skripsi & Jurnal – Fakultas Teknik (Word, Excel, PDF, PowerPoint, aplikasi berbasis website & desktop: XAMPP & SQL Server)",
      "Perapihan Tesis – Fakultas Manajemen Pemerintahan (Word & PDF)",
    ],
  },
  {
    kategori: "Layanan untuk Instansi Kesehatan",
    items: [
      "Rekap data tenaga medis (dokter & perawat) dalam format Excel & PDF",
    ],
  },
  {
    kategori: "Layanan Penulisan Pendidikan",
    items: [
      "Pembuatan makalah tingkat SD hingga SMA sesuai kurikulum (Word & PDF)",
    ],
  },
  {
    kategori: "Administrasi Sosial & Kegiatan Keagamaan",
    items: [
      "Format pendataan administrasi masjid untuk Idul Adha & Idul Fitri (Word & PDF)",
    ],
  },
  {
    kategori: "Dokumen Penawaran & Legalitas",
    items: [
      "Surat penawaran harga (proyek sumur bor & pembuatan halte)",
      "Pengetikan ulang draft aset kepemilikan untuk keperluan administrasi",
    ],
  },
  {
    kategori: "Acara & Kinerja",
    items: [
      "Surat acara seminar, siap cetak & distribusi (Word & PDF)",
      "Laporan kinerja dosen: pengumpulan data, penyusunan ringkasan, perapihan format (Word, Google Docs, Spreadsheet)",
    ],
  },
];

export default function DataEntryPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                <FaCheckCircle className="text-blue-500" /> Privasi & Kerahasiaan Terjamin
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 heading-gradient">
              Daftar Layanan Data Entry & Administrasi
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Berikut adalah beberapa layanan yang telah saya kerjakan untuk klien dari berbagai sektor. Detail data dan dokumen klien dijaga kerahasiaannya, namun Anda dapat melihat ragam solusi yang saya tawarkan.
            </p>
          </motion.div>

          {/* Accordion Layanan */}
          <div className="space-y-3">
            {layanan.map((lay, idx) => (
              <div key={lay.kategori} className="bg-white rounded-lg shadow p-0 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 focus:outline-none group hover:bg-blue-50 transition"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIdx === idx}
                  aria-controls={`accordion-content-${idx}`}
                >
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-base font-semibold text-blue-700 group-hover:underline">
                      {lay.kategori}
                    </span>
                  </div>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      id={`accordion-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-4"
                    >
                      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                        {lay.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow font-semibold text-base hover:bg-blue-700 transition"
            >
              Ingin konsultasi atau butuh layanan serupa? <span className="underline">Hubungi saya sekarang!</span>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 