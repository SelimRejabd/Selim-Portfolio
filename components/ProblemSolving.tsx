const ProblemSolving = () => {
  return (
    <section className="py-24 px-4 bg-dark-gradient text-soft-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-sm text-gold-leaf tracking-widest uppercase mb-2">
            Problem Solving
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
            Algorithmic Thinking
          </h2>
          <div className="golden-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Stat Card */}
          <div className="text-center p-8 border border-white/10 hover:border-gold-leaf/50 transition-all duration-500 hover:bg-white/5">
            <div className="text-6xl md:text-7xl font-serif font-bold text-gold-leaf mb-4">
              300+
            </div>
            <p className="font-sans text-white/70 text-lg">Problems Solved</p>
          </div>

          {/* Platforms */}
          <div className="text-center p-8 border border-white/10 hover:border-gold-leaf/50 transition-all duration-500 hover:bg-white/5">
            <div className="flex justify-center gap-2 mb-4">
              {["LeetCode", "HackerRank"].map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 text-sm font-mono text-gold-leaf border border-gold-leaf/30"
                >
                  {platform}
                </span>
              ))}
            </div>
            <p className="font-sans text-white/70 text-lg">Online Judges</p>
          </div>

          {/* Knowledge Areas */}
          <div className="text-center p-8 border border-white/10 hover:border-gold-leaf/50 transition-all duration-500 hover:bg-white/5">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {["DSA", "OOD", "Design Patterns"].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 text-sm font-mono text-sage-green border border-sage-green/30"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="font-sans text-white/70 text-lg">Knowledge Areas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
