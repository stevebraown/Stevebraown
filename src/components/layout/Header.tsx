import { sectionNav } from "../../data/sections";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/Button";

export const Header = () => (
  <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-bg/80 backdrop-blur-xl">
    <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
      <a href="#top" className="font-display text-lg font-semibold tracking-wide">
        Steve Braown
      </a>
      <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
        <a href="#top" className="transition hover:text-primary">
          Home
        </a>
        {sectionNav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="transition hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-4 text-sm font-semibold text-muted md:flex">
          <a
            href="https://github.com/stevebraown"
            className="transition hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/steve-braown/"
            className="transition hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
        <ThemeToggle />
        <Button as="a" href="#projects" variant="secondary" size="sm">
          View Work
        </Button>
      </div>
    </div>
  </header>
);
