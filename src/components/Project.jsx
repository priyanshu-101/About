import { project } from '../data/Project';

const typeColors = {
  freelance: 'from-purple-500 to-pink-500',
  personal: 'from-blue-500 to-green-500',
};

const Project = () => {
  const freelanceProjects = project.filter(p => p.type === 'freelance');
  const personalProjects = project.filter(p => p.type === 'personal');

  const renderProjects = (projects) => (
    <div className="flex flex-col gap-8 animate-fade-in">
      {projects.map((project, index) => (
        <div
          key={index}
          className="glass-card p-8 flex flex-col md:flex-row justify-between shadow-glow transition-transform duration-300 hover:scale-[1.02] hover:shadow-glow-lg border border-white/20 relative animate-slide-up rounded-lg gap-6"
        >
          {/* Left: Main Info */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Project Type Badge */}
            <span className={`absolute top-4 right-4 px-3 py-1 rounded text-xs font-semibold text-white shadow bg-gradient-to-r ${typeColors[project.type]}`}>{project.type.charAt(0).toUpperCase() + project.type.slice(1)}</span>

            {/* Project Name */}
            <h2 className="text-2xl font-extrabold gradient-text mb-2 drop-shadow-lg">
              {project.name}
            </h2>

            {/* Description */}
            <p className="text-gray-200 mb-4 min-h-[56px]">{project.description}</p>

            {/* Technologies as badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded shadow font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features and Actions */}
          <div className="flex flex-col justify-between min-w-[220px] md:max-w-xs">
            {/* Features */}
            <div className="mb-4">
              <h3 className="font-bold text-primary-200 mb-2">Features:</h3>
              <ul className="space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 animate-fade-in">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full inline-block"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-auto">
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 text-center"
              >
                Code
              </a>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-2 md:px-8 py-8">
      <h1 className="text-3xl font-extrabold gradient-text mb-8 text-center tracking-tight drop-shadow-lg">Freelance Projects</h1>
      {renderProjects(freelanceProjects)}
      <h1 className="text-3xl font-extrabold gradient-text mb-8 mt-16 text-center tracking-tight drop-shadow-lg">Personal Projects</h1>
      {renderProjects(personalProjects)}
    </div>
  );
};

export default Project;
