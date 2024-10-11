import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Awards />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;