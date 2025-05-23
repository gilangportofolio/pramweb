'use client';

import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const socialMediaPortfolio = [
    {
      name: 'Instagram',
      username: '@gilang.pputraa',
      description: 'Konten branding, feed, reels, dan engagement untuk bisnis & personal.',
      url: 'https://www.instagram.com/gilang.pputraa',
      icon: '/assets/icons/instagram.svg',
    },
    {
      name: 'Instagram',
      username: '@ngemil.ml',
      description: 'Konten branding, feed, reels, dan engagement untuk bisnis.',
      url: 'https://www.instagram.com/ngemil.ml',
      icon: '/assets/icons/instagram.svg',
    },
    {
      name: 'Instagram',
      username: '@kknt_kutawaringin',
      description: 'Konten branding, feed, reels, dan engagement.',
      url: 'https://www.instagram.com/kknt_kutawaringin',
      icon: '/assets/icons/instagram.svg',
    },
    {
      name: 'TikTok',
      username: '@bnttgs.id',
      description: 'Video pendek, edukasi, hiburan, dan promosi produk.',
      url: 'https://www.tiktok.com/@bnttgs.id?is_from_webapp=1&sender_device=pc',
      icon: '/assets/icons/tiktok.svg',
    },
    {
      name: 'YouTube Edukasi',
      username: '@gilangportofolio',
      description: 'Channel edukasi, tutorial, dan tips seputar teknologi.',
      url: 'https://www.youtube.com/@gilangportofolio',
      icon: '/assets/icons/youtube.svg',
    },
    {
      name: 'YouTube Hiburan',
      username: '@pramdaily',
      description: 'Channel hiburan, vidio short brainrot, dan live streaming.',
      url: 'https://www.youtube.com/@pramdaily',
      icon: '/assets/icons/youtube.svg',
    },
    {
      name: 'LinkedIn',
      username: 'Gilang Pratama Putra',
      description: 'Personal branding, networking profesional, dan sharing insight.',
      url: 'https://www.linkedin.com/in/gilangpratamaputra/',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      username: '@PrammPutraa',
      description: 'Web3, airdrop, dan Crypto.',
      url: 'https://x.com/PrammPutraa',
      icon: FaTwitter,
    },
  ];

export default function SocialMediaShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {socialMediaPortfolio.map((item) => (
        <div key={item.name} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-md transition">
          <div className="mb-4 text-4xl text-blue-600">
            {typeof item.icon === 'string' ? (
              <Image src={item.icon} alt={item.name} width={48} height={48} />
            ) : (
              <item.icon />
            )}
          </div>
          <h3 className="text-lg font-bold mb-1">{item.name}</h3>
          <div className="text-sm text-gray-500 mb-2">{item.username}</div>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Kunjungi
          </a>
        </div>
      ))}
    </div>
  );
} 