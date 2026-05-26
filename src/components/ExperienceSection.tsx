import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience-section" className="py-24 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label mb-3">04 / Experience</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Where I've applied this in practice.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl border border-border bg-card p-6 md:p-8 max-w-3xl"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
            <div>
              <h3 className="font-display text-xl font-semibold">Data Analytics Intern</h3>
              <div className="text-primary font-mono text-sm mt-0.5">DecodeLabs</div>
            </div>
            <div className="font-mono text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md self-start">
              Internship
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Worked on practical data analytics tasks: cleaning and preprocessing real datasets,
            running exploratory analysis, and building Python + Pandas workflows to surface
            patterns and feed downstream reporting.
          </p>
          <ul className="space-y-2 text-sm text-foreground/80 mb-7">
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">→</span> Data cleaning and validation pipelines</li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">→</span> Preprocessing for downstream analysis</li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">→</span> Exploratory analysis with Pandas / NumPy</li>
          </ul>

          <a
            href="https://github.com/Mark1amgad/DecodeLabs-Internship"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-border bg-secondary/60 hover:bg-secondary hover:border-primary/50 text-sm font-medium transition-all"
          >
            <Github size={15} className="text-primary" />
            View Internship Repository
            <ExternalLink size={12} className="text-muted-foreground group-hover:text-primary transition-colors ml-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
