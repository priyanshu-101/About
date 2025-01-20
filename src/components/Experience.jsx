import { experience } from "../data/Experience";

const Experience = () => {
    return (
        <div>
         {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="shadow-md rounded-lg p-8 mb-6 bg-gray-900"
                    >
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white">
                          {exp.jobTitle}
                        </h2>
                        <p className="text-sm text-gray-400">
                          {exp.startDate} - {exp.endDate}
                        </p>
                      </div>
                      <p className="text-md font-semibold text-gray-100 mt-1">
                        at {exp.company}
                      </p>
                      <p className="text-sm text-gray-200">Location: {exp.location}</p>
                      <div className="mt-4">
                        <h3 className="font-semibold text-gray-100">Responsibilities:</h3>
                        <ul className="list-disc list-inside text-gray-400 mt-2">
                          {exp.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4">
                        <h3 className="font-semibold text-gray-100">Technologies:</h3>
                        <p className="text-gray-400">{exp.technologies.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                  </div>
    )
};

export default Experience;