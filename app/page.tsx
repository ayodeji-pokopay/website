import Link from "next/link";
import {
  Cpu, Wallet, ScrollText, ShieldCheck, Users, Landmark, ArrowRight,
  Zap, LineChart, ArrowUpRight,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[.16em] font-medium text-[color:var(--color-brand)] mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
          Payments infrastructure · Nigeria
        </p>
        <h1 className="font-serif text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-balance max-w-4xl">
          The payment rails your merchants and terminals were waiting for.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--color-ink-soft)] max-w-2xl">
          Pokopay is a single platform for card acceptance, terminal fleet
          management, wallets, settlements and reporting — designed for
          Nigerian merchants, acquirers and CSAs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[color:var(--color-brand)] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-brand-deep)]"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for-merchants"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium ring-1 ring-[color:var(--color-line-strong)] hover:bg-[color:var(--color-brand-soft)]"
          >
            Explore the product <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          <Stat label="Card schemes" value="6+" note="Visa · Mastercard · Verve · AMEX · Discover · UnionPay" />
          <Stat label="Settlement modes" value="T+0 → weekly" note="Configurable per merchant" />
          <Stat label="Terminal families" value="PAX · Telpo · Sunyard" note="POS + Android SDK" />
          <Stat label="Data residency" value="Africa/Lagos" note="Nigerian business day" />
        </div>
      </section>

      {/* Three tiles — what we do */}
      <section className="bg-[color:var(--color-surface)] border-y border-[color:var(--color-line)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24 grid gap-10 md:grid-cols-3">
          <FeatureTile
            icon={<Cpu className="h-5 w-5" />}
            title="Terminal fleet, telemetry-first"
            copy="Health verdict per terminal — battery, connection, printer, signal — computed on every heartbeat. See what's broken before your merchants call."
            href="/for-merchants"
          />
          <FeatureTile
            icon={<Wallet className="h-5 w-5" />}
            title="Wallets, settlements & reports"
            copy="Merchant wallets ledgered end-to-end. Same-day, T+1 or scheduled settlement. Downloadable statements. Africa/Lagos everywhere."
            href="/for-merchants"
          />
          <FeatureTile
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Multi-tenant, permissioned, audited"
            copy="One engine, many partners. SUPER_ADMIN, ADMIN, CSA, MERCHANT and staff roles, tenant isolation, audit logs on every action."
            href="/security"
          />
        </div>
      </section>

      {/* Product mid-band */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[.16em] text-[color:var(--color-brand)] font-medium mb-3">The dashboard</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-balance">
              Everything your operators need. Nothing they don&apos;t.
            </h2>
            <p className="mt-4 text-[color:var(--color-ink-soft)] max-w-lg">
              Live transactions, real-time terminal health, wallet reconciliation,
              fee simulation, notifications to merchant apps and POS devices — one
              console, keyboard-first, role-scoped.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--color-ink-soft)]">
              <ListItem icon={<Zap className="h-4 w-4" />} text="Live Now tile — approved, success rate, unsuccessful in the current Nigerian day" />
              <ListItem icon={<LineChart className="h-4 w-4" />} text="Reports by status, scheme, bank, BIN, decline reason, hour of day" />
              <ListItem icon={<ScrollText className="h-4 w-4" />} text="Settlements + batches, with retry for failed transfers" />
              <ListItem icon={<Users className="h-4 w-4" />} text="Staff management with role-scoped permissions and terminal scope for cashiers" />
            </ul>
            <div className="mt-8 flex gap-3 flex-wrap">
              <a
                href="https://dashboard.pokopayng.com"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-deep)]"
              >
                Sign in to the dashboard <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/for-merchants"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
              >
                See the full feature set <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <MockPreview />
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[color:var(--color-surface)] border-y border-[color:var(--color-line)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
          <p className="text-xs uppercase tracking-[.16em] text-[color:var(--color-brand)] font-medium mb-3">Who we serve</p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">Two audiences. One platform.</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <AudienceCard
              icon={<Users className="h-5 w-5" />}
              eyebrow="Merchants"
              title="From your first terminal to your hundredth"
              copy="Card acceptance, POS management, restaurant module, staff scopes, downloadable statements, notification center. A shop can start today; a chain can run at scale."
              href="/for-merchants"
            />
            <AudienceCard
              icon={<Landmark className="h-5 w-5" />}
              eyebrow="Partners (banks & acquirers)"
              title="A tenant of your own, engine underneath"
              copy="Onboard merchants, manage terminals, configure fees, monitor settlements, plug into your existing rails. Whitelabel-ready with tenant isolation and CSA workflows."
              href="/for-partners"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="rounded-3xl bg-[color:var(--color-brand)] text-white p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" aria-hidden />
          <div className="absolute -left-4 bottom-0 h-24 w-24 rounded-full bg-white/10" aria-hidden />
          <p className="text-xs uppercase tracking-[.16em] text-white/70 font-medium mb-3">Get started</p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight max-w-2xl text-balance">
            Let&apos;s put your POS fleet on infrastructure that grows with you.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[color:var(--color-brand-deep)] px-5 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-canvas)]"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://dashboard.pokopayng.com"
              className="inline-flex items-center gap-2 ring-1 ring-white/40 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-white/10"
            >
              Sign in to the dashboard <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-faint)] font-medium">{label}</p>
      <p className="mt-1 font-serif text-2xl">{value}</p>
      <p className="mt-0.5 text-[11px] text-[color:var(--color-ink-faint)] leading-tight">{note}</p>
    </div>
  );
}

