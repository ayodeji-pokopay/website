import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { PageShell, BottomCTA } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About Pokopay — a Nigerian payments infrastructure company building for merchants, acquirers and CSAs.",
};

export default function Company() {
  return (
    <PageShell
      eyebrow="Company"
      title="Built in Lagos. For every merchant we can reach."
      lede="Pokopay is a Nigerian payments infrastructure company. We build the rails, the terminals, the dashboard, the mobile app and the compliance surface — so a shop, a chain or a bank can run card payments without stitching six vendors together."
    >
      <div className="grid md:grid-cols-2 gap-14 mt-8">
        <section>
          <h2 className="font-serif text-3xl leading-tight tracking-tight">What we care about</h2>
          <ul className="mt-6 space-y-4 text-sm text-[color:var(--color-ink-soft)]">
            <ValueRow
              title="Merchants first"
              body="Every decision starts with the operator behind the counter. If it doesn't help them, we don't ship it."
            />
            <ValueRow
              title="Boring in the right places"
              body="Money, timestamps, permissions, keys. We'd rather be dull and correct than clever and wrong."
            />
            <ValueRow
              title="Nigerian defaults, not exports"
              body="Africa/Lagos time, NGN native, NIBSS PTSP handshake pre-wired. The dashboard reads the way our customers work."
            />
            <ValueRow
              title="Ship, then learn"
              body="Small pushes, real deploys, honest changelogs. We keep a 'What's new' drawer inside the dashboard because our customers deserve to know what changed."
            />
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl leading-tight tracking-tight">Where to find us</h2>
          <div className="mt-6 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 space-y-4">
            <p className="flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--color-brand)]" />
              <span>
                <span className="font-medium block">Lagos office</span>
                <span className="text-[color:var(--color-ink-soft)]">Address updates in the next release.</span>
              </span>
            </p>
            <p className="flex items-start gap-3 text-sm">
              <Mail className="h-4 w-4 mt-0.5 text-[color:var(--color-brand)]" />
              <span>
                <span className="font-medium block">Get in touch</span>
                <a href="mailto:hello@pokopayng.com" className="text-[color:var(--color-brand)] hover:underline">
                  hello@pokopayng.com
                </a>
              </span>
            </p>
          </div>

          <h3 className="font-serif text-2xl mt-10 mb-4 tracking-tight">Careers</h3>
          <p className="text-sm text-[color:var(--color-ink-soft)]">
            We hire engineers, designers, ops and compliance folks who want to help Nigerian merchants win.
            No open listings this week, but we&apos;re always talking to strong candidates —{" "}
            <Link href="/contact" className="text-[color:var(--color-brand)] hover:underline">
              introduce yourself
            </Link>.
          </p>
        </section>
      </div>

      <BottomCTA
        title="Curious to work with us — or for us?"
        primary={{ href: "/contact", label: "Say hello" }}
        secondary={{ href: "/for-merchants", label: "See the product" }}
      />
    </PageShell>
  );
}

function ValueRow({ title, body }: { title: string; body: string }) {
  return (
    <li>
      <p className="font-medium text-[color:var(--color-ink)]">{title}</p>
      <p className="mt-0.5">{body}</p>
    </li>
  );
}
