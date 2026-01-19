import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "../ui/Button";

const MAIL_TO = "wizkidadrien@gmail.com";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio contact from ${name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );

    // Open mail client with prefilled content; keeps experience simple without a backend.
    window.location.href = `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <label
          className="text-xs font-semibold uppercase tracking-[0.3em] text-muted"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="rounded-2xl border border-border/60 bg-surface/70 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary/70"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="grid gap-2">
        <label
          className="text-xs font-semibold uppercase tracking-[0.3em] text-muted"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="rounded-2xl border border-border/60 bg-surface/70 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary/70"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="grid gap-2">
        <label
          className="text-xs font-semibold uppercase tracking-[0.3em] text-muted"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell me about the system you're building..."
          className="rounded-2xl border border-border/60 bg-surface/70 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary/70"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Button type="submit">Send message</Button>
        <p
          className="text-xs text-muted"
          aria-live="polite"
        >
          {status === "error" &&
            "Please fill in your name, email, and a short message."}
          {status === "sent" &&
            "Opening your email client to send the message—if it did not open, email me directly at wizkidadrien@gmail.com."}
        </p>
      </div>
    </form>
  );
};
