import Container from "./Container";
import Button from "./Button";
import Icon from "./Icon";
import { ShinyButton } from "./ui/shiny-button";
import { whatsappLink, siteConfig } from "@/lib/site";

export default function CtaSection({
  title = "Pronto para organizar sua clínica com o Smilo?",
  description = "Fale agora com nosso time e veja como o Smilo se encaixa na rotina da sua clínica odontológica.",
  whatsappMessage = "Olá! Quero conhecer o Smilo CRM para minha clínica.",
  primaryAction,
  secondaryAction,
}) {
  const primary = primaryAction || {
    href: whatsappLink(whatsappMessage),
    label: "Falar no WhatsApp",
    icon: "WhatsApp",
    external: true,
  };
  const secondary = secondaryAction || {
    href: `mailto:${siteConfig.email}`,
    label: "Enviar e-mail",
    icon: "Mail",
  };
  const PrimaryButton = primary.shiny ? ShinyButton : Button;

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
          <PrimaryButton
            href={primary.href}
            data-button-location="cta_section"
            data-track-free-trial-click={primary.trackFreeTrial ? "true" : undefined}
            data-track-plan-click={primary.trackPlan ? "true" : undefined}
            data-track-pro-plan-click={primary.trackProPlan ? "true" : undefined}
            data-plan-name={primary.planName}
            external={primary.external}
            {...(!primary.shiny ? { variant: "inverse" } : {})}
            icon={primary.icon}
          >
            {primary.label}
          </PrimaryButton>
          <Button
            href={secondary.href}
            external={secondary.external}
            variant="outlineInverse"
            icon={secondary.icon}
          >
            {secondary.label}
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
