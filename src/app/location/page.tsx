import type { Metadata } from "next";
import { hotel, contact, nearby, policies } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Location | Sunrise Hotel",
  description: "Find Sunrise Hotel in Famagusta, Cyprus, near the beach and city center.",
};

export default function LocationPage() {
  return (
    <section className="pt-32 pb-20 mx-auto max-w-6xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Location</h1>
      <p className="mt-3 text-black/60 max-w-2xl">
        {hotel.name} &middot; {contact.address}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 items-start">
        <div className="aspect-video rounded-2xl overflow-hidden border border-black/10">
          <iframe
            title="Sunrise Hotel location map"
            className="w-full h-full"
            loading="lazy"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${contact.lng - 0.02}%2C${contact.lat - 0.02}%2C${contact.lng + 0.02}%2C${contact.lat + 0.02}&layer=mapnik&marker=${contact.lat}%2C${contact.lng}`}
          />
        </div>
        <ul className="space-y-3">
          {nearby.map((n) => (
            <li key={n.name} className="flex justify-between text-sm border-b border-black/10 pb-3">
              <span className="font-medium">{n.name}</span>
              <span className="text-black/60">{n.distance} &middot; {n.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mt-20">Hotel Policies</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {policies.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-black/10 p-5 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-black/60 mt-1">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
