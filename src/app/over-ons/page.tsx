import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Heart, Award, Users, Target, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Over Ons - Professioneel, Betrokken & Betrouwbaar",
  description:
    "Leer Stichting Balanz kennen. Sinds 2012 helpen wij mensen met bewindvoering, mentorschap en curatele in Oss en omgeving. Professioneel, betrokken en betrouwbaar.",
};

const values = [
  {
    icon: Shield,
    title: "Betrouwbaar",
    description: "Wij staan voor transparant en eerlijk beheer. Via OnView kunt u altijd meekijken met uw financiën.",
  },
  {
    icon: Heart,
    title: "Betrokken",
    description: "Elk mens is uniek. Wij nemen de tijd voor persoonlijk contact en stemmen onze aanpak af op uw situatie.",
  },
  {
    icon: Award,
    title: "Deskundig",
    description: "Met jarenlange ervaring in sociale en juridische hulpverlening bieden wij professionele ondersteuning.",
  },
  {
    icon: Users,
    title: "Toegankelijk",
    description: "Wij zijn bereikbaar, luisteren goed en communiceren helder. De drempel is bij ons altijd laag.",
  },
  {
    icon: Target,
    title: "Doelgericht",
    description: "Wij werken planmatig aan het oplossen van schulden en het herstel van financiële zelfstandigheid.",
  },
  {
    icon: Eye,
    title: "Transparant",
    description: "Volledige openheid over ons handelen. U weet altijd precies wat wij doen en waarom.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-6">
              Over Stichting Balanz
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Sinds 2012 helpen wij mensen bij het beheer van hun financiën en persoonlijke zaken. 
              Professioneel, betrokken en altijd met respect voor de mens achter het dossier.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-card-border p-8 md:p-10 mb-16">
            <h2 className="text-2xl font-bold text-secondary-dark mb-6">Wie zijn wij?</h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                Stichting Balanz is een professionele en betrokken organisatie met ruime ervaring 
                in de sociale en juridische hulpverlening. Wij zijn gespecialiseerd in bewindvoering, 
                mentorschap en curatele.
              </p>
              <p>
                Ons kantoor is gevestigd in Oss en wij bedienen cliënten in de wijde regio. Wij werken 
                volgens de richtlijnen van de branchevereniging PBI en staan onder toezicht van de 
                kantonrechter.
              </p>
              <p>
                Wij geloven dat iedereen recht heeft op financiële rust. Daarom zetten wij ons dagelijks 
                in om onze cliënten te helpen grip te krijgen op hun financiën. Waar mogelijk begeleiden 
                wij hen naar volledige financiële zelfstandigheid.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-secondary-dark mb-8 text-center">Onze kernwaarden</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-6 border border-card-border hover:shadow-md hover:border-primary-200 transition-all"
                >
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-card-border p-8 md:p-10 mb-16">
            <h2 className="text-2xl font-bold text-secondary-dark mb-6">Onze missie</h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                Onze missie is om mensen die door omstandigheden niet meer zelfstandig hun financiën 
                kunnen beheren, professioneel en met respect te ondersteunen. Wij bieden niet alleen 
                financieel beheer, maar ook rust, overzicht en perspectief.
              </p>
              <p>
                Wij streven ernaar dat onze cliënten zich gehoord voelen, weten waar ze aan toe zijn, 
                en stap voor stap toewerken naar een stabielere toekomst. Financiële zelfstandigheid 
                is daarbij altijd ons uiteindelijke doel.
              </p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 md:p-10 border border-primary-200">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">
              Lid van de branchevereniging PBI
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Stichting Balanz is aangesloten bij de branchevereniging voor Professionele 
              Bewindvoerders en Inkomensbeheerders (PBI). Dit betekent dat wij voldoen aan strenge 
              kwaliteitseisen en continue werken aan het verbeteren van onze dienstverlening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Maak kennis met ons
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
