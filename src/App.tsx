
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, Zap, Target, Code2, Menu, X, 
  ExternalLink, MapPin, Sparkles, Send, Bot, User,
  Database, Layout, Cpu, Smartphone, ShieldCheck, CheckCircle2,
  Layers, Rocket, Briefcase, Search, PenTool, Terminal, Play,
  ChevronRight, Globe, BrainCircuit, BarChart3, Clock, TrendingUp,
  Wallet, Activity, Truck, HeartPulse, ShoppingCart, UtensilsCrossed, Store
} from 'lucide-react';
import GrainOverlay from './components/GrainOverlay';
import PremiumBackground from './components/PremiumBackground';
import { cn } from './lib/utils';
import { Language, ProjectData } from './types';
import { translations } from './constants/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Calculator } from './components/Calculator';
import { AIChat } from './components/AIChat';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function PremiumPortfolio() {
  const [lang, setLang] = useState<Language>('ru');
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const t = translations[lang];

  return (
    <div className="text-zinc-100 min-h-screen selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden relative">
      <CustomCursor />
      <GrainOverlay />
      <PremiumBackground />
      
      <motion.button 
        onClick={() => setChatOpen(!chatOpen)} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-400/20"
      >
        <AnimatePresence mode="wait">
          {chatOpen ? (
            <motion.div key="c" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="s" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <Sparkles size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} t={t} />
      <Header lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        <Process t={t} fadeInUp={fadeInUp} />
        <Projects t={t} onProjectSelect={setSelectedProject} fadeInUp={fadeInUp} />
        <Calculator t={t} lang={lang} />
        <Pricing t={t} fadeInUp={fadeInUp} />
        <Footer t={t} fadeInUp={fadeInUp} />
      </main>
    </div>
  );
}
