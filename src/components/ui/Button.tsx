import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "../../lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 focus:outline-none";

const variants = {
  primary:
    "bg-primary text-bg shadow-glow hover:-translate-y-0.5 hover:bg-primary/90",
  secondary:
    "border-border/80 bg-transparent text-text hover:border-primary/60 hover:text-primary",
  ghost: "text-text/70 hover:text-primary"
};

const sizes = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-3"
};

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};
