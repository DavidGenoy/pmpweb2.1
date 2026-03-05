import { motion } from 'motion/react';
import { useState } from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
  label?: string;
}

export default function ToggleSwitch({ isOn, onToggle, label }: ToggleSwitchProps) {
  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-sm font-medium text-white/70">{label}</span>}
      <button
        onClick={() => onToggle(!isOn)}
        className={`relative h-6 w-11 cursor-pointer rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 ${
          isOn ? 'bg-accent-500' : 'bg-white/20'
        }`}
        aria-pressed={isOn}
      >
        <motion.span
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 1
          }}
          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm ${
            isOn ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
