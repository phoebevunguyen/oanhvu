'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position to apply shadow & border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.awards, href: '#awards' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const cvLink = "https://drive.google.com/file/d/12kDLry47TDp5pkVlEbK5WI5QgEZbvzDe/view?usp=sharing";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 border-b border-slate-100 shadow-xs backdrop-blur-premium py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a href="#" className="flex flex-col">
          <span className="font-heading text-lg md:text-xl font-bold tracking-wider text-slate-800 leading-none">
            {language === 'vn' ? 'HoangOanh' : 'Phoebe'}
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-accent-pink transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-pink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action buttons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* CV Download Button */}
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer"
          >
            <FileText size={14} />
            <span>{t.nav.downloadCv}</span>
          </a>

          {/* Animated Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="relative flex items-center bg-slate-100 rounded-full p-1 w-[72px] h-8 cursor-pointer overflow-hidden border border-slate-200"
            aria-label="Toggle language"
          >
            <motion.div
              className="absolute top-1 bottom-1 w-[32px] bg-white rounded-full shadow-xs"
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                left: language === 'vn' ? '4px' : '34px',
              }}
            />
            <span className="z-10 w-1/2 text-center text-[10px] font-bold text-slate-700 pointer-events-none select-none">
              VN
            </span>
            <span className="z-10 w-1/2 text-center text-[10px] font-bold text-slate-700 pointer-events-none select-none">
              EN
            </span>
          </button>
        </div>

        {/* Mobile Menu & Language Toggles */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Language Switcher (simple pill) */}
          <button
            onClick={toggleLanguage}
            className="bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full cursor-pointer"
          >
            {language === 'vn' ? 'EN' : 'VN'}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-800 focus:outline-hidden p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg backdrop-blur-premium"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 hover:text-accent-pink transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-slate-100" />
              {/* Mobile Download CV */}
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
              >
                <FileText size={16} />
                <span>{t.nav.downloadCv}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
