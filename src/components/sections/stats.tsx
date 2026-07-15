"use client";

import { motion } from "framer-motion";
import { CalendarClock, Users, ShieldCheck, Eye } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionWave } from "@/components/ui/section-wave";
import { CountUp } from "@/components/ui/count-up";

type Stat = {
  icon: typeof Users;
  to?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  { icon: CalendarClock, to: 12, suffix: "+", label: "Jaar ervaring", sub: "Actief sinds 2012" },
  { icon: Users, to: 500, suffix: "+", label: "Cliënten geholpen", sub: "In Oss en de regio" },
  { icon: ShieldCheck, to: 100, suffix: "%", label: "Transparant beheer", sub: "Volledig inzicht in uw geld" },
  { icon: Eye, display: "24/7", label: "Online inzage", sub: "Meekijken via OnView" },
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
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary-300">
            Balanz in cijfers
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ervaring waar u op kunt bouwen
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.07]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary-light/10 ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="h-6 w-6 text-primary-300" />
              </div>
              <div className="mb-1 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                  {stat.to !== undefined ? (
                    <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                  ) : (
                    stat.display
                  )}
                </span>
              </div>
              <div className="text-sm font-semibold text-primary-200 sm:text-base">{stat.label}</div>
              <div className="mt-1 text-xs text-white/50">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
