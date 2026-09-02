// Constantes centrais do site — endereço, contatos e configuração de SEO.
// Baseado no Manual do Usuário — Smilo CRM (v1.0) e nas informações de suporte
// e contato registradas nele.

export const siteConfig = {
  name: "Smilo",
  fullName: "Smilo CRM",
  legalName: "Mindit Soluções Digitais",
  tagline: "O sistema de gestão que sua clínica odontológica merece",
  description:
    "Smilo é o CRM completo para clínicas odontológicas: agenda, prontuário clínico, pacientes, cobranças e financeiro em um único sistema. Organize sua clínica e atenda mais, com menos trabalho manual.",
  url: "https://www.smiloerp.com.br",
  domain: "smiloerp.com.br",
  ogImage: "/images/brand/og-image.png",
  locale: "pt_BR",
  email: "contato@mindit.dev",
  phone: "(11) 99002-9866",
  phoneE164: "+5511990029866",
  whatsappNumber: "5511990029866",
  supportHours: "Segunda a sexta-feira, das 9h às 18h",
  keywords: [
    "sistema para clínica odontológica",
    "CRM odontológico",
    "software para dentista",
    "prontuário eletrônico odontológico",
    "agenda para clínica odontológica",
    "gestão de clínica odontológica",
    "sistema para dentista",
    "software odontológico",
    "Smilo CRM",
  ],
};

export function whatsappLink(message) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/precos", label: "Preços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export const defaultWhatsappMessage =
  "Olá! Vi o site do Smilo e quero saber mais sobre o sistema para minha clínica.";
