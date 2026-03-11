import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import ChromaticLink from '../ChromaticLink';

export default function V2Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-primary-900/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-v2-olive/20 blur-xl rounded-full group-hover:bg-v2-olive/40 transition-colors" />
            <img 
              src="https://nethingso.xyz/img/Logo_PMP_transparent_highres_2x.png" 
              alt="Primary Medical" 
              className="h-10 w-auto relative z-10 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {['Providers', 'Locations', 'Services', 'Portal'].map((item) => (
            <ChromaticLink key={item} href={`#${item.toLowerCase()}`} className="font-organic text-lg text-white/70 hover:text-v2-olive">
              {item}
            </ChromaticLink>
          ))}
          <button className="bg-v2-olive text-white px-8 py-3 rounded-full font-organic text-lg hover:bg-white hover:text-v2-olive transition-all shadow-sm">
            Book Visit
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary-900 border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Providers', 'Locations', 'Services', 'Portal'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="font-organic text-xl text-white" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="bg-v2-olive text-white py-4 rounded-full font-organic text-xl">
                Book Visit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

