'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '@/app/context/LanguageContext';
import dataEntryData from '@/app/data/data-entry.json';

export default function DataEntryPage() {
  const { language } = useLanguage();
  const translations = dataEntryData[language];
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
                <FaCheckCircle className="text-blue-500" /> {translations.privacyBadge}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 heading-gradient">
              {translations.title}
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              {translations.description}
            </p>
          </motion.div>

          {/* Accordion Layanan */}
          <div className="space-y-3">
            {translations.categories.map((category, idx) => (
              <div key={category.title} className="bg-white rounded-lg shadow p-0 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 focus:outline-none group hover:bg-blue-50 transition"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIdx === idx}
                  aria-controls={`accordion-content-${idx}`}
                >
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-base font-semibold text-blue-700 group-hover:underline">
                      {category.title}
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
                        {category.items.map((item, i) => (
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
              <a
                href="https://wa.me/62895375455587?text=Halo%20Kak%20Gilang%2C%0A%0ASaya%20tertarik%20dengan%20layanan%20Virtual%20Assistant%20yang%20ditawarkan%20di%20website%20Anda.%20Saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20project%20saya.%0A%0ATerima%20kasih."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                {translations.cta.text} <span className="underline">{translations.cta.link}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 