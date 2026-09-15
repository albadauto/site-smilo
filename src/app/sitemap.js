import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export default function sitemap() {
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/funcionalidades", changeFrequency: "monthly", priority: 0.9 },
    { path: "/precos", changeFrequency: "monthly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/sobre", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contato", changeFrequency: "monthly", priority: 0.7 },
  ];
  const lastModified = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
