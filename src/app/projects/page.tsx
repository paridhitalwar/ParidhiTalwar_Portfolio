import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Paridhi Talwar",
};

type Project = {
  title: string;
  description: string;
  link: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Smart Fridge",
    description:
      "LLM-powered inventory & recipe assistant that helps reduce food waste by 10%.",
    link: "https://github.com/paridhitalwar/smart-fridge",
    tech: ["Python", "React", "Flask", "MongoDB", "Expo"],
  },
  {
    title: "Alcohol Brewing Data Analysis",
    description:
      "Analytics pipeline on GCP & Spark for quality prediction and real-time dashboards.",
    link: "https://github.com/paridhitalwar/brewing-analytics",
    tech: ["PySpark", "GCP", "SparkSQL", "Tableau"],
  },
  {
    title: "Animal Intrusion Detection System",
    description:
      "Mask-RCNN based real-time detection with 87% accuracy and 30% reduction in human intervention.",
    link: "https://github.com/paridhitalwar/animal-intrusion-detection",
    tech: ["Python", "OpenCV", "Mask RCNN"],
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--accent-lilac)] mb-10">
        Featured Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] p-6 rounded-xl backdrop-blur-md shadow shadow-black/30 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {proj.title}
            </h2>
            <p className="text-white/85 flex-1 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-white/[0.06] rounded-full text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={proj.link}
              target="_blank"
              className="self-start mt-auto px-4 py-2 rounded-full bg-[var(--accent-amber)] text-black font-medium hover:opacity-90"
            >
              View Code ↗
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
