import { MotionReveal } from "../ui/MotionReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../i18n/LanguageProvider";

export const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-screen-xl space-y-12 px-6">
        <SectionHeading
          eyebrow={t("experienceSection.eyebrow")}
          title={t("experienceSection.title")}
          description={t("experienceSection.description")}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <MotionReveal className="space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {t("experience.developerVillage.company")}
              </p>
              <h3 className="text-lg font-semibold text-text">
                {t("experience.developerVillage.title")}
              </h3>
              <p className="text-xs text-muted">
                {t("experience.developerVillage.dates")}
              </p>
            </div>
            <ul className="space-y-3 text-sm text-muted">
              {(
                t<string[]>(
                  "experience.developerVillage.bullets",
                  []
                ) as string[]
              ).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </MotionReveal>
          <MotionReveal className="space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {t("experience.uel.company")}
              </p>
              <h3 className="text-lg font-semibold text-text">
                {t("experience.uel.title")}
              </h3>
              <p className="text-xs text-muted">{t("experience.uel.dates")}</p>
            </div>
            <ul className="space-y-3 text-sm text-muted">
              {(t<string[]>("experience.uel.bullets", []) as string[]).map(
                (bullet) => (
                  <li key={bullet}>{bullet}</li>
                )
              )}
            </ul>
          </MotionReveal>
        </div>
        <MotionReveal className="rounded-3xl border border-border/60 bg-surface/70 p-6 text-sm text-muted">
          <p className="text-sm font-semibold text-text">
            {t("experienceSection.earlierTitle")}
          </p>
          <p className="mt-3">{t("experienceSection.earlierBody")}</p>
        </MotionReveal>
      </div>
    </section>
  );
};
