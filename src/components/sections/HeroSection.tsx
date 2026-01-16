import { motion } from "framer-motion";
import type { SectionNavItem } from "../../types/portfolio";
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

export const HeroSection = ({ sections }: HeroSectionProps) => (
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
          Full-stack product engineer
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-text md:text-6xl">
          Steve Braown
        </h1>
        <p className="text-lg font-medium text-text md:text-2xl">
          Systems-minded full-stack product engineer focused on modern web
          platforms, payments, and infrastructure-adjacent software.
        </p>
        <p className="text-base text-muted md:text-lg">
          I work across frontend, backend, and platform layers, with a growing
          emphasis on Rust for performance-critical and correctness-driven
          systems. I care about software that holds up under load, evolves
          cleanly, and remains understandable long after it ships.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button as="a" href="#projects">
            View Work
          </Button>
          <Button
            as="a"
            href="https://github.com/stevebraown"
            variant="secondary"
          >
            GitHub {"->"}
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/in/steve-braown/"
            variant="secondary"
          >
            LinkedIn {"->"}
          </Button>
        </div>
      </div>

      <div className="glass-panel flex flex-col gap-6 rounded-3xl p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-text">
            Explore the portfolio
          </p>
          <p className="text-sm text-muted">
            Jump to key sections and scan what matters most.
          </p>
        </div>
        <SectionNavPills items={sections} />
      </div>
    </div>
  </section>
);
