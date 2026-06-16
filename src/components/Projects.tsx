import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ArrowUpRight } from 'lucide-react';
import { ProjectData } from '../types';
import { cn } from '../lib/utils';

interface ProjectsProps {
  t: any;
  onProjectSelect: (p: ProjectData) => void;
  fadeInUp: any;
}

export const Projects: React.FC<ProjectsProps> = ({ t, onProjectSelect, fadeInUp }) => {
  const projects: ProjectData[] = [
    { ...t.projects.p1, id: 'billz', image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop", size: "large" },
    { ...t.projects.p5, id: 'medcheck', image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop", size: "small" },
    { ...t.projects.p2, id: 'express24', image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1906&auto=format&fit=crop", size: "small" },
    { ...t.projects.p6, id: 'logistics', image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", size: "large" },
    { ...t.projects.p3, id: 'imzo', image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop", size: "small" },
    { ...t.projects.p4, id: 'zamon', image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop", size: "small" }
  ];

  return (
    <section id="works" className="py-32 px-6 max-w-screen-xl mx-auto">
      <motion.div {...fadeInUp} className="mb-20">
        <h2 className="text-4xl md:text-7xl font-display font-black tracking-[-0.04em] uppercase leading-[1.1]">
          {t.projects.title} <br />
          <span className="text-blue-500 text-3xl md:text-6xl">{t.projects.subtitle}</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            {...fadeInUp} 
            className={cn(
              "group relative overflow-hidden rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 cursor-pointer transform-gpu transition-all duration-700 hover:border-blue-500/50 flex flex-col justify-end min-h-[400px] sm:min-h-[480px]", 
              (p as any).size === "large" ? "md:row-span-2 md:min-h-[650px]" : ""
            )}
            onClick={() => onProjectSelect(p)}
          >
            {/* Immersive full-card background image with uniform cinematic gradient overlay */}
            <div className="absolute inset-0 overflow-hidden z-0">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
            </div>
            
            <div className="absolute top-8 right-8 z-10">
              <div className="px-4 py-2 rounded-full bg-blue-600/90 backdrop-blur-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                <BrainCircuit size={14} className="text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.projects.aiBadge}</span>
              </div>
            </div>

            <div className="relative z-10 p-8 md:p-10 w-full">
               <div className="flex justify-between items-end">
                  <div>
                    <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-3 block">{p.cat}</span>
                    <h3 className="text-3xl font-display font-extrabold mb-4 uppercase leading-none tracking-tight">{p.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 max-w-sm transition-all duration-500">{p.desc}</p>
                    <button className="inline-flex items-center gap-2 text-xs font-bold uppercase border-b border-white/20 pb-1 group-hover:border-blue-500 transition-colors">
                      {t.projects.view} <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
