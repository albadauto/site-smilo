import assert from "node:assert/strict";
import test from "node:test";
import { trackPlanClick } from "./analytics.mjs";

const link = (href) => ({ href, textContent: " Ver planos ", dataset: { buttonLocation: "hero" } });
const location = new URL("https://smilo.com.br/funcionalidades");

test("ignores navigation links that are not tracked actions", () => {
  for (const href of ["/precos", "/precos/", "/#planos", "/contato", "https://example.com/precos"]) {
    let calls = 0;
    trackPlanClick(link(href), { location, gtag: () => calls++ });
    assert.equal(calls, 0);
  }
});

test("is safe on the server, before gtag loads, and when analytics throws", () => {
  assert.doesNotThrow(() => trackPlanClick(link("/precos")));
  assert.doesNotThrow(() => trackPlanClick(link("/precos"), { location }));
  assert.doesNotThrow(() =>
    trackPlanClick(link("/precos"), {
      location,
      gtag() {
        throw new Error("blocked");
      },
    }),
  );
});

test("tracks Solo and Pro plan buttons as inicio_cadastro", () => {
  for (const page of ["/precos", "/"]) {
    for (const plan of ["solo", "pro"]) {
      const calls = [];
      const cta = link(`https://app.smilo.com.br/cadastro?plano=${plan}`);
      cta.dataset = {
        trackPlanClick: "true",
        trackFreeTrialClick: plan === "solo" ? "true" : undefined,
        planName: plan,
        buttonName: `Começar ${plan}`,
        buttonLocation: page === "/" ? "home_pricing" : "pricing_page",
      };

      trackPlanClick(cta, {
        location: new URL(page, location),
        gtag: (...args) => calls.push(args),
      });

      assert.deepEqual(calls, [
        [
          "event",
          "inicio_cadastro",
          {
            send_to: "G-384RCVBJBY",
            nome_botao: `Começar ${plan}`,
            pagina: page,
            local_botao: page === "/" ? "planos_pagina_inicial" : "pagina_precos",
            origem: "planos",
            plano: plan,
            destino: "pagina_cadastro",
          },
        ],
      ]);
    }
  }
});

test("tracks WhatsApp clicks with clear Portuguese context", () => {
  const calls = [];
  const whatsapp = link("https://wa.me/5511999999999");
  whatsapp.dataset = {
    buttonName: "Falar no WhatsApp",
    buttonLocation: "hero_whatsapp",
  };

  trackPlanClick(whatsapp, {
    location: new URL("/", location),
    gtag: (...args) => calls.push(args),
  });

  assert.deepEqual(calls, [
    [
      "event",
      "clique_whatsapp",
      {
        send_to: "G-384RCVBJBY",
        nome_botao: "Falar no WhatsApp",
        pagina: "/",
        local_botao: "destaque_principal",
        destino: "whatsapp",
      },
    ],
  ]);
});

test("tracks site free trial button going to signup", () => {
  const calls = [];
  const freeTrial = link("https://app.smilo.com.br/cadastro?plano=solo");
  freeTrial.dataset = {
    trackFreeTrialClick: "true",
    buttonName: "Teste Grátis",
    buttonLocation: "header",
  };

  trackPlanClick(freeTrial, {
    location: new URL("/", location),
    gtag: (...args) => calls.push(args),
  });

  assert.deepEqual(calls, [
    [
      "event",
      "inicio_cadastro",
      {
        send_to: "G-384RCVBJBY",
        nome_botao: "Teste Grátis",
        pagina: "/",
        local_botao: "cabecalho",
        origem: "teste_gratis_site",
        plano: "solo",
        destino: "pagina_cadastro",
      },
    ],
  ]);
});

test("tracks free trial CTA that only opens the plans section", () => {
  const calls = [];
  const freeTrial = link("/#planos");
  freeTrial.dataset = {
    trackFreeTrialClick: "true",
    buttonName: "Faça um teste grátis",
    buttonLocation: "whatsapp_showcase",
  };

  trackPlanClick(freeTrial, {
    location: new URL("/", location),
    gtag: (...args) => calls.push(args),
  });

  assert.deepEqual(calls, [
    [
      "event",
      "inicio_cadastro",
      {
        send_to: "G-384RCVBJBY",
        nome_botao: "Faça um teste grátis",
        pagina: "/",
        local_botao: "secao_whatsapp",
        origem: "teste_gratis_site",
        plano: "nao_selecionado",
        destino: "secao_planos",
      },
    ],
  ]);
});
