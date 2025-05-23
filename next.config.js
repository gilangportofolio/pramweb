/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['images.unsplash.com'],
    // Optimasi gambar
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  // Mengaktifkan optimasi bundle
  swcMinify: true,
  // Mengaktifkan optimasi font
  optimizeFonts: true,
  // Mengaktifkan compression
  compress: true,
  // Mengaktifkan Progressive Web App
  experimental: {
    appDir: true,
  },
  // Cache policy
  headers: async () => {
    return [
      {
        source: '/portfolio/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 