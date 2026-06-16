import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface FooterProps {
  t: any;
  fadeInUp: any;
}

export const Footer: React.FC<FooterProps> = ({ t, fadeInUp }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <footer ref={containerRef} className="pt-20 pb-10 px-6 max-w-screen-xl mx-auto overflow-hidden">
      <motion.div {...fadeInUp} className="relative py-20 md:py-48 px-6 md:px-10 rounded-[3.5rem] bg-zinc-900/40 border border-white/5 text-center shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.2),transparent)] pointer-events-none" />
        <h2 className="text-3xl md:text-8xl font-display font-black leading-[1.1] mb-16 uppercase relative z-10 tracking-[-0.04em]">
          {t.cta.title} <br /> <span className="text-blue-500">{t.cta.highlight}</span>
        </h2>
        <div className="relative z-10 flex flex-col items-center gap-10">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+998911530202"
            className="px-12 py-6 rounded-2xl bg-white text-black font-display font-black uppercase text-sm tracking-[0.2em] shadow-xl shadow-white/5"
          >
             Schedule Discovery Call
          </motion.a>
          <div className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 uppercase font-display font-bold text-[10px] tracking-[0.2em]">
            <MapPin size={16} className="text-blue-500" /> {t.cta.sub}
          </div>
        </div>
      </motion.div>

      <div className="mt-48 relative overflow-hidden h-[30vw] flex items-end">
        <motion.div 
          style={{ y: watermarkY }} 
          className="absolute bottom-0 left-0 w-full pointer-events-none"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap text-[25vw] font-display font-extrabold text-white/[0.02] uppercase tracking-tighter"
          >
            <span className="mr-[5vw]">ALEXSOFT</span>
            <span className="mr-[5vw]">ALEXSOFT</span>
            <span className="mr-[5vw]">ALEXSOFT</span>
            <span className="mr-[5vw]">ALEXSOFT</span>
          </motion.div>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5 pt-12 relative z-10 w-full bg-[#080808]/50 backdrop-blur-sm">
          <div className="text-[9px] font-mono uppercase text-zinc-600 tracking-[0.3em] font-bold">{t.contact.rights}</div>
          <div className="flex gap-12">
            <a href="https://github.com/Alexsoft11" target="_blank" className="text-[9px] font-mono uppercase text-zinc-500 hover:text-white transition-all tracking-widest font-bold">{t.contact.github}</a>
            <a href="#" className="text-[9px] font-mono uppercase text-zinc-500 hover:text-white transition-all tracking-widest font-bold">{t.contact.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
