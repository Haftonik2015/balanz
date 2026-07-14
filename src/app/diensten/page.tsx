import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Diensten - Bewindvoering, Mentorschap & Curatele",
  description:
    "Stichting Balanz biedt professionele bewindvoering, mentorschap en curatele. Ontdek welke vorm van bescherming bij uw situatie past.",
};

const services = [
  {
    icon: Scale,
    title: "Bewindvoering",
    subtitle: "Betrokken & Betrouwbaar",
    description:
      "Als bewindvoerder zijn wij uw wettelijk vertegenwoordiger op het gebied van financiën. Wij behartigen uw belangen, beheren uw geld en bezittingen, en werken aan het oplossen van schulden.",
    details: [
      "Volledig beheer van uw financiën",
      "Schuldenregeling en aflossingsplannen",
      "Contact met schuldeisers",
      "Budgetplan en leefgeld",
      "Aanvragen toeslagen en voorzieningen",
      "Transparant via OnView",
    ],
    href: "/diensten/bewindvoering",
  },
  {
    icon: Heart,
    title: "Mentorschap",
    subtitle: "Coachend & Sociaal",
    description:
      "De rechter kan een mentor benoemen als u niet meer zelf kunt beslissen over persoonlijke zaken, zoals verzorging, verpleging, behandeling en begeleiding. Een mentor beschermt u op het persoonlijke vlak.",
    details: [
      "Beslissingen over verzorging",
      "Keuzes rondom verpleging",
      "Behandelbeslissingen",
      "Begeleiding bij persoonlijke zaken",
      "Overleg met zorgverleners",
      "Altijd in samenspraak met u",
    ],
    href: "/diensten/mentorschap",
  },
  {
    icon: ShieldCheck,
    title: "Curatele",
    subtitle: "Professioneel & Deskundig",
    description:
      "Curatele is de meest vergaande vorm van bescherming. Wanneer u niet meer handelingsbekwaam bent, vertegenwoordigt de curator u volledig. Zowel persoon als vermogen worden beschermd.",
    details: [
      "Volledige wettelijke vertegenwoordiging",
      "Bescherming van persoon én vermogen",
      "Rechtshandelingen namens u",
      "Beheer van alle financiële zaken",
      "Persoonlijke beslissingen",
      "Juridisch correcte uitvoering",
    ],
    href: "/diensten/curatele",
  },
];

export default function DienstenPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-6">
              Onze diensten
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Stichting Balanz biedt drie vormen van wettelijke bescherming. Elke dienst is 
              afgestemd op uw persoonlijke situatie. Samen bekijken wij welke oplossing het 
              beste bij u past.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-card-border p-8 md:p-10 hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-secondary-dark">{service.title}</h2>
                        <p className="text-sm font-medium text-primary">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-foreground-muted leading-relaxed">{service.description}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-secondary-dark text-sm uppercase tracking-wider">
                      Wat wij doen
                    </h3>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-foreground-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="mt-4">
                      <Link href={service.href}>
                        Meer over {service.title.toLowerCase()}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
