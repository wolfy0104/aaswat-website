
import React from 'react';
import { Calendar, MapPin, Code, Settings } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: 'SupportHives',
    role: 'Intern',
    duration: 'Jul 2023 – Aug 2023',
    location: 'Remote',
    achievements: [
      'Built a stock market chart screener with Django + Selenium',
      'Automated financial data scraping and dashboard generation',
      'Designed auto-click systems for browser automation',
      'Integrated REST APIs and scalable backend logic'
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="relative pl-20 animate-fade-in">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/50"></div>
              
              <div className="bg-gray-800/50 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                  <span className="text-blue-400 font-semibold">{experience.company}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experience.location}
                  </div>
                </div>

                <div className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 mt-0.5">
                        {index === 0 && <Code className="w-3 h-3 text-white" />}
                        {index === 1 && <Settings className="w-3 h-3 text-white" />}
                        {index === 2 && <Code className="w-3 h-3 text-white" />}
                        {index === 3 && <Settings className="w-3 h-3 text-white" />}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
