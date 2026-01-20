import type { FormEvent } from "react";
import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Button } from "../ui/Button";

const MAIL_TO = "wizkidadrien@gmail.com";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  const labelName = t<string>("contact.form.name");
  const labelEmail = t<string>("contact.form.email");
  const labelMessage = t<string>("contact.form.message");
  const placeholder = t<string>("contact.form.placeholder");
  const cta = t<string>("contact.form.cta");
  const errorMsg = t<string>("contact.form.error");
  const sentMsg = t<string>("contact.form.sent");

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
          {labelName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={labelName}
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
          {labelEmail}
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
          {labelMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={placeholder}
          className="rounded-2xl border border-border/60 bg-surface/70 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary/70"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Button type="submit">{cta}</Button>
        <p
          className="text-xs text-muted"
          aria-live="polite"
        >
          {status === "error" && errorMsg}
          {status === "sent" && sentMsg}
        </p>
      </div>
    </form>
  );
};
