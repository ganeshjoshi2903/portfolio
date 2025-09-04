import React from "react";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern (PPO)",
      company: "KWMCS Ventures LLP, Mumbai (Remote)",
      location: "India",
      period: "Jul 2025 – Present",
      description:
        "Worked as a Full Stack Developer Intern where I contributed to AI-powered features, automation, and analytics while collaborating with cross-functional teams.",
      achievements: [
        "Designed and implemented AI-powered features improving workflows",
        "Developed RESTful APIs and optimized database queries (MongoDB, MySQL)",
        "Improved scalability of systems by 30%",
        "Participated in Agile sprints, code reviews, and cloud deployment (AWS & Vercel)",
      ],
    },
  ];

  const certifications = [
    "5-star rating on HackerRank (Java problem solving & coding skills)",
    "React Development (Personal & Academic Projects)",
    "Node.js and MongoDB Full Stack Projects",
    "Git, GitHub, and Version Control (Project Work & Internships)",
    "Cloud Deployment Basics – AWS & GCP",
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey in software development through internships.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Internship Experience */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <Calendar className="text-blue-400" />
                Internship
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">
                            {exp.title}
                          </h4>
                          <p className="text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 flex items-center gap-1">
                            <Calendar size={16} />
                            {exp.period}
                          </p>
                          <p className="text-gray-400 flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-400 flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <Award className="text-green-400" />
                Certifications & Skills
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-2xl border border-gray-700">
                <h4 className="text-lg font-bold mb-2 text-white">
                  Always Learning
                </h4>
                <p className="text-gray-300 text-sm">
                  Continuously expanding my knowledge through internships,
                  personal projects, and online courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
