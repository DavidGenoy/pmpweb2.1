/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ParticleBackground from "./components/ParticleBackground";
import ScrollManager from "./components/ScrollManager";

// Version 1 Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Locations from "./components/Locations";
import Providers from "./components/Providers";
import Specialists from "./components/Specialists";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ToggleSwitch from "./components/ToggleSwitch";

// Version 2 Components
import V2Navbar from "./components/v2/V2Navbar";
import V2Hero from "./components/v2/V2Hero";
import V2Services from "./components/v2/V2Services";
import V2Footer from "./components/v2/V2Footer";

// Version 3 Components
import V3Navbar from "./components/v3/V3Navbar";
import V3Hero from "./components/v3/V3Hero";
import V3Services from "./components/v3/V3Services";
import V3Footer from "./components/v3/V3Footer";

type Version = "v1" | "v2" | "v3";

export default function App() {
  const [version, setVersion] = useState<Version>("v1");
  const [showParticles, setShowParticles] = useState(true);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <div className={`min-h-screen selection:bg-accent-500/30 selection:text-primary-900 overflow-x-hidden ${highContrast ? 'contrast-125 grayscale-[0.2]' : ''}`}>
      {showParticles && <ParticleBackground />}
      <ScrollManager />
      
      <AnimatePresence mode="wait">
        {version === "v1" && (
          <motion.div
            key="v1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-sans text-white relative z-10"
          >
            <Navbar />
            <main>
              <Hero />
              <Locations />
              <Providers />
              <Specialists />
              <Services />
              <Testimonials />
            </main>
            <Footer />
          </motion.div>
        )}

        {version === "v2" && (
          <motion.div
            key="v2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-organic text-white relative z-10"
          >
            <V2Navbar />
            <main>
              <V2Hero />
              <Locations />
              <Providers />
              <Specialists />
              <V2Services />
              <Testimonials />
            </main>
            <V2Footer />
          </motion.div>
        )}

        {version === "v3" && (
          <motion.div
            key="v3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-tech text-white relative z-10"
          >
            <V3Navbar />
            <main>
              <V3Hero />
              <Locations />
              <Providers />
              <Specialists />
              <V3Services />
              <Testimonials />
            </main>
            <V3Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global SVG Filter for Fluid Distortion */}
      <svg className="fixed pointer-events-none opacity-0 h-0 w-0">
        <defs>
          <filter id="fluid-distort">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.01" 
              numOctaves="1" 
              result="warp" 
              seed="1"
            >
              <animate 
                attributeName="baseFrequency" 
                values="0.01 0.01; 0.02 0.02; 0.01 0.01" 
                dur="10s" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              id="displacement-map"
              in="SourceGraphic" 
              in2="warp" 
              scale="0" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {/* Version Switcher UI */}
      <div className="fixed bottom-8 left-1/2 z-[100] flex -translate-x-1/2 flex-col items-center gap-4">
        <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/80 p-4 shadow-2xl backdrop-blur-xl">
          <ToggleSwitch 
            isOn={showParticles} 
            onToggle={setShowParticles} 
            label="Particles" 
          />
          <div className="w-px h-6 bg-white/10" />
          <ToggleSwitch 
            isOn={highContrast} 
            onToggle={setHighContrast} 
            label="Contrast" 
          />
        </div>

        <div className="flex gap-2 rounded-full border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setVersion("v1")}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
              version === "v1"
                ? "bg-white text-black"
                : "text-white/50 hover:text-white"
            }`}
          >
            V1: Professional
          </button>
          <button
            onClick={() => setVersion("v2")}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
              version === "v2"
                ? "bg-v2-olive text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            V2: Organic
          </button>
          <button
            onClick={() => setVersion("v3")}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
              version === "v3"
                ? "bg-v3-accent text-black"
                : "text-white/50 hover:text-white"
            }`}
          >
            V3: Technical
          </button>
        </div>
      </div>
    </div>
  );
}
