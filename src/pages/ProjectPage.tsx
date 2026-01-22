import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Badge } from "../components/ui/Badge";
import { projects } from "../data/projects";
import { SEO } from "../components/seo/SEO";
import { useLanguage } from "../i18n/LanguageProvider";

export const ProjectPage = () => {
  const { slug } = useParams();
  const { translateProject } = useLanguage();

  const project = useMemo(() => {
    const localized = projects.map(translateProject);
    return localized.find(
      (p) => p.slug === slug || p.id === slug
    );
  }, [slug, translateProject]);

  if (!project) {
    return (
      <MainLayout>
        <SectionHeading
          eyebrow="Project"
          title="Project not found"
          description="The requested project does not exist. Return to work to browse available case studies."
        />
        <div className="section-padding px-6">
          <Link className="text-primary underline-offset-2 hover:underline" to="/#work">
            Back to Work
          </Link>
        </div>
      </MainLayout>
    );
  }

  const title = `${project.title} | Steve Braown`;
  const description =
    project.shortTagline ??
    "Project case study from Steve Braown, systems-minded full-stack product engineer.";

  return (
    <MainLayout>
      <SEO
        title={title}
        description={description}
        canonical={`https://stevebraown.vercel.app/projects/${project.slug ?? project.id}`}
      />
      <section className="section-padding">
        <div className="mx-auto max-w-screen-xl space-y-10 px-6">
          <SectionHeading
            eyebrow="Project case study"
            title={project.title}
            description={project.shortTagline}
          />
          <div className="space-y-6 text-base text-muted">
            <p className="text-lg font-semibold text-text">{project.description}</p>
            {project.bullets?.length ? (
              <ul className="space-y-2 text-sm text-muted">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {project.featuredMetrics?.length ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {project.featuredMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border/60 bg-surface/70 p-4 text-sm text-text"
                  >
                    <p className="text-2xl font-semibold text-primary">{metric.value}</p>
                    <p className="text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {project.caseStudy ? (
              <div className="space-y-4 rounded-3xl border border-border/60 bg-surface/70 p-6 text-sm text-muted">
                <h3 className="text-lg font-semibold text-text">Case study</h3>
                <p>
                  <strong>Problem: </strong>
                  {project.caseStudy.problem}
                </p>
                <p>
                  <strong>Approach: </strong>
                  {project.caseStudy.approach}
                </p>
                {project.caseStudy.outcomes?.length ? (
                  <div>
                    <strong>Outcomes:</strong>
                    <ul className="mt-2 space-y-2">
                      {project.caseStudy.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}
            {project.techStack?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            ) : null}
            <div className="flex flex-wrap gap-4 pt-4 text-sm font-semibold text-primary">
              <Link to="/#work" className="hover:text-primary-2">
                Back to Work
              </Link>
              <Link to="/#contact" className="hover:text-primary-2">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
