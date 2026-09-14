const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    technologies: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Context API',
    ],
  },
  {
    title: 'Backend & APIs',
    technologies: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JWT Authentication',
      'bcrypt',
    ],
  },
  {
    title: 'Database & Tools',
    technologies: [
      'MongoDB',
      'Git & GitHub',
      'Postman',
      'Cloudinary',
      'Vite',
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="pt-space-xl border-t border-outline-variant/40 flex flex-col gap-space-lg">
      {/* 02 // Section Header with Supporting Label */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="font-mono text-sm text-secondary font-bold tracking-wider">02 //</span>
          <span className="font-mono text-sm text-on-surface uppercase tracking-widest font-bold">TECH STACK</span>
        </div>
        <span className="font-mono-tag text-mono-tag text-outline uppercase tracking-wider">SKILLS &amp; TOOLS</span>
      </div>

      {/* 3-Column Category Grid on Desktop / 1-Column on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="p-space-md rounded border border-outline-variant/40 bg-surface-container-lowest flex flex-col gap-space-sm"
          >
            <h3 className="font-headline-sm text-[17px] text-primary font-semibold tracking-tight">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {category.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-surface-container-low border border-outline-variant/40 rounded font-mono-tag text-mono-tag text-on-surface hover:border-secondary/40 hover:text-secondary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
