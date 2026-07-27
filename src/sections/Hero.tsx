import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  lang: 'es' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const roles = React.useMemo(() => [
    lang === 'es' ? 'Backend Developer' : 'Backend Developer',
    lang === 'es' ? 'Arquitecto de Microservicios' : 'Microservices Architect',
    lang === 'es' ? 'Experto en IA Conversacional' : 'Conversational AI Expert',
    'Open Source Contributor',
    'NestJS Enthusiast'
  ], [lang]);

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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container relative z-10 px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-2">
              {lang === 'es' ? 'Hola.' : 'Hello.'}
            </h2>
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-white tracking-tighter leading-none">
              {lang === 'es' ? 'Soy' : "I'm"} <span className="text-primary">{portfolioData.name.split(' ')[0]}</span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-bold text-white/40 mb-10 h-10 tracking-tight"
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative w-72 h-80 md:w-[350px] md:h-[450px] rounded-[2rem] border border-white/10 overflow-hidden bg-black/40 backdrop-blur-sm">
              <img
                src="https://avatars.githubusercontent.com/u/149652185?v=4"
                alt={portfolioData.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
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