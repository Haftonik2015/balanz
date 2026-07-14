"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const stats = [
  { value: "12+", label: "Jaar ervaring" },
  { value: "500+", label: "Cliënten geholpen" },
  { value: "100%", label: "Transparant beheer" },
  { value: "24/7", label: "Online inzage" },
];

export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-secondary-dark via-secondary to-secondary-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,58,0.15),_transparent)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <Container size="wide" className="relative">
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
