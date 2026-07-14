import type { Metadata } from "next";
import Link from "next/link";
import { Scale, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bewindvoering - Professioneel Financieel Beheer",
  description:
    "Professionele bewindvoering in Oss. Wij beheren uw financiën, lossen schulden op en werken aan financiële stabiliteit. Transparant beheer via OnView.",
};

export default function BewindvoeringPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
            <Link href="/diensten" className="hover:underline">Diensten</Link>
            <span>/</span>
            <span>Bewindvoering</span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-secondary-dark">Bewindvoering</h1>
              <p className="text-primary font-medium">Betrokken & Betrouwbaar</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground-muted leading-relaxed">
              Als bewindvoerder zijn wij uw wettelijk vertegenwoordiger. Wij behartigen uw belangen 
              op het gebied van geld en bezittingen en beheren uw financiën. Wij doen dit als professional, 
              met jarenlange ervaring in de sociale en juridische hulpverlening.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Wat doet een bewindvoerder?</h2>
            <p className="text-foreground-muted leading-relaxed">
              Een bewindvoerder neemt het beheer van uw financiën over. Dit betekent dat wij zorgen voor 
              het betalen van uw vaste lasten, het beheren van uw inkomen, en het oplossen van eventuele 
              schulden. U ontvangt wekelijks leefgeld en kunt via OnView altijd meekijken.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {[
                "Beheer van alle bankrekeningen",
                "Betalen van vaste lasten",
                "Aanvragen van toeslagen",
                "Schuldenregeling opzetten",
                "Budgetplan opstellen",
                "Contact met schuldeisers",
                "Wekelijks leefgeld",
                "Jaarlijkse verantwoording aan rechtbank",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary-dark font-medium">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Wanneer is bewindvoering nodig?</h2>
            <p className="text-foreground-muted leading-relaxed">
              Bewindvoering kan worden aangevraagd wanneer u door lichamelijke of geestelijke beperkingen 
              niet meer in staat bent uw financiën zelf te beheren. Ook bij problematische schulden kan 
              bewindvoering uitkomst bieden. De kantonrechter beslist uiteindelijk over de instelling.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Transparant via OnView</h2>
            <p className="text-foreground-muted leading-relaxed">
              Stichting Balanz werkt met OnView, een online beheersysteem. Via dit portaal kunt u 24 uur 
              per dag, 7 dagen per week meekijken met uw financiën. U ziet precies wat er binnenkomt en 
              wat er uitgaat. Volledige transparantie is onze standaard.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Ons doel</h2>
            <p className="text-foreground-muted leading-relaxed">
              Als het mogelijk is, begeleiden wij cliënten er naartoe om na verloop van tijd het beheer 
              van hun geldzaken weer zelfstandig te kunnen verzorgen. Financiële zelfstandigheid is altijd 
              ons uiteindelijke doel.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
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
        </Container>
      </section>
      <CTA />
    </>
  );
}
