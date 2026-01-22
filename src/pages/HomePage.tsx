import { MainLayout } from "../components/layout/MainLayout";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { FeatureBand } from "../components/sections/FeatureBand";
import { HeroSection } from "../components/sections/HeroSection";
import { NotesSection } from "../components/sections/NotesSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { StatsStrip } from "../components/sections/StatsStrip";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/projects";
import { sectionNav } from "../data/sections";
import { skillGroups } from "../data/skills";
import { stats } from "../data/stats";
import { useLanguage } from "../i18n/LanguageProvider";
import { SEO } from "../components/seo/SEO";

export const HomePage = () => {
  const { translateProject, t, language } = useLanguage();

  const localizedProjects = projects.map(translateProject);
  const featuredProjects = localizedProjects.filter((project) => project.highlight);
  const localizedSections = [
    { id: "home", label: t("nav.home", "Home") },
    ...sectionNav.map((item) => ({
      ...item,
      label: t(`nav.${item.id}`, item.label)
    }))
  ];

  const pageTitle = t(
    "meta.title",
    "Systems-minded full-stack product engineer – Steve Braown"
  );
  const pageDescription = t(
    "meta.description",
    "Portfolio of Steve Braown, systems-minded full-stack product engineer in the UK focusing on payments, platforms, Rust, and reliability."
  );

  return (
    <MainLayout>
      <SEO title={pageTitle} description={pageDescription} lang={language} />
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
          anchorId={project.slug ?? project.id}
          techStack={project.techStack.slice(0, 4)}
          ctaLabel={project.links[0]?.label ?? t("buttons.viewWork")}
          ctaLink={project.links[0]?.href ?? "#work"}
          metrics={project.featuredMetrics}
          layout={index % 2 === 0 ? "left" : "right"}
          accentClassName={project.accent}
        />
      ))}

      <ProjectsSection projects={localizedProjects} />
      <SkillsSection groups={skillGroups} />
      <ExperienceSection />
      <AboutSection />
      <NotesSection />
      <ContactSection />
    </MainLayout>
  );
};
