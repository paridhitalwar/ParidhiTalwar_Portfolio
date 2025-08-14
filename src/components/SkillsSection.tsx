"use client";
import { motion } from "framer-motion";

const skillGroups: { title: string; skills: { name: string; icon: string }[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "R", icon: "devicon-r-original colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Flask", icon: "devicon-flask-original colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "PySpark", icon: "devicon-apachespark-plain colored" },
    ],
  },
  {
    title: "ML / DL",
    skills: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
      { name: "PyTorch", icon: "devicon-pytorch-original colored" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
      { name: "Keras", icon: "devicon-keras-plain colored" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
      { name: "Azure", icon: "devicon-azure-plain colored" },
      { name: "GCP", icon: "devicon-googlecloud-plain colored" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "LLM", icon: "devicon-python-plain colored" },
      { name: "OpenCV", icon: "devicon-opencv-plain colored" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto py-28 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title mb-16">Tech Stack</h2>
      <div className="grid sm:grid-cols-2 gap-16 mx-4 sm:mx-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white/[0.03] p-8 rounded-xl backdrop-blur-md transform scale-105 hover:scale-110 transition-transform duration-300"
          >
            <h3 className="text-3xl font-semibold text-[var(--accent-amber)] mb-6">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-5 text-white/90 text-2xl">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 group">
                  <i
                    className={`${skill.icon} text-5xl transition-transform duration-300 group-hover:rotate-6 group-hover:text-[var(--accent-amber)]`}
                  />
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
