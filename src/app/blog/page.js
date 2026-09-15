import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

const title = "Blog | Gestão Odontológica — Smilo CRM";
const description =
  "Artigos sobre software de gestão odontológica, prontuário eletrônico, agenda e financeiro para clínicas e consultórios odontológicos.";

export const metadata = createPageMetadata({ title, description, path: "/blog" });

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Blog", path: "/blog" },
]);

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteConfig.url}/blog#blog`,
  name: "Blog do Smilo CRM",
  description,
  url: `${siteConfig.url}/blog`,
  inLanguage: "pt-BR",
  publisher: { "@id": `${siteConfig.url}/#organization` },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
  })),
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={blogJsonLd} />

      <PageHero
        eyebrow="Blog"
        title="Conteúdo sobre gestão odontológica"
        description="Guias práticos sobre software de gestão odontológica, prontuário eletrônico, agenda, financeiro e rotina de clínicas e consultórios."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Quer ver o Smilo funcionando na sua clínica?"
        description="Fale com a gente e veja como o Smilo organiza agenda, prontuário e financeiro em um só sistema."
        whatsappMessage="Olá! Vi o blog do Smilo e quero conhecer o sistema."
      />
    </>
  );
}
