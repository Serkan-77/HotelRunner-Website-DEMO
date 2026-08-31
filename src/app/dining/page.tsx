import type { Metadata } from "next";
import Image from "next/image";
import { dining } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Dining | Sunrise Hotel",
  description: "Sunrise Restaurant and Sunset Bar at Sunrise Hotel, Famagusta.",
};

export default function DiningPage() {
  return (
    <section className="pt-32 pb-20 mx-auto max-w-6xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Dining</h1>
      <p className="mt-3 text-black/60 max-w-2xl">
        Breakfast, restaurant and bar service for every part of your day.
      </p>

      <div className="mt-10 rounded-xl border border-black/10 p-6">
        <h2 className="font-semibold text-lg">{dining.breakfast.name}</h2>
        <p className="text-sm text-black/60 mt-1">
          {dining.breakfast.type} &middot; {dining.breakfast.hours} &middot; {dining.breakfast.location}
        </p>
        <p className="text-xs text-black/50 mt-2">{dining.breakfast.note}</p>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
          <div className="relative h-56">
            <Image src={dining.restaurant.image} alt={dining.restaurant.name} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-lg">{dining.restaurant.name}</h3>
            <p className="text-sm text-black/60 mt-1">{dining.restaurant.description}</p>
            <p className="text-sm text-accent font-medium mt-2">{dining.restaurant.hours}</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
          <div className="relative h-56">
            <Image src={dining.bar.image} alt={dining.bar.name} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-lg">{dining.bar.name}</h3>
            <p className="text-sm text-black/60 mt-1">{dining.bar.description}</p>
            <p className="text-sm text-accent font-medium mt-2">{dining.bar.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
