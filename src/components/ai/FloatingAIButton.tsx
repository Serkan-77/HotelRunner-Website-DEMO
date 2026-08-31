"use client";

import { askAI } from "@/components/ai/HotelAIWidget";

export default function FloatingAIButton() {
  return (
    <button
      onClick={askAI}
      aria-label="Ask the Sunrise Hotel AI Assistant"
      className="fixed bottom-6 right-6 z-40 bg-accent text-black font-semibold rounded-full px-5 py-3 shadow-lg hover:opacity-90 transition"
    >
      Ask AI
    </button>
  );
}
