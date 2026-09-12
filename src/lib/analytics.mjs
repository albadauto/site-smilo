export const GA4_ID = "G-384RCVBJBY";
export const GOOGLE_ADS_CONVERSION_ID = "AW-18437044843/Jy_bCPK9xvEcEOv0u9dE";

function eventContext(link, browser) {
  return {
    button_name: link.dataset.buttonName || link.textContent?.trim() || "",
    page_path: browser.location.pathname,
    button_location: link.dataset.buttonLocation || "content",
  };
}

function sendGa4Event(browser, eventName, params) {
  browser.gtag("event", eventName, {
    send_to: GA4_ID,
    ...params,
  });
}

export function trackClick(link, browser = globalThis.window) {
  if (!browser || typeof browser.gtag !== "function" || !link) return;

  try {
    const destination = new URL(link.href, browser.location.href);
    const context = eventContext(link, browser);

    const isWhatsApp = ["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(destination.hostname);
    if (isWhatsApp) {
      sendGa4Event(browser, "whatsapp_click", context);
      return;
    }

    const isPlansLink = destination.origin === browser.location.origin && (
      destination.pathname.replace(/\/$/, "") === "/precos" ||
      (destination.pathname === "/" && destination.hash === "#planos")
    );
    const isPlanSelection = link.dataset.trackPlanClick === "true";
    const isFreeTrial = link.dataset.trackFreeTrialClick === "true";
    const isProPlan = link.dataset.trackProPlanClick === "true" ||
      destination.searchParams.get("plano") === "pro";

    if (isFreeTrial) {
      sendGa4Event(browser, "free_trial_click", context);
    }

    if (isPlansLink || isPlanSelection) {
      sendGa4Event(browser, "plan_btn_click", context);
    }

    if (isPlanSelection && isProPlan) {
      sendGa4Event(browser, "pro_plan_click", {
        ...context,
        plan_name: link.dataset.planName || "clinica_pro",
      });
    }

    if (isPlanSelection) {
      browser.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_ID,
        value: 1.0,
        currency: "BRL",
      });
    }
  } catch {
    // Analytics must never interrupt the link's normal navigation.
  }
}

// Backward-compatible export used by existing code/tests.
export const trackPlanClick = trackClick;
