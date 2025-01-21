import React from "react";
import skillsData from "../data/Skills.json"; 

const Skills = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center mt-2">Skills</h1>
      <div className="bg-gray-950 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-white">{category}:</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  <span className="text-yellow-400 font-mono">{skill.icon}</span>
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
