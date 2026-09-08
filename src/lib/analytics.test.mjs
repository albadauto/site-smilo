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
      send_to: "G-JCVRV0TW3H", button_name: "Ver planos",
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
