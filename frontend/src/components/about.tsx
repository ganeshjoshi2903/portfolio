import React from 'react';
import { User, GraduationCap, Code, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know more about my journey, passion, and what drives me in technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-gray-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <User className="text-blue-400" size={28} />
                  Who Am I?
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a dedicated Computer Science Engineering student with a passion for creating
                  innovative digital solutions. My journey in technology started with curiosity
                  and has evolved into a commitment to excellence in software development.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in continuous learning and staying up-to-date with the latest
                  technologies. My goal is to contribute to projects that make a positive
                  impact while constantly improving my technical skills.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <GraduationCap className="text-blue-400 mb-3" size={32} />
                  <h4 className="text-lg font-semibold mb-2">Education</h4>
                  <p className="text-gray-400 text-sm">
                    Computer Science Engineering
                  </p>
                  <p className="text-gray-500 text-sm">2022-2026</p>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <Code className="text-green-400 mb-3" size={32} />
                  <h4 className="text-lg font-semibold mb-2">Focus Areas</h4>
                  <p className="text-gray-400 text-sm">
                    Web Development, Software Engineering, Problem Solving
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 rounded-xl border border-gray-700">
                <Target className="text-orange-400 mb-3" size={32} />
                <h4 className="text-lg font-semibold mb-2">My Goal</h4>
                <p className="text-gray-300">
                  To become a skilled software engineer who creates meaningful solutions
                  and contributes to innovative projects that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;