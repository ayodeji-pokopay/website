import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug, formatPostDate, renderMarkdown } from "@/lib/blog";

// Statically generate every post at build; unknown slugs 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} · Pokopay`,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tag ? [post.tag] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.body);

  return (
    <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-24 sm:pt-24">
      <div className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All posts
        </Link>
      </div>

      {post.tag && (
        <p className="text-xs uppercase tracking-[.16em] font-medium text-[color:var(--color-brand)] mb-4">
          {post.tag}
        </p>
      )}
      <h1 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-balance">
        {post.title}
      </h1>

      {/* Byline row — author, date, reading time. */}
      <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[color:var(--color-ink-faint)]">
        <span className="text-[color:var(--color-ink-soft)]">{post.author}</span>
        <span aria-hidden>&middot;</span>
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span aria-hidden>&middot;</span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {post.readingMinutes} min read
        </span>
      </p>

      <div
        className="post-prose mt-10"
        // The renderer escapes user content before applying markup, so this
        // is safe against the frontmatter/body we author.
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <style>{`
        .post-prose { color: var(--color-ink); line-height: 1.75; font-size: 1.0625rem; }
        .post-prose p { margin: 0 0 1.25rem; }
        .post-prose h2 { font-family: var(--font-serif); font-size: 1.5rem; margin: 2.75rem 0 0.85rem; letter-spacing: -0.01em; }
        .post-prose h3 { font-family: var(--font-serif); font-size: 1.2rem; margin: 2.25rem 0 0.65rem; letter-spacing: -0.01em; }
        .post-prose a { color: var(--color-brand); text-decoration: underline; text-underline-offset: 2px; }
        .post-prose a:hover { color: var(--color-brand-deep); }
        .post-prose ul { margin: 0 0 1.25rem 1.25rem; padding: 0; }
        .post-prose li { margin-bottom: 0.4rem; }
        .post-prose blockquote { margin: 0 0 1.25rem; padding: 0.75rem 1rem; border-left: 3px solid var(--color-brand); background: var(--color-brand-soft); border-radius: 0 0.5rem 0.5rem 0; color: var(--color-ink); }
        .post-prose code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.9em; background: var(--color-surface); border: 1px solid var(--color-line); padding: 0.05rem 0.35rem; border-radius: 4px; }
        .post-prose strong { font-weight: 600; color: var(--color-ink); }
      `}</style>

      <div className="mt-16 border-t border-[color:var(--color-line)] pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-deep)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all posts
        </Link>
      </div>
    </article>
  );
}
