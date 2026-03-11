import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Phone, Clock, ArrowRight, RotateCw } from "lucide-react";

interface Location {
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  image: string;
}

function LocationCard({ location, index }: { location: Location; index: number; key?: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <motion.div 
      className="group perspective-1000 h-[420px] w-full cursor-pointer"
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={`Location card for ${location.name}. Click to flip and see photo.`}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.1 : 0.4,
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="relative h-full w-full transition-all duration-300 preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full backface-hidden">
          <div className="h-full w-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 flex flex-col shadow-lg card-hover">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-bold text-white">
                {location.name}
              </h4>
              <RotateCw className="w-5 h-5 text-white/30 group-hover:text-accent-400 transition-colors" />
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/90">{location.address}</p>
                  <p className="text-white/70">{location.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400 shrink-0" />
                <span className="text-white/90">
                  {location.phone}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
                <p className="text-white/70">{location.hours}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
              <button 
                onClick={(e) => { e.stopPropagation(); }}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-colors text-sm"
              >
                Directions
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); }}
                className="flex-1 bg-accent-500 hover:bg-accent-400 text-primary-900 py-3 rounded-xl font-bold transition-colors text-sm"
              >
                Book Here
              </button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 h-full w-full backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full w-full relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group/back">
            <motion.img
              src={location.image}
              alt={`Exterior of ${location.name} location`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              whileHover={!shouldReduceMotion ? { scale: 1.1, x: 5, y: 5 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 opacity-0 group-hover/back:opacity-100 transition-opacity duration-500 bg-accent-500/5 pointer-events-none shadow-[inset_0_0_50px_rgba(16,185,129,0.2)]" />
            
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <p className="text-accent-400 font-bold text-sm uppercase tracking-widest mb-1">Location Photo</p>
              <h4 className="text-xl font-bold text-white">{location.name}</h4>
              <p className="text-white/60 text-xs mt-2 italic">Click to flip back</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Locations() {
  const locations = [
    {
      name: "Hollywood Main",
      address: "4000 Hollywood Blvd, Suite 100",
      city: "Hollywood, FL 33021",
      phone: "(954) 555-0101",
      hours: "Mon-Fri: 8am - 5pm",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Pembroke Pines",
      address: "10000 Pines Blvd, Suite 200",
      city: "Pembroke Pines, FL 33024",
      phone: "(954) 555-0102",
      hours: "Mon-Fri: 8am - 5pm, Sat: 9am - 1pm",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Fort Lauderdale",
      address: "2000 E Commercial Blvd",
      city: "Fort Lauderdale, FL 33308",
      phone: "(954) 555-0103",
      hours: "Mon-Fri: 8am - 6pm",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Plantation",
      address: "8000 W Broward Blvd",
      city: "Plantation, FL 33324",
      phone: "(954) 555-0104",
      hours: "Mon-Fri: 8am - 5pm",
      image: "https://images.unsplash.com/photo-1504813184591-01592fd03cf7?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Coral Springs",
      address: "3000 University Dr",
      city: "Coral Springs, FL 33065",
      phone: "(954) 555-0105",
      hours: "Mon-Fri: 8am - 5pm",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Weston",
      address: "1600 Town Center Blvd",
      city: "Weston, FL 33326",
      phone: "(954) 555-0106",
      hours: "Mon-Fri: 8am - 5pm",
      image: "https://images.unsplash.com/photo-1538108149393-fdfd81690933?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="locations"
      className="py-24 bg-transparent text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8" data-animate="text">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-accent-400 uppercase mb-4">
              6 Convenient Locations
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Find a Provider Near You in Broward County
            </h3>
            <p className="text-lg text-white/70">
              With six state-of-the-art facilities across Broward, high-quality
              primary care is never far from home.
            </p>
          </div>
          <button className="bg-accent-500 hover:bg-accent-400 text-primary-900 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
            View All Locations on Map
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate-stagger="true">
          {locations.map((location, index) => (
            <LocationCard key={location.name} location={location} index={index} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}} />
    </section>
  );
}
