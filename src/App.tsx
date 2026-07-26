import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import { portfolioData } from './data/portfolio';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';

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
    <ThemeProvider>
      <div className="relative min-h-screen selection:bg-primary selection:text-black">
        <canvas id="bg-canvas" className="fixed top-0 left-0 w-full h-full z-[-1] opacity-60" />
        <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] pointer-events-none" />

        <Navbar lang={lang} setLang={setLang} />

        <main>
          <Hero lang={lang} />

          <Stats lang={lang} />

          <About lang={lang} />

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
                  <a href={portfolioData.whatsapp} target="_blank" className="btn btn-secondary px-8 py-4 text-lg border-green-500/20 hover:border-green-500/50 hover:bg-green-500/5 transition-colors">
                    <svg className="w-6 h-6 text-green-500 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a href={portfolioData.telegram} target="_blank" className="btn btn-secondary px-8 py-4 text-lg border-sky-500/20 hover:border-sky-500/50 hover:bg-sky-500/5 transition-colors">
                    <svg className="w-6 h-6 text-sky-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.12 1.13-.64 4.2-1.02 6.22-.16.85-.47 1.13-.77 1.16-.66.06-1.16-.43-1.8-.85-.99-.65-1.55-1.06-2.52-1.7-1.11-.74-.39-1.15.24-1.81.17-.17 3.03-2.78 3.09-3.03.01-.03.01-.14-.05-.2-.07-.06-.17-.04-.25-.02-.1.02-1.74 1.1-4.92 3.25-.47.32-.89.48-1.26.47-.41-.01-1.2-.23-1.79-.42-.72-.24-1.29-.36-1.24-.76.03-.21.32-.42.87-.63 3.42-1.49 5.71-2.47 6.85-2.95 3.25-1.37 3.93-1.61 4.37-1.61.1 0 .31.02.45.14.12.1.15.25.17.35-.01.07-.01.14-.02.21z" />
                    </svg>
                    Telegram
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
    </ThemeProvider>
  );
}

export default App;