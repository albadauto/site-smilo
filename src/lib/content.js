// Conteúdo do site — funcionalidades, planos e perguntas frequentes.
// Extraído e adaptado do Manual do Usuário do Smilo CRM (v1.0).

import dentistaLista from "../../public/images/screens/dentista-lista.png";

export const modules = [
  {
    slug: "dashboard",
    icon: "LayoutDashboard",
    name: "Dashboard geral",
    short: "Resumo da operação, agenda do dia, pacientes recentes e atividade clínica.",
    description:
      "Ao entrar no Smilo, sua equipe já vê o que importa: um resumo da operação, a agenda do dia, os pacientes recentes e a atividade clínica. Atalhos diretos levam às áreas mais usadas sem precisar navegar por vários menus.",
    bullets: [
      "Resumo dos principais indicadores da operação",
      "Agenda do dia sempre visível",
      "Pacientes recentes e atividade clínica",
      "Atalhos diretos para as áreas mais usadas",
    ],
    image: "/images/screens/sistema-de-gestao-clinica-odontologica-dashboard.webp",
    imageWidth: 1018,
    imageHeight: 822,
    imageAlt: "Dashboard geral do Smilo CRM com indicadores de pacientes, prontuários e pagamentos",
    cardImage: "/images/screens/sistema-de-gestao-clinica-odontologica-dashboard.webp",
  },
  {
    slug: "lembretes-whatsapp",
    icon: "WhatsApp",
    name: "Lembretes de agenda via WhatsApp",
    short: "Avise os pacientes sobre seus agendamentos pelo WhatsApp. Exclusivo do Clínica/Pro.",
    description:
      "Mantenha seus pacientes informados sobre os próximos atendimentos com lembretes de agenda via WhatsApp. Um recurso exclusivo do plano Clínica/Pro para facilitar a comunicação da clínica antes de cada consulta.",
    bullets: [
      "Avisos sobre os agendamentos pelo WhatsApp",
      "Mais praticidade na comunicação com o paciente",
      "Disponível exclusivamente no plano Clínica/Pro",
    ],
    image: "/images/screens/lembrete-whatsapp.svg",
    imageWidth: 1000,
    imageHeight: 800,
    imageAlt: "Ilustração de conversa no WhatsApp com foto de perfil da Smilo, lembrando a paciente de uma consulta na Clínica Sorriso amanhã às 14h30. Recurso exclusivo do Clínica/Pro",
    illustration: true,
    cardImage: "/images/screens/sistema-odontologico-agenda-lembrete-whatsapp.png",
    cardVisual: "whatsapp",
  },
  {
    slug: "pacientes",
    icon: "Users",
    name: "Gestão de pacientes",
    short: "Cadastro completo, com dados clínicos e de emergência.",
    description:
      "Centralize todos os dados dos seus pacientes: informações pessoais, endereço, contato, comorbidades, contato de emergência e observações relevantes para o atendimento. A busca rápida evita cadastros duplicados e mantém a base sempre organizada.",
    bullets: [
      "Dados pessoais, endereço e contato completos",
      "Comorbidades e observações clínicas relevantes",
      "Contato de emergência sempre à mão",
      "Busca rápida para evitar cadastros duplicados",
    ],
    image: "/images/screens/paciente-form.png",
    imageWidth: 1784,
    imageHeight: 882,
    imageAlt: "Formulário de cadastro de paciente no Smilo CRM",
    secondaryImage: "/images/screens/pacientes-lista.png",
    secondaryImageWidth: 1983,
    secondaryImageHeight: 793,
    secondaryImageAlt: "Lista de pacientes cadastrados no Smilo CRM",
    cardImage: "/images/screens/sistema-clinica-odontologica-pacientes.png",
  },
  {
    slug: "prontuario",
    icon: "ClipboardList",
    name: "Prontuário clínico",
    short: "Histórico completo, odontograma, documentos e IA no Clínica/Pro.",
    description:
      "O prontuário reúne o histórico clínico e financeiro, próximo agendamento, consultas, exames, cirurgias, procedimentos, odontograma, prescrições, atestados e anexos privados. No Clínica/Pro, a equipe também conta com prontuário inteligente com IA.",
    bullets: [
      "Histórico clínico, financeiro e próximo agendamento",
      "Odontograma por dente e face, com histórico de alterações",
      "Prescrições, atestados e comprovante de horas em PDF",
      "Assinatura profissional e verificação pública de documentos",
      "Anexos privados vinculados ao prontuário",
      "Prontuário inteligente com IA no Clínica/Pro",
    ],
    image: "/images/screens/sistema-clinica-odontologia-prontuario.webp",
    imageWidth: 1399,
    imageHeight: 888,
    imageAlt: "Odontograma no prontuário clínico do Smilo CRM",
    secondaryImage: "/images/screens/sistema-clinica-ondontologica-prontuario-anamnese.webp",
    secondaryImageWidth: 1408,
    secondaryImageHeight: 864,
    secondaryImageAlt: "Ficha de anamnese no prontuário clínico do Smilo CRM",
    cardImage: "/images/screens/sistema-clinica-odontologia-prontuario.webp",
  },
  {
    slug: "agenda",
    icon: "CalendarDays",
    name: "Agenda de atendimentos",
    short: "Visualize, filtre e organize atendimentos por dia, semana ou mês.",
    description:
      "Organize a rotina com visualização por dia, semana e mês. Filtre por paciente, profissional ou situação, mova horários, altere o status do atendimento e cadastre pacientes diretamente pelo agendamento.",
    bullets: [
      "Visualização por dia, semana e mês",
      "Filtros por paciente, profissional e situação",
      "Movimentação de horários e alteração de status",
      "Cadastro de paciente a partir do agendamento",
      "Vínculo de orçamentos e controle de retornos",
      "Lembretes de agenda via WhatsApp exclusivos do Clínica/Pro",
    ],
    image: "/images/screens/agenda-de-paciente-sistema-odontologico.png",
    imageWidth: 1870,
    imageHeight: 846,
    imageAlt: "Visão semanal da agenda da clínica no Smilo CRM",
    cardImage: "/images/screens/agenda-de-paciente-sistema-odontologico.png",
  },
  {
    slug: "cobrancas",
    icon: "CreditCard",
    name: "Cobranças e financeiro",
    short: "Cobranças, boletos Asaas e fluxo de caixa previsto e realizado.",
    description:
      "Controle cobranças, parcelas, formas de pagamento e baixas. Gere boletos pela conta Asaas criada na plataforma, acompanhe saldo e saque, e visualize o fluxo de caixa previsto e realizado. No Clínica/Pro, emita e gerencie NFS-e.",
    bullets: [
      "Cobranças, parcelas, baixa manual e formas de pagamento",
      "Boletos Asaas com baixa automática por webhook",
      "Consulta de saldo e saque integral pela clínica",
      "Fluxo de caixa com receitas, despesas, categorias e filtros",
      "NFS-e com emissão, consulta, reenvio e cancelamento no Clínica/Pro",
    ],
    image: "/images/screens/cobrancas-lista2.png",
    imageWidth: 1774,
    imageHeight: 887,
    imageAlt: "Relação de cobranças do sistema Smilo CRM",
    secondaryImage: "/images/screens/cobranca-detalhes2.png",
    secondaryImageWidth: 1880,
    secondaryImageHeight: 837,
    secondaryImageAlt: "Detalhes e baixa de uma cobrança no Smilo CRM",
    cardImage: "/images/screens/sistema-clinica-odontologica-cobranca-financeiro.png",
  },
  {
    slug: "profissionais",
    icon: "Stethoscope",
    name: "Profissionais e dentistas",
    short: "Cadastro e assinatura individual para 1 profissional ou equipe ilimitada.",
    description:
      "Mantenha o corpo clínico organizado com cadastro e assinatura individual. O Solo inclui 1 profissional; o Clínica/Pro permite profissionais ilimitados e oferece financeiro por profissional com extrato mensal em PDF.",
    bullets: [
      "Cadastro e assinatura individual do profissional",
      "1 profissional no Solo e ilimitados no Clínica/Pro",
      "Financeiro por profissional no Clínica/Pro",
      "Extrato mensal em PDF no Clínica/Pro",
    ],
    image: "/images/screens/dentista-form.png",
    imageWidth: 1441,
    imageHeight: 585,
    imageAlt: "Formulário de cadastro de dentista no Smilo CRM",
    secondaryImage: dentistaLista,
    secondaryImageWidth: 1983,
    secondaryImageHeight: 793,
    secondaryImageAlt: "Lista de dentistas cadastrados no Smilo CRM",
    cardImage: "/images/screens/sistema-clinica-odontologica-profissional.png",
  },
  {
    slug: "servicos",
    icon: "Layers",
    name: "Serviços e procedimentos",
    short: "Serviços com valores e orçamentos completos vinculados à agenda.",
    description:
      "Cadastre consultas, exames, cirurgias e procedimentos com valores. Monte orçamentos com múltiplos itens, desconto, validade, observações e cálculo automático, acompanhe a aprovação e gere o documento em PDF.",
    bullets: [
      "Cadastro de serviços por tipo: consulta, exame, cirurgia ou procedimento",
      "Valores configuráveis por serviço",
      "Orçamentos com múltiplos itens, desconto e validade",
      "Aprovação, edição, consulta e geração em PDF",
      "Consulta e vínculo do orçamento dentro da agenda",
    ],
    image: "/images/screens/servicos-cadastro.png",
    imageWidth: 1229,
    imageHeight: 444,
    imageAlt: "Cadastro de serviços da clínica no Smilo CRM",
    cardImage: "/images/screens/sistema-clinica-odontologica-clareamento.png",
  },
  {
    slug: "usuarios",
    icon: "UserCog",
    name: "Usuários e permissões",
    short: "Usuários adicionais e permissões por perfil no Clínica/Pro.",
    description:
      "Cadastre a equipe que vai usar o Smilo e defina o nível de acesso de cada pessoa — de usuário comum a administrador. Menus sensíveis, como cobranças e parâmetros, podem ficar indisponíveis conforme o perfil, protegendo dados financeiros e clínicos.",
    bullets: [
      "Cadastro de usuários com e-mail e senha individuais",
      "Perfis de acesso: usuário comum, administrador e supervisor geral",
      "Restrição de menus sensíveis por perfil",
      "Cada pessoa acessa apenas o que precisa",
    ],
    image: "/images/screens/usuarios-lista2.png",
    imageWidth: 2120,
    imageHeight: 742,
    imageAlt: "Administração de usuários do Smilo CRM",
    secondaryImage: "/images/screens/usuarios-cadastrado.png",
    secondaryImageWidth: 1983,
    secondaryImageHeight: 793,
    secondaryImageAlt: "Cadastro de um novo usuário no Smilo CRM",
    cardImage: "/images/screens/sistema-clinica-odontologica-usuario-permissao.png",
  },
  {
    slug: "parametros",
    icon: "Settings2",
    name: "Parâmetros da clínica",
    short: "Dados da clínica, tema claro/escuro e interface responsiva.",
    description:
      "Configure os dados institucionais da clínica, escolha entre tema claro e escuro e navegue por um menu organizado por áreas. A interface é responsiva para acompanhar a rotina em diferentes tamanhos de tela.",
    bullets: [
      "Nome, telefone e endereço institucionais",
      "Tema claro ou escuro",
      "Menu organizado por áreas",
      "Interface responsiva",
      "Recursos sujeitos às permissões do usuário",
    ],
    image: "/images/screens/parametros-clinica.png",
    imageWidth: 2084,
    imageHeight: 754,
    imageAlt: "Informações institucionais da clínica no Smilo CRM",
  },
];

