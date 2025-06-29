import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone, Shield, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HealthHub - Smart Hospital Management System",
      description: "Comprehensive hospital management with appointment booking, digital prescriptions, and secure role-based access control.",
      icon: <Database size={20} />,
      technologies: ["Java Spring Boot", "React", "MySQL", "Jira"],
      status: "Completed",
      color: "from-green-500 to-emerald-600",
      github: "https://github.com/didula08",
      demo: "#"
    },
    {
      title: "Smart Pet Feeder - IoT System",
      description: "Intelligent IoT-based pet feeding system with real-time monitoring, scheduling capabilities, and mobile alerts.",
      icon: <Smartphone size={20} />,
      technologies: ["ESP32", "C", "React Native", "Firebase"],
      status: "Completed",
      color: "from-cyan-500 to-blue-600",
      github: "https://github.com/didula08",
      demo: "#"
    },
    {
      title: "WebRTC Video Chat Application",
      description: "HD video calling application with screen sharing, messaging, and automatic reconnection features.",
      icon: <Globe size={20} />,
      technologies: ["WebRTC", "Socket.io", "Node.js", "Express"],
      status: "Completed",
      color: "from-purple-500 to-violet-600",
      github: "https://github.com/didula08",
      demo: "#"
    },
    {
      title: "ML-Based Intrusion Detection System",
      description: "Advanced network security system detecting Layer 2 attacks using machine learning with real-time monitoring.",
      icon: <Shield size={20} />,
      technologies: ["Python", "Scikit-learn", "Mininet", "pfSense"],
      status: "Ongoing",
      color: "from-red-500 to-orange-600",
      github: "https://github.com/didula08",
      demo: "#"
    },
    {
      title: "Online Shopping Web Application",
      description: "Secure e-commerce platform with modern authentication, two-factor security, and responsive design.",
      icon: <Code size={20} />,
      technologies: ["MERN Stack", "Tailwind CSS", "JWT", "Google OTP"],
      status: "Ongoing",
      color: "from-teal-500 to-cyan-600",
      github: "https://github.com/didula08",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of innovative engineering solutions spanning web development, IoT, AI/ML, and network security
          </p>
        </div>

        {/* Compact project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 rounded-xl overflow-hidden hover:bg-slate-900/70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Compact project header */}
              <div className={`p-4 bg-gradient-to-r ${project.color} relative`}>
                <div className="flex items-center justify-between">
                  <div className="text-white/90">
                    {project.icon}
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Compact project content */}
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-bold text-slate-50 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Compact technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded hover:bg-cyan-500 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Compact action buttons */}
                <div className="flex gap-2 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium rounded transition-all duration-300"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-xs font-medium rounded transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-slate-900/50 rounded-xl p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-50 mb-3">
              Interested in collaborating?
            </h3>
            <p className="text-slate-300 mb-4 text-sm">
              I'm always open to discussing new projects and opportunities.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;