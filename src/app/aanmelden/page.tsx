import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Mail, MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aanmelden - Start met Bewindvoering, Mentorschap of Curatele",
  description:
    "Meld u aan bij Stichting Balanz voor bewindvoering, mentorschap of curatele. Download het aanmeldformulier of neem direct contact op voor een intakegesprek.",
};

export default function AanmeldenPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-6">
              Aanmelden
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              De eerste stap naar financiële rust begint hier. Meld u aan voor bewindvoering, 
              mentorschap of curatele. Wij begeleiden u door het hele proces.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-card-border p-8 md:p-10 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-secondary-dark">Intake procedure</h2>
                <p className="text-sm text-foreground-muted">De stappen voor aanmelding</p>
              </div>
            </div>

            <div className="space-y-4 text-foreground-muted leading-relaxed mb-8">
              <p>
                Wanneer u in de schulden zit, kan de stap naar bewindvoering groot lijken — maar dat 
                hoeft niet. Stichting Balanz wil u helpen om uw financiële situatie weer op orde te 
                krijgen. Door u aan te melden kunnen wij u verder helpen om de volgende stappen te zetten.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-secondary-dark">Hoe werkt het?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Download het aanmeldformulier",
                  "Vul het formulier zo volledig mogelijk in",
                  "Maak een kopie van uw legitimatie",
                  "Stuur alles op per e-mail of post",
                  "Wij nemen contact op voor een intakegesprek",
                  "Samen bespreken we de volgende stappen",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3 p-3 bg-background-secondary rounded-lg">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-white font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground-muted">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border border-primary-200 mb-8">
              <h3 className="font-semibold text-secondary-dark mb-3 flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Download aanmeldformulier
              </h3>
              <p className="text-sm text-foreground-muted mb-4">
                Download het formulier, vul het zo volledig mogelijk in en stuur het samen met een 
                kopie van uw legitimatie naar ons op.
              </p>
              <Button asChild>
                <a href="/documents/Balanz-Bewind-Intakeformulier.pdf" download>
                  <Download className="h-4 w-4" />
                  Download formulier (PDF)
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-secondary-dark">Verstuur het formulier naar:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-background-secondary rounded-lg">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-secondary-dark text-sm">Per e-mail</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-primary hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background-secondary rounded-lg">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-secondary-dark text-sm">Per post</p>
                    <p className="text-sm text-foreground-muted">
                      Stichting Balanz<br />
                      t.a.v. Intake<br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <p className="text-sm text-secondary-dark font-medium flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                Vergeet niet om een kopie van uw identiteitsbewijs mee te sturen!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-card-border p-8 text-center">
            <h2 className="text-xl font-bold text-secondary-dark mb-3">
              Liever persoonlijk contact?
            </h2>
            <p className="text-foreground-muted mb-6">
              U kunt ook direct bellen voor een vrijblijvend gesprek. Wij helpen u graag op weg.
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
