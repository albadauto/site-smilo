import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

const featurePages = {
  agenda: "/agenda-odontologica",
  prontuario: "/prontuario-eletronico-odontologico",
  cobrancas: "/financeiro-clinica-odontologica",
  "lembretes-whatsapp": "/lembrete-consulta-whatsapp",
};

function WhatsAppCardVisual({ image, imageAlt }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#F7FBFF]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover object-left-top opacity-75"
        sizes="(min-width: 1024px) 390px, (min-width: 640px) 50vw, 100vw"
      />
      <div className="absolute bottom-3 right-4 top-3 w-[31%] min-w-24 rounded-[1.25rem] border-[5px] border-ink-950 bg-[#f4f2ee] p-1.5 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.55)]">
        <div className="mx-auto h-1.5 w-9 rounded-full bg-ink-950" />
        <div className="mt-2 flex items-center gap-1 border-b border-ink-100 bg-white p-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink-100">
            <Image src="/images/brand/icon-48.png" alt="" width={14} height={14} />
          </span>
          <span className="text-[7px] font-semibold text-ink-950">Smilo</span>
        </div>
        <div className="mt-2 rounded-lg rounded-tl-sm bg-white p-2 text-[6px] leading-relaxed text-ink-700 shadow-sm">
          <p className="font-bold text-ink-950">Lembrete de consulta</p>
          <p className="mt-1">Olá! Sua consulta está marcada para amanhã às 14h30.</p>
        </div>
        <div className="ml-3 mt-2 rounded-lg rounded-tr-sm bg-green-100 p-1.5 text-[6px] font-medium text-green-950">
          Confirmo minha presença!
        </div>
      </div>
    </div>
  );
}

export default function FeatureCard({
  icon,
  name,
  short,
  slug,
  href,
  compact = false,
  image,
  imageAlt,
  visual,
  eyebrow = "Recurso do Smilo",
}) {
  const destination = href || featurePages[slug] || (slug ? `/funcionalidades#${slug}` : null);
  const Wrapper = destination ? Link : "div";
  const wrapperProps = destination ? { href: destination } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink-100 transition-all duration-200 hover:-translate-y-1 hover:border-ink-300 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)] ${
        image ? "bg-[#F7FBFF]" : `bg-white ${compact ? "p-6" : "p-6 sm:p-7"}`
      }`}
    >
      {image ? (
        <div className="m-3 aspect-[16/9] overflow-hidden rounded-[1.35rem] bg-[#F7FBFF]">
          {visual === "whatsapp" ? (
            <WhatsAppCardVisual image={image} imageAlt={imageAlt} />
          ) : (
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={imageAlt || `Tela do módulo ${name} no Smilo CRM`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                sizes="(min-width: 1024px) 390px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-white transition-colors group-hover:bg-ink-800">
          <Icon name={icon} className="h-5 w-5" />
        </div>
      )}

      <div className={image ? "flex flex-1 flex-col px-6 pb-6 pt-4" : "flex flex-1 flex-col gap-1.5"}>
        {image ? (
          <span className="mb-4 w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700">
            {visual === "whatsapp" ? "Exclusivo Clínica/Pro" : eyebrow}
          </span>
        ) : null}
        <h3 className={image ? "text-xl font-semibold tracking-tight text-ink-950" : "text-base font-semibold text-ink-950"}>
          {name}
        </h3>
        <p className={`mt-2 flex-1 leading-relaxed text-ink-600 ${image ? "text-sm" : "text-sm"}`}>{short}</p>
        {destination ? (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900">
            Saiba mais
            <Icon
              name="ArrowRight"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        ) : null}
      </div>
    </Wrapper>
  );
}
