import { modules } from "./content";
import { siteConfig } from "./site";

const dashboardModule = modules.find((module) => module.slug === "dashboard");
const agendaModule = modules.find((module) => module.slug === "agenda");
const prontuarioModule = modules.find((module) => module.slug === "prontuario");
const cobrancasModule = modules.find((module) => module.slug === "cobrancas");
const whatsappReminderModule = modules.find((module) => module.slug === "lembretes-whatsapp");

export const agendaOdontologicaPage = {
  path: "/agenda-odontologica",
  metadata: {
    title: "Agenda Odontológica Online para Clínicas | Smilo CRM",
    description:
      "Organize consultas e compromissos com a agenda odontológica online do Smilo CRM. Visualize a semana, cadastre pacientes e reduza tarefas manuais.",
  },
  hero: {
    eyebrow: "Agenda odontológica",
    title: "Agenda odontológica online para organizar cada atendimento",
    description:
      "Centralize os compromissos da clínica, visualize a semana com clareza e mantenha os dados de cada paciente conectados ao atendimento.",
  },
  showcase: {
    ...agendaModule,
    slug: "agenda-odontologica-online",
    name: "Uma agenda simples para a rotina da clínica odontológica",
    description:
      "A agenda do Smilo reúne os compromissos da clínica em uma visão semanal. A equipe pode cadastrar horários para pacientes existentes ou novos contatos, consultar telefone, data e hora e ajustar a programação quando necessário.",
  },
  benefits: {
    eyebrow: "Mais organização",
    title: "Menos tempo conferindo horários, mais foco no atendimento",
    description:
      "A agenda faz parte do mesmo fluxo usado para gerenciar pacientes, prontuários e a rotina administrativa da clínica.",
    items: [
      {
        icon: "CalendarDays",
        name: "Visão semanal clara",
        short: "Consulte os compromissos da semana em uma única tela e encontre rapidamente cada horário.",
      },
      {
        icon: "Users",
        name: "Pacientes conectados",
        short: "Vincule o compromisso ao cadastro do paciente e mantenha as informações importantes acessíveis.",
      },
      {
        icon: "ClipboardList",
        name: "Fluxo clínico integrado",
        short: "A agenda trabalha junto com o cadastro de pacientes e o prontuário clínico do Smilo.",
      },
      {
        icon: "WhatsApp",
        name: "Lembretes via WhatsApp",
        short: "No plano Clínica/Pro, a clínica também conta com lembretes de agenda enviados pelo WhatsApp.",
      },
      {
        icon: "Sparkles",
        name: "Uso pelo navegador",
        short: "Acesse o sistema em um navegador atualizado, sem instalar programas no computador da recepção.",
      },
      {
        icon: "UserCog",
        name: "Rotina compartilhada",
        short: "Mantenha a programação organizada para que a equipe trabalhe com a mesma informação.",
      },
    ],
  },
  workflow: {
    eyebrow: "Como funciona",
    title: "Do agendamento ao histórico do paciente",
    description:
      "Um fluxo direto para registrar o compromisso e continuar o atendimento dentro do mesmo sistema.",
    steps: [
      {
        icon: "Users",
        title: "Identifique o paciente",
        description:
          "Selecione um paciente já cadastrado ou registre os dados básicos de um novo contato.",
      },
      {
        icon: "CalendarDays",
        title: "Defina data e horário",
        description:
          "Cadastre o compromisso com as informações necessárias para organizar a programação da clínica.",
      },
      {
        icon: "ClipboardList",
        title: "Continue o atendimento",
        description:
          "Use o cadastro e o prontuário do paciente para manter a jornada clínica centralizada no Smilo.",
      },
    ],
  },
  faq: [
    {
      question: "O que é uma agenda odontológica online?",
      answer:
        "É uma agenda acessada pelo navegador que organiza os compromissos da clínica e mantém os horários relacionados aos dados dos pacientes, evitando o uso de agendas de papel e informações espalhadas.",
    },
    {
      question: "A agenda do Smilo possui visão semanal?",
      answer:
        "Sim. A agenda apresenta uma visão semanal dos compromissos para facilitar a consulta e a organização dos horários da clínica.",
    },
    {
      question: "Posso agendar um paciente que ainda não está cadastrado?",
      answer:
        "Sim. É possível registrar um compromisso para um novo contato e informar os dados necessários para o agendamento.",
    },
    {
      question: "É possível editar ou cancelar um compromisso?",
      answer:
        "Sim. Compromissos existentes podem ser ajustados ou excluídos quando a programação da clínica mudar.",
    },
    {
      question: "Os lembretes de agenda pelo WhatsApp estão incluídos?",
      answer:
        "Os lembretes de agenda via WhatsApp estão disponíveis no plano Clínica/Pro para apoiar a comunicação da clínica com os pacientes.",
    },
    {
      question: "Preciso instalar algum programa para usar a agenda?",
      answer:
        "Não. O Smilo funciona pelo navegador em um computador ou notebook com acesso à internet.",
    },
  ],
  relatedLinks: [
    {
      icon: "Layers",
      name: "Todas as funcionalidades",
      short: "Conheça os módulos de pacientes, prontuário, cobranças e gestão da clínica.",
      href: "/funcionalidades",
    },
    {
      icon: "CreditCard",
      name: "Planos e preços",
      short: "Compare os planos Solo e Clínica/Pro e veja os recursos disponíveis em cada opção.",
      href: "/precos",
    },
    {
      icon: "WhatsApp",
      name: "Como reduzir faltas",
      short: "Leia nosso guia sobre lembretes de consulta pelo WhatsApp para clínicas odontológicas.",
      href: "/blog/lembrete-consulta-whatsapp-odontologia",
    },
  ],
  cta: {
    title: "Organize a agenda da sua clínica com o Smilo",
    description:
      "Comece o teste grátis e veja como agenda, pacientes e prontuário funcionam juntos na rotina da clínica.",
    primaryAction: {
      href: siteConfig.freeTrialUrl,
      label: "Testar grátis por 7 dias",
      icon: "ArrowRight",
      external: true,
      shiny: true,
      trackFreeTrial: true,
    },
    secondaryAction: {
      href: "/precos",
      label: "Ver planos e preços",
      icon: "ArrowRight",
    },
  },
};

