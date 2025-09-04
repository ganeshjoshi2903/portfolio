import React from 'react';
import { ExternalLink, Github, Code2, Smartphone, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'RECORD BOOK',
      description: 'A digital record-keeping app similar to Khata Book for managing business transactions. It features secure login, CRUD operations, and a responsive UI. The app\'s performance was enhanced by optimizing database queries.',
      image: 'https://images.pexels.com/photos/10103721/pexels-photo-10103721.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/ganeshjoshi2903/Record-Book',
      liveUrl: 'https://recordbook-3map.onrender.com/',
      icon: <Globe className="text-blue-400" size={24} />,
    },
    {
      title: 'APNA VIDEO CALL',
      description: 'A real-time video calling application built with features for chat and media sharing. It uses JWT authentication for secure login/signup and includes user profiles and meeting history.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB'],
      githubUrl: 'https://github.com/ganeshjoshi2903/zoom-by-apna',
      liveUrl: 'https://zoom-by-apna-1.onrender.com/',
      icon: <Smartphone className="text-orange-400" size={24} />,
    },
    {
      title: 'JOB PORTAL',
      description: 'A dual-role platform for both recruiters and job seekers. It features a streamlined job application and posting workflow with a full authentication flow using JWT and Axios.',
      image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com/ganeshjoshi2903/Job-Portal',
      liveUrl: 'https://job-portal-2qza.onrender.com/',
      icon: <Code2 className="text-green-400" size={24} />,
    },
    {
      title: 'SHOPMART E-commerce',
      description: 'A responsive e-commerce website developed using core web technologies. It includes user login, signup, a shopping cart, and a checkout functionality, with a design optimized for both desktop and mobile devices.',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/ganeshjoshi2903/Shopmart-E-commerce-website',
      liveUrl: 'https://ganeshjoshi2903.github.io/Shopmart-E-commerce-website/',
      icon: <Globe className="text-purple-400" size={24} />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    {project.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;