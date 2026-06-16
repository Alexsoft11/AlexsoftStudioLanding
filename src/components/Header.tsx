import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { cn } from '../lib/utils';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for the fixed navbar
      const yOffset = -offset;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const yOffset = -offset;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 200); // Wait for the mobile menu closing animation to proceed slightly
  };

  return (
    <>
      <nav className={cn("fixed top-0 w-full z-50 transition-all duration-500", isScrolled ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8")}>
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={scrollToTop}
            className="text-[10px] sm:text-sm font-display font-extrabold tracking-[0.1em] sm:tracking-[0.3em] uppercase flex items-center gap-1 group cursor-pointer border-none bg-transparent focus:outline-none"
          >
            <span>ALEXSOFT</span><span className="text-blue-500 group-hover:text-white transition-colors duration-500">STUDIO</span>
          </button>

          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 backdrop-blur-md">
              <div className="px-2 text-zinc-500">
                <Globe size={14} />
              </div>
              {(['en', 'ru', 'uz'] as Language[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={cn("px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-display font-bold uppercase transition-all relative", lang === l ? "text-white" : "text-zinc-500")}>
                  {lang === l && <motion.div layoutId="activeLang" className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />}
                  {l}
                </button>
              ))}
            </div>
            
            <div className="hidden lg:flex items-center gap-10">
              <a href="#works" onClick={(e) => scrollToSection(e, 'works')} className="text-[10px] font-display font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.works}</a>
              <a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="text-[10px] font-display font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase">Calculator</a>
              <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="text-[10px] font-display font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.process}</a>
              <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-[10px] font-display font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.pricing}</a>
              <a href="tel:+998911530202" className="text-[10px] font-display font-extrabold tracking-[0.2em] bg-white text-black px-6 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-500 uppercase shadow-lg shadow-white/5">{t.nav.touch}</a>
            </div>

            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-white"><Menu size={20} /></button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[120] bg-[#080808] flex flex-col p-10">
            <div className="flex justify-between items-center mb-16">
               <button 
                 onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
                 className="text-sm font-black tracking-[0.3em] uppercase text-left border-none bg-transparent focus:outline-none cursor-pointer"
               >
                 ALEXSOFT<span className="text-blue-500">STUDIO</span>
               </button>
               <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-8">
              <a onClick={(e) => handleMobileNavClick(e, 'works')} href="#works" className="text-3xl font-black uppercase">{t.nav.works}</a>
              <a onClick={(e) => handleMobileNavClick(e, 'calculator')} href="#calculator" className="text-3xl font-black uppercase">Calculator</a>
              <a onClick={(e) => handleMobileNavClick(e, 'process')} href="#process" className="text-3xl font-black uppercase">{t.nav.process}</a>
              <a onClick={(e) => handleMobileNavClick(e, 'pricing')} href="#pricing" className="text-3xl font-black uppercase">{t.nav.pricing}</a>
              <a href="tel:+998911530202" className="text-3xl font-black uppercase text-blue-500">{t.nav.touch}</a>
            </div>
            
            <div className="mt-auto pt-10 border-t border-white/5">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md w-fit">
                <div className="px-4 text-zinc-500">
                  <Globe size={20} />
                </div>
                {(['en', 'ru', 'uz'] as Language[]).map((l) => (
                  <button key={l} onClick={() => { setLang(l); setMobileMenuOpen(false); }} className={cn("px-6 py-3 rounded-full text-xs font-display font-bold uppercase transition-all relative", lang === l ? "text-white" : "text-zinc-500")}>
                    {lang === l && <motion.div layoutId="activeLangMobile" className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />}
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
