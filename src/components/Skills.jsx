import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C++", "HTML", "CSS"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Spring Boot", "React Native", "Tailwind CSS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Firebase", "Git", "JWT", "Google OTP API"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "AI/ML & Data Science",
      skills: ["TensorFlow", "Keras", "Scikit-learn", "YOLOv8", "Python"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "IoT & Embedded Systems",
      skills: ["Arduino", "ESP32", "C", "Ultrasonic Sensors", "Real-time Systems"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Network Engineering & Security",
      skills: ["Network Design", "pfSense", "Snort", "Arpwatch", "Wireshark", "Mininet", "MATLAB", "Simulink"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions across multiple engineering domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-slate-950/50 rounded-xl p-6 hover:bg-slate-950/70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-50 mb-4 group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm rounded-full transition-all duration-300 transform hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills proficiency visualization */}
        <div className="mt-16 bg-slate-950/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-slate-50 mb-8 text-center">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: "Full-Stack Development", level: 90 },
              { skill: "Network Engineering", level: 85 },
              { skill: "AI/ML Implementation", level: 80 },
              { skill: "IoT & Embedded Systems", level: 85 },
              { skill: "Database Design", level: 88 },
              { skill: "Project Leadership", level: 82 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-50 font-medium">{item.skill}</span>
                  <span className="text-cyan-400 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;