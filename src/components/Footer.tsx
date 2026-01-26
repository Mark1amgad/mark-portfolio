import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer id="portfolio-link" className="relative py-20 px-6">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">Mark Amgad Nassief</h3>
            <p className="text-sm text-muted-foreground">AI Engineering Student</p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://www.linkedin.com/in/markk-amgad" icon={<Linkedin size={20} />} />
            <SocialLink href="https://github.com/Mark1amgad" icon={<Github size={20} />} />
            <SocialLink href="mailto:Markbotros52@gmail.com" icon={<Mail size={20} />} />
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
const SocialLink = ({
  href,
  icon
}: {
  href: string;
  icon: React.ReactNode;
}) => <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
    {icon}
  </a>;
export default Footer;