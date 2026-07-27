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

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {portfolioData.techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-[#0F172A]/80 backdrop-blur-sm text-sm font-bold text-white/80 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;