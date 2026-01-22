import { MainLayout } from "../components/layout/MainLayout";
import { AboutSection } from "../components/sections/AboutSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SEO } from "../components/seo/SEO";
import { useLanguage } from "../i18n/LanguageProvider";

export const AboutPage = () => {
  const { t, language } = useLanguage();

  const title = "About Steve Braown – systems-minded full-stack engineer";
  const description =
    "Systems-minded full-stack product engineer in the UK focused on reliable web platforms, payments, and infrastructure-adjacent software.";

  return (
    <MainLayout>
      <SEO
        title={title}
        description={description}
        lang={language}
        canonical="https://stevebraown.vercel.app/about"
      />
      <section className="section-padding">
        <div className="mx-auto max-w-screen-xl space-y-8 px-6">
          <SectionHeading
            eyebrow={t("aboutSection.eyebrow")}
            title={t("aboutSection.title")}
            description={t("aboutSection.description")}
          />
        </div>
      </section>
      <AboutSection />
    </MainLayout>
  );
};
