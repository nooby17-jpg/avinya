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
      className="relative h-[80vh] rounded-2xl overflow-hidden mt-10"
    >
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-95 "
      />

      <div className="absolute inset-0 bg-text/30" />

      <h2 className="absolute top-12 left-2 md:left-12 px-3 md:px-0 text-white text-5xl font-bold">
        {title}
      </h2>
    </motion.div>
  );
}
