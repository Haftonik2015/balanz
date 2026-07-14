"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    title: "Algemeen",
    questions: [
      {
        q: "Wat doet Stichting Balanz?",
        a: "Stichting Balanz is een professionele organisatie voor bewindvoering, mentorschap en curatele. Wij helpen mensen die door omstandigheden niet meer zelfstandig hun financiën of persoonlijke zaken kunnen beheren. Wij bieden financieel beheer, schuldenoplossing en persoonlijke begeleiding.",
      },
      {
        q: "Voor wie is bewindvoering bedoeld?",
        a: "Bewindvoering is bedoeld voor mensen die door lichamelijke of geestelijke beperkingen, verslaving, of problematische schulden niet meer in staat zijn hun financiën zelf te beheren. De kantonrechter beslist uiteindelijk of bewindvoering nodig is.",
      },
      {
        q: "Wat is het verschil tussen bewindvoering, mentorschap en curatele?",
        a: "Bij bewindvoering gaat het alleen om financieel beheer (geld en bezittingen). Bij mentorschap gaat het om persoonlijke beslissingen (verzorging, behandeling). Curatele combineert beide: zowel financieel als persoonlijk wordt u vertegenwoordigd. Curatele is de zwaarste maatregel.",
      },
      {
        q: "In welk gebied is Stichting Balanz actief?",
        a: "Ons kantoor is gevestigd in Oss en wij bedienen cliënten in de wijde regio, waaronder Brabant en omliggende gebieden. Neem contact op om te bespreken of wij u kunnen helpen.",
      },
    ],
  },
  {
    title: "Aanmelden & Procedure",
    questions: [
      {
        q: "Hoe meld ik mij aan?",
        a: "U kunt zich aanmelden via ons contactformulier, telefonisch (0412 - 840 009) of per e-mail. Na het eerste contact plannen wij een intakegesprek waarin wij uw situatie bespreken en het aanmeldformulier invullen.",
      },
      {
        q: "Wat heb ik nodig bij de aanmelding?",
        a: "Voor de aanmelding heeft u een geldig identiteitsbewijs nodig en indien beschikbaar: overzichten van uw inkomsten, uitgaven en schulden. Tijdens het intakegesprek helpen wij u met het verzamelen van alle benodigde informatie.",
      },
      {
        q: "Hoe lang duurt het voordat de bewindvoering start?",
        a: "Na het indienen van het verzoekschrift bij de rechtbank duurt het gemiddeld 4 tot 8 weken voordat de rechter een beschikking afgeeft. Na de beschikking starten wij direct met het beheer van uw financiën.",
      },
      {
        q: "Kan ik ook zelf bewindvoering aanvragen?",
        a: "Ja, u kunt zelf bewindvoering aanvragen. Maar ook familieleden, zorgverleners of het Openbaar Ministerie kunnen een verzoek indienen bij de kantonrechter.",
      },
    ],
  },
  {
    title: "Kosten & Tarieven",
    questions: [
      {
        q: "Wat kost bewindvoering?",
        a: "De tarieven worden vastgesteld door de branchevereniging PBI. Voor 2026 bedragen de maandelijkse kosten voor standaard bewindvoering €135,38 per persoon. Bij problematische schulden is dit €175,58. Alle tarieven zijn vrijgesteld van BTW.",
      },
      {
        q: "Wie betaalt de kosten?",
        a: "De kosten voor bewindvoering worden in veel gevallen vergoed via bijzondere bijstand van de gemeente. Wij helpen u bij het aanvragen hiervan. U betaalt dus in de praktijk vaak niets zelf.",
      },
      {
        q: "Zijn er eenmalige kosten?",
        a: "Ja, bij de start van bewindvoering worden eenmalig intake kosten in rekening gebracht van €767,00. Ook deze kosten kunnen vaak via bijzondere bijstand worden vergoed.",
      },
    ],
  },
  {
    title: "Tijdens het beheer",
    questions: [
      {
        q: "Kan ik meekijken met mijn financiën?",
        a: "Ja! Wij werken met OnView, een online beheersysteem. Via dit portaal kunt u 24 uur per dag, 7 dagen per week meekijken met uw financiën. U ziet precies wat er binnenkomt en wat er uitgaat.",
      },
      {
        q: "Hoeveel leefgeld krijg ik?",
        a: "Het leefgeld wordt bepaald op basis van uw persoonlijke situatie en het budgetplan dat wij opstellen. Wij zorgen dat uw vaste lasten betaald zijn en dat u voldoende overhoudt voor dagelijkse uitgaven.",
      },
      {
        q: "Kan ik contact opnemen als ik vragen heb?",
        a: "Absoluut. Wij zijn telefonisch bereikbaar tijdens ons spreekuur (maandag t/m donderdag van 10:00 tot 12:00 uur). Daarbuiten kunt u altijd een e-mail sturen.",
      },
      {
        q: "Kan de bewindvoering worden beëindigd?",
        a: "Ja, wanneer u weer in staat bent uw financiën zelf te beheren, kan de bewindvoering worden opgeheven. Dit gebeurt via een verzoek aan de kantonrechter. Wij begeleiden u ook hierbij.",
      },
    ],
  },
  {
    title: "Klachten",
    questions: [
      {
        q: "Wat als ik niet tevreden ben?",
        a: "Wij nemen klachten serieus. In eerste instantie proberen we het in onderling overleg op te lossen. Lukt dat niet, dan kunt u een schriftelijke klacht indienen volgens ons klachtenreglement. Wij reageren binnen vier weken.",
      },
      {
        q: "Waar kan ik een klacht indienen?",
        a: "Een klacht kunt u schriftelijk of per e-mail indienen bij Stichting Balanz. Bent u het niet eens met de beslissing, dan kunt u de kwestie voorleggen aan de bevoegde kantonrechter.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-card-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-background-secondary transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-secondary-dark pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-foreground-muted shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-foreground-muted leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-6">
              Veelgestelde vragen
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Hier vindt u antwoorden op de meest gestelde vragen over bewindvoering, mentorschap 
              en curatele. Staat uw vraag er niet bij? Neem gerust contact op.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-bold text-secondary-dark mb-4">{category.title}</h2>
                <div className="space-y-3">
                  {category.questions.map((faq) => (
                    <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center border border-primary-200">
            <h2 className="text-xl font-bold text-secondary-dark mb-3">
              Staat uw vraag er niet bij?
            </h2>
            <p className="text-foreground-muted mb-6">
              Neem vrijblijvend contact op. Wij beantwoorden graag al uw vragen.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact opnemen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
