import Image from "next/image";
import Icon from "./Icon";
import InteractivePhone from "./InteractivePhone";

function BrowserChrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-900 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
    </div>
  );
}

export default function ModuleShowcase({ module, index }) {
  const reversed = index % 2 === 1;

  return (
    <div
      id={module.slug}
      className="grid scroll-mt-24 grid-cols-1 items-center gap-10 py-16 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reversed ? "lg:order-2" : "lg:order-1"}>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-white">
          <Icon name={module.icon} className="h-5 w-5" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
          {module.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-600">{module.description}</p>
        <ul className="mt-6 space-y-3">
          {module.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-ink-800 sm:text-base">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-950 text-white">
                <Icon name="Check" className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={reversed ? "lg:order-1" : "lg:order-2"}>
        {module.slug === "lembretes-whatsapp" ? <InteractivePhone /> : <div className="browser-frame">
          {!module.illustration && <BrowserChrome />}
          <div className="bg-ink-50">
            <Image
              src={module.image}
              alt={module.imageAlt}
              width={module.imageWidth}
              height={module.imageHeight}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>}
        {module.secondaryImage ? (
          <div className="browser-frame mt-5">
            <BrowserChrome />
            <div className="bg-ink-50">
              <Image
                src={module.secondaryImage}
                alt={module.secondaryImageAlt}
                width={module.secondaryImageWidth}
                height={module.secondaryImageHeight}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
