import type { Metadata } from "next";
import { Lock, KeyRound, ShieldCheck, EyeOff, Server, FileWarning } from "lucide-react";
import { PageShell, FeatureRow, BottomCTA } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Our security posture — encryption, tenant isolation, session hardening, audit logs, and how we handle cardholder data on the Pokopay platform.",
};

export default function Security() {
  return (
    <PageShell
      eyebrow="Security"
      title="Payments-grade security, held to the standards buyers ask about first."
      lede="A summary of how we handle authentication, cardholder data, cryptographic keys and audit trails. Ask us for the full documentation — we'd rather show you than tell you."
    >
      <div className="grid gap-14 md:grid-cols-2 mt-6">
        <FeatureRow
          icon={<Lock className="h-5 w-5" />}
          title="Cardholder data"
          copy="The web console never receives an unmasked PAN. Everywhere PAN is rendered, only the last-4 is shown. The engine's audit-log viewer allow-lists safe response fields and scrubs anything that looks like a full PAN, track2 or JWT before rendering."
        />
        <FeatureRow
          icon={<KeyRound className="h-5 w-5" />}
          title="Cryptographic key handling"
          copy="Clear key material is never entered into or displayed in the browser. The Terminal Keys tab shows only KCVs; the inject/rotate dialog accepts only encrypted (wrapped) key components — decryption happens inside the backend HSM path."
        />
        <FeatureRow
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Authentication & sessions"
          copy="JWT with a 24-hour refresh cap. SameSite=Strict cookies. Absolute session cap and cross-tab logout broadcast — revoking access in one place ejects every open tab within seconds."
        />
        <FeatureRow
          icon={<EyeOff className="h-5 w-5" />}
          title="Logging & error reporting"
          copy="Every backend error message routed through a scrubber that redacts emails, JWT-shaped tokens and 13-19 digit runs before it can reach a toast, console log or Sentry breadcrumb."
        />
        <FeatureRow
          icon={<Server className="h-5 w-5" />}
          title="Transport & HTTP headers"
          copy="HSTS with 1-year preload. Content-Security-Policy, X-Frame-Options DENY, X-Content-Type-Options nosniff, strict-origin Referrer-Policy, restrictive Permissions-Policy — all set at the edge."
        />
        <FeatureRow
          icon={<FileWarning className="h-5 w-5" />}
          title="Audit trails"
          copy="Every admin write — approve, suspend, block, terminate, deactivate terminal, revoke keys, invite staff — writes an audit-log row. Filtered by actor, target and action, paged, exportable."
        />
      </div>

      <div className="mt-24 grid md:grid-cols-3 gap-6">
        <PostureCard title="Data residency" body="Data at rest in Africa-adjacent AWS regions. Nigerian business day for all bracketed reports." />
        <PostureCard title="Access & permissions" body="Role-scoped everywhere: SUPER_ADMIN, ADMIN, CSA, MERCHANT, OWNER, MANAGER, CASHIER. Tenant isolation enforced server-side." />
        <PostureCard title="Certifications" body="PCI DSS posture designed with a QSA review in mind. Certificates in flight — talk to us for the latest status." />
      </div>

      <BottomCTA
        title="Want the full security documentation?"
        primary={{ href: "/contact", label: "Request a copy" }}
        secondary={{ href: "/legal/pci-notice", label: "Read our PCI notice" }}
      />
    </PageShell>
  );
}

function PostureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] p-6">
      <p className="text-xs uppercase tracking-[.14em] text-[color:var(--color-brand)] font-medium">{title}</p>
      <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{body}</p>
    </div>
  );
}
