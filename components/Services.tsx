"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Solutions",
    desc: "Frontend, backend, and full-stack systems built for performance.",
  },
  {
    title: "IT & Infrastructure",
    desc: "Reliable systems, monitoring, scalability, and support.",
  },
  {
    title: "Cyber Security",
    desc: "Secure architecture, audits, and risk mitigation.",
  },
  {
    title: "AI & Analytics",
    desc: "Data-driven insights with ethical and scalable AI.",
  },
  {
    title: "Design & Branding",
    desc: "Logos, UI systems, and digital identity design.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text">
          Our Services
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="font-heading text-xl font-semibold text-text">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-subtext leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
