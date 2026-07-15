"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SoftBlobs } from "@/components/ui/decor";

const services = [
  {
    icon: Scale,
    title: "Bewindvoering",
    subtitle: "Betrokken & Betrouwbaar",
    description:
      "Als bewindvoerder zijn wij uw wettelijk vertegenwoordiger. Wij behartigen uw belangen op het gebied van geld en bezittingen en beheren uw financiën professioneel en transparant.",
    href: "/diensten/bewindvoering",
    features: ["Financieel beheer", "Schuldenoplossing", "Budgetplan", "Transparant via OnView"],
    gradient: "from-primary/10 to-primary-50",
  },
  {
    icon: Heart,
    title: "Mentorschap",
    subtitle: "Coachend & Sociaal",
    description:
      "Een mentor beslist over persoonlijke zaken zoals verzorging, verpleging, behandeling en begeleiding. Mentorschap beschermt u op het persoonlijke vlak, zoveel mogelijk samen met u.",
    href: "/diensten/mentorschap",
    features: ["Persoonlijke beslissingen", "Zorgcoördinatie", "Behandelkeuzes", "Begeleiding"],
    gradient: "from-accent/10 to-accent-light/20",
  },
  {
    icon: ShieldCheck,
    title: "Curatele",
    subtitle: "Professioneel & Deskundig",
    description:
      "Bij curatele worden zowel persoon als vermogen beschermd. Wij vertegenwoordigen u volledig wanneer u niet meer zelfstandig rechtshandelingen kunt verrichten.",
    href: "/diensten/curatele",
    features: ["Volledige vertegenwoordiging", "Vermogensbescherming", "Persoonsbescherming", "Juridisch correct"],
    gradient: "from-secondary/5 to-secondary/10",
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white noise-bg" id="diensten">
      <SoftBlobs />
      <Container size="wide" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Onze diensten
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-dark mb-4">
            Professionele hulp bij financieel en persoonlijk beheer
          </h2>
          <p className="text-lg text-foreground-muted">
            Wij bieden drie vormen van wettelijke bescherming, elk afgestemd op uw persoonlijke situatie en behoeften.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                href={service.href}
                className="group relative block h-full p-8 bg-white border border-card-border rounded-2xl hover:shadow-2xl hover:shadow-primary/10 hover:border-primary-200 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-dark mb-1">{service.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-3">{service.subtitle}</p>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                    Meer informatie
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
