import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-heading text-xl font-semibold text-text">
            <Image 
              src="/2.svg"
              alt="Avinya"
              className="text-2xl"
              width={88}
              height={68}
            />
          </p>
          <p className="font-heading text-sm text-subtext -mt-3 pl-2">
            Solving the Future
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 font-heading text-sm text-subtext">
          <Link href="/services" className="hover:text-text">Services</Link>
          <Link href="/about" className="hover:text-text">About</Link>
          <Link href="/blogs" className="hover:text-text">Blogs</Link>
          <Link href="/contact" className="hover:text-text">Contact</Link>
        </div>

        {/* Copyright */}
        <p className="font-body text-sm text-subtext">
          © {new Date().getFullYear()} Avinya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
