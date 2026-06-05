import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Tech <span className="text-primary">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {portfolioData.techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 flex flex-col items-center justify-center gap-4 group hover:bg-white/5"
            >
              <div className="relative">
                <div 
                  className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: tech.color }}
                />
                <img
                  src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color.replace('#', '%23')}`}
                  alt={tech.name}
                  className="w-12 h-12 relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-bold tracking-wider uppercase text-white/60 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
