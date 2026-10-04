export const GA4_ID = "G-384RCVBJBY";

const localMap = {
  header: "cabecalho",
  header_mobile: "cabecalho_mobile",
  hero: "destaque_principal",
  hero_whatsapp: "destaque_principal",
  floating_whatsapp: "botao_flutuante",
  home_pricing: "planos_pagina_inicial",
  pricing_page: "pagina_precos",
  pricing_preview: "resumo_planos",
  whatsapp_showcase: "secao_whatsapp",
  cta_section: "secao_chamada",
  landing_intro: "introducao_landing",
};

function eventContext(link, browser) {
  return {
    nome_botao: link.dataset.buttonName || link.textContent?.trim() || "",
    pagina: browser.location.pathname,
    local_botao: localMap[link.dataset.buttonLocation] || link.dataset.buttonLocation || "conteudo",
  };
}

function sendGa4Event(browser, eventName, params) {
  browser.gtag("event", eventName, {
    send_to: GA4_ID,
    ...params,
  });
}

function destinationLabel(destination, browser) {
  if (destination.hostname === "app.smilo.com.br" && destination.pathname.startsWith("/cadastro")) {
    return "pagina_cadastro";
  }

  if (
    destination.origin === browser.location.origin &&
    destination.pathname === "/" &&
    destination.hash === "#planos"
  ) {
    return "secao_planos";
  }

  return destination.pathname || destination.hostname;
}

export function trackClick(link, browser = globalThis.window) {
  if (!browser || typeof browser.gtag !== "function" || !link) return;

  try {
    const destination = new URL(link.href, browser.location.href);
    const context = eventContext(link, browser);

    const isWhatsApp = ["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(destination.hostname);
    if (isWhatsApp) {
      sendGa4Event(browser, "clique_whatsapp", {
        ...context,
        destino: "whatsapp",
      });
      return;
    }

    const isPlanSelection = link.dataset.trackPlanClick === "true";
    const isFreeTrial = link.dataset.trackFreeTrialClick === "true";

    if (!isPlanSelection && !isFreeTrial) return;

    const plano =
      link.dataset.planName ||
      destination.searchParams.get("plano") ||
      (isFreeTrial && destination.hostname === "app.smilo.com.br" ? "solo" : "nao_selecionado");

    sendGa4Event(browser, "inicio_cadastro", {
      ...context,
      origem: isPlanSelection ? "planos" : "teste_gratis_site",
      plano,
      destino: destinationLabel(destination, browser),
    });
  } catch {
    // Analytics must never interrupt the link's normal navigation.
  }
}

// Mantém compatibilidade com o componente atual de rastreamento.
export const trackPlanClick = trackClick;
