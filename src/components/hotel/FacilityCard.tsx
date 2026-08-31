import type { Facility } from "@/data/hotel";

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div className="rounded-xl border border-black/10 p-5 hover:border-accent transition-colors">
      <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold">
        {facility.name.charAt(0)}
      </div>
      <h3 className="mt-3 font-semibold">{facility.name}</h3>
      <p className="text-sm text-black/60 mt-1">{facility.hours}</p>
      <p className="text-sm text-accent font-medium mt-1">{facility.price}</p>
    </div>
  );
}
