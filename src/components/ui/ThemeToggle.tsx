import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const STORAGE_KEY = "portfolio-theme";

type Theme = "dark" | "light";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border/70",
        "bg-surface/80 text-primary transition hover:border-primary/70"
      )}
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? (
        <span className="text-lg">◐</span>
      ) : (
        <span className="text-lg">◑</span>
      )}
    </button>
  );
};
