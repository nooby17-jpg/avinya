"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent successfully!");
      form.reset();
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-heading font-semibold">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
            name="name"
            required
            maxLength={100}
            placeholder="Name"
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            type="email"
            required
            maxLength={100}
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <input
            name="phone"
            type="tel"
            required
            maxLength={10}
            placeholder="Phone (10 digits)"
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            required
            maxLength={1000}
            placeholder="Message"
            className="w-full border p-3 rounded h-32"
          />

          <button
            disabled={loading}
            className="w-full bg-highlight text-white py-3 rounded font-medium disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
