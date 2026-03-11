import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import ChromaticLink from '../ChromaticLink';

export default function V3Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-900/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center border-b border-white/10 pb-6">
        <a href="/" className="flex items-center gap-5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-v3-accent/10 group-hover:bg-v3-accent/20 transition-colors" />
            <img 
              src="https://nethingso.xyz/img/Logo_PMP_transparent_highres_2x.png" 
              alt="PM" 
              className="h-10 w-auto relative z-10 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {['Providers', 'Locations', 'Services'].map((item) => (
            <ChromaticLink key={item} href={`#${item.toLowerCase()}`} className="font-tech text-sm font-bold text-white hover:text-v3-blue uppercase tracking-widest">
              {item}
            </ChromaticLink>
          ))}
          <button className="bg-v3-accent text-primary-900 px-8 py-3 font-tech font-bold text-sm hover:bg-white transition-all uppercase tracking-widest flex items-center gap-2">
            Book Appointment <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-primary-900 z-50 p-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex justify-between items-center">
              <span className="font-tech font-bold text-2xl text-white">PM</span>
              <button onClick={() => setIsOpen(false)} className="text-white"><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['Providers', 'Locations', 'Services', 'Portal'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="font-tech text-5xl font-bold text-white uppercase" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-v3-accent text-primary-900 py-6 font-tech font-bold text-xl uppercase">
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

