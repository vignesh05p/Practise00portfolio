import React from 'react';
import { Award } from 'lucide-react';

const Awards: React.FC = () => {
  const awards = [
    {
      title: "Best Innovation Award - Sparkathon 2024",
      description: "Recognized for developing a cutting-edge research platform that integrates AI to assist researchers in document management and summarization."
    },
    {
      title: "1st Place - SMVITM Coding Challenge 2023",
      description: "Secured the top spot in a competitive coding contest focused on algorithm design and problem-solving under time constraints."
    }
  ];

  return (
    <section id="awards" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Awards</h2>
      <div className="space-y-6">
        {awards.map((award, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-2">
              <Award className="w-6 h-6 mr-2 text-yellow-500" />
              <h3 className="text-xl font-semibold">{award.title}</h3>
            </div>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;