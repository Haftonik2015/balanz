import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Tarieven 2026 - Bewindvoering, Mentorschap & Curatele",
  description:
    "Overzicht van tarieven 2026 voor bewindvoering, mentorschap en curatele. Stichting Balanz hanteert de tarieven volgens de Nederlandse Branchevereniging (PBI).",
};

const tarievenData = {
  intake: [
    { service: "Intake bewindvoering", price: "€ 767,00" },
    { service: "Intake mentorschap", price: "€ 767,00" },
    { service: "Intake bewindvoering en mentorschap", price: "€ 1.380,00" },
    { service: "Intake curatele", price: "€ 1.380,00" },
  ],
  bewindvoering: [
    { service: "Bewindvoering standaard (1 persoon)", price: "€ 135,38 /mnd" },
    { service: "Bewindvoering problematische schulden (1 persoon)", price: "€ 175,58 /mnd" },
    { service: "Bewindvoering standaard (2 personen)", price: "€ 162,38 /mnd" },
    { service: "Bewindvoering problematische schulden (2 personen)", price: "€ 210,66 /mnd" },
  ],
  mentorschap: [
    { service: "Mentorschap (1 persoon)", price: "€ 135,38 /mnd" },
    { service: "Mentorschap (2 personen)", price: "€ 244,41 /mnd" },
  ],
  combinatie: [
    { service: "Bewindvoering en mentorschap standaard", price: "€ 244,41 /mnd" },
    { service: "Bewindvoering en mentorschap (2 personen) standaard", price: "€ 352,91 /mnd" },
    { service: "Bewindvoering en mentorschap problematische schulden", price: "€ 280,08 /mnd" },
    { service: "Bewindvoering en mentorschap problematische schulden (2 pers.)", price: "€ 392,83 /mnd" },
  ],
  curatele: [
    { service: "Curatele standaard", price: "€ 244,41 /mnd" },
    { service: "Curatele met schulden", price: "€ 280,08 /mnd" },
  ],
  extra: [
    { service: "PGB Beheer 2025", price: "€ 747,78" },
    { service: "Eindrekening en verantwoording (1 persoon)", price: "€ 300,08" },
    { service: "Eindrekening en verantwoording (2 personen)", price: "€ 360,58" },
  ],
};

function PricingTable({ title, items }: { title: string; items: { service: string; price: string }[] }) {
  return (
    <div className="bg-white rounded-2xl border border-card-border overflow-hidden">
      <div className="bg-primary-50 px-6 py-4 border-b border-card-border">
        <h3 className="font-bold text-secondary-dark">{title}</h3>
      </div>
      <div className="divide-y divide-border-light">
        {items.map((item) => (
          <div key={item.service} className="flex items-center justify-between px-6 py-4 hover:bg-background-secondary transition-colors">
            <span className="text-sm text-foreground-muted">{item.service}</span>
            <span className="text-sm font-semibold text-secondary-dark whitespace-nowrap ml-4">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TarievenPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-4">
              Tarieven 2026
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Stichting Balanz hanteert de tarieven volgens de Nederlandse Branchevereniging (PBI). 
              Alle genoemde tarieven zijn per januari 2026 vrijgesteld van BTW.
            </p>
          </div>

          <div className="space-y-8">
            <PricingTable title="Intake kosten" items={tarievenData.intake} />
            <PricingTable title="Bewindvoering" items={tarievenData.bewindvoering} />
            <PricingTable title="Mentorschap" items={tarievenData.mentorschap} />
            <PricingTable title="Bewindvoering & Mentorschap" items={tarievenData.combinatie} />
            <PricingTable title="Curatele" items={tarievenData.curatele} />
            <PricingTable title="Extra werkzaamheden" items={tarievenData.extra} />
          </div>

          <div className="mt-12 bg-primary-50 rounded-2xl p-6 border border-primary-200">
            <h3 className="font-semibold text-secondary-dark mb-2">Belangrijk om te weten</h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Alle tarieven zijn per januari 2026 vrijgesteld van BTW.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                De maandelijkse kosten worden vergoed door de gemeente of bijzondere bijstand.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Intake kosten worden eenmalig in rekening gebracht bij aanvang van de maatregel.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Neem contact op voor een persoonlijke berekening van uw situatie.
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
