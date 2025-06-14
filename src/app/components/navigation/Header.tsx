'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/context/LanguageContext';
import { IndonesianFlag, BritishFlag } from '@/app/components/icons/Flags';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/#about' },
  { name: 'services', href: '/#layanan' },
  { name: 'howToOrder', href: '/#cara-order' },
  { name: 'portfolio', href: '/portfolio' },
  { name: 'testimonials', href: '/#testimonials' },
  { name: 'connect', href: '/#connect-with-me' },
];

const languageOptions = {
  id: {
    flag: IndonesianFlag,
    label: 'ID'
  },
  en: {
    flag: BritishFlag,
    label: 'EN'
  }
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState('');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.slice(1));
    };

    setCurrentHash(window.location.hash.slice(1));
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/' && href.slice(2) === currentHash;
    return pathname.startsWith(href);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const LanguageButton = ({ className = '' }: { className?: string }) => {
    const Flag = languageOptions[language].flag;
    return (
      <button
        onClick={toggleLanguage}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/90 hover:bg-white border border-gray-200 transition-colors ${className}`}
        aria-label={`Change language to ${language === 'id' ? 'English' : 'Indonesian'}`}
      >
        <Flag className="rounded-sm shadow-sm" />
        <span className="text-sm font-medium text-gray-700">
          {languageOptions[language].label}
        </span>
      </button>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/"
            className="text-xl font-bold heading-gradient"
          >
            {t('header', 'logo')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('header', 'nav', item.name)}
              </Link>
            ))}
            <LanguageButton />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container py-4"> 
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('header', 'nav', item.name)}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 