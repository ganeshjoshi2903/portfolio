import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const resumeUrl = "https://drive.google.com/file/d/1G-tLL8LvarpUYlrWS_5cjI06GA56zony/view?usp=sharing";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-blue-400 text-lg font-medium">Hello, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            Ganesh Joshi
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack MERN Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I am a full stack MERN developer passionate about building scalable, user-centric web applications. I have experience with integrating AI technologies, deploying cloud solutions, and delivering data-driven projects. I'm also skilled in Agile development, API integration, and rapid prototyping.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:ganeshjoshi2903@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/ganeshjoshi2903"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 rounded-full hover:bg-blue-400/10"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-joshi-9114b327b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 rounded-full hover:bg-blue-400/10"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ganeshjoshi2903@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 rounded-full hover:bg-blue-400/10"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;