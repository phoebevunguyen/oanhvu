'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';


export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-0 w-48 h-48 rounded-full bg-pastel-green/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Placeholder */}
          <motion.div 
            className="lg:col-span-5 order-last lg:order-first flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[340px] aspect-[3/4]">
              {/* Minimalist offset border frame */}
              <div className="absolute top-4 left-4 -inset-0 border border-slate-200/80 -z-10 animate-pulse duration-[6000ms]" />
              
              {/* Picture */}
              <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden relative group">
                <img 
                  src="/images/Aboutmesection.JPG" 
                  alt="Vũ Nguyễn Hoàng Oanh" 
                  className="w-full h-full object-cover absolute inset-0 filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Info */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center space-x-3">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-800 tracking-tight">
                {t.about.title}
              </h2>
              <div className="h-[2px] w-16 bg-gradient-to-r from-accent-pink to-transparent" />
            </div>

            {/* Paragraphs */}
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              {t.about.p1}
            </p>

            {t.about.p2 && (
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t.about.p2}
              </p>
            )}

            {t.about.p3 && (
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t.about.p3}
              </p>
            )}



          </motion.div>
        </div>
      </div>
    </section>
  );
}
