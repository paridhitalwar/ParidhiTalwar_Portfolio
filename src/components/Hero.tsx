"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center gap-10 mx-6 sm:mx-12 py-16" // increased padding + spacing
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--accent-lilac)] via-pink-500 to-[var(--accent-amber)] bg-clip-text text-transparent"
      >
        I'm Paridhi Talwar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-2xl sm:text-4xl text-white/90 max-w-3xl"
      >
        Designing the future, one intelligent product at a time.
      </motion.p>

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1] }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="w-50 h-50 sm:w-55 sm:h-55 rounded-full overflow-hidden border-4 border-white/20 shadow-xl" // bigger avatar
      >
        <Image
          src="/Avatar.png"
          alt="Avatar"
          width={288}
          height={288}
          className="object-cover"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="max-w-2xl text-xl sm:text-2xl text-white/90"
      >
        Software Engineer & Data Scientist | Bridging AI Research and Scalable Products
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="flex gap-6 mt-6" // more spacing between buttons
      >
        <Link
          href="#projects"
          className="px-7 py-4 rounded-full bg-[var(--accent-amber)] text-black font-medium text-lg shadow-lg hover:opacity-90 transition"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="px-7 py-4 rounded-full border border-white/40 text-white text-lg hover:bg-white/10 transition"
        >
          Let's Talk
        </Link>
      </motion.div>
    </section>
  );
}
