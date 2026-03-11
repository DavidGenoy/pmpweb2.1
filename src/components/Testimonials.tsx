import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria G.",
      location: "Hollywood",
      text: "I've been coming to Primary Medical Physicians for 5 years. Dr. Jenkins is incredibly thorough and always takes the time to listen to my concerns. The staff is friendly and the wait times are minimal.",
      rating: 5,
    },
    {
      name: "David R.",
      location: "Pembroke Pines",
      text: "Finding a good primary care doctor is hard, but I hit the jackpot here. The facility is modern, clean, and the patient portal makes managing my prescriptions so easy.",
      rating: 5,
    },
    {
      name: "Sarah T.",
      location: "Fort Lauderdale",
      text: "They truly care about preventative health. My provider caught an issue early during a routine screening that could have been serious. I am forever grateful to this team.",
      rating: 5,
    },
    {
      name: "Michael L.",
      location: "Davie",
      text: "The best medical experience I've had in Florida. Professional, efficient, and compassionate. Highly recommend to anyone looking for a primary care provider.",
      rating: 5,
    },
    {
      name: "Elena V.",
      location: "Weston",
      text: "I love the holistic approach they take. They don't just treat symptoms; they look at your overall lifestyle and well-being. Truly a modern practice.",
      rating: 5,
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollStart = 0;
      const scrollEnd = -rect.height + window.innerHeight;
      
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const progress = Math.abs(rect.top) / (rect.height - window.innerHeight);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="parallax-section relative bg-transparent text-white"
    >
      <div className="parallax-sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 absolute top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-accent-400 uppercase mb-4">
              Patient Stories
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Hear From Our Community
            </h3>
          </div>
        </div>

        <div 
          ref={trackRef}
          className="parallax-track"
          style={{ 
            transform: `translateX(calc(-${scrollProgress * 60}%))`,
            transition: 'transform 0.1s ease-out'
          }}
          data-animate="parallax-track"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="flex-shrink-0 w-[85vw] md:w-[450px] bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative group hover:bg-white/10 transition-all duration-500"
              style={{
                opacity: 0.5 + (1 - Math.abs(scrollProgress * (testimonials.length - 1) - index)) * 0.5,
                transform: `scale(${0.9 + (1 - Math.abs(scrollProgress * (testimonials.length - 1) - index)) * 0.1})`,
                filter: `blur(${Math.abs(scrollProgress * (testimonials.length - 1) - index) * 2}px)`
              }}
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-accent-500/20 transition-colors duration-300" />

              <div className="flex items-center gap-1 text-accent-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-8 relative z-10 text-lg italic font-serif">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">
                    {testimonial.location} Patient
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
