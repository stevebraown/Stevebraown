import { Helmet } from "react-helmet";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  lang?: "en" | "fr";
};

const SITE_URL = "https://stevebraown.vercel.app/";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steve Braown",
  jobTitle: "Systems-minded full-stack product engineer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/stevebraown",
    "https://www.linkedin.com/in/steve-braown/"
  ],
  knowsAbout: [
    "Payments",
    "Platform engineering",
    "Rust",
    "React",
    "Node.js",
    "MongoDB",
    "Reliability engineering"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "UK"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Steve Braown Portfolio",
  url: SITE_URL
};

export const SEO = ({
  title,
  description,
  canonical = SITE_URL,
  lang = "en"
}: SEOProps) => (
  <Helmet>
    <html lang={lang} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={canonical} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:site_name" content="Steve Braown Portfolio" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <script type="application/ld+json">
      {JSON.stringify(personJsonLd)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(websiteJsonLd)}
    </script>
  </Helmet>
);
