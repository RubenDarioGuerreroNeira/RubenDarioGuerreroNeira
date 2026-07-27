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
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 md:pl-16 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/30 to-transparent" />

              {/* Dot */}
              <div className="absolute left-0 md:left-4 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0F172A] border-2 border-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                <Briefcase size={14} className="text-primary md:w-4 md:h-4" />
              </div>

              <div className="glass-card p-6 md:p-10 group hover:border-white/20 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mt-2">
                      {exp.role[lang]}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8 leading-relaxed">
                  {exp.description[lang]}
                </p>

                <ul className="space-y-3 md:space-y-4">
                  {exp.highlights[lang].map((highlight, j) => {
                    const parts = highlight.split('**');
                    return (
                      <li key={j} className="flex gap-3 md:gap-4 text-white/60 leading-relaxed group/item">
                        <div className="mt-1 transition-transform duration-300 group-hover/item:scale-125 flex-shrink-0">
                          <CheckCircle2 size={18} className="text-primary/60 group-hover/item:text-primary" />
                        </div>
                        <span className="text-sm md:text-base">
                          {parts.map((part, k) => k % 2 === 1 ? <strong key={k} className="text-white font-bold">{part}</strong> : part)}
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
