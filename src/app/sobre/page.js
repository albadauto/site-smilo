import Image from "next/image";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/site";

const title = "Sobre o Smilo — sistema de gestão para clínicas odontológicas";
const description =
  "Conheça o Smilo, sistema de gestão desenvolvido pela Mindit Soluções Digitais para simplificar a rotina de clínicas odontológicas: agenda, prontuário, pacientes e financeiro em um só lugar.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/sobre" },
  openGraph: { url: "/sobre", title, description },
};

const values = [
  {
    icon: "HeartHandshake",
    title: "Feito para a rotina odontológica",
    description:
      "Cada módulo do Smilo nasceu de um problema real da recepção e do consultório: agenda cheia, prontuário espalhado, cobrança sem controle. O sistema segue o fluxo natural do atendimento, do agendamento ao recebimento.",
  },
  {
    icon: "ShieldCheck",
    title: "Segurança como padrão",
    description:
      "Acesso individual por e-mail e senha, permissões configuráveis por perfil e o princípio do menor privilégio orientam como o sistema é construído, protegendo dados clínicos e financeiros dos seus pacientes.",
  },
  {
    icon: "Sparkles",
    title: "Simplicidade acima de tudo",
    description:
      "Um sistema de gestão só ajuda se a equipe consegue usar sem treinamento longo. As telas do Smilo são pensadas para quem trabalha na recepção e no consultório, não só para quem entende de tecnologia.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre o Smilo"
        title="Um CRM pensado de dentro da rotina de uma clínica odontológica"
        description="O Smilo existe para resolver um problema comum: a gestão de clínicas odontológicas espalhada entre planilhas, agendas de papel e sistemas que não conversam entre si."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Nossa missão"
                title="Organizar a gestão para que a clínica foque no atendimento"
                description="Reunimos cadastro de pacientes, prontuário clínico, agenda, cobranças e controle de equipe em um único sistema — para que dentistas e recepcionistas gastem menos tempo remontando informações e mais tempo cuidando de quem importa: o paciente."
              />
            </div>
            <div className="relative">
              <div className="browser-frame">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-900 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <Image
                  src="/images/screens/prontuario-visao.png"
                  alt="Visão geral do prontuário clínico no Smilo CRM"
                  width={1440}
                  height={900}
                  className="w-full"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-100 bg-ink-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="O que nos guia"
            title="Princípios por trás de cada tela do Smilo"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-ink-100 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                  <Icon name={value.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-950">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-950 text-white">
            <Icon name="Building2" className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
            Um produto {siteConfig.legalName}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            O Smilo é desenvolvido e mantido pela {siteConfig.legalName}, especializada em
            software de gestão sob medida. Isso significa evolução contínua do sistema a partir
            do uso real das clínicas — e um canal direto de suporte para dúvidas, sugestões e
            novas funcionalidades.
          </p>
        </Container>
      </section>

      <CtaSection
        title="Quer conhecer o Smilo de perto?"
        description="Fale com nosso time e entenda como o sistema pode se adaptar à sua clínica."
      />
    </>
  );
}
