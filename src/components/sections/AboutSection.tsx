import { SectionHeading } from "../ui/SectionHeading";
import { MotionReveal } from "../ui/MotionReveal";

export const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="mx-auto max-w-screen-xl space-y-12 px-6">
      <SectionHeading
        eyebrow="About"
        title="Systems-aware product engineering, built to last"
        description="I build software that stays reliable under real-world constraints, with clear state models and interfaces that make complex systems understandable."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionReveal className="space-y-6 text-base text-muted">
          <p>
            I'm a systems-minded full-stack product engineer focused on building
            reliable, scalable software for real-world use.
          </p>
          <p>
            I work across frontend, backend, and platform layers, with a growing
            emphasis on Rust for performance-critical and correctness-driven
            systems.
          </p>
          <p>
            I care about software that holds up under load, evolves cleanly, and
            remains understandable long after it ships.
          </p>
          <p>
            Recent work spans payments, platform coordination, and operational
            tooling where failure handling and traceability matter.
          </p>
        </MotionReveal>
        <MotionReveal className="space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-6">
          <h3 className="text-lg font-semibold text-text">Design principles</h3>
          <ul className="space-y-4 text-sm text-muted">
            <li>
              <span className="text-primary">01</span> - Make system state
              explicit, so failures are visible and recoverable.
            </li>
            <li>
              <span className="text-primary">02</span> - Build interfaces that
              explain decisions, not just actions.
            </li>
            <li>
              <span className="text-primary">03</span> - Favor clarity and calm
              under load, even when the system is stressed.
            </li>
            <li>
              <span className="text-primary">04</span> - Choose designs that
              scale operationally, not just visually.
            </li>
          </ul>
        </MotionReveal>
      </div>
    </div>
  </section>
);
