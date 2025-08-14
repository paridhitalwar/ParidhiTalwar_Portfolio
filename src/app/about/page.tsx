import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Paridhi Talwar",
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--accent-lilac)] mb-6">
        About Me
      </h1>
      <p className="leading-7 text-white/90 mb-4">
        I’m Paridhi Talwar, a passionate Software Engineer & Data Scientist experienced in bridging AI research and scalable products. My background spans end-to-end product development, data science, and cloud deployment.
      </p>
      <p className="leading-7 text-white/90 mb-4">
        I recently joined <strong>Olis</strong> as a Lead Software Engineer where I’m architecting and building an AI-first MVP that leverages Retrieval-Augmented Generation (RAG) and integrates seamlessly with enterprise tools like Slack and Microsoft Teams.
      </p>
      <p className="leading-7 text-white/90 mb-4">
        Previously, I earned my Master’s degree in Computer Science from <strong>Boston University</strong> (2025) and a Bachelor’s from <strong>SRM University</strong> in India (2023). My coursework—ranging from Data Science and AI to Compiler Design—has equipped me with a broad yet deep technical toolkit.
      </p>
      <p className="leading-7 text-white/90">
        Outside of work, you’ll find me experimenting with new ML models, writing tech blogs, and exploring creative ways to visualize data.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        className="inline-block mt-8 px-6 py-3 rounded-full bg-[var(--accent-amber)] text-black font-medium shadow hover:opacity-90"
      >
        Download Resume
      </a>
    </section>
  );
}
