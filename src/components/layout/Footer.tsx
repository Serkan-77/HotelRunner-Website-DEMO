import Link from "next/link";
import { hotel, contact } from "@/data/hotel";

export default function Footer() {
  return (
    <footer className="bg-black text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold text-lg">
            SUNRISE <span className="text-accent">HOTEL</span>
          </h3>
          <p className="mt-2 text-sm">{hotel.location}</p>
          <p className="mt-1 text-sm">{hotel.category}</p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/rooms" className="hover:text-accent">Rooms</Link></li>
            <li><Link href="/facilities" className="hover:text-accent">Facilities</Link></li>
            <li><Link href="/dining" className="hover:text-accent">Dining</Link></li>
            <li><Link href="/experiences" className="hover:text-accent">Experiences</Link></li>
            <li><Link href="/location" className="hover:text-accent">Location</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <li>{contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        <p>&copy; {new Date().getFullYear()} Sunrise Hotel</p>
        <p className="mt-1">AI Guest Experience Demo</p>
      </div>
    </footer>
  );
}
