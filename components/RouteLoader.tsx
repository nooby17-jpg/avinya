"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => setLoading(false), 150);
      },
    });

    // Progress counter
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 1.1,
      ease: "power2.out",
      onUpdate: () => setProgress(Math.round(counter.value)),
    });

    // Loader bar fill
    tl.to(
      barRef.current,
      {
        width: "100%",
        duration: 1.1,
        ease: "power2.out",
      },
      0
    );

    // Logo fade out (NO MOVE)
    tl.to(
      logoRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      0.7
    );

    // Loader exit
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-bglight flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-10 text-center">

        {/* LOGO */}
        <div ref={logoRef} className="flex  flex-col items-center gap-4">
          <div className="relative w-[140px] h-[140px] md:w-[280px] md:h-[280px]">
            <Image
              src="/4.svg"
              alt="avinya"
              fill
              priority
              className="object-contain"
            />
          </div>

          <p className="text-[2rem] md:text-[6rem] font-extrabold uppercase tracking-widest leading-none">
            AVINYA
          </p>
        </div>

        {/* PROGRESS */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm tracking-widest opacity-70">
            {progress}%
          </span>

          {/* PILL → LOADER BAR */}
          <div className="relative w-[260px] h-[6px] rounded-full bg-text/20 overflow-hidden">
            <div
              ref={barRef}
              className="absolute left-0 top-0 h-full bg-text w-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
