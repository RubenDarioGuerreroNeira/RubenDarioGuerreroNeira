import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Search, Terminal, Activity, Brain, BarChart3, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { cn } from '../utils/cn';

interface ProjectsProps {
  lang: 'es' | 'en';
}

const ProjectCard: React.FC<{ project: any; lang: 'es' | 'en'; index: number }> = ({ project, lang, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "glass-card overflow-hidden flex flex-col h-full",
        project.isFeatured ? "md:col-span-2" : ""
      )}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
             {/* Simple icon mapping or fallback */}
             {project.icon === 'robot' && <Code2 size={24} />}
             {project.icon === 'hospital-alt' && <Database size={24} />}
             {project.icon === 'globe-americas' && <Search size={24} />}
             {project.icon === 'activity' && <Activity size={24} />}
             {!project.icon && <Terminal size={24} />}
          </div>
          <div className="flex gap-4 text-white/40">
            {project.github && (
              <a href={project.github} target="_blank" className="hover:text-primary transition-colors"><Github size={20} /></a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" className="hover:text-primary transition-colors"><ExternalLink size={20} /></a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">{project.title[lang]}</h3>
        <p className="text-white/60 mb-6 leading-relaxed flex-grow">
          {project.description[lang]}
        </p>

        {project.terminalContent && (
          <div className="bg-black/50 rounded-xl p-4 mb-6 font-mono text-sm border border-white/5 shadow-inner">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <ul className="space-y-2">
              {project.terminalContent[lang].map((item: any, i: number) => (
                <li key={i} className="flex gap-3 text-white/80">
                  <span className="text-yellow-500/80">
                    {item.icon === 'brain' && <Brain size={14} className="inline mr-1" />}
                    {item.icon === 'bar-chart' && <BarChart3 size={14} className="inline mr-1" />}
                    {item.icon === 'map-pin' && <MapPin size={14} className="inline mr-1" />}
                    {item.icon === 'database' && <Database size={14} className="inline mr-1" />}
                    {item.icon === 'search-plus' && <Search size={14} className="inline mr-1" />}
                    {item.icon === 'project-diagram' && <Code2 size={14} className="inline mr-1" />}
                    ➜
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item.text }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/40 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {lang === 'es' ? 'Proyectos' : 'Featured'} <span className="text-primary">{lang === 'es' ? 'Destacados' : 'Projects'}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
