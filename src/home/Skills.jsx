import React from "react";
import skillsData from "../data/Skills.json";

const badgeColors = [
  "from-blue-500 to-purple-500",
  "from-green-400 to-blue-500",
  "from-pink-500 to-yellow-500",
  "from-indigo-500 to-blue-400",
  "from-yellow-400 to-pink-500",
  "from-purple-500 to-pink-500",
  "from-teal-400 to-blue-500",
];

const Skills = () => {
  return (
    <section className="py-12 animate-fade-in">
      <h1 className="text-4xl font-extrabold gradient-text text-center mb-8 drop-shadow-lg">Skills</h1>
      <div className="glass-card text-white p-8 rounded-2xl shadow-glow max-w-4xl mx-auto mt-6">
        {Object.entries(skillsData).map(([category, skills], catIdx) => (
          <div key={category} className="mb-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4 gradient-text">{category}</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full shadow-lg bg-gradient-to-r ${badgeColors[(catIdx + index) % badgeColors.length]} text-white font-semibold text-base animate-scale-in hover:scale-105 transition-transform duration-200`}
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
