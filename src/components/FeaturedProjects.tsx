import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

import aiSearch1 from "@/assets/ai-search-1.png";
import aiSearch2 from "@/assets/ai-search-2.png";
import aiSearch3 from "@/assets/ai-search-3.png";
import aiSearch4 from "@/assets/ai-search-4.png";
import aspsCover from "@/assets/asps-cover.png";
import aspsHardware1 from "@/assets/asps-hardware-1.jpeg";
import aspsHardware2 from "@/assets/asps-hardware-2.jpeg";
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
  /** symbolic preview when no screenshots exist */
  preview?: React.ReactNode;
}

const projects: FeaturedProject[] = [
  {
    title: "Tech Diagnosis AI",
    tag: "Symbolic AI",
    description:
      "An expert system that diagnoses technical hardware/software issues using symbolic AI — forward chaining over a rule base with certainty factors and explainable reasoning chains.",
    focus: ["Forward chaining inference", "Certainty factor aggregation", "Explainable rule traces"],
    stack: ["Python", "Symbolic AI", "Rule Engine", "Streamlit"],
    githubUrl: "https://github.com/Mark1amgad",
    preview: (
      <div className="absolute inset-0 p-6 font-mono text-[11px] leading-relaxed text-muted-foreground overflow-hidden">
        <div className="text-primary mb-2">// inference trace</div>
        <div>IF <span className="text-foreground">device_won't_boot</span> AND <span className="text-foreground">no_power_led</span></div>
        <div className="pl-3">THEN <span className="text-primary">power_supply_fault</span> <span className="text-foreground/60">[cf=0.85]</span></div>
        <div className="mt-2">IF <span className="text-foreground">power_supply_fault</span> AND <span className="text-foreground">smell_burnt</span></div>
        <div className="pl-3">THEN <span className="text-primary">replace_psu</span> <span className="text-foreground/60">[cf=0.92]</span></div>
        <div className="mt-3 text-primary">→ conclusion: replace_psu (0.78)</div>
      </div>
    ),
  },
  {
    title: "Search Algorithm Visualizer",
    tag: "Algorithms",
    description:
      "Interactive Streamlit app that compares classic graph search algorithms (BFS, DFS, DLS, IDS, UCS, Greedy Best-First) on a sample graph. Visualizes traversal paths, tree expansion, and per-algorithm metrics.",
    focus: ["6 uninformed/informed algorithms", "Metric tracking", "Tree expansion visualization"],
    stack: ["Python", "Streamlit", "Graph Search", "DSA"],
    githubUrl: "https://github.com/Mark1amgad/search-algorithm-simulator",
    media: [
      { type: "image", src: aiSearch1, alt: "Algorithm selection" },
      { type: "image", src: aiSearch2, alt: "Options" },
      { type: "image", src: aiSearch3, alt: "Results" },
      { type: "image", src: aiSearch4, alt: "Tree visualization" },
    ],
  },
  {
    title: "Automated Smart Parking System",
    tag: "Embedded",
    description:
      "Dual-Arduino IoT parking system orchestrating entry/exit gates, slot detection, VIP RFID access, and safety alerts via IR, ultrasonic, RFID, flame, LDR, buzzer and LCD components.",
    focus: ["Dual-board coordination", "RFID + sensor fusion", "Real-time safety logic"],
    stack: ["Arduino", "C/C++", "RFID", "IoT"],
    liveUrl: "https://easy-park-tech.lovable.app",
    liveLabel: "Live demo",
    media: [
      { type: "image", src: aspsCover, alt: "ASPS cover" },
      { type: "image", src: aspsHardware1, alt: "Hardware 1" },
      { type: "image", src: aspsHardware2, alt: "Hardware 2" },
      { type: "image", src: aspsCircuitDiagramNew, alt: "Circuit diagram" },
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
            Three projects that best represent how I approach AI, algorithms, and embedded systems.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <FeaturedCard project={projects[0]} className="lg:col-span-4 lg:row-span-2" large onOpen={() => setOpenIndex(0)} />
          <FeaturedCard project={projects[1]} className="lg:col-span-2" onOpen={() => setOpenIndex(1)} />
          <FeaturedCard project={projects[2]} className="lg:col-span-2" onOpen={() => setOpenIndex(2)} />
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
      className={`group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 ${className}`}
    >
      {/* Preview */}
      <button
        onClick={onOpen}
        className={`relative w-full overflow-hidden bg-secondary/40 ${large ? "h-72 md:h-96" : "h-44"}`}
      >
        {mainMedia ? (
          <img
            src={mainMedia.src}
            alt={mainMedia.alt || project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : project.preview ? (
          <div className="relative w-full h-full bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.15),transparent_60%)]">
            {project.preview}
          </div>
        ) : null}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background/70 backdrop-blur-md border border-border text-[10px] font-mono uppercase tracking-wider text-primary">
          {project.tag}
        </div>
      </button>

      <div className={`flex flex-col flex-1 p-6 ${large ? "md:p-8" : ""}`}>
        <h3 className={`font-display font-semibold tracking-tight mb-2 ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

        {large && (
          <ul className="space-y-1.5 mb-5">
            {project.focus.map((f) => (
              <li key={f} className="text-sm text-foreground/80 flex gap-2">
                <span className="text-primary font-mono">→</span> {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => (
            <span key={s} className="px-2 py-0.5 text-[10px] font-mono rounded border border-border text-muted-foreground">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 text-xs">
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
