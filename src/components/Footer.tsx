import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-display font-semibold">Mark Amgad Nassief</div>
          <div className="text-xs font-mono text-muted-foreground mt-1">
            AI Engineering Student · New Mansoura University
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SocialLink href="https://github.com/Mark1amgad" icon={<Github size={16} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/markk-amgad" icon={<Linkedin size={16} />} label="LinkedIn" />
          <SocialLink href="mailto:Markbotros52@gmail.com" icon={<Mail size={16} />} label="Email" />
        </div>

        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} — built with care.
        </p>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-md border border-border bg-secondary/50 hover:border-primary/40 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
  >
    {icon}
  </a>
);

export default Footer;
