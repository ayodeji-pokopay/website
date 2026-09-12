"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/for-merchants", label: "Merchants" },
  { href: "/for-partners", label: "Partners" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/company", label: "Company" },
  { href: "/blog", label: "Blog" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[color:var(--color-canvas)]/85 border-b border-[color:var(--color-line)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Pokopay home">
          <LogoMark className="h-7 w-auto" />
          <span className="font-serif text-xl font-medium tracking-tight">Pokopay</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-md text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] hover:bg-[color:var(--color-brand-soft)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://dashboard.pokopayng.com"
            className="text-sm px-3 py-2 rounded-md text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors"
          >
            Sign in
          </a>
          <Link
            href="/contact"
            className="text-sm inline-flex items-center gap-1.5 bg-[color:var(--color-brand)] text-white px-4 py-2 rounded-full hover:bg-[color:var(--color-brand-deep)] transition-colors"
          >
            Talk to us <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden h-10 w-10 grid place-items-center rounded-md hover:bg-[color:var(--color-brand-soft)]"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[color:var(--color-brand-soft)]"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://dashboard.pokopayng.com"
              className="px-3 py-2 rounded-md hover:bg-[color:var(--color-brand-soft)]"
            >
              Sign in
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 bg-[color:var(--color-brand)] text-white px-4 py-2.5 rounded-full"
            >
              Talk to us <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Pokopay mark — rounded-square in brand green with a geometric white "P"
 *  and a mint pulse dot at the bottom-right that reads as "live rails".
 *  All strokes are pure SVG so it renders crisp at any size and swaps colour
 *  via the theme tokens.  If you get a real logo file later, replace the
 *  contents of this function — every consumer imports LogoMark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="var(--color-brand)" />
      {/* Geometric "P" — squared bowl, deliberate weight */}
      <path
        d="M12 10h11.25a6.75 6.75 0 0 1 0 13.5H16V30h-4V10Zm4 3.75V19.75h7.25a3 3 0 0 0 0-6H16Z"
        fill="white"
      />
      {/* Mint pulse — reads as "live" */}
      <circle cx="30.5" cy="30.5" r="2.75" fill="#7EE0A6" />
    </svg>
  );
}
