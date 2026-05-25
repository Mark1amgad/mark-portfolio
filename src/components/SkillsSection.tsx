import { motion } from "framer-motion";

const groups = [
  {
    label: "Programming",
    items: ["Python", "C#", "C++", "SQL"],
  },
  {
    label: "AI & Data",
    items: ["Scikit-learn", "Pandas", "NumPy"],
  },
  {
    label: "Engineering",
    items: ["Data Structures & Algorithms", "OOP", "Problem Solving"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Streamlit", "Jupyter Notebook", "AutoCAD", "Arduino IDE"],
  },
  {
    label: "Embedded Systems",
    items: ["Arduino Uno", "RFID Integration", "Sensor Automation"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills-section" className="py-24 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label mb-3">05 / Skills</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Stack & competencies.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/70 border border-border rounded-xl overflow-hidden">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary font-mono text-xs">[{String(i + 1).padStart(2, "0")}]</span>
                <h3 className="font-display text-base font-semibold">{g.label}</h3>
              </div>
              <ul className="space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
