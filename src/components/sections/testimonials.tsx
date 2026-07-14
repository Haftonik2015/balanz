"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";

const testimonials = [
  {
    name: "Maria V.",
    role: "Cliënt bewindvoering",
    content:
      "Dankzij Stichting Balanz heb ik eindelijk weer overzicht over mijn financiën. Ze zijn altijd bereikbaar en denken echt met je mee. Na jaren van stress voel ik me eindelijk weer rustig.",
    rating: 5,
  },
  {
    name: "Peter D.",
    role: "Cliënt mentorschap",
    content:
      "De medewerkers van Balanz zijn ontzettend betrokken. Ze nemen de tijd om alles uit te leggen en helpen bij belangrijke beslissingen. Ik voel me gehoord en gesteund.",
    rating: 5,
  },
  {
    name: "Sandra K.",
    role: "Cliënt bewindvoering",
    content:
      "Binnen een paar maanden was mijn schuldensituatie al verbeterd. Via OnView kan ik alles volgen. Transparant, eerlijk en professioneel. Een echte aanrader!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden noise-bg">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-light/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <Container size="wide" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Ervaringen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-dark mb-4">
            Wat onze cliënten zeggen
          </h2>
          <p className="text-lg text-foreground-muted">
            Het vertrouwen van onze cliënten is ons grootste compliment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group bg-gradient-to-b from-background-secondary to-white rounded-2xl p-8 relative border border-card-border hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-400"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-100 group-hover:text-primary-200 transition-colors" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="border-t border-border-light pt-4">
                <p className="font-semibold text-secondary-dark">{testimonial.name}</p>
                <p className="text-xs text-foreground-light">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
