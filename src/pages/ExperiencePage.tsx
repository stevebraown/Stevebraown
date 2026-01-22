import { MainLayout } from "../components/layout/MainLayout";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SEO } from "../components/seo/SEO";
import { useLanguage } from "../i18n/LanguageProvider";

export const ExperiencePage = () => {
  const { t, language } = useLanguage();

  const title = "Experience – Steve Braown | full-stack product engineer";
  const description =
    "Experience highlights from Steve Braown across product and platform engineering with measurable outcomes.";

  return (
    <MainLayout>
      <SEO
        title={title}
        description={description}
        lang={language}
        canonical="https://stevebraown.vercel.app/experience"
      />
      <section className="section-padding">
        <div className="mx-auto max-w-screen-xl space-y-8 px-6">
          <SectionHeading
            eyebrow={t("experienceSection.eyebrow")}
            title={t("experienceSection.title")}
            description={t("experienceSection.description")}
          />
        </div>
      </section>
      <ExperienceSection />
    </MainLayout>
  );
};
