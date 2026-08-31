import type { Metadata } from "next";
import { rooms } from "@/data/hotel";
import RoomCard from "@/components/hotel/RoomCard";

export const metadata: Metadata = {
  title: "Rooms | Sunrise Hotel",
  description: "Explore Standard, Deluxe and Family rooms at Sunrise Hotel, Famagusta.",
};

export default function RoomsPage() {
  return (
    <section className="pt-32 pb-20 mx-auto max-w-6xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Rooms</h1>
      <p className="mt-3 text-black/60 max-w-2xl">
        Comfortable, non-smoking rooms designed for couples, solo travelers and families.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
