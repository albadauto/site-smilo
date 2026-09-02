import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import ModuleShowcase from "@/components/ModuleShowcase";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { modules } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const title = "Funcionalidades do Smilo CRM para clínicas odontológicas";
const description =
  "Conheça todos os módulos do Smilo: dashboard, pacientes, prontuário clínico, agenda, cobranças, profissionais, serviços, usuários e permissões, e parâmetros da clínica.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/funcionalidades" },
  openGraph: { url: "/funcionalidades", title, description },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Funcionalidades", item: `${siteConfig.url}/funcionalidades` },
  ],
};

export default function FuncionalidadesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Funcionalidades"
        title="Um módulo para cada etapa do atendimento"
        description="Da chegada do paciente ao recebimento do pagamento, o Smilo acompanha o fluxo completo da sua clínica odontológica — com telas simples e pensadas para o dia a dia da recepção e do consultório."
      />

      <section className="py-4">
        <Container>
          <nav aria-label="Módulos do sistema" className="flex flex-wrap justify-center gap-2 py-12">
            {modules.map((module) => (
              <a
                key={module.slug}
                href={`#${module.slug}`}
                className="rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-950"
              >
                {module.name}
              </a>
            ))}
          </nav>

          <div className="divide-y divide-ink-100">
            {modules.map((module, index) => (
              <ModuleShowcase key={module.slug} module={module} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Quer ver o Smilo funcionando na prática?"
        description="Agende uma conversa rápida e mostramos como cada módulo se encaixa na rotina da sua clínica."
        whatsappMessage="Olá! Vi as funcionalidades do Smilo e quero ver o sistema na prática."
      />
    </>
  );
}
