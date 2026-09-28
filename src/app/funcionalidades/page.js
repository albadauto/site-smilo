import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import ModuleShowcase from "@/components/ModuleShowcase";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { modules } from "@/lib/content";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import AiAgentSection from "@/components/AiAgentSection";

const title = "Funcionalidades | Smilo CRM Odontológico";
const description =
  "Conheça o sistema Smilo com Smilo AI, agenda, pacientes, odontograma, prontuário, orçamentos, retornos, financeiro e NFS-e.";

export const metadata = createPageMetadata({ title, description, path: "/funcionalidades" });

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Funcionalidades", path: "/funcionalidades" },
]);

export default function FuncionalidadesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Funcionalidades"
        title="Um sistema completo, com IA conectada a cada etapa"
        description="Da chegada do paciente ao recebimento, o Smilo centraliza a operação da clínica. O Smilo AI transforma os dados desses módulos em respostas e ações, sem substituir a segurança e o controle do sistema."
      />

      <AiAgentSection compact />

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
