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

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {portfolioData.techStack.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;