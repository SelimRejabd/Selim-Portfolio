import AnimateOnScroll from "@/components/AnimateOnScroll";
const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "JavaScript", "Python", "Solidity", "PHP", "Java"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "Tailwind CSS",
      "ReactJS",
      "NextJS",
      "Redux",
      "Zustand",
      "TanStack Query",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Backend & Databases",
    skills: [
      "ExpressJS",
      "Django REST",
      "Laravel",
      "MongoDB",
      "PostgreSQL",
      "SQLite",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Cloudinary",
      "Socket.io",
      "Postman",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-soft-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-leaf/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeInDown">
          <div className="text-center mb-20">
            <p className="font-mono text-sm text-terracotta tracking-widest uppercase mb-2">
              Technical Expertise
            </p>
            <h2 className="artistic-heading text-5xl md:text-6xl font-bold mb-4">
              Skills & Tools
            </h2>
            <div className="golden-line mx-auto" />
          </div>
        </AnimateOnScroll>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <AnimateOnScroll
              key={category.title}
              animation={idx % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={idx * 100}
              duration={800}
            >
              <div className="group p-8 bg-white border border-gold-leaf/10 hover:border-gold-leaf/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-leaf/5 hover-lift">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-terracotta group-hover:text-gold-leaf transition-colors duration-300">
                    {category.icon}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-ink-black">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-sans text-charcoal bg-classic-cream border border-transparent hover:border-terracotta/20 hover:text-terracotta transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${skillIdx * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
