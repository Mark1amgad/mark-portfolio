import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

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
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="text-xl font-black transition-colors duration-300"
        >
          <span className={`transition-colors duration-300 ${logoHovered ? 'text-primary' : 'text-foreground'}`}>M</span>
          <span className={`transition-colors duration-300 ${logoHovered ? 'text-foreground' : 'text-primary'}`}>A</span>
          <span className={`transition-colors duration-300 ${logoHovered ? 'text-primary' : 'text-foreground'}`}>N</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <NavLink onClick={() => scrollTo("university-projects")}>University</NavLink>
          <NavLink onClick={() => scrollTo("external-projects")}>External</NavLink>
          <NavLink onClick={() => scrollTo("contact-section")}>Contact</NavLink>
        </div>

        <button
          onClick={() => scrollTo("contact-section")}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </button>
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
