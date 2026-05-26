import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

import techDiagnosisUi from "@/assets/tech-diagnosis-ui.png";
import diseasePredictionUi from "@/assets/disease-prediction-ui.png";
import aspsInterface from "@/assets/asps-interface.jpeg";
import aspsHardware1 from "@/assets/asps-hardware-1.jpeg";
import aspsCircuitDiagramNew from "@/assets/asps-circuit-diagram-new.jpeg";

interface FeaturedProject {
  title: string;
  tag: string;
  description: string;
  focus: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  media?: { type: "image" | "video"; src: string; alt?: string }[];
}

const projects: FeaturedProject[] = [
  {
    title: "Tech Diagnosis AI",
    tag: "Symbolic AI · Expert System",
    description:
      "Rule-based expert system that diagnoses PC hardware and software faults from user-reported symptoms. Built on a custom forward-chaining inference engine with certainty-factor (CF) propagation — designed so every conclusion is explainable, not just probable.",
    focus: [
      "30+ production rules across a domain-partitioned knowledge base",
      "CF propagation handles conflicting evidence with weighted confidence",
      "Full reasoning trace: every diagnosis links back to its rule chain",
      "Tkinter GUI with separate panels for symptoms, results, and explanation",
    ],
    stack: ["Python", "Rule Engine", "Tkinter", "Knowledge Base"],
    githubUrl: "https://github.com/Mark1amgad/Tech-Diagnosis-AI",
    media: [{ type: "image", src: techDiagnosisUi, alt: "Tech Diagnosis AI – knowledge-based expert system UI" }],
  },
  {
    title: "Disease Prediction System",
    tag: "Machine Learning",
    description:
      "End-to-end ML pipeline predicting diseases from binary symptom vectors. Covers the full engineering workflow: data preprocessing, cross-validated training of multiple classifiers, model selection by accuracy, serialization, and deployment as a distributable desktop GUI.",
    focus: [
      "Binary symptom encoding, missing-value handling, and label normalization",
      "Decision Tree, Random Forest, and Naïve Bayes compared via cross-validation",
      "Best model serialized to disk — GUI loads it at runtime, no retraining",
      "Packaged as a standalone distributable Python desktop application",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Tkinter"],
    githubUrl: "https://github.com/Mark1amgad/Disease-Prediction-System",
    media: [{ type: "image", src: diseasePredictionUi, alt: "Disease Prediction System UI" }],
  },
  {
    title: "Automated Smart Parking System",
    tag: "Embedded · IoT",
    description:
      "Dual-Arduino embedded system coordinating entry/exit gate control, real-time slot monitoring, VIP RFID access, and environmental safety alerts. Designed as a full physical prototype with a fused sensor stack, built and tested under real hardware conditions.",
    focus: [
      "Two Arduino boards coordinated over shared I/O and event-driven logic",
      "Sensor fusion: IR (occupancy), ultrasonic (clearance), RFID, flame, LDR",
      "RFID-gated VIP access with differentiated slot reservation logic",
      "End-to-end hardware build: wiring, calibration, and physical prototype testing",
    ],
    stack: ["Arduino", "C/C++", "RFID", "IoT", "Embedded"],
    githubUrl: "https://github.com/Mark1amgad/ASPS-Arduino",
    liveUrl: "https://easy-park-tech-vercel.vercel.app/",
    liveLabel: "Live Demo",
    media: [
      { type: "image", src: aspsInterface, alt: "ASPS – annotated system overview" },
      { type: "image", src: aspsHardware1, alt: "ASPS hardware prototype" },
      { type: "image", src: aspsCircuitDiagramNew, alt: "ASPS circuit diagram" },
    ],
  },
];

const FeaturedProjects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="featured-projects" className="py-24 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label mb-3">02 / Featured Projects</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
            Selected engineering work.
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-3">
            Three projects that best represent how I approach AI, machine learning, and embedded systems.
          </p>
        </motion.div>

        {/* Bento grid – Tech Diagnosis AI is the headline tile */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <FeaturedCard
            project={projects[0]}
            className="lg:col-span-6"
            large
            onOpen={() => setOpenIndex(0)}
          />
          <FeaturedCard project={projects[1]} className="lg:col-span-3" onOpen={() => setOpenIndex(1)} />
          <FeaturedCard project={projects[2]} className="lg:col-span-3" onOpen={() => setOpenIndex(2)} />
        </div>
      </div>

      {openIndex !== null && (
        <ProjectModal
          isOpen={openIndex !== null}
          onClose={() => setOpenIndex(null)}
          title={projects[openIndex].title}
          description={projects[openIndex].description}
          skills={projects[openIndex].stack}
          media={projects[openIndex].media || []}
          githubUrl={projects[openIndex].githubUrl}
          externalUrl={projects[openIndex].liveUrl}
          externalLabel={projects[openIndex].liveLabel}
        />
      )}
    </section>
  );
};

const FeaturedCard = ({
  project,
  className = "",
  large = false,
  onOpen,
}: {
  project: FeaturedProject;
  className?: string;
  large?: boolean;
  onOpen: () => void;
}) => {
  const mainMedia = project.media?.[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.25)] transition-all duration-300 ${className}`}
    >
      <button
        onClick={onOpen}
        aria-label={`Open ${project.title} details`}
        className={`relative w-full overflow-hidden bg-secondary/40 ${large ? "h-80 md:h-[420px]" : "h-56 md:h-64"}`}
      >
        {mainMedia && (
          <img
            src={mainMedia.src}
            alt={mainMedia.alt || project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-60" />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background/70 backdrop-blur-md border border-border text-[10px] font-mono uppercase tracking-wider text-primary">
          {project.tag}
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-md border border-border text-[11px] font-mono text-foreground inline-flex items-center gap-1.5">
          Click to inspect <ArrowUpRight size={12} />
        </div>
      </button>

      <div className={`flex flex-col flex-1 p-6 ${large ? "md:p-8" : ""}`}>
        <h3 className={`font-display font-semibold tracking-tight mb-2 ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-1.5 mb-5">
          {project.focus.slice(0, large ? 4 : 3).map((f) => (
            <li key={f} className="text-sm text-foreground/80 flex gap-2">
              <span className="text-primary font-mono">→</span> {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => (
            <span key={s} className="px-2 py-0.5 text-[10px] font-mono rounded border border-border text-muted-foreground">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 text-xs">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={14} /> {project.liveLabel || "Live"}
            </a>
          )}
          <button
            onClick={onOpen}
            className="ml-auto inline-flex items-center gap-1 text-primary hover:gap-2 transition-all"
          >
            Details <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
