'use client';

import React, { createContext, useContext, useState } from 'react';
import headerTranslations from '../data/header.json';
import heroTranslations from '../data/hero.json';
import testimonialsData from '../data/testimonials.json';

type Language = 'id' | 'en';

type TranslationType = {
  [key in Language]: {
    [key: string]: string | { [key: string]: string }
  }
};

type Testimonial = {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  link: string;
  linkType: string;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: 'header' | 'hero', key: string, nested?: string) => string;
  getTestimonials: () => Testimonial[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (section: 'header' | 'hero', key: string, nested?: string): string => {
    try {
      const translations = section === 'header' ? headerTranslations : heroTranslations;
      const translation = (translations as TranslationType)[language];
      
      if (nested && typeof translation[key] === 'object') {
        return (translation[key] as { [key: string]: string })[nested] || key;
      }
      return (translation[key] as string) || key;
    } catch (error) {
      return key;
    }
  };

  const getTestimonials = (): Testimonial[] => {
    return testimonialsData[language].testimonials;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getTestimonials }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 