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
    <section className="relative overflow-hidden pb-24 pt-14 md:pb-32 md:pt-20 lg:pb-40 lg:pt-24 noise-bg">
      {/* Soft gradient background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 mesh-gradient" />

      {/* Two calm decorative orbs */}
      <div className="absolute -top-10 right-[10%] h-72 w-72 rounded-full bg-gradient-to-br from-primary/[0.07] to-primary-light/[0.03] blur-3xl animate-pulse-soft" />
      <div className="absolute -bottom-16 left-[6%] h-96 w-96 rounded-full bg-gradient-to-tr from-accent/[0.09] to-accent-light/[0.04] blur-3xl animate-float" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/90 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              Betrouwbaar financieel beheer sinds 2012
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-secondary-dark sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Grip op uw{" "}
              <span className="gradient-text bg-gradient-to-r from-primary via-primary-light to-primary-400">
                financiën
              </span>
              ,<br className="hidden sm:block" /> rust in uw leven
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
              Professionele bewindvoering, mentorschap en curatele. Wij helpen u
              stap voor stap naar financiële rust en stabiliteit.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
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
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-5">
              {[
                { icon: Shield, label: "Gecertificeerd" },
                { icon: Users, label: "Persoonlijk" },
                { icon: Award, label: "12+ jaar ervaring" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-foreground-muted"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-7">
              <div className="flex items-center gap-4 border-b border-border-light pb-5">
                <img
                  src="/logo.svg"
                  alt="Balanz"
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 object-contain animate-logo-spin"
                />
                <div>
                  <h2 className="text-lg font-bold text-secondary-dark">
                    Beschermd &amp; Begeleid
                  </h2>
                  <p className="text-sm text-foreground-muted">
                    Uw financiën in goede handen
                  </p>
                </div>
              </div>

              <ul className="divide-y divide-border-light/70">
                {[
                  { label: "Bewindvoering", desc: "Betrokken & Betrouwbaar", color: "bg-primary" },
                  { label: "Mentorschap", desc: "Coachend & Sociaal", color: "bg-accent-dark" },
                  { label: "Curatele", desc: "Professioneel & Deskundig", color: "bg-secondary" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3 py-3">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
                    <span className="font-semibold text-secondary-dark">{item.label}</span>
                    <span className="ml-auto text-sm text-foreground-muted">{item.desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-border-light pt-5 text-sm">
                <span className="text-foreground-muted">Transparant via OnView</span>
                <span className="flex items-center gap-1.5 font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse-soft" />
                  Inzicht 24/7
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <SectionWave position="bottom" className="text-white" />
    </section>
  );
}
