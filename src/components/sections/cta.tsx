"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(196,30,58,0.2),_transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(200,181,152,0.1),_transparent)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <Container size="narrow" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Hulp nodig bij uw financiën?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Neem vandaag nog vrijblijvend contact op. Wij luisteren naar uw situatie en 
            bespreken samen de mogelijkheden. De eerste stap is altijd gratis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-light text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02]">
              <Link href="/contact">
                Neem contact op
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-secondary-dark hover:border-white">
              <a href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}>
                <Phone className="h-5 w-5" />
                Bel {siteConfig.phone}
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/50">
            Telefonisch spreekuur: {siteConfig.openingHours.days} van {siteConfig.openingHours.hours} uur
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
