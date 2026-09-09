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
  "Compare os planos Solo e Clínica/Pro do Smilo CRM. Gestão odontológica sem limite de pacientes e sem taxa de implantação escondida.";

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
        title="Um plano para cada tamanho de clínica"
        description="Preços simples, por clínica. Sem limite de pacientes cadastrados e sem taxa de implantação escondida — evolua de plano conforme sua equipe cresce."
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
            description="Todos os planos incluem prontuário clínico, fichas de anamnese e cobranças. No Clínica/Pro, você também conta com lembretes de agenda via WhatsApp e recursos de gestão de equipe."
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
