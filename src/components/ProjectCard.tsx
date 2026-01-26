import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ProjectImageCarousel from "./ProjectImageCarousel";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  images?: string[];
  index: number;
}

const ProjectCard = ({ title, description, skills, images = [], index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
    >
      {/* Project Image Carousel */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <ProjectImageCarousel images={images} title={title} />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <ExternalLink 
            size={18} 
            className="text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 mt-1" 
          />
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
