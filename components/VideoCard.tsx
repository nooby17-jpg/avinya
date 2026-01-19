"use client";

import { motion } from "framer-motion";

export default function VideoCard({
  title,
  video,
}: {
  title: string;
  video: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      className="relative h-[80vh] rounded-2xl overflow-hidden"
    >
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <h2 className="absolute bottom-12 left-12 text-white text-5xl font-bold">
        {title}
      </h2>
    </motion.div>
  );
}
