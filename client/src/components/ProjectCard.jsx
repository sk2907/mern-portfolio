import React from 'react';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px]">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-sm text-gray-500 mb-2">Tech Stack: {tech}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View Project
      </a>
    </div>
  );
}
