/**
 * Shared shell for legal pages — indented reading column, small print
 * heading hierarchy, prose defaults tuned for terms/privacy content.
 * Kept off /components so it's obvious this styling is legal-only.
 */
export function LegalShell({
  title, updated, children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-24 sm:pt-24">
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
      `}</style>
    </div>
  );
}
