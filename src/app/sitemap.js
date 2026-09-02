import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/funcionalidades", "/precos", "/sobre", "/contato"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/precos" || route === "/funcionalidades" ? 0.9 : 0.7,
  }));
}
