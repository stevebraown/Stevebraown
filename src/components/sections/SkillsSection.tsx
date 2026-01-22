import type { SkillGroup } from "../../types/portfolio";
import { useLanguage } from "../../i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { MotionReveal } from "../ui/MotionReveal";

const cardStyles =
  "rounded-3xl border border-border/60 bg-surface/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/60";

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export const SkillsSection = ({ groups }: SkillsSectionProps) => {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="section-padding">
      <div className="mx-auto max-w-screen-xl space-y-12 px-6">
        <SectionHeading
          eyebrow={t("skillsSection.eyebrow")}
          title={t("skillsSection.title")}
          description={t("skillsSection.description")}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <MotionReveal
              key={group.title}
              delay={index * 0.05}
              className={cardStyles}
            >
              <h3 className="text-lg font-semibold text-text">
                {t(`skills.groups.${index}.title`, group.title)}
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted">
                {group.items.map((item, itemIndex) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>
                      {t(
                        `skills.groups.${index}.items.${itemIndex}`,
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
