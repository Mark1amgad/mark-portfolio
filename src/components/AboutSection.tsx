import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";

const pillars = [
  { k: "AI & ML", v: "Classical models, NLP, evaluation pipelines" },
  { k: "Symbolic AI", v: "Rule-based reasoning, search, knowledge systems" },
  { k: "Software", v: "OOP, clean architecture, end-to-end products" },
  { k: "Embedded", v: "Arduino, sensor automation, real-time logic" },
];

const AboutSection = () => {
  return (
    <section id="about-section" className="py-24 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label mb-3">01 / About</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl">
            An engineering mindset applied to <span className="gradient-text">AI and systems</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-2xl bg-primary/20 blur-2xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
              <img src={profilePhoto} alt="Mark Amgad Nassief" className="w-full aspect-square object-cover" />
            </div>
            <div className="mt-4 font-mono text-xs text-muted-foreground">
              <div><span className="text-primary">→</span> New Mansoura University</div>
              <div><span className="text-primary">→</span> AI Engineering, BSc</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I build projects that sit between AI research and traditional software engineering — from
              symbolic reasoning systems and algorithm visualizers to embedded automation and data
              dashboards. My focus is on writing readable code, structuring problems clearly, and
              shipping things that actually work.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I care about strong fundamentals: data structures, algorithms, OOP, and how systems
              fit together. Every project here was built end-to-end, with attention to the engineering
              decisions behind it.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-border/70 border border-border rounded-xl overflow-hidden">
              {pillars.map((p) => (
                <div key={p.k} className="bg-card p-5">
                  <div className="font-mono text-xs text-primary mb-1.5">{p.k}</div>
                  <div className="text-sm text-foreground/90">{p.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
