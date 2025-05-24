'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import testimonialsData from '@/app/data/testimonials.json';

const INITIAL_DISPLAY_COUNT = 6;

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const LinkButton = ({ link, linkType }: { link: string; linkType: string }) => {
  if (!link || !linkType) return null;

  const getLinkText = () => {
    switch (linkType) {
      case 'instagram':
        return 'Kunjungi Instagram';
      case 'facebook':
        return 'Kunjungi Facebook';
      case 'website':
        return 'Kunjungi Website';
      case 'x':
        return 'Kunjungi X';
      default:
        return 'Kunjungi Link';
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors"
    >
      {getLinkText()}
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
};

export default function Testimonials() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const displayedTestimonials = showAll 
    ? testimonialsData.testimonials 
    : testimonialsData.testimonials.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
  <span className="heading-gradient">Partner & Testimonials</span>
</h2>
<p className="text-lg text-gray-600 max-w-3xl mx-auto">
  Berikut adalah sebagian testimoni nyata dari rekan kerja dan klien yang pernah menggunakan layanan kami — mulai dari kolaborasi jangka panjang hingga kebutuhan praktis harian. 
  Tidak semua proyek atau klien kami memiliki testimoni yang dipublikasikan, namun kami berterima kasih kepada mereka yang bersedia berbagi pengalamannya. 
  Anda juga dapat melihat ulasan lainnya melalui halaman <a href="https://www.google.com/maps/place/Gilang+Portofolio/@-6.9200132,107.7200408,17z/data=!4m8!3m7!1s0x2e68dd0c84320b87:0x8b0256f10962726b!8m2!3d-6.9200132!4d107.7226157!9m1!1b1!16s%2Fg%2F11ppyrb2wd?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Maps kami</a>.
</p>


        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-200 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
                <p className="text-lg text-gray-600 mb-2">{testimonial.role}</p>
                <StarRating rating={testimonial.rating} />
                <div className="relative w-full">
                  <p className={`mt-3 text-gray-700 text-lg italic ${expandedId !== testimonial.name ? 'line-clamp-3' : ''}`}>
                    "{testimonial.content}"
                  </p>
                  {testimonial.content.length > 150 && (
                    <button
                      onClick={() => toggleExpand(testimonial.name)}
                      className="text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
                    >
                      {expandedId === testimonial.name ? 'Tutup' : 'Baca Selengkapnya'}
                    </button>
                  )}
                </div>
                {testimonial.link && testimonial.linkType && (
                  <LinkButton link={testimonial.link} linkType={testimonial.linkType} />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {testimonialsData.testimonials.length > INITIAL_DISPLAY_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAll ? 'Tampilkan Sedikit' : 'Lihat Semua Testimonial'}
              <svg
                className={`w-5 h-5 ml-2 transform transition-transform ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 