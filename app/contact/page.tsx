"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const contactRef = useRef<HTMLElement>(null);
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
    <main className="bg-bglight text-text overflow-hidden">
{/* ───────────────── HERO ───────────────── */}
      <section
        ref={contactRef}
        className="relative pt-2 md:pt-20 pb-24 text-text flex items-start px-6 mt-28 md:mt-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[100vw] flex flex-col mt-1 md:mt-8" 
        >
          <h1 className="text-[clamp(2.8rem,8vw,5.8rem)] text-center mb-1 text-text leading-[0.95] font-black uppercase">
            Book our Experience
          </h1>
          <p className="mt-6 text-sm md:text-xl font-bold uppercase tracking-wide opacity-70 text-center mb-10">
              AI & ML · Analytics · Cloud & Cyber Security · IT Solutions ·  Web Development · Digital Marketing · Design & Development
            </p>

          <div className="flex flex-col md:flex-row px-0 py-10 border-t border-text/20 ml-0 md:ml-10">
             <div className="flex flex-col">
                <p className="mt-4 text-3xl md:text-5xl  font-black tracking-tighter">
                  Don't Hesitate to reach out.
                </p>
                <p className="mt-4 text-lg md:text-xl  font-semibold tracking-wider">
                  Let's Unlock together the next level of possibilities!
                </p>
                <div className="flex flex-col mt-10">
                  <h2 className=" text-subtext/70 text-lg md:text-xl  font-bold">
                    Social Media
                  </h2>
                  <div className="flex text-text font-black text-lg gap-6 tracking-wider">
                    <Link href={"/x.com"} target="_blank">Twitter</Link>
                    <Link href={"/linkedin.com"} target="_blank">LinkedIn</Link>
                    <Link href={"/facebook.com"} target="_blank">Facebook</Link>
                    <Link href={"/instagram.com"} target="_blank">Instagram</Link>
                  </div>
                </div>
                <div className="flex flex-col mt-10">
                  <h2 className=" text-subtext/70 text-lg md:text-xl  font-bold">
                    GET IN TOUCH
                  </h2>
                  <Link href={"/mailto:nikhil7679@gmail.com"} className="text-text font-black text-lg gap-6 tracking-wider">nikhil7679@gmail.com</Link>
                </div>
                <div className="flex flex-col mt-10">
                  <h2 className=" text-subtext/70 text-lg md:text-xl  font-bold">
                    LOCATION
                  </h2>
                  <div className="flex flex-col text-text font-black text-lg gap-0 tracking-wider">
                    <p className="text-text font-black text-lg gap-6 tracking-wider">SILIGURI, WEST BENGAL</p>
                    <p className="text-text font-black text-lg gap-6 tracking-wider">NAMCHI, SIKKIM</p>
                  </div>
                  
                </div>
              </div>
              <div className="border border-t  md:border-r md:border-subtext/70 my-10 md:mx-10 opacity-40"></div>
              <div className="py-5 px-0 pr-0 md:pr-10">
                <h1 className="text-3xl md:text-5xl mb-10 font-heading font-black uppercase tracking-tighter">
                  Send Us a Message
                </h1> 

                <form
                  onSubmit={handleSubmit}
                  className="mt-0 space-y-4"
                >
                  <input
                    name="name"
                    required
                    maxLength={100}
                    placeholder="Name"
                    className="w-full p-3 bg-bglight border-b border-text"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={100}
                    placeholder="Email"
                    className="w-full p-3 bg-bglight border-b border-text"
                  />

                  <input
                    name="phone"
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Phone (10 digits)"
                    className="w-full p-3 bg-bglight border-b border-text"
                  />

                  <textarea
                    name="message"
                    required
                    maxLength={1000}
                    placeholder="Message"
                    className="w-full p-3 bg-bglight border-b border-text"
                  />

                  <button
                    disabled={loading}
                    className="w-full md:w-[480px] text-text  text-2xl md:text-4xl text-left py-3 border-b border-bglight font-black tracking-tighter disabled:opacity-50  uppercase hover:border-bg "
                  >
                    {loading ? "Sending..." : "Send Message >"}
                  </button>
                </form>
            </div>
          </div>

         
        </motion.div>
      </section>
 
    </main>
   
  );
}
