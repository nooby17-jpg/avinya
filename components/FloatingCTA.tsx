"use client";

import Link from "next/link";

export default function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-10 py-3 rounded-full text-sm"
    >
      Contact Us
    </Link>
  );
}
