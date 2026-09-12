"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

/**
 * Contact form. Posts to /api/contact which currently just logs + returns
 * OK — swap in a real destination (Resend, a webhook, etc) when you're
 * ready. Deliberately minimal: name, email, subject select, message.
 */
export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          topic: fd.get("topic"),
          message: fd.get("message"),
        }),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      setState("sent");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-8 text-center">
        <CheckCircle2 className="h-8 w-8 mx-auto text-[color:var(--color-brand)]" />
        <h3 className="mt-3 font-serif text-xl">Got it — thank you.</h3>
        <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">
          We&apos;ll come back within one working day. Check your spam folder in case our
          reply lands there.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 sm:p-8 space-y-5">
      <Field label="Your name" required>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full h-11 rounded-lg border border-[color:var(--color-line-strong)] bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40 focus:border-[color:var(--color-brand)]"
        />
      </Field>
      <Field label="Email" required>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full h-11 rounded-lg border border-[color:var(--color-line-strong)] bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40 focus:border-[color:var(--color-brand)]"
        />
      </Field>
      <Field label="Topic" required>
        <select
          name="topic"
          required
          defaultValue="merchant"
          className="w-full h-11 rounded-lg border border-[color:var(--color-line-strong)] bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40 focus:border-[color:var(--color-brand)]"
        >
          <option value="merchant">I want to accept card payments</option>
          <option value="partner">I&apos;m a bank / acquirer</option>
          <option value="support">Existing merchant support</option>
          <option value="press">Press / media</option>
          <option value="other">Something else</option>
        </select>
      </Field>
      <Field label="Tell us more" required>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={1000}
          className="w-full rounded-lg border border-[color:var(--color-line-strong)] bg-white px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40 focus:border-[color:var(--color-brand)]"
        />
      </Field>

      {state === "error" && (
        <p className="text-sm text-red-700">
          {error ?? "Couldn't send that message."} You can also email us directly at{" "}
          <a href="mailto:hello@pokopayng.com" className="underline">hello@pokopayng.com</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center gap-2 bg-[color:var(--color-brand)] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-brand-deep)] disabled:opacity-70"
      >
        {state === "sending" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
        ) : (
          <><Send className="h-4 w-4" /> Send message</>
        )}
      </button>
    </form>
  );
}

function Field({
  label, required, children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-[color:var(--color-ink-faint)] font-semibold">
        {label} {required && <span className="text-[color:var(--color-brand)]">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
