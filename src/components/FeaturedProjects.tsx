import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

import techDiagnosisUi from "@/assets/tech-diagnosis-ui.png";
import diseasePredictionUi from "@/assets/disease-prediction-ui.png";
import aspsHardware1 from "@/assets/asps-hardware-1.jpeg";
import aspsHardware2 from "@/assets/asps-hardware-2.jpeg";
import aspsCover from "@/assets/asps-cover.png";
import aspsCircuitDiagramNew from "@/assets/asps-circuit-diagram-new.jpeg";
import aspsRealProject from "@/assets/asps-real-project.jpeg";

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
      "Knowledge-based expert system that diagnoses PC hardware/software faults from user symptoms. Uses a rule engine with forward chaining and certainty-factor aggregation, then surfaces a fully traceable reasoning chain explaining every conclusion.",
    focus: [
      "30+ production rules over a structured knowledge base",
      "Forward chaining with certainty-factor (CF) propagation",
      "Human-readable reasoning trace for every diagnosis",
      "Tkinter GUI with symptoms, results, and explanation panels",
    ],
    stack: ["Python", "Rule Engine", "Tkinter", "Knowledge Base"],
    githubUrl: "https://github.com/Mark1amgad/Tech-Diagnosis-AI",
    media: [{ type: "image", src: techDiagnosisUi, alt: "Tech Diagnosis AI – knowledge-based expert system UI" }],
  },
  {
    title: "Disease Prediction System",
    tag: "Machine Learning",
    description:
      "End-to-end ML pipeline that predicts diseases from a symptom vector. Trains and evaluates multiple classifiers on a medical dataset, persists the best model, and serves predictions through a desktop GUI.",
    focus: [
      "Preprocessing + feature engineering on symptom data",
      "Multi-model training and evaluation",
      "Serialized model loaded by the desktop app",
      "Packaged as a distributable Python application",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Tkinter"],
    githubUrl: "https://github.com/Mark1amgad/Disease-Prediction-System",
    media: [{ type: "image", src: diseasePredictionUi, alt: "Disease Prediction System UI" }],
  },
  {
    title: "Automated Smart Parking System",
    tag: "Embedded · IoT",
    description:
      "Dual-Arduino smart parking prototype coordinating entry/exit gates, slot detection, VIP RFID access, and safety alerts using a fused IR + ultrasonic + RFID + flame + LDR sensor stack with a buzzer and LCD interface.",
    focus: [
      "Two coordinated Arduino boards over shared logic",
      "Sensor fusion: IR, ultrasonic, RFID, flame, LDR",
      "RFID-gated VIP access + real-time safety alerts",
      "End-to-end hardware build with wired prototype",
    ],
    stack: ["Arduino", "C/C++", "RFID", "IoT", "Embedded"],
    githubUrl: "https://github.com/Mark1amgad/ASPS-Arduino",
    liveUrl: "https://easy-park-tech.lovable.app",
    liveLabel: "Live demo",
    media: [
      { type: "image", src: aspsHardware1, alt: "ASPS hardware prototype" },
      { type: "image", src: aspsHardware2, alt: "ASPS hardware close-up" },
      { type: "image", src: aspsRealProject, alt: "ASPS real-world build" },
      { type: "image", src: aspsCircuitDiagramNew, alt: "ASPS circuit diagram" },
      { type: "image", src: aspsCover, alt: "ASPS cover" },
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
