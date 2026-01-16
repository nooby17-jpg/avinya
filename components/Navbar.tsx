"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-black/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/4.png"
            alt="Avinya Logo"
            width={32}
            height={32}
            priority
          />
            <span className="font-heading text-xl font-semibold text-text">
                avinya
            </span>


        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-subtext">
          <Link href="/services">Services</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop CTA — NOW VISIBLE */}
        <Link
            href="/contact"
            className="hidden md:inline-flex px-5 py-2.5 bg-highlight text-white rounded-md text-sm font-heading hover:opacity-90 transition"
            >
            Book Solution
        </Link>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-text"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6 border-t border-black/10 bg-bg">
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-black text-white px-4 py-3 rounded-md text-center font-medium"
          >
            Book Solution
          </Link>
        </div>
      </div>
    </header>
  );
}
