import { MainLayout } from "./components/layout/MainLayout";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { FeatureBand } from "./components/sections/FeatureBand";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { StatsStrip } from "./components/sections/StatsStrip";
import { SectionHeading } from "./components/ui/SectionHeading";
import { projects } from "./data/projects";
import { sectionNav } from "./data/sections";
import { skillGroups } from "./data/skills";
import { stats } from "./data/stats";
import { useLanguage } from "./i18n/LanguageProvider";

const App = () => {
  const { translateProject, t } = useLanguage();

  const localizedProjects = projects.map(translateProject);
  const featuredProjects = localizedProjects.filter((project) => project.highlight);
  const localizedSections = [
    { id: "top", label: t("nav.home") },
    ...sectionNav.map((item) => ({
      ...item,
      label: t(`nav.${item.id}`, item.label)
    }))
  ];

  return (
    <MainLayout>
      <HeroSection sections={localizedSections} />
      <StatsStrip stats={stats} />

      <section className="section-padding">
        <div className="mx-auto max-w-screen-xl space-y-10 px-6">
          <SectionHeading
            eyebrow={t("featured.eyebrow")}
            title={t("featured.title")}
            description={t("featured.description")}
          />
        </div>
      </section>

      {featuredProjects.map((project, index) => (
        <FeatureBand
          key={project.id}
          eyebrow={t("featured.eyebrow")}
          title={project.title}
          description={project.description}
          techStack={project.techStack.slice(0, 4)}
          ctaLabel={project.links[0]?.label ?? t("buttons.viewWork")}
          ctaLink={project.links[0]?.href ?? "#projects"}
          metrics={project.featuredMetrics}
          layout={index % 2 === 0 ? "left" : "right"}
          accentClassName={project.accent}
        />
      ))}

      <ProjectsSection projects={localizedProjects} />
      <SkillsSection groups={skillGroups} />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </MainLayout>
  );
};

export default App;
