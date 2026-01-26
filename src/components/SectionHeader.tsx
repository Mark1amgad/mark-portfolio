import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeader = ({ title, subtitle, id }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
      id={id}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title.split(" ").map((word, idx) => (
          <span key={idx}>
            {idx === title.split(" ").length - 1 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-6 rounded-full" />
    </motion.div>
  );
};

export default SectionHeader;
