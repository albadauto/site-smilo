import AiAgentSection from "@/components/AiAgentSection";
import Button from "@/components/Button";
import Container from "@/components/Container";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const path = "/sistema-odontologico-com-ia";
const title = "Sistema Odontológico com IA | Smilo AI";
const description =
  "Conheça o Smilo, sistema odontológico com IA para consultar agenda, pacientes e financeiro, além de cadastrar e agendar com confirmação segura.";

export const metadata = createPageMetadata({ title, description, path });

const faq = [
  {
    question: "O que é um sistema odontológico com IA?",
    answer:
      "É um sistema de gestão para clínicas e consultórios que combina módulos como agenda, pacientes, prontuário e financeiro com um agente de inteligência artificial capaz de consultar esses dados e ajudar a executar tarefas em linguagem natural.",
  },
  {
    question: "O Smilo é somente um chat de inteligência artificial?",
    answer:
      "Não. O Smilo é um sistema odontológico completo. O Smilo AI funciona dentro dele e usa os módulos do sistema para responder perguntas, localizar informações e preparar ações com segurança.",
  },
  {
    question: "Quais tarefas o Smilo AI consegue executar?",
    answer:
      "O agente pode consultar agenda, pacientes, retornos, orçamentos e informações financeiras conforme a permissão do usuário. Também pode preparar cadastros de pacientes, agendamentos, retornos e registros de atendimento para confirmação.",
  },
  {
    question: "A IA pode alterar os dados da clínica sozinha?",
    answer:
      "Não. Ações que gravam ou alteram informações são apresentadas para revisão. A equipe precisa confirmar antes que o sistema execute a operação.",
  },
  {
    question: "Todos os funcionários veem as mesmas informações?",
    answer:
      "Não. O Smilo AI respeita o nível de acesso de cada usuário. Dados financeiros e clínicos continuam protegidos pelas permissões configuradas no sistema.",
  },
  {
    question: "O Smilo AI está conectado aos dados reais da clínica?",
    answer:
      "Sim. As respostas operacionais são produzidas a partir dos dados autorizados da empresa autenticada, mantendo o isolamento entre clínicas cadastradas no Smilo.",
  },
];

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Sistema odontológico com IA", path },
]);

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Smilo AI",
  alternateName: "Smilo — Sistema Odontológico com IA",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Dental Practice Management Software with AI",
  operatingSystem: "Web",
  url: `${siteConfig.url}${path}`,
  description,
  featureList: [
    "Agenda odontológica integrada",
    "Prontuário eletrônico odontológico",
    "Consultas em linguagem natural com Smilo AI",
    "Cadastro de pacientes e agendamentos com confirmação",
    "Controle financeiro e cobranças",
    "Permissões por perfil de usuário",
  ],
  publisher: { "@id": `${siteConfig.url}/#organization` },
  offers: { "@type": "AggregateOffer", lowPrice: "119.90", highPrice: "219.90", priceCurrency: "BRL" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const capabilities = [
  ["Perguntas sobre a operação", "Consulte compromissos, retornos, pacientes, cobranças e indicadores sem procurar informação tela por tela."],
  ["Cadastro e agendamento", "Informe os dados do novo paciente e o horário desejado. O agente prepara o cadastro e o agendamento em uma única confirmação."],
  ["Registro de atendimentos", "Dentistas autorizados podem preparar registros no prontuário, cobranças e retornos a partir da conversa."],
  ["Acesso por função", "Secretaria, dentista e administrador recebem capacidades diferentes, seguindo as permissões reais do sistema."],
];

export default function SistemaOdontologicoComIaPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Smilo AI"
        title="Sistema odontológico com IA para consultar dados e executar tarefas"
        description="O Smilo centraliza agenda, pacientes, prontuário, cobranças e financeiro. Dentro desse sistema completo, o Smilo AI atua como um agente interno que entende pedidos em linguagem natural e transforma conversas em ações controladas."
      />

      <AiAgentSection compact />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="IA aplicada à rotina"
            title="O que um agente de IA muda na gestão odontológica"
            description="A inteligência artificial se torna útil quando trabalha conectada à operação. No Smilo, ela não substitui o sistema: ela facilita o acesso aos módulos e reduz etapas manuais."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {capabilities.map(([heading, text]) => (
              <article key={heading} className="rounded-2xl border border-ink-100 bg-white p-7">
                <h2 className="text-xl font-semibold text-ink-950">{heading}</h2>
                <p className="mt-3 leading-relaxed text-ink-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/60 py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Sistema + agente" title="Por que o Smilo AI é diferente de um chat genérico" />
          <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-700">
            <p>Um chat genérico não conhece a agenda nem os pacientes da clínica. O Smilo AI opera dentro do sistema odontológico Smilo e recebe somente as ferramentas e informações permitidas para o usuário autenticado.</p>
            <p>Isso permite perguntar, por exemplo, como está a agenda de amanhã, quais retornos estão pendentes ou quais cobranças estão vencidas. Quando o pedido envolve uma alteração, o agente prepara a operação e mostra exatamente o que será feito antes da confirmação.</p>
            <p>O resultado é uma experiência mais direta para recepcionistas, dentistas e administradores, sem abandonar as telas tradicionais do sistema. A equipe pode continuar usando agenda, prontuário e financeiro normalmente e recorrer ao agente quando conversar for o caminho mais rápido.</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/funcionalidades" variant="outline" icon="ArrowRight">Ver todos os módulos</Button>
            <Button href="/precos" variant="primary" icon="ArrowRight">Conhecer os planos</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas sobre sistema odontológico com IA" />
          <div className="mt-12"><FaqAccordion items={faq} /></div>
        </Container>
      </section>
    </>
  );
}
