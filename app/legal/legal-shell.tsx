import { AlertTriangle } from "lucide-react";

/**
 * Shared shell for legal pages — indented reading column, small print
 * heading hierarchy, prose defaults tuned for terms/privacy content.
 * Kept off /components so it's obvious this styling is legal-only.
 *
 * By default renders a prominent, non-dismissible "Draft — pending counsel
 * review" banner above the title: every page under /legal is a placeholder
 * that needs a lawyer's eyes before anyone relies on it. Pass
 * status="published" once counsel has signed a given page off to suppress
 * the banner for that page only.
 */
export function LegalShell({
  title,
  updated,
  status = "draft",
  children,
}: {
  title: string;
  updated: string;
  status?: "draft" | "published";
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-24 sm:pt-24">
      {status === "draft" && (
        <div
          role="note"
          aria-label="Draft legal document notice"
          className="mb-10 flex items-start gap-3 rounded-xl border border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/10 p-4 sm:p-5"
        >
          <AlertTriangle
            className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-accent)]"
            aria-hidden
          />
          <div className="text-sm leading-relaxed text-[color:var(--color-ink)]">
            <p className="font-semibold text-[color:var(--color-ink)]">
              Draft &mdash; pending counsel review
            </p>
            <p className="mt-1 text-[color:var(--color-ink-soft)]">
              This page is a placeholder we&apos;re publishing early for transparency.
              It has not been reviewed by qualified Nigerian legal counsel and does
              not yet form part of any binding agreement. Commercial terms are
              governed by your executed contract with Pokopay.
            </p>
          </div>
        </div>
      )}

      <p className="text-xs uppercase tracking-[.16em] font-medium text-[color:var(--color-brand)] mb-4">Legal</p>
      <h1 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">{title}</h1>
      <p className="mt-3 text-sm text-[color:var(--color-ink-faint)]">Last updated {updated}</p>

      <div className="legal-prose mt-10">
        {children}
      </div>

      <style>{`
        .legal-prose { color: var(--color-ink); line-height: 1.72; }
        .legal-prose p { margin: 0 0 1rem; }
        .legal-prose h2 { font-family: var(--font-serif); font-size: 1.375rem; margin: 2.5rem 0 0.75rem; letter-spacing: -0.01em; }
        .legal-prose h3 { font-family: var(--font-serif); font-size: 1.125rem; margin: 2rem 0 0.5rem; letter-spacing: -0.01em; }
        .legal-prose a { color: var(--color-brand); text-decoration: underline; text-underline-offset: 2px; }
        .legal-prose a:hover { color: var(--color-brand-deep); }
        .legal-prose ul { margin: 0 0 1rem 1.25rem; padding: 0; }
        .legal-prose li { margin-bottom: 0.35rem; }
        .legal-prose code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.9em; background: var(--color-surface); border: 1px solid var(--color-line); padding: 0.05rem 0.35rem; border-radius: 4px; }
      `}</style>
    </div>
  );
}
