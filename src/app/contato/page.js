import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { siteConfig, whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

const title = "Contato | Smilo CRM para Clínicas Odontológicas";
const description =
  "Fale com o Smilo CRM por WhatsApp ou e-mail. Tire dúvidas sobre planos e recursos para organizar sua clínica odontológica.";

export const metadata = createPageMetadata({ title, description, path: "/contato" });

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Contato", path: "/contato" },
]);

const contactCards = [
  {
    icon: "WhatsApp",
    title: "WhatsApp",
    value: siteConfig.phone,
    href: whatsappLink(defaultWhatsappMessage),
    external: true,
    cta: "Iniciar conversa",
  },
  {
    icon: "Mail",
    title: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: "Enviar e-mail",
  },
  {
    icon: "Clock",
    title: "Horário de atendimento",
    value: siteConfig.supportHours,
  },
];

export default function ContatoPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Contato"
        title="Vamos organizar a gestão da sua clínica"
        description="Tire dúvidas sobre planos, funcionalidades ou migração de dados. Nosso time responde por e-mail e WhatsApp em horário comercial."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="space-y-5">
              {contactCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-ink-100 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-white">
                      <Icon name={card.icon} className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <h2 className="text-sm font-semibold text-ink-950">{card.title}</h2>
                      <p className="mt-1 text-sm text-ink-600">{card.value}</p>
                      {card.href ? (
                        <a
                          href={card.href}
                          target={card.external ? "_blank" : undefined}
                          rel={card.external ? "noopener noreferrer" : undefined}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink-950 hover:underline"
                        >
                          {card.cta}
                          <Icon
                            name={card.title === "WhatsApp" ? "WhatsApp" : "ArrowRight"}
                            className="h-3.5 w-3.5"
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl bg-ink-950 p-6 text-white">
                <h2 className="text-sm font-semibold">Prefere ir direto ao ponto?</h2>
                <p className="mt-1 text-sm text-white/60">
                  Fale agora mesmo com um especialista pelo WhatsApp.
                </p>
                <Button
                  href={whatsappLink(defaultWhatsappMessage)}
                  external
                  variant="inverse"
                  className="mt-4 w-full"
                  icon="WhatsApp"
                >
                  Abrir WhatsApp
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10">
              <h2 className="text-xl font-semibold text-ink-950">Envie uma mensagem</h2>
              <p className="mt-2 text-sm text-ink-600">
                Preencha o formulário abaixo e retornaremos o quanto antes.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
