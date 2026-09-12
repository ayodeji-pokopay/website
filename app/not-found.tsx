import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-5 sm:px-8 py-24 text-center">
      <p className="text-xs uppercase tracking-[.16em] font-medium text-[color:var(--color-brand)] mb-4">404</p>
      <h1 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-balance">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-4 text-[color:var(--color-ink-soft)]">
        The link may have moved or you may have followed an old bookmark. Head back to
        the home page and let us know if something looks broken.
      </p>
      <div className="mt-8 flex justify-center gap-3 flex-wrap">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[color:var(--color-brand)] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-brand-deep)]"
        >
          <Home className="h-4 w-4" /> Back home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium ring-1 ring-[color:var(--color-line-strong)] hover:bg-[color:var(--color-brand-soft)]"
        >
          Report a broken link <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
