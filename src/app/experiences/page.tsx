import type { Metadata } from "next";
import { activities } from "@/data/hotel";
import ActivityCard from "@/components/hotel/ActivityCard";

export const metadata: Metadata = {
  title: "Experiences | Sunrise Hotel",
  description: "Live music, pool activities and morning yoga at Sunrise Hotel, Famagusta.",
};

export default function ExperiencesPage() {
  return (
    <section className="pt-32 pb-20 mx-auto max-w-6xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Experiences</h1>
      <p className="mt-3 text-black/60 max-w-2xl">
        Weekly activities to enjoy during your stay.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((a) => (
          <ActivityCard key={a.name} activity={a} />
        ))}
      </div>
    </section>
  );
}
