import type { Project } from "../../types/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";

type ProjectsSectionProps = {
  projects: Project[];
};

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <section id="projects" className="section-padding">
    <div className="mx-auto max-w-screen-xl space-y-12 px-6">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects shaped by constraints, recovery, and clear intent"
        description="Each project emphasizes reliability, trade-off decisions, and interfaces that make complex systems understandable."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);
