"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto py-20 px-6" // slightly less vertical padding
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title text-center sm:text-left text-3xl mb-10">
        About Me
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-12 mx-4 sm:mx-8">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.05,
            rotate: 1.5,
            boxShadow: "0px 0px 30px rgba(255, 200, 0, 0.6)",
          }}
          className="overflow-hidden rounded-2xl border-4 border-white/20 shadow-xl transition-all duration-500"
        >
          <Image
            src="/Profile.jpeg"
            alt="Paridhi Talwar headshot"
            width={800} // smaller
            height={600}
            className="w-[400px] h-[350px] sm:w-[500px] sm:h-[400px] object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          className="space-y-4 text-lg sm:text-xl leading-8 text-white/90 max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            I’m Paridhi Talwar, a software engineer and data scientist who
            thrives at the intersection of AI innovation and scalable
            engineering.
          </p>
          <p>
            From improving machine learning models that forecast with greater
            precision, to leading the development of a startup’s first
            AI-powered product, I believe in building systems that don’t just
            work, but adapt and grow.
          </p>
          <p>
            As the founding engineer at <strong>Olis</strong>, I’ve been
            steering both the technical vision and the execution, architecting
            RAG pipelines, enabling multi-platform delivery, and ensuring our
            solutions balance performance, privacy, and impact.
          </p>
          <p>
            Whether collaborating with global teams, guiding product decisions,
            or deep-diving into algorithms at 2 AM, I bring a mix of leadership,
            problem-solving, and hands-on engineering to every challenge I take
            on.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block mt-3 px-6 py-3 rounded-full bg-[var(--accent-amber)] text-black font-semibold text-base shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
