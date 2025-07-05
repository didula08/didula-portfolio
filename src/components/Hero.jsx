import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const jobTitle = "Computer Engineer";
const typingSpeed = 70;

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const [displayed, setDisplayed] = useState("");
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let current = 0;
    let typing;
    function type() {
      setDisplayed(jobTitle.slice(0, current));
      if (current <= jobTitle.length) {
        current++;
        typing = setTimeout(type, typingSpeed);
      }
    }
    type();
    return () => clearTimeout(typing);
  }, []);

  useEffect(() => {
    const caretBlink = setInterval(() => setShowCaret((c) => !c), 530);
    return () => clearInterval(caretBlink);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && imageRef.current && textRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const rate2 = scrolled * -0.3;
        heroRef.current.style.transform = `translateY(${rate}px)`;
        imageRef.current.style.transform = `translateY(${rate2}px)`;
        const opacity = Math.max(0, 1 - scrolled / 400);
        textRef.current.style.opacity = opacity;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background: Just dark gradients, no lighting blob */}
      <div ref={heroRef} className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/98 to-slate-950/95"></div>
        {/* (No more motion.div blobs here) */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div ref={textRef} className="space-y-8 text-left">
            <div className="space-y-6">
              <motion.div
                className="text-cyan-400 font-semibold text-lg tracking-wide"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 70,
                  damping: 12,
                }}
              >
                Hi, I'm Didula Wijesooriya
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-nowrap flex items-center min-h-[1.25em]">
                <span>{displayed}</span>
                <span
                  className={`ml-0.5 w-1.5 h-[1em] bg-cyan-400 rounded transition-opacity duration-200 ${
                    showCaret ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: 2,
                    marginBottom: 2,
                  }}
                ></span>
              </h1>
              <motion.p
                className="text-lg text-slate-400 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8, type: "spring" }}
              >
                Passionate Computer Engineering undergraduate from University of Jaffna, specializing in
                full-stack development, network engineering, and IoT systems. Vice President of Rotaract
                Club & IESL member creating innovative solutions for tomorrow.
              </motion.p>
            </div>
            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{
                  scale: 1.09,
                  boxShadow: "0 0 16px #22d3ee99",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(34,211,238,0.15)",
                  color: "#0f172a",
                  boxShadow: "0 0 12px #22d3ee55",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToProjects}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
              >
                View Projects
              </motion.button>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/didula08"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#22d3ee",
                  color: "#fff",
                  boxShadow: "0 0 10px #22d3ee80",
                }}
                className="w-12 h-12 flex items-center justify-center bg-slate-900/50 hover:bg-cyan-500 text-slate-500 hover:text-white rounded-full transition-all duration-300"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/didula-wijesooriya-a7a227259/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#22d3ee",
                  color: "#fff",
                  boxShadow: "0 0 10px #22d3ee80",
                }}
                className="w-12 h-12 flex items-center justify-center bg-slate-900/50 hover:bg-cyan-500 text-slate-500 hover:text-white rounded-full transition-all duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:didulanethmina2000@gmail.com"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#22d3ee",
                  color: "#fff",
                  boxShadow: "0 0 10px #22d3ee80",
                }}
                className="w-12 h-12 flex items-center justify-center bg-slate-900/50 hover:bg-cyan-500 text-slate-500 hover:text-white rounded-full transition-all duration-300"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-end">
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: 70, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 1.1,
                type: "spring",
                stiffness: 80,
                damping: 18,
              }}
            
              className="relative"
            >
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                <img
                  src="https://i.imgur.com/fM0x4rx.png"
                  alt="Didula Wijesooriya - Computer Engineer"
                  className="w-full h-full object-cover object-center filter brightness-75 contrast-110 rounded-2xl"
                  onError={(e) => {
                    e.target.src = "/image.png";
                  }}
                />
                {/* Accent lines with pulse */}
                <motion.div
                  className="absolute top-1/4 right-6 w-0.5 h-20 bg-cyan-400 opacity-90"
                  animate={{ opacity: [0.9, 0.5, 0.9] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute top-1/3 right-10 w-0.5 h-16 bg-cyan-300 opacity-70"
                  animate={{ opacity: [0.7, 0.2, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
                />
                <motion.div
                  className="absolute top-2/5 right-14 w-0.5 h-12 bg-blue-400 opacity-60"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2.7, repeat: Infinity, repeatType: "reverse", delay: 1.1 }}
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-cyan-500/5 rounded-lg blur-2xl -z-10"
                animate={{
                  opacity: [0.33, 0.6, 0.33],
                  scale: [1, 1.07, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Bottom right accent */}
      <motion.div
        className="absolute bottom-8 right-8 text-6xl font-bold text-cyan-400/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        CE
      </motion.div>
    </section>
  );
};

export default Hero;
