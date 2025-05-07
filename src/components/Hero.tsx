import { ArrowRight, Download } from 'lucide-react';
import React from 'react';

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 opacity-25">
          <div className="grid grid-cols-12 md:grid-cols-24 h-full w-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <React.Fragment key={i}>
                {Array.from({ length: 24 }).map((_, j) => (
                  <div 
                    key={`cell-${i}-${j}`} 
                    className="border-t border-l border-blue-400/20"
                    style={{
                      gridColumn: `${i + 1} / ${i + 2}`,
                      gridRow: `${j + 1} / ${j + 2}`,
                    }}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated particles - expanded to ensure full coverage */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-400/30 blur-sm"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 120 - 10}%`, // Expanded range to ensure coverage
              top: `${Math.random() * 120 - 10}%`, // Expanded range to ensure coverage
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 font-medium">Full-Stack Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hi, I'm <span className="text-blue-400">Alaaeddine Elhaoua</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Recent Computer Science graduate passionate about building innovative solutions.
              Specializing in full-stack development with a focus on modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all border border-gray-700 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            <spline-viewer url="https://prod.spline.design/nc2Cmk5k60Cggs5q/scene.splinecode"></spline-viewer>
          </div>
        </div>
        
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#projects" onClick={scrollToProjects} className="text-gray-400 hover:text-white transition-colors">
            <ChevronDown size={24} />
          </a>
        </div> */}
      </div>
    </section>
  );
}