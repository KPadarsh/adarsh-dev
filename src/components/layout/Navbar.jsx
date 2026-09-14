'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-surface-container-high transition-all">
      <div className="h-16 max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between gap-space-md">
        {/* Left Side: Brand Logo & Availability Badge */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold hover:text-secondary transition-colors inline-block whitespace-nowrap"
          >
            Adarsh&nbsp;K&nbsp;P
          </Link>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] font-mono-tag text-[11px] text-[#047857] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Header Actions & Mobile Trigger */}
        <div className="flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant hover:border-primary font-label-sm text-label-sm text-primary hover:bg-surface-container-low transition-all"
          >
            <Download className="w-[14px] h-[14px] text-primary" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm hover:bg-secondary transition-all shadow-sm group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-[14px] h-[14px] group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden border-t border-surface-container-high bg-surface-container-lowest/98 backdrop-blur-xl px-6 py-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-3">
            <div className="flex sm:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] font-mono-tag text-[11px] text-[#047857] font-medium w-fit mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>Available for work</span>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="py-1.5 text-[15px] font-medium text-on-surface-variant hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-outline-variant/30 mt-1 flex items-center justify-between">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center gap-1.5 py-1.5 text-label-sm font-label-sm text-primary hover:text-secondary transition-colors"
              >
                <Download className="w-[14px] h-[14px]" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
