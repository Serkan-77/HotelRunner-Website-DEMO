"use client";

import Image from "next/image";
import type { Room } from "@/data/hotel";
import { askAI } from "@/components/ai/HotelAIWidget";

export default function RoomCard({ room }: { room: Room }) {
  // Placeholder context for a future CMND.ai prefill — not a real chatbot call yet.
  const handleAskAI = () => {
    console.log(`AI context (placeholder): Tell me about the ${room.name}`);
    askAI();
  };

  return (
    <div className="group rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-xl transition-shadow">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} at Sunrise Hotel`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{room.name}</h3>
        <p className="mt-1 text-sm text-black/60">{room.description}</p>

        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-black/70">
          <li className="border border-black/15 rounded-full px-3 py-1">
            {room.capacity} guests
          </li>
          <li className="border border-black/15 rounded-full px-3 py-1">
            {room.adultCapacity} adults
          </li>
          <li className="border border-black/15 rounded-full px-3 py-1">{room.policy}</li>
        </ul>

        <div className="mt-5 flex gap-3">
          <button className="flex-1 border border-black rounded-full text-sm py-2 font-medium hover:bg-black hover:text-white transition">
            View Details
          </button>
          <button
            onClick={handleAskAI}
            className="flex-1 bg-accent text-black rounded-full text-sm py-2 font-semibold hover:opacity-90 transition"
          >
            Ask AI About This Room
          </button>
        </div>
      </div>
    </div>
  );
}
