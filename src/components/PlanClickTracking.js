"use client";

import { useEffect } from "react";
import { trackPlanClick } from "@/lib/analytics.mjs";

export default function PlanClickTracking() {
  useEffect(() => {
    function handleClick(event) {
      if (event.target instanceof Element) {
        trackPlanClick(event.target.closest("a[href]"));
      }
    }

    // Capture the link before a mobile menu closes and removes it from the DOM.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
