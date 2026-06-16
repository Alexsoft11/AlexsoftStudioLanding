import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, ChevronRight, Phone, User, Send, Clock, 
  Layout, ShoppingCart, BrainCircuit, Database, Globe, Smartphone, Monitor,
  ShieldCheck, Zap, Cpu
} from 'lucide-react';
import { cn } from '../lib/utils';

interface CalculatorProps {
  t: any;
  lang?: string;
}

interface OrderData {
  type: string;
  platforms: string[];
  features: string[];
  complexity: 'Simple' | 'Medium' | 'Complex';
  finalPrice: string;
}

export const Calculator: React.FC<CalculatorProps> = ({ t, lang = 'ru' }) => {
  const [step, setStep] = useState(1);
  const [order, setOrder] = useState<OrderData>({
    type: '',
    platforms: [],
    features: [],
    complexity: 'Medium',
    finalPrice: '$0'
  });
  const [userInfo, setUserInfo] = useState({ name: '', contact: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const tc = t.calculator;

  const steps = useMemo(() => [
    { id: 1, title: tc.steps.s1 },
    { id: 2, title: tc.steps.s2 },
    { id: 3, title: tc.steps.s3 },
    { id: 4, title: tc.steps.s4 },
    { id: 5, title: tc.steps.s5 }
  ], [tc]);

  const projectTypes = useMemo(() => [
    { id: 'landing', label: tc.types.landing, base: 1500, icon: <Layout size={24} /> },
    { id: 'ecommerce', label: tc.types.ecommerce, base: 4500, icon: <ShoppingCart size={24} /> },
    { id: 'saas', label: tc.types.saas, base: 7500, icon: <Database size={24} /> },
    { id: 'ai', label: tc.types.ai, base: 15000, icon: <BrainCircuit size={24} /> }
  ], [tc]);

  const platforms = useMemo(() => [
    { id: 'web', label: tc.platforms.web, multiplier: 1, icon: <Globe size={20} /> },
    { id: 'mobile', label: tc.platforms.mobile, multiplier: 1.6, icon: <Smartphone size={20} /> },
    { id: 'desktop', label: tc.platforms.desktop, multiplier: 1.3, icon: <Monitor size={20} /> }
  ], [tc]);

  const complexities = useMemo(() => [
    { id: 'Simple', label: tc.complexities.simple, multiplier: 0.9, icon: <Zap size={20} /> },
    { id: 'Medium', label: tc.complexities.medium, multiplier: 1.2, icon: <ShieldCheck size={20} /> },
    { id: 'Complex', label: tc.complexities.complex, multiplier: 1.8, icon: <Cpu size={20} /> }
  ] as const, [tc]);

  const featuresList = useMemo(() => [
    { id: 'auth', label: tc.features.auth, price: 800 },
    { id: 'ai_chat', label: tc.features.ai_chat, price: 2500 },
    { id: 'crm', label: tc.features.crm, price: 3000 },
    { id: 'payment', label: tc.features.payment, price: 600 },
    { id: 'analytics', label: tc.features.analytics, price: 1800 }
  ], [tc]);

  const calculatePrice = useCallback(() => {
    const selectedType = projectTypes.find(p => p.id === order.type);
    let total = selectedType ? selectedType.base : 0;

    order.platforms.forEach(pId => {
      const match = platforms.find(p => p.id === pId);
      if (match) total *= match.multiplier;
    });

    const compMatch = complexities.find(c => c.id === order.complexity);
    if (compMatch) total *= compMatch.multiplier;

    order.features.forEach(fId => {
      const match = featuresList.find(f => f.id === fId);
      if (match) total += match.price;
    });

    return Math.round(total);
  }, [order.type, order.platforms, order.features, order.complexity, projectTypes, platforms, complexities, featuresList]);

  useEffect(() => {
    const price = calculatePrice();
    setOrder(prev => ({ ...prev, finalPrice: `$${price.toLocaleString()}` }));
  }, [calculatePrice]);

  const togglePlatform = (id: string) => {
    setOrder(prev => ({
      ...prev,
      platforms: prev.platforms.includes(id) 
        ? prev.platforms.filter(p => p !== id) 
        : [...prev.platforms, id]
    }));
  };

  const toggleFeature = (id: string) => {
    setOrder(prev => ({
      ...prev,
      features: prev.features.includes(id) 
        ? prev.features.filter(f => f !== id) 
        : [...prev.features, id]
    }));
  };

  const handleSubmit = async () => {
    setErrorMessage(null);
    
    const messages = {
      en: {
        fill: "Please fill in all your details.",
        fail: "Error sending request. Please try again.",
        network: "Network error. Please check your internet connection."
      },
      ru: {
        fill: "Пожалуйста, заполните ваши контакты.",
        fail: "Ошибка при отправке запроса. Пожалуйста, попробуйте снова.",
        network: "Ошибка сети. Пожалуйста, проверьте интернет-соединение."
      },
      uz: {
        fill: "Iltimos, aloqa ma'lumotlaringizni to'ldiring.",
        fail: "So'rov yuborishda xatolik. Qaytadan urinib ko'ring.",
        network: "Tarmoq xatosi. Internet aloqasini tekshiring."
      }
    }[lang as 'en' | 'ru' | 'uz'] || {
      fill: "Please fill in all your details.",
      fail: "Error sending request. Please try again.",
      network: "Network error. Please check your internet connection."
    };

    if (!userInfo.name || !userInfo.contact) {
      setErrorMessage(messages.fill);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderDetails: order, userInfo })
      });
      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || messages.fail);
      }
    } catch (err) {
      setErrorMessage(messages.network);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-32 px-6 max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
        <div className="lg:col-span-2 space-y-8">
          <div className="inline-flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase">
            <span className="w-8 h-px bg-blue-500"></span>
            {tc.badge}
          </div>
          <h2 className="text-3xl md:text-7xl font-display font-black tracking-[-0.04em] uppercase leading-[1.1]">
            {tc.title} <br />
            <span className="text-blue-500">{tc.titleAccent}</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            {tc.sub}
          </p>
          
          <div className="space-y-4 pt-10">
            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-6">
                <div className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-500",
                  step >= s.id ? "bg-blue-600 border-blue-600 text-white" : "border-white/10 text-zinc-600"
                )}>
                  {s.id}
                </div>
                <span className={cn(
                  "font-display font-bold text-[10px] uppercase tracking-widest",
                  step === s.id ? "text-white" : "text-zinc-600"
                )}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 bg-white/5 border border-white/5 rounded-[3rem] p-6 md:p-14 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-8">
             <div className="text-right">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{tc.final.quote}</div>
                <div className="text-4xl font-display font-black text-blue-500">{order.finalPrice}</div>
             </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{tc.final.natureTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectTypes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setOrder({ ...order, type: t.id })}
                      className={cn(
                        "p-8 rounded-3xl border-2 text-left transition-all duration-500 group",
                        order.type === t.id ? "bg-blue-600 border-blue-600" : "bg-white/5 border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className={cn("mb-4 transition-colors", order.type === t.id ? "text-white" : "text-blue-500")}>
                        {React.cloneElement(t.icon as React.ReactElement, { size: 32 })}
                      </div>
                      <div className="text-sm font-display font-bold uppercase tracking-widest">{t.label}</div>
                    </button>
                  ))}
                </div>
                <button 
                  disabled={!order.type}
                  onClick={() => setStep(2)}
                  className="w-full py-6 rounded-2xl bg-white text-black font-display font-black uppercase text-xs tracking-widest disabled:opacity-30"
                >
                  {tc.final.next}
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{tc.final.deploymentTitle}</h3>
                <div className="space-y-4">
                  {platforms.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => togglePlatform(p.id)}
                      className={cn(
                        "w-full p-8 rounded-3xl border-2 flex items-center justify-between transition-all duration-500",
                        order.platforms.includes(p.id) ? "bg-blue-600 border-blue-600" : "bg-white/5 border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn("p-2 rounded-lg bg-white/5", order.platforms.includes(p.id) ? "text-white" : "text-blue-500")}>{p.icon}</div>
                        <div className="text-sm font-display font-bold uppercase tracking-widest">{p.label}</div>
                      </div>
                      {order.platforms.includes(p.id) && <CheckCircle2 size={24} />}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 py-6 rounded-2xl border border-white/10 font-display font-bold uppercase text-[10px] tracking-widest">{tc.final.back}</button>
                  <button onClick={() => setStep(3)} className="flex-[2] py-6 rounded-2xl bg-white text-black font-display font-black uppercase text-xs tracking-widest">{tc.final.next}</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{tc.final.complexityTitle}</h3>
                <div className="space-y-4">
                  {complexities.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setOrder({ ...order, complexity: c.id })}
                      className={cn(
                        "w-full p-8 rounded-3xl border-2 flex items-center justify-between transition-all duration-500",
                        order.complexity === c.id ? "bg-blue-600 border-blue-600" : "bg-white/5 border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-center gap-4 text-left">
                        <div className={cn("p-2 rounded-lg bg-white/5", order.complexity === c.id ? "text-white" : "text-blue-500")}>{c.icon}</div>
                        <div className="text-sm font-display font-bold uppercase tracking-widest">{c.label}</div>
                      </div>
                      {order.complexity === c.id && <CheckCircle2 size={24} />}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="flex-1 py-6 rounded-2xl border border-white/10 font-display font-bold uppercase text-[10px] tracking-widest">{tc.final.back}</button>
                  <button onClick={() => setStep(4)} className="flex-[2] py-6 rounded-2xl bg-white text-black font-display font-black uppercase text-xs tracking-widest">{tc.final.next}</button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{tc.final.featuresTitle}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {featuresList.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={cn(
                        "p-6 rounded-2xl border-2 flex items-center justify-between transition-all duration-500",
                        order.features.includes(f.id) ? "bg-blue-600 border-blue-600" : "bg-white/5 border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="text-left">
                        <div className="text-[12px] font-display font-bold uppercase tracking-widest">{f.label}</div>
                        <div className="text-[10px] font-mono opacity-50">+ ${f.price}</div>
                      </div>
                      <div className={cn("w-6 h-6 rounded-full border flex items-center justify-center", order.features.includes(f.id) ? "bg-white border-white" : "border-white/20")}>
                        {order.features.includes(f.id) && <ChevronRight size={14} className="text-blue-600" />}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(3)} className="flex-1 py-6 rounded-2xl border border-white/10 font-display font-bold uppercase text-[10px] tracking-widest">{tc.final.back}</button>
                  <button onClick={() => setStep(5)} className="flex-[2] py-6 rounded-2xl bg-white text-black font-display font-black uppercase text-xs tracking-widest">{tc.final.finish}</button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-10"
              >
                {!isSuccess ? (
                  <>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{tc.final.title}</h3>
                    <div className="p-6 rounded-3xl bg-blue-600/10 border border-blue-500/20 space-y-4">
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-blue-400">
                        <span>{tc.final.projectValue}</span>
                        <span>{order.finalPrice}</span>
                      </div>
                      <div className="h-px bg-blue-500/20" />
                      <div className="space-y-2">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                           <User className="text-blue-500 flex-shrink-0" size={20} />
                           <input 
                             placeholder={tc.final.formName} 
                             className="bg-transparent border-none outline-none w-full text-sm font-light text-white placeholder:text-zinc-600"
                             value={userInfo.name}
                             onChange={e => {
                               setUserInfo({...userInfo, name: e.target.value});
                               if (errorMessage) setErrorMessage(null);
                             }}
                           />
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                           <Phone className="text-blue-500 flex-shrink-0" size={20} />
                           <input 
                             placeholder={tc.final.formContact} 
                             className="bg-transparent border-none outline-none w-full text-sm font-light text-white placeholder:text-zinc-600"
                             value={userInfo.contact}
                             onChange={e => {
                               setUserInfo({...userInfo, contact: e.target.value});
                               if (errorMessage) setErrorMessage(null);
                             }}
                           />
                        </div>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center overflow-hidden leading-normal"
                        >
                          {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full py-8 rounded-2xl bg-blue-600 text-white font-display font-black uppercase text-sm tracking-widest shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:bg-blue-500 transition-all flex items-center justify-center gap-4"
                    >
                      {isSubmitting ? <Clock className="animate-spin" size={20} /> : <><Send size={20} /> {tc.final.cta}</>}
                    </button>
                    <button onClick={() => setStep(4)} className="w-full text-[10px] font-display font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
                      {tc.final.back}
                    </button>
                  </>
                ) : (
                  <div className="py-20 text-center space-y-8">
                     <div className="w-24 h-24 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <CheckCircle2 size={48} className="text-blue-500" />
                        </motion.div>
                     </div>
                     <h3 className="text-3xl font-display font-black uppercase tracking-tight italic">{tc.final.successTitle}</h3>
                     <p className="text-zinc-400 font-light text-lg">{tc.final.successSub}</p>
                     <button onClick={() => setStep(1)} className="text-blue-500 font-display font-bold uppercase text-[10px] tracking-widest border-b border-blue-500 pb-1">{tc.final.reset}</button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
