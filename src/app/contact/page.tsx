import type { Metadata } from "next";
import { contact } from "@/data/hotel";
import AskAICta from "@/components/ai/AskAICta";
import ContactForm from "@/components/hotel/ContactForm";
import Icon from "@/components/hotel/Icon";

const contactItems = [
  { label: "Phone", value: contact.phone, icon: "phone" },
  { label: "Reception", value: contact.reception, icon: "clock" },
  { label: "WhatsApp", value: contact.whatsapp, icon: "whatsapp" },
  { label: "Email", value: contact.email, icon: "mail" },
  { label: "Address", value: contact.address, icon: "pin" },
];

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
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="group flex items-center gap-4 rounded-xl border border-black/10 p-5 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 shrink-0 rounded-full bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                <Icon name={item.icon} />
              </div>
              <div>
                <p className="text-sm text-black/50">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            </div>
          ))}

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
