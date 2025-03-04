import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://your-ecommerce-demo.com',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://your-task-manager-demo.com',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides real-time weather information, forecasts, and interactive maps using multiple weather APIs.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=400&fit=crop',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://your-weather-demo.com',
    featured: true
  },
  {
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics dashboard for social media managers with real-time data visualization and automated reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/social-analytics',
    demo: 'https://your-analytics-demo.com',
    featured: false
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning models.',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: 'https://github.com/yourusername/ai-image-gen',
    demo: 'https://your-ai-demo.com',
    featured: false
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-first fitness tracking application with workout planning, progress tracking, and social features.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    github: 'https://github.com/yourusername/fitness-tracker',
    demo: 'https://your-fitness-demo.com',
    featured: false
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'react', label: 'React' },
    { id: 'node', label: 'Node.js' },
  ];
  
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.technologies.some(tech => 
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          A collection of my recent work showcasing my skills in web development, design, and problem-solving.
        </p>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02] border border-gray-700 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-gray-800/80 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-blue-500/80 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/10 text-sm text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105 font-medium"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp size={20} className="transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  View More Projects
                  <ChevronDown size={20} className="transition-transform group-hover:translate-y-1" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}