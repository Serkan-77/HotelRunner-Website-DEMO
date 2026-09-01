import type { Activity } from "@/data/hotel";

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="relative rounded-xl border border-black/10 p-5 pl-6 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />
      <h3 className="font-semibold">{activity.name}</h3>
      <p className="text-sm text-black/60 mt-1">{activity.days} &middot; {activity.hours}</p>
      <p className="text-sm text-black/60">{activity.location}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-accent font-medium">{activity.price}</span>
        {activity.note && (
          <span className="text-xs text-black/50 border border-black/10 rounded-full px-2.5 py-0.5">
            {activity.note}
          </span>
        )}
      </div>
    </div>
  );
}
