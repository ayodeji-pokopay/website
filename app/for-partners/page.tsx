import type { Metadata } from "next";
import { Building2, Users, Network, GitBranch, ShieldCheck, Palette } from "lucide-react";
import { PageShell, FeatureRow, BottomCTA } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "For partners",
  description:
    "A tenant of your own, the Pokopay engine underneath. Onboard merchants, manage terminals, configure fees, monitor settlements — whitelabel-ready.",
};

export default function ForPartners() {
  return (
    <PageShell
      eyebrow="For partners"
      title="A tenant of your own. The engine underneath."
      lede="Banks, acquirers, aggregators — plug your operations into the Pokopay engine and get a whitelabelled portal for your CSAs and admins. Tenant isolation on every table, on every endpoint, on every screen."
    >
      <div className="grid gap-14 md:grid-cols-2 mt-6">
        <FeatureRow
          icon={<Building2 className="h-5 w-5" />}
          title="Multi-tenant from the schema up"
          copy="Each partner is a fully isolated tenant. Admin and CSA operators can only see merchants, terminals and wallets in scope — enforced server-side, checked again in the UI, audited on every write."
        />
        <FeatureRow
          icon={<Users className="h-5 w-5" />}
          title="CSA workflows built in"
          copy="A dedicated CSA role with the right defaults — search across the tenant, resolve merchant queries, act on their behalf, without seeing anything cross-tenant."
        />
        <FeatureRow
          icon={<Network className="h-5 w-5" />}
          title="Processors & routing"
          copy="Configure your acquirer stack, health checks, retry policies. Route by BIN, scheme, amount or your own rule set — surfaces the outcome per transaction in the reports."
        />
        <FeatureRow
          icon={<GitBranch className="h-5 w-5" />}
          title="Fee configuration you can reason about"
          copy="Per-terminal fees with percentage, capped, flat, min and tiered rules. Preview any fee live with the Fee Simulator — same maths as settlement, no surprises for merchants."
        />
        <FeatureRow
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Compliance-adjacent by design"
          copy="Audit logs on every admin action, session revocation, absolute session cap, cryptographic keys never in the browser, PII scrubbed from logs and toasts. Ready for your QSA."
        />
        <FeatureRow
          icon={<Palette className="h-5 w-5" />}
          title="Whitelabel-ready"
          copy="Brand tokens for logo, colours, tagline and legal URLs at the tenant level. Ship your customers a portal that looks like yours, on infrastructure that's ours to run."
        />
      </div>

      <div className="mt-24 rounded-3xl bg-[color:var(--color-brand-soft)] p-8 sm:p-12">
        <p className="text-xs uppercase tracking-[.16em] text-[color:var(--color-brand-deep)] font-medium mb-3">The engine</p>
        <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight max-w-2xl text-balance">
          Built for Nigerian rails.
        </h2>
        <p className="mt-4 text-[color:var(--color-ink-soft)] max-w-2xl">
          NIBSS-compatible PTSP handshake, NGN-native settlement, Africa/Lagos date semantics
          everywhere. Runs on AWS Africa-adjacent regions with an audit trail your ops team
          can actually read.
        </p>
      </div>

      <BottomCTA
        title="Let's design the tenant that fits your book."
        primary={{ href: "/contact", label: "Talk to us" }}
        secondary={{ href: "/security", label: "Review our security posture" }}
      />
    </PageShell>
  );
}
