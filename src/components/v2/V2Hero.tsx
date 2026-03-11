import { motion } from 'motion/react';
import { Phone, Printer, Mail, Clock, Star, Instagram } from 'lucide-react';
import HeroVideo from '../HeroVideo';

export default function V2Hero() {
  return (
    <section className="relative min-h-screen bg-transparent pt-32 pb-20 overflow-hidden section-reveal sda-section-reveal">
      <HeroVideo 
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-nurse-preparing-a-vaccine-40340-large.mp4"
        posterSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
        overlayOpacity={0.4}
      />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-organic text-7xl lg:text-8xl text-white leading-[0.95] mb-10 reveal-text">
            Care that feels <br />
            <span className="italic text-v2-olive">like home.</span>
          </h1>
          <p className="font-organic text-2xl text-white/70 max-w-lg mb-12 leading-relaxed reveal">
            Experience a more personal approach to primary care. With 16 dedicated providers across Broward, we prioritize your well-being with warmth and expertise.
          </p>
          <div className="flex flex-wrap gap-6 reveal">
            <button className="bg-v2-olive text-white px-10 py-5 rounded-full font-organic text-xl hover:bg-white hover:text-v2-olive transition-all">
              Schedule a Consultation
            </button>
            <button className="border border-white/20 text-white px-10 py-5 rounded-full font-organic text-xl hover:bg-white/10 transition-all">
              Our Locations
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 0 }}
          animate={{ opacity: 1, scale: 1, x: 20 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 flex flex-col justify-between group hover:bg-white/15 transition-all duration-700">
            <div className="space-y-8 sm:space-y-10">
              {/* Contact Info */}
              <div>
                <h3 className="text-3xl font-organic text-white mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-v2-olive/30 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-v2-cream" />
                  </div>
                  Contact Us
                </h3>
                <div className="space-y-4 text-xl font-organic text-white/80 ml-4">
                  <a href="tel:9543999014" className="flex items-center gap-4 hover:text-v2-cream transition-colors group/link">
                    <Phone className="w-5 h-5 text-white/40 group-hover/link:text-v2-cream transition-colors" /> 
                    <span>954-399-9014</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <Printer className="w-5 h-5 text-white/40" /> 
                    <span>Fax: 954-367-7175</span>
                  </div>
                  <a href="mailto:info@pmpfla.com" className="flex items-center gap-4 hover:text-v2-cream transition-colors group/link">
                    <Mail className="w-5 h-5 text-white/40 group-hover/link:text-v2-cream transition-colors" /> 
                    <span>info@pmpfla.com</span>
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-3xl font-organic text-white mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-v2-olive/30 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-v2-cream" />
                  </div>
                  Working Hours
                </h3>
                <div className="space-y-4 text-xl font-organic text-white/80 ml-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 hover:border-v2-olive/50 transition-colors">
                    <span className="text-white/60">Monday - Friday</span>
                    <span>8:00 AM – 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 hover:border-v2-olive/50 transition-colors">
                    <span className="text-white/60">Saturday</span>
                    <span>8:30 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 hover:text-v2-cream transition-colors">
                    <span className="text-white/60">Sunday</span>
                    <span>9:00 AM – 3:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Socials */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-organic text-white mb-3">Patient Testimonials</p>
                  <a href="https://g.page/primarymedical" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 group/review bg-white/5 hover:bg-white/10 px-5 py-3 rounded-full transition-all border border-white/10 hover:border-white/30">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-v2-cream text-v2-cream group-hover/review:scale-110 transition-transform" style={{ transitionDelay: `${i * 30}ms` }} />
                      ))}
                    </div>
                    <span className="text-lg font-organic text-white/80 group-hover/review:text-white transition-colors">Google Reviews</span>
                  </a>
                </div>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full bg-v2-olive hover:bg-v2-cream hover:text-v2-olive flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-v2-cream/20 text-white">
                  <Instagram className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-v2-cream rounded-full -z-10 blur-2xl opacity-50"></div>
          <div className="absolute top-1/2 -right-10 w-40 h-40 bg-v2-olive rounded-full -z-10 blur-3xl opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
}
