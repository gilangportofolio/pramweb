'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageData {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  format: 'webp' | 'svg' | 'png';
}

interface MasonryGalleryProps {
  images: ImageData[];
  currentPage: number;
  imagesPerPage: number;
}

const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        onClick={onClose}
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
        <Image
          src={src}
          alt="Enlarged design"
          fill
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
          loading="eager"
          quality={90}
        />
      </div>
    </motion.div>
  );
};

export default function MasonryGallery({ images, currentPage, imagesPerPage }: MasonryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const displayedImages = images.slice(startIndex, startIndex + imagesPerPage);

  const getImageQuality = (format: string) => {
    switch (format) {
      case 'webp':
        return 80;
      case 'png':
        return 85;
      case 'svg':
        return 100;
      default:
        return 75;
    }
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
        {displayedImages.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid"
          >
            <div
              className="relative group cursor-zoom-in overflow-hidden rounded-lg"
              style={{
                paddingTop: `${(image.height / image.width) * 100}%`,
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={`Design ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={getImageQuality(image.format)}
                loading="lazy"
                placeholder={image.blurDataURL ? "blur" : "empty"}
                blurDataURL={image.blurDataURL}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </>
  );
} 