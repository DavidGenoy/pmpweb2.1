import { motion } from "motion/react";
import { ArrowRight, Star, ShieldCheck, Users, Phone, Printer, Mail, Clock, Instagram } from "lucide-react";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-transparent">
      <HeroVideo 
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-medical-professional-working-with-a-microscope-40342-large.mp4"
        posterSrc="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=2574&auto=format&fit=crop"
        overlayOpacity={0.5}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 font-medium text-sm mb-8 border border-accent-500/30">
              <Star className="w-4 h-4 fill-current" />
              <span>Top-Rated Primary Care in Broward County</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-6 text-balance">
              Your Health is Our <span className="text-accent-400 italic">Primary</span> Focus.
            </h1>
            
            <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
              Comprehensive, compassionate primary care with 16 expert providers across 6 convenient locations in Broward County. We're here for you, every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-500 hover:bg-accent-400 text-primary-900 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 text-lg backdrop-blur-md">
                Find a Location
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-white text-xl">16</p>
                  <p className="text-sm text-white/50 font-medium">Expert Providers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-white text-xl">6</p>
                  <p className="text-sm text-white/50 font-medium">Broward Locations</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact & Hours Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 0 }}
            animate={{ opacity: 1, scale: 1, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between group hover:bg-white/10 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -z-10 group-hover:bg-accent-500/20 transition-colors duration-700"></div>
            
            <div className="space-y-10">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-serif font-medium text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-400" />
                  </div>
                  Contact Us
                </h3>
                <div className="space-y-4 text-lg text-white/80 ml-2">
                  <a href="tel:9543999014" className="flex items-center gap-4 hover:text-accent-400 transition-colors group/link">
                    <Phone className="w-5 h-5 text-white/40 group-hover/link:text-accent-400 transition-colors" /> 
                    <span className="font-medium tracking-wide">954-399-9014</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <Printer className="w-5 h-5 text-white/40" /> 
                    <span className="tracking-wide">Fax: 954-367-7175</span>
                  </div>
                  <a href="mailto:info@pmpfla.com" className="flex items-center gap-4 hover:text-accent-400 transition-colors group/link">
                    <Mail className="w-5 h-5 text-white/40 group-hover/link:text-accent-400 transition-colors" /> 
                    <span className="tracking-wide">info@pmpfla.com</span>
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-2xl font-serif font-medium text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-400" />
                  </div>
                  Working Hours
                </h3>
                <div className="space-y-4 text-white/80 ml-2">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 hover:border-accent-500/50 transition-colors">
                    <span className="font-medium uppercase tracking-wider text-sm text-white/60">Monday - Friday</span>
                    <span className="font-medium">8:00 AM – 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 hover:border-accent-500/50 transition-colors">
                    <span className="font-medium uppercase tracking-wider text-sm text-white/60">Saturday</span>
                    <span className="font-medium">8:30 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 hover:text-accent-400 transition-colors">
                    <span className="font-medium uppercase tracking-wider text-sm text-white/60">Sunday</span>
                    <span className="font-medium">9:00 AM – 3:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Socials */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white mb-3">Patient Testimonials</p>
                  <a href="https://g.page/primarymedical" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 group/review bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all border border-white/5 hover:border-white/20">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400 group-hover/review:scale-110 transition-transform" style={{ transitionDelay: `${i * 30}ms` }} />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-white/80 group-hover/review:text-white transition-colors">Google Reviews</span>
                  </a>
                </div>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 hover:bg-accent-500 hover:text-primary-900 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent-500/20 border border-white/10 hover:border-transparent text-white">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