export const prontuarioEletronicoOdontologicoPage = {
  path: "/prontuario-eletronico-odontologico",
  metadata: {
    title: "Prontuário Eletrônico Odontológico | Smilo CRM",
    description:
      "Centralize consultas, evoluções, prescrições, anexos e histórico financeiro no prontuário eletrônico odontológico do Smilo CRM. Teste grátis.",
  },
  hero: {
    eyebrow: "Prontuário eletrônico",
    title: "Prontuário eletrônico odontológico completo e organizado",
    description:
      "Mantenha o histórico clínico de cada paciente em um só lugar, com consultas, procedimentos, evoluções, prescrições, anexos e cobranças vinculadas ao atendimento.",
  },
  showcase: {
    ...prontuarioModule,
    slug: "prontuario-eletronico-odontologico",
    name: "Todo o histórico clínico do paciente em uma única visão",
    description:
      "O prontuário do Smilo reúne os registros importantes de cada paciente e facilita a consulta do histórico antes, durante e depois do atendimento. A equipe autorizada encontra as informações sem depender de fichas em papel ou arquivos espalhados.",
  },
  benefits: {
    eyebrow: "Informação centralizada",
    title: "Mais clareza para acompanhar cada etapa do tratamento",
    description:
      "Os registros clínicos permanecem conectados ao paciente e ao fluxo administrativo da clínica.",
    items: [
      {
        icon: "ClipboardList",
        name: "Histórico clínico completo",
        short: "Consulte registros anteriores e acompanhe a evolução do paciente ao longo dos atendimentos.",
      },
      {
        icon: "Stethoscope",
        name: "Consultas e procedimentos",
        short: "Registre consultas, exames, cirurgias e procedimentos realizados pela clínica.",
      },
      {
        icon: "Sparkles",
        name: "Evolução e prescrições",
        short: "Documente a evolução clínica e mantenha as prescrições relacionadas ao paciente.",
      },
      {
        icon: "Layers",
        name: "Anexos organizados",
        short: "Vincule arquivos digitais ao prontuário para manter os documentos junto ao histórico clínico.",
      },
      {
        icon: "CreditCard",
        name: "Histórico financeiro",
        short: "Acompanhe as cobranças do atendimento na área financeira vinculada ao paciente.",
      },
      {
        icon: "ShieldCheck",
        name: "Acesso por perfil",
        short: "Use logins individuais e permissões configuráveis para controlar o acesso da equipe.",
      },
    ],
  },
  workflow: {
    eyebrow: "Como funciona",
    title: "Um fluxo contínuo para registrar e consultar atendimentos",
    description:
      "Do cadastro do paciente à consulta do histórico, as informações permanecem conectadas dentro do Smilo.",
    steps: [
      {
        icon: "Users",
        title: "Selecione o paciente",
        description:
          "Acesse o cadastro e localize o prontuário correspondente antes de iniciar um novo registro clínico.",
      },
      {
        icon: "Stethoscope",
        title: "Registre o atendimento",
        description:
          "Inclua a consulta, o procedimento, a evolução e outras informações importantes para o histórico.",
      },
      {
        icon: "Eye",
        title: "Consulte a evolução",
        description:
          "Revise os registros anteriores para acompanhar a continuidade do tratamento do paciente.",
      },
    ],
  },
  faq: [
    {
      question: "O que é um prontuário eletrônico odontológico?",
      answer:
        "É o registro digital do histórico clínico do paciente. Ele reúne consultas, procedimentos, evoluções, prescrições, anexos e outras informações relevantes para o acompanhamento odontológico.",
    },
    {
      question: "Quais informações podem ser registradas no prontuário do Smilo?",
      answer:
        "O prontuário permite registrar consultas, exames, cirurgias, procedimentos, evolução clínica, prescrições, anexos e cobranças relacionadas ao atendimento.",
    },
    {
      question: "O prontuário está disponível nos planos Solo e Clínica/Pro?",
      answer:
        "Sim. O prontuário clínico completo e as fichas de anamnese estão disponíveis tanto no plano Solo quanto no plano Clínica/Pro.",
    },
    {
      question: "É possível anexar documentos ao prontuário?",
      answer:
        "Sim. Arquivos digitais podem ser vinculados ao paciente para manter documentos e informações complementares junto ao histórico clínico.",
    },
    {
      question: "O prontuário também mostra informações financeiras?",
      answer:
        "Sim. O prontuário possui uma área financeira com o histórico das cobranças relacionadas aos atendimentos do paciente.",
    },
    {
      question: "Como o acesso aos dados clínicos é controlado?",
      answer:
        "O Smilo utiliza acesso individual por e-mail e senha e permite configurar permissões por perfil, para que cada pessoa acesse apenas as áreas necessárias para sua função.",
    },
  ],
  relatedLinks: [
    {
      icon: "CalendarDays",
      name: "Agenda odontológica",
      short: "Organize os compromissos da clínica e mantenha os pacientes conectados ao fluxo de atendimento.",
      href: "/agenda-odontologica",
    },
    {
      icon: "Layers",
      name: "Todas as funcionalidades",
      short: "Veja os módulos de pacientes, cobranças, profissionais e gestão disponíveis no Smilo.",
      href: "/funcionalidades",
    },
    {
      icon: "ClipboardList",
      name: "Guia sobre prontuário eletrônico",
      short: "Entenda o que é um prontuário eletrônico odontológico e como ele funciona na prática.",
      href: "/blog/prontuario-eletronico-odontologico",
    },
  ],
  cta: {
    title: "Centralize os prontuários da sua clínica com o Smilo",
    description:
      "Comece o teste grátis e veja como manter o histórico clínico conectado à agenda, aos pacientes e às cobranças.",
    primaryAction: {
      href: siteConfig.freeTrialUrl,
      label: "Testar grátis por 7 dias",
      icon: "ArrowRight",
      external: true,
      shiny: true,
      trackFreeTrial: true,
    },
    secondaryAction: {
      href: "/precos",
      label: "Ver planos e preços",
      icon: "ArrowRight",
    },
  },
};

export const anamneseOdontologicaPage = {
  path: "/anamnese-odontologica",
  metadata: {
    title: "Anamnese Odontológica Digital para Clínicas | Smilo CRM",
    description:
      "Registre informações de saúde, comorbidades e observações na anamnese odontológica digital do Smilo CRM, integrada ao cadastro e ao prontuário.",
  },
  hero: {
    eyebrow: "Anamnese odontológica",
    title: "Anamnese odontológica digital integrada ao prontuário",
    description:
      "Organize informações de saúde, comorbidades e observações importantes junto ao cadastro e ao histórico clínico de cada paciente.",
  },
  showcase: {
    slug: "anamnese-odontologica-digital",
    icon: "ClipboardList",
    name: "Informações clínicas conectadas ao cadastro do paciente",
    description:
      "No Smilo, informações relevantes para a avaliação odontológica ficam associadas ao paciente. A equipe autorizada pode consultar comorbidades e observações no contexto do prontuário, sem depender de fichas separadas.",
    bullets: [
      "Registro de comorbidades e observações relevantes",
      "Informações vinculadas ao cadastro do paciente",
      "Consulta dos dados no contexto do prontuário clínico",
      "Fichas de anamnese disponíveis nos planos Solo e Clínica/Pro",
    ],
    image: "/images/screens/paciente-form.png",
    imageWidth: 1784,
    imageHeight: 882,
    imageAlt: "Cadastro de paciente no Smilo CRM com campos para comorbidades e observações clínicas",
    secondaryImage: "/images/screens/sistema-clinica-ondontologica-prontuario-anamnese.webp",
    secondaryImageWidth: 1408,
    secondaryImageHeight: 864,
    secondaryImageAlt: "Visão do prontuário no Smilo CRM com informações clínicas e comorbidades do paciente",
  },
  benefits: {
    eyebrow: "Avaliação organizada",
    title: "Informações importantes disponíveis antes do atendimento",
    description:
      "A anamnese digital ajuda a manter dados de saúde organizados junto às demais informações usadas pela clínica.",
    items: [
      {
        icon: "HeartHandshake",
        name: "Contexto do paciente",
        short: "Mantenha informações de saúde relevantes associadas à pessoa que será atendida.",
      },
      {
        icon: "Stethoscope",
        name: "Comorbidades registradas",
        short: "Registre condições informadas pelo paciente para apoiar a avaliação antes dos procedimentos.",
      },
      {
        icon: "ClipboardList",
        name: "Integração com prontuário",
        short: "Consulte as informações junto ao histórico clínico, às evoluções e aos demais registros.",
      },
      {
        icon: "Users",
        name: "Cadastro centralizado",
        short: "Evite manter dados pessoais e informações clínicas em fichas desconectadas.",
      },
      {
        icon: "ShieldCheck",
        name: "Permissões por perfil",
        short: "Controle o acesso da equipe com logins individuais e permissões configuráveis.",
      },
      {
        icon: "Eye",
        name: "Consulta rápida",
        short: "Encontre comorbidades e observações no contexto do paciente antes de continuar o atendimento.",
      },
    ],
  },
  workflow: {
    eyebrow: "Como funciona",
    title: "Da coleta das informações à consulta no prontuário",
    description:
      "Um processo simples para manter os dados clínicos associados ao paciente dentro do Smilo.",
    steps: [
      {
        icon: "Users",
        title: "Cadastre o paciente",
        description:
          "Registre os dados pessoais e de contato necessários para identificar corretamente o paciente.",
      },
      {
        icon: "ClipboardList",
        title: "Informe dados de saúde",
        description:
          "Adicione comorbidades e observações relevantes para a avaliação odontológica.",
      },
      {
        icon: "Eye",
        title: "Consulte antes de atender",
        description:
          "Acesse as informações junto ao prontuário para contextualizar o atendimento clínico.",
      },
    ],
  },
  faq: [
    {
      question: "O que é uma anamnese odontológica?",
      answer:
        "É a coleta organizada de informações sobre a saúde e o histórico do paciente que podem ser relevantes para a avaliação e para o atendimento odontológico.",
    },
    {
      question: "O Smilo possui anamnese odontológica digital?",
      answer:
        "Sim. O Smilo permite registrar fichas de anamnese e manter informações como comorbidades e observações associadas ao paciente.",
    },
    {
      question: "A anamnese fica integrada ao prontuário?",
      answer:
        "Sim. As informações ficam relacionadas ao cadastro e podem ser consultadas no contexto do prontuário clínico do paciente.",
    },
    {
      question: "A ficha de anamnese está disponível nos dois planos?",
      answer:
        "Sim. As fichas de anamnese estão disponíveis tanto no plano Solo quanto no plano Clínica/Pro.",
    },
    {
      question: "É possível registrar comorbidades do paciente?",
      answer:
        "Sim. O cadastro do paciente possui uma área para registrar comorbidades e observações relevantes para a clínica.",
    },
    {
      question: "Como o acesso às informações clínicas é controlado?",
      answer:
        "O Smilo utiliza acesso individual por e-mail e senha e permite configurar permissões por perfil de usuário.",
    },
  ],
  relatedLinks: [
    {
      icon: "ClipboardList",
      name: "Prontuário eletrônico",
      short: "Centralize consultas, evoluções, prescrições, anexos e o histórico clínico do paciente.",
      href: "/prontuario-eletronico-odontologico",
    },
    {
      icon: "Layers",
      name: "Todas as funcionalidades",
      short: "Conheça os recursos de pacientes, agenda, cobranças e gestão disponíveis no Smilo.",
      href: "/funcionalidades",
    },
    {
      icon: "Stethoscope",
      name: "Guia sobre prontuário",
      short: "Entenda como o prontuário eletrônico organiza o histórico clínico na prática.",
      href: "/blog/prontuario-eletronico-odontologico",
    },
  ],
  cta: {
    title: "Organize as informações clínicas dos seus pacientes",
    description:
      "Comece o teste grátis e veja como anamnese, cadastro e prontuário funcionam juntos no Smilo.",
    primaryAction: {
      href: siteConfig.freeTrialUrl,
      label: "Testar grátis por 7 dias",
      icon: "ArrowRight",
      external: true,
      shiny: true,
      trackFreeTrial: true,
    },
    secondaryAction: {
      href: "/precos",
      label: "Ver planos e preços",
      icon: "ArrowRight",
    },
  },
};

export const financeiroClinicaOdontologicaPage = {
  path: "/financeiro-clinica-odontologica",
  metadata: {
    title: "Financeiro para Clínica Odontológica | Smilo CRM",
    description:
      "Organize cobranças, pagamentos e valores pendentes com o financeiro para clínica odontológica do Smilo CRM. Histórico integrado ao paciente.",
  },
  hero: {
    eyebrow: "Financeiro odontológico",
    title: "Financeiro para clínica odontológica integrado aos atendimentos",
    description:
      "Acompanhe cobranças pagas e pendentes, registre recebimentos e consulte o histórico financeiro de cada paciente dentro do mesmo sistema.",
  },
  showcase: {
    ...cobrancasModule,
    slug: "financeiro-clinica-odontologica",
    name: "Controle o que entrou e o que ainda falta receber",
    description:
      "O Smilo conecta os serviços realizados às cobranças da clínica. Quando um atendimento possui valor associado, a cobrança é gerada e pode ser acompanhada até a confirmação do pagamento.",
  },
  benefits: {
    eyebrow: "Controle financeiro",
    title: "Cobranças organizadas junto à rotina clínica",
    description:
      "Acompanhe os recebimentos sem separar o financeiro do cadastro, do prontuário e dos serviços realizados.",
    items: [
      {
        icon: "CreditCard",
        name: "Cobranças centralizadas",
        short: "Consulte as cobranças da clínica e identifique rapidamente valores pagos ou pendentes.",
      },
      {
        icon: "Sparkles",
        name: "Geração automática",
        short: "Serviços com valor associado geram cobranças quando o atendimento é registrado no prontuário.",
      },
      {
        icon: "Users",
        name: "Histórico por paciente",
        short: "Mantenha os registros financeiros conectados ao paciente e ao atendimento realizado.",
      },
      {
        icon: "Check",
        name: "Baixa de pagamentos",
        short: "Registre o recebimento de uma cobrança com poucos cliques e mantenha o status atualizado.",
      },
      {
        icon: "ShieldCheck",
        name: "Confirmação de segurança",
        short: "Ações irreversíveis exigem confirmação antes de serem concluídas no sistema.",
      },
      {
        icon: "LayoutDashboard",
        name: "Indicadores no dashboard",
        short: "Visualize o faturamento do dia e do mês no painel geral da clínica.",
      },
    ],
  },
  workflow: {
    eyebrow: "Como funciona",
    title: "Do serviço realizado à confirmação do pagamento",
    description:
      "O fluxo financeiro acompanha o atendimento para reduzir controles paralelos e informações desencontradas.",
    steps: [
      {
        icon: "Layers",
        title: "Cadastre o serviço",
        description:
          "Defina o procedimento ou atendimento e informe o valor que será usado na cobrança.",
      },
      {
        icon: "ClipboardList",
        title: "Registre o atendimento",
        description:
          "Ao lançar o serviço no prontuário, o Smilo gera a cobrança vinculada ao paciente.",
      },
      {
        icon: "CreditCard",
        title: "Acompanhe o recebimento",
        description:
          "Consulte o que está pendente e registre a baixa quando o pagamento for confirmado.",
      },
    ],
  },
  faq: [
    {
      question: "Como funciona o financeiro para clínica odontológica do Smilo?",
      answer:
        "O módulo reúne cobranças vinculadas aos pacientes e permite acompanhar valores pagos e pendentes, além de registrar a baixa dos pagamentos recebidos.",
    },
    {
      question: "O sistema gera cobranças automaticamente?",
      answer:
        "Sim. Quando um serviço possui valor cadastrado, o Smilo gera uma cobrança vinculada ao paciente após o atendimento ser registrado no prontuário.",
    },
    {
      question: "É possível saber quais cobranças ainda estão pendentes?",
      answer:
        "Sim. A relação de cobranças diferencia os registros pagos dos pendentes para facilitar o acompanhamento da clínica.",
    },
    {
      question: "O histórico financeiro aparece no prontuário?",
      answer:
        "Sim. O prontuário possui uma área financeira com o histórico de cobranças relacionadas aos atendimentos do paciente.",
    },
    {
      question: "Como é registrada a baixa de um pagamento?",
      answer:
        "A cobrança pode ser marcada como paga dentro do sistema. Antes de concluir a ação, o Smilo apresenta uma confirmação de segurança.",
    },
    {
      question: "Consigo acompanhar o faturamento da clínica?",
      answer:
        "Sim. O dashboard apresenta indicadores de faturamento do mês e do dia para uma consulta rápida da movimentação financeira.",
    },
  ],
  relatedLinks: [
    {
      icon: "ClipboardList",
      name: "Prontuário eletrônico",
      short: "Veja como atendimentos e cobranças permanecem conectados ao histórico de cada paciente.",
      href: "/prontuario-eletronico-odontologico",
    },
    {
      icon: "Layers",
      name: "Todas as funcionalidades",
      short: "Conheça os recursos de agenda, pacientes, profissionais e gestão disponíveis no Smilo.",
      href: "/funcionalidades",
    },
    {
      icon: "CreditCard",
      name: "Quanto custa um software odontológico?",
      short: "Entenda os modelos de cobrança e o que avaliar ao comparar sistemas para clínicas.",
      href: "/blog/quanto-custa-software-gestao-odontologica",
    },
  ],
  cta: {
    title: "Organize o financeiro da sua clínica com o Smilo",
    description:
      "Comece o teste grátis e veja como atendimentos, cobranças e histórico do paciente funcionam juntos.",
    primaryAction: {
      href: siteConfig.freeTrialUrl,
      label: "Testar grátis por 7 dias",
      icon: "ArrowRight",
      external: true,
      shiny: true,
      trackFreeTrial: true,
    },
    secondaryAction: {
      href: "/precos",
      label: "Ver planos e preços",
      icon: "ArrowRight",
    },
  },
};

