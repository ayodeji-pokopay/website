import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const base = "https://pokopayng.com";
const now = new Date();

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/for-merchants", priority: 0.9, changeFrequency: "monthly" },
  { path: "/for-partners", priority: 0.9, changeFrequency: "monthly" },
  { path: "/security", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/company", priority: 0.5, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/pci-notice", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/acceptable-use", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Per-post entries — cheap since the posts live in the repo. If the folder
  // is missing, getAllPosts() returns [] rather than throwing.
  const posts = await getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries];
}
