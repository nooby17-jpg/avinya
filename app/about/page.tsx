"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const aboutRef = useRef<HTMLElement>(null);

  return (
    <main className="bg-bglight text-text overflow-hidden">

      {/* ───────────────── HERO ───────────────── */}
      <section
        ref={aboutRef}
        className="relative pt-28 pb-24 flex items-start md:items-center justify-center px-6 mt-28 md:mt-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl text-center"
        >
          <h1 className="text-[clamp(2.8rem,8vw,5.8rem)] leading-[0.95] font-black uppercase">
            About US
          </h1>

          <p className="mt-6 text-sm md:text-xl font-bold uppercase tracking-wide opacity-80">
            AI & ML · Analytics · Cloud Services · IT Solutions · Web Engineering · Design & Development
          </p>

          <p className="mt-4 text-sm md:text-lg opacity-70 font-medium">
            Engineering digital systems for the future
          </p>
        </motion.div>
      </section>

      {/* ───────────────── BRAND ESSENCE ───────────────── */}
      <section className="px-6 py-24 border-t border-text/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-extrabold uppercase mb-6">
              Brand Essence
            </h2>
            <p className="text-lg opacity-95 leading-relaxed">
              <strong>Avinya</strong> is derived from Sanskrit roots, representing
              limitless potential, clarity, and forward motion.
              <br /><br />
              It stands for systems that are not driven by chaos, but shaped by
              <strong> discipline, intelligence, and elegance</strong>.
            </p>
          </div>

          <div className="text-lg opacity-955 leading-relaxed">
            <p className="mb-6 font-bold text-text">
              Technology should not feel complicated.  
              <br />It should feel inevitable.
            </p>

            <ul className="space-y-3 list-disc list-inside">
              <li>Solves real problems</li>
              <li>Looks refined and intentional</li>
              <li>Scales without breaking</li>
              <li>Remains understandable to humans</li>
            </ul>

            <p className="mt-6 font-semibold">
              We don’t build projects.  
              <br />We build systems.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── VISION & MISSION ───────────────── */}
      <section className="px-6 py-32 bg-accent text-white ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight uppercase mb-6">Vision</h2>
            <p className="text-lg leading-relaxed tracking-wide opacity-80">
              To become a globally trusted technology partner that defines how
              modern digital systems are designed, built, and scaled — today and
              for the future.
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold tracking-tight uppercase mb-6">Mission</h2>
            <p className="text-lg leading-relaxed tracking-wide opacity-80">
              To solve every computer-related problem — from web to infrastructure
              to intelligence — in a way that is innovative, structured,
              visually refined, future-proof, and engineering-first.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── WHY AVINYA ───────────────── */}
      <section className="px-6 py-32 border-t border-text/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold uppercase mb-10 ">
            Why Avinya Exists
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left md:text-center mt-16 tracking-wide">
            {[
              {
                title: "Over-engineered Chaos",
                text: "Systems built fast without structure become impossible to scale.",
              },
              {
                title: "Under-designed Solutions",
                text: "Functional but ugly systems fail to inspire trust.",
              },
              {
                title: "Short-term Thinking",
                text: "Delivery-focused vendors ignore longevity.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-extrabold tracking-wider uppercase mb-3">
                  {item.title}
                </h3>
                <p className="opacity-80 text-subtext font-semibold tracking-tight">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-20 text-lg opacity-90 max-w-3xl mx-auto font-bold tracking-widest">
            Avinya exists to bring discipline back into technology — combining
            strong engineering foundations, clean architecture, modern UI/UX,
            and long-term scalability.
          </p>
        </div>
      </section>

      {/* ───────────────── SERVICES (WHAT & WHY) ───────────────── */}
      <section className="px-6 py-32 bg-accent text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold uppercase mb-16 text-center">
            What We Do & Why It Matters
          </h2>

          <div className="space-y-16">
            {[
              {
                title: "Web Engineering & Platforms",
                why: "Your website is your digital headquarters. We make sure it performs, converts, and scales.",
              },
              {
                title: "IT Services & System Architecture",
                why: "Most failures happen due to poor planning — not bad code. We eliminate that risk.",
              },
              {
                title: "Cyber Security & Reliability",
                why: "Trust is currency. Security failures destroy brands faster than bad products.",
              },
              {
                title: "AI, Data & Intelligent Systems",
                why: "AI should enhance systems, not complicate them. We use intelligence where it adds value.",
              },
            ].map((service) => (
              <div key={service.title} className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-extrabold uppercase mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="opacity-80 font-semibold tracking-wide">{service.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── FOUNDERS ───────────────── */}
      <section className="px-0 py-24 border-t border-text/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-extrabold uppercase mb-4">
              Nikhil Sharma
            </h3>
            <p className="opacity-80 leading-relaxed">
              Founder & Managing Director — B.Tech Computer Engineering.
              <br /><br />
              Driven by system thinking, design-engineering balance, and a deep
              obsession with clean, scalable architecture.
            </p>
          </div>

          <div className="flex flex-col text-right items-end justify-end">
            <h3 className="text-2xl font-extrabold uppercase mb-4">
              Sanidhya Shekhar
            </h3>
            <p className="opacity-80 leading-relaxed">
              Founder & CEO — B.Tech Computer Engineering.
              <br /><br />
              Leads with strategic clarity, execution discipline, and long-term
              business vision.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── BRAND PROMISE ───────────────── */}
      <section className="px-6 pb-32 bg-bglight text-text text-center border-t border-text/20 pt-16">
        <h2 className="text-4xl font-extrabold uppercase mb-6">
          Our Promise
        </h2>
        <p className="max-w-3xl mx-auto text-lg opacity-80 leading-relaxed">
          Avinya builds disciplined, intelligent, and beautifully engineered
          digital systems for the future.
        </p>
      </section>

    </main>
  );
}
