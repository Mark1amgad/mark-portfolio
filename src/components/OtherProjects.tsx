import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface OtherProject {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  thumbnail?: string;
  media?: MediaItem[];
}

interface OtherProjectsProps {
  id?: string;
  index?: string;
  title?: string;
  subtitle?: string;
  projects: OtherProject[];
}

const OtherProjects = ({
  id = "other-projects",
  index = "03",
  title = "Other Projects",
  subtitle = "Additional academic and practical work — smaller in scope but still built end-to-end.",
  projects,
}: OtherProjectsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id={id} className="py-24 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="section-label mb-3">{index} / {title}</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mt-3">{subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => {
            const hasModal = (p.media && p.media.length > 0) || !!p.thumbnail;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => hasModal && setOpenIndex(i)}
                className={`group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all ${hasModal ? "cursor-pointer" : ""}`}
              >
                {p.thumbnail && (
                  <div className="relative h-36 overflow-hidden bg-secondary/40 border-b border-border">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex gap-2 text-muted-foreground">
                      {p.githubUrl && (
                        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors">
                          <Github size={14} />
                        </a>
                      )}
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.stack.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-[10px] font-mono rounded border border-border text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  {hasModal && (
                    <div className="text-[11px] font-mono text-primary inline-flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                      Details <ArrowUpRight size={12} />
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
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

export default OtherProjects;
