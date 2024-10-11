import React from 'react';
import { Folder, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Research Assist Platform",
      description: "A comprehensive research management platform designed to streamline the research process by integrating document management, summarization, and AI assistance.",
      technologies: ["LLaMA 3.1", "PostgreSQL", "Vue.js", "Go"],
      icon: <Folder className="w-6 h-6 mr-2" />
    },
    {
      title: "SparkNotes Summarizer",
      description: "A Chrome extension that uses AI to summarize long-form articles and blog posts on the go.",
      technologies: ["Python", "Vue.js"],
      icon: <FileText className="w-6 h-6 mr-2" />
    }
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-2">
              {project.icon}
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;