'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const portfolioCategories = [
  {
    title: 'Desain Grafis',
    description: 'Kumpulan karya desain grafis kreatif mencakup poster, banner, dan materi visual lainnya.',
    image: '/portfolio/thumbnail-design.png',
    href: '/portfolio/design-grafis',
    count: '14+ Proyek'
  },
  {
    title: 'Data Entry & Administrasi',
    description: 'Proyek-proyek pengelolaan data dan administrasi menggunakan berbagai tools dan sistem.',
    image: '/portfolio/thumbnail-data.png',
    href: '/portfolio/data-entry',
    count: '6+ Proyek'
  },
  {
    title: 'Manajemen Media Sosial',
    description: 'Showcase pengelolaan akun, pembuatan konten, dan strategi media sosial di berbagai platform.',
    image: '/portfolio/thumbnail-sosmed.png',
    href: '/portfolio/media-sosial',
    count: '7+ Akun'
  }
];

export default function PortfolioPage() {
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
              <span className="heading-gradient">PORTFOLIO</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kumpulan hasil karya dan proyek yang telah saya kerjakan. Pilih kategori di bawah untuk melihat detail portfolio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={category.href} className="block group">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-semibold">{category.title}</h2>
                        <span className="text-sm text-blue-600">{category.count}</span>
                      </div>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 