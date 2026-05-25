import { motion } from "framer-motion";

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
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <h3 className="font-display text-xl font-semibold">Data Analytics Intern</h3>
              <div className="text-primary font-mono text-sm mt-0.5">DecodeLabs</div>
            </div>
            <div className="font-mono text-xs text-muted-foreground">Internship</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Worked on practical data analytics tasks: cleaning and preprocessing real datasets,
            running exploratory analysis, and building Python + Pandas workflows to surface
            patterns and feed downstream reporting.
          </p>
          <ul className="space-y-1.5 text-sm text-foreground/80">
            <li className="flex gap-2"><span className="text-primary font-mono">→</span> Data cleaning and validation pipelines</li>
            <li className="flex gap-2"><span className="text-primary font-mono">→</span> Preprocessing for downstream analysis</li>
            <li className="flex gap-2"><span className="text-primary font-mono">→</span> Exploratory analysis with Pandas / NumPy</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
