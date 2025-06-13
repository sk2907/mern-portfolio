import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projectData';

export default function Projects() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-8 text-purple-600">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

