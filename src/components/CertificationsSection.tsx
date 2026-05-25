import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "Artificial Intelligence Ambassadors Program", issuer: "NTI" },
  { name: "AI Fundamentals", issuer: "IBM SkillsBuild" },
  { name: "Introduction to Modern AI", issuer: "Cisco" },
  { name: "AI for Work and Life", issuer: "University of North Florida" },
  { name: "Data Analysis Training Program", issuer: "Creativa Innovation Hub" },
  { name: "ITIDA Gigs Freelancing Program", issuer: "ITIDA" },
  { name: "Be Ready Initiative — Employability Skills", issuer: "Be Ready" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications-section" className="py-24 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label mb-3">06 / Certifications</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Programs & certifications.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="mt-0.5 w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Award size={15} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium leading-snug">{c.name}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1">{c.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
