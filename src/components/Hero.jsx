import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && imageRef.current && textRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const rate2 = scrolled * -0.3;
        
        // Parallax effect for background
        heroRef.current.style.transform = `translateY(${rate}px)`;
        
        // Subtle parallax for image
        imageRef.current.style.transform = `translateY(${rate2}px)`;
        
        // Fade out text on scroll
        const opacity = Math.max(0, 1 - scrolled / 400);
        textRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Much darker background - almost black like reference */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-slate-950"
      >
        {/* Very dark overlay for deeper black color like reference */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/99 via-blue-950/98 to-slate-950/99"></div>
        
        {/* Minimal subtle animated elements */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/2 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/2 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content with Didula Wijesooriya */}
          <div ref={textRef} className="space-y-8 text-left">
            <div className="space-y-6">
              <div className="text-cyan-400 font-medium text-lg animate-fade-in">
                Hi, I'm Didula Wijesooriya
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white animate-fade-in-up leading-tight">
                Computer Engineer
              </h1>
              <p className="text-lg text-slate-400 max-w-lg animate-fade-in-up delay-200 leading-relaxed">
                Passionate Computer Engineering undergraduate from University of Jaffna, specializing in 
                full-stack development, network engineering, and IoT systems. Vice President of Rotaract 
                Club & IESL member creating innovative solutions for tomorrow.
              </p>
            </div>

            <div className="flex gap-4 animate-fade-in-up delay-300">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Hire Me
              </button>
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in-up delay-400">
              <a
                href="https://github.com/didula08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-slate-900/50 hover:bg-cyan-500 text-slate-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/didula-wijesooriya-a7a227259/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-slate-900/50 hover:bg-cyan-500 text-slate-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:didulanethmina2000@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-slate-900/50 hover:bg-cyan-500 text-slate-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Profile image with restored styling (no bottom/right overlays) */}
          <div className="flex justify-end animate-fade-in-right">
            <div ref={imageRef} className="relative">
              {/* Main image container - positioned exactly like reference */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                {/* Using the uploaded image */}
                <img
                  src="/d5c82aaa-550a-477b-8428-b4bc16fe4e47.png"
                  alt="Didula Wijesooriya - Computer Engineer"
                  className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
                  onError={(e) => {
                    e.target.src = '/image.png'; // Fallback image
                  }}
                />
                
                {/* Vertical cyan accent lines - matching reference exactly */}
                <div className="absolute top-1/4 right-6 w-0.5 h-20 bg-cyan-400 opacity-90"></div>
                <div className="absolute top-1/3 right-10 w-0.5 h-16 bg-cyan-300 opacity-70"></div>
                <div className="absolute top-2/5 right-14 w-0.5 h-12 bg-blue-400 opacity-60"></div>
              </div>
              
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-cyan-500/5 rounded-lg blur-2xl transform scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right corner accent */}
      <div className="absolute bottom-8 right-8 text-6xl font-bold text-cyan-400/10">
        CE
      </div>
    </section>
  );
};

export default Hero;