import type { Activity } from "@/data/hotel";

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="rounded-xl border border-black/10 p-5">
      <h3 className="font-semibold">{activity.name}</h3>
      <p className="text-sm text-black/60 mt-1">{activity.days} &middot; {activity.hours}</p>
      <p className="text-sm text-black/60">{activity.location}</p>
      <p className="text-sm text-accent font-medium mt-2">{activity.price}</p>
      {activity.note && <p className="text-xs text-black/50 mt-1">{activity.note}</p>}
    </div>
  );
}
