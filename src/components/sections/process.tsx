"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Gavel, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Eerste contact",
    description:
      "Neem vrijblijvend contact op via telefoon of e-mail. Wij luisteren naar uw situatie en bespreken de mogelijkheden.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Intake & aanmelding",
    description:
      "Tijdens een persoonlijk gesprek brengen wij uw financiële situatie in kaart. Samen vullen we het aanmeldformulier in.",
  },
  {
    icon: Gavel,
    step: "03",
    title: "Verzoek bij rechtbank",
    description:
      "Wij dienen het verzoek in bij de kantonrechter. Na de beschikking starten wij direct met het beheer van uw financiën.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Beheer & begeleiding",
    description:
      "Wij zorgen voor uw financiën, lossen schulden op en werken toe naar financiële zelfstandigheid waar mogelijk.",
  },
];

export function Process() {
  return (
    <section className="relative py-16 md:py-24 bg-background-secondary overflow-hidden noise-bg" id="werkwijze">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(196,30,58,0.04),_transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(200,181,152,0.08),_transparent)]" />
      <Container size="wide" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Onze werkwijze
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-dark mb-4">
            In 4 stappen naar financiële rust
          </h2>
          <p className="text-lg text-foreground-muted">
            Van het eerste contact tot volledig beheer — wij begeleiden u door het hele proces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-card-border hover:shadow-xl hover:shadow-primary/5 hover:border-primary-200 hover:-translate-y-1 transition-all duration-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center group-hover:from-primary group-hover:to-primary-light group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                    <step.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-3xl font-bold text-primary-200 group-hover:text-primary-300 transition-colors">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-secondary-dark mb-2">{step.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-200 to-primary-100" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
