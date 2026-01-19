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

const featuredProjects = projects.filter((project) => project.highlight);

const App = () => (
  <MainLayout>
    <HeroSection sections={sectionNav} />
    <StatsStrip stats={stats} />

    <section className="section-padding">
      <div className="mx-auto max-w-screen-xl space-y-10 px-6">
        <SectionHeading
          eyebrow="Featured work"
          title="Anchor projects with systems-grade depth"
          description="Focused on reliability, clear state models, and designs that stay understandable as systems grow."
        />
      </div>
    </section>

    {featuredProjects.map((project, index) => (
      <FeatureBand
        key={project.id}
        eyebrow="Featured project"
        title={project.title}
        description={project.description}
        techStack={project.techStack.slice(0, 4)}
        ctaLabel={project.links[0]?.label ?? "View project"}
        ctaLink={project.links[0]?.href ?? "#projects"}
        metrics={project.featuredMetrics}
        layout={index % 2 === 0 ? "left" : "right"}
        accentClassName={project.accent}
      />
    ))}

    <ProjectsSection projects={projects} />
    <SkillsSection groups={skillGroups} />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />
  </MainLayout>
);

export default App;
