import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Language } from '../src/types';
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

  return (
    <>
      <nav className={cn("fixed top-0 w-full z-50 transition-all duration-500", isScrolled ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8")}>
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          <div className="text-sm font-black tracking-[0.3em] uppercase flex items-center gap-1 group cursor-default">
            <span>ALEXSOFT</span><span className="text-blue-500 group-hover:text-white transition-colors">STUDIO</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex bg-white/5 border border-white/10 rounded-full p-0.5">
              {(['en', 'ru', 'uz'] as Language[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={cn("px-3 py-1 rounded-full text-[9px] font-bold uppercase transition-all relative", lang === l ? "text-white" : "text-zinc-500")}>
                  {lang === l && <motion.div layoutId="activeLang" className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />}
                  {l}
                </button>
              ))}
            </div>
            <a href="#works" className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.works}</a>
            <a href="#process" className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.process}</a>
            <a href="#pricing" className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.pricing}</a>
            <a href="tel:+998911530202" className="text-[10px] font-bold tracking-widest bg-white text-black px-6 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all uppercase">{t.nav.touch}</a>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-white"><Menu size={20} /></button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[120] bg-[#080808] flex flex-col p-10">
            <div className="flex justify-between items-center mb-16">
               <div className="text-sm font-black tracking-[0.3em] uppercase">ALEXSOFT<span className="text-blue-500">STUDIO</span></div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-8">
              <a onClick={() => setMobileMenuOpen(false)} href="#works" className="text-4xl font-black uppercase">{t.nav.works}</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#process" className="text-4xl font-black uppercase">{t.nav.process}</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#pricing" className="text-4xl font-black uppercase">{t.nav.pricing}</a>
              <a href="tel:+998911530202" className="text-4xl font-black uppercase text-blue-500">{t.nav.touch}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
