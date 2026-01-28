"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import CursorBrandTrail from "@/components/CursorBrandTrail";
import TechnologiesHover from "@/sections/TechnologiesHover";
import Services from "@/components/Services";


export default function ServicesPage() {
  const serviceRef = useRef<HTMLElement>(null);
  return (
    <main className="px-6 py-0 bg-accent">
      <section
        ref={serviceRef}
        className="relative min-h-screen flex items-start md:items-center justify-center px-0 mt-28 md:mt-0 overflow-hidden"
      >
        {/* Cursor trail ONLY inside hero */}
        <CursorBrandTrail containerRef={serviceRef} />

        {/* Existing hover layer */}
        <TechnologiesHover />

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-0 max-w-[100vw] text-center "
        >
          <h1 className="text-[clamp(3.5rem,8vw,56.5rem)] leading-[1.05] font-black px-2 uppercase text-white">
            Avinya delivers
            <br />
            end-to-end  digital solutions
            <br />
            across technology
          </h1>

          <p className="mt-10 text-sm md:text-xl font-bold uppercase tracking-wide opacity-70 text-white/70">
            Engineering digital systems for the future
          </p>
        </motion.div>
      </section>
      <div className="max-w-6xl mx-auto">
        <Services/>  
      </div>
    </main>
  );
}
