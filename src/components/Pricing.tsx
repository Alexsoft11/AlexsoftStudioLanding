import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShoppingCart, UtensilsCrossed, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface PricingProps {
  t: any;
  fadeInUp: any;
}

export const Pricing: React.FC<PricingProps> = ({ t, fadeInUp }) => {
  const tiers = [
    { icon: <Zap size={24} />, ...t.pricing.landing, size: 'small' },
    { icon: <ShoppingCart size={24} />, ...t.pricing.shop, size: 'large' },
    { icon: <UtensilsCrossed size={24} />, ...t.pricing.kitchen, size: 'small' },
    { icon: <ShieldCheck size={24} />, ...t.pricing.enterprise, size: 'large' }
  ];

  return (
    <section id="pricing" className="py-32 px-6 max-w-screen-xl mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-20">
        <h2 className="text-4xl md:text-7xl font-display font-black tracking-[-0.04em] uppercase leading-[1.1]">
          {t.pricing.title} <br />
          <span className="text-blue-500 text-3xl md:text-6xl">{t.pricing.subtitle}</span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(350px,auto)]">
        {/* Landing - Small (2 cols) */}
        <motion.div 
          {...fadeInUp}
          className="md:col-span-2 p-6 sm:p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 flex flex-col group"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-display font-extrabold mb-1 uppercase tracking-tight leading-tight">{t.pricing.landing.name}</h3>
          <div className="text-blue-500 font-mono text-xl font-bold mb-8 uppercase tracking-widest">{t.pricing.landing.price}</div>
          <ul className="space-y-4 mb-10 flex-1">
            {t.pricing.landing.features.map((f: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-zinc-400 text-[13px] leading-tight">
                <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <a href="tel:+998911530202" className="block w-full py-4 rounded-xl bg-white/5 border border-white/10 text-center text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
            Start Project
          </a>
        </motion.div>

        {/* Shop - Large (4 cols) */}
        <motion.div 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="md:col-span-4 p-6 sm:p-10 bg-gradient-to-br from-blue-600/20 to-zinc-900/30 border border-blue-500/20 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 flex flex-col lg:flex-row gap-10 relative overflow-hidden group"
        >
          <div className="absolute top-6 right-6 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Most Popular</div>
          <div className="flex-1 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
              <ShoppingCart size={24} />
            </div>
            <h3 className="text-3xl font-display font-extrabold mb-2 uppercase tracking-tight leading-tight">{t.pricing.shop.name}</h3>
            <div className="text-blue-500 font-mono text-2xl font-bold mb-8 uppercase tracking-widest">{t.pricing.shop.price}</div>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">Perfect for businesses looking to dominate the digital marketplace with seamless integrations and premium user experience.</p>
            <a href="tel:+998911530202" className="mt-auto inline-block w-fit px-10 py-4 rounded-xl bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500">
              Get Started
            </a>
          </div>
          <div className="flex-1 bg-white/5 rounded-3xl p-8 border border-white/5">
            <ul className="space-y-4">
              {t.pricing.shop.features.map((f: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-200 text-sm leading-tight">
                  <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Enterprise - Large (4 cols) */}
        <motion.div 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="md:col-span-4 p-6 sm:p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 flex flex-col lg:flex-row-reverse gap-10 group"
        >
          <div className="flex-1 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-zinc-800 text-blue-500 flex items-center justify-center mb-8 group-hover:-rotate-12 transition-transform duration-500">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-3xl font-display font-extrabold mb-2 uppercase tracking-tight leading-tight">{t.pricing.enterprise.name}</h3>
            <div className="text-blue-500 font-mono text-2xl font-bold mb-8 uppercase tracking-widest">{t.pricing.enterprise.price}</div>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">Enterprise-grade AI solutions tailored to your specific business needs. Maximum security, maximum efficiency.</p>
            <a href="tel:+998911530202" className="mt-auto inline-block w-fit px-10 py-4 rounded-xl bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
              Consult with Experts
            </a>
          </div>
          <div className="flex-1 bg-white/5 rounded-3xl p-8 border border-white/5">
            <ul className="space-y-4">
              {t.pricing.enterprise.features.map((f: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm leading-tight">
                  <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Kitchen - Small (2 cols) */}
        <motion.div 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="md:col-span-2 p-6 sm:p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 flex flex-col group"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
            <UtensilsCrossed size={24} />
          </div>
          <h3 className="text-xl font-display font-extrabold mb-1 uppercase tracking-tight leading-tight">{t.pricing.kitchen.name}</h3>
          <div className="text-blue-500 font-mono text-xl font-bold mb-8 uppercase tracking-widest">{t.pricing.kitchen.price}</div>
          <ul className="space-y-4 mb-10 flex-1">
            {t.pricing.kitchen.features.map((f: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-zinc-400 text-[13px] leading-tight">
                <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <a href="tel:+998911530202" className="block w-full py-4 rounded-xl bg-white/5 border border-white/10 text-center text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
            Start Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};
