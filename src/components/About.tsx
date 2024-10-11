import React from 'react';
import { GraduationCap, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          Hi, I'm <strong>Vignesh Prabhu</strong>, a passionate <strong>Computer Science student</strong> at <strong>SMVITM Bantakal Udupi Engineering College</strong>, currently in my <strong>3rd year</strong>, graduating in <strong>2025</strong>. I am driven by a love for technology and building impactful solutions.
        </p>
        <div className="flex items-center mb-2">
          <GraduationCap className="mr-2" />
          <span>3rd Year Computer Science Student</span>
        </div>
        <div className="flex items-center">
          <Code className="mr-2" />
          <span>Specializing in backend development and AI-powered tools</span>
        </div>
      </div>
    </section>
  );
};

export default About;