import { experience } from "../data/Experience";

const Experience = () => {
    return (
        <section className="py-8 animate-fade-in">
         {experience.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 mb-8 shadow-glow animate-slide-up"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h2 className="text-2xl font-extrabold gradient-text mb-2 md:mb-0">
                  {exp.jobTitle}
                </h2>
                <p className="text-sm text-primary-300 font-semibold">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-lg font-semibold text-white mt-1">
                <a
                  href={exp.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-accent-400 transition-colors"
                >
                  at {exp.company}
                </a>
              </p>
              <p className="text-sm text-gray-300 mb-2">Location: {exp.location}</p>
              <div className="mt-4">
                <h3 className="font-bold text-primary-200 mb-1">Responsibilities:</h3>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="pl-2 animate-fade-in">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-primary-200 mb-1">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold shadow">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
    )
};

export default Experience;