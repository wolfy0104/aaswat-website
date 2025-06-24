
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'aaswatvishwakarma01@gmail.com',
      href: 'mailto:aaswatvishwakarma01@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aaswat-vishwakarma-8a792030b',
      href: 'https://linkedin.com/in/aaswat-vishwakarma-8a792030b',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/aaswat',
      href: 'https://github.com/aaswat',
      color: 'from-gray-600 to-gray-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Connect with me</h3>
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{link.label}</h4>
                    <p className="text-gray-300 text-sm">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <h4 className="text-white font-semibold mb-2">Let's collaborate!</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm always excited to work on innovative AI and computer vision projects. 
                Whether you need a custom solution or want to discuss emerging technologies, 
                feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
