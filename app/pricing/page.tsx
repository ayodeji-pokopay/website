import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageShell, BottomCTA } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing is contract-based and depends on fleet size, transaction volume, settlement mode and integrations. Talk to us for a proposal.",
};

const tiers = [
  {
    name: "Merchant",
    tagline: "A single business running its own terminals.",
    priceLine: "Contract-based",
    priceSub: "Percentage + capped + flat, per your acquirer relationship.",
    features: [
      "Card acceptance on your PAX / Telpo / Sunyard terminals",
      "Merchant dashboard + mobile app",
      "Wallet, ledger and downloadable statements",
      "Same-day, T+1 or scheduled settlement",
      "Staff scopes and terminal-level cashier assignments",
      "Restaurant module included",
    ],
    ctaHref: "/contact",
    ctaLabel: "Talk to us",
    accent: false,
  },
  {
    name: "Partner (bank / acquirer)",
    tagline: "A tenant of your own, with your book underneath.",
    priceLine: "Whitelabel contract",
    priceSub: "Revenue share, per-terminal or per-transaction — we structure to fit.",
    features: [
      "Everything in Merchant, per-merchant, within your tenant",
      "CSA workflows and role-scoped operators",
      "Processor + routing rules configuration",
      "Whitelabel: logo, colours, legal URLs, tagline",
      "Tenant-scoped audit trail and exports",
      "Dedicated onboarding + support channel",
    ],
    ctaHref: "/contact",
    ctaLabel: "Design my tenant",
    accent: true,
  },
];

export default function Pricing() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Contract-based. Structured to fit your fleet."
      lede="Pokopay pricing depends on fleet size, expected volume, settlement mode and integration scope. Below is what's inside each contract shape — send us a note and we'll come back with a proposal within one working day."
    >
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              "rounded-3xl p-8 sm:p-10 flex flex-col " +
              (t.accent
                ? "bg-[color:var(--color-brand)] text-white"
                : "bg-[color:var(--color-surface)] border border-[color:var(--color-line)]")
            }
          >
            <p className={"text-xs uppercase tracking-[.16em] font-medium mb-3 " + (t.accent ? "text-white/70" : "text-[color:var(--color-brand)]")}>
              {t.name}
            </p>
            <p className={"font-serif text-3xl leading-tight tracking-tight " + (t.accent ? "" : "")}>
              {t.tagline}
            </p>
            <div className={"mt-6 " + (t.accent ? "text-white/85" : "text-[color:var(--color-ink-soft)]")}>
              <p className="text-lg font-medium">{t.priceLine}</p>
              <p className="text-sm mt-1">{t.priceSub}</p>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={"h-4 w-4 mt-0.5 shrink-0 " + (t.accent ? "text-white" : "text-[color:var(--color-brand)]")} />
                  <span className={t.accent ? "text-white/95" : ""}>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={t.ctaHref}
              className={
                "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium " +
                (t.accent
                  ? "bg-white text-[color:var(--color-brand-deep)] hover:bg-[color:var(--color-canvas)]"
                  : "bg-[color:var(--color-brand)] text-white hover:bg-[color:var(--color-brand-deep)]")
              }
            >
              {t.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] p-8 sm:p-10">
        <h2 className="font-serif text-2xl tracking-tight">Questions we always get asked</h2>
        <dl className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <dt className="font-medium mb-1.5">Is there a minimum monthly commitment?</dt>
            <dd className="text-sm text-[color:var(--color-ink-soft)]">
              For merchants — no. For partners we agree a floor tied to launch milestones.
            </dd>
          </div>
          <div>
            <dt className="font-medium mb-1.5">Do you charge for the mobile app or dashboard?</dt>
            <dd className="text-sm text-[color:var(--color-ink-soft)]">
              No. Both are included in every contract shape.
            </dd>
          </div>
          <div>
            <dt className="font-medium mb-1.5">Can we settle to a non-NGN account?</dt>
            <dd className="text-sm text-[color:var(--color-ink-soft)]">
              NGN today; other currencies on the partner track — talk to us.
            </dd>
          </div>
          <div>
            <dt className="font-medium mb-1.5">Do you take terminal deposits?</dt>
            <dd className="text-sm text-[color:var(--color-ink-soft)]">
              Depends on the acquirer relationship. We can structure with or without a deposit.
            </dd>
          </div>
        </dl>
      </div>

      <BottomCTA
        title="Ready for a proposal?"
        primary={{ href: "/contact", label: "Talk to us" }}
        secondary={{ href: "/for-partners", label: "See partner tier" }}
      />
    </PageShell>
  );
}
