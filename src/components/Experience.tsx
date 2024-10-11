import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Backend Development Intern",
      company: "TechSolve Innovations",
      period: "May 2023 – Aug 2023",
      description: "Worked on optimizing backend services for client applications, using Go and PostgreSQL. Contributed to enhancing the system's efficiency by 15% and helped implement a microservices architecture for better scalability."
    },
    {
      title: "Research Assistant",
      company: "AI Research Lab, SMVITM",
      period: "Jan 2023 – Apr 2023",
      description: "Assisted with research in AI applications for NLP (Natural Language Processing) tasks. Role included training machine learning models using open-source datasets and developing Python scripts for automation and data preprocessing."
    }
  ];

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-2">
              <Briefcase className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <p className="text-gray-600 mb-2">{exp.company}</p>
            <div className="flex items-center text-gray-500 mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{exp.period}</span>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;