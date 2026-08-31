"use client";

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 w-full border border-black/15 rounded-lg px-3 py-2 text-sm focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full border border-black/15 rounded-lg px-3 py-2 text-sm focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full border border-black/15 rounded-lg px-3 py-2 text-sm focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="border border-black rounded-full px-6 py-2.5 text-sm font-medium hover:bg-black hover:text-white transition"
      >
        Send (Demo)
      </button>
    </form>
  );
}
