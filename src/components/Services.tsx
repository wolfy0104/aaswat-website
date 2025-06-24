
import React from 'react';
import { Star, Settings, Code, Book } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'AI/Computer Vision Development',
      description: 'Custom computer vision solutions using OpenCV, YOLO, and advanced deep learning frameworks for real-world applications.',
      features: ['Object Detection & Recognition', 'Image Processing & Analysis', 'Real-time Video Analytics', 'Custom AI Model Development'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Machine Learning & Deep Learning Solutions',
      description: 'End-to-end ML solutions from data preprocessing to model deployment with focus on practical implementation.',
      features: ['Custom ML Model Training', 'Data Pipeline Development', 'Model Optimization & Deployment', 'Performance Analytics'],
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Smart Raspberry Pi & IoT Systems',
      description: 'Edge computing solutions with Raspberry Pi integration for smart systems and IoT applications.',
      features: ['Edge AI Implementation', 'Sensor Integration', 'MQTT Communication', 'Real-time Data Processing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'End-to-End Prototype Design & Deployment',
      description: 'Complete solution development from concept to deployment with focus on scalability and performance.',
      features: ['System Architecture Design', 'Full-stack Development', 'Cloud Deployment', 'Maintenance & Support'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Services & Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${service.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white rounded-lg hover:opacity-90 transition-opacity duration-200 font-semibold`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
