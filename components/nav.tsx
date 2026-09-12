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

/** Placeholder logo mark — swap for the real SVG when you have it. Keeps the
 *  visual identity consistent without a hardcoded raster asset. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="16" r="15" fill="var(--color-brand)" />
      <path
        d="M10 22V10h6a4 4 0 1 1 0 8h-3v4h-3Zm3-7h3a1.5 1.5 0 1 0 0-3h-3v3Z"
        fill="white"
      />
    </svg>
  );
}
