"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWave } from "@/components/ui/section-wave";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-20 md:pb-36 md:pt-28 lg:pb-44 lg:pt-36 noise-bg">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_-20%,_rgba(196,30,58,0.08),_transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_10%_90%,_rgba(200,181,152,0.12),_transparent)]" />
      
      {/* Decorative floating orbs */}
      <div className="absolute top-16 right-[12%] w-80 h-80 bg-gradient-to-br from-primary/8 to-primary-light/4 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-10 left-[8%] w-[28rem] h-[28rem] bg-gradient-to-tr from-accent/8 to-accent-light/4 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 left-[20%] w-40 h-40 bg-primary-100/30 rounded-full blur-2xl animate-float" />
      
      {/* Decorative dots/circles */}
      <div className="absolute top-32 left-[6%] w-3 h-3 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-48 right-[20%] w-2 h-2 bg-accent-dark/30 rounded-full animate-pulse-soft" />
      <div className="absolute bottom-32 right-[8%] w-4 h-4 bg-primary-200/40 rounded-full animate-float" />
      <div className="absolute top-20 left-[40%] w-1.5 h-1.5 bg-secondary/20 rounded-full animate-pulse-soft" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-primary-200/60 rounded-full px-5 py-2 text-sm text-primary font-medium shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Betrouwbaar financieel beheer sinds 2012
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-secondary-dark leading-[1.08] tracking-tight">
              Grip op uw{" "}
              <span className="gradient-text bg-gradient-to-r from-primary via-primary-light to-primary-400">financiën</span>,{" "}
              <br className="hidden sm:block" />
              rust in uw leven
            </h1>

            <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-xl">
              Stichting Balanz biedt professionele bewindvoering, mentorschap en curatele. 
              Wij helpen u stap voor stap naar financiële rust en stabiliteit.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Gratis kennismakingsgesprek
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}>
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 pt-6 border-t border-border-light/60"
            >
              {[
                { icon: Shield, label: "Gecertificeerd" },
                { icon: Users, label: "Persoonlijk" },
                { icon: Award, label: "12+ jaar ervaring" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center shadow-sm">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl scale-95" />
            
            <div className="relative">
              {/* Background decorative card */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-100/50 to-accent-light/30 rounded-3xl transform rotate-2" />
              
              {/* Main card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6 border border-white/60">
                <div className="flex items-center gap-4 pb-5 border-b border-border-light">
                  <img
                    src="/logo.svg"
                    alt="Balanz"
                    width={52}
                    height={52}
                    className="w-13 h-13 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-secondary-dark text-lg">Beschermd & Begeleid</h3>
                    <p className="text-sm text-foreground-muted">Uw financiën in goede handen</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Bewindvoering", desc: "Betrokken & Betrouwbaar", color: "bg-primary" },
                    { label: "Mentorschap", desc: "Coachend & Sociaal", color: "bg-accent-dark" },
                    { label: "Curatele", desc: "Professioneel & Deskundig", color: "bg-secondary" },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ x: 4, backgroundColor: "rgba(254, 242, 244, 0.5)" }}
                      className="flex items-center gap-4 p-3.5 rounded-xl transition-colors cursor-default"
                    >
                      <div className={`w-3 h-3 rounded-full ${item.color} shadow-sm`} />
                      <div>
                        <p className="font-semibold text-secondary-dark">{item.label}</p>
                        <p className="text-sm text-foreground-muted">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-5 border-t border-border-light">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground-muted">Transparant via OnView</span>
                    <span className="text-primary font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 bg-success rounded-full animate-pulse-soft" />
                      Inzicht 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <SectionWave position="bottom" className="text-white" />
    </section>
  );
}
