
import React from 'react';

const GrainOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay grain" />
  );
};

export default GrainOverlay;
