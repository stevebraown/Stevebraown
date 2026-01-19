import type { Stat } from "../../types/portfolio";
import { Button } from "../ui/Button";
import { MotionReveal } from "../ui/MotionReveal";
import { Badge } from "../ui/Badge";
import { cn } from "../../lib/utils";

export type FeatureBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  techStack: string[];
  ctaLabel: string;
  ctaLink: string;
  layout?: "left" | "right";
  accentClassName?: string;
  metrics?: Stat[];
};

export const FeatureBand = ({
  eyebrow,
  title,
  description,
  techStack,
  ctaLabel,
  ctaLink,
  layout = "left",
  accentClassName,
  metrics = []
}: FeatureBandProps) => (
  <section className="section-padding">
    <div
      className={cn(
        "mx-auto grid max-w-screen-xl items-center gap-10 px-6 lg:grid-cols-2",
        layout === "right" && "lg:grid-flow-col-dense"
      )}
    >
      <MotionReveal
        className={cn("space-y-6", layout === "right" && "lg:col-start-2")}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
        <h3 className="text-3xl font-semibold text-text md:text-4xl">{title}</h3>
        <p className="text-base text-muted md:text-lg">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
        <Button as="a" href={ctaLink} variant="secondary">
          {ctaLabel}
        </Button>
      </MotionReveal>

      <MotionReveal
        className={cn(
          "relative min-h-[260px] overflow-hidden rounded-3xl border border-border/60 bg-surface/60 p-8",
          layout === "right" && "lg:col-start-1"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-70",
            accentClassName ?? "from-primary/20 via-transparent to-primary-2/20"
          )}
        />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
            <span>Signal view</span>
            <span>Live</span>
          </div>
          <div className="mt-10 space-y-4">
            <div className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            <div className="h-2 w-3/4 rounded-full bg-primary/40" />
            <div className="h-2 w-2/3 rounded-full bg-primary/30" />
            <div className="h-2 w-1/2 rounded-full bg-primary/20" />
          </div>
          {metrics.length > 0 && (
            <div className="mt-10 grid grid-cols-3 gap-3 text-xs text-muted">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border/60 bg-surface-2/70 p-3"
                >
                  <p className="text-primary">{metric.value}</p>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </MotionReveal>
    </div>
  </section>
);
