import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Experience | Paridhi Talwar",
};

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    company: "Olis (Startup)",
    role: "Lead Software Engineer",
    period: "Mar 2025 – Present",
    location: "Remote",
    bullets: [
      "Leading end-to-end development of the company’s MVP, including architecture design, technology stack selection, and integration strategy.",
      "Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline using enterprise context data for accurate and context-aware AI responses.",
      "Developed integrations for Slack, Microsoft Teams, and Chrome extensions to enable ambient AI delivery and inline answers within enterprise workflows.",
    ],
  },
  {
    company: "Community Dreams Foundation",
    role: "AI Engineer (EPM)",
    period: "May 2025 – Jun 2025",
    location: "Boston, MA",
    bullets: [
      "Architected a voice-based FAQ assistant using Flask, Google STT/TTS, and LLMs for 1,000+ users.",
      "Managed sprint planning, stakeholder syncs, and deliverables to ensure on-time progress and cross-functional alignment.",
    ],
  },
  {
    company: "Syren Cloud Inc.",
    role: "Data Science Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Remote",
    bullets: [
      "Improved multi-horizon forecasting accuracy from 50% to 68–72% using ARIMA, Prophet, and XGBoost.",
      "Automated training pipelines with Airflow, reducing manual iteration and accelerating experimentation.",
    ],
  },
  {
    company: "ComputaCenter India Pvt Ltd.",
    role: "Associate Technical Analyst Intern",
    period: "Jan 2023 – Jun 2023",
    location: "Bangalore, India",
    bullets: [
      "Automated server monitoring tasks using PowerShell & Hyper-V, enhancing responsiveness and reducing manual workload.",
    ],
  },
  {
    company: "Optum Global Solutions (India) Pvt Ltd.",
    role: "Software Developer Intern",
    period: "Jun 2022 – Aug 2022",
    location: "Bangalore, India",
    bullets: [
      "Built and deployed a HIPAA-compliant teleconsultation app using Flask & MongoDB for 500+ weekly users.",
      "Containerized and deployed on AKS to improve scalability and reliability.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--accent-lilac)] mb-10">
        Professional Experience
      </h1>
      <div className="relative border-l border-white/20 ml-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 pl-6"
          >
            <span className="absolute -left-[9px] top-2 w-3 h-3 rounded-full bg-[var(--accent-amber)]"></span>
            <h2 className="text-xl font-semibold text-white/90">
              {exp.role} @ {exp.company}
            </h2>
            <p className="text-sm text-white/70 mb-2">
              {exp.period} • {exp.location}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-white/85">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
