'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MasonryGallery from '../components/MasonryGallery';

interface ImageData {
  src: string;
  width: number;
  height: number;
  format: 'webp' | 'svg' | 'png';
}

export default function DesignGrafisPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Fungsi untuk mendeteksi format file
        const getFormat = (filename: string): 'webp' | 'svg' | 'png' => {
          const ext = filename.split('.').pop()?.toLowerCase();
          if (ext === 'webp') return 'webp';
          if (ext === 'svg') return 'svg';
          return 'png';
        };

        // Fungsi untuk memuat dan memvalidasi gambar
        const loadImage = (src: string): Promise<ImageData | null> => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                src,
                width: img.naturalWidth,
                height: img.naturalHeight,
                format: getFormat(src)
              });
            };
            img.onerror = () => resolve(null);
            img.src = src;
          });
        };

        // Mencoba memuat semua gambar dari folder
        const imagePromises = [];
        const graphicsPath = '/portfolio/graphic-design';
        
        // Scan folder untuk file yang ada
        for (let i = 1; i <= 100; i++) {
          imagePromises.push(
            loadImage(`${graphicsPath}/image${i}.webp`),
            loadImage(`${graphicsPath}/design${i}.png`),
            loadImage(`${graphicsPath}/logo${i}.svg`)
          );
        }

        // Filter gambar yang berhasil dimuat
        const loadedImages = (await Promise.all(imagePromises))
          .filter((img): img is ImageData => img !== null)
          .sort((a, b) => {
            // Urutkan berdasarkan nomor file
            const getNumber = (src: string) => 
              parseInt(src.match(/\d+/)?.[0] || '0');
            return getNumber(a.src) - getNumber(b.src);
          });

        setImages(loadedImages);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Ubah jumlah gambar per halaman menjadi 14
  const imagesPerPage = 14;
  const totalPages = Math.ceil(images.length / imagesPerPage);

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
              <span className="heading-gradient">Desain Grafis Portfolio</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kumpulan karya desain grafis yang telah saya buat. Setiap desain mencerminkan kreativitas dan detail yang teliti.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              <MasonryGallery 
                images={images} 
                currentPage={currentPage} 
                imagesPerPage={imagesPerPage}
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
            </>
          )}
        </div>
      </section>
    </main>
  );
} 