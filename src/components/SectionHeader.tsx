import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
  index?: string;
  eyebrow?: string;
}

const SectionHeader = ({ title, subtitle, id, index, eyebrow }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
      id={id}
    >
      <div className="section-label mb-3">{index ? `${index} / ` : ""}{eyebrow || title}</div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mt-3 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
