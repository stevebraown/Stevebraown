import type { Stat } from "../../types/portfolio";

type StatsStripProps = {
  stats: Stat[];
};

export const StatsStrip = ({ stats }: StatsStripProps) => (
  <section className="border-y border-border/60 bg-surface/70">
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2">
          <p className="text-3xl font-semibold text-text md:text-4xl">
            {stat.value}
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);
