'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-radial from-slate-50 via-white to-white">
      {/* Decorative Pastel Background Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-pastel-pink/40 blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-pastel-blue/45 blur-3xl -z-10 animate-pulse duration-[6000ms]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <motion.div 
          className="lg:col-span-8 flex flex-col space-y-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3.25rem] 2xl:text-[4rem] font-semibold tracking-tight text-slate-800 leading-[1.1]">
            <span className="block">{t.hero.title}</span>
          </h1>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-pastel-pink/50 border border-pastel-pink text-slate-800 px-4 py-1.5 rounded-full w-fit">
            <Sparkles size={14} className="text-accent-pink animate-spin duration-[4000ms]" />
            <span className="text-xs font-bold uppercase tracking-widest font-heading">
              {t.hero.role}
            </span>
          </div>

          {/* Quote Panel */}
          <div className="relative border-l-4 border-pastel-pink pl-6 py-2 my-2">
            <p className="text-slate-600 text-lg md:text-xl font-light italic leading-relaxed">
              {t.hero.quote}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="group flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="flex items-center justify-center border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-6 py-3.5 rounded-full hover:bg-slate-50 transition-all cursor-pointer"
            >
              {t.nav.portfolio}
            </a>
          </div>
        </motion.div>

        {/* Profile Image Placeholder with Creative Borders */}
        <motion.div 
          className="lg:col-span-4 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-full lg:max-w-[340px] lg:aspect-square">
            {/* Minimalist offset border frame */}
            <div className="absolute top-4 left-4 -inset-0 border border-slate-200/80 -z-10 animate-pulse duration-[5000ms]" />
            
            {/* The main picture */}
            <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden relative group">
              <img 
                src="/images/Herosection.JPG" 
                alt={t.hero.title} 
                className="w-full h-full object-cover absolute inset-0 filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
