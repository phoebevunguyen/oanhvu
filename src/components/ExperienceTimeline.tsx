'use client';

import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExperienceItem } from '@/data/data';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Eye } from 'lucide-react';

interface ExperienceTimelineProps {
  onSelectCard: (item: ExperienceItem) => void;
}

export default function ExperienceTimeline({ onSelectCard }: ExperienceTimelineProps) {
  const { language, t, experiences } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up scroll tracking for the timeline line drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  // Smooth out the scroll progress
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Mapping nodes: Oldest (bottom-left) to Newest (top-left)
  // IDs correspond to the experiences in data.ts:
  // exp5: YouNet Group (2015-2016) - bottom-left
  // exp4: Saigon Innovation Hub (2016-2017) - bottom-right
  // exp3: Freelance Content Marketing (2017-2020) - middle-center
  // exp2: 89sGroup (2020-2025) - middle-left
  // exp1: Freelance Screenwriter (2025-present) - top-left
  const nodesConfig = [
    { id: 'exp5', xPct: '15%', yPct: '81%', cardXPct: '15%', cardYPct: '59%' },
    { id: 'exp4', xPct: '50%', yPct: '81%', cardXPct: '50%', cardYPct: '59%' },
    { id: 'exp3', xPct: '85%', yPct: '51%', cardXPct: '85%', cardYPct: '29%' },
    { id: 'exp2', xPct: '50%', yPct: '51%', cardXPct: '50%', cardYPct: '29%' },
    { id: 'exp1', xPct: '15%', yPct: '22%', cardXPct: '15%', cardYPct: '1.5%' },
  ];

  // Helper to find experience details
  const getExperienceByNodeId = (id: string): ExperienceItem | undefined => {
    return experiences.find((exp) => exp.id === id);
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-12 bg-slate-50/50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-pastel-pink/30 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-64 h-64 rounded-full bg-pastel-blue/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="flex items-center space-x-2 bg-pastel-blue/40 border border-pastel-blue px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-700 mb-4">
            <Briefcase size={12} className="text-accent-blue" />
            <span>{t.nav.experience}</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-slate-800 tracking-tight">
            {t.experience.title}
          </h2>
        </div>

        {/* Desktop Winding Curved Layout (Visible on MD and above) */}
        <div className="relative hidden md:block w-full h-[680px] mt-10">
          
          {/* Timeline Winding SVG Line */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 680"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Static background path */}
              <path
                d="M 150 550 L 850 550 C 950 550, 950 350, 850 350 L 150 350 C 50 350, 50 150, 150 150"
                stroke="#E2E8F0"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Dynamic scroll animated path */}
              <motion.path
                d="M 150 550 L 850 550 C 950 550, 950 350, 850 350 L 150 350 C 50 350, 50 150, 150 150"
                stroke="url(#timeline-gradient)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="timeline-gradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#FFD6E0" />
                  <stop offset="50%" stopColor="#E8E8FF" />
                  <stop offset="100%" stopColor="#70A2FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Render Cards and Node Dots */}
          {nodesConfig.map((node, index) => {
            const item = getExperienceByNodeId(node.id);
            if (!item) return null;

            return (
              <React.Fragment key={node.id}>
                {/* Node Card */}
                <div
                  className="absolute -translate-x-1/2 w-64 lg:w-72"
                  style={{
                    left: node.cardXPct,
                    top: node.cardYPct,
                  }}
                >
                  <motion.div
                    onClick={() => onSelectCard(item)}
                    className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs hover:shadow-md hover:border-pastel-pink transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-bold text-accent-pink uppercase tracking-widest bg-pastel-pink/30 px-2 py-0.5 rounded-sm">
                        {item.duration}
                      </span>
                    </div>

                    <h3 className="font-heading text-sm font-bold text-slate-800 leading-snug group-hover:text-slate-900 truncate">
                      {item.role}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-1 truncate">
                      {item.company}
                    </p>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 pointer-events-none">
                      <div className="bg-white/95 shadow-sm border border-slate-100 px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye size={12} className="text-accent-pink" />
                        <span className="text-[10px] font-semibold text-slate-700 tracking-wide">
                          {language === 'vn' ? 'Xem chi tiết' : 'View details'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Node Dot */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
                  style={{
                    left: node.xPct,
                    top: node.yPct,
                  }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center cursor-pointer shadow-sm"
                    whileHover={{ scale: 1.3, borderColor: '#FF85A2' }}
                    onClick={() => onSelectCard(item)}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-accent-pink transition-colors" />
                  </motion.div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Vertical Layout (Visible on Mobile) */}
        <div className="relative md:hidden mt-8 pl-8 space-y-12">
          {/* Vertical progress line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-0.5 pointer-events-none">
            <div className="w-full h-full bg-slate-200 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-pink to-accent-blue rounded-full origin-top"
              style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
            />
          </div>

          {/* Vertical items, rendered from oldest (Node 1) to newest (Node 5) */}
          {nodesConfig.map((node, index) => {
            const item = getExperienceByNodeId(node.id);
            if (!item) return null;

            return (
              <div key={node.id} className="relative flex flex-col items-start">
                
                {/* Node dot on vertical line */}
                <div className="absolute left-[-26px] top-5 z-10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-slate-200 shadow-sm" />
                </div>

                {/* Card */}
                <motion.div
                  onClick={() => onSelectCard(item)}
                  className="w-full bg-white border border-slate-100 p-5 rounded-2xl shadow-xs hover:shadow-md hover:border-pastel-pink transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-bold text-accent-pink uppercase tracking-widest bg-pastel-pink/30 px-2 py-0.5 rounded-sm">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm font-bold text-slate-800 leading-snug">
                    {item.role}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1">
                    {item.company}
                  </p>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 pointer-events-none">
                    <div className="bg-white/95 shadow-sm border border-slate-100 px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye size={12} className="text-accent-pink" />
                      <span className="text-[10px] font-semibold text-slate-700 tracking-wide">
                        {language === 'vn' ? 'Xem chi tiết' : 'View details'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
