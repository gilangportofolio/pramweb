'use client';

import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { BsRobot } from 'react-icons/bs';

interface CounterProps {
  value: string;
  label: string;
}

// Counter component dengan design yang lebih modern
const Counter = ({ value, label }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const finalValue = parseInt(value.replace(/\+/g, ''));
      const animation = animate(count, finalValue, {
        duration: 2,
        ease: "easeOut",
      });

      return animation.stop;
    }
  }, [isInView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 text-center transform hover:-translate-y-1">
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 flex items-center justify-center">
          <motion.span>{rounded}</motion.span>
          <span className="ml-1">+</span>
        </div>
        <div className="text-sm md:text-base text-gray-600 font-medium">{label}</div>
      </div>
    </motion.div>
  );
};

const stats = [
  { label: 'Tahun Pengalaman', value: '5+' },
  { label: 'Proyek Selesai', value: '5000+' },
  { label: 'Klien', value: '1000+' },
  { label: 'Teknologi', value: '20+' },
];

const skillCategories = [
  {
    title: 'Desain & Konten',
    description: 'Tools dan platform untuk menciptakan konten visual yang menarik',
    skills: [
      { name: 'Canva', iconPath: '/assets/icons/canva.svg' },
      { name: 'CapCut', iconPath: '/assets/icons/capcut.svg' },
      { name: 'draw.io', iconPath: '/assets/icons/drawio.svg' },
      { name: 'Kling AI', icon: BsRobot },
      { name: 'Dremina AI', icon: BsRobot },
      { name: 'Eleven Labs', icon: BsRobot },
    ],
  },
  {
    title: 'Administrasi & Data',
    description: 'Aplikasi untuk pengelolaan data dan dokumen profesional',
    skills: [
      { name: 'Microsoft Word', iconPath: '/assets/icons/word.svg' },
      { name: 'Microsoft Excel', iconPath: '/assets/icons/excel.svg' },
      { name: 'Microsoft PowerPoint', iconPath: '/assets/icons/powerpoint.svg' },
      { name: 'Google Sheets', iconPath: '/assets/icons/sheets.svg' },
      { name: 'Google Docs', iconPath: '/assets/icons/docs.svg' },
    ],
  },
  {
    title: 'Riset & Support',
    description: 'Platform AI dan tools untuk riset dan dukungan pelanggan',
    skills: [
      { name: 'ChatGPT', icon: BsRobot },
      { name: 'Gemini AI', icon: BsRobot },
      { name: 'Google Forms', iconPath: '/assets/icons/google-forms.svg' },
      { name: 'WhatsApp', iconPath: '/assets/icons/whatsapp.svg' },
      { name: 'Mendeley', iconPath: '/assets/icons/mendeley.svg' },
    ],
  },
  {
    title: 'Platform & Tools',
    description: 'Marketplace dan tools untuk manajemen proyek',
    skills: [
      { name: 'Shopee', iconPath: '/assets/icons/shopee.svg' },
      { name: 'Tokopedia', iconPath: '/assets/icons/Tokopedia.svg' },
      { name: 'Trello', iconPath: '/assets/icons/trello.svg' },
      { name: 'Discord', iconPath: '/assets/icons/discord.svg' },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="heading-gradient">Tentang Saya</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Saya adalah seorang Virtual Assistant yang berdedikasi membantu klien dari berbagai latar belakang — mulai dari akademik, UMKM, hingga pemilik bisnis online — untuk mengelola tugas digital secara efisien dan fleksibel.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4">
            Kalian bisa memanggil saya pram, dengan pengalaman lebih dari 5 tahun, saya telah menyelesaikan berbagai proyek yang mencakup desain konten, entry data, riset, layanan pelanggan, hingga manajemen konten digital. Semua dilakukan dengan pendekatan yang ramah, profesional, dan tepat waktu.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="heading-gradient">Keahlian & Tools</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-blue-600 mb-2">
                  {category.title}
                </h4>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300 mb-3">
                        {skill.icon ? (
                          <skill.icon className="w-7 h-7 text-blue-600" />
                        ) : (
                          <Image
                            src={skill.iconPath}
                            alt={skill.name}
                            width={48}
                            height={48}
                            className="text-blue-600"
                          />
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-600 text-center group-hover:text-blue-600 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 