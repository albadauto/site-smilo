import assert from "node:assert/strict";
import test from "node:test";
import { trackPlanClick } from "./analytics.mjs";

const link = (href) => ({ href, textContent: " Ver planos ", dataset: { buttonLocation: "hero" } });
const location = new URL("https://www.smilocrm.com.br/funcionalidades");

test("sends the event and source parameters for pricing and plan section links", () => {
  for (const href of ["/precos", "/precos/", "/#planos"]) {
    const calls = [];
    trackPlanClick(link(href), { location, gtag: (...args) => calls.push(args) });
    assert.deepEqual(calls, [["event", "plan_btn_click", {
      send_to: "G-384RCVBJBY", button_name: "Ver planos",
      page_path: "/funcionalidades", button_location: "hero",
    }]]);
  }
});

test("ignores unrelated and external destinations", () => {
  for (const href of ["/contato", "https://example.com/precos", "/funcionalidades#planos"]) {
    let calls = 0;
    trackPlanClick(link(href), { location, gtag: () => calls++ });
    assert.equal(calls, 0);
  }
});

test("is safe on the server, before gtag loads, and when analytics throws", () => {
  assert.doesNotThrow(() => trackPlanClick(link("/precos")));
  assert.doesNotThrow(() => trackPlanClick(link("/precos"), { location }));
  assert.doesNotThrow(() => trackPlanClick(link("/precos"), { location, gtag() { throw new Error("blocked"); } }));
});

test("tracks plan signup buttons and keeps the Google Ads conversion", () => {
  for (const page of ["/precos", "/"]) {
    for (const plan of ["solo", "pro"]) {
      const calls = [];
      const cta = link(`https://app.smilocrm.com.br/cadastro?plano=${plan}`);
      const originalHref = cta.href;
      cta.dataset = {
        trackPlanClick: "true",
        trackFreeTrialClick: plan === "solo" ? "true" : undefined,
        trackProPlanClick: plan === "pro" ? "true" : undefined,
        planName: plan,
        buttonName: `Começar ${plan}`,
        buttonLocation: page === "/" ? "home_pricing" : "pricing_page",
      };
      trackPlanClick(cta, { location: new URL(page, location), gtag: (...args) => calls.push(args) });
      const eventNames = calls.map((call) => call[1]);
      assert.ok(eventNames.includes("plan_btn_click"));
      assert.ok(eventNames.includes(plan === "solo" ? "free_trial_click" : "pro_plan_click"));
      assert.equal(calls.at(-1)[1], "conversion");
      assert.deepEqual(calls.at(-1)[2], {
        send_to: "AW-18437044843/Jy_bCPK9xvEcEOv0u9dE",
        value: 1.0,
        currency: "BRL",
      });
      assert.equal(cta.href, originalHref);
    }
  }
});

test("tracks the same-page header anchor on the home page", () => {
  const calls = [];
  trackPlanClick(link("#planos"), { location: new URL("/", location), gtag: (...args) => calls.push(args) });
  assert.equal(calls.length, 1);
  assert.equal(calls[0][2].page_path, "/");
});

test("tracks WhatsApp clicks with source context", () => {
  const calls = [];
  const whatsapp = link("https://wa.me/5511999999999");
  whatsapp.dataset = { buttonName: "Falar no WhatsApp", buttonLocation: "hero_whatsapp" };
  trackPlanClick(whatsapp, { location: new URL("/", location), gtag: (...args) => calls.push(args) });
  assert.deepEqual(calls, [["event", "whatsapp_click", {
    send_to: "G-384RCVBJBY",
    button_name: "Falar no WhatsApp",
    page_path: "/",
    button_location: "hero_whatsapp",
  }]]);
});

test("tracks free trial clicks from the header", () => {
  const calls = [];
  const freeTrial = link("/#planos");
  freeTrial.dataset = { trackFreeTrialClick: "true", buttonName: "Teste Grátis", buttonLocation: "header" };
  trackPlanClick(freeTrial, { location: new URL("/", location), gtag: (...args) => calls.push(args) });
  assert.equal(calls[0][1], "free_trial_click");
  assert.equal(calls[1][1], "plan_btn_click");
});
