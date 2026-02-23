
import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const PremiumBackground: React.FC = () => {
  // Используем MotionValue для нормализованных координат (-0.5 до 0.5)
  // Изначально ставим 0, чтобы фон был идеально отцентрирован
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Вычисляем положение относительно центра экрана (от -0.5 до 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    // Для мобильных устройств добавим легкое покачивание, если нет мыши
    let angle = 0;
    const autoAnimate = () => {
      if (mouseX.get() === 0 && mouseY.get() === 0) {
        angle += 0.01;
        // Очень тонкое движение по кругу
        // mouseX.set(Math.cos(angle) * 0.05);
        // mouseY.set(Math.sin(angle) * 0.05);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(autoAnimate, 16);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  // Теперь параллакс не зависит от state dimensions, что экономит рендеры
  // Диапазон ввода всегда [-0.5, 0.5]
  const gridX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const gridY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);
  
  const pX = useTransform(smoothX, [-0.5, 0.5], [50, -50]);
  const pY = useTransform(smoothY, [-0.5, 0.5], [50, -50]);

  // Свечение следует за мышью более активно
  const glowX = useTransform(smoothX, [-0.5, 0.5], ['30%', '70%']);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ['30%', '70%']);

  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#080808] isolation-auto">
      {/* Глубокий градиент подложки */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a0a_0%,#080808_100%)]" />

      {/* Интерактивная сетка */}
      <motion.div 
        style={{ 
          x: gridX, 
          y: gridY,
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          willChange: 'transform'
        }}
        className="absolute inset-[-150px]"
      />

      {/* Динамические световые пятна */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          willChange: 'left, top'
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[140px] rounded-full mix-blend-screen opacity-50"
      />

      {/* Константные акценты */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />

      {/* Слой частиц */}
      <motion.div style={{ x: pX, y: pY, opacity: 0.6 }} className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-400/30"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Финальное затемнение углов (Vignette) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,8,0.6)_100%)]" />
    </div>
  );
};

export default PremiumBackground;
