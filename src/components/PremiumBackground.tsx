import React from 'react';
import { motion } from 'framer-motion';

const PremiumBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#080808] -z-20 overflow-hidden pointer-events-none">
      {/* Aurora glow 1 */}
      <motion.div 
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[130px]" 
      />

      {/* Aurora glow 2 */}
      <motion.div 
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] rounded-full bg-indigo-900/15 blur-[140px]" 
      />

      {/* Aurora glow 3 (Subtle intermediate purple accent) */}
      <motion.div 
        animate={{
          x: [0, 60, -50, 0],
          y: [0, 40, 60, 0],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/5 blur-[120px]" 
      />

      {/* Aurora glow 4 (Central deeply subtle pulse to break static pure solid black in center) */}
      <motion.div 
        animate={{
          opacity: [0.03, 0.07, 0.03],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[25%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/6 blur-[150px]" 
      />
    </div>
  );
};

export default PremiumBackground;
