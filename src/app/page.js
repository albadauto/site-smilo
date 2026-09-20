import Hero from "@/components/Hero";
import SocialProofSection from "@/components/SocialProofSection";
import BenefitsMarquee from "@/components/BenefitsMarquee";
import StatsRow from "@/components/StatsRow";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ModuleShowcase from "@/components/ModuleShowcase";
import SecuritySection from "@/components/SecuritySection";
import PricingPreview from "@/components/PricingPreview";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";
import Button from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { modules, generalFaq } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/seo";

const title = "Smilo CRM | Software de Gestão Odontológica para Clínicas";
const description =
  "Smilo é o software de gestão odontológica completo: agenda, prontuário eletrônico, pacientes, cobranças e financeiro em um só sistema. Teste grátis por 7 dias.";

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

const prontuarioModule = modules.find((module) => module.slug === "prontuario");
const agendaModule = modules.find((module) => module.slug === "agenda");
const highlighted = [
  {
    ...prontuarioModule,
    image: "/images/screens/sistema-clinica-odontologia-prontuario.webp",
    imageWidth: 1399,
    imageHeight: 888,
    imageAlt: "Odontograma no prontuário clínico do Smilo CRM",
    secondaryImage: "/images/screens/sistema-clinica-ondontologica-prontuario-anamnese.webp",
    secondaryImageWidth: 1408,
    secondaryImageHeight: 864,
    secondaryImageAlt: "Ficha de anamnese no prontuário clínico do Smilo CRM",
  },
  {
    ...agendaModule,
    image: "/images/screens/agenda-de-paciente-sistema-odontologico.png",
    imageWidth: 1870,
    imageHeight: 846,
    imageAlt: "Visão semanal da agenda da clínica no Smilo CRM",
  },
];
const whatsappReminder = modules.find((module) => module.slug === "lembretes-whatsapp");

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <BenefitsMarquee />
      <StatsRow />
      <SocialProofSection />

      <section className="border-b border-ink-100 bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <div>
            <ModuleShowcase module={whatsappReminder} index={1} />
          </div>
          <div className="mt-8 flex justify-center">
            <ShinyButton
              href="#planos"
              data-track-free-trial-click="true"
              data-button-location="whatsapp_showcase"
            >
              Faça um teste grátis
            </ShinyButton>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Tudo que sua clínica precisa, em um só sistema"
            description="Do agendamento ao recebimento, o Smilo substitui planilhas, cadernos e sistemas soltos por um fluxo único — pensado para a rotina de uma clínica odontológica."
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.filter((module) => module.slug !== "parametros").map((module) => (
              <FeatureCard
                key={module.slug}
                icon={module.icon}
                name={module.name}
                short={module.short}
                slug={module.slug}
                image={module.cardImage || module.image}
                imageAlt={module.imageAlt}
                visual={module.cardVisual}
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

      <GoogleReviewsSection />

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
