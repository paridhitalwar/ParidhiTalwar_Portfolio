import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Contact | Paridhi Talwar",
};

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paridhi-talwar/",
  },
  { name: "GitHub", href: "https://github.com/paridhitalwar" },
  { name: "Medium", href: "https://medium.com/@paridhitalwar" },
];

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center gap-8 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-[var(--accent-lilac)]"
      >
        Get in Touch
      </motion.h1>
      <p className="text-white/90 max-w-md">
        Open to opportunities, collaborations, and coffee chats! Feel free to reach out via
        email or any of the platforms below.
      </p>
      <div className="flex gap-6 mt-4">
        {socials.map((s) => (
          <Link
            key={s.name}
            href={s.href}
            target="_blank"
            className="text-white/80 hover:text-[var(--accent-amber)] transition text-lg font-medium"
          >
            {s.name}
          </Link>
        ))}
      </div>
      <a
        href="mailto:paridhitalwar2@gmail.com"
        className="mt-8 px-6 py-3 rounded-full bg-[var(--accent-amber)] text-black font-medium shadow hover:opacity-90"
      >
        Say Hello
      </a>
    </section>
  );
}