export const lembreteConsultaWhatsappPage = {
  path: "/lembrete-consulta-whatsapp",
  metadata: {
    title: "Lembrete de Consulta pelo WhatsApp | Smilo CRM",
    description:
      "Envie lembretes de consulta pelo WhatsApp com o Smilo CRM e mantenha pacientes informados sobre os agendamentos da clínica odontológica.",
  },
  hero: {
    eyebrow: "Lembrete pelo WhatsApp",
    title: "Lembrete de consulta pelo WhatsApp para clínicas odontológicas",
    description:
      "Mantenha os pacientes informados sobre os próximos atendimentos e facilite a comunicação da clínica antes de cada consulta.",
  },
  introPrimaryAction: {
    href: "https://app.smilo.com.br/cadastro?plano=pro",
    label: "Começar com o Clínica/Pro",
    icon: "ArrowRight",
    external: true,
    trackPlan: true,
    trackProPlan: true,
    planName: "clinica",
  },
  showcase: {
    ...whatsappReminderModule,
    name: "Avise seus pacientes sobre os próximos agendamentos",
    description:
      "Os lembretes de agenda pelo WhatsApp ajudam a clínica a reforçar data e horário antes da consulta. O recurso faz parte do plano Clínica/Pro e trabalha junto à agenda do Smilo.",
  },
  benefits: {
    eyebrow: "Comunicação com o paciente",
    title: "Mais praticidade antes de cada consulta",
    description:
      "Use as informações da agenda para manter o paciente informado e apoiar a organização da recepção.",
    items: [
      {
        icon: "WhatsApp",
        name: "Canal familiar",
        short: "Comunique o lembrete pelo WhatsApp, um canal presente na rotina de muitos pacientes.",
      },
      {
        icon: "CalendarDays",
        name: "Ligado à agenda",
        short: "Mantenha a comunicação relacionada aos compromissos organizados na agenda do Smilo.",
      },
      {
        icon: "Clock",
        name: "Data e horário claros",
        short: "Reforce as informações essenciais do próximo atendimento para o paciente.",
      },
      {
        icon: "Users",
        name: "Recepção organizada",
        short: "Apoie a equipe na comunicação prévia sem separar o lembrete da rotina da agenda.",
      },
      {
        icon: "Sparkles",
        name: "Mais praticidade",
        short: "Reduza o trabalho de conferir informações espalhadas antes de entrar em contato.",
      },
      {
        icon: "ShieldCheck",
        name: "Recurso do Clínica/Pro",
        short: "Os lembretes de agenda via WhatsApp estão disponíveis no plano voltado a clínicas com equipe.",
      },
    ],
  },
  workflow: {
    eyebrow: "Como funciona",
    title: "Da agenda ao lembrete da consulta",
    description:
      "Um fluxo conectado para organizar o compromisso e manter o paciente informado antes do atendimento.",
    steps: [
      {
        icon: "CalendarDays",
        title: "Registre o compromisso",
        description:
          "Cadastre o paciente, a data e o horário do atendimento na agenda odontológica do Smilo.",
      },
      {
        icon: "WhatsApp",
        title: "Envie o lembrete",
        description:
          "Use o recurso do plano Clínica/Pro para avisar o paciente sobre o próximo agendamento.",
      },
      {
        icon: "Check",
        title: "Prepare o atendimento",
        description:
          "Mantenha a programação da clínica organizada para a recepção e para os profissionais da equipe.",
      },
    ],
  },
  faq: [
    {
      question: "Como funciona o lembrete de consulta pelo WhatsApp?",
      answer:
        "O recurso usa as informações do agendamento para avisar o paciente sobre a próxima consulta e reforçar dados como data e horário.",
    },
    {
      question: "Em qual plano os lembretes pelo WhatsApp estão disponíveis?",
      answer:
        "Os lembretes de agenda via WhatsApp são exclusivos do plano Clínica/Pro.",
    },
    {
      question: "O lembrete fica relacionado à agenda odontológica?",
      answer:
        "Sim. O recurso complementa a agenda do Smilo e ajuda a clínica a comunicar os próximos compromissos aos pacientes.",
    },
    {
      question: "O lembrete pode ajudar a reduzir faltas?",
      answer:
        "Lembrar o paciente com antecedência reforça o compromisso e pode ajudar a diminuir esquecimentos, embora o comparecimento também dependa do próprio paciente.",
    },
    {
      question: "O plano Solo possui lembretes via WhatsApp?",
      answer:
        "Não. A agenda está disponível no plano Solo, mas os lembretes de agenda via WhatsApp fazem parte do plano Clínica/Pro.",
    },
    {
      question: "Preciso instalar um programa para usar o recurso?",
      answer:
        "Não. O Smilo funciona pelo navegador em um computador ou notebook com acesso à internet.",
    },
  ],
  relatedLinks: [
    {
      icon: "CalendarDays",
      name: "Agenda odontológica",
      short: "Organize os horários da clínica e mantenha os dados dos compromissos em uma visão semanal.",
      href: "/agenda-odontologica",
    },
    {
      icon: "WhatsApp",
      name: "Como reduzir faltas",
      short: "Leia o guia sobre comunicação e lembretes de consulta pelo WhatsApp.",
      href: "/blog/lembrete-consulta-whatsapp-odontologia",
    },
    {
      icon: "CreditCard",
      name: "Planos e preços",
      short: "Compare os planos e veja todos os recursos disponíveis no Clínica/Pro.",
      href: "/precos",
    },
  ],
  cta: {
    title: "Leve os lembretes pelo WhatsApp para a sua clínica",
    description:
      "Conheça o plano Clínica/Pro e veja como agenda, pacientes e comunicação funcionam juntos no Smilo.",
    primaryAction: {
      href: "https://app.smilo.com.br/cadastro?plano=pro",
      label: "Começar com o Clínica/Pro",
      icon: "ArrowRight",
      external: true,
      trackPlan: true,
      trackProPlan: true,
      planName: "clinica",
    },
    secondaryAction: {
      href: "/precos",
      label: "Comparar os planos",
      icon: "ArrowRight",
    },
  },
};

