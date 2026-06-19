import AnimateOnScroll from "@/components/AnimateOnScroll";
const projects = [
  {
    title: "Green-Wealth",
    description:
      "A full-stack website with Next.js frontend, Zustand state management, and Node.js/Express backend. Features Google Maps integration, email services, and cloud storage.",
    tech: [
      "Next.js",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "#",
    live: true,
  },
  {
    title: "University Management",
    description:
      "A comprehensive platform for managing university operations. Built with TypeScript, featuring robust backend architecture and cloud image management.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
    ],
    link: "#",
    live: false,
  },
  {
    title: "Skudyx",
    description:
      "A fully responsive educational platform with modern design and smooth transitions. Includes voice streaming and live location tracking features.",
    tech: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Material UI",
      "Tailwind CSS",
    ],
    link: "#",
    live: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-soft-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-leaf/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <AnimateOnScroll animation="fadeInDown">
          <div className="text-center mb-20">
            <p className="font-mono text-sm text-terracotta tracking-widest uppercase mb-2">
              Portfolio
            </p>
            <h2 className="artistic-heading text-5xl md:text-6xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="golden-line mx-auto" />
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="fadeInUp"
              delay={idx * 150}
              duration={800}
            >
              <div className="group bg-white border border-gold-leaf/10 overflow-hidden hover:border-gold-leaf/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-leaf/5 hover-lift">
                {/* Project Header with gradient accent */}
                <div className="h-2 bg-gradient-to-r from-terracotta to-gold-leaf transform origin-left group-hover:scale-x-110 transition-transform duration-500" />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-2xl font-bold text-ink-black group-hover:text-terracotta transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.live && (
                      <span className="flex items-center gap-1.5 text-xs font-sans text-sage-green">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-green opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-green" />
                        </span>
                        Live
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-charcoal/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-charcoal/60 bg-classic-cream border border-ink-black/5 hover:border-terracotta/20 hover:text-terracotta transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    data-cursor
                    className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-ink-black hover:text-terracotta transition-colors duration-300 group/link"
                  >
                    {project.live ? "View Project" : "View Code"}
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
