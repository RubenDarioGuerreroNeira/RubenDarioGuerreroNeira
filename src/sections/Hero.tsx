import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Send, ChevronDown, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  lang: 'es' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const roles = [
    lang === 'es' ? 'Backend Developer' : 'Backend Developer',
    lang === 'es' ? 'Ingeniero Prompt' : 'Prompt Engineer',
    lang === 'es' ? 'Desarrollo de Bots con IA' : 'AI Bot Development',
    'Open Source Contributor',
    'NestJS Enthusiast'
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

      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl text-white/60 mb-2">
              {lang === 'es' ? 'Hola,' : 'Hello,'}
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {lang === 'es' ? 'Soy' : 'I\'m'} <span className="text-primary">{portfolioData.name}</span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-3xl font-medium text-white/60 mb-8 h-8"
            >
              {displayText}<span className="text-primary animate-pulse">|</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            >
              <a href="#contact" className="btn btn-primary px-8 py-4">
                {lang === 'es' ? 'Contactar' : 'Get in Touch'}
              </a>
              <a href={portfolioData.github} target="_blank" className="btn btn-secondary px-8 py-4">
                <Github size={20} />
                GitHub
              </a>
            </motion.div>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-2"
            >
              {['NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'Node.js', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white/60 hover:text-white hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl border-2 border-white/10 overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src="https://avatars.githubusercontent.com/u/149652185?v=4"
                alt={portfolioData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
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