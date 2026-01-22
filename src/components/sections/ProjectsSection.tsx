import type { Project } from "../../types/portfolio";
import { useLanguage } from "../../i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";

type ProjectsSectionProps = {
  projects: Project[];
};

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const { t } = useLanguage();

  return (
    <section id="work" className="section-padding">
      <div className="mx-auto max-w-screen-xl space-y-12 px-6">
        <SectionHeading
          eyebrow={t("projectsSection.eyebrow")}
          title={t("projectsSection.title")}
          description={t("projectsSection.description")}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
