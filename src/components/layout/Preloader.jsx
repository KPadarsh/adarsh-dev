'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Lock scroll during preloading
    document.body.style.overflow = 'hidden';

    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const stepInterval = prefersReducedMotion ? 15 : 25;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Smooth progressive increment
        const increment = Math.floor(Math.random() * 4) + 3;
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, stepInterval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Hold 100% briefly before starting exit transition
      const holdTimer = setTimeout(() => {
        setIsExiting(true);
        // After exit transition completes, remove from DOM and restore scrolling
        const exitTimer = setTimeout(() => {
          setIsMounted(false);
          document.body.style.overflow = '';
        }, 700);
        return () => clearTimeout(exitTimer);
      }, 250);

      return () => clearTimeout(holdTimer);
    }
  }, [progress]);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-container-lowest overflow-hidden transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100'
      }`}
    >
      {/* Background Typography Marquee */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="font-display font-extrabold text-6xl sm:text-8xl md:text-[9.5rem] tracking-tighter text-slate-200 uppercase pr-8">
            SOFTWARE DEVELOPER &bull; SOFTWARE DEVELOPER &bull; SOFTWARE DEVELOPER &bull; SOFTWARE DEVELOPER &bull;&nbsp;
          </span>
          <span
            className="font-display font-extrabold text-6xl sm:text-8xl md:text-[9.5rem] tracking-tighter text-slate-200 uppercase pr-8"
            aria-hidden="true"
          >
            SOFTWARE DEVELOPER &bull; SOFTWARE DEVELOPER &bull; SOFTWARE DEVELOPER &bull; SOFTWARE DEVELOPER &bull;&nbsp;
          </span>
        </div>
      </div>

      {/* Center Restrained Loading Interface */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative px-6 py-3.5 rounded-full bg-[#14161a] text-white shadow-2xl border border-slate-800 flex items-center justify-between gap-6 min-w-[220px] sm:min-w-[260px] overflow-hidden">
          {/* Status Indicator & Label */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono-tag text-[11px] font-semibold text-slate-300 uppercase tracking-widest">
              LOADING
            </span>
          </div>

          {/* Live Progress Percentage */}
          <span className="font-mono text-sm font-bold text-white tabular-nums tracking-wider">
            {progress.toString().padStart(2, '0')}%
          </span>

          {/* Hairline Cobalt Progress Fill Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-800">
            <div
              className="h-full bg-secondary transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
