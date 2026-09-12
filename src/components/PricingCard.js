import Icon from "./Icon";
import Button from "./Button";
import { ShinyButton } from "./ui/shiny-button";

export default function PricingCard({ plan, headingLevel = 2, buttonLocation = "pricing_page" }) {
  const isSolo = plan.id === "solo";
  const PlanButton = isSolo ? ShinyButton : Button;
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 ${
        plan.highlighted
          ? "bg-ink-950 text-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]"
          : "border-2 border-green-500 bg-white text-ink-950 shadow-[0_16px_40px_-24px_rgba(34,197,94,0.4)]"
      }`}
    >
      {plan.badge ? (
        <span className={`absolute -top-3.5 left-8 z-10 rounded-full px-3.5 py-1 text-xs font-semibold shadow-sm ${isSolo ? "bg-green-600 text-white ring-4 ring-white" : "bg-white text-ink-950"}`}>
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

      <PlanButton
        href={plan.ctaHref}
        data-track-plan-click="true"
        data-track-free-trial-click={isSolo ? "true" : undefined}
        data-track-pro-plan-click={!isSolo ? "true" : undefined}
        data-plan-name={plan.id}
        data-button-name={plan.ctaLabel}
        data-button-location={buttonLocation}
        external
        {...(!isSolo ? { variant: "inverse" } : {})}
        className="mt-7 w-full"
        icon="ArrowRight"
      >
        {plan.ctaLabel}
      </PlanButton>

      <ul className="mt-8 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.highlighted ? "bg-white text-ink-950" : "bg-green-100 text-green-700"
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
