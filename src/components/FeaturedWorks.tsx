'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectItem } from '@/data/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, FilmIcon, Award, Play, ExternalLink, Calendar, Users } from 'lucide-react';

interface FeaturedWorksProps {
  onSelectProject: (project: ProjectItem) => void;
}

type TabType = 'released' | 'upcoming' | 'marketing';

export default function FeaturedWorks({ onSelectProject }: FeaturedWorksProps) {
  const { t, projects } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('released');

  const tabs = [
    { id: 'released' as TabType, label: t.portfolio.tabs.released },
    { id: 'upcoming' as TabType, label: t.portfolio.tabs.upcoming },
    { id: 'marketing' as TabType, label: t.portfolio.tabs.marketing },
  ];

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  // Helper to choose placeholder icon based on category
  const getCategoryIcon = (category: TabType) => {
    switch (category) {
      case 'released':
        return <Film size={32} className="text-slate-400 group-hover:text-accent-pink transition-colors" />;
      case 'upcoming':
        return <FilmIcon size={32} className="text-slate-400 group-hover:text-accent-blue transition-colors" />;
      case 'marketing':
        return <Users size={32} className="text-slate-400 group-hover:text-accent-teal transition-colors" />;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-pastel-green/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pastel-pink/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pastel-pink/40 border border-pastel-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-700 mb-4">
            <Film size={12} className="text-accent-pink" />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-slate-800 tracking-tight">
            {t.portfolio.title}
          </h2>
        </div>

        {/* Tab Selection Switcher */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-slate-100/80 backdrop-blur-xs p-1.5 rounded-full border border-slate-200/50 max-w-full overflow-x-auto whitespace-nowrap scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide cursor-pointer transition-colors duration-300"
                  style={{
                    color: isActive ? '#1E293B' : '#64748B',
                  }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/30"
                      layoutId="activeTabIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectProject(project)}
                className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Visual Placeholder (Poster / Thumbnail) */}
                <div className="relative aspect-[2/3] bg-slate-50 flex items-center justify-center transition-colors overflow-hidden border-b border-slate-50">
                  {project.poster ? (
                    <img 
                      src={project.poster} 
                      alt={project.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      {/* Decorative background grid pattern */}
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                      
                      {/* Category gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-200/10 via-transparent to-transparent" />
                      
                      {/* Center Placeholder Icons */}
                      <div className="flex flex-col items-center space-y-3 z-10">
                        <div className="p-4 bg-white/95 rounded-2xl shadow-xs group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                          {getCategoryIcon(project.category)}
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/70 px-2 py-0.5 rounded-md border border-slate-100 shadow-2xs">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Top Badge: Gross Revenue or Achievements */}
                  {project.achievements && (
                    <div className="absolute top-4 left-4 flex items-center space-x-1.5 bg-pastel-pink/90 backdrop-blur-xs border border-pastel-pink/80 text-slate-800 text-[10px] font-bold px-3 py-1 rounded-full shadow-2xs z-10">
                      <Award size={10} className="text-accent-pink animate-pulse" />
                      <span>{project.achievements}</span>
                    </div>
                  )}

                  {/* Floating Action Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs z-10">
                    <div className="flex items-center space-x-2 bg-white text-slate-800 px-4 py-2.5 rounded-full text-xs font-bold shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span>{t.portfolio.viewDetails}</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  {/* Metadata Row */}
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                    <span className="font-semibold">{project.company}</span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{project.year}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base md:text-lg font-bold text-slate-800 group-hover:text-accent-pink transition-colors line-clamp-1 leading-snug">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