function FeatureTile({
  icon, title, copy, href,
}: {
  icon: React.ReactNode; title: string; copy: string; href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-[color:var(--color-line)] p-6 hover:border-[color:var(--color-brand)] hover:-translate-y-0.5 transition-all"
    >
      <div className="h-10 w-10 rounded-lg bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand-deep)] grid place-items-center mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-sm text-[color:var(--color-ink-soft)]">{copy}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[color:var(--color-brand)]">
        Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}

function AudienceCard({
  icon, eyebrow, title, copy, href,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl bg-[color:var(--color-canvas)] p-8 hover:shadow-[var(--shadow-soft)] transition-shadow"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--color-brand)] font-medium mb-4">
        <span className="h-8 w-8 rounded-lg bg-[color:var(--color-brand-soft)] grid place-items-center">
          {icon}
        </span>
        {eyebrow}
      </div>
      <h3 className="font-serif text-2xl mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-[color:var(--color-ink-soft)]">{copy}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm text-[color:var(--color-brand)]">
        Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}

function ListItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 text-[color:var(--color-brand)]">{icon}</span>
      <span>{text}</span>
    </li>
  );
}

/** Placeholder browser-frame mock. Swap for a real screenshot of the
 *  dashboard when you're ready — until then it looks polished on its own. */
function MockPreview() {
  return (
    <div className="relative rounded-2xl bg-[color:var(--color-ink)] shadow-[var(--shadow-soft)] overflow-hidden">
      <div className="h-8 flex items-center gap-1.5 px-4 border-b border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-[11px] text-white/50 font-mono">dashboard.pokopayng.com</span>
      </div>
      <div className="p-5 grid grid-cols-3 gap-3">
        <PreviewTile title="Approved today" value="1,024" tone="green" />
        <PreviewTile title="Success rate" value="97.4%" tone="green" />
        <PreviewTile title="Unsuccessful" value="27" tone="amber" />
        <div className="col-span-3 h-24 rounded-lg bg-white/5 grid place-items-center text-[11px] text-white/40 font-mono">
          Live timeseries — 30s refresh
        </div>
        <PreviewTile title="Healthy" value="42" tone="green" />
        <PreviewTile title="Degraded" value="3" tone="amber" />
        <PreviewTile title="Offline" value="1" tone="red" />
      </div>
    </div>
  );
}

function PreviewTile({ title, value, tone }: { title: string; value: string; tone: "green" | "amber" | "red" }) {
  const stripe =
    tone === "green" ? "bg-emerald-400" : tone === "amber" ? "bg-amber-400" : "bg-red-400";
  return (
    <div className="relative rounded-lg bg-white/5 p-3 overflow-hidden">
      <span className={"absolute inset-y-0 left-0 w-0.5 " + stripe} />
      <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium">{title}</p>
      <p className="mt-1 text-lg font-semibold text-white tabular-nums">{value}</p>
    </div>
  );
}
