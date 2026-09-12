import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { PageShell } from "@/components/page-shell";
import { Mail, MessageCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Pokopay. Merchants, partners and press — send us a note and we'll come back within one working day.",
};

export default function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Tell us what you need."
      lede="A short note, and we'll come back within one working day. If it's urgent, mention it — we route on subject."
    >
      <div className="grid md:grid-cols-[minmax(0,1fr)_320px] gap-10 mt-6">
        <ContactForm />

        <aside className="space-y-5">
          <div className="rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--color-brand)] font-semibold">
              <Mail className="h-3.5 w-3.5" /> Direct email
            </div>
            <p className="mt-2 text-sm">
              <a href="mailto:hello@pokopayng.com" className="text-[color:var(--color-brand)] hover:underline">
                hello@pokopayng.com
              </a>
            </p>
            <p className="mt-1 text-xs text-[color:var(--color-ink-faint)]">Merchant onboarding, general enquiries.</p>
          </div>

          <div className="rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--color-brand)] font-semibold">
              <Building2 className="h-3.5 w-3.5" /> Partners
            </div>
            <p className="mt-2 text-sm">
              <a href="mailto:partners@pokopayng.com" className="text-[color:var(--color-brand)] hover:underline">
                partners@pokopayng.com
              </a>
            </p>
            <p className="mt-1 text-xs text-[color:var(--color-ink-faint)]">Banks, acquirers, whitelabel opportunities.</p>
          </div>

          <div className="rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--color-brand)] font-semibold">
              <MessageCircle className="h-3.5 w-3.5" /> Support
            </div>
            <p className="mt-2 text-sm">
              Existing merchants — please use in-app support from{" "}
              <a href="https://dashboard.pokopayng.com" className="text-[color:var(--color-brand)] hover:underline">
                the dashboard
              </a>.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
