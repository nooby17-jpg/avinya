"use client";

import ServicesCards from "@/sections/ServicesCards";

import { usePathname } from "next/navigation";

export default function Services() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");

  const textClass = isServices ? "text-white" : "text-text";  
  const borderClass = isServices ? "border-white/80" : "border-text/90";
  return (
    <section className={`${borderClass} ${textClass} px-0 py-10 border-t`}>
      <h1 className="text-6xl tracking-wide font-extrabold pl-0 mb-5 uppercase">Services</h1>
      <ServicesCards/>
    </section>
  );
}
