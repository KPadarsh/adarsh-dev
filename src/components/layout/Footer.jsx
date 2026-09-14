'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      return new Intl.DateTimeFormat('en-US', options).format(now);
    };

    setTimeString(formatTime());

    const interval = setInterval(() => {
      setTimeString(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-surface-container-high mt-space-xl py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-lg">
        {/* Left Column: Developer Info & Location */}
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              Adarsh K P
            </span>
            <span className="font-mono-tag text-mono-tag text-on-surface-variant">
              — MERN Stack Developer
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Chemmad, Kerala, India • IST (UTC +5:30)
          </p>
        </div>

        {/* Right Column: Live Clock & Copyright */}
        <div className="flex flex-col sm:items-end gap-1">
          <div className="flex items-center gap-1.5 font-mono-tag text-mono-tag text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
            <span className="tabular-nums">
              Kerala, IN — {timeString || '--:--:--'} IST
            </span>
          </div>
          <p className="font-mono-tag text-mono-tag text-on-surface-variant">
            © 2026 Adarsh K P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
