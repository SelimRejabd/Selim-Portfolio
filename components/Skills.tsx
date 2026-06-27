import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  SiCplusplus,
  SiCloudinary,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSocketdotio,
  SiSolidity,
  SiTailwindcss,
  SiHtml5,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaLayerGroup } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    description:
      "Core languages I use to build reliable application logic and interactive systems.",
    accent: "from-terracotta/20 via-gold-leaf/15 to-transparent",
    skills: [
      { name: "C/C++", Icon: SiCplusplus },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Python", Icon: SiPython },
      { name: "Solidity", Icon: SiSolidity },
      { name: "PHP", Icon: SiPhp },
      { name: "TypeScript", Icon: SiTypescript },
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Frontend",
    description:
      "Modern UI stacks for responsive, animated, and data-driven experiences.",
    accent: "from-sage-green/20 via-sky-400/10 to-transparent",
    skills: [
      { name: "HTML5", Icon: SiHtml5 },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "ReactJS", Icon: SiReact },
      { name: "NextJS", Icon: SiHtml5 },
      { name: "Redux", Icon: SiRedux },
      { name: "Zustand", Icon: FaLayerGroup },
      { name: "TanStack Query", Icon: SiReactquery },
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
    description:
      "Server-side frameworks and databases that support scalable APIs and persistence.",
    accent: "from-ink-black/10 via-terracotta/10 to-transparent",
    skills: [
      { name: "ExpressJS", Icon: SiExpress },
      { name: "Django REST", Icon: SiDjango },
      { name: "Laravel", Icon: SiLaravel },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "SQLite", Icon: SiPostgresql },
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
    description:
      "Delivery, collaboration, and integration tools used to ship and operate products.",
    accent: "from-gold-leaf/20 via-sage-green/15 to-transparent",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "Docker", Icon: SiDocker },
      { name: "AWS", Icon: FaAws },
      { name: "Vercel", Icon: SiVercel },
      { name: "Cloudinary", Icon: SiCloudinary },
      { name: "Socket.io", Icon: SiSocketdotio },
      { name: "Postman", Icon: SiPostman },
      { name: "Node.js", Icon: SiNodedotjs },
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,165,94,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(176,114,91,0.10),transparent_32%)]" />
      <div className="absolute top-16 left-10 w-72 h-72 bg-gold-leaf/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeInDown">
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <p className="font-mono text-sm text-terracotta tracking-widest uppercase mb-2">
              Technical Expertise
            </p>
            <h2 className="artistic-heading text-5xl md:text-6xl font-bold mb-4">
              Skills & Tools
            </h2>
            <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">
              A polished mix of languages, frameworks, data layers, and delivery
              tools I use to build modern products end-to-end.
            </p>
            <div className="golden-line mx-auto" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay={100} duration={800}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { value: "6+", label: "Primary stacks" },
              { value: "15+", label: "Tools & libraries" },
              { value: "4", label: "Full-stack layers" },
            ].map((item) => (
              <div
                key={item.label}
                className="group bg-white/80 backdrop-blur-sm border border-gold-leaf/10 px-6 py-5 shadow-sm hover:shadow-xl hover:shadow-gold-leaf/5 transition-all duration-500"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-ink-black group-hover:text-terracotta transition-colors duration-300">
                  {item.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-charcoal/60 font-mono">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <AnimateOnScroll
              key={category.title}
              animation={idx % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={idx * 100}
              duration={800}
            >
              <div className="group relative overflow-hidden p-8 md:p-9 bg-white border border-gold-leaf/10 hover:border-gold-leaf/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-leaf/5 hover-lift">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-terracotta via-gold-leaf to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="relative flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-classic-cream border border-gold-leaf/10 flex items-center justify-center text-terracotta group-hover:text-gold-leaf group-hover:scale-105 transition-all duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink-black">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-sm text-charcoal/65 max-w-md leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-classic-cream text-xs uppercase tracking-[0.18em] text-charcoal/60 border border-ink-black/5">
                    {category.skills.length} items
                  </span>
                </div>

                <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skill.name}
                      className="group/skill flex items-center gap-3 rounded-2xl border border-ink-black/5 bg-white/80 px-4 py-3 text-sm text-charcoal shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/25 hover:shadow-lg"
                      style={{
                        animationDelay: `${skillIdx * 50}ms`,
                      }}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-classic-cream text-base text-terracotta transition-transform duration-300 group-hover/skill:scale-105">
                        <skill.Icon />
                      </span>
                      <span className="font-medium leading-tight">
                        {skill.name}
                      </span>
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
