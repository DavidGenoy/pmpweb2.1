import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function V2Footer() {
  return (
    <footer className="bg-transparent text-white pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <h2 className="font-organic text-6xl mb-12 max-w-md leading-tight">Ready to prioritize your health?</h2>
            <button className="bg-v2-olive text-white px-12 py-6 rounded-full font-organic text-2xl hover:bg-white hover:text-v2-olive transition-all">
              Book an Appointment
            </button>
          </div>
          
          <div>
            <h4 className="font-organic text-xl text-white/40 uppercase tracking-widest mb-8">Newsletter</h4>
            <div className="flex flex-col gap-6">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-full px-8 py-4 font-organic text-xl text-white focus:bg-white/10 transition-all"
              />
              <button className="bg-v2-olive text-white px-8 py-4 rounded-full font-organic text-xl hover:bg-white hover:text-v2-olive transition-all">
                Join
              </button>
            </div>
            <div className="flex flex-col gap-6 font-organic text-xl mt-12">
              <a href="tel:9545550123" className="flex items-center gap-4 hover:text-v2-olive transition-colors">
                <Phone className="w-5 h-5" /> (954) 555-0123
              </a>
              <a href="mailto:hello@primarymedical.com" className="flex items-center gap-4 hover:text-v2-olive transition-colors">
                <Mail className="w-5 h-5" /> hello@primarymedical.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-organic text-xl text-white/40 uppercase tracking-widest mb-8">Explore</h4>
            <div className="flex flex-col gap-4 font-organic text-xl">
              {['About', 'Providers', 'Locations', 'Services', 'Patient Portal'].map(item => (
                <a key={item} href="#" className="hover:text-v2-olive transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 font-organic text-lg text-white/40">
          <div className="flex items-center gap-4">
            <img 
              src="https://nethingso.xyz/img/Logo_PMP_transparent_highres_2x.png" 
              alt="Logo" 
              className="h-6 w-auto brightness-0 invert opacity-40"
              referrerPolicy="no-referrer"
            />
            <p>© {new Date().getFullYear()} Primary Medical Physicians.</p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
