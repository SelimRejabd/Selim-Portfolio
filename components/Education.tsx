const Education = () => {
  return (
    <section id="education" className="py-24 px-4 bg-classic-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-sm text-terracotta tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="artistic-heading text-5xl md:text-6xl font-bold mb-4">
            Education
          </h2>
          <div className="golden-line mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-10 bg-white border border-gold-leaf/10 hover:border-gold-leaf/30 transition-all duration-500 hover:shadow-2xl text-center">
            <div className="flex justify-center mb-6">
              <svg
                className="w-12 h-12 text-terracotta"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="font-serif text-3xl font-bold text-ink-black mb-4">
              University of Rajshahi
            </h3>
            <p className="font-sans text-xl text-charcoal mb-3">
              BSc Engineering in Computer Science and Engineering
            </p>
            <span className="inline-block px-6 py-2 font-mono text-sm text-gold-leaf border border-gold-leaf/30 tracking-wider">
              Class of December 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
