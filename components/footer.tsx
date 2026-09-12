import Link from "next/link";
import { LogoMark } from "./nav";

const groups = [
  {
    title: "Product",
    links: [
      { href: "/for-merchants", label: "For merchants" },
      { href: "/for-partners", label: "For partners" },
      { href: "/pricing", label: "Pricing" },
      { href: "/security", label: "Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/company", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: "https://dashboard.pokopayng.com", label: "Sign in", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/terms", label: "Terms of service" },
      { href: "/legal/privacy", label: "Privacy policy" },
      { href: "/legal/cookies", label: "Cookies" },
      { href: "/legal/acceptable-use", label: "Acceptable use" },
      { href: "/legal/pci-notice", label: "PCI notice" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-surface)] mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <LogoMark className="h-7 w-7" />
            <span className="text-lg font-bold tracking-tight lowercase">pokopay</span>
          </div>
          <p className="text-sm text-[color:var(--color-ink-soft)] max-w-xs">
            Payments infrastructure for Nigerian merchants, acquirers and CSAs.
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-faint)] font-semibold mb-3">
              {g.title}
            </p>
            <ul className="space-y-2">
              {g.links.map((l) => (
                <li key={l.href}>
                  {"external" in l && l.external ? (
                    <a
                      href={l.href}
                      className="text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[color:var(--color-line)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--color-ink-faint)]">
          <p>© {new Date().getFullYear()} Pokopay. All rights reserved.</p>
          <p>
            Built in Lagos. <span aria-hidden>·</span>{" "}
            <a
              href="mailto:hello@pokopayng.com"
              className="hover:text-[color:var(--color-ink)]"
            >
              hello@pokopayng.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
