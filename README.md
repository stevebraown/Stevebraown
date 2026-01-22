# Steve Braown Portfolio

A futuristic, Darktrace-inspired developer portfolio for Steve Braown. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Live Site

- https://stevebraown.vercel.app/

## Highlights

- Dark, premium UI with custom gradients and motion
- Scroll-based section reveals and micro-interactions
- Structured content model for projects, skills, and stats
- Responsive layout from mobile to large screens

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## SEO, sitemap, and monitoring

- Public SEO assets live in `public/robots.txt`, `public/sitemap.xml`, and `public/google4d026ec127fd5ce4.html` (Search Console verification).
- Default meta/OG/Twitter/JSON-LD are set via `src/components/seo/SEO.tsx` and wired in `src/App.tsx`.
- To update sitemap/robots, edit the public files and redeploy; Vercel will serve them at the root.
- To run Lighthouse locally: build or `npm run dev`, open in Chrome, run Lighthouse (mobile + desktop). Aim for 90+ Performance/SEO and 95+ Accessibility/Best Practices.
- After deploy, add/monitor Google Search Console: verify domain, submit `https://stevebraown.vercel.app/sitemap.xml`, and review Coverage/Mobile Usability weekly.

## Project Structure

- `src/components` - Layout, UI, and section components
- `src/data` - Structured content for projects and site copy
- `src/styles` - Tailwind and global styles

## License

Personal portfolio. All rights reserved.
