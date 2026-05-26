import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <div className="section-label mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            AI Engineering · New Mansoura University
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-balance mb-6">
            Building <span className="gradient-text">intelligent systems</span> and engineering-focused software.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            I'm <span className="text-foreground font-medium">Mark Amgad</span> — an AI Engineering student
            working at the intersection of machine learning, symbolic AI, embedded systems, and software engineering.
            I design and build practical, well-architected projects end-to-end.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#featured-projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/Mark1amgad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/40 text-sm font-medium transition-all"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/markk-amgad/"
              target="_blank"
              rel="noopener noreferrer external"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.linkedin.com/in/markk-amgad/", "_blank", "noopener,noreferrer");
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/40 text-sm font-medium transition-all"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/40 text-sm font-medium transition-all"
            >
              <FileText size={16} /> View CV
            </a>
          </div>
        </motion.div>

        {/* Right meta column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="relative rounded-xl border border-border bg-card/60 p-6 font-mono text-xs leading-relaxed">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 text-muted-foreground">~/profile.json</span>
            </div>
            <pre className="text-muted-foreground whitespace-pre-wrap">
{`{
  "role":     "AI Engineering Student",
  "school":   "New Mansoura University",
  "focus":    [
    "Machine Learning",
    "Symbolic AI",
    "Algorithms & DSA",
    "Embedded Systems"
  ],
  "stack":    ["Python","C#","C++","Arduino"],
  "status":   "open to opportunities"
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
