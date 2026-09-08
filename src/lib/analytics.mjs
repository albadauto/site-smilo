export function trackPlanClick(link, browser = globalThis.window) {
  if (!browser || typeof browser.gtag !== "function" || !link) return;

  try {
    const destination = new URL(link.href, browser.location.href);
    const isPlansLink = destination.origin === browser.location.origin && (
      destination.pathname.replace(/\/$/, "") === "/precos" ||
      (destination.pathname === "/" && destination.hash === "#planos")
    );
    const isPlanSelection = link.dataset.trackPlanClick === "true";
    if (!isPlansLink && !isPlanSelection) return;

    browser.gtag("event", "plan_btn_click", {
      send_to: "G-JCVRV0TW3H",
      button_name: link.dataset.buttonName || link.textContent.trim(),
      page_path: browser.location.pathname,
      button_location: link.dataset.buttonLocation || "content",
    });
  } catch {
    // Analytics must never interrupt the link's normal navigation.
  }
}
