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
        <span className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs mb-8 tracking-[0.4em] uppercase">
          <span className="w-12 h-px bg-blue-500"></span>{t.hero.badge}
        </span>
        <h1 className="text-[13vw] md:text-[11vw] font-black leading-[0.8] mb-12 tracking-tighter uppercase">
          <span className="font-serif italic normal-case font-light block mb-4 text-[8vw] md:text-[6vw]">{t.hero.titleLine1}</span>
          <span className="outline-text block">{t.hero.titleLine2}</span>
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mt-12 items-end">
        <p className="text-zinc-400 text-lg md:text-2xl leading-relaxed font-light max-w-xl">{t.hero.sub}</p>
        <div className="flex justify-start lg:justify-end">
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="tel:+998911530202" 
            className="group relative w-44 h-44 md:w-56 md:h-56 rounded-full border border-white/10 flex flex-col items-center justify-center text-center p-6 hover:border-blue-500 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <ArrowUpRight size={32} className="relative z-10 text-blue-500 group-hover:text-white mb-2 transition-colors" />
            <span className="relative z-10 font-bold text-xs md:text-sm tracking-[0.2em] uppercase group-hover:text-white transition-colors">{t.hero.cta}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
