import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface Project {
  title: string;
  description: string;
  skills: string[];
  media?: MediaItem[];
  githubUrl?: string;
  externalUrl?: string;
  externalLabel?: string;
}

interface ProjectsSectionProps {
  id: string;
  title: string;
  subtitle: string;
  projects: Project[];
}

const ProjectsSection = ({ id, title, subtitle, projects }: ProjectsSectionProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader id={id} title={title} subtitle={subtitle} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              media={project.media}
              githubUrl={project.githubUrl}
              externalUrl={project.externalUrl}
              externalLabel={project.externalLabel}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
