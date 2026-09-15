// Constantes centrais do site — endereço, contatos e configuração de SEO.
// Baseado no Manual do Usuário — Smilo CRM (v1.0) e nas informações de suporte
// e contato registradas nele.

export const siteConfig = {
  name: "Smilo",
  fullName: "Smilo CRM",
  legalName: "Mindit Soluções Digitais",
  tagline: "O software de gestão odontológica que sua clínica merece",
  description:
    "Smilo é o software de gestão odontológica completo: agenda, prontuário eletrônico, pacientes, cobranças e financeiro em um só sistema. Teste grátis por 7 dias.",
  url: "https://www.smilocrm.com.br",
  domain: "smilocrm.com.br",
  ogImage: "/images/brand/og-image.png",
  locale: "pt_BR",
  email: "contato@mindit.dev",
  phone: "(11) 94921-4071",
  phoneE164: "+5511949214071",
  whatsappNumber: "5511949214071",
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
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export const defaultWhatsappMessage =
  "Olá! Vi o site do Smilo e quero saber mais sobre o sistema para minha clínica.";
