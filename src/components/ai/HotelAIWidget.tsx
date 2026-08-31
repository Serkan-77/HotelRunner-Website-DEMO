"use client";

import Script from "next/script";
import { useRef } from "react";

declare global {
  interface Window {
    cmndChat?: (
      command: string,
      options?: {
        chatbot_id?: number;
        organization_id?: number;
      }
    ) => void;
  }
}

/**
 * Real CMND.ai chatbot widget integration.
 * Renders once, globally, from the root layout.
 */
export default function HotelAIWidget() {
  const initialized = useRef(false);

  const initializeChatbot = () => {
    if (
      initialized.current ||
      typeof window === "undefined" ||
      typeof window.cmndChat !== "function"
    ) {
      return;
    }

    window.cmndChat("init", {
      chatbot_id: 349,
      organization_id: 102,
    });

    initialized.current = true;
  };

  return (
    <Script
      src="https://embed.cmnd.ai/widget.js"
      strategy="afterInteractive"
      onLoad={initializeChatbot}
    />
  );
}

/**
 * Best-effort helper for "Ask AI" buttons across the site.
 * CMND.ai currently only documents an "init" command, so there is no
 * confirmed "open" / "focus" command to call here. This scrolls the
 * page to the widget area as a safe fallback; replace the body with
 * the official CMND open command if/when one is published.
 */
export function askAI() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("sunrise:ask-ai"));
}
