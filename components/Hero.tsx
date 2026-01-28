"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import CursorBrandTrail from "@/components/CursorBrandTrail";
import TechnologiesHover from "@/sections/TechnologiesHover";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative  min-h-screen flex items-start md:items-center justify-center px-0 mt-28 md:mt-0 overflow-hidden"
    >
      {/* Cursor trail ONLY inside hero */}
      <CursorBrandTrail containerRef={heroRef} />

      {/* Existing hover layer */}
      <TechnologiesHover />

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative -z-0 max-w-[100vw] text-center"
      >
        <h1 className="text-[clamp(3.5rem,8vw,56.5rem)] leading-[1.05] font-black px-2">
          THE ERA OF
          <br />
          TECHNOLOGY IN FUTURE
          <br />
          HAS ARRIVED.
        </h1>

        <p className="mt-10 text-sm md:text-xl font-bold uppercase tracking-wide opacity-70">
          Engineering digital systems for the future
        </p>
      </motion.div>
    </section>
  );
}
