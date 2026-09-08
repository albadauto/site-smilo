import Icon from "./Icon";
import Button from "./Button";
import { whatsappLink } from "@/lib/site";

export default function PricingCard({ plan, headingLevel = 2, buttonLocation = "pricing_page" }) {
  const message = `Olá! Quero assinar o plano ${plan.name} do Smilo (R$${plan.price}${plan.priceSuffix}).`;
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 ${
        plan.highlighted
          ? "bg-ink-950 text-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]"
          : "border border-ink-200 bg-white text-ink-950"
      }`}
    >
      {plan.badge ? (
        <span className="absolute -top-3.5 left-8 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-ink-950 shadow-sm">
          {plan.badge}
        </span>
      ) : null}

      <Heading className="text-lg font-semibold">{plan.name}</Heading>
      <p className={`mt-1.5 text-sm leading-relaxed ${plan.highlighted ? "text-white/60" : "text-ink-600"}`}>
        {plan.description}
      </p>

      <div className="mt-6 flex items-end gap-1.5">
        <span className="text-sm font-medium translate-y-[-2px]">R$</span>
        <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
        <span className={`pb-1 text-sm ${plan.highlighted ? "text-white/60" : "text-ink-500"}`}>
          {plan.priceSuffix}
        </span>
      </div>
      <p className={`mt-1 text-xs ${plan.highlighted ? "text-white/50" : "text-ink-400"}`}>
        por clínica, cobrado mensalmente
      </p>

      <Button
        href={plan.ctaHref}
        data-track-plan-click="true"
        data-button-name={plan.ctaLabel}
        data-button-location={buttonLocation}
        external
        variant={plan.highlighted ? "inverse" : "primary"}
        className="mt-7 w-full"
        icon="ArrowRight"
      >
        {plan.ctaLabel}
      </Button>

      <ul className="mt-8 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.highlighted ? "bg-white text-ink-950" : "bg-ink-950 text-white"
              }`}
            >
              <Icon name="Check" className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span className={plan.highlighted ? "text-white/85" : "text-ink-700"}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
