'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/gilangportofolio',
    iconPath: '/assets/icons/github.svg'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gilangpratamaputra/',
    iconPath: '/assets/icons/linkedin.svg'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/gilang.pputraa',
    iconPath: '/assets/icons/instagram.svg'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@akunputraaa',
    iconPath: '/assets/icons/tiktok.svg'
  },
  {
    name: 'Youtube Edukasi',
    href: 'https://www.youtube.com/@gilangportofolio',
    iconPath: '/assets/icons/youtube.svg'
  },
  {
    name: 'Youtube Hiburan',
    href: 'https://www.youtube.com/@pramdaily',
    iconPath: '/assets/icons/youtube.svg'
  }
];

const trustPoints = [
  {
    title: "Kepuasan Anda Prioritas Utama",
    description: "Saya berkomitmen memberikan layanan terbaik untuk memastikan kepuasan setiap klien."
  },
  {
    title: "Kerahasiaan Terjamin",
    description: "Privasi dan keamanan data klien adalah hal yang sangat saya junjung tinggi."
  },
  {
    title: "Tanggung Jawab Penuh",
    description: "Setiap proyek dikerjakan dengan dedikasi penuh hingga selesai dengan sempurna."
  }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="connect-with-me" className="bg-gradient-to-b from-blue-100/75 to-indigo-100/75">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Trust Points */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="#home" className="inline-block">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold heading-gradient">
                  GILANG PORTOFOLIO
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  "Ringankan beban teknis Anda dan fokus pada pertumbuhan. Biarkan saya membantu mewujudkan visi Anda dengan solusi yang profesional dan tepat guna."
                </p>
              </div>
            </Link>

            <div className="space-y-6">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{point.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              {['About', 'Layanan', 'Cara Order'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6">Hubungi Saya</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">gilang.portofolioo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-gray-600">+62 895 3754 55587 (Chat only)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Lokasi</h4>
                  <p className="text-gray-600">Bandung, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-6">Connect with me</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={item.iconPath}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="text-blue-600"
                      />
                    </div>
                    <span className="text-xs text-gray-600 text-center mt-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t text-center">
          <p className="text-gray-600">&copy; {year} Gilang Portofolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 