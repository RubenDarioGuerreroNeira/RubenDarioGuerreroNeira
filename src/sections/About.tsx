import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

interface AboutProps {
    lang: 'es' | 'en';
}

const About: React.FC<AboutProps> = ({ lang }) => {
    return (
        <section id="about" className="py-24 border-y border-white/5">
            <div className="container px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
                >
                    {lang === 'es' ? 'Sobre' : 'About'} <span className="text-primary">{lang === 'es' ? 'mí' : 'Me'}</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    {portfolioData.about[lang].map((paragraph, i) => (
                        <motion.p
                            key={i}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                            className="text-lg md:text-xl leading-relaxed text-white/70 glass-card p-8 md:p-10 text-center md:text-left hover:bg-white/5 transition-all duration-300"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;