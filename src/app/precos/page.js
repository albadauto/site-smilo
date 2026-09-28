import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import ComparisonTable from "@/components/ComparisonTable";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { pricingPlans, pricingFaq } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

const title = "Planos e Preços | Smilo CRM Odontológico";
const description =
  "Compare os planos do sistema Smilo com Smilo AI: Solo por R$ 119,90/mês e Clínica/Pro por R$ 219,90/mês para toda a operação odontológica.";

export const metadata = createPageMetadata({ title, description, path: "/precos" });

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Planos e preços", path: "/precos" },
]);

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Smilo CRM",
  description,
  brand: { "@type": "Brand", name: siteConfig.name },
  offers: pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: `Plano ${plan.name}`,
    price: plan.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/precos`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.price,
      priceCurrency: "BRL",
      billingIncrement: 1,
      unitText: "MONTH",
    },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function PrecosPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Preços"
        title="Um sistema completo com agente de IA, em qualquer plano"
        description="O Smilo organiza toda a clínica e o Smilo AI ajuda sua equipe a consultar dados e executar rotinas. Escolha o plano conforme o tamanho da operação."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-100 bg-ink-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Comparativo"
            title="Compare os recursos de cada plano"
            description="Os dois planos incluem o sistema de gestão completo e o Smilo AI. O Clínica/Pro acrescenta equipe ilimitada, permissões por perfil, NFS-e e recursos avançados."
          />
          <div className="mt-12">
            <ComparisonTable />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Dúvidas sobre os planos" title="Perguntas frequentes sobre preços" />
          <div className="mt-12">
            <FaqAccordion items={pricingFaq} />
          </div>
        </Container>
      </section>

      <CtaSection
        title="Ainda não sabe qual plano escolher?"
        description="Conte pra gente o tamanho da sua equipe e recomendamos o melhor plano para começar."
        whatsappMessage="Olá! Quero ajuda para escolher o plano ideal do Smilo para minha clínica."
      />
    </>
  );
}
