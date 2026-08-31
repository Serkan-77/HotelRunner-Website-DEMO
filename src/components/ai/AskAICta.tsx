"use client";

import { askAI } from "@/components/ai/HotelAIWidget";

export default function AskAICta({
  label = "Ask the AI Assistant",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button onClick={askAI} className={className}>
      {label}
    </button>
  );
}
