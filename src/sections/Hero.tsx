import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Send, ChevronDown, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  lang: 'es' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const roles = [
    "Backend Developer",
    lang === 'es' ? "Ingeniero Prompt" : "Prompt Engineer",
    lang === 'es' ? "Desarrollo de Bots con IA" : "AI Bot Development",
    "Open Source Contributor",
    "NestJS Enthusiast"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 p-2 glass-card">
            <img
              src="https://avatars.githubusercontent.com/u/149652185?v=4"
              alt={portfolioData.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-black shadow-lg shadow-primary/40"
          >
            <Code size={20} />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
        >
          {portfolioData.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl font-medium text-white/60 mb-12 h-8"
        >
          {displayText}<span className="text-primary animate-pulse">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn btn-primary px-8 py-4">
            {lang === 'es' ? 'Ver Proyectos' : 'View Projects'}
          </a>
          <a href={portfolioData.github} target="_blank" className="btn btn-secondary px-8 py-4">
            <Github size={20} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: <Linkedin size={24} />, href: portfolioData.linkedin, label: "LinkedIn" },
            { icon: <Send size={24} />, href: portfolioData.telegram, label: "Telegram" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              className="w-12 h-12 glass-card flex items-center justify-center hover:text-primary hover:border-primary/50"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">{lang === 'es' ? 'Scroll' : 'Scroll'}</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
