import Container from "./Container";
import Icon from "./Icon";
import Button from "./Button";

const benefits = [
  ["Consulte", "Pergunte sobre agenda, pacientes, retornos e financeiro usando os dados reais da clínica."],
  ["Execute", "Cadastre pacientes, prepare agendamentos e registre atendimentos por conversa."],
  ["Mantenha o controle", "Ações que alteram o sistema só são gravadas após a confirmação da sua equipe."],
  ["Proteja os dados", "Cada usuário consulta somente as informações permitidas pelo seu nível de acesso."],
];

export default function AiAgentSection({ compact = false }) {
  return (
    <section id="smilo-ai" className="scroll-mt-24 border-y border-emerald-100 bg-emerald-50/45 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-emerald-800">
            <Icon name="Sparkles" className="h-3.5 w-3.5" /> Principal diferencial Smilo
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Um sistema odontológico completo, agora com um agente de IA dentro dele
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
            O Smilo continua sendo o sistema que centraliza agenda, prontuário, pacientes, cobranças e gestão.
            O <strong className="font-semibold text-ink-900">Smilo AI</strong> é o agente interno que usa essas
            informações para responder perguntas e executar rotinas com você.
          </p>
          {!compact ? (
            <div className="mt-8">
              <Button href="/sistema-odontologico-com-ia" variant="outline" icon="ArrowRight">
                Conhecer o Smilo AI
              </Button>
            </div>
          ) : null}
        </div>

        <div className="overflow-hidden rounded-3xl border border-ink-800 bg-ink-950 p-5 text-white shadow-2xl shadow-emerald-950/15 sm:p-7">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500">
              <Icon name="Sparkles" className="h-5 w-5" />
            </span>
            <div><strong className="block">Smilo AI</strong><span className="text-xs text-white/50">Agente conectado ao sistema da clínica</span></div>
          </div>
          <div className="space-y-4 py-6 text-sm leading-relaxed">
            <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-emerald-600 px-4 py-3 font-medium">
              Cadastre José como paciente e agende amanhã às 15h.
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-white/80">
              Encontrei os dados necessários. Preparei o cadastro do paciente e o agendamento em uma única ação para você revisar.
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <strong className="block text-emerald-300">Cadastrar paciente e agendar</strong>
              <span className="mt-1 block text-xs text-white/55">Nada será gravado antes da sua confirmação.</span>
              <span className="mt-4 inline-flex rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-emerald-950">Confirmar ação</span>
            </div>
          </div>
          <div className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
            {benefits.map(([title, text]) => (
              <div key={title} className="rounded-xl bg-white/[.055] p-3">
                <strong className="text-sm text-white">{title}</strong>
                <p className="mt-1 text-xs leading-relaxed text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
