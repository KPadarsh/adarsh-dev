'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Code, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: '01',
    title: 'Fragranzia',
    subtitle: 'E-Commerce Perfume Platform',
    badge: 'WORKS',
    image: '/images/fragranzia.png',
    description:
      'Full-stack perfume e-commerce web application with responsive UI, complete product catalog, shopping cart, and persistent order flow. Implemented JWT-based authentication/authorization, secure password hashing with bcrypt, Cloudinary media storage, and comprehensive RESTful CRUD APIs with Express and MongoDB.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Auth',
      'Tailwind CSS',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/KPadarsh',
  },
  {
    id: '02',
    title: 'Angha',
    subtitle: 'Autumn Atelier — Fashion E-Commerce',
    badge: 'WORKS',
    image: '/images/angha.png',
    description:
      'Full-stack fashion e-commerce and catalog platform featuring dynamic collections, category filtering, detailed product showcases, responsive shopping cart, and modern editorial aesthetics. Engineered with full RESTful APIs and MongoDB database integration.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'RESTful APIs',
      'Tailwind CSS',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/KPadarsh',
  },
];

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeProject = PROJECTS[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="pt-space-xl border-t border-outline-variant/40 flex flex-col gap-space-lg">
      {/* 03 // Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="font-mono text-sm text-secondary font-bold tracking-wider">03 //</span>
          <span className="font-mono text-sm text-on-surface uppercase tracking-widest font-bold">WORKS</span>
        </div>
        <span className="font-mono-tag text-mono-tag text-outline uppercase tracking-wider hidden sm:inline-block">
          FEATURED SYSTEMS
        </span>
      </div>

      {/* Main Section Heading */}
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl md:text-[34px] text-primary tracking-tight font-bold leading-tight">
          Featured production applications &amp; systems.
        </h2>
      </div>

      {/* Featured Project Showcase Card (Exact Stitch Dark Card Layout) */}
      <div className="relative w-full rounded-[24px] sm:rounded-[28px] bg-[#0c1322] text-white p-7 sm:p-10 md:p-12 overflow-hidden shadow-2xl border border-slate-800/80">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-28 -left-28 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: direction * 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -16 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Project Details & Metadata */}
              <div className="lg:col-span-6 flex flex-col">
                {/* Index & Pill Badge */}
                <div className="flex items-center gap-3">
                  <span className="text-5xl sm:text-6xl font-black tracking-tighter text-[#22304d] select-none font-display leading-none">
                    {activeProject.id}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#132240] text-[#38bdf8] border border-[#1e3a6a] uppercase tracking-widest">
                    {activeProject.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-4">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 font-normal mt-1.5">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed max-w-lg mt-5">
                  {activeProject.description}
                </p>

                {/* Tools & Features Tags */}
                <div className="mt-6">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 tracking-wider uppercase block mb-2.5">
                    TOOLS &amp; FEATURES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-md bg-[#131d33] border border-slate-700/60 text-xs font-mono text-slate-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3.5 pt-6 mt-1">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold transition-all shadow-md hover:shadow-blue-900/40"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#141e33] hover:bg-[#1c2945] border border-slate-700/70 text-slate-200 text-sm font-semibold transition-all"
                  >
                    <Code className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-Craft Laptop Device Mockup */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[500px] rounded-xl sm:rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] shadow-2xl">
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.title} Preview Mockup`}
                    width={1376}
                    height={768}
                    className="w-full h-auto object-contain rounded-xl sm:rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls Bar */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-800/80">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {PROJECTS.map((project, idx) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to project ${idx + 1}: ${project.title}`}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none ${
                    idx === currentIndex
                      ? 'w-8 bg-[#2563eb]'
                      : 'w-2 bg-[#1e293b] hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            {/* Counter & Arrow Navigation */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 mr-2 select-none">
                {String(currentIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-9 h-9 rounded-full bg-[#141e33] hover:bg-[#1c2945] border border-slate-700/70 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="w-9 h-9 rounded-full bg-[#141e33] hover:bg-[#1c2945] border border-slate-700/70 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
