import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github } from "lucide-react";

const links = [
  { id: "about-section", label: "About" },
  { id: "featured-projects", label: "Projects" },
  { id: "experience-section", label: "Experience" },
  { id: "skills-section", label: "Skills" },
  { id: "certifications-section", label: "Certifications" },
  { id: "contact-section", label: "Contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }}
          className="font-display text-base font-semibold tracking-tight flex items-center gap-2"
        >
          <span className="font-mono text-primary">{"</>"}</span>
          <span>mark<span className="text-primary">.</span>amgad</span>
        </button>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <a
          href="https://github.com/Mark1amgad"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-border bg-secondary/60 hover:border-primary/40 text-xs font-mono transition-all"
        >
          <Github size={14} /> GitHub
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden p-2 text-foreground z-[60]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl border-b border-border`}
      >
        <div className="flex flex-col items-start gap-1 px-6 py-5">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
