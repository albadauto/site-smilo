import Container from "./Container";
import Button from "./Button";
import Icon from "./Icon";
import { whatsappLink, siteConfig } from "@/lib/site";

export default function CtaSection({
  title = "Pronto para organizar sua clínica com o Smilo?",
  description = "Fale agora com nosso time e veja como o Smilo se encaixa na rotina da sua clínica odontológica.",
  whatsappMessage = "Olá! Quero conhecer o Smilo CRM para minha clínica.",
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-balance text-base leading-relaxed text-white/65">
          {description}
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href={whatsappLink(whatsappMessage)} external variant="inverse" icon="MessageCircle">
            Falar no WhatsApp
          </Button>
          <Button href={`mailto:${siteConfig.email}`} variant="outlineInverse" icon="Mail">
            Enviar e-mail
          </Button>
        </div>
        <p className="text-xs text-white/40">
          <Icon name="Clock" className="mr-1.5 inline h-3.5 w-3.5 -translate-y-px" />
          {siteConfig.supportHours}
        </p>
      </Container>
    </section>
  );
}
