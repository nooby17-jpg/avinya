"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { usePathname } from "next/navigation";
const BRANDS = [
  "/tech/react.svg",
  "/tech/next.svg",
  "/tech/ai.svg",
  "/tech/ai2.svg",
  "/tech/html.svg",
  "/tech/cloud.svg",
  "/tech/1.svg",
  "/tech/2.svg",
  "/tech/react.svg",
  "/tech/next.svg",
  "/tech/ai.svg",
  "/tech/ai2.svg",
  "/tech/html.svg",
  "/tech/cloud.svg",
  "/tech/1.svg",
  "/tech/2.svg",
];

type TrailItem = {
  id: number;
  x: number;
  y: number;
  src: string;
  falling: boolean;
};

export default function CursorBrandTrail({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement>;
}) {
  const [items, setItems] = useState<TrailItem[]>([]);
  const indexRef = useRef(0);
  const lastSpawn = useRef(0);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");

  const bgClass = isServices ? "bg-accent/20" : "bg-bglight/20";
  const borderClass = isServices ? "border-white/80" : "border-text/90";
  useEffect(() => {
    if (!containerRef.current || window.innerWidth < 1024) return;

    const el = containerRef.current;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawn.current < 120) return;

      lastSpawn.current = now;

      const rect = el.getBoundingClientRect();
      const id = now;

      setItems((prev) => [
        ...prev.slice(-6),
        {
          id,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          src: BRANDS[indexRef.current++ % BRANDS.length],
          falling: false,
        },
      ]);

      // trigger fall
      setTimeout(() => {
        setItems((prev) =>
          prev.map((i) =>
            i.id === id ? { ...i, falling: true } : i
          )
        );
      }, 1000);

      // remove
      setTimeout(() => {
        setItems((prev) => prev.filter((i) => i.id !== id));
      }, 2600);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [containerRef]);

  return (
    <div className="pointer-events-none absolute inset-0 hidden z-10 lg:block">
      {items.map((item) => (
        <div
          key={item.id}
          className={`absolute w-[170px] h-[170px] rounded-md border  ${bgClass}  ${borderClass}
          flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(.2,.7,.2,1)]
          ${item.falling ? "opacity-0 translate-y-[1500px] " : "opacity-1 translate-y-[0px]"}`}
          style={{
            left: item.x,
            top: item.y,
            transform: "translate(50%, -50%)",
          }}
        >
          <Image src={item.src} alt="" width={72} height={72} />
        </div>
      ))}
    </div>
  );
}
