import { Button } from "../ui/Button";

export const ContactForm = () => (
  <form
    className="grid gap-4"
    onSubmit={(event) => event.preventDefault()}
  >
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        className="rounded-2xl border border-border/60 bg-surface/70 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary/70"
      />
    </div>
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        className="rounded-2xl border border-border/60 bg-surface/70 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary/70"
      />
    </div>
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Tell me about the system you're building..."
        className="rounded-2xl border border-border/60 bg-surface/70 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary/70"
      />
    </div>
    <Button type="submit">Send message</Button>
  </form>
);
