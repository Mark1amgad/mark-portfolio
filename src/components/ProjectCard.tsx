import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  media?: MediaItem[];
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, skills, media = [], githubUrl, index }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get the main (first) media item for the poster
  const mainMedia = media[0];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setIsModalOpen(true)}
        className="group glass-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
      >
        {/* Project Main Media (Poster) */}
        <div className="relative h-48 bg-muted overflow-hidden">
          {mainMedia ? (
            mainMedia.type === "video" ? (
              <video
                src={mainMedia.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <img
                src={mainMedia.src}
                alt={mainMedia.alt || title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <span className="text-4xl font-bold text-muted-foreground/30">{title.charAt(0)}</span>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Media count indicator */}
          {media.length > 1 && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-md text-xs font-medium text-foreground">
              {media.length} {media.some(m => m.type === "video") ? "items" : "images"}
            </div>
          )}
          
          {/* Click to view indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg text-sm font-medium text-foreground">
              Click to view
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
            {skills.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                +{skills.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        skills={skills}
        media={media}
        githubUrl={githubUrl}
      />
    </>
  );
};

export default ProjectCard;
