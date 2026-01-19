"use client";

import { motion } from "framer-motion";
import TechnologiesHover from "@/sections/TechnologiesHover";
import { typography } from "@/design-system/typography";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Hover tech layer */}
      <TechnologiesHover  />

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative -z-10 max-w-[1100px] text-center"
      >
        <h1 className={"-inset-0 -z-10 text-[clamp(3rem,8vw,56.5rem)] leading-[0.95] font-extrabold"}>
          THE ERA OF
          <br />
          TECHNOLOGY IN MOTION
          <br />
          HAS ARRIVED.
        </h1>

        <p className="mt-10 text-sm uppercase tracking-wide opacity-70">
          Engineering digital systems for the future
        </p>
      </motion.div>
    </section>
  );
}
