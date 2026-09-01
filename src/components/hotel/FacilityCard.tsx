import type { Facility } from "@/data/hotel";
import Icon from "@/components/hotel/Icon";

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div className="group rounded-xl border border-black/10 p-5 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
        <Icon name={facility.icon} />
      </div>
      <h3 className="mt-4 font-semibold">{facility.name}</h3>
      <p className="text-sm text-black/60 mt-1">{facility.hours}</p>
      <p className="text-sm text-accent font-medium mt-1">{facility.price}</p>
    </div>
  );
}
