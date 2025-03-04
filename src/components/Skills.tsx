import React, { useState } from 'react';
import { Code2, Database, Terminal, Wrench, Layers, Palette } from 'lucide-react';

const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML5/CSS3'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js', 'Responsive Design'],
  backend: ['Node.js', 'Express', 'Django', 'RESTful APIs', 'GraphQL', 'Microservices'],
  tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Postman', 'CI/CD'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Supabase'],
  design: ['Figma', 'Adobe XD', 'UI/UX', 'Wireframing', 'Prototyping', 'Accessibility'],
};

type SkillCategory = keyof typeof skills;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('languages');
  
  const categories: {id: SkillCategory, label: string, icon: React.ReactNode, color: string}[] = [
    { id: 'languages', label: 'Languages', icon: <Code2 size={24} />, color: 'blue' },
    { id: 'frontend', label: 'Frontend', icon: <Terminal size={24} />, color: 'green' },
    { id: 'backend', label: 'Backend', icon: <Layers size={24} />, color: 'purple' },
    { id: 'databases', label: 'Databases', icon: <Database size={24} />, color: 'pink' },
    { id: 'tools', label: 'Tools', icon: <Wrench size={24} />, color: 'orange' },
    { id: 'design', label: 'Design', icon: <Palette size={24} />, color: 'yellow' },
  ];
  
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, {bg: string, text: string, dot: string}> = {
      blue: { bg: 'bg-blue-400/10', text: 'text-blue-400', dot: 'bg-blue-400' },
      green: { bg: 'bg-green-400/10', text: 'text-green-400', dot: 'bg-green-400' },
      purple: { bg: 'bg-purple-400/10', text: 'text-purple-400', dot: 'bg-purple-400' },
      orange: { bg: 'bg-orange-400/10', text: 'text-orange-400', dot: 'bg-orange-400' },
      pink: { bg: 'bg-pink-400/10', text: 'text-pink-400', dot: 'bg-pink-400' },
      yellow: { bg: 'bg-yellow-400/10', text: 'text-yellow-400', dot: 'bg-yellow-400' },
    };
    
    return colorMap[color] || colorMap.blue;
  };
  
  const activeColors = getColorClasses(categories.find(c => c.id === activeCategory)?.color || 'blue');

  return (
    <section id="skills" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Technical Skills</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiencies across various domains.
        </p>
        
        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const colors = getColorClasses(category.color);
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive 
                    ? `${colors.bg} ${colors.text} border border-${category.color}-400/30 shadow-md` 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                <span className={isActive ? colors.text : 'text-gray-400'}>
                  {category.icon}
                </span>
                {category.label}
              </button>
            );
          })}
        </div>
        
        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl shadow-lg border border-gray-700 ${activeColors.bg}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gray-800 rounded-lg">
                {categories.find(c => c.id === activeCategory)?.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {categories.find(c => c.id === activeCategory)?.label}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills[activeCategory].map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105 flex items-center gap-3"
                >
                  {/* Logo placeholder - you can replace this with your custom PNG logos */}
                  <div 
                    className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${activeColors.bg}`}
                    id={`logo-${activeCategory}-${index}`} // Add an ID for easy targeting when replacing
                  >
                    {/* This div will be replaced with your custom logo */}
                    <div className="w-6 h-6 bg-gray-700 rounded opacity-50"></div>
                  </div>
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}