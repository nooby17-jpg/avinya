"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isServices = pathname.startsWith("/services");

  /**
   * THEME LOGIC
   * ──────────────────────────
   * Top of page → transparent
   * Scrolled → solid bg based on route
   */
  const bgClass = scrolled
  ? isServices
    ? "bg-accent/90 backdrop-blur-md"
    : "bg-bglight/90 backdrop-blur-md"
  : "bg-transparent";

  const textClass = scrolled
    ? isServices 
      ? "text-white"
      : "text-text" 
    : isServices 
      ? "text-white" 
      : "text-text";

  const borderClass = scrolled ? "border-b border-text/20" : "";

  return (
    <header
      className={`fixed top-0 z-50 w-full h-[60px] transition-colors duration-300 ease-out ${bgClass} ${textClass} ${borderClass}`}
    >
      <div className="max-w-[100%] mx-auto flex items-center justify-between px-4 md:px-10 py-4 md:py-2">

        {/* LEFT */}
        <nav className="flex text-sm md:text-md font-bold uppercase">
          <Link
            href="/about"
            className="hover:opacity-70 md:px-3 py-2 transition"
          >
            About
          </Link>
        </nav>

        {/* LOGO */}
        <Link
          href="/"
          id="navbar-logo"
          className="font-extrabold tracking-tight uppercase text-2xl md:text-4xl"
        >
          avinya
        </Link>

        {/* RIGHT */}
        <Link
          href="/contact"
          className="font-bold px-0 md:px-3 py-2 text-xs md:text-md uppercase hover:opacity-70 transition"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
