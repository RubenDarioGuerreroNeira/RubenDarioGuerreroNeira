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
                    className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed text-white/70"
                >
                    {portfolioData.about[lang].map((paragraph, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;