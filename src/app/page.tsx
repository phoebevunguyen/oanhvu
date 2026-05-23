'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import FeaturedWorks from '@/components/FeaturedWorks';
import AwardsCourses from '@/components/AwardsCourses';
import Contact from '@/components/Contact';
import DetailModal from '@/components/DetailModal';
import { ExperienceItem, ProjectItem } from '@/data/data';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectItem = (item: ExperienceItem | ProjectItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selected item to allow slide-out animation to complete
    setTimeout(() => {
      setSelectedItem(null);
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main content blocks */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Career Timeline Section */}
        <ExperienceTimeline onSelectCard={handleSelectItem} />

        {/* Portfolio Showcase Grid Section */}
        <FeaturedWorks onSelectProject={handleSelectItem} />

        {/* Certifications and Course lists */}
        <AwardsCourses />

        {/* Connections Section */}
        <Contact />
      </main>

      {/* Shared detail dialog popup overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <DetailModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            item={selectedItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
