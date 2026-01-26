import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Globe, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("university-projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-4 leading-tight"
        >
          Mark Amgad{" "}
          <span className="gradient-text">Nassief</span>
        </motion.h1>

        {/* Full name subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-muted-foreground mb-2"
        >
          Botros Mekhaiel
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-primary mb-8"
        >
          AI Engineering Student
        </motion.h2>

        {/* Profile Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate AI Engineering student with hands-on experience in software development, 
          data analysis, and machine learning. Combining technical expertise with creative 
          problem-solving to build innovative solutions.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <ContactLink icon={<Mail size={18} />} href="mailto:mark@example.com" label="Email" />
          <ContactLink icon={<Phone size={18} />} href="tel:+1234567890" label="Phone" />
          <ContactLink icon={<Linkedin size={18} />} href="https://linkedin.com" label="LinkedIn" />
          <ContactLink icon={<Globe size={18} />} href="#" label="Portfolio" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm">View Projects</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

const ContactLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary hover:bg-muted border border-border hover:border-primary/50 transition-all duration-300 group"
  >
    <span className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default Hero;
