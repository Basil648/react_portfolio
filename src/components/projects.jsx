import React from 'react';

function ProjectsSection() {
    const projects = [
        {
            id: 1,
            name: 'Portfolio Website',
            description: 'A personal portfolio site built with React and Tailwind CSS.',
            link: '#'
        },
        {
            id: 2,
            name: 'Task Manager App',
            description: 'A simple task management tool using Node, Express, and MongoDB.',
            link: '#'
        },
        {
            id: 3,
            name: 'Weather App',
            description: 'Real-time weather forecast app using OpenWeatherMap API.',
            link: '#'
        },
        {
            id: 4,
            name: 'Blog Platform',
            description: 'A basic blog platform with user authentication and content editor.',
            link: '#'
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 px-6 sm:px-16 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map(project => (
                    <div
                        key={project.id}
                        className="bg-white shadow-md p-6 rounded-md hover:shadow-lg transition duration-300"
                    >
                        <h3 className="text-xl font-semibold text-indigo-600 mb-2">{project.name}</h3>
                        <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-indigo-700 hover:underline"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;
