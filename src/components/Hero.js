import Image from "next/image";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Icon from "./Icon";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:min-h-[650px] lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div className="flex min-w-0 flex-col items-start gap-7 text-left">
        <Eyebrow tone="dark">
          <Icon name="Sparkles" className="h-3.5 w-3.5" />
          Feito para clínicas odontológicas brasileiras
        </Eyebrow>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
          O software de gestão odontológica que sua clínica merece
        </h1>

        <p className="max-w-2xl text-balance text-base leading-relaxed text-white/65 sm:text-lg">
          Agenda, prontuário clínico, pacientes, cobranças e financeiro em um único CRM.
          O Smilo organiza a rotina da sua clínica do agendamento até o recebimento —
          tudo pelo navegador, sem planilhas soltas.
        </p>

        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            href={whatsappLink(defaultWhatsappMessage)}
            data-button-location="hero_whatsapp"
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

        </div>

        <div className="relative h-[330px] w-full min-w-0 sm:h-[430px] lg:h-[500px]">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/15 blur-[90px] sm:h-96 sm:w-96"
            aria-hidden="true"
          />

          <div className="absolute left-1/2 top-1/2 w-[116%] -translate-x-1/2 -translate-y-1/2 sm:w-[108%] lg:left-0 lg:w-[62vw] lg:max-w-[900px] lg:translate-x-0">
            <div className="relative rounded-[1.5rem] border-[7px] border-[#26323d] bg-[#111820] p-1.5 shadow-[0_35px_80px_-24px_rgba(0,0,0,0.75)] sm:rounded-[2rem] sm:border-[10px] sm:p-2">
              <span
                className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#68737d] ring-1 ring-black/70"
                aria-hidden="true"
              />
              <div className="overflow-hidden rounded-[0.85rem] bg-[#f5f6fa] sm:rounded-[1.15rem]">
                <Image
                  src="/images/screens/sistema-para-clinica-odontologica-agenda.webp"
                  alt="Agenda semanal do Smilo CRM com consultas e diferentes status de atendimento"
                  width={1492}
                  height={892}
                  loading="eager"
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 62vw, 100vw"
                />
              </div>
            </div>
            <div className="relative mx-auto h-3 w-[92%] rounded-b-[1rem] bg-gradient-to-b from-[#d9dde1] via-[#8d969e] to-[#4c555d] shadow-xl sm:h-4">
              <span className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-lg bg-[#626b73] sm:w-28" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
