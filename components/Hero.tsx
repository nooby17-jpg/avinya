"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center px-6 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="font-heading text-6xl font-semibold text-text">
          Solving the Future
        </h1>

        <p className="mt-6 font-body text-lg text-subtext">
          Avinya delivers Web, IT, Cyber Security, AI & Analytics solutions.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/contact"
            className="bg-highlight text-white px-6 py-3 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
