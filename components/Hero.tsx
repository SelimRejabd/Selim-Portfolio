"use client";

import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);

      // Update scroll progress bar
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        const scrollPercentage =
          window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight);
        progressBar.style.width = `${scrollPercentage * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-artistic-gradient"
    >
      {/* Floating decorative elements with parallax */}
      <div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-gold-leaf/20 rounded-full"
        style={{
          transform: `translateY(${offsetY * 0.3}px) rotate(${offsetY * 0.02}deg)`,
        }}
      />
      <div
        className="absolute bottom-20 right-20 w-48 h-48 border border-terracotta/10 rounded-full"
        style={{
          transform: `translateY(${offsetY * -0.2}px) rotate(${offsetY * -0.03}deg)`,
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold-leaf/5 rounded-full blur-xl"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-16 h-16 border border-sage-green/10 rotate-45"
        style={{
          transform: `translateY(${offsetY * -0.15}px) rotate(${45 + offsetY * 0.05}deg)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated greeting */}
        <p className="font-serif italic text-xl md:text-2xl text-sage-green mb-4 animate-[fadeInUp_0.8s_ease_0.2s_both]">
          Hello, I am
        </p>

        {/* Animated name */}
        <h1 className="artistic-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
          <span className="inline-block animate-[fadeInUp_0.8s_ease_0.4s_both]">
            Selim
          </span>
          <br />
          <span className="inline-block text-terracotta animate-[fadeInUp_0.8s_ease_0.6s_both]">
            Reja
          </span>
        </h1>

        {/* Animated golden line */}
        <div className="golden-line mx-auto mb-8 animate-[scaleIn_0.6s_ease_0.8s_both]" />

        {/* Animated description */}
        <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12 animate-[fadeInUp_0.8s_ease_1s_both]">
          A passionate{" "}
          <span className="text-ink-black font-medium relative">
            Full Stack Developer
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta/30" />
          </span>{" "}
          crafting elegant solutions with modern technologies. Blending
          creativity with technical expertise.
        </p>

        {/* Animated buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.8s_ease_1.2s_both]">
          <a
            href="#projects"
            className="group px-8 py-3 bg-ink-black text-soft-white font-sans text-sm tracking-wider uppercase hover:bg-terracotta transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-terracotta transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-3 border-2 border-ink-black text-ink-black font-sans text-sm tracking-wider uppercase hover:bg-ink-black hover:text-soft-white transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute inset-0 bg-ink-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeInUp_0.8s_ease_1.5s_both]">
        <div className="flex flex-col items-center gap-2 text-charcoal/40">
          <span className="font-mono text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 border-2 border-charcoal/20 rounded-full relative">
            <div className="w-1 h-2 bg-terracotta rounded-full absolute top-1 left-1/2 -translate-x-1/2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Animated line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-leaf/30 to-transparent" />
    </section>
  );
};

export default Hero;
