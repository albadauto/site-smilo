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

const title = "Preços do Smilo CRM — planos Solo, Clínica e Pro";
const description =
  "Conheça os planos do Smilo: Solo (R$89/mês), Clínica (R$169/mês) e Pro (R$249/mês). Sem limite de pacientes cadastrados e sem taxa de implantação escondida.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/precos" },
  openGraph: { url: "/precos", title, description },
};

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
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Preços"
        title="Um plano para cada tamanho de clínica"
        description="Preços simples, por clínica. Sem limite de pacientes cadastrados e sem taxa de implantação escondida — evolua de plano conforme sua equipe cresce."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
            description="Todos os planos incluem agenda, prontuário clínico e cobranças. A diferença está no tamanho da equipe e nos recursos de gestão."
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
