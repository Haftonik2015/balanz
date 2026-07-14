import type { Metadata } from "next";
import Link from "next/link";
import { Phone, FileText, Gavel, TrendingUp, CheckCircle, ArrowRight, ClipboardList, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Werkwijze - Van Eerste Contact tot Financiële Rust",
  description:
    "Ontdek hoe Stichting Balanz werkt. Van het eerste vrijblijvende gesprek tot volledig financieel beheer. Transparant, persoonlijk en professioneel.",
};

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Vrijblijvend eerste contact",
    description:
      "U neemt contact op via telefoon, e-mail of het contactformulier. Wij luisteren naar uw situatie, beantwoorden uw vragen en bespreken de mogelijkheden. Dit gesprek is geheel vrijblijvend en kosteloos.",
    details: [
      "Telefonisch of per e-mail",
      "Geheel vrijblijvend",
      "Eerste inschatting van uw situatie",
      "Uitleg over het proces",
    ],
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Intake gesprek",
    description:
      "Tijdens een persoonlijk intakegesprek brengen wij uw financiële situatie volledig in kaart. We bespreken uw inkomsten, uitgaven, schulden en persoonlijke omstandigheden. Samen vullen we het aanmeldformulier in.",
    details: [
      "Persoonlijk gesprek",
      "Financiële situatie in kaart",
      "Invullen aanmeldformulier",
      "Kopie legitimatie meebrengen",
    ],
  },
  {
    icon: FileText,
    step: "03",
    title: "Aanvraag bij de rechtbank",
    description:
      "Wij stellen het verzoekschrift op en dienen dit in bij de kantonrechter. De rechter beoordeelt het verzoek en spreekt de maatregel uit. Dit duurt gemiddeld 4 tot 8 weken.",
    details: [
      "Verzoekschrift opstellen",
      "Indienen bij kantonrechter",
      "Eventueel zitting bijwonen",
      "Beschikking ontvangen",
    ],
  },
  {
    icon: Gavel,
    step: "04",
    title: "Start van het beheer",
    description:
      "Na de beschikking van de rechter starten wij direct met het beheer. Wij openen een beheerrekening, inventariseren alle schulden en maken een budgetplan. U ontvangt wekelijks leefgeld.",
    details: [
      "Beheerrekening openen",
      "Schuldeninventarisatie",
      "Budgetplan opstellen",
      "Vaste lasten regelen",
    ],
  },
  {
    icon: Users,
    step: "05",
    title: "Begeleiding & contact",
    description:
      "Gedurende het hele traject blijven wij nauw contact met u houden. Via OnView kunt u altijd meekijken met uw financiën. Wij zijn bereikbaar voor vragen en ondersteuning.",
    details: [
      "Regelmatig overleg",
      "24/7 inzage via OnView",
      "Telefonisch spreekuur",
      "Persoonlijke begeleiding",
    ],
  },
  {
    icon: TrendingUp,
    step: "06",
    title: "Werken aan zelfstandigheid",
    description:
      "Waar mogelijk werken wij toe naar financiële zelfstandigheid. Wij helpen u vaardigheden op te bouwen, schulden af te lossen en grip te krijgen op uw financiën. Het einddoel is altijd zelfredzaamheid.",
    details: [
      "Schuldenafbouw",
      "Financiële vaardigheden",
      "Stap voor stap meer eigen regie",
      "Opheffing wanneer mogelijk",
    ],
  },
];

export default function WerkwijzePage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-6">
              Onze werkwijze
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Van het eerste vrijblijvende contact tot volledig financieel beheer. Wij begeleiden 
              u stap voor stap door het hele proces. Transparant, persoonlijk en professioneel.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl border border-card-border p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6">
                  <div className="flex md:flex-col items-center gap-4 md:items-start">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-primary-200">{step.step}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-secondary-dark mb-3">{step.title}</h2>
                    <p className="text-foreground-muted leading-relaxed mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm text-foreground-muted">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">
              Klaar voor de eerste stap?
            </h2>
            <p className="text-foreground-muted mb-8">
              Neem vrijblijvend contact op. Wij helpen u graag verder.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact opnemen
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
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
