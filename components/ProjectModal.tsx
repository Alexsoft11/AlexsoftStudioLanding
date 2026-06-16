import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BrainCircuit, TrendingUp, Target, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { ProjectData } from '../src/types';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  t: any;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, t }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10"
          >
            <X size={20} />
          </button>

          <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 md:hidden" />
          </div>

          <div className="flex-1 p-8 md:p-16 overflow-y-auto bg-gradient-to-br from-zinc-900/50 to-black/50">
            <div className="mb-10">
               <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">{project.cat}</span>
               <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">{project.title}</h2>
               <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light mb-8">{project.fullDesc}</p>
               
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <h5 className="text-[10px] font-bold uppercase text-zinc-500 mb-1">{t.projects.priceTitle}</h5>
                    <p className="text-blue-500 font-mono text-lg font-bold">{project.price}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <h5 className="text-[10px] font-bold uppercase text-zinc-500 mb-1">{t.projects.aiBadge}</h5>
                    <p className="text-zinc-200 font-bold uppercase text-xs">Integrated & Active</p>
                  </div>
               </div>

               <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
                    <BrainCircuit size={16} /> {t.projects.aiBenefitTitle}
                  </h4>
                  <p className="text-zinc-200 text-sm leading-relaxed">{project.aiBenefit}</p>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                  <TrendingUp size={14} className="text-blue-500" /> {t.projects.businessValueTitle}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.businessValue}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                  <Target size={14} className="text-blue-500" /> {t.projects.challengesTitle}
                </h4>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-3 text-zinc-500 text-sm">
                      <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-4 border-t border-white/5 pt-10">
               <motion.a 
                whileHover={{ scale: 1.02 }}
                href="tel:+998911530202"
                className="flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest"
               >
                 Request Similar Solution <ArrowUpRight size={16} />
               </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
