import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

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
  ];

  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent-400 uppercase mb-4">
            Patient Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Hear From Our Community
          </h3>
          <p className="text-lg text-white/70">
            We are proud to serve the Broward County community and are honored
            by the trust our patients place in us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative group hover:bg-white/10 transition-colors duration-300"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
