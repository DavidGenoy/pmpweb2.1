import { motion } from "motion/react";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export default function Locations() {
  const locations = [
    {
      name: "Hollywood Main",
      address: "4000 Hollywood Blvd, Suite 100",
      city: "Hollywood, FL 33021",
      phone: "(954) 555-0101",
      hours: "Mon-Fri: 8am - 5pm",
    },
    {
      name: "Pembroke Pines",
      address: "10000 Pines Blvd, Suite 200",
      city: "Pembroke Pines, FL 33024",
      phone: "(954) 555-0102",
      hours: "Mon-Fri: 8am - 5pm, Sat: 9am - 1pm",
    },
    {
      name: "Fort Lauderdale",
      address: "2000 E Commercial Blvd",
      city: "Fort Lauderdale, FL 33308",
      phone: "(954) 555-0103",
      hours: "Mon-Fri: 8am - 6pm",
    },
    {
      name: "Plantation",
      address: "8000 W Broward Blvd",
      city: "Plantation, FL 33324",
      phone: "(954) 555-0104",
      hours: "Mon-Fri: 8am - 5pm",
    },
    {
      name: "Coral Springs",
      address: "3000 University Dr",
      city: "Coral Springs, FL 33065",
      phone: "(954) 555-0105",
      hours: "Mon-Fri: 8am - 5pm",
    },
    {
      name: "Weston",
      address: "1600 Town Center Blvd",
      city: "Weston, FL 33326",
      phone: "(954) 555-0106",
      hours: "Mon-Fri: 8am - 5pm",
    },
  ];

  return (
    <section
      id="locations"
      className="py-24 bg-transparent text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              <h4 className="text-2xl font-bold mb-6 text-white">
                {location.name}
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/90">{location.address}</p>
                    <p className="text-white/70">{location.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-400 shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                    className="text-white/90 hover:text-accent-400 transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
                  <p className="text-white/70">{location.hours}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-colors text-sm">
                  Directions
                </button>
                <button className="flex-1 bg-accent-500 hover:bg-accent-400 text-primary-900 py-3 rounded-xl font-bold transition-colors text-sm">
                  Book Here
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
