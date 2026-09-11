import Icon from "./Icon";

const benefits = [
  { icon: "ClipboardList", label: "Fichas de anamnese" },
  { icon: "WhatsApp", label: "Lembretes de agenda via WhatsApp", pro: true },
  { icon: "Users", label: "Cadastro de pacientes" },
  { icon: "ClipboardList", label: "Prontuário clínico completo" },
  { icon: "CreditCard", label: "Cobranças e controle financeiro" },
  { icon: "CalendarDays", label: "Agenda de atendimentos", pro: false },
  { icon: "Layers", label: "Serviços e procedimentos" },
  { icon: "UserCog", label: "Permissões por perfil", pro: true },
];

export default function BenefitsMarquee() {
  return (
    <section aria-label="Benefícios dos planos" className="benefits-marquee border-t border-white/15 bg-ink-900 text-white">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3 sm:px-8">
        <p className="text-xs font-medium text-white/60">
          Nos planos Solo e Pro <span className="mx-1 text-white/30">/</span> Selo Pro: exclusivo do Clínica/Pro
        </p>
      </div>
      <div className="benefits-marquee-viewport">
        <div className="benefits-marquee-track">
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} aria-hidden={duplicate ? true : undefined} className="benefits-marquee-list">
              {benefits.map(({ icon, label, pro }) => (
                <li key={label} className="flex shrink-0 items-center gap-3 whitespace-nowrap px-6 py-6 sm:px-8">
                  <Icon name={icon} className="h-5 w-5 shrink-0 text-white/65" />
                  <span className="text-sm font-medium tracking-tight sm:text-base">{label}</span>
                  {pro && <span className="rounded-full border border-white/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/75">Pro</span>}
                  <span aria-hidden="true" className="ml-6 h-1 w-1 rounded-full bg-white/25 sm:ml-8" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
