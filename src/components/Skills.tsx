import { Code2, Database, Layers, Palette, Terminal, Wrench } from 'lucide-react';
import React, { useState } from 'react';

const skills = {
  languages: [
    { name: 'JavaScript', logo: '/src/assets/logos/javascript.png' },
    { name: 'TypeScript', logo: '/src/assets/logos/typescript.png' },
    { name: 'Python', logo: '/src/assets/logos/python.png' },
    { name: 'SQL', logo: '/src/assets/logos/sql.png' },
    { name: 'HTML5', logo: '/src/assets/logos/html.png' },
    { name: 'CSS3', logo: '/src/assets/logos/css.png' }

  ],
  frontend: [
    { name: 'ReactJS', logo: '/src/assets/logos/react.png' },
    { name: 'React Native', logo: '/src/assets/logos/react.png' },
    { name: 'Tailwind CSS', logo: '/src/assets/logos/tailwind.png' },
    { name: 'Bootstrap', logo: '/src/assets/logos/bootstrap.png' },
    { name: 'Responsive Design', logo: '/src/assets/logos/responsive.png' }
  ],
  backend: [
    { name: 'Flask', logo: '/src/assets/logos/flask.png' },
    { name: 'Django', logo: '/src/assets/logos/django.png' },
    { name: 'RESTful APIs', logo: '/src/assets/logos/rest.png' }
  ],
  tools: [
    { name: 'Git', logo: '/src/assets/logos/git.png' },
    { name: 'Jira', logo: '/src/assets/logos/jira.png' },
    { name: 'Trello', logo: '/src/assets/logos/trello.png' },
    { name: 'VS Code', logo: '/src/assets/logos/vscode.png' },
    { name: 'Postman', logo: '/src/assets/logos/postman.png' },
    { name: 'Miro', logo: '/src/assets/logos/miro.png' }
  ],
  databases: [
    { name: 'MongoDB', logo: '/src/assets/logos/mongodb.png' },
    { name: 'PostgreSQL', logo: '/src/assets/logos/postgresql.png' },
    { name: 'MySQL', logo: '/src/assets/logos/mysql.png' },
    { name: 'Firebase', logo: '/src/assets/logos/firebase.png' }
  ],
  design: [
    { name: 'Figma', logo: '/src/assets/logos/figma.png' },
    { name: 'Adobe Illustrator', logo: '/src/assets/logos/illustrator.png' },
    { name: 'UI/UX', logo: '/src/assets/logos/uiux.png' },
    { name: 'Wireframing', logo: '/src/assets/logos/wireframe.png' },
    { name: 'Prototyping', logo: '/src/assets/logos/prototype.png' },
    { name: 'Accessibility', logo: '/src/assets/logos/accessibility.png' }
  ],
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
              <div className="p-3 bg-gray-800 rounded-lg text-white">
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
                  <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${activeColors.bg} overflow-hidden`}>
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}