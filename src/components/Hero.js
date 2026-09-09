import Image from "next/image";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Icon from "./Icon";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";

const floatingBadges = [
  { icon: "CalendarDays", label: "Agenda sempre organizada" },
  { icon: "CreditCard", label: "Cobranças automáticas" },
  { icon: "WhatsApp", label: "Lembretes de agenda via WhatsApp" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-8 pb-20 pt-16 text-center sm:pb-28 sm:pt-24">
        <Eyebrow tone="dark">
          <Icon name="Sparkles" className="h-3.5 w-3.5" />
          Feito para clínicas odontológicas brasileiras
        </Eyebrow>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          O sistema de gestão que sua clínica odontológica merece
        </h1>

        <p className="max-w-2xl text-balance text-base leading-relaxed text-white/65 sm:text-lg">
          Agenda, prontuário clínico, pacientes, cobranças e financeiro em um único CRM.
          O Smilo organiza a rotina da sua clínica do agendamento até o recebimento —
          tudo pelo navegador, sem planilhas soltas.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button
            href={whatsappLink(defaultWhatsappMessage)}
            external
            variant="inverse"
            icon="WhatsApp"
          >
            Falar com um especialista
          </Button>
          <Button data-button-location="hero" href="/precos" variant="outlineInverse">
            Ver planos e preços
          </Button>
        </div>

        <div className="relative mt-8 w-full max-w-4xl">
          <div className="browser-frame border border-white/12 ">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-900 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/40">
                app.smilocrm.com.br
              </span>
            </div>
            <Image
              src="/images/screens/crm-odontologia.png"
              alt="Dashboard do Smilo CRM mostrando indicadores de pacientes, prontuários e pagamentos"
              width={1440}
              height={900}
              priority
              className="w-full max-w-xl p-2 mx-auto"
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          </div>

          <div className="pointer-events-none absolute -left-4 top-10 hidden rotate-[-4deg] rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 text-left shadow-2xl backdrop-blur sm:-left-10 sm:block">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ink-950">
                <Icon name={floatingBadges[0].icon} className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-white/85">{floatingBadges[0].label}</span>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-4 bottom-10 hidden rotate-[3deg] rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 text-left shadow-2xl backdrop-blur sm:-right-10 sm:block">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ink-950">
                <Icon name={floatingBadges[1].icon} className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-white/85">{floatingBadges[1].label}</span>
            </div>
          </div>
          <div className="pointer-events-none relative mx-auto mt-4 w-fit max-w-full rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 text-left shadow-2xl backdrop-blur sm:absolute sm:-bottom-6 sm:left-8 sm:mt-0 sm:rotate-[-2deg]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-ink-950">
                <Icon name={floatingBadges[2].icon} className="h-4 w-4" />
              </span>
              <div>
                <span className="block text-xs font-medium text-white/85">{floatingBadges[2].label}</span>
                <span className="mt-1 block text-[10px] font-medium text-white/60">Exclusivo do Clínica/Pro</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
