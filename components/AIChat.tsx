import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  t: any;
}

export const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose, t }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: t.ai.welcome }]);
    }
  }, [t.ai.welcome, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Add a placeholder for the assistant's response
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const streamResponse = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the Alexsoft Studio Business Consultant AI. 
          Alexsoft Studio builds high-end software in Uzbekistan.
          Tone: Sophisticated, business-focused, professional.
          Key values: Automation, AI-driven profit increase, market-leading quality.
          Our projects: Billz, Express24, IMZO, Zamon Pay, MedCheck, Tashkent Logistics.
          Pricing: Landing pages from $1,500, SaaS from $5,000, Enterprise AI from $15,000.
          Speak clearly, explain technology in terms of ROI and business growth.`,
        }
      });

      let fullText = '';
      for await (const chunk of streamResponse) {
        const text = (chunk as GenerateContentResponse).text;
        if (text) {
          fullText += text;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'assistant', content: fullText };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { role: 'assistant', content: t.ai.error };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 md:right-8 z-[110] w-[calc(100vw-3rem)] md:w-96 h-[500px] bg-[#0c0c0c]/90 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
        >
          <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <Sparkles size={16} className="text-white" />
              </div>
              <h4 className="text-xs font-bold tracking-widest uppercase">Alexsoft Business AI</h4>
            </div>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn("flex gap-3 max-w-[85%]", m.role === 'user' ? "ml-auto flex-row-reverse" : "")}
              >
                <div className={cn("w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white", m.role === 'assistant' ? "bg-zinc-800" : "bg-blue-600")}>
                  {m.role === 'assistant' ? <Bot size={12} /> : <User size={12} />}
                </div>
                <div className={cn("p-4 rounded-2xl text-[13px] leading-relaxed", m.role === 'assistant' ? "bg-white/5 text-zinc-300 border border-white/5" : "bg-blue-600 text-white shadow-lg")}>
                  {m.content || (isLoading && i === messages.length - 1 ? "..." : "")}
                </div>
              </motion.div>
            ))}
            {isLoading && messages[messages.length - 1].content === '' && (
              <div className="flex gap-3 items-center text-zinc-500">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center"><Bot size={12} /></div>
                <span className="text-[10px] animate-pulse tracking-widest uppercase font-bold">Consulting...</span>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.ai.placeholder}
                className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button onClick={handleSend} disabled={!input.trim() || isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center disabled:opacity-50 hover:bg-blue-500 transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
