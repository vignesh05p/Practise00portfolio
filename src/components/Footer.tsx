import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Vignesh Prabhu. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><Github /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            <a href="#" className="hover:text-blue-400"><Mail /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;