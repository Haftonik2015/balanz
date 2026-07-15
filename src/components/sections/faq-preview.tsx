"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Wat kost bewindvoering?",
    a: "De tarieven worden vastgesteld door de branchevereniging. Voor 2026 bedragen de maandelijkse kosten voor standaard bewindvoering €135,38 per persoon; bij problematische schulden €175,58. Alle tarieven zijn vrijgesteld van BTW.",
  },
  {
    q: "Wie betaalt de kosten?",
    a: "De kosten worden in veel gevallen vergoed via bijzondere bijstand van de gemeente. Wij helpen u bij het aanvragen hiervan, dus in de praktijk betaalt u vaak niets zelf.",
  },
  {
    q: "Kan ik meekijken met mijn financiën?",
    a: "Ja. Via ons online portaal OnView kunt u 24 uur per dag, 7 dagen per week meekijken. U ziet precies wat er binnenkomt en wat er uitgaat.",
  },
  {
    q: "Hoe lang duurt het voordat de bewindvoering start?",
    a: "Na het indienen van het verzoekschrift bij de rechtbank duurt het gemiddeld 4 tot 8 weken voordat de rechter een beschikking afgeeft. Daarna starten wij direct met het beheer.",
  },
  {
    q: "Hoe meld ik mij aan?",
    a: "U kunt zich aanmelden via ons contactformulier, telefonisch of per e-mail. Na het eerste contact plannen wij een intakegesprek waarin wij uw situatie bespreken.",
  },
];

function FaqRow({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="overflow-hidden rounded-xl border border-card-border bg-white transition-colors hover:border-primary-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-secondary-dark">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-foreground-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 noise-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,30,58,0.04),_transparent)]" />
      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <HelpCircle className="h-4 w-4" />
              Veelgestelde vragen
            </span>
            <h2 className="mb-4 text-3xl font-bold text-secondary-dark sm:text-4xl">
              Antwoord op uw vragen
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-foreground-muted">
              De meest gestelde vragen over bewindvoering, kosten en aanmelden — helder
              op een rij. Staat uw vraag er niet bij? Wij helpen u graag verder.
            </p>
            <Button asChild variant="outline">
              <Link href="/faq">
                Alle vragen bekijken
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <FaqRow key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
