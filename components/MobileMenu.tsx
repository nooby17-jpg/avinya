"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LINKS = ["Services", "Blogs", "About"];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="md:hidden" onClick={() => setOpen(true)}>
        ☰
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#f6f5f2] z-50 flex flex-col items-center justify-center gap-10"
          >
            {LINKS.map((l) => (
              <a
                key={l}
                href={`/${l.toLowerCase()}`}
                className="text-4xl font-semibold"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}

            <a className="rounded-full border px-8 py-3 mt-6">
              Contact Us
            </a>

            <button onClick={() => setOpen(false)} className="absolute top-6 right-6">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
