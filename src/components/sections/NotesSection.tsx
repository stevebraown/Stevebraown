import { SectionHeading } from "../ui/SectionHeading";
import { MotionReveal } from "../ui/MotionReveal";
import { useLanguage } from "../../i18n/LanguageProvider";

export const NotesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="notes" className="section-padding">
      <div className="mx-auto max-w-screen-xl space-y-12 px-6">
        <SectionHeading
          eyebrow={t("notesSection.eyebrow")}
          title={t("notesSection.title")}
          description={t("notesSection.description")}
        />
        <MotionReveal className="rounded-3xl border border-border/60 bg-surface/70 p-6 text-sm text-muted">
          Articles on payments reliability, Rust storage design, and state-modeling
          patterns will appear here. For now, see the featured projects and
          experience sections for shipped examples.
        </MotionReveal>
      </div>
    </section>
  );
};
