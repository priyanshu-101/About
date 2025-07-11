import {project} from '../data/Project';

const Projects = () => {
    const freelanceProjects = project.filter(p => p.type === 'freelance');
    const personalProjects = project.filter(p => p.type === 'personal');

    const renderProjects = (projects) => (
        projects.map((project, index) => (
            <div key={index} className="shadow-md rounded-lg p-6 mb-6 bg-gray-900">
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <p className="text-sm text-gray-400 mt-1">
                    Technologies: {project.technologies.join(", ")}
                </p>
                <div className="mt-4">
                    <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline mr-4"
                    >
                        View Code
                    </a>
                    <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Live Demo
                    </a>
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold text-gray-100">Features:</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-2">
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))
    );

    return (
        <div>
            <h1 className="text-2xl font-bold text-white mb-4">Freelance Projects</h1>
            {renderProjects(freelanceProjects)}
            <h1 className="text-2xl font-bold text-white mb-4 mt-8">Personal Projects</h1>
            {renderProjects(personalProjects)}
        </div>
    );
};

export default Projects;
