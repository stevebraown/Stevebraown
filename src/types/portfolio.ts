export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectCaseStudy = {
  problem: string;
  approach: string;
  outcomes: string[];
};

export type Project = {
  id: string;
  title: string;
  shortTagline: string;
  description: string;
  role: string;
  bullets: string[];
  techStack: string[];
  links: ProjectLink[];
  highlight: boolean;
  accent: string;
  caseStudy?: ProjectCaseStudy;
};

export type Stat = {
  label: string;
  value: string;
};

export type SectionNavItem = {
  id: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};
