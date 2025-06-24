
import React from 'react';
import { Code, Settings, Star, Book } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Computer Vision',
      icon: <Star className="w-6 h-6" />,
      skills: ['OpenCV', 'YOLOv8', 'TensorFlow', 'MediaPipe'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Edge Computing',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Raspberry Pi', 'MQTT', 'Sensor Integration'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'AI Integration',
      icon: <Book className="w-6 h-6" />,
      skills: ['Gemma 7B', 'LLM Orchestration', 'Smart Assistant Dev'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Navigation & AR',
      icon: <Code className="w-6 h-6" />,
      skills: ['Visual Odometry', '2D AR Mapping', 'OpenStreetMap'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Backend/Tools',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Flask', 'Django', 'Selenium', 'SQL (Basic)', 'Git'],
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
