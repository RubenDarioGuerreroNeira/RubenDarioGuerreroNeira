import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ExperienceProps {
  lang: 'es' | 'en';
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {lang === 'es' ? 'Experiencia' : 'Experience'} & <span className="text-primary">OSS</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-white/10 to-transparent" />
              
              {/* Dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-black border-2 border-primary flex items-center justify-center z-10">
                <Briefcase size={14} className="text-primary" />
              </div>

              <div className="glass-card p-8">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mt-1">
                      {exp.role[lang]}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {exp.description[lang]}
                </p>

                <ul className="space-y-4">
                  {exp.highlights[lang].map((highlight, j) => {
                     // Simple markdown bold parsing
                     const parts = highlight.split('**');
                     return (
                       <li key={j} className="flex gap-4 text-white/60 leading-relaxed group">
                         <div className="mt-1.5 transition-transform duration-300 group-hover:scale-125">
                           <CheckCircle2 size={18} className="text-primary/60 group-hover:text-primary" />
                         </div>
                         <span>
                           {parts.map((part, k) => k % 2 === 1 ? <strong key={k} className="text-white">{part}</strong> : part)}
                         </span>
                       </li>
                     );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
