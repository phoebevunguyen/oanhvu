'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExperienceItem, ProjectItem } from '@/data/data';
import { motion } from 'framer-motion';
import { X, ExternalLink, Calendar, Briefcase, Award, Film, Play, Info } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ExperienceItem | ProjectItem | null;
}

export default function DetailModal({ isOpen, onClose, item }: DetailModalProps) {
  const { t } = useLanguage();

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock body scroll when open
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  // Type Guards to differentiate items
  const isProject = (object: any): object is ProjectItem => {
    return 'category' in object;
  };

  const isExperience = (object: any): object is ExperienceItem => {
    return 'details' in object;
  };

  // Helper to render platform buttons
  const renderLinkButton = (url: string, label: string, platform: string) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-full transition-all cursor-pointer"
      >
        <span>{label} ({platform})</span>
        <ExternalLink size={12} />
      </a>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop with blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
      >
        {/* Header Ribbon / Gradient accent */}
        <div className="h-2 w-full bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-blue" />

        {/* Dismiss Button (Top-Right X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 p-2.5 rounded-full transition-colors z-20 cursor-pointer"
          aria-label={t.modal.close}
        >
          <X size={18} />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 md:p-10 flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Content Area (Spanning full width) */}
            <div className="lg:col-span-12 flex flex-col space-y-6">
              {/* Title & Organization Header */}
              <div>
                <div className="flex flex-wrap gap-2 items-center text-xs text-slate-400 font-semibold mb-2 uppercase tracking-wider">
                  <span className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{isProject(item) ? item.year : item.duration}</span>
                  </span>
                  {isProject(item) && (
                    <>
                      <span>•</span>
                      <span>{item.company}</span>
                      <span>•</span>
                      <span className="text-accent-pink font-bold">{item.categoryLabel}</span>
                    </>
                  )}
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight leading-snug">
                  {isProject(item) ? item.title : item.role}
                </h3>
                
                <p className="text-md font-semibold text-slate-500 mt-1">
                  {isProject(item) ? `${t.portfolio.role}: ${item.role}` : item.company}
                </p>
              </div>

              {/* Achievements Highlight Card */}
              {isProject(item) && item.achievements && (
                <div className="flex items-start space-x-3 bg-pastel-pink/20 border border-pastel-pink/30 p-4 rounded-2xl">
                  <Award className="text-accent-pink shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t.portfolio.achievement}</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">{item.achievements}</p>
                  </div>
                </div>
              )}

              <hr className="border-slate-100" />

              {/* Detailed Responsibilities or Summaries */}
              <div className="space-y-4">
                {isProject(item) && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-2">
                      <Info size={14} className="text-accent-pink" />
                      <span>{t.portfolio.tabs.released === 'Phim đã phát hành' ? 'TÓM TẮT DỰ ÁN' : 'PROJECT SUMMARY'}</span>
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {item.summary}
                    </p>
                  </div>
                )}

                {isExperience(item) && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-2">
                      <Info size={14} className="text-accent-blue" />
                      <span>{t.portfolio.tabs.released === 'Phim đã phát hành' ? 'CHI TIẾT CÔNG VIỆC' : 'RESPONSIBILITIES & ACHIEVEMENTS'}</span>
                    </h4>
                    <ul className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-pink shrink-0 mt-2" />
                          <span className="text-slate-600 text-sm leading-relaxed font-light">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 3 Image Gallery / Placeholders */}
              <div className="pt-4 border-t border-slate-100">
                {!isProject(item) && (
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {t.portfolio.tabs.released === 'Phim đã phát hành' ? 'HÌNH ẢNH MINH HỌA' : 'GALLERY / PORTFOLIO IMAGES'}
                  </h4>
                )}
                <div className={`grid gap-6 ${isProject(item) ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-3'}`}>
                  {[0, 1, 2].map((idx) => {
                    const photo = isProject(item) && item.photos && item.photos[idx];
                    if (photo) {
                      return (
                        <div 
                          key={idx} 
                          className={`relative rounded-2xl overflow-hidden shadow-2xs mx-auto ${
                            isProject(item) 
                              ? 'w-full max-w-md aspect-[16/10]' 
                              : 'aspect-video sm:aspect-square md:h-52'
                          }`}
                        >
                          <img 
                            src={photo} 
                            alt={`Gallery photo ${idx + 1}`} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      );
                    }
                    return (
                      <div
                        key={idx}
                        className={`bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-300 hover:bg-slate-100/80 transition-colors shadow-2xs mx-auto ${
                          isProject(item) 
                            ? 'w-full max-w-md aspect-[16/10] p-6' 
                            : 'aspect-video sm:aspect-square md:h-52 p-6'
                        }`}
                      >
                        <svg 
                          className="text-slate-400/80 w-10 h-10 mb-3" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="uppercase tracking-widest font-bold text-slate-400 text-xs">
                          Photo {idx + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Platform Links */}
              {isProject(item) && item.links && Object.keys(item.links).length > 0 && (
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {t.modal.links}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {item.links.imdb && renderLinkButton(item.links.imdb, 'IMDB', 'Movie Database')}
                    {item.links.netflix && renderLinkButton(item.links.netflix, 'Netflix', 'Streaming')}
                    {item.links.galaxyPlay && renderLinkButton(item.links.galaxyPlay, 'Galaxy Play', 'Streaming')}
                    {item.links.youtube && renderLinkButton(item.links.youtube, 'YouTube', 'Video')}
                    {item.links.facebook && renderLinkButton(item.links.facebook, 'Facebook', 'Social')}
                    {item.links.tiktok && renderLinkButton(item.links.tiktok, 'TikTok', 'Video')}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-slate-100 p-4 flex justify-end bg-slate-50/50">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-6 py-2.5 rounded-full cursor-pointer transition-colors shadow-2xs hover:shadow-xs"
          >
            {t.modal.close}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
