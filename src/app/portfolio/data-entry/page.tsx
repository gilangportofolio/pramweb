'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DataEntryGallery from '../components/DataEntryGallery';

const sampleProjects = [
  {
    id: '1',
    title: 'Sistem Manajemen Inventaris',
    description: 'Pengembangan sistem manajemen inventaris menggunakan Google Sheets dengan formula kompleks dan automasi untuk tracking stok barang, pembelian, dan laporan bulanan.',
    image: '/portfolio/data-entry/inventory-system.webp',
    tools: ['Google Sheets', 'Apps Script', 'Data Validation'],
    category: 'spreadsheet' as const
  },
  {
    id: '2',
    title: 'Database Pelanggan CRM',
    description: 'Pembuatan dan pengelolaan database pelanggan menggunakan Microsoft Access dengan fitur tracking interaksi, history pembelian, dan analisis perilaku pelanggan.',
    image: '/portfolio/data-entry/crm-database.webp',
    tools: ['Microsoft Access', 'SQL', 'VBA'],
    category: 'database' as const
  },
  {
    id: '3',
    title: 'Dokumentasi SOP Perusahaan',
    description: 'Penyusunan dan digitalisasi Standard Operating Procedure (SOP) perusahaan menggunakan Microsoft Word dan sistem dokumentasi online.',
    image: '/portfolio/data-entry/sop-documentation.webp',
    tools: ['Microsoft Word', 'Document Management', 'Process Mapping'],
    category: 'documentation' as const
  },
  {
    id: '4',
    title: 'Sistem Payroll & Absensi',
    description: 'Pengembangan sistem penggajian dan absensi karyawan terintegrasi menggunakan Excel dengan fitur perhitungan otomatis dan laporan bulanan.',
    image: '/portfolio/data-entry/payroll-system.webp',
    tools: ['Microsoft Excel', 'VBA', 'Power Query'],
    category: 'spreadsheet' as const
  },
  {
    id: '5',
    title: 'Manajemen Proyek Database',
    description: 'Pembuatan sistem tracking proyek menggunakan MySQL dengan dashboard monitoring progress dan alokasi sumber daya.',
    image: '/portfolio/data-entry/project-management.webp',
    tools: ['MySQL', 'PHP', 'Project Management'],
    category: 'database' as const
  },
  {
    id: '6',
    title: 'Digital Filing System',
    description: 'Implementasi sistem pengarsipan digital untuk dokumen perusahaan dengan kategorisasi dan sistem pencarian yang efisien.',
    image: '/portfolio/data-entry/filing-system.webp',
    tools: ['Document Management', 'OCR', 'Digital Filing'],
    category: 'documentation' as const
  }
];

export default function DataEntryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(sampleProjects.length / projectsPerPage);

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="heading-gradient">Data Entry & Administrasi Portfolio</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kumpulan proyek data entry dan administrasi yang telah saya kerjakan. Setiap proyek menunjukkan ketelitian, 
              efisiensi, dan kemampuan dalam mengelola data serta tugas administratif.
            </p>
          </motion.div>

          <DataEntryGallery 
            projects={sampleProjects}
            currentPage={currentPage}
            projectsPerPage={projectsPerPage}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 