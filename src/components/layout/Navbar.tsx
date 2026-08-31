"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { askAI } from "@/components/ai/HotelAIWidget";

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/facilities", label: "Facilities" },
  { href: "/dining", label: "Dining" },
  { href: "/experiences", label: "Experiences" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? "bg-black/90 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-white font-semibold tracking-wide text-lg">
          SUNRISE <span className="text-accent">HOTEL</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-sm text-white/90">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={askAI}
            className="bg-accent text-black font-semibold text-sm px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            Ask AI
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4">
          <ul className="flex flex-col gap-4 text-white/90">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setOpen(false);
              askAI();
            }}
            className="mt-4 w-full bg-accent text-black font-semibold text-sm px-4 py-2 rounded-full"
          >
            Ask AI
          </button>
        </div>
      )}
    </header>
  );
}
