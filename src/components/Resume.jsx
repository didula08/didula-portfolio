import React from 'react';
import { Download, Eye, Award, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  const achievements = [
    {
      icon: <GraduationCap size={20} />,
      title: 'Computer Engineering Student',
      description: 'University of Jaffna - Strong foundation in engineering principles',
    },
    {
      icon: <Award size={20} />,
      title: 'Software Engineering Diploma',
      description: 'Esoft Metro Campus - Specialized in modern software development',
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Leadership Experience',
      description: 'Vice President, Rotaract Club University of Jaffna & IESL Member',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            My <span className="text-cyan-400">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Download my comprehensive resume to learn more about my education, experience, and achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div className="bg-slate-950/50 rounded-2xl p-8 hover:bg-slate-950/70 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-50 mb-6">Professional Summary</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                A dedicated Computer Engineering undergraduate from University of Jaffna with extensive experience in full-stack development, network engineering, AI/ML implementation, and IoT systems.
                Currently pursuing Diploma in Software Engineering at Esoft Metro Campus. Proven leadership as Vice President of Rotaract Club and active IESL member.
              </p>

              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="text-cyan-400 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-50 mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="flex justify-center">
            <div className="bg-slate-950/50 rounded-2xl p-8 w-full max-w-md hover:bg-slate-950/70 transition-all duration-300 transform hover:scale-105">
              {/* Resume preview mockup */}
              <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
                <div className="space-y-3">
                  <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-400 rounded w-1/2"></div>
                  <div className="space-y-2 mt-4">
                    <div className="h-2 bg-slate-300 rounded w-full"></div>
                    <div className="h-2 bg-slate-300 rounded w-5/6"></div>
                    <div className="h-2 bg-slate-300 rounded w-4/6"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-slate-400 rounded w-2/3"></div>
                    <div className="h-2 bg-slate-300 rounded w-full"></div>
                    <div className="h-2 bg-slate-300 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-slate-50 mb-4">Get My Resume</h3>

                <div className="flex flex-col gap-3">
                  <a
                    href="/didula_wijesuriya_cv.pdf"
                    download="Didula_Wijesuriya_CV.pdf"
                    className="group flex items-center justify-center gap-3 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Download size={20} className="group-hover:animate-bounce" />
                    Download PDF
                  </a>

                  <a
                    href="/didula_wijesuriya_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Eye size={20} className="group-hover:scale-110 transition-transform" />
                    Quick View
                  </a>
                </div>

                <p className="text-slate-400 text-sm mt-4">Last updated: December 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience Summary */}
        <div className="mt-16 bg-slate-950/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-slate-50 mb-8 text-center">Education & Experience</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">University</div>
              <div className="text-slate-50 font-medium">of Jaffna</div>
              <div className="text-slate-400 text-sm">Computer Engineering</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">Esoft</div>
              <div className="text-slate-50 font-medium">Metro Campus</div>
              <div className="text-slate-400 text-sm">Software Engineering</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">VP</div>
              <div className="text-slate-50 font-medium">Rotaract Club</div>
              <div className="text-slate-400 text-sm">Leadership Role</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">IESL</div>
              <div className="text-slate-50 font-medium">Member</div>
              <div className="text-slate-400 text-sm">Professional Body</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
