import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const allProviders = [
  {
    name: "Dr. Sarah Jenkins",
    specialty: "Internal Medicine",
    location: "Hollywood Main",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Family Medicine",
    location: "Pembroke Pines",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Elena Rodriguez",
    specialty: "Pediatrics",
    location: "Fort Lauderdale",
    image: "https://images.unsplash.com/photo-1594824436998-058a231b611c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Geriatrics",
    location: "Plantation",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Amara Okafor",
    specialty: "Family Medicine",
    location: "Hollywood Main",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. David Miller",
    specialty: "Internal Medicine",
    location: "Pembroke Pines",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f0871?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Lisa Thompson",
    specialty: "Family Medicine",
    location: "Fort Lauderdale",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Robert Garcia",
    specialty: "Sports Medicine",
    location: "Plantation",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Sophie Laurent",
    specialty: "Internal Medicine",
    location: "Hollywood Main",
    image: "https://images.unsplash.com/photo-1594824436998-058a231b611c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Kevin Park",
    specialty: "Family Medicine",
    location: "Pembroke Pines",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Maria Santos",
    specialty: "Pediatrics",
    location: "Fort Lauderdale",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Thomas Wright",
    specialty: "Geriatrics",
    location: "Plantation",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Rachel Green",
    specialty: "Internal Medicine",
    location: "Hollywood Main",
    image: "https://images.unsplash.com/photo-1594824436998-058a231b611c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Chris Evans",
    specialty: "Family Medicine",
    location: "Pembroke Pines",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Jessica Alba",
    specialty: "Pediatrics",
    location: "Fort Lauderdale",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Mark Ruffalo",
    specialty: "Geriatrics",
    location: "Plantation",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Providers() {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 5;
  const visibleProviders = isExpanded ? allProviders : allProviders.slice(0, initialCount);

  return (
    <section id="providers" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8" data-animate="text">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-accent-400 uppercase mb-4">
              Meet Our Team
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
              16 Expert Providers Dedicated to Your Health
            </h3>
            <p className="text-lg text-white/60">
              Our diverse team of board-certified physicians, nurse
              practitioners, and physician assistants bring decades of combined
              experience to Broward County.
            </p>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white/10 hover:bg-accent-500 hover:text-primary-900 text-white border border-white/10 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 group whitespace-nowrap shadow-sm backdrop-blur-md"
          >
            {isExpanded ? "Show Less" : "View All Providers"}
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8" data-animate-stagger="true">
          <AnimatePresence mode="popLayout">
            {visibleProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: isExpanded && index >= initialCount ? (index - initialCount) * 0.05 : 0,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] group bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm card-hover"
              >
                <div className="relative h-80 overflow-hidden image-parallax-container">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 image-parallax"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-1 text-accent-400 bg-primary-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 fill-current" />
                      <span>4.9</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {provider.name}
                  </h4>
                  <p className="text-accent-400 font-medium text-sm mb-3">
                    {provider.specialty}
                  </p>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    {provider.location}
                  </div>
                  <button className="w-full mt-6 bg-white/10 hover:bg-accent-500 hover:text-primary-900 text-white py-3 rounded-xl font-medium transition-colors text-sm">
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

