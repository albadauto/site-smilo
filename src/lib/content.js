// Conteúdo do site — funcionalidades, planos e perguntas frequentes.
// Extraído e adaptado do Manual do Usuário do Smilo CRM (v1.0).

import dentistaLista from "../../public/images/screens/dentista-lista.png";

export const modules = [
  {
    slug: "dashboard",
    icon: "LayoutDashboard",
    name: "Dashboard geral",
    short: "Indicadores e atalhos da clínica em uma única tela.",
    description:
      "Ao entrar no Smilo, sua equipe já vê o que importa: quantos pacientes estão cadastrados, quanto foi faturado no mês e hoje, e quantas prescrições foram feitas. Atalhos diretos levam para Pacientes, Pagamentos e Prontuários sem precisar navegar pelo menu.",
    bullets: [
      "Indicadores de pacientes cadastrados no sistema",
      "Faturamento do mês e do dia em tempo real",
      "Prescrições e prontuários movimentados no dia",
      "Atalhos diretos para as áreas mais usadas",
    ],
    image: "/images/screens/dashboard.png",
    imageWidth: 1780,
    imageHeight: 884,
    imageAlt: "Dashboard geral do Smilo CRM com indicadores de pacientes, prontuários e pagamentos",
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
  },
  {
    slug: "prontuario",
    icon: "ClipboardList",
    name: "Prontuário clínico",
    short: "Histórico clínico e fichas de anamnese nos planos Solo e Clínica/Pro.",
    description:
      "O prontuário reúne consultas, exames, cirurgias, procedimentos, evolução clínica, prescrições, anexos e cobranças de cada paciente. Toda movimentação clínica fica registrada e disponível para consulta a qualquer momento — com rastreabilidade completa do atendimento.",
    bullets: [
      "Registro de consultas, exames, cirurgias e procedimentos",
      "Ficha de evolução clínica e prescrições",
      "Fichas de anamnese nos planos Solo e Clínica/Pro",
      "Anexos digitais vinculados ao paciente",
      "Aba financeira com o histórico de cobranças do atendimento",
    ],
    image: "/images/screens/prontuario-visao2.png",
    imageWidth: 1778,
    imageHeight: 885,
    imageAlt: "Visão geral do prontuário clínico do paciente no Smilo CRM",
    secondaryImage: "/images/screens/nova-consulta2.png",
    secondaryImageWidth: 1986,
    secondaryImageHeight: 792,
    secondaryImageAlt: "Registro de uma nova consulta no prontuário do Smilo CRM",
  },
  {
    slug: "agenda",
    icon: "CalendarDays",
    name: "Agenda de atendimentos",
    short: "Organize compromissos e conte com lembretes via WhatsApp no Clínica/Pro.",
    description:
      "Organize a semana da clínica com uma agenda simples de usar: cadastre compromissos para pacientes já existentes ou novos contatos, visualize a semana inteira de uma vez e edite ou cancele horários quando necessário.",
    bullets: [
      "Cadastro rápido de compromissos com telefone, data e hora",
      "Visão semanal de todos os agendamentos",
      "Lembretes de agenda via WhatsApp exclusivos do Clínica/Pro",
      "Edição e exclusão de compromissos existentes",
      "Vinculação automática com o cadastro do paciente",
    ],
    image: "/images/screens/agenda-semana.png",
    imageWidth: 1962,
    imageHeight: 802,
    imageAlt: "Visão semanal da agenda de atendimentos do Smilo CRM",
    secondaryImage: "/images/screens/agenda-cadastro.png",
    secondaryImageWidth: 1951,
    secondaryImageHeight: 806,
    secondaryImageAlt: "Cadastro de um novo compromisso na agenda do Smilo CRM",
  },
  {
    slug: "cobrancas",
    icon: "CreditCard",
    name: "Cobranças e financeiro",
    short: "Controle total sobre o que entrou e o que falta receber.",
    description:
      "Toda vez que um atendimento tem valor associado, o Smilo gera automaticamente uma cobrança vinculada ao paciente. Acompanhe o que está pago e o que está pendente, e dê baixa em pagamentos com poucos cliques — com uma confirmação de segurança antes de qualquer ação irreversível.",
    bullets: [
      "Geração automática de cobranças a partir do atendimento",
      "Visão clara do que está pago e do que está pendente",
      "Baixa de pagamentos com confirmação de segurança",
      "Histórico financeiro completo por paciente",
    ],
    image: "/images/screens/cobrancas-lista2.png",
    imageWidth: 1774,
    imageHeight: 887,
    imageAlt: "Relação de cobranças do sistema Smilo CRM",
    secondaryImage: "/images/screens/cobranca-detalhes2.png",
    secondaryImageWidth: 1880,
    secondaryImageHeight: 837,
    secondaryImageAlt: "Detalhes e baixa de uma cobrança no Smilo CRM",
  },
  {
    slug: "profissionais",
    icon: "Stethoscope",
    name: "Profissionais e dentistas",
    short: "Cadastro de dentistas com CRO, especialidades e status.",
    description:
      "Mantenha o corpo clínico da sua clínica organizado: cadastre dentistas com CRO, especialidades, endereço e contato, e acompanhe o financeiro por profissional. Ideal para clínicas com múltiplos dentistas ou redes odontológicas.",
    bullets: [
      "Cadastro com CRO, especialidades e dados de contato",
      "Consulta financeira por profissional",
      "Ativação e desativação de status com um clique",
      "Organização por especialidade clínica",
    ],
    image: "/images/screens/dentista-form.png",
    imageWidth: 1441,
    imageHeight: 585,
    imageAlt: "Formulário de cadastro de dentista no Smilo CRM",
    secondaryImage: dentistaLista,
    secondaryImageWidth: 1983,
    secondaryImageHeight: 793,
    secondaryImageAlt: "Lista de dentistas cadastrados no Smilo CRM",
  },
  { 
    slug: "servicos",
    icon: "Layers",
    name: "Serviços e procedimentos",
    short: "Cadastre consultas, exames, cirurgias e procedimentos com valor.",
    description:
      "Configure o catálogo de serviços da sua clínica — consultas, exames, cirurgias e procedimentos — com valores definidos. Essa classificação alimenta automaticamente as opções disponíveis no prontuário e garante que as cobranças sejam geradas corretamente.",
    bullets: [
      "Cadastro de serviços por tipo: consulta, exame, cirurgia ou procedimento",
      "Valores configuráveis por serviço",
      "Reflexo automático nas opções do prontuário",
      "Base para a geração correta de cobranças",
    ],
    image: "/images/screens/servicos-cadastro.png",
    imageWidth: 1229,
    imageHeight: 444,
    imageAlt: "Cadastro de serviços da clínica no Smilo CRM",
  },
  {
    slug: "usuarios",
    icon: "UserCog",
    name: "Usuários e permissões",
    short: "Controle de acesso por perfil, com o princípio do menor privilégio.",
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
  },
  {
    slug: "parametros",
    icon: "Settings2",
    name: "Parâmetros da clínica",
    short: "Dados institucionais usados em documentos e prontuários.",
    description:
      "Configure o nome, telefone e endereço da sua clínica uma única vez. Essas informações institucionais podem ser usadas em documentos e prontuários gerados pelo sistema, mantendo tudo padronizado.",
    bullets: [
      "Nome, telefone e endereço institucionais",
      "Base para documentos gerados pelo sistema",
      "Alteração restrita a usuários autorizados",
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
    price: "89",
    priceSuffix: "/mês",
    highlighted: false,
    ctaLabel: "Começar com o Solo",
    ctaHref:"https://app.smilocrm.com.br/cadastro?plano=solo",
    features: [
      "1 profissional",
      "Cadastro de pacientes",
      "Prontuário clínico completo",
      "Fichas de anamnese",
      "Cadastro de serviços e procedimentos",
      "Cobranças e controle financeiro",
      "Suporte por e-mail e WhatsApp",
    ],
  },
  {
    id: "clinica",
    name: "Clínica/Pro",
    description: "Para clínicas com equipe e mais de um dentista.",
    price: "199",
    priceSuffix: "/mês",
    highlighted: true,
    badge: "Mais escolhido",
    ctaLabel: "Começar com o Clínica/Pro",
    ctaHref:"https://app.smilocrm.com.br/cadastro?plano=pro",
    features: [
      "Profissionais ilimitados",
      "Tudo do plano Solo",
      "Agenda de atendimentos",
      "Lembretes de agenda via WhatsApp",
      "Usuários e permissões por perfil",
      "Relatórios financeiros avançados",
      "Suporte prioritário com canal dedicado",
    ],
  },
];

export const comparisonFeatures = [
  { label: "Profissionais (dentistas)", solo: "1", clinica: "Ilimitados" },
  { label: "Agenda de atendimentos", solo: false, clinica: true },
  { label: "Lembretes de agenda via WhatsApp", solo: false, clinica: true },
  { label: "Cadastro de pacientes", solo: true, clinica: true },
  { label: "Prontuário clínico completo", solo: true, clinica: true },
  { label: "Fichas de anamnese", solo: true, clinica: true },
  { label: "Serviços e procedimentos", solo: true, clinica: true },
  { label: "Cobranças e financeiro", solo: true, clinica: true },
  { label: "Usuários e permissões por perfil", solo: false, clinica: true },
  { label: "Relatórios financeiros avançados", solo: false, clinica: true },
  {
    label: "Suporte",
    solo: "E-mail e WhatsApp",
    clinica: "Prioritário + canal dedicado",
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
      "Não há limite de pacientes em nenhum plano, e ambos incluem fichas de anamnese. O Clínica/Pro também inclui agenda de atendimentos, lembretes de agenda via WhatsApp e recursos de gestão de equipe e suporte prioritário.",
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
