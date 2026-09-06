import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/funcionalidades", changeFrequency: "monthly", priority: 0.9 },
    { path: "/precos", changeFrequency: "monthly", priority: 0.9 },
    { path: "/sobre", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contato", changeFrequency: "monthly", priority: 0.7 },
  ];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
