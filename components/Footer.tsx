const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-ink-black text-soft-white/60">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-serif text-xl text-soft-white mb-2">
          Selim <span className="text-terracotta">Reja</span>
        </p>
        <p className="font-sans text-sm mb-6">
          Crafting digital experiences with passion and precision.
        </p>

        <div className="h-px w-20 bg-gold-leaf/30 mx-auto mb-6" />

        <p className="font-mono text-xs tracking-wider">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
