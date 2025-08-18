"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Smart Fridge",
    desc: "LLM-powered inventory & recipe assistant reducing waste by 10%.",
    href: "https://github.com/paridhitalwar/smart-fridge",
    img: "/smart-fridge.png",
  },
  {
    title: "Brewing Analytics",
    desc: "Spark + GCP pipeline for brewing quality prediction.",
    href: "https://github.com/paridhitalwar/Brewery-Operations-and-Market-Analysis",
    img: "/brewing.jpg",
  },
  {
    title: "Animal Intrusion Detection",
    desc: "Mask-RCNN real-time detection with 87% accuracy.",
    href: "https://github.com/paridhitalwar/Animal_Intrusion_Detection_System",
    img: "/animal-detect.png",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="max-w-5xl mx-auto py-24 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="flex flex-col items-center gap-12 mx-4 sm:mx-8">
        {projects.map((p, idx) => (
          <motion.div
            key={p.href}
            className="w-full max-w-3xl rounded-3xl overflow-hidden backdrop-blur-lg bg-white/10 flex flex-col border border-white/15 shadow-lg shadow-black/25 transition duration-300 hover:scale-[1.03] hover:border-[var(--accent-amber)]/60"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-white/85 flex-1 mb-6">{p.desc}</p>
              <Link
                href={p.href}
                target="_blank"
                className="self-start mt-auto px-5 py-2 rounded-full bg-[var(--accent-amber)] text-black font-medium hover:opacity-90"
              >
                View Code ↗
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