export const securityHighlights = [
  {
    icon: "Lock",
    title: "Acesso individual e seguro",
    description:
      "Cada usuário entra com e-mail e senha próprios. Sem compartilhamento de credenciais, com opção de troca de senha a qualquer momento.",
  },
  {
    icon: "ShieldCheck",
    title: "Permissões por perfil",
    description:
      "Defina exatamente o que cada pessoa da equipe pode ver e fazer, seguindo o princípio do menor privilégio necessário.",
  },
  {
    icon: "Eye",
    title: "Rastreabilidade clínica",
    description:
      "Consultas, exames, cirurgias e procedimentos ficam registrados com data, profissional e descrição — histórico completo sempre disponível.",
  },
];

export const pricingPlans = [
  {
    id: "solo",
    name: "Solo",
    description: "Para o dentista autônomo ou consultório individual.",
    price: "119.90",
    priceSuffix: "/mês",
    highlighted: false,
    badge: "7 dias grátis",
    ctaLabel: "Grátis por 7 dias",
    ctaHref:"https://app.smilo.com.br/cadastro?plano=solo",
    features: [
      "1 profissional",
      "Pacientes, anamnese e prontuário completo",
      "Odontograma por dente e face",
      "Agenda por dia, semana e mês",
      "Orçamentos, retornos e documentos em PDF",
      "Cobranças, boletos Asaas e fluxo de caixa",
      "Suporte por e-mail e WhatsApp",
    ],
  },
  {
    id: "clinica",
    name: "Clínica/Pro",
    description: "Para clínicas com equipe e mais de um dentista.",
    price: "219.90",
    priceSuffix: "/mês",
    highlighted: true,
    badge: "Mais escolhido",
    ctaLabel: "Começar com o Clínica/Pro",
    ctaHref:"https://app.smilo.com.br/cadastro?plano=pro",
    features: [
      "Tudo do plano Solo",
      "Profissionais ilimitados",
      "Financeiro por profissional e extrato mensal em PDF",
      "Emissão e gestão de NFS-e",
      "Usuários adicionais e permissões por perfil",
      "Prontuário inteligente com IA",
      "Lembretes de agenda via WhatsApp",
    ],
  },
];

export const comparisonSections = [
  {
    area: "Geral",
    features: [
      { label: "Painel inicial com resumo da operação, agenda do dia, pacientes recentes e atividade clínica", solo: true, clinica: true },
      { label: "Login, recuperação e alteração de senha", solo: true, clinica: true },
      { label: "Dados isolados por clínica e controle da assinatura do sistema", solo: true, clinica: true },
    ],
  },
  {
    area: "Pacientes",
    features: [
      { label: "Cadastro, edição, pesquisa e exclusão de pacientes", solo: true, clinica: true },
      { label: "Anamnese, comorbidades e informações de saúde", solo: true, clinica: true },
    ],
  },
  {
    area: "Prontuário",
    features: [
      { label: "Histórico clínico, financeiro e próximo agendamento do paciente", solo: true, clinica: true },
      { label: "Consultas, exames, cirurgias e procedimentos", solo: true, clinica: true },
      { label: "Odontograma por dente e face, com histórico de alterações", solo: true, clinica: true },
      { label: "Prescrições e atestados em PDF", solo: true, clinica: true },
      { label: "Anexos privados no prontuário", solo: true, clinica: true },
      { label: "Prontuário inteligente com IA", solo: false, clinica: true },
    ],
  },
  {
    area: "Documentos",
    features: [
      { label: "Assinatura do profissional e verificação pública dos documentos emitidos", solo: true, clinica: true },
      { label: "Comprovante de horas em PDF", solo: true, clinica: true },
    ],
  },
  {
    area: "Agenda",
    features: [
      { label: "Visualização por dia, semana e mês", solo: true, clinica: true },
      { label: "Filtros por paciente, profissional e situação do atendimento", solo: true, clinica: true },
      { label: "Mover horários, alterar status e cadastrar paciente a partir do agendamento", solo: true, clinica: true },
    ],
  },
  {
    area: "Serviços",
    features: [
      { label: "Cadastro de serviços, exames, cirurgias e procedimentos com valores", solo: true, clinica: true },
    ],
  },
  {
    area: "Orçamentos",
    features: [
      { label: "Orçamentos com múltiplos itens, desconto, validade, observações e cálculo automático", solo: true, clinica: true },
      { label: "Status de aprovação, edição, consulta e geração em PDF", solo: true, clinica: true },
      { label: "Consulta e vínculo de orçamento dentro da agenda", solo: true, clinica: true },
    ],
  },
  {
    area: "Retornos",
    features: [
      { label: "Registro manual ou durante a consulta, com data prevista e motivo", solo: true, clinica: true },
      { label: "Painel de pendentes, atrasados, próximos, agendados, concluídos e dispensados", solo: true, clinica: true },
      { label: "Agendamento direto e conclusão automática pelo status da agenda", solo: true, clinica: true },
    ],
  },
  {
    area: "Financeiro",
    features: [
      { label: "Cobranças de pacientes, parcelas, baixa manual e formas de pagamento", solo: true, clinica: true },
      { label: "Boletos Asaas e baixa automática por webhook", solo: true, clinica: true },
      { label: "Conta Asaas criada pela plataforma, consulta de saldo e saque integral pela clínica", solo: true, clinica: true },
      { label: "Fluxo de caixa previsto e realizado, com receitas, despesas, categorias e filtros", solo: true, clinica: true },
    ],
  },
  {
    area: "Profissionais",
    features: [
      { label: "Cadastro de profissionais e assinatura individual", solo: "1 profissional", clinica: "Ilimitados" },
      { label: "Financeiro por profissional e extrato mensal em PDF", solo: false, clinica: true },
    ],
  },
  {
    area: "Fiscal",
    features: [
      { label: "Emissão, consulta, reenvio e cancelamento de NFS-e, com PDF e XML", solo: false, clinica: true },
    ],
  },
  {
    area: "Equipe",
    features: [
      { label: "Usuários adicionais e permissões por perfil", solo: false, clinica: true },
    ],
  },
  {
    area: "Configuração",
    features: [
      { label: "Dados da clínica, tema claro/escuro, menu por áreas e interface responsiva", solo: true, clinica: true },
    ],
  },
];

const newServicesFaq = [
  {
    question: "Os lembretes de agenda via WhatsApp estão em qual plano?",
    answer:
      "Os lembretes de agenda via WhatsApp são exclusivos do plano Clínica/Pro e servem para avisar os pacientes sobre seus agendamentos.",
  },
  {
    question: "As fichas de anamnese estão incluídas nos dois planos?",
    answer:
      "Sim. As fichas de anamnese estão disponíveis nos planos Solo e Clínica/Pro para registrar as informações de saúde do paciente e apoiar o atendimento.",
  },
];

export const pricingFaq = [
  ...newServicesFaq,
  {
    question: "Preciso instalar algum programa para usar o Smilo?",
    answer:
      "Não. O Smilo funciona 100% pelo navegador, em qualquer computador ou notebook com acesso estável à internet. Basta ter uma conta ativa e um navegador atualizado.",
  },
  {
    question: "Posso mudar de plano depois de assinar?",
    answer:
      "Sim. Você pode migrar entre os planos Solo e Clínica/Pro conforme sua clínica cresce, sem perder o histórico de pacientes, prontuários e cobranças já cadastrados.",
  },
  {
    question: "Existe limite de pacientes cadastrados?",
    answer:
      "Não há limite de pacientes em nenhum plano. Os dois incluem agenda, anamnese, prontuário, odontograma, orçamentos, retornos e financeiro. O Clínica/Pro acrescenta profissionais ilimitados, NFS-e, usuários adicionais, permissões por perfil e prontuário inteligente com IA.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Nosso suporte atende por e-mail e WhatsApp de segunda a sexta-feira, das 9h às 18h. Ao entrar em contato, informe seu usuário, a tela acessada e uma descrição do problema para agilizar o atendimento.",
  },
  {
    question: "Meus dados e os dos meus pacientes ficam seguros?",
    answer:
      "Sim. O acesso ao Smilo é individual e por senha, com permissões configuráveis por perfil de usuário. Recomendamos nunca compartilhar credenciais e sempre encerrar a sessão em computadores compartilhados.",
  },
];

export const generalFaq = [
  ...newServicesFaq,
  {
    question: "O Smilo serve para clínicas com mais de um dentista?",
    answer:
      "Sim. O módulo de Profissionais permite cadastrar quantos dentistas forem necessários (conforme o plano), cada um com CRO, especialidades e consulta financeira individual.",
  },
  {
    question: "Dá para acompanhar quanto a clínica faturou no mês?",
    answer:
      "Sim. O Dashboard mostra o faturamento do mês e do dia em tempo real, além do total de cobranças pagas e pendentes na área de Cobranças.",
  },
  {
    question: "O sistema gera a cobrança automaticamente após o atendimento?",
    answer:
      "Sim. Quando um serviço tem valor cadastrado, o Smilo gera automaticamente uma cobrança vinculada ao paciente assim que o atendimento é registrado no prontuário.",
  },
  {
    question: "Consigo controlar o que cada funcionário vê no sistema?",
    answer:
      "Sim. O módulo de Usuários e Permissões permite definir perfis de acesso — usuário comum, administrador ou supervisor geral — restringindo áreas sensíveis como cobranças e parâmetros.",
  },
];

export const iconMap = {
  LayoutDashboard: "LayoutDashboard",
  Users: "Users",
  ClipboardList: "ClipboardList",
  CalendarDays: "CalendarDays",
  CreditCard: "CreditCard",
  Stethoscope: "Stethoscope",
  Layers: "Layers",
  UserCog: "UserCog",
  Settings2: "Settings2",
  Lock: "Lock",
  ShieldCheck: "ShieldCheck",
  Eye: "Eye",
};
