"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header className="sticky top-0 z-50 bg-bg border-b border-black/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/4.png"
            alt="Avinya"
            width={28}
            height={28}
          />
          <span className="font-heading text-xl font-semibold text-text">
            avinya
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-heading text-sm text-subtext">
          <Link href="/about" className="hover:text-text">About</Link>
          <Link href="/services" className="hover:text-text">Services</Link>
          <Link href="/blogs" className="hover:text-text">Blogs</Link>
        
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-highlight text-white rounded-md text-sm font-heading hover:opacity-90"
        >
          Contact Us
        </Link>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-black/10 px-6 py-6 space-y-4">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blogs">Blogs</Link>

          <Link
            href="/contact"
            className="block mt-4 bg-highlight text-white px-4 py-3 rounded-md text-center font-heading"
          >
            Contact Us
          </Link>
        </div>
      )}
    </motion.header>
  );
}
