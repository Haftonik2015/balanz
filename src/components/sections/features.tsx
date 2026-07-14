"use client";

import { motion } from "framer-motion";
import { Eye, Clock, HandHeart, Lock, Headphones, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";

const features = [
  {
    icon: Eye,
    title: "Transparant beheer",
    description: "Via OnView kunt u 24/7 meekijken met uw financiën. Volledige openheid over inkomsten en uitgaven.",
  },
  {
    icon: Clock,
    title: "Directe actie",
    description: "Wij zorgen dat u zo snel mogelijk geholpen wordt en nemen ruim de tijd voor iedere cliënt.",
  },
  {
    icon: HandHeart,
    title: "Persoonlijke aanpak",
    description: "Elk traject is maatwerk. Wij kijken naar uw unieke situatie en stemmen onze begeleiding daarop af.",
  },
  {
    icon: Lock,
    title: "Vertrouwelijk",
    description: "Uw gegevens zijn bij ons veilig. Wij werken volgens strenge privacyrichtlijnen en wetgeving.",
  },
  {
    icon: Headphones,
    title: "Bereikbaar",
    description: "Telefonisch spreekuur maandag t/m donderdag. Vragen? Wij staan voor u klaar.",
  },
  {
    icon: TrendingUp,
    title: "Toekomstgericht",
    description: "Waar mogelijk begeleiden wij u naar financiële zelfstandigheid. Dat is ons uiteindelijke doel.",
  },
];

export function Features() {
  return (
    <section className="relative py-16 md:py-24 bg-background-secondary overflow-hidden noise-bg">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(200,181,152,0.15),_transparent)]" />
      <Container size="wide" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Waarom Stichting Balanz
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-dark mb-4">
            Gedegen, betrouwbaar en betrokken
          </h2>
          <p className="text-lg text-foreground-muted">
            Wij combineren professionaliteit met menselijkheid. Uw welzijn staat bij ons centraal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white rounded-xl p-6 border border-card-border hover:shadow-xl hover:shadow-primary/5 hover:border-primary-200 hover:-translate-y-1 transition-all duration-400"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary-light group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                <feature.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-secondary-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
