import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import en from "./translations/en.json";
import fr from "./translations/fr.json";
import type { Project } from "../types/portfolio";

type Locale = "en" | "fr";

type LanguageContextValue = {
  language: Locale;
  setLanguage: (locale: Locale) => void;
  toggleLanguage: () => void;
  t: <T = string>(key: string, fallback?: T) => T;
  translateProject: (project: Project) => Project;
};

const STORAGE_KEY = "sb-lang";
const translations = { en, fr };

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const getNested = (obj: unknown, path: string): any =>
  path.split(".").reduce((acc: any, part: string) => acc?.[part], obj);

const detectInitialLanguage = (): Locale => {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "fr") return stored;
  const browser = navigator.language.toLowerCase();
  return browser.startsWith("fr") ? "fr" : "en";
};

export const LanguageProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<Locale>("en");

  useEffect(() => {
    setLanguage(detectInitialLanguage());
  }, []);

  const t = useCallback(
    <T,>(key: string, fallback?: T): T => {
      const value =
        getNested(translations[language], key) ??
        getNested(translations.en, key) ??
        fallback ??
        (key as unknown as T);
      return value as T;
    },
    [language]
  );

  const translateProject = useCallback(
    (project: Project): Project => {
      const translated = getNested(translations[language], `projects.${project.id}`) as
        | Partial<Project>
        | undefined;
      if (!translated) return project;

      const caseStudySource =
        translated.caseStudy ?? project.caseStudy ?? undefined;

      const caseStudy = caseStudySource
        ? {
            problem:
              translated.caseStudy?.problem ??
              project.caseStudy?.problem ??
              caseStudySource.problem,
            approach:
              translated.caseStudy?.approach ??
              project.caseStudy?.approach ??
              caseStudySource.approach,
            outcomes:
              translated.caseStudy?.outcomes ??
              project.caseStudy?.outcomes ??
              caseStudySource.outcomes ??
              []
          }
        : undefined;

      return {
        ...project,
        title: translated.title ?? project.title,
        shortTagline: translated.shortTagline ?? project.shortTagline,
        description: translated.description ?? project.description,
        role: translated.role ?? project.role,
        bullets: translated.bullets ?? project.bullets,
        techStack: translated.techStack ?? project.techStack,
        links: translated.links ?? project.links,
        featuredMetrics: translated.featuredMetrics ?? project.featuredMetrics,
        caseStudy
      };
    },
    [language]
  );

  const toggleLanguage = useCallback(
    () => setLanguage((prev) => (prev === "en" ? "fr" : "en")),
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    const title = t<string>("meta.title");
    if (title) document.title = title;
    const description = t<string>("meta.description");
    if (description) {
      const meta =
        document.querySelector('meta[name="description"]') ??
        (() => {
          const m = document.createElement("meta");
          m.name = "description";
          document.head.appendChild(m);
          return m;
        })();
      meta.setAttribute("content", description);
    }
  }, [language, t]);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t, translateProject }),
    [language, toggleLanguage, t, translateProject]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div className="transition-opacity duration-200" key={language}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
