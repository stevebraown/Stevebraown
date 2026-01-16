import type { SectionNavItem } from "../../types/portfolio";

type SectionNavPillsProps = {
  items: SectionNavItem[];
};

export const SectionNavPills = ({ items }: SectionNavPillsProps) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        className="rounded-full border border-border/70 bg-surface/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted transition hover:border-primary/60 hover:text-primary"
      >
        {item.label}
      </a>
    ))}
  </div>
);
