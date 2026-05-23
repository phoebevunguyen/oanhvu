'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, Film, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const links = {
    zalo: 'https://zalo.me/84935152593',
    facebook: 'https://www.facebook.com/phoebevunguyen/',
    phone: 'tel:+84935152593',
    email: 'mailto:phoebe.vunguyen@gmail.com',
    linkedin: 'https://www.linkedin.com/in/phoebevunguyen/',
    imdb: 'https://www.imdb.com/name/nm18321750/?ref_=tt_ov_2_1',
  };

  // Custom SVG icon for LinkedIn
  const LinkedinIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  // Custom SVG icon for Zalo
  const ZaloIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 12.63c-.15.42-.45.72-.88.88-.42.15-.88.15-1.32.15H9.56c-.44 0-.9 0-1.32-.15-.43-.16-.73-.46-.88-.88-.15-.42-.15-.88-.15-1.32V9.32c0-.44 0-.9.15-1.32.16-.43.46-.73.88-.88.42-.15.88-.15 1.32-.15h5.88c.44 0 .9 0 1.32.15.43.16.73.46.88.88.15.42.15.88.15 1.32v4.06c0 .44 0 .9-.15 1.32zm-2.83-5.26h-2.9v1.07h2.62v1.04h-2.62v1.1h2.95v1.08h-4.04V8.29h4.03v1.08z" />
    </svg>
  );

  // Custom SVG icon for Facebook
  const FacebookIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const socialButtons = [
    {
      name: t.contact.linkedin,
      icon: <LinkedinIcon />,
      url: links.linkedin,
      color: 'bg-slate-50 hover:bg-sky-50 border-slate-100 hover:border-sky-200 text-slate-700 hover:text-sky-600',
    },
    {
      name: t.contact.imdb,
      icon: <Film size={18} />,
      url: links.imdb,
      color: 'bg-slate-50 hover:bg-amber-50 border-slate-100 hover:border-amber-200 text-slate-700 hover:text-amber-600',
    },
    {
      name: t.contact.facebook,
      icon: <FacebookIcon />,
      url: links.facebook,
      color: 'bg-slate-50 hover:bg-blue-50 border-slate-100 hover:border-blue-200 text-slate-700 hover:text-blue-600',
    },
    {
      name: t.contact.zalo,
      icon: <ZaloIcon />,
      url: links.zalo,
      color: 'bg-slate-50 hover:bg-blue-50 border-slate-100 hover:border-blue-200 text-slate-700 hover:text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Pastel decorative glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pastel-pink/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-slate-50/50 border border-slate-100 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Subtle grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Area: Call to action with dynamic avatar placeholder */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-4">
                {/* Small circular profile picture */}
                <div className="relative w-16 h-16 shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-pastel-pink to-pastel-blue rounded-full rotate-6 -z-10" />
                  <div className="w-full h-full bg-slate-100 border-2 border-white rounded-full shadow-md overflow-hidden relative">
                    <img 
                      src="/images/Contactsection-avatar.JPG" 
                      alt="Vũ Nguyễn Hoàng Oanh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-medium text-slate-800 text-base leading-none">VŨ NGUYỄN HOÀNG OANH</h4>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent-pink mt-1.5 block">
                    {t.hero.role}
                  </span>
                </div>
              </div>

              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-slate-800 tracking-tight leading-[1.15]">
                {t.contact.title}
              </h2>
            </div>

            {/* Right Area: Clean connection button layout */}
            <div className="lg:col-span-6 space-y-4">
              {/* Phone Button - Full Row */}
              <motion.a
                href={links.phone}
                className="flex items-center space-x-4 p-4 rounded-2xl border transition-all duration-300 group cursor-pointer shadow-3xs hover:shadow-xs bg-slate-50 hover:bg-emerald-50 border-slate-100 hover:border-emerald-200 text-slate-700 hover:text-emerald-600"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-2.5 bg-white rounded-xl shadow-3xs group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Phone size={20} className="stroke-[2px]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500 mb-0.5">
                    {t.contact.phone}
                  </span>
                  <span className="text-sm md:text-base font-semibold tracking-wide truncate">
                    (+84) 935 152 593
                  </span>
                </div>
              </motion.a>

              {/* Email Button - Full Row */}
              <motion.a
                href={links.email}
                className="flex items-center space-x-4 p-4 rounded-2xl border transition-all duration-300 group cursor-pointer shadow-3xs hover:shadow-xs bg-slate-50 hover:bg-rose-50 border-slate-100 hover:border-rose-200 text-slate-700 hover:text-rose-600"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-2.5 bg-white rounded-xl shadow-3xs group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Mail size={20} className="stroke-[2px]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-500 mb-0.5">
                    {t.contact.email}
                  </span>
                  <span className="text-sm md:text-base font-semibold tracking-wide truncate">
                    phoebe.vunguyen@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* Social Buttons - 4 in one row */}
              <div className="grid grid-cols-4 gap-3">
                {socialButtons.map((btn, index) => (
                  <motion.a
                    key={index}
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 group cursor-pointer shadow-3xs hover:shadow-xs ${btn.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-2 bg-white rounded-xl shadow-3xs group-hover:scale-110 transition-transform duration-300 mb-1.5">
                      {btn.icon}
                    </div>
                    <span className="text-[9px] md:text-xs font-semibold tracking-wide uppercase truncate">
                      {btn.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer info & copyrights */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-20 pt-8 border-t border-slate-100 text-xs text-slate-400 font-semibold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Vũ Nguyễn Hoàng Oanh. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center space-x-1">
            <span>Crafted with</span>
            <span className="text-accent-pink animate-pulse">❤️</span>
            <span>in Ho Chi Minh City</span>
          </p>
        </div>
      </div>
    </section>
  );
}
