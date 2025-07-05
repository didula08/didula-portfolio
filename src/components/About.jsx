import React from 'react';
import { Code, Cpu, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "Expert in creating end-to-end solutions with modern web technologies"
    },
    {
      icon: <Cpu size={24} />,
      title: "Network & IoT Engineering",
      description: "Specialized in network engineering, embedded systems and IoT solutions"
    },
    {
      icon: <Users size={24} />,
      title: "Leadership & Community",
      description: "Vice President of Rotaract Club & active IESL member"
    },
    {
      icon: <Award size={24} />,
      title: "Academic Excellence",
      description: "Computer Engineering undergraduate with software engineering diploma"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About text */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-slate-50 mb-6">
              Engineering Solutions for Tomorrow
            </h3>
            
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a Computer Engineering undergraduate at University of Jaffna with a passion for 
                creating innovative solutions that seamlessly integrate hardware and software. 
                I earned Diploma in Software Engineering at Esoft Metro Campus, 
                I bring a comprehensive understanding of both theoretical concepts and practical applications.
              </p>
              
              <p>
                My expertise spans full-stack development, network engineering, AI/ML applications, 
                and IoT systems. I thrive on projects that challenge conventional thinking and push 
                the boundaries of what's possible. From intelligent network solutions to sophisticated 
                web applications, I combine technical expertise with creative problem-solving.
              </p>
              
              <p>
                As Vice President of Rotaract Club University of Jaffna and an active member of IESL 
                (Institution of Engineers Sri Lanka), I'm committed to community development and 
                knowledge sharing. I believe in the power of collaboration and continuous learning 
                in advancing technology for the betterment of society.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-slate-800 px-4 py-2 rounded-full">
                <span className="text-cyan-400 font-semibold">Problem Solver</span>
              </div>
              <div className="bg-slate-800 px-4 py-2 rounded-full">
                <span className="text-cyan-400 font-semibold">Innovation Driven</span>
              </div>
              <div className="bg-slate-800 px-4 py-2 rounded-full">
                <span className="text-cyan-400 font-semibold">Community Leader</span>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-50 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;