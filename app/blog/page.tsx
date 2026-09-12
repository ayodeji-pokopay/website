import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Notes from the rails",
  description:
    "Short engineering notes from the team building Pokopay — data contracts, timezone rules and the choices behind the platform.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Notes from the rails · Pokopay",
    description:
      "Short engineering notes from the team building Pokopay — data contracts, timezone rules and the choices behind the platform.",
    url: "/blog",
  },
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <>
      {/* Hero-lite: same eyebrow / serif h1 pattern as PageShell but tighter
          vertical rhythm so cards start above the fold on desktop. */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-10 sm:pt-24 sm:pb-14">
        <p className="text-xs uppercase tracking-[.16em] font-medium text-[color:var(--color-brand)] mb-4">
          Blog
        </p>
        <h1 className="font-serif text-[clamp(2.2rem,5.2vw,3.8rem)] leading-[1.05] tracking-tight text-balance max-w-3xl">
          Notes from the rails.
        </h1>
        <p className="mt-5 text-lg text-[color:var(--color-ink-soft)] max-w-2xl">
          Short posts from the team building Pokopay. Data contracts, timezone
          rules, why the dashboard renders a verdict instead of computing one —
          the choices behind the platform, in the words of the people who
          shipped them.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        {posts.length === 0 ? (
          <p className="text-sm text-[color:var(--color-ink-soft)]">
            No posts yet — check back soon.
          </p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block h-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 hover:border-[color:var(--color-brand)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[color:var(--color-ink-faint)] mb-4">
                    {p.tag && (
                      <span className="inline-flex items-center rounded-full bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand-deep)] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">
                        {p.tag}
                      </span>
                    )}
                    <time dateTime={p.date}>{formatPostDate(p.date)}</time>
                  </div>
                  <h2 className="font-serif text-2xl leading-tight tracking-tight mb-2 text-balance">
                    {p.title}
                  </h2>
                  <p className="text-sm text-[color:var(--color-ink-soft)]">
                    {p.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-[color:var(--color-ink-faint)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {p.readingMinutes} min read
                    </span>
                    <span className="inline-flex items-center gap-1 text-[color:var(--color-brand)] font-medium">
                      Read <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
