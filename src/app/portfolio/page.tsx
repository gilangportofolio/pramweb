'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';
import portfolioData from '@/app/data/portfolio.json';

export default function PortfolioPage() {
  const { language } = useLanguage();
  const translations = portfolioData[language];

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
              <span className="heading-gradient">{translations.title}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {translations.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {translations.categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={category.href} className="block group">
                  <div className={`bg-gradient-to-br ${category.color} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}>
                    <div className="relative h-64">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {category.title}
                        </h2>
                        <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                          {category.count}
                        </span>
                      </div>
                      <p className="text-gray-600">{category.description}</p>
                      <div className="mt-4 flex items-center text-blue-600 font-medium">
                        <span className="group-hover:underline">{category.viewDetails}</span>
                        <svg 
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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