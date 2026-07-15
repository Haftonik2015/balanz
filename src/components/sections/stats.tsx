"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionWave } from "@/components/ui/section-wave";

const stats = [
  { value: "12+", label: "Jaar ervaring" },
  { value: "500+", label: "Cliënten geholpen" },
  { value: "100%", label: "Transparant beheer" },
  { value: "24/7", label: "Online inzage" },
];

export function Stats() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden bg-gradient-to-r from-secondary-dark via-secondary to-secondary-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,58,0.15),_transparent)]" />
      <div className="absolute top-10 left-[12%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-6 right-[10%] w-72 h-72 bg-accent/[0.06] rounded-full blur-3xl animate-float" />

      <SectionWave position="top" className="text-white" />
      <SectionWave position="bottom" className="text-background-secondary" flip />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-center group"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <div className="text-sm sm:text-base text-primary-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
