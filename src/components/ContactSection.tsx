"use client";
import { motion } from "framer-motion";

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/paridhi-talwar/" },
  { name: "GitHub", url: "https://github.com/paridhitalwar" },
  { name: "Medium", url: "https://medium.com/@paridhitalwar" },
];

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="min-h-[70vh] flex flex-col lg:flex-row items-center justify-center gap-24 px-6 lg:px-24 text-center lg:text-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Left side - text & links */}
      <div className="flex flex-col items-center lg:items-start gap-12 max-w-xl">
        <h2 className="text-5xl font-extrabold text-[var(--accent-lilac)]">
          Contact
        </h2>
        <p className="text-3xl font-bold tracking-wide text-center lg:text-left text-white">
          Interested in working together or just want to say hi?{" "}
          <span className="text-[var(--accent-lilac)]">Drop a message!</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-12 justify-center lg:justify-start">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              className="text-white/80 hover:text-[var(--accent-amber)] transition text-xl font-semibold"
            >
              <i
                className={`smooth text-5xl ${
                  s.name === "LinkedIn"
                    ? "devicon-linkedin-plain colored"
                    : s.name === "GitHub"
                    ? "devicon-github-original"
                    : "devicon-medium-plain"
                }`}
              ></i>
            </a>
          ))}
        </div>

        {/* Say Hello Button */}
        <a
          href="mailto:paridhitalwar2@gmail.com"
          className="mt-4 px-12 py-6 rounded-full bg-[var(--accent-amber)] text-black font-semibold shadow hover:opacity-90 transition text-lg"
        >
          Say Hello
        </a>
      </div>

      {/* Right side - Avatar */}
      <motion.img
        src="/Avatar.png"
        alt="Avatar"
        width={300}
        height={300}
        className="rounded-full object-cover border-4 border-white/20 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </motion.section>
  );
}
