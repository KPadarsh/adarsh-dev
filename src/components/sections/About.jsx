export default function About() {
  return (
    <section id="about" className="pt-space-xl border-t border-outline-variant/40 flex flex-col gap-space-lg">
      {/* 01 // Section Header with Supporting Label */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="font-mono text-sm text-secondary font-bold tracking-wider">01 //</span>
          <span className="font-mono text-sm text-on-surface uppercase tracking-widest font-bold">ABOUT</span>
        </div>
        <span className="font-mono-tag text-mono-tag text-outline uppercase tracking-wider hidden sm:inline-block">
          PROFILE &amp; PHILOSOPHY
        </span>
      </div>

      {/* 2-Column Editorial Grid on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column (Main Narrative - 8 cols on lg) */}
        <div className="lg:col-span-8 flex flex-col">
          <h2 className="font-display text-2xl sm:text-3xl md:text-[34px] text-primary tracking-tight font-bold leading-[1.2] mb-space-md max-w-2xl">
            Building thoughtful web experiences from interface to backend.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
            I’m a Full Stack Developer focused on React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. I enjoy turning ideas into responsive, practical applications with clean RESTful architectures, structured backend systems, and intuitive user experiences. From designing the interface to connecting the database, I like understanding and building the system end to end.
          </p>
        </div>

        {/* Right Column (Editorial Rail - 4 cols on lg, hidden on < lg) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-between self-stretch border-l border-outline-variant/30 pl-8 relative min-h-[220px] overflow-hidden">
          {/* Subtle Decorative Background Numeral */}
          <span
            aria-hidden="true"
            className="absolute -right-4 -bottom-6 text-[11rem] font-display font-black text-slate-100/90 leading-none select-none pointer-events-none -z-0"
          >
            02
          </span>

          {/* Core Attributes Keyword Stack */}
          <div className="relative z-10 flex flex-col gap-4">
            <span className="font-mono-tag text-[10px] uppercase tracking-widest text-outline font-semibold">
              CORE ATTRIBUTES
            </span>

            <div className="flex flex-col gap-2.5 font-mono text-[11px] text-on-surface-variant tracking-wider">
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold select-none">▸</span>
                <span className="font-medium text-primary">PROBLEM SOLVER</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold select-none">▸</span>
                <span className="font-medium text-primary">LIFELONG LEARNER</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold select-none">▸</span>
                <span className="font-medium text-primary">BUILDING IMPACT</span>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="relative z-10 pt-6 mt-auto border-t border-outline-variant/20">
            <span className="font-mono-tag text-[11px] text-outline uppercase tracking-wider">
              CRAFT &amp; ENGINEERING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
