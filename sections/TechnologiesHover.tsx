"use client";

import { useEffect, useState } from "react";
import TechCard from "@/components/TechCard";

const techs = [
  "/tech/react.svg",
  "/tech/next.svg",
  "/tech/ai.svg",
  "/tech/ai2.svg",
  "/tech/html.svg",
  "/tech/cloud.svg",
];

export default function TechnologiesHover() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Disable on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 z-20 min-w-100%"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {active &&
        techs.map((src, i) => (
          <TechCard
            key={src}
            src={src}
            x={pos.x + i * 25 - 60}
            y={pos.y + i * 25 - 60}
            rotate={i * 0}
            scale={i * 0.2}
          />
        ))}
    </div>
  );
}
