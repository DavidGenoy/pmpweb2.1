import { motion } from 'motion/react';

export default function V2Services() {
  const services = [
    { title: 'Wellness Exams', desc: 'Comprehensive annual check-ups tailored to your life stage.' },
    { title: 'Chronic Care', desc: 'Dedicated management for long-term health conditions.' },
    { title: 'Family Health', desc: 'Care for every generation, from pediatrics to geriatrics.' },
    { title: 'Urgent Needs', desc: 'Same-day appointments for when you need us most.' },
  ];

  return (
    <section className="py-32 bg-transparent section-reveal sda-section-reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="font-organic text-5xl text-white mb-6 reveal-text">A holistic approach to your health.</h2>
            <p className="font-organic text-xl text-white/60 reveal">We offer a wide range of services designed to keep you and your family thriving at every stage of life.</p>
          </div>
          <a href="#services" className="font-organic text-lg text-v2-olive underline underline-offset-8 reveal">View all services</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 stagger-grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group stagger-item sda-fade card-hover"
            >
              <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 mb-8 overflow-hidden flex items-center justify-center group-hover:bg-v2-olive transition-colors duration-500 backdrop-blur-sm">
                <span className="font-organic text-4xl text-v2-olive group-hover:text-white transition-colors">0{i + 1}</span>
              </div>
              <h3 className="font-organic text-2xl text-white mb-4">{s.title}</h3>
              <p className="font-organic text-lg text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
