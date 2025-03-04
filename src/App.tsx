import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-black/50 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Alaaeddine Elhaoua. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;