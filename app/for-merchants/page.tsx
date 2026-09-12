import type { Metadata } from "next";
import {
  Cpu, Wallet, ScrollText, Receipt, Users, Bell, LineChart,
  UtensilsCrossed, Smartphone, ArrowRight,
} from "lucide-react";
import { PageShell, FeatureRow, BottomCTA } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "For merchants",
  description:
    "Card acceptance, POS management, wallets, settlements, staff scopes and a restaurant module — everything a Nigerian merchant needs to run payments end-to-end.",
};

export default function ForMerchants() {
  return (
    <PageShell
      eyebrow="For merchants"
      title="Everything you need to run payments end-to-end."
      lede="From your first terminal to a chain of restaurants, Pokopay covers card acceptance, POS management, wallets, settlements, staff scopes and reporting on one platform."
    >
      <div className="grid gap-14 md:grid-cols-2 mt-6">
        <FeatureRow
          icon={<Cpu className="h-5 w-5" />}
          title="Terminal fleet, health-first"
          copy="See every terminal's live health — battery, printer, connection, signal — from one board. The dashboard groups your fleet by verdict so 'needs attention' is the first thing you see, not the last."
        />
        <FeatureRow
          icon={<Wallet className="h-5 w-5" />}
          title="Wallet & ledger"
          copy="Every transaction, fee, settlement and adjustment writes a wallet ledger row. Search, filter, export. Balance snapshots reconcile against the ledger with a one-kobo tolerance."
        />
        <FeatureRow
          icon={<ScrollText className="h-5 w-5" />}
          title="Same-day, T+1 or scheduled settlement"
          copy="Configurable per merchant. Downloadable statements in PDF or CSV. All bracketed in Africa/Lagos so a sale at 00:30 WAT belongs to the right day."
        />
        <FeatureRow
          icon={<Receipt className="h-5 w-5" />}
          title="Transactions you can actually search"
          copy="By TID, MID, cardholder email, PAN last-4, amount, date range. Reversed transactions rendered as their own state — never lumped with declines."
        />
        <FeatureRow
          icon={<LineChart className="h-5 w-5" />}
          title="Reports built for finance, not just ops"
          copy="Summary, by-status, by-scheme, by-bank, by-BIN, by-card-type, by-decline-reason, timeseries and hourly — every cut Nigerian merchants ask for at close of business."
        />
        <FeatureRow
          icon={<Users className="h-5 w-5" />}
          title="Staff management with real scopes"
          copy="Owner, manager and cashier roles with server-owned permissions. Cashiers can be scoped to specific terminals; deactivating a member revokes their live sessions immediately."
        />
        <FeatureRow
          icon={<Bell className="h-5 w-5" />}
          title="Send notifications to app & terminal"
          copy="Push a message to your merchant app users or your POS terminals — instantly to mobile, queued on POS heartbeat. History with resend, per-role scope enforced."
        />
        <FeatureRow
          icon={<UtensilsCrossed className="h-5 w-5" />}
          title="Restaurant module"
          copy="Menu, orders, staff PINs, refunds, discounts, live 'Now' board, daily breakdowns and staff performance — for merchants that need it, without a second SaaS."
        />
      </div>

      <div className="mt-24 rounded-3xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] p-8 sm:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[.16em] text-[color:var(--color-brand)] font-medium mb-3">
              On the terminal
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight text-balance">
              Runs on the hardware you already know.
            </h2>
            <p className="mt-4 text-[color:var(--color-ink-soft)] max-w-lg">
              PAX, Telpo and Sunyard terminals supported today. Card acceptance,
              PIN entry, receipt printing, live heartbeat with battery / connection
              / printer telemetry. Encrypted key injection, remote rotation and
              expiry management — never a clear key in a browser form.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[color:var(--color-ink-soft)]">
              <Bullet>Visa, Mastercard, Verve, AMEX, Discover, UnionPay</Bullet>
              <Bullet>Offline queue for intermittent connectivity</Bullet>
              <Bullet>Encrypted key management with KCVs surfaced in the console</Bullet>
              <Bullet>PTSP handshake pre-wired for NIBSS + your acquirer</Bullet>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-64 w-40 rounded-3xl bg-[color:var(--color-ink)] shadow-[var(--shadow-soft)] relative overflow-hidden">
              <div className="absolute inset-x-2 top-2 bottom-16 rounded-2xl bg-[color:var(--color-brand-soft)] grid place-items-center">
                <Smartphone className="h-8 w-8 text-[color:var(--color-brand-deep)]" aria-hidden />
              </div>
              <div className="absolute inset-x-2 bottom-2 h-12 rounded-xl bg-white/5 grid place-items-center text-[10px] font-mono text-white/60">
                POS · v1.4.2
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomCTA
        title="Let's map your fleet onto Pokopay."
        primary={{ href: "/contact", label: "Talk to us" }}
        secondary={{ href: "/pricing", label: "See pricing" }}
      />
    </PageShell>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 text-[color:var(--color-brand)]"><ArrowRight className="h-3 w-3" /></span>
      <span>{children}</span>
    </li>
  );
}
