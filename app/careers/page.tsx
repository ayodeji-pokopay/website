import type { Metadata } from "next";
import { Mail, HeartHandshake, Wrench, MapPinned, Rocket, ArrowRight } from "lucide-react";
import { PageShell, BottomCTA } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build Nigerian payments infrastructure at Pokopay. No open roles right now — we still want to hear from strong candidates.",
  alternates: { canonical: "/careers" },
};

const values = [
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Merchants first",
    body: "Every decision starts with the operator behind the counter. If it doesn't help them, we don't ship it.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Boring in the right places",
    body: "Money, timestamps, permissions, keys. We'd rather be dull and correct than clever and wrong.",
  },
  {
    icon: <MapPinned className="h-5 w-5" />,
    title: "Nigerian defaults",
    body: "Africa/Lagos time, NGN native, NIBSS PTSP handshake pre-wired. We build the product our customers already work like.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Ship, then learn",
    body: "Small pushes, real deploys, honest changelogs. We measure ourselves by what merchants actually get to use.",
  },
];

export default function Careers() {
  return (
    <PageShell
      eyebrow="Careers"
      title="Build Nigerian payments infrastructure with us."
      lede="Pokopay is a small team building the rails, the terminals, the dashboard and the compliance surface for card acceptance in Nigeria. If you want to help a shop, a chain or a bank run payments without stitching six vendors together, we'd like to hear from you."
    >
      {/* Intro — two short paragraphs on what it's like to build here. */}
      <section className="grid md:grid-cols-2 gap-10 mt-8 max-w-4xl">
        <p className="text-[color:var(--color-ink-soft)] leading-relaxed">
          The work is close to the metal. You&apos;ll spend time reading NIBSS
          specs, thinking about idempotency in the wallet ledger, arguing over
          whether a settlement belongs to Tuesday or Wednesday in Africa/Lagos,
          and watching your code run on a real POS terminal in a real shop the
          same week you shipped it.
        </p>
        <p className="text-[color:var(--color-ink-soft)] leading-relaxed">
          The team is small and the loop is short. Design, engineering, ops and
          compliance sit in one room (or one Slack channel). Decisions get made
          by the people who&apos;ll live with them. If you&apos;ve had enough
          of hand-offs and want to see the whole picture — from a merchant
          onboarding call to a cardholder&apos;s receipt — this is that.
        </p>
      </section>

      {/* How we work — four value cards. */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-[.16em] font-medium text-[color:var(--color-brand)] mb-3">
          How we work
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight max-w-2xl">
          Four things we don&apos;t argue about.
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            >
              <div className="h-10 w-10 rounded-lg bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand-deep)] grid place-items-center mb-4">
                {v.icon}
              </div>
              <h3 className="font-serif text-xl mb-2 tracking-tight">{v.title}</h3>
              <p className="text-sm text-[color:var(--color-ink-soft)] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current openings — empty-state today. */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-[.16em] font-medium text-[color:var(--color-brand)] mb-3">
          Current openings
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight max-w-2xl">
          No open roles right now &mdash; we still want to hear from you.
        </h2>

        <div className="mt-8 rounded-3xl border border-dashed border-[color:var(--color-line-strong)] bg-[color:var(--color-surface)] p-8 sm:p-10">
          <p className="text-[color:var(--color-ink-soft)] max-w-2xl">
            We&apos;re not actively hiring for a specific title this week, but
            we&apos;re always talking to strong engineers, designers, ops and
            compliance folks. If any of the values above sound like you, send
            us a note — we keep the good conversations warm.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:careers@pokopayng.com?subject=Talking%20to%20Pokopay"
              className="inline-flex items-center gap-2 bg-[color:var(--color-brand)] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-brand-deep)]"
            >
              <Mail className="h-4 w-4" /> Talk to us
            </a>
            <a
              href="mailto:careers@pokopayng.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium ring-1 ring-[color:var(--color-line-strong)] hover:bg-[color:var(--color-brand-soft)]"
            >
              careers@pokopayng.com
            </a>
          </div>
        </div>

        {/* How to apply — plain guidance on what to send. */}
        <div className="mt-10 max-w-3xl">
          <h3 className="font-serif text-2xl leading-tight tracking-tight">How to apply</h3>
          <p className="mt-4 text-[color:var(--color-ink-soft)] leading-relaxed">
            Email <a href="mailto:careers@pokopayng.com" className="text-[color:var(--color-brand)] hover:underline">careers@pokopayng.com</a>{" "}
            with a short note about what you&apos;ve built and what you&apos;d
            like to build next. A CV or LinkedIn link is enough &mdash; we
            don&apos;t need a cover letter. If you&apos;ve shipped something
            you&apos;re proud of (a repo, a case study, a product you can point
            at), send a link. If your work isn&apos;t public, a paragraph on
            what you owned and what it moved is more useful than a job title.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-[color:var(--color-ink-soft)]">
            <Bullet>Where you are (Lagos, elsewhere in Nigeria, remote from further afield).</Bullet>
            <Bullet>Roles you&apos;re open to and roles you aren&apos;t.</Bullet>
            <Bullet>The shortest thing you can send that shows how you think.</Bullet>
          </ul>
        </div>
      </section>

      <BottomCTA
        title="Want to build the rails Nigerian merchants deserve?"
        primary={{ href: "/contact", label: "Say hello" }}
        secondary={{ href: "/company", label: "About Pokopay" }}
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