export const sistemaParaClinicaOdontologicaPage = {
  path: "/sistema-para-clinica-odontologica",
  metadata: {
    title: "Sistema para Clínica Odontológica | Smilo CRM",
    description:
      "Sistema para clínica odontológica com agenda, pacientes, prontuário, anamnese, cobranças e gestão da equipe em um único CRM. Teste grátis.",
  },
  hero: {
    eyebrow: "Gestão odontológica",
    title: "Sistema para clínica odontológica completo e integrado",
    description:
      "Organize agenda, pacientes, prontuários, cobranças, profissionais e usuários em um único sistema feito para a rotina odontológica.",
  },
  showcase: {
    ...dashboardModule,
    slug: "sistema-clinica-odontologica",
    name: "Uma visão central da rotina da sua clínica",
    description:
      "O Smilo reúne as principais áreas da gestão odontológica e oferece indicadores e atalhos logo no dashboard. A equipe encontra pacientes, prontuários, pagamentos e informações do dia sem alternar entre planilhas e ferramentas separadas.",
  },
  benefits: {
    eyebrow: "Módulos integrados",
    title: "Da agenda ao recebimento, tudo no mesmo sistema",
    description:
      "Cada módulo acompanha uma etapa do atendimento e compartilha as informações necessárias com o restante da operação.",
    items: [
      {
        icon: "CalendarDays",
        name: "Agenda odontológica",
        short: "Organize compromissos e visualize os atendimentos da semana em uma única tela.",
        href: "/agenda-odontologica",
      },
      {
        icon: "ClipboardList",
        name: "Prontuário eletrônico",
        short: "Centralize consultas, evoluções, prescrições, anexos e o histórico clínico.",
        href: "/prontuario-eletronico-odontologico",
      },
      {
        icon: "HeartHandshake",
        name: "Anamnese odontológica",
        short: "Mantenha comorbidades e informações de saúde ligadas ao cadastro do paciente.",
        href: "/anamnese-odontologica",
      },
      {
        icon: "CreditCard",
        name: "Financeiro da clínica",
        short: "Acompanhe cobranças pagas e pendentes e consulte o histórico por paciente.",
        href: "/financeiro-clinica-odontologica",
      },
      {
        icon: "WhatsApp",
        name: "Lembretes pelo WhatsApp",
        short: "No Clínica/Pro, avise pacientes sobre os próximos compromissos da agenda.",
        href: "/lembrete-consulta-whatsapp",
      },
      {
        icon: "UserCog",
        name: "Equipe e permissões",
        short: "Cadastre usuários e defina o acesso de cada pessoa conforme seu perfil.",
        href: "/funcionalidades#usuarios",
      },
    ],
  },
  workflow: {
    eyebrow: "Gestão conectada",
    title: "Um fluxo único para a operação da clínica",
    description:
      "As informações acompanham o paciente e reduzem a necessidade de reconstruir o histórico em ferramentas diferentes.",
    steps: [
      {
        icon: "CalendarDays",
        title: "Organize a chegada",
        description:
          "Cadastre pacientes e compromissos para manter a programação semanal da clínica atualizada.",
      },
      {
        icon: "Stethoscope",
        title: "Registre o atendimento",
        description:
          "Use prontuário, anamnese, evoluções e procedimentos para documentar a jornada clínica.",
      },
      {
        icon: "CreditCard",
        title: "Acompanhe a gestão",
        description:
          "Consulte cobranças, recebimentos, profissionais, usuários e indicadores no mesmo ambiente.",
      },
    ],
  },
  faq: [
    {
      question: "O que é um sistema para clínica odontológica?",
      answer:
        "É um software que centraliza tarefas administrativas e clínicas, como agenda, cadastro de pacientes, prontuários, cobranças e controle da equipe.",
    },
    {
      question: "Quais módulos estão disponíveis no Smilo?",
      answer:
        "O Smilo reúne dashboard, pacientes, prontuário, agenda, cobranças, profissionais, serviços, usuários, permissões e parâmetros da clínica, além de lembretes via WhatsApp no Clínica/Pro.",
    },
    {
      question: "Preciso instalar o sistema nos computadores da clínica?",
      answer:
        "Não. O Smilo funciona pelo navegador em computadores ou notebooks com acesso à internet.",
    },
    {
      question: "O sistema serve para dentista autônomo e para clínicas com equipe?",
      answer:
        "Sim. O plano Solo atende o profissional individual, enquanto o Clínica/Pro inclui profissionais ilimitados e recursos de gestão de equipe.",
    },
    {
      question: "Existe limite de pacientes cadastrados?",
      answer:
        "Não. Os planos do Smilo não limitam a quantidade de pacientes cadastrados.",
    },
    {
      question: "É possível controlar o acesso dos funcionários?",
      answer:
        "Sim. O módulo de usuários permite configurar perfis e restringir áreas sensíveis conforme a função de cada pessoa.",
    },
  ],
  relatedLinks: [
    {
      icon: "Layers",
      name: "Todas as funcionalidades",
      short: "Explore em detalhes os módulos que fazem parte da gestão odontológica no Smilo.",
      href: "/funcionalidades",
    },
    {
      icon: "CreditCard",
      name: "Planos e preços",
      short: "Compare o Solo e o Clínica/Pro para escolher a opção adequada à sua equipe.",
      href: "/precos",
    },
    {
      icon: "Sparkles",
      name: "Como escolher um sistema",
      short: "Veja os critérios mais importantes ao avaliar um software de gestão odontológica.",
      href: "/blog/software-de-gestao-odontologica-como-escolher",
    },
  ],
  cta: {
    title: "Centralize a gestão da sua clínica com o Smilo",
    description:
      "Comece o teste grátis e veja como agenda, pacientes, prontuário e financeiro funcionam juntos.",
    primaryAction: {
      href: siteConfig.freeTrialUrl,
      label: "Testar grátis por 7 dias",
      icon: "ArrowRight",
      external: true,
      shiny: true,
      trackFreeTrial: true,
    },
    secondaryAction: {
      href: "/precos",
      label: "Ver planos e preços",
      icon: "ArrowRight",
    },
  },
};
