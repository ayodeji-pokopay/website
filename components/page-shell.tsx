import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Shared top-of-page block for interior pages (not the home hero). Gives
 * every page consistent margins, eyebrow, title and lede formatting so we
 * don't spend markup on the same DIV skeleton in a dozen files.
 */
export function PageShell({
  eyebrow, title, lede, children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-10 sm:pt-24 sm:pb-14">
        <p className="text-xs uppercase tracking-[.16em] font-medium text-[color:var(--color-brand)] mb-4">
          {eyebrow}
        </p>
        <h1 className="font-serif text-[clamp(2.2rem,5.2vw,3.8rem)] leading-[1.05] tracking-tight text-balance max-w-3xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 text-lg text-[color:var(--color-ink-soft)] max-w-2xl">
            {lede}
          </p>
        )}
      </section>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">{children}</div>
    </>
  );
}

/** Small reusable CTA row for the bottom of interior pages. */
export function BottomCTA({
  title, primary, secondary,
}: {
  title: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="mt-16 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-8 flex flex-wrap items-center justify-between gap-6">
      <p className="font-serif text-2xl leading-tight max-w-xl">{title}</p>
      <div className="flex flex-wrap gap-3">
        {primary && (
          <Link
            href={primary.href}
            className="inline-flex items-center gap-2 whitespace-nowrap bg-[color:var(--color-brand)] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-brand-deep)]"
          >
            {primary.label} <ArrowRight className="h-4 w-4" />
          </Link>
        )}
        {secondary && (
          <Link
            href={secondary.href}
            className="inline-flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full text-sm font-medium ring-1 ring-[color:var(--color-line-strong)] hover:bg-[color:var(--color-brand-soft)]"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}

/** Row with a coloured leading icon — used across most interior pages. */
export function FeatureRow({
  icon, title, copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 h-10 w-10 rounded-lg bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand-deep)] grid place-items-center">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-lg tracking-tight mb-1">{title}</h3>
        <p className="text-sm text-[color:var(--color-ink-soft)] leading-relaxed">{copy}</p>
      </div>
    </div>
  );
}
