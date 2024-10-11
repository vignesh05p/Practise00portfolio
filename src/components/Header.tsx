import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <User className="mr-2" />
          <h1 className="text-2xl font-bold">Vignesh Prabhu</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#awards" className="hover:underline">Awards</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;