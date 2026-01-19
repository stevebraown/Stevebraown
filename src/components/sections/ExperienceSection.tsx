import { MotionReveal } from "../ui/MotionReveal";
import { SectionHeading } from "../ui/SectionHeading";

export const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="mx-auto max-w-screen-xl space-y-12 px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Ownership across product and platform layers"
        description="STAR-style delivery with measurable outcomes across services, interfaces, and operational workflows."
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
              Owned React/Node.js features for small UK businesses needing
              predictable releases; scoped work with product owners and shipped
              weekly increments.
            </li>
            <li>
              Refactored validation and REST API edges, adding Jest + SuperTest
              coverage; support escalations dropped and releases stopped needing
              rollbacks.
            </li>
            <li>
              Integrated payments, authentication, and data services in
              Dockerized staging; Git/Jira/Agile cadence kept stakeholders
              aligned on trade-offs and timelines.
            </li>
          </ul>
        </MotionReveal>
        <MotionReveal className="space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              University of East London
            </p>
            <h3 className="text-lg font-semibold text-text">Software Engineer</h3>
            <p className="text-xs text-muted">2025 · London, UK</p>
          </div>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              Built internal dashboards and workflow tools for university teams
              needing traceability; partnered with leads to define success
              criteria and deadlines.
            </li>
            <li>
              Implemented role-aware auth, audit logs, and resilient REST APIs
              in Node.js/React; releases covered by Jest smoke tests and Docker
              dev environments.
            </li>
            <li>
              Ran Kanban/Jira rituals with Git PR reviews; tools stayed stable
              during live launches and reduced operator handoffs.
            </li>
          </ul>
        </MotionReveal>
      </div>
      <MotionReveal className="rounded-3xl border border-border/60 bg-surface/70 p-6 text-sm text-muted">
        <p className="text-sm font-semibold text-text">Earlier work</p>
        <p className="mt-3">
          Background in IT support and freelance troubleshooting, which shaped a
          recovery-first mindset, calm incident response, and empathy for end
          users when systems fail.
        </p>
      </MotionReveal>
    </div>
  </section>
);
