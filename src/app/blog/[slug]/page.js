import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import BlogPostContent from "@/components/BlogPostContent";
import BlogCard from "@/components/BlogCard";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createPageMetadata({
    title: `${post.title} | Blog Smilo CRM`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 2);

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    inLanguage: "pt-BR",
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />

      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="mb-10 flex items-center gap-3 text-sm text-ink-500">
            <span>{formattedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          <BlogPostContent blocks={post.content} />
        </Container>
      </section>

      {related.length ? (
        <section className="border-t border-ink-100 bg-ink-50/60 py-20 sm:py-24">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-ink-950">
              Continue lendo
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaSection
        title="Pronto para organizar sua clínica com o Smilo?"
        description="Fale com nosso time e veja como o Smilo se encaixa na rotina da sua clínica odontológica."
        whatsappMessage="Olá! Li um artigo do blog do Smilo e quero conhecer o sistema."
      />
    </>
  );
}
