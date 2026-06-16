import React from 'react';

const GrainOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] grain" />
  );
};

export default GrainOverlay;
