import { SectionHeading } from "../ui/SectionHeading";
import { MotionReveal } from "../ui/MotionReveal";
import { useLanguage } from "../../i18n/LanguageProvider";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-screen-xl space-y-12 px-6">
        <SectionHeading
          eyebrow={t("aboutSection.eyebrow")}
          title={t("aboutSection.title")}
          description={t("aboutSection.description")}
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal className="space-y-6 text-base text-muted">
            {(t<string[]>("aboutSection.paragraphs", []) as string[]).map(
              (paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              )
            )}
          </MotionReveal>
          <MotionReveal className="space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-6">
            <h3 className="text-lg font-semibold text-text">
              {t("aboutSection.principlesTitle", "Design principles")}
            </h3>
            <ul className="space-y-4 text-sm text-muted">
              {(t<string[]>("aboutSection.principles", []) as string[]).map(
                (item, index) => (
                  <li key={item}>
                    <span className="text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    - {item}
                  </li>
                )
              )}
            </ul>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};
