import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Curatele - Volledige Wettelijke Bescherming",
  description:
    "Professionele curatele in Oss. Volledige bescherming van persoon én vermogen wanneer handelingsbekwaamheid ontbreekt. Deskundig en juridisch correct.",
};

export default function CuratelePage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
            <Link href="/diensten" className="hover:underline">Diensten</Link>
            <span>/</span>
            <span>Curatele</span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-secondary-dark">Curatele</h1>
              <p className="text-primary font-medium">Professioneel & Deskundig</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground-muted leading-relaxed">
              Als iemand niet handelingsbekwaam is of zijn handelingsbekwaamheid verliest en niet meer 
              zelfstandig rechtshandelingen kan verrichten, kunnen wij als curator benoemd worden om de 
              persoon te vertegenwoordigen. Met een ondercuratelestelling worden persoon en vermogen beschermd.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Wat doet een curator?</h2>
            <p className="text-foreground-muted leading-relaxed">
              Curatele is de meest vergaande maatregel. Een curator vertegenwoordigt u op alle gebieden: 
              zowel financieel als persoonlijk. U bent onder curatele niet meer handelingsbekwaam, wat 
              betekent dat de curator toestemming moet geven voor rechtshandelingen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {[
                "Volledige wettelijke vertegenwoordiging",
                "Beheer van alle financiën",
                "Beslissingen over persoonlijke zaken",
                "Bescherming tegen onverantwoorde uitgaven",
                "Juridische handelingen namens u",
                "Toezicht door kantonrechter",
                "Jaarlijkse rekening en verantwoording",
                "Bescherming van uw vermogen",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary-dark font-medium">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Verschil met bewindvoering en mentorschap</h2>
            <p className="text-foreground-muted leading-relaxed">
              Bij bewindvoering gaat het alleen om financieel beheer. Bij mentorschap alleen om persoonlijke 
              beslissingen. Curatele combineert beide: zowel het financiële als het persoonlijke wordt 
              beschermd. Het is de zwaarste maatregel en wordt alleen uitgesproken wanneer bewindvoering 
              en/of mentorschap niet voldoende bescherming bieden.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-12 mb-6">Wanneer is curatele nodig?</h2>
            <p className="text-foreground-muted leading-relaxed">
              Curatele kan worden aangevraagd bij een geestelijke stoornis, verkwisting of gewoonte van 
              drankmisbruik, waardoor iemand niet meer in staat is de eigen belangen behoorlijk waar te 
              nemen. De kantonrechter beoordeelt of curatele de juiste maatregel is.
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
