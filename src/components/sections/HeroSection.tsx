import { motion } from "framer-motion";
import type { SectionNavItem } from "../../types/portfolio";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Button } from "../ui/Button";
import { SectionNavPills } from "./SectionNavPills";

const floatingTransition = {
  duration: 12,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut"
};

type HeroSectionProps = {
  sections: SectionNavItem[];
};

export const HeroSection = ({ sections }: HeroSectionProps) => {
  const { t } = useLanguage();

  const heroEyebrow = t<string>("hero.eyebrow");
  const heroName = t<string>("hero.name");
  const heroTitle = t<string>("hero.title");
  const heroBody = t<string>("hero.body");
  const navTitle = t<string>("hero.navTitle");
  const navCopy = t<string>("hero.navCopy");
  const viewWork = t<string>("buttons.viewWork");
  const github = t<string>("buttons.github");
  const linkedin = t<string>("buttons.linkedin");

  return (
    <section id="top" className="relative overflow-hidden section-padding">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-grid opacity-20" />
        <motion.div
          className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          animate={{ y: [0, 30, -20], x: [0, -20, 10] }}
          transition={floatingTransition}
        />
        <motion.div
          className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-primary-2/20 blur-3xl"
          animate={{ y: [0, -20, 25], x: [0, 15, -10] }}
          transition={{ ...floatingTransition, duration: 14 }}
        />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-10 px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            {heroEyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-text md:text-6xl">
            {heroName}
          </h1>
          <p className="text-lg font-medium text-text md:text-2xl">
            {heroTitle}
          </p>
          <p className="text-base text-muted md:text-lg">{heroBody}</p>
          <div className="flex flex-wrap gap-4">
            <Button as="a" href="#projects">
              {viewWork}
            </Button>
            <Button
              as="a"
              href="https://github.com/stevebraown"
              variant="secondary"
            >
              {github} {"->"}
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/steve-braown/"
              variant="secondary"
            >
              {linkedin} {"->"}
            </Button>
          </div>
        </div>

        <div className="glass-panel flex flex-col gap-6 rounded-3xl p-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-text">
              {navTitle}
            </p>
            <p className="text-sm text-muted">{navCopy}</p>
          </div>
          <SectionNavPills items={sections} />
        </div>
      </div>
    </section>
  );
};
