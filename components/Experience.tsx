const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Technovicinity Ltd.",
    period: "August 2025 – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Developing and maintaining full-stack applications using React, Node.js, and AWS. Leading frontend architecture decisions and mentoring interns.",
  },
  {
    title: "Software Engineer Intern",
    company: "Technovicinity Ltd.",
    period: "February 2025 – July 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Contributed to production applications, implemented responsive UIs with React and Tailwind CSS, and integrated third-party services including Google Maps and payment gateways.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-classic-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-sm text-terracotta tracking-widest uppercase mb-2">
            Career Path
          </p>
          <h2 className="artistic-heading text-5xl md:text-6xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="golden-line mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-px bg-gold-leaf/20" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-leaf rounded-full z-10 mt-8" />

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}
              >
                <div className="p-8 bg-white border border-gold-leaf/10 hover:border-gold-leaf/30 transition-all duration-500 hover:shadow-xl">
                  <span className="font-mono text-xs text-terracotta tracking-widest uppercase">
                    {exp.period}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ink-black mt-2 mb-1">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-charcoal/70 mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="font-sans text-charcoal/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
