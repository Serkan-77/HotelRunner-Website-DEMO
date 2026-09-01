import type { Metadata } from "next";
import { facilities, services } from "@/data/hotel";
import FacilityCard from "@/components/hotel/FacilityCard";
import Icon from "@/components/hotel/Icon";

export const metadata: Metadata = {
  title: "Facilities | Sunrise Hotel",
  description: "Pool, Wi-Fi, parking, fitness center and more at Sunrise Hotel, Famagusta.",
};

export default function FacilitiesPage() {
  return (
    <section className="pt-32 pb-20 mx-auto max-w-6xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Facilities</h1>
      <p className="mt-3 text-black/60 max-w-2xl">
        Everything you need for a comfortable stay, included with your room.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {facilities.map((f) => (
          <FacilityCard key={f.name} facility={f} />
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mt-20">Services</h2>
      <p className="mt-3 text-black/60 max-w-2xl">Additional guest services, available on request.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.name}
            className="group flex items-start gap-4 rounded-xl border border-black/10 p-5 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="w-11 h-11 shrink-0 rounded-full bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
              <Icon name={s.icon} />
            </div>
            <div>
              <h3 className="font-semibold">{s.name}</h3>
              <p className="text-sm text-black/60 mt-1">{s.hours}</p>
              <p className="text-sm text-accent font-medium mt-1">{s.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
