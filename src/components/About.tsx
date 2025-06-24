
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a Master in IT graduate with deep expertise in computer vision, AI, and edge systems. 
              I have built over 20 real-world OpenCV projects in areas like medical image processing, 
              person tracking, visual navigation, and AI-integrated smart systems using Raspberry Pi.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in building intelligent, autonomous systems that blend sensors, vision, 
              and machine learning into practical tools that solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Master's Degree</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">MSc.IT</p>
                <p className="text-gray-400">SVKM's Usha Pravin Gandhi College</p>
                <p className="text-gray-400">2023 – 2025</p>
                <div className="flex items-center mt-3">
                  <Award className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-semibold">8.8 SCGPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Bachelor's Degree</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">BSc.IT</p>
                <p className="text-gray-400">MVLU College</p>
                <p className="text-gray-400">2020 – 2023</p>
                <div className="flex items-center mt-3">
                  <Award className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-semibold">7.7 SCGPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
