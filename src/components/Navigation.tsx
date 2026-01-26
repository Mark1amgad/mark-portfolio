import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-bold hover:text-primary transition-colors"
        >
          M<span className="gradient-text">A</span>N
        </button>

        <div className="hidden md:flex items-center gap-8">
          <NavLink onClick={() => scrollTo("university-projects")}>University</NavLink>
          <NavLink onClick={() => scrollTo("external-projects")}>External</NavLink>
          <NavLink onClick={() => scrollTo("portfolio-link")}>Portfolio</NavLink>
        </div>

        <a
          href="mailto:mark@example.com"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
  </button>
);

export default Navigation;
