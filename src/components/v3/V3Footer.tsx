import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function V3Footer() {
  return (
    <footer className="bg-transparent text-white pt-32 pb-12 border-t-4 border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-5">
            <h2 className="font-tech text-6xl lg:text-8xl font-bold uppercase leading-[0.85] mb-12 tracking-tighter">
              Get in <br /> <span className="text-v3-blue">Touch</span>
            </h2>
            <div className="flex flex-col gap-8 mt-12">
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">Newsletter Signup</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="ENTER EMAIL" 
                    className="flex-1 bg-white/5 border-2 border-white/10 px-6 py-4 font-tech font-bold text-white focus:border-v3-accent transition-all uppercase tracking-widest"
                  />
                  <button className="bg-v3-accent text-primary-900 px-8 font-tech font-bold uppercase tracking-widest">
                    GO
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-v3-accent flex items-center justify-center text-primary-900">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Call Us</p>
                  <p className="font-tech text-2xl font-bold">(954) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-v3-accent flex items-center justify-center text-primary-900">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Email Us</p>
                  <p className="font-tech text-2xl font-bold">info@primarymedical.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 text-white p-12 flex flex-col justify-between">
              <h4 className="font-tech text-3xl font-bold uppercase mb-8">Patient Portal</h4>
              <p className="font-tech text-lg opacity-60 mb-12 font-medium">Access your records, schedule appointments, and message your provider securely.</p>
              <button className="bg-v3-accent text-primary-900 px-8 py-4 font-tech font-bold uppercase tracking-widest flex items-center justify-between group">
                Login Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="border-4 border-white/20 p-12 flex flex-col justify-between">
              <h4 className="font-tech text-3xl font-bold uppercase mb-8">Careers</h4>
              <p className="font-tech text-lg opacity-60 mb-12 font-medium">Join our growing team of 16 providers in Broward County.</p>
              <button className="bg-white/10 text-white px-8 py-4 font-tech font-bold uppercase tracking-widest flex items-center justify-between group">
                View Openings <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-v3-accent flex items-center justify-center text-primary-900 font-tech font-bold">PM</div>
            <p className="font-tech font-bold uppercase tracking-widest text-sm">© {new Date().getFullYear()} Primary Medical Physicians</p>
          </div>
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
