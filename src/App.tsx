import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import { portfolioData } from './data/portfolio';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars: any[] = [];
    const initStars = () => {
      stars = [];
      const starCount = Math.floor((width * height) / 4000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.02
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.2) star.twinkleSpeed = -star.twinkleSpeed;
      });
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    window.addEventListener('resize', handleResize);
    initStars();
    draw();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-black">
      <canvas id="bg-canvas" className="fixed top-0 left-0 w-full h-full z-[-1] opacity-60" />
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] pointer-events-none" />
      
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        
        <section id="about" className="py-24">
           <div className="container px-6 mx-auto">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="section-title"
             >
               {lang === 'es' ? 'Sobre' : 'About'} <span className="text-primary">{lang === 'es' ? 'mí' : 'Me'}</span>
             </motion.h2>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="max-w-4xl mx-auto glass-card p-8 md:p-12 space-y-8"
             >
                {portfolioData.about[lang].map((paragraph, i) => (
                  <p key={i} className="text-lg md:text-xl leading-relaxed text-white/70" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
             </motion.div>
           </div>
        </section>

        <Experience lang={lang} />
        
        <TechStack />
        
        <Projects lang={lang} />

        <section id="contact" className="py-24">
          <div className="container px-6 mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto glass-card p-12 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                {lang === 'es' ? '¿Hablamos?' : "Let's Talk!"}
              </h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                {lang === 'es' 
                  ? 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.' 
                  : 'I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.'}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a href={`mailto:${portfolioData.email}`} className="btn btn-primary px-8 py-4 text-lg">
                  <Mail size={24} />
                  {lang === 'es' ? 'Envíame un correo' : 'Send me an Email'}
                </a>
                <a href={portfolioData.linkedin} target="_blank" className="btn btn-secondary px-8 py-4 text-lg">
                  <Linkedin size={24} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-white/10 bg-black/40 backdrop-blur-md relative overflow-hidden">
        <div className="container px-6 mx-auto text-center relative z-10">
          <p className="text-white/20 font-bold uppercase tracking-[0.2em] mb-4">
            &copy; 2026 {portfolioData.name}
          </p>
          <p className="text-sm text-white/40">
            Crafted with <span className="text-secondary animate-pulse">❤</span> using <span className="text-primary hover:text-white transition-colors cursor-default">React</span> & <span className="text-primary hover:text-white transition-colors cursor-default">Tailwind v4</span>
          </p>
          <div className="mt-8 flex justify-center gap-4">
             <a href={portfolioData.github} target="_blank" className="text-white/20 hover:text-primary transition-colors">
               <ExternalLink size={20} />
             </a>
          </div>
        </div>
        {/* Abstract background shape for footer */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </footer>
    </div>
  );
}

export default App;
