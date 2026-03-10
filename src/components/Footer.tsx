import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-500/10 blur-md rounded-full" />
                <img 
                  src="https://nethingso.xyz/img/Logo_PMP_transparent_highres_2x.png" 
                  alt="Primary Medical Physicians" 
                  className="h-10 w-auto relative z-10 brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
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
            <p className="text-white/70 leading-relaxed text-sm">
              Providing comprehensive, compassionate primary care to the Broward
              County community through our 16 expert providers across 6
              convenient locations.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent-500 flex items-center justify-center text-white hover:text-primary-900 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent-500 flex items-center justify-center text-white hover:text-primary-900 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent-500 flex items-center justify-center text-white hover:text-primary-900 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Our Providers",
                "Services",
                "Patient Portal",
                "Careers",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-accent-400 transition-colors text-sm font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Locations</h4>
            <ul className="space-y-4">
              {[
                "Hollywood Main",
                "Pembroke Pines",
                "Fort Lauderdale",
                "Plantation",
                "Coral Springs",
                "Weston",
              ].map((location) => (
                <li key={location}>
                  <a
                    href="#locations"
                    className="text-white/70 hover:text-accent-400 transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-accent-500/50" />
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:954-555-0123"
                  className="text-white/70 hover:text-accent-400 transition-colors text-sm font-medium flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-accent-500" />
                  (954) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@primarymedical.com"
                  className="text-white/70 hover:text-accent-400 transition-colors text-sm font-medium flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-accent-500" />
                  info@primarymedical.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} Primary Medical Physicians. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              HIPAA Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
