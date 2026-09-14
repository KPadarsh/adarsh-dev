'use client';

import { useState } from 'react';
import { ArrowDown, ArrowRight, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('adarshak1128@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="hero" className="flex flex-col pt-space-lg pb-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column (Main Hero Content - 8 cols on lg) */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Availability Status Tag */}
          <div className="flex items-center gap-2 mb-space-lg">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse motion-reduce:animate-none" />
            <span className="font-mono-tag text-mono-tag text-on-surface-variant font-semibold uppercase tracking-wider">
              Available for full-time roles
            </span>
          </div>

          {/* Dominant Display Heading */}
          <h1 className="font-display text-[38px] sm:text-[52px] md:text-[54px] text-primary tracking-tight font-extrabold max-w-2xl leading-[1.12] sm:leading-[1.08] mb-space-md">
            Full Stack Developer
          </h1>

          {/* Hero Narrative Description */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg leading-relaxed">
            I build responsive interfaces, robust APIs, and reliable full-stack applications with modern web technologies.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-space-md mb-space-lg">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-secondary transition-all group shadow-sm"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-surface-container-lowest text-primary border border-outline-variant hover:border-primary hover:bg-surface-container-low font-label-sm text-label-sm transition-all group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Contact Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-space-sm border-t border-outline-variant/30 text-on-surface-variant">
            {/* Email with One-Click Copy */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/40">
              <Mail className="w-3.5 h-3.5 text-secondary shrink-0" />
              <a
                href="mailto:adarshak1128@gmail.com"
                className="font-mono-tag text-mono-tag text-primary font-medium hover:text-secondary transition-colors"
              >
                adarshak1128@gmail.com
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title={copied ? 'Copied!' : 'Copy email'}
                className="text-on-surface-variant hover:text-secondary p-0.5 ml-0.5 transition-colors focus-visible:outline-none"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 animate-in fade-in" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Phone Call Link */}
            <a
              href="tel:+918129440790"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/40 font-mono-tag text-mono-tag text-on-surface hover:text-secondary hover:border-secondary/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>+91 8129440790</span>
            </a>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/40 font-mono-tag text-mono-tag text-on-surface-variant">
              <MapPin className="w-3.5 h-3.5 text-outline shrink-0" />
              <span>Chemmad, Kerala (IST)</span>
            </div>
          </div>
        </div>

        {/* Right Column (Editorial Rail - 4 cols on lg, hidden on < lg) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-between self-stretch border-l border-outline-variant/30 pl-8 relative min-h-[320px] overflow-hidden">
          {/* Subtle Decorative Background Numeral */}
          <span
            aria-hidden="true"
            className="absolute -right-4 -bottom-6 text-[11rem] font-display font-black text-slate-100/90 leading-none select-none pointer-events-none -z-0"
          >
            01
          </span>

          {/* Top Metadata & Keywords */}
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono-tag text-[10px] uppercase tracking-widest text-outline font-semibold">
                DISCIPLINE
              </span>
              <span className="font-headline-sm text-sm text-primary font-bold tracking-tight">
                FULL STACK ENGINEERING
              </span>
            </div>

            <div className="flex flex-col gap-2.5 font-mono text-[11px] text-on-surface-variant tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-medium text-on-surface">BUILD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-medium text-on-surface">DEPLOY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-medium text-on-surface">LEARN</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-medium text-on-surface">IMPROVE</span>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="relative z-10 pt-6 mt-auto border-t border-outline-variant/20">
            <span className="font-mono-tag text-[11px] text-outline uppercase tracking-wider">
              MERN STACK ARCHITECTURE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
