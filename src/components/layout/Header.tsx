import { sectionNav } from "../../data/sections";
import { useLanguage } from "../../i18n/LanguageProvider";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/Button";

export const Header = () => {
  const { t } = useLanguage();

  const navItems = [
    { id: "home", label: t("nav.home", "Home") },
    ...sectionNav.map((item) => ({
      ...item,
      label: t(`nav.${item.id}`, item.label)
    }))
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-wide"
        >
          Steve Braown
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
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
              {t("buttons.github", "GitHub")}
            </a>
            <a
              href="https://www.linkedin.com/in/steve-braown/"
              className="transition hover:text-primary"
            >
              {t("buttons.linkedin", "LinkedIn")}
            </a>
          </div>
          <LanguageToggle />
          <ThemeToggle />
          <Button as="a" href="#work" variant="secondary" size="sm">
            {t("buttons.viewWork", "View Work")}
          </Button>
        </div>
      </div>
    </header>
  );
};
