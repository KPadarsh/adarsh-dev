const EDUCATION = {
  period: '2022 — 2025',
  location: 'Malappuram, Kerala',
  degree: 'Diploma in Computer Engineering',
  institution: "Ma'din Polytechnic College, Malappuram",
  coursework: [
    'Fundamentals',
    'DSA',
    'DBMS',
    'Web Architecture',
    'Software Engineering',
  ],
};

export default function Education() {
  return (
    <section id="education" className="pt-space-xl border-t border-outline-variant/40 flex flex-col gap-space-lg">
      {/* 05 // Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="font-mono text-sm text-secondary font-bold tracking-wider">05 //</span>
          <span className="font-mono text-sm text-on-surface uppercase tracking-widest font-bold">EDUCATION</span>
        </div>
        <span className="font-mono-tag text-mono-tag text-outline uppercase tracking-wider hidden sm:inline-block">
          FOUNDATIONS
        </span>
      </div>

      {/* Education Timeline Entry */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-space-md">
        {/* Left Metadata Column */}
        <div className="w-full md:w-36 shrink-0 flex flex-col gap-1.5">
          <span className="font-mono-tag text-mono-tag text-primary font-semibold">
            {EDUCATION.period}
          </span>
          <span className="font-mono-tag text-mono-tag text-outline">
            {EDUCATION.location}
          </span>
        </div>

        {/* Right Details Column */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Degree & Institution */}
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
              {EDUCATION.degree}
            </h3>
            <p className="font-body-md text-on-surface-variant mt-0.5">
              {EDUCATION.institution}
            </p>
          </div>

          {/* Coursework Competencies Chips */}
          <div className="pt-2">
            <span className="text-[11px] font-mono font-semibold text-outline uppercase tracking-wider block mb-2">
              Coursework &amp; Competencies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {EDUCATION.coursework.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-0.5 bg-surface-container-low border border-outline-variant/40 rounded font-mono-tag text-[11px] text-on-surface"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
