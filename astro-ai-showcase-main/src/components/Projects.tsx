
import React, { useState } from 'react';
import { Github, Star, Settings, Book, Code } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Ellen AI',
      description: 'Visual + Sensor AI assistant using LLM + OpenCV',
      fullDescription: 'A comprehensive AI assistant that combines computer vision with large language models. Ellen AI can process visual input through OpenCV, integrate sensor data, and provide intelligent responses using advanced LLM orchestration. The system features real-time object detection, gesture recognition, and contextual understanding.',
      tech: ['Python', 'OpenCV', 'LLM', 'Raspberry Pi', 'MQTT'],
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Smart Fall Detection',
      description: 'YOLO + MoveNet + audio fusion system',
      fullDescription: 'An advanced fall detection system that combines YOLOv8 object detection with MoveNet pose estimation and audio analysis. The system provides real-time monitoring for elderly care, featuring multi-modal data fusion, alert mechanisms, and edge deployment capabilities for privacy-preserving operation.',
      tech: ['YOLOv8', 'MoveNet', 'TensorFlow', 'Audio Processing', 'Edge AI'],
      icon: <Settings className="w-6 h-6" />,
      color: 'from-green-500 to-blue-500'
    },
    {
      title: '2D AR Navigation',
      description: 'GPS-free AR pathfinder using visual odometry',
      fullDescription: 'A revolutionary navigation system that works without GPS by using visual odometry and augmented reality. The system creates real-time 2D AR overlays for indoor navigation, utilizing computer vision algorithms for location tracking and path optimization in GPS-denied environments.',
      tech: ['OpenCV', 'Visual Odometry', 'AR', 'Python', 'Computer Vision'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'MedTrack AI',
      description: 'Remote behavior monitoring using Flask + CV',
      fullDescription: 'A comprehensive medical monitoring platform that uses computer vision to track patient behavior remotely. Built with Flask backend, the system provides real-time health monitoring, behavioral analysis, and alert systems for healthcare providers, ensuring continuous patient care.',
      tech: ['Flask', 'OpenCV', 'Computer Vision', 'Medical AI', 'REST API'],
      icon: <Book className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                  className={`w-full py-2 px-4 bg-gradient-to-r ${project.color} text-white rounded-lg hover:opacity-90 transition-opacity duration-200`}
                >
                  {selectedProject === index ? 'Hide Details' : 'View Details'}
                </button>

                {selectedProject === index && (
                  <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-600 animate-fade-in">
                    <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
