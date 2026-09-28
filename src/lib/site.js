// Constantes centrais do site — endereço, contatos e configuração de SEO.
// Baseado no Manual do Usuário — Smilo CRM (v1.0) e nas informações de suporte
// e contato registradas nele.

export const siteConfig = {
  name: "Smilo",
  fullName: "Smilo CRM",
  legalName: "Mindit Soluções Digitais",
  tagline: "O sistema de gestão odontológica com um agente de IA dentro",
  description:
    "Smilo é o sistema de gestão odontológica completo com Smilo AI: agenda, prontuário eletrônico, pacientes, cobranças e financeiro conectados a um agente de IA.",
  url: "https://www.smilo.com.br",
  domain: "smilo.com.br",
  ogImage: "/images/brand/og-image.png",
  locale: "pt_BR",
  email: "contato@mindit.dev",
  phone: "(11) 94921-4071",
  phoneE164: "+5511949214071",
  whatsappNumber: "5511949214071",
  freeTrialUrl: "https://app.smilo.com.br/cadastro?plano=solo",
  supportHours: "Segunda a sexta-feira, das 9h às 18h",
  keywords: [
    "software de gestão odontológica",
    "sistema para clínica odontológica",
    "CRM odontológico",
    "software para dentista",
    "prontuário eletrônico odontológico",
    "agenda para clínica odontológica",
    "gestão de clínica odontológica",
    "sistema para dentista",
    "software odontológico",
    "Smilo CRM",
    "IA para clínica odontológica",
    "agente de IA odontológico",
  ],
};

export function whatsappLink(message) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/#smilo-ai", label: "Smilo AI" },
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/precos", label: "Preços" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export const defaultWhatsappMessage =
  "Olá! Vi o site do Smilo e quero saber mais sobre o sistema para minha clínica.";
