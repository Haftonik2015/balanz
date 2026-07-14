import type { Metadata } from "next";
import Link from "next/link";
import { Heart, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentorschap - Persoonlijke Bescherming & Begeleiding",
  description:
    "Professioneel mentorschap in Oss. Wij nemen beslissingen over verzorging, verpleging en behandeling wanneer u dat zelf niet meer kunt. Coachend en sociaal.",
};

export default function MentorschapPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
            <Link href="/diensten" className="hover:underline">Diensten</Link>
            <span>/</span>
            <span>Mentorschap</span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-secondary-dark">Mentorschap</h1>
              <p className="text-primary font-medium">Coachend & Sociaal</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground-muted leading-relaxed">
              De rechter kan een mentor benoemen als u niet meer zelf kunt beslissen over persoonlijke 
              zaken, zoals verzorging, verpleging, behandeling en begeleiding. De mentor beslist hierover, 
              zoveel mogelijk samen met u. Mentorschap beschermt u op het persoonlijke vlak.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Wat doet een mentor?</h2>
            <p className="text-foreground-muted leading-relaxed">
              Een mentor behartigt uw belangen op het gebied van verzorging, verpleging, behandeling 
              en begeleiding. De mentor overlegt met zorgverleners, geeft toestemming voor behandelingen 
              en zorgt dat uw wensen zoveel mogelijk worden gerespecteerd.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {[
                "Beslissingen over verzorging",
                "Toestemming voor behandelingen",
                "Overleg met zorgverleners",
                "Behartigen persoonlijke belangen",
                "Keuzes over woonvorm",
                "Begeleiding bij dagbesteding",
                "Contact met hulpverleners",
                "Altijd in overleg met u",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary-dark font-medium">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Wanneer is mentorschap nodig?</h2>
            <p className="text-foreground-muted leading-relaxed">
              Mentorschap kan worden aangevraagd wanneer iemand door een geestelijke of lichamelijke 
              beperking niet meer in staat is om zelf beslissingen te nemen over persoonlijke zaken. 
              Denk aan situaties bij dementie, een verstandelijke beperking, of na een hersenbeschadiging.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Mentorschap en bewindvoering</h2>
            <p className="text-foreground-muted leading-relaxed">
              Mentorschap wordt vaak gecombineerd met bewindvoering. De bewindvoerder behartigt dan de 
              financiële belangen, terwijl de mentor de persoonlijke belangen behartigt. Stichting Balanz 
              kan beide rollen vervullen, zodat u één aanspreekpunt heeft.
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
