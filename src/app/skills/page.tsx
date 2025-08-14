import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skills | Paridhi Talwar",
};

const skillGroups = {
  "Languages": ["C", "C++", "Python", "Java", "R", "SQL", "MATLAB"],
  "Frameworks & Libraries": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "Streamlit",
    "NLTK",
    "PySpark",
  ],
  "DevOps & Cloud": [
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "AWS",
    "Azure",
    "Google Cloud",
    "Airflow",
    "Azure Kubernetes Service",
  ],
  "Tools": [
    "Tableau",
    "PowerBI",
    "JIRA",
    "MongoDB",
    "Pivotal Tracker",
    "Cypress",
  ],
};

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--accent-lilac)] mb-8">
        Tech Stack & Tools
      </h1>
      <div className="grid sm:grid-cols-2 gap-8">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <div key={group} className="bg-white/[0.03] p-6 rounded-lg backdrop-blur-md shadow shadow-black/30">
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-amber)]">
              {group}
            </h2>
            <ul className="flex flex-wrap gap-3 text-white/90 text-sm">
              {skills.map((s) => (
                <li
                  key={s}
                  className="px-3 py-1 bg-white/[0.06] rounded-full backdrop-blur-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
