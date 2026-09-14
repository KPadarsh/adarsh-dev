const EXPERIENCES = [
  {
    date: '08/2025',
    location: 'Calicut, Kerala',
    type: 'Internship',
    role: 'MERN Full Stack Intern',
    company: 'Softroniics',
    bullets: [
      (
        <>
          Built responsive full-stack web applications using{' '}
          <strong className="text-primary font-medium">MongoDB, Express.js, React.js, and Node.js</strong>{' '}
          adhering to clean architecture.
        </>
      ),
      (
        <>
          Developed modular frontend interfaces using{' '}
          <strong className="text-primary font-medium">React Hooks, Context API, and Tailwind CSS</strong>{' '}
          integrated with backend endpoints.
        </>
      ),
      (
        <>
          Architected <strong className="text-primary font-medium">RESTful APIs</strong> with complete CRUD
          operations, stateless JWT authentication, password salting with bcrypt, and MongoDB schema definitions.
        </>
      ),
      (
        <>
          Engineered and delivered a full-stack MERN perfume e-commerce web application featuring{' '}
          <strong className="text-primary font-medium">Cloudinary media hosting</strong> and Git version control
          workflows.
        </>
      ),
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Auth',
      'Cloudinary',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pt-space-xl border-t border-outline-variant/40 flex flex-col gap-space-lg">
      {/* 04 // Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="font-mono text-sm text-secondary font-bold tracking-wider">04 //</span>
          <span className="font-mono text-sm text-on-surface uppercase tracking-widest font-bold">EXPERIENCE</span>
        </div>
        <span className="font-mono-tag text-mono-tag text-outline uppercase tracking-wider hidden sm:inline-block">
          PRACTICE &amp; INTERNSHIPS
        </span>
      </div>

      {/* Experience Entries Timeline List */}
      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 md:gap-12 py-space-md border-b border-outline-variant/30"
          >
            {/* Left Metadata Column */}
            <div className="w-full md:w-36 shrink-0 flex flex-col gap-1.5">
              <span className="font-mono-tag text-mono-tag text-primary font-semibold">
                {exp.date}
              </span>
              <span className="font-mono-tag text-mono-tag text-outline">
                {exp.location}
              </span>
              <div className="mt-1">
                <span className="inline-block px-2.5 py-0.5 rounded bg-surface-container-low border border-outline-variant/40 font-mono-tag text-[11px] text-secondary font-medium">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Right Role Details & Bullets Column */}
            <div className="flex-1 flex flex-col gap-3">
              {/* Role & Employer */}
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                  {exp.role}
                </h3>
                <span className="font-body-md text-on-surface-variant">
                  — {exp.company}
                </span>
              </div>

              {/* Responsibility Bullets */}
              <ul className="flex flex-col gap-2 pt-1 font-body-md text-on-surface-variant text-[15px]">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-secondary select-none font-mono text-[13px] mt-1 shrink-0">
                      ▸
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 bg-surface-container-low border border-outline-variant/40 rounded font-mono-tag text-[11px] text-on-surface"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
