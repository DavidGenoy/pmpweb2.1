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
    {
      name: "Michael B.",
      location: "Plantation",
      text: "The best medical experience I've had in Florida. Professional, efficient, and they actually care about you as a person, not just a number.",
      rating: 5,
    },
    {
      name: "Elena V.",
      location: "Weston",
      text: "I love the convenience of having multiple locations. No matter where I am in Broward, I can see a provider who has my full medical history.",
      rating: 5,
    },
    {
      name: "James L.",
      location: "Coral Springs",
      text: "The specialists here are top-notch. I was referred internally and the transition was seamless. Highly recommend for comprehensive care.",
      rating: 5,
    },
    {
      name: "Linda K.",
      location: "Hollywood",
      text: "Excellent service from start to finish. The nurses are so kind and the doctors really know their stuff. 5 stars!",
      rating: 5,
    },
    {
      name: "Robert P.",
      location: "Pembroke Pines",
      text: "Very impressed with the technology they use. Everything is digital and fast. No more filling out the same forms every visit.",
      rating: 5,
    },
    {
      name: "Sofia M.",
      location: "Fort Lauderdale",
      text: "A healthcare provider that actually listens. They took the time to explain my treatment plan in detail. I feel very supported.",
      rating: 5,
    },
  ];

  // Split testimonials into 3 columns
  const col1 = [testimonials[0], testimonials[3], testimonials[6]];
  const col2 = [testimonials[1], testimonials[4], testimonials[7]];
  const col3 = [testimonials[2], testimonials[5], testimonials[8]];

  const renderTestimonial = (testimonial: any) => (
    <div
      key={testimonial.name}
      className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative group hover:bg-white/10 transition-colors duration-300 mb-8"
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
    </div>
  );

  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <h2 className="text-sm font-bold tracking-widest text-accent-400 uppercase mb-4">
            Patient Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Hear From Our Community
          </h3>
          <p className="text-lg text-white/70 reveal-text-scrub">
            We are proud to serve the Broward County community and are honored
            by the trust our patients place in us.
          </p>
        </div>

        <div className="parallax-grid-wrapper grid md:grid-cols-3 gap-8">
          <div className="parallax-column space-y-8" data-speed="0.8">
            {col1.map(renderTestimonial)}
          </div>
          <div className="parallax-column space-y-8" data-speed="0.5">
            {col2.map(renderTestimonial)}
          </div>
          <div className="parallax-column space-y-8" data-speed="1.2">
            {col3.map(renderTestimonial)}
          </div>
        </div>
      </div>
    </section>
  );
}
