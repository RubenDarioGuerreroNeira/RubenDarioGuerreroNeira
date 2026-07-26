import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Briefcase } from 'lucide-react';

interface StatsProps {
    lang: 'es' | 'en';
}

const Stats: React.FC<StatsProps> = ({ lang }) => {
    const stats = [
        {
            icon: <Code2 size={24} />,
            value: '120+',
            label: lang === 'es' ? 'Consultas SQL Optimizadas' : 'SQL Queries Optimized',
        },
        {
            icon: <Users size={24} />,
            value: '95%',
            label: lang === 'es' ? 'Reducción Queries N+1' : 'N+1 Queries Reduction',
        },
        {
            icon: <Briefcase size={24} />,
            value: '10+',
            label: lang === 'es' ? 'Proyectos Backend' : 'Backend Projects',
        },
    ];

    return (
        <section className="py-16 border-y border-white/5 bg-white/[0.02]">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group"
                        >
                            <div className="text-primary/80 group-hover:text-primary transition-colors">
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base text-white/50 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;