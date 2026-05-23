'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Star, Calendar, Sparkles, Award } from 'lucide-react';

export default function AwardsCourses() {
  const { t, awardsList, coursesList } = useLanguage();

  return (
    <section id="awards" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-pastel-pink/30 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-pastel-blue/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Awards Column */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-pastel-pink rounded-xl text-accent-pink shadow-xs">
                <Trophy size={20} />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-slate-800 tracking-tight">
                {t.awards.awardsSubtitle}
              </h3>
            </div>

            <div className="space-y-6">
              {awardsList.map((award, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs relative overflow-hidden group hover:border-pastel-pink transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  {/* Subtle hover background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pastel-pink/15 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-50 text-accent-pink rounded-xl group-hover:bg-pastel-pink/20 transition-colors shrink-0 mt-0.5">
                      <Award size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-slate-800 text-base leading-snug">
                        {award.title}
                      </h4>
                      <p className="text-slate-500 text-sm font-light leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Courses Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-pastel-blue rounded-xl text-accent-blue shadow-xs">
                <BookOpen size={20} />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-slate-800 tracking-tight">
                {t.awards.coursesSubtitle}
              </h3>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xs divide-y divide-slate-100">
              {coursesList.map((course, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 first:pt-0 last:pb-0 gap-3 group`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:text-accent-blue group-hover:bg-pastel-blue/20 transition-colors shrink-0 mt-0.5">
                      <Star size={14} className="fill-transparent group-hover:fill-accent-blue/20" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-slate-800 text-sm group-hover:text-slate-900 transition-colors">
                        {course.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                        {course.organization}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 self-start sm:self-center bg-slate-50 px-2.5 py-1 rounded-md text-[10px] text-slate-400 font-bold tracking-wider uppercase">
                    <Calendar size={10} />
                    <span>{course.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
