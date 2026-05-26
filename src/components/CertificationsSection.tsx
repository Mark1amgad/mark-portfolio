import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    name: "Artificial Intelligence Ambassadors Program",
    issuer: "NTI",
    file: "/files/certifications/nti-ai-ambassadors.jpg",
  },
  {
    name: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    file: "/files/certifications/ibm-ai-fundamentals.pdf",
  },
  {
    name: "Introduction to Modern AI",
    issuer: "LinkedIn Learning",
    file: "/files/certifications/modern-ai-linkedin.pdf",
  },
  {
    name: "AI for Work and Life",
    issuer: "University of North Florida",
    file: "/files/certifications/ai-for-work-and-life.pdf",
  },
  {
    name: "Data Analysis Training Program",
    issuer: "Creativa Innovation Hub — New Mansoura",
    file: "/files/certifications/creativa-data-analysis.pdf",
  },
  {
    name: "ITIDA Gigs Freelancing Program",
    issuer: "ITIDA",
    file: "/files/certifications/itida-gigs-freelancing.jpg",
  },
  {
    name: "Be Ready Initiative — Employability Skills",
    issuer: "Ministry of Communications — Egypt",
    file: "/files/certifications/be-ready-employability.pdf",
  },
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
            Programs &amp; certifications.
          </h2>
          <p className="text-sm text-muted-foreground mt-3 font-mono">
            Click any certificate to preview it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certs.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-card/80 hover:-translate-y-0.5 transition-all cursor-pointer relative"
            >
              <div className="mt-0.5 w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                <Award size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium leading-snug pr-5">{c.name}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1">{c.issuer}</div>
              </div>
              <ExternalLink
                size={12}
                className="absolute top-3.5 right-3.5 text-muted-foreground/0 group-hover:text-primary/70 transition-all"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
