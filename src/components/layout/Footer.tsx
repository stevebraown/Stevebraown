export const Footer = () => (
  <footer className="border-t border-border/50 bg-bg/80">
    <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-muted">
        © 2026 Steve Braown. Built for clarity, reliability, and calm systems.
      </p>
      <div className="flex gap-5 text-sm font-semibold text-muted">
        <a href="https://github.com/stevebraown" className="transition hover:text-primary">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/steve-braown/" className="transition hover:text-primary">
          LinkedIn
        </a>
        <a href="mailto:wizkidadrien@gmail.com" className="transition hover:text-primary">
          Email
        </a>
      </div>
    </div>
  </footer>
);
