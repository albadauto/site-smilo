import Container from "./Container";
import Icon from "./Icon";

const stats = [
  { icon: "Layers", value: "9", label: "Módulos integrados em um só sistema" },
  { icon: "Sparkles", value: "100%", label: "Funciona pelo navegador, sem instalação" },
  { icon: "UserCog", value: "3", label: "Níveis de permissão por perfil de usuário" },
  { icon: "Clock", value: "9h–18h", label: "Suporte por e-mail e WhatsApp, seg. a sex." },
];

export default function StatsRow() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60">
      <Container className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-2 text-ink-950">
              <Icon name={stat.icon} className="h-4 w-4 text-ink-400" />
              <span className="text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</span>
            </div>
            <p className="text-xs leading-relaxed text-ink-500 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
