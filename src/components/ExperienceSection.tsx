"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Olis",
    role: "Founding Software Engineer",
    period: "Aug 2025 – Present",
    bullets: [
      "Leading end-to-end development of the company’s MVP, including architecture design, technology stack selection, and integration strategy.",
      "Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline using enterprise context data for accurate and context-aware AI responses.",
      "Developed integrations for Slack, Microsoft Teams, and Chrome extensions to enable ambient AI delivery and inline answers within enterprise workflows.",
    ],
  },
  {
    company: "Syren Cloud",
    role: "Data Science Intern",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Enhanced forecasting accuracy from ~50% to ~70% using advanced time-series modeling techniques.",
      "Developed automated data pipelines in Python for real-time data ingestion and preprocessing.",
    ],
  },
  {
    company: "Optum",
    role: "Software Engineer Intern",
    period: "Jun 2022 – Aug 2022",
    bullets: [
      "Contributed to development of a teleconsultation platform enabling 5,000+ daily patient sessions.",
      "Implemented secure authentication and appointment scheduling features in collaboration with senior engineers.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="max-w-5xl mx-auto py-28 px-6" // wider section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title text-4xl mb-12">Experience</h2> {/* bigger title */}
      <div className="flex flex-col items-center gap-14 mx-4 sm:mx-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="w-full max-w-4xl min-h-[360px] rounded-3xl p-12 
              backdrop-blur-lg bg-white/10 flex flex-col 
              border border-white/15 shadow-lg shadow-black/25 
              transition duration-300 hover:scale-[1.04] 
              hover:border-[var(--accent-amber)]/60"
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              {exp.role}
            </h3>
            <p className="text-xl text-white/80 font-medium mb-2">{exp.company}</p>
            <p className="text-lg text-white/70 mb-5">{exp.period}</p>
            <ul className="list-disc pl-5 space-y-3 text-white/90 text-lg leading-8">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
