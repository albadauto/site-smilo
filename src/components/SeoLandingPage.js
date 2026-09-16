import Container from "./Container";
import CtaSection from "./CtaSection";
import FaqAccordion from "./FaqAccordion";
import FeatureCard from "./FeatureCard";
import Icon from "./Icon";
import JsonLd from "./JsonLd";
import ModuleShowcase from "./ModuleShowcase";
import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { ShinyButton } from "./ui/shiny-button";
import { createBreadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export default function SeoLandingPage({ page }) {
  const pageUrl = `${siteConfig.url}${page.path}`;
  const introPrimary = page.introPrimaryAction || {
    href: siteConfig.freeTrialUrl,
    label: "Testar grátis por 7 dias",
    icon: "ArrowRight",
    external: true,
    shiny: true,
    trackFreeTrial: true,
  };
  const IntroPrimaryButton = introPrimary.shiny ? ShinyButton : Button;
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: page.hero.eyebrow, path: page.path },
  ]);
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.metadata.title,
    description: page.metadata.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: {
      "@type": "SoftwareApplication",
      name: siteConfig.fullName,
      url: siteConfig.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
    },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero {...page.hero} />

      <section aria-label="Comece a usar o Smilo" className="border-b border-ink-100 bg-white py-8">
        <Container className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <IntroPrimaryButton
            href={introPrimary.href}
            data-track-free-trial-click={introPrimary.trackFreeTrial ? "true" : undefined}
            data-track-plan-click={introPrimary.trackPlan ? "true" : undefined}
            data-track-pro-plan-click={introPrimary.trackProPlan ? "true" : undefined}
            data-plan-name={introPrimary.planName}
            data-button-location="landing_intro"
            external={introPrimary.external}
            icon={introPrimary.icon}
          >
            {introPrimary.label}
          </IntroPrimaryButton>
          <Button href="/precos" variant="outline" icon="ArrowRight">
            Ver planos e preços
          </Button>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <ModuleShowcase module={page.showcase} index={0} />
        </Container>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading {...page.benefits} />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.items.map((item) => (
              <FeatureCard key={item.name} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={page.workflow.eyebrow}
            title={page.workflow.title}
            description={page.workflow.description}
          />
          <ol className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {page.workflow.steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-ink-100 bg-white p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink-300">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/60 py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title={`Perguntas sobre ${page.hero.eyebrow.toLowerCase()}`}
          />
          <div className="mt-12">
            <FaqAccordion items={page.faq} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Continue conhecendo"
            title="Veja como o Smilo pode apoiar sua clínica"
            description="Explore outros recursos e conteúdos relacionados à organização dos atendimentos."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.relatedLinks.map((item) => (
              <FeatureCard key={item.href} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection {...page.cta} />
    </>
  );
}
