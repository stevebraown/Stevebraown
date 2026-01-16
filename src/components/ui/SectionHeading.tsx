import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) => (
  <div
    className={cn(
      "space-y-3",
      align === "center" && "mx-auto max-w-2xl text-center",
      className
    )}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold text-text md:text-4xl">{title}</h2>
    {description ? (
      <p className="text-base text-muted md:text-lg">{description}</p>
    ) : null}
  </div>
);
