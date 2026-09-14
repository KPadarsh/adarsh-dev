'use client';

import { useState } from 'react';
import { Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '06 //' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('adarshak1128@gmail.com');
      setCopiedEmail(true);
      setStatus({ type: 'success', message: 'Email copied to clipboard!' });
      setTimeout(() => {
        setCopiedEmail(false);
        setStatus({ type: 'idle', message: '06 //' });
      }, 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
      setStatus({ type: 'error', message: 'Could not copy email.' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Opening your email client...' });

    const mailtoUrl = `mailto:adarshak1128@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus({ type: 'success', message: 'Email client launched.' });
      setTimeout(() => {
        setStatus({ type: 'idle', message: '06 //' });
      }, 4000);
    }, 800);
  };

  return (
    <section id="contact" className="pt-space-xl pb-space-xl border-t border-outline-variant/40 flex flex-col gap-space-lg">
      {/* 06 // Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="font-mono text-sm text-secondary font-bold tracking-wider">06 //</span>
          <span className="font-mono text-sm text-on-surface uppercase tracking-widest font-bold">GET IN TOUCH</span>
        </div>
        <span className="font-mono-tag text-mono-tag text-outline uppercase tracking-wider hidden sm:inline-block">
          CONTACT &amp; COLLABORATION
        </span>
      </div>

      {/* Section Headings */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight max-w-2xl">
          Let&apos;s build something reliable together.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
          Open to full-time junior developer roles, contract projects, and engineering collaborations.
        </p>
      </div>

      {/* 2x2 Quick Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-sm">
        {/* Card 1: Direct Email */}
        <div className="p-space-md border border-outline-variant/40 rounded bg-surface-container-low flex flex-col justify-between gap-3">
          <div>
            <span className="font-mono-tag text-mono-tag text-outline uppercase tracking-wider block mb-1">
              Direct Email
            </span>
            <a
              href="mailto:adarshak1128@gmail.com"
              className="font-headline-sm text-[16px] text-primary hover:text-secondary font-semibold break-all transition-colors"
            >
              adarshak1128@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30">
            <span className="font-mono-tag text-[11px] text-on-surface-variant">Response &lt; 24 hrs</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="font-mono-tag text-mono-tag text-secondary hover:underline inline-flex items-center gap-1.5 focus-visible:outline-none"
            >
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Card 2: Voice & WhatsApp */}
        <div className="p-space-md border border-outline-variant/40 rounded bg-surface-container-low flex flex-col justify-between gap-3">
          <div>
            <span className="font-mono-tag text-mono-tag text-outline uppercase tracking-wider block mb-1">
              Voice &amp; WhatsApp
            </span>
            <a
              href="tel:+918129440790"
              className="font-headline-sm text-[16px] text-primary hover:text-secondary font-semibold transition-colors"
            >
              +91 8129440790
            </a>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30">
            <span className="font-mono-tag text-[11px] text-on-surface-variant">India (UTC+5:30)</span>
            <a
              href="https://wa.me/918129440790"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-tag text-mono-tag text-secondary hover:underline inline-flex items-center gap-1 focus-visible:outline-none"
            >
              <span>Chat WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 3: GitHub */}
        <a
          href="https://github.com/KPadarsh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-space-md border border-outline-variant/40 rounded bg-surface-container-low hover:border-primary/40 hover:bg-surface-container-lowest transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-mono-tag font-bold text-xs">
              GH
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-primary font-semibold block">GitHub</span>
              <span className="font-mono-tag text-[11px] text-outline">@KPadarsh</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>

        {/* Card 4: LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kp-adarsh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-space-md border border-outline-variant/40 rounded bg-surface-container-low hover:border-secondary/40 hover:bg-surface-container-lowest transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-secondary text-on-secondary flex items-center justify-center font-mono-tag font-bold text-xs">
              in
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-primary font-semibold block">LinkedIn</span>
              <span className="font-mono-tag text-[11px] text-outline">kp-adarsh</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-outline group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>

      {/* Embedded Contact Form */}
      <div className="mt-space-md p-space-md sm:p-6 border border-outline-variant/40 rounded bg-surface-container-lowest shadow-sm">
        <form className="flex flex-col gap-space-md" onSubmit={handleFormSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="font-mono-tag text-[11px] text-on-surface-variant uppercase font-semibold">
                Name <span className="text-secondary">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant/60 rounded text-body-md font-body-md text-primary placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="font-mono-tag text-[11px] text-on-surface-variant uppercase font-semibold">
                Email <span className="text-secondary">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant/60 rounded text-body-md font-body-md text-primary placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-msg" className="font-mono-tag text-[11px] text-on-surface-variant uppercase font-semibold">
              Message <span className="text-secondary">*</span>
            </label>
            <textarea
              id="contact-msg"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, team, or opportunity..."
              className="px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant/60 rounded text-body-md font-body-md text-primary placeholder:text-outline focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>

          {/* Form Action & Dynamic Accessible Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <span
              aria-live="polite"
              className={`font-mono-tag text-[12px] ${
                status.type === 'error'
                  ? 'text-red-600 font-semibold'
                  : status.type === 'success'
                  ? 'text-emerald-600 font-semibold'
                  : 'text-secondary font-medium'
              }`}
            >
              {status.message}
            </span>
            <button
              type="submit"
              className="px-6 py-2.5 bg-primary text-on-primary rounded-lg hover:bg-secondary transition-colors font-label-sm text-label-sm inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
