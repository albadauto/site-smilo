import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export default function sitemap() {
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/sistema-para-clinica-odontologica", changeFrequency: "monthly", priority: 0.9 },
    { path: "/funcionalidades", changeFrequency: "monthly", priority: 0.9 },
    { path: "/agenda-odontologica", changeFrequency: "monthly", priority: 0.9 },
    { path: "/prontuario-eletronico-odontologico", changeFrequency: "monthly", priority: 0.9 },
    { path: "/anamnese-odontologica", changeFrequency: "monthly", priority: 0.9 },
    { path: "/financeiro-clinica-odontologica", changeFrequency: "monthly", priority: 0.9 },
    { path: "/lembrete-consulta-whatsapp", changeFrequency: "monthly", priority: 0.9 },
    { path: "/precos", changeFrequency: "monthly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/sobre", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contato", changeFrequency: "monthly", priority: 0.7 },
  ];

  const staticEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
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
