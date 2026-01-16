import { MotionReveal } from "../ui/MotionReveal";
import { SectionHeading } from "../ui/SectionHeading";

export const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="mx-auto max-w-screen-xl space-y-12 px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Ownership across product and platform layers"
        description="Hands-on delivery across reliable interfaces, service integrations, and operational workflows."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <MotionReveal className="space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Developer Village
            </p>
            <h3 className="text-lg font-semibold text-text">Software Developer</h3>
            <p className="text-xs text-muted">Aug 2024 – Jul 2025 · Colchester, UK</p>
          </div>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              Built and maintained React/Node.js features for client applications,
              shipping frequent releases for small UK businesses.
            </li>
            <li>
              Refactored frontend and API layers to improve validation,
              reliability, and perceived performance, reducing user-facing issues
              by ~20-30%.
            </li>
            <li>
              Integrated third-party services for payments, authentication, and
              data while owning delivery from discovery to release.
            </li>
          </ul>
        </MotionReveal>
        <MotionReveal className="space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              SCSC Probono
            </p>
            <h3 className="text-lg font-semibold text-text">Volunteer Software Developer</h3>
            <p className="text-xs text-muted">2025 · London, UK</p>
          </div>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              Delivered maintainable web tools and dashboards for community
              organizations and early-stage startups.
            </li>
            <li>
              Scoped MVPs with non-technical stakeholders, translating real-world
              constraints into buildable plans.
            </li>
            <li>
              Introduced lightweight engineering practices that improved
              onboarding and delivery reliability.
            </li>
          </ul>
        </MotionReveal>
      </div>
      <MotionReveal className="rounded-3xl border border-border/60 bg-surface/70 p-6 text-sm text-muted">
        <p className="text-sm font-semibold text-text">Earlier work</p>
        <p className="mt-3">
          Background in IT support and freelance troubleshooting. That experience
          shaped how I think about reliability, user empathy, and calm responses
          when systems break.
        </p>
      </MotionReveal>
    </div>
  </section>
);
