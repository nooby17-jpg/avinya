"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechCard({
  src,
  x,
  y,
  rotate,
  scale = 1,
}: {
  src: string;
  x: number;
  y: number;
  rotate: number;
  scale?: number;
}) {
  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
      }}
      className="absolute pointer-events-none"
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
    >
      <div className="w-28 h-28 rounded-xl bg-[#F7F4EF] border border-black/10 flex items-center justify-center shadow-lg">
        <Image
          src={src}
          alt="Technology"
          width={56}
          height={56}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
