import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Users, Phone, Printer, Mail, Clock, Instagram } from 'lucide-react';
import HeroVideo from '../HeroVideo';

export default function V3Hero() {
  return (
    <section className="relative min-h-screen bg-transparent pt-40 pb-20 overflow-hidden border-b border-white/10 section-reveal sda-section-reveal">
      <HeroVideo 
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-doctor-checking-a-patients-lungs-with-a-stethoscope-40341-large.mp4"
        posterSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
        overlayOpacity={0.6}
      />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-v3-accent text-primary-900 font-mono text-xs uppercase tracking-widest mb-10">
            <Star className="w-3 h-3 fill-current" />
            <span>Top-Rated Primary Care in Broward</span>
          </div>
          
          <h1 className="font-tech text-7xl lg:text-9xl font-bold text-white leading-[0.88] mb-12 uppercase tracking-tighter reveal-text">
            Your Health <br />
            <span className="text-v3-blue">Our Priority</span>
          </h1>
          
          <p className="font-tech text-xl text-white/70 max-w-lg mb-12 leading-relaxed font-medium reveal">
            Comprehensive, compassionate primary care with 16 expert providers across 6 convenient locations in Broward County.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 reveal">
            <button className="bg-v3-accent text-primary-900 px-10 py-5 font-tech font-bold text-lg uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3">
              Book Appointment <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-10 py-5 font-tech font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
              Our Locations
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div>
              <p className="font-tech text-6xl font-bold text-white mb-2">16</p>
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest">Expert Providers</p>
            </div>
            <div>
              <p className="font-tech text-6xl font-bold text-white mb-2">06</p>
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest">Broward Locations</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 0 }}
          animate={{ opacity: 1, scale: 1, x: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[700px] border-4 border-v3-ink bg-white/5 backdrop-blur-xl overflow-hidden flex flex-col justify-between p-8 sm:p-10 group hover:bg-white/10 transition-colors duration-500"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-v3-blue/10 rounded-full blur-3xl -z-10 group-hover:bg-v3-blue/20 transition-colors duration-700"></div>
          
          <div className="space-y-10 relative z-10">
            {/* Contact Info */}
            <div>
              <h3 className="font-tech text-3xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-4">
                <div className="w-12 h-12 bg-v3-accent flex items-center justify-center">
                  <Phone className="w-6 h-6 text-v3-ink" />
                </div>
                Contact Us
              </h3>
              <div className="space-y-4 font-tech text-xl font-bold text-white/80 ml-4">
                <a href="tel:9543999014" className="flex items-center gap-4 hover:text-v3-accent transition-colors group/link">
                  <Phone className="w-5 h-5 text-white/40 group-hover/link:text-v3-accent transition-colors" /> 
                  <span className="tracking-widest">954-399-9014</span>
                </a>
                <div className="flex items-center gap-4">
                  <Printer className="w-5 h-5 text-white/40" /> 
                  <span className="tracking-widest">FAX: 954-367-7175</span>
                </div>
                <a href="mailto:info@pmpfla.com" className="flex items-center gap-4 hover:text-v3-accent transition-colors group/link">
                  <Mail className="w-5 h-5 text-white/40 group-hover/link:text-v3-accent transition-colors" /> 
                  <span className="tracking-widest">INFO@PMPFLA.COM</span>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="font-tech text-3xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-4">
                <div className="w-12 h-12 bg-v3-accent flex items-center justify-center">
                  <Clock className="w-6 h-6 text-v3-ink" />
                </div>
                Working Hours
              </h3>
              <div className="space-y-4 font-tech text-xl font-bold text-white/80 ml-4">
                <div className="flex justify-between items-center border-b-2 border-white/10 pb-3 hover:border-v3-accent/50 transition-colors">
                  <span className="text-white/60 uppercase tracking-widest">Monday - Friday</span>
                  <span className="tracking-widest">8:00 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-white/10 pb-3 hover:border-v3-accent/50 transition-colors">
                  <span className="text-white/60 uppercase tracking-widest">Saturday</span>
                  <span className="tracking-widest">8:30 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 hover:text-v3-accent transition-colors">
                  <span className="text-white/60 uppercase tracking-widest">Sunday</span>
                  <span className="tracking-widest">9:00 AM – 3:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer / Socials */}
          <div className="mt-8 pt-8 border-t-2 border-white/10 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">Patient Testimonials</p>
                <a href="https://g.page/primarymedical" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 group/review bg-white/5 hover:bg-white/10 px-5 py-3 transition-all border-2 border-white/10 hover:border-v3-accent">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-v3-accent text-v3-accent group-hover/review:scale-110 transition-transform" style={{ transitionDelay: `${i * 30}ms` }} />
                    ))}
                  </div>
                  <span className="font-tech font-bold text-lg text-white/80 group-hover/review:text-white transition-colors uppercase tracking-widest">Google Reviews</span>
                </a>
              </div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-16 h-16 bg-white/5 hover:bg-v3-accent hover:text-v3-ink flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-v3-accent/20 border-2 border-white/10 hover:border-transparent text-white">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
