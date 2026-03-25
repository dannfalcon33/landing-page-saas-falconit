import React from 'react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img
    src="/icon.png"
    alt="Falcon IT Logo"
    className={`object-contain drop-shadow-[0_0_15px_rgba(47,93,140,0.5)] ${className}`}
  />
);
