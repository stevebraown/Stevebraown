import { MainLayout } from "../components/layout/MainLayout";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageProvider";
import { SEO } from "../components/seo/SEO";

export const ProjectsPage = () => {
  const { translateProject, t, language } = useLanguage();
  const localizedProjects = projects.map(translateProject);

  const title = "Projects – payments, platforms, Rust systems | Steve Braown";
  const description =
    "Featured projects from Steve Braown: payments platforms, campus coordination, Rust key-value store, and reliable commerce flows.";

  return (
    <MainLayout>
      <SEO
        title={title}
        description={description}
        lang={language}
        canonical="https://stevebraown.vercel.app/projects"
      />
      <section className="section-padding">
        <div className="mx-auto max-w-screen-xl space-y-8 px-6">
          <SectionHeading
            eyebrow={t("projectsSection.eyebrow")}
            title={t("projectsSection.title")}
            description={t("projectsSection.description")}
          />
        </div>
      </section>
      <ProjectsSection projects={localizedProjects} />
    </MainLayout>
  );
};
