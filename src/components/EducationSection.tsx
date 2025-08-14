"use client";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="max-w-5xl mx-auto py-28 px-6" // slightly wider and more padding
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title text-5xl mb-14">Education</h2> {/* Bigger title */}
      <div className="flex flex-col items-center gap-14 mx-4 sm:mx-8">
        
        {/* BU Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          className="w-full max-w-4xl min-h-[360px] rounded-3xl p-12 
            backdrop-blur-lg bg-white/10 border border-white/15 
            shadow-lg shadow-black/25 transition duration-300 
            hover:border-[var(--accent-amber)]/60"
        >
          <h3 className="text-4xl font-bold text-white mb-3">
            M.S. Computer Science
          </h3>
          <p className="text-white/75 mb-6 text-2xl font-medium">
            Boston University • Sep 2023 – Jan 2025
          </p>
          <p className="text-white/90 text-xl leading-9">
            Coursework: Data Science, Web Mining, Data Visualization, Big Data Analytics, Software Engineering, Software Design Patterns.
          </p>
        </motion.div>

        {/* SRM Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.04 }}
          className="w-full max-w-4xl min-h-[320px] rounded-3xl p-12 
            backdrop-blur-lg bg-white/10 border border-white/15 
            shadow-lg shadow-black/25 transition duration-300 
            hover:border-[var(--accent-amber)]/60"
        >
          <h3 className="text-4xl font-bold text-white mb-3">
            B.Tech Computer Science
          </h3>
          <p className="text-white/75 mb-6 text-2xl font-medium">
            SRM University • Jul 2019 – Jun 2023
          </p>
          <p className="text-white/90 text-xl leading-9">
            Coursework: Artificial Intelligence, Semantic Web, Compiler Design, Biometrics, Data Mining, Operating Systems.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
