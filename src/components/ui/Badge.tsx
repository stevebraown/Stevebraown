import { cn } from "../../lib/utils";

type BadgeProps = {
  label: string;
  className?: string;
};

export const Badge = ({ label, className }: BadgeProps) => (
  <span
    className={cn(
      "rounded-full border border-border/70 bg-surface/70 px-3 py-1 text-xs font-medium text-muted",
      className
    )}
  >
    {label}
  </span>
);
