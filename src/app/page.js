import Hero from "@/components/Hero";
import StatsRow from "@/components/StatsRow";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ModuleShowcase from "@/components/ModuleShowcase";
import SecuritySection from "@/components/SecuritySection";
import PricingPreview from "@/components/PricingPreview";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";
import Button from "@/components/Button";
import { modules, generalFaq } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/seo";

const title = "Smilo CRM | Sistema para Clínicas Odontológicas";
const description =
  "Gerencie agenda, prontuários, pacientes, cobranças e financeiro da sua clínica odontológica em um só lugar com o Smilo CRM.";

export const metadata = createPageMetadata({ title, description, path: "/" });

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: generalFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const highlighted = modules.filter((m) => ["prontuario", "cobrancas"].includes(m.slug));

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <StatsRow />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Tudo que sua clínica precisa, em um só sistema"
            description="Do agendamento ao recebimento, o Smilo substitui planilhas, cadernos e sistemas soltos por um fluxo único — pensado para a rotina de uma clínica odontológica."
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <FeatureCard
                key={module.slug}
                icon={module.icon}
                name={module.name}
                short={module.short}
                slug={module.slug}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-100 bg-white py-4">
        <Container>
          {highlighted.map((module, index) => (
            <ModuleShowcase key={module.slug} module={module} index={index} />
          ))}
        </Container>
        <Container className="flex justify-center pt-4">
          <Button href="/funcionalidades" variant="outline" icon="ArrowRight">
            Ver todas as funcionalidades
          </Button>
        </Container>
      </section>

      <SecuritySection />

      <PricingPreview />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas sobre o Smilo" />
          <div className="mt-12">
            <FaqAccordion items={generalFaq} />
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
