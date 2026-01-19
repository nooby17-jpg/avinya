"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#FFF]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/" className="font-extrabold  uppercase text-xl justify-center align-middle">
          avinya
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <Link href="/services">Services</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
