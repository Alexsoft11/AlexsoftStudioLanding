import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  t: any;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 max-w-screen-xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <span className="inline-flex items-center gap-4 text-blue-500 font-mono text-[10px] mb-10 tracking-[0.5em] uppercase">
          <span className="w-8 h-px bg-blue-500"></span>{t.hero.badge}
        </span>
        <h1 className="text-6xl sm:text-7xl md:text-[8vw] font-display font-black leading-[1.1] mb-12 tracking-[-0.04em] uppercase">
          <span className="block mb-2 text-white/90">{t.hero.titleLine1}</span>
          <span className="outline-text block hover:text-white transition-all duration-700">{t.hero.titleLine2}</span>
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 mt-12 items-end">
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light max-w-xl border-l-2 border-blue-600 pl-8">{t.hero.sub}</p>
        <div className="flex justify-start lg:justify-end">
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="tel:+998911530202" 
            className="group relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border border-white/10 flex flex-col items-center justify-center text-center p-6 hover:border-blue-500 transition-all duration-700 overflow-hidden bg-white/5 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
            <ArrowUpRight size={32} className="relative z-10 text-blue-500 group-hover:text-white mb-2 transition-colors duration-500" />
            <span className="relative z-10 font-display font-bold text-[10px] tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-500">{t.hero.cta}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
