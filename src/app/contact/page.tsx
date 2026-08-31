import type { Metadata } from "next";
import { contact } from "@/data/hotel";
import AskAICta from "@/components/ai/AskAICta";
import ContactForm from "@/components/hotel/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Sunrise Hotel",
  description: "Contact Sunrise Hotel in Famagusta, Cyprus.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 mx-auto max-w-5xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
      <p className="mt-3 text-black/60 max-w-2xl">
        Reach out directly, or ask the AI Assistant for instant answers.
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-xl border border-black/10 p-5">
            <p className="text-sm text-black/50">Phone</p>
            <p className="font-medium">{contact.phone}</p>
          </div>
          <div className="rounded-xl border border-black/10 p-5">
            <p className="text-sm text-black/50">Reception</p>
            <p className="font-medium">{contact.reception}</p>
          </div>
          <div className="rounded-xl border border-black/10 p-5">
            <p className="text-sm text-black/50">WhatsApp</p>
            <p className="font-medium">{contact.whatsapp}</p>
          </div>
          <div className="rounded-xl border border-black/10 p-5">
            <p className="text-sm text-black/50">Email</p>
            <p className="font-medium">{contact.email}</p>
          </div>
          <div className="rounded-xl border border-black/10 p-5">
            <p className="text-sm text-black/50">Address</p>
            <p className="font-medium">{contact.address}</p>
          </div>

          <AskAICta
            label="Ask the AI Assistant"
            className="mt-4 inline-block bg-accent text-black rounded-full px-6 py-3 font-semibold hover:opacity-90 transition"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-black/40 mb-3">
            Demo only — this form does not send messages
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
