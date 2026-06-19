"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-8 py-4",
        isScrolled
          ? "bg-classic-cream/90 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-serif text-2xl font-bold text-ink-black hover:text-terracotta transition-colors duration-300"
        >
          S<span className="text-terracotta">.</span>Reja
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "relative font-sans text-sm tracking-wider uppercase py-2 transition-colors duration-300",
                activeSection === item.href.substring(1)
                  ? "text-ink-black"
                  : "text-charcoal/60 hover:text-ink-black",
              )}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta transform origin-left transition-transform duration-300" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
