import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

/**
 * Blog posts are authored as `.mdx` files under `/content/blog`.
 *
 * We deliberately hand-roll frontmatter and markdown here rather than pull in
 * `@next/mdx` or `gray-matter` — the marketing site has zero MDX-specific
 * dependencies today, and the two seed posts don't need JSX-in-content. If
 * later we start wanting real components inside posts, swap this module for
 * `@next/mdx` in a single commit; the shape of `Post` and `getAllPosts` /
 * `getPostBySlug` is what everything else in the app depends on.
 *
 * The renderer below is intentionally minimal: paragraphs, `#`/`##`/`###`
 * headings, `- ` unordered lists, `> ` blockquotes, `**bold**`, `_italic_`,
 * `` `code` `` and `[text](href)` links. Everything else falls through as a
 * paragraph. Escapes user content before applying any inline markup, so it's
 * safe to render into `dangerouslySetInnerHTML`.
 *
 * AUTHORING NOTE: write plain characters in markdown source — a straight
 * apostrophe ('), a real em-dash (—), curly quotes (" "). The renderer
 * escapes `&` to `&amp;`, so if you write `&apos;` in the .mdx it comes out
 * as literal `&apos;` in the browser. HTML entities belong in JSX, not
 * here. (React lint expects them; markdown doesn't.)
 */

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string from frontmatter, e.g. "2026-09-12". */
  date: string;
  author: string;
  readingMinutes: number;
  tag?: string;
  /** Raw markdown body (frontmatter stripped). */
  body: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Read + parse every post. Sorted newest first. */
export async function getAllPosts(): Promise<Post[]> {
  let entries: string[];
  try {
    entries = await readdir(BLOG_DIR);
  } catch {
    // No content dir yet — treat as empty rather than blowing up the build.
    return [];
  }
  const files = entries.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  const posts = await Promise.all(
    files.map(async (file) => parsePost(file, await readFile(path.join(BLOG_DIR, file), "utf8")))
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // We accept only clean slugs — no traversal, no extensions.
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  for (const ext of [".mdx", ".md"]) {
    try {
      const raw = await readFile(path.join(BLOG_DIR, `${slug}${ext}`), "utf8");
      return parsePost(`${slug}${ext}`, raw);
    } catch {
      // try next extension
    }
  }
  return null;
}

// -- Frontmatter parsing ----------------------------------------------------

function parsePost(fileName: string, raw: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`Post '${fileName}' is missing a frontmatter block.`);
  }
  const fm = parseFrontmatter(match[1]);
  const body = match[2].trim();

  const title = requireString(fm, "title", fileName);
  const description = requireString(fm, "description", fileName);
  const date = requireString(fm, "date", fileName);
  const author = requireString(fm, "author", fileName);
  const readingMinutesRaw = requireString(fm, "readingMinutes", fileName);
  const readingMinutes = Number(readingMinutesRaw);
  if (!Number.isFinite(readingMinutes) || readingMinutes <= 0) {
    throw new Error(`Post '${fileName}' has invalid readingMinutes: ${readingMinutesRaw}`);
  }

  return {
    slug,
    title,
    description,
    date,
    author,
    readingMinutes,
    tag: fm.tag,
    body,
  };
}

function parseFrontmatter(block: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const line of block.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // Strip matching surrounding quotes if present.
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

function requireString(fm: Record<string, string>, key: string, file: string): string {
  const v = fm[key];
  if (typeof v !== "string" || v.length === 0) {
    throw new Error(`Post '${file}' is missing required frontmatter field: ${key}`);
  }
  return v;
}

// -- Markdown rendering ------------------------------------------------------

/**
 * Render our tiny markdown dialect to an HTML string. Intentionally limited;
 * see the module comment. If a post relies on something not listed there, the
 * post will render as plain paragraphs rather than fail — that's the contract.
 */
export function renderMarkdown(source: string): string {
  const blocks = source.split(/\n{2,}/);
  const html: string[] = [];

  for (const rawBlock of blocks) {
    const block = rawBlock.trim();
    if (!block) continue;

    // Headings
    const h = block.match(/^(#{1,3})\s+(.*)$/);
    if (h && !block.includes("\n")) {
      const level = h[1].length;
      html.push(`<h${level}>${renderInline(h[2])}</h${level}>`);
      continue;
    }

    // Unordered list — every line starts with "- "
    if (block.split(/\n/).every((l) => l.startsWith("- "))) {
      const items = block
        .split(/\n/)
        .map((l) => `<li>${renderInline(l.slice(2))}</li>`)
        .join("");
      html.push(`<ul>${items}</ul>`);
      continue;
    }

    // Blockquote — every line starts with "> "
    if (block.split(/\n/).every((l) => l.startsWith(">"))) {
      const inner = block
        .split(/\n/)
        .map((l) => l.replace(/^>\s?/, ""))
        .join(" ");
      html.push(`<blockquote>${renderInline(inner)}</blockquote>`);
      continue;
    }

    // Paragraph — join soft line breaks with a space.
    const paragraph = block.split(/\n/).join(" ");
    html.push(`<p>${renderInline(paragraph)}</p>`);
  }

  return html.join("\n");
}

function renderInline(text: string): string {
  // 1. Escape HTML entities first so nothing user-authored becomes markup.
  let out = escapeHtml(text);

  // 2. Inline code — protect its contents from further replacement by using
  //    a placeholder pattern. Simple approach: replace after `<code>` wrap.
  out = out.replace(/`([^`]+)`/g, (_m, code: string) => `<code>${code}</code>`);

  // 3. Links: [label](url) — URL is already HTML-escaped; refuse anything
  //    that isn't http(s), mailto or a site-root path.
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => {
    const safe = /^(https?:|mailto:|\/)/i.test(href) ? href : "#";
    return `<a href="${safe}">${label}</a>`;
  });

  // 4. Bold (**x**) then italic (_x_). Order matters because `**_x_**` would
  //    otherwise confuse the italic pass.
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[\s(])_([^_]+)_(?=[\s.,;:!?)]|$)/g, "$1<em>$2</em>");

  return out;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// -- Formatting helpers ------------------------------------------------------

/**
 * Format an ISO date as "12 September 2026" in en-GB locale. Kept here so
 * every consumer (index page, post page, RSS if we add it) formats the same
 * way.
 */
export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
