import { FileText, Github, Linkedin, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group"
          >
            <div className="w-10 h-10 relative overflow-hidden">
              {/* Triangular shapes forming an abstract "A" */}
              <div className="absolute w-full h-full">
                {/* Left side of the A */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-600 to-blue-400 transform origin-bottom-right skew-x-[24deg] group-hover:from-blue-500 group-hover:to-blue-300 transition-colors duration-300"></div>
                
                {/* Right side of the A */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-600 to-blue-500 transform origin-bottom-left skew-x-[-24deg] group-hover:from-purple-500 group-hover:to-blue-400 transition-colors duration-300"></div>
                
                {/* Crossbar of the A */}
                <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-white transform -translate-y-1/2 group-hover:bg-blue-200 transition-colors duration-300"></div>
                
                {/* Highlight effect */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20 transform -skew-x-12"></div>
                
                {/* Bottom shadow */}
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/30"></div>
              </div>
            </div>
            <div className="ml-3 flex flex-col">
              <span className="text-lg font-bold text-white leading-none group-hover:text-blue-300 transition-colors duration-300">Alaaeddine</span>
              <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors duration-300">Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Elhaoua-Alaaeddine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/alaa-eddine-elhaoua/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="/src/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}