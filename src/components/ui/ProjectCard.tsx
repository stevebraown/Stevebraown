import type { Project } from "../../types/portfolio";
import { Badge } from "./Badge";
import { MotionReveal } from "./MotionReveal";

const cardClassName =
  "group flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-surface/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <MotionReveal className={cardClassName}>
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        {project.role}
      </p>
      <h3 className="text-xl font-semibold text-text">{project.title}</h3>
      <p className="text-sm text-muted">{project.shortTagline}</p>
    </div>
    <ul className="space-y-2 text-sm text-muted">
      {project.bullets.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2">
      {project.techStack.map((tech) => (
        <Badge key={tech} label={tech} />
      ))}
    </div>
    <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold text-primary">
      {project.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="transition hover:text-primary-2"
        >
          {link.label}
        </a>
      ))}
    </div>
  </MotionReveal>
);
