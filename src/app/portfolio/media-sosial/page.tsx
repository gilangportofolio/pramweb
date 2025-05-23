'use client';

import { motion } from 'framer-motion';
import SocialMediaShowcase from '../components/SocialMediaShowcase';
export default function MediaSosialPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
              Manajemen Media Sosial
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcase portofolio pengelolaan dan pembuatan konten di berbagai platform media sosial. Klik pada setiap item untuk langsung menuju akun terkait.
            </p>
          </motion.div>
          <SocialMediaShowcase />
        </div>
      </section>
    </main>
  );
} 