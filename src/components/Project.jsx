import {project} from '../data/Project';

const Projects = () => {
    return (
        <div>
            {project.map((project, index) => (
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
            ))}
        </div>
    );
};

export default Projects;
