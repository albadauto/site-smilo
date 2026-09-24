import Icon from "./Icon";
import { comparisonSections, pricingPlans } from "@/lib/content";

function Cell({ value }) {
  if (value === true) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-ink-950 text-white">
        <Icon name="Check" className="h-3.5 w-3.5" strokeWidth={2.5} />
        <span className="sr-only">Incluído</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="mx-auto block text-ink-300">
        <span aria-hidden="true">—</span>
        <span className="sr-only">Não incluído</span>
      </span>
    );
  }
  return <span className="text-sm font-medium text-ink-800">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-100">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-ink-100 bg-ink-50/70">
            <th scope="col" className="px-6 py-4 font-semibold text-ink-950">
              Recurso
            </th>
            {pricingPlans.map((plan) => (
              <th key={plan.id} scope="col" className="px-6 py-4 text-center font-semibold text-ink-950">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        {comparisonSections.map((section) => (
          <tbody key={section.area}>
            <tr className="border-y border-ink-100 bg-ink-100/70">
              <th
                scope="rowgroup"
                colSpan={pricingPlans.length + 1}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700"
              >
                {section.area}
              </th>
            </tr>
            {section.features.map((row, index) => (
              <tr
                key={row.label}
                className={index % 2 === 0 ? "bg-white" : "bg-ink-50/40"}
              >
                <th scope="row" className="px-6 py-3.5 text-left font-normal text-ink-700">
                  {row.label}
                </th>
                {pricingPlans.map((plan) => (
                  <td key={plan.id} className="px-6 py-3.5 text-center">
                    <Cell value={row[plan.id]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
      <p className="border-t border-ink-100 bg-white px-6 py-4 text-xs leading-relaxed text-ink-500">
        Recursos sujeitos ao nível de permissão do usuário. Informações atualizadas em 22/09/2026.
      </p>
    </div>
  );
}
