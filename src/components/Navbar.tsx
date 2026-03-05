import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Providers", href: "#providers" },
    { name: "Locations", href: "#locations" },
    { name: "Services", href: "#services" },
    { name: "Patient Portal", href: "#portal" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-900/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center text-primary-900 font-serif font-bold text-xl">
              PM
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight text-white">
                Primary Medical
              </span>
              <span className="text-xs font-medium text-accent-400 tracking-widest uppercase">
                Physicians
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-accent-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:954-555-0123"
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-accent-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(954) 555-0123</span>
            </a>
            <button className="bg-accent-500 hover:bg-accent-400 text-primary-900 px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-primary-900 shadow-xl border-t border-white/10 md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:954-555-0123"
                  className="flex items-center justify-center gap-2 text-white font-medium py-3 rounded-xl bg-white/5"
                >
                  <Phone className="w-5 h-5" />
                  <span>(954) 555-0123</span>
                </a>
                <button className="bg-accent-500 text-primary-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
