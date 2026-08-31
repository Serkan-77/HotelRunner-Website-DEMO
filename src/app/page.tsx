import Image from "next/image";
import Link from "next/link";
import {
  hotel,
  contact,
  rooms,
  facilities,
  dining,
  activities,
  nearby,
  suggestedQuestions,
} from "@/data/hotel";
import RoomCard from "@/components/hotel/RoomCard";
import FacilityCard from "@/components/hotel/FacilityCard";
import ActivityCard from "@/components/hotel/ActivityCard";
import AskAICta from "@/components/ai/AskAICta";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop"
          alt="Sunrise Hotel exterior overlooking the Mediterranean coast"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />

        <div className="max-w-2xl px-4">
          <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">Sunrise Hotel</p>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Stay Comfortable.
            <br />
            Experience Famagusta.
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            A modern 4-star stay designed around comfort, convenience and warm hospitality.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rooms"
              className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:bg-white/90 transition"
            >
              Explore Rooms
            </Link>
            <AskAICta
              label="Ask Our AI Assistant"
              className="bg-accent text-black rounded-full px-6 py-3 font-semibold hover:opacity-90 transition"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">{hotel.name}</h2>
        <p className="mt-2 text-accent font-medium">{hotel.category} &middot; {hotel.location}</p>
        <p className="mt-6 text-black/70 leading-relaxed">{hotel.fullDescription}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-black/60">
          <span className="border border-black/15 rounded-full px-4 py-1.5">Check-in {hotel.checkIn}</span>
          <span className="border border-black/15 rounded-full px-4 py-1.5">Check-out {hotel.checkOut}</span>
          <span className="border border-black/15 rounded-full px-4 py-1.5">Reception {hotel.reception}</span>
          <span className="border border-black/15 rounded-full px-4 py-1.5">
            {hotel.languages.join(" / ")}
          </span>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="bg-black/[0.03] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Rooms</h2>
            <Link href="/rooms" className="text-sm font-medium hover:text-accent">
              View all rooms &rarr;
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Facilities</h2>
            <Link href="/facilities" className="text-sm font-medium hover:text-accent">
              View all facilities &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {facilities.map((f) => (
              <FacilityCard key={f.name} facility={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Dining preview */}
      <section className="bg-black/[0.03] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Dining</h2>
            <Link href="/dining" className="text-sm font-medium hover:text-accent">
              View dining &rarr;
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
              <div className="relative h-48">
                <Image src={dining.restaurant.image} alt={dining.restaurant.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{dining.restaurant.name}</h3>
                <p className="text-sm text-black/60 mt-1">{dining.restaurant.description}</p>
                <p className="text-sm text-accent font-medium mt-2">{dining.restaurant.hours}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
              <div className="relative h-48">
                <Image src={dining.bar.image} alt={dining.bar.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{dining.bar.name}</h3>
                <p className="text-sm text-black/60 mt-1">{dining.bar.description}</p>
                <p className="text-sm text-accent font-medium mt-2">{dining.bar.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Experiences</h2>
            <Link href="/experiences" className="text-sm font-medium hover:text-accent">
              View all experiences &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {activities.map((a) => (
              <ActivityCard key={a.name} activity={a} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant section */}
      <section id="ai-assistant" className="bg-black text-white py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">AI Assistant</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Your Stay, One Question Away.</h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Meet the Sunrise Hotel AI Assistant. Ask about rooms, hotel facilities, dining,
            activities, availability, prices, location or your reservation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {suggestedQuestions.map((q) => (
              <span
                key={q}
                className="text-sm border border-white/20 rounded-full px-4 py-2 text-white/80"
              >
                {q}
              </span>
            ))}
          </div>

          <AskAICta
            label="Ask the AI Assistant"
            className="mt-10 inline-block bg-accent text-black rounded-full px-8 py-3 font-semibold hover:opacity-90 transition"
          />
        </div>
      </section>

      {/* Location preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Location</h2>
            <p className="mt-3 text-black/60">
              {hotel.name} &middot; {contact.address}
            </p>
            <ul className="mt-6 space-y-3">
              {nearby.map((n) => (
                <li key={n.name} className="flex justify-between text-sm border-b border-black/10 pb-3">
                  <span className="font-medium">{n.name}</span>
                  <span className="text-black/60">{n.distance} &middot; {n.time}</span>
                </li>
              ))}
            </ul>
            <Link href="/location" className="mt-6 inline-block text-sm font-medium hover:text-accent">
              View full map &rarr;
            </Link>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border border-black/10">
            <iframe
              title="Sunrise Hotel location map"
              className="w-full h-full"
              loading="lazy"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${contact.lng - 0.02}%2C${contact.lat - 0.02}%2C${contact.lng + 0.02}%2C${contact.lat + 0.02}&layer=mapnik&marker=${contact.lat}%2C${contact.lng}`}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black/[0.03] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Plan Your Stay</h2>
          <p className="mt-3 text-black/60">
            Reach out directly, or ask the AI Assistant for instant answers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="border border-black rounded-full px-6 py-3 font-medium hover:bg-black hover:text-white transition"
            >
              Contact Us
            </Link>
            <AskAICta
              label="Ask Our AI Assistant"
              className="bg-accent text-black rounded-full px-6 py-3 font-semibold hover:opacity-90 transition"
            />
          </div>
        </div>
      </section>
    </>
  );
}
