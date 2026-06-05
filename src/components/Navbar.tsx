import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavbarProps {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'es' ? 'Sobre mí' : 'About', href: '#about' },
    { name: lang === 'es' ? 'Experiencia' : 'Experience', href: '#experience' },
    { name: lang === 'es' ? 'Stack' : 'Stack', href: '#tech-stack' },
    { name: lang === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-black/60 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          RDGN<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
            >
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>
            <a href="#contact" className="btn btn-primary py-2 px-6 text-sm">
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <button
                  onClick={() => {
                    setLang(lang === 'es' ? 'en' : 'es');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-lg font-bold"
                >
                  <Globe size={20} />
                  {lang === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-primary w-full"
                >
                  {lang === 'es' ? 'Contacto' : 'Contact'}
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
