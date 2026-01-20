import { SectionHeading } from "../ui/SectionHeading";
import { MotionReveal } from "../ui/MotionReveal";
import { ContactForm } from "./ContactForm";
import { useLanguage } from "../../i18n/LanguageProvider";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-screen-xl space-y-12 px-6">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal className="rounded-3xl border border-border/60 bg-surface/70 p-6">
            <ContactForm />
          </MotionReveal>
          <MotionReveal className="space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-text">
                {t("contact.sidebar.title")}
              </h3>
              <p className="text-sm text-muted">
                {t("contact.sidebar.description")}
              </p>
            </div>
            <div className="space-y-4 text-sm font-semibold text-primary">
              <a href="mailto:wizkidadrien@gmail.com" className="block">
                wizkidadrien@gmail.com
              </a>
              <a href="https://github.com/stevebraown" className="block">
                github.com/stevebraown
              </a>
              <a
                href="https://www.linkedin.com/in/steve-braown/"
                className="block"
              >
                linkedin.com/in/steve-braown
              </a>
            </div>
            <div className="rounded-2xl border border-border/70 bg-surface-2/70 p-4 text-sm text-muted">
              {t("contact.sidebar.availability")}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};
