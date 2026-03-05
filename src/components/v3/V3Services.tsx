import { motion } from 'motion/react';

export default function V3Services() {
  const services = [
    { id: '01', title: 'Preventative Care', desc: 'Wellness exams, screenings, and immunizations.' },
    { id: '02', title: 'Chronic Disease', desc: 'Diabetes, hypertension, and asthma management.' },
    { id: '03', title: 'Women\'s Health', desc: 'Pap smears, breast exams, and family planning.' },
    { id: '04', title: 'Men\'s Health', desc: 'Prostate screenings and testosterone management.' },
    { id: '05', title: 'Pediatric Care', desc: 'Well-child visits and vaccinations.' },
    { id: '06', title: 'Medication', desc: 'Prescription refills and reviews.' },
  ];

  return (
    <section className="bg-transparent text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <h2 className="font-tech text-6xl lg:text-8xl font-bold uppercase leading-none tracking-tighter">
            Precision <br /> <span className="text-v3-accent">Healthcare</span>
          </h2>
          <p className="font-tech text-xl text-white/60 max-w-md font-medium leading-relaxed">
            Our systematic approach ensures that every patient receives the highest standard of medical attention across all specialties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border-r border-b border-white/10 hover:bg-v3-accent hover:text-primary-900 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
            >
              <span className="font-mono text-xs mb-8 block opacity-40 group-hover:opacity-100 uppercase tracking-widest">Service {s.id}</span>
              <h3 className="font-tech text-3xl font-bold uppercase mb-6 leading-tight">{s.title}</h3>
              <p className="font-tech text-lg opacity-60 group-hover:opacity-100 leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-32 border-y border-white/10 py-8 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-12 items-center">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex gap-12 items-center">
              <span className="font-tech text-4xl font-bold uppercase tracking-widest">16 Providers</span>
              <span className="w-4 h-4 bg-v3-accent"></span>
              <span className="font-tech text-4xl font-bold uppercase tracking-widest">6 Locations</span>
              <span className="w-4 h-4 bg-v3-blue"></span>
              <span className="font-tech text-4xl font-bold uppercase tracking-widest">Broward County</span>
              <span className="w-4 h-4 bg-v3-accent"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
