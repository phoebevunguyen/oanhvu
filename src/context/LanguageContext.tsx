'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, TranslationSchema, ExperienceItem, ProjectItem, AwardItem, CourseItem } from '../data/data';

type Language = 'vn' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  awardsList: AwardItem[];
  coursesList: CourseItem[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vn'); // default to Vietnamese as requested

  // Load saved preference if any
  useEffect(() => {
    const saved = localStorage.getItem('phoebe_portfolio_lang') as Language;
    if (saved === 'vn' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('phoebe_portfolio_lang', lang);
  };

  const toggleLanguage = () => {
    const next: Language = language === 'vn' ? 'en' : 'vn';
    setLanguage(next);
  };

  const currentContent = content[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        t: currentContent,
        experiences: currentContent.experiences,
        projects: currentContent.projects,
        awardsList: currentContent.awardsList,
        coursesList: currentContent.coursesList,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
