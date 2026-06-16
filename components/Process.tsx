import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, BrainCircuit, TrendingUp } from 'lucide-react';

interface ProcessProps {
  t: any;
  fadeInUp: any;
}

export const Process: React.FC<ProcessProps> = ({ t, fadeInUp }) => {
  const steps = [
    { icon: <Search size={24} />, ...t.process.s1 },
    { icon: <PenTool size={24} />, ...t.process.s2 },
    { icon: <BrainCircuit size={24} />, ...t.process.s3 },
    { icon: <TrendingUp size={24} />, ...t.process.s4 }
  ];

  return (
    <section id="process" className="py-32 px-6 max-w-screen-xl mx-auto">
      <motion.div {...fadeInUp} className="mb-20">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase">
          {t.process.title} <br />
          <span className="font-serif italic normal-case font-light text-blue-500 text-4xl md:text-6xl">{t.process.subtitle}</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }} className="group p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:bg-zinc-900/40 hover:border-blue-500/30 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">{step.icon}</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
