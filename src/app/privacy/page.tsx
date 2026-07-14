import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Privacybeleid van Stichting Balanz. Lees hoe wij omgaan met uw persoonsgegevens bij bewindvoering, mentorschap en curatele.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <Container size="narrow">
        <h1 className="text-4xl font-bold text-secondary-dark mb-8">
          Privacybeleid
        </h1>

        <div className="bg-white rounded-2xl border border-card-border p-8 md:p-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Inleiding</h2>
            <p className="text-foreground-muted leading-relaxed">
              Stichting Balanz respecteert uw privacy en gaat zorgvuldig om met uw persoonsgegevens. 
              In dit privacybeleid informeren wij u over hoe wij uw gegevens verzamelen, gebruiken 
              en beschermen. Wij houden ons aan de Algemene Verordening Gegevensbescherming (AVG) 
              en overige privacywetgeving.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Welke gegevens verzamelen wij?</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              In het kader van onze dienstverlening kunnen wij de volgende persoonsgegevens verwerken:
            </p>
            <ul className="space-y-2 text-foreground-muted text-sm">
              {[
                "Naam, adres en woonplaats",
                "Geboortedatum en BSN",
                "Contactgegevens (telefoon, e-mail)",
                "Financiële gegevens (inkomsten, uitgaven, schulden)",
                "Gegevens over uw gezondheid (alleen bij mentorschap/curatele)",
                "Correspondentie en gespreksnotities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Waarvoor gebruiken wij uw gegevens?</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
            </p>
            <ul className="space-y-2 text-foreground-muted text-sm">
              {[
                "Het uitvoeren van bewindvoering, mentorschap of curatele",
                "Het beheren van uw financiën",
                "Communicatie over uw dossier",
                "Het voldoen aan wettelijke verplichtingen",
                "Verantwoording aan de kantonrechter",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Beveiliging</h2>
            <p className="text-foreground-muted leading-relaxed">
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens 
              te beschermen tegen verlies, misbruik en onbevoegde toegang. Onze medewerkers zijn 
              gebonden aan geheimhouding.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Bewaartermijn</h2>
            <p className="text-foreground-muted leading-relaxed">
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden 
              waarvoor ze zijn verzameld, met inachtneming van wettelijke bewaartermijnen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Uw rechten</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              U heeft het recht om:
            </p>
            <ul className="space-y-2 text-foreground-muted text-sm">
              {[
                "Inzage te vragen in uw persoonsgegevens",
                "Correctie of verwijdering te verzoeken",
                "Bezwaar te maken tegen de verwerking",
                "Gegevensoverdraagbaarheid te verzoeken",
                "Een klacht in te dienen bij de Autoriteit Persoonsgegevens",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Cookies</h2>
            <p className="text-foreground-muted leading-relaxed">
              Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor het 
              goed functioneren van de website. Wij plaatsen geen tracking cookies zonder uw 
              toestemming.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Contact</h2>
            <p className="text-foreground-muted leading-relaxed">
              Heeft u vragen over dit privacybeleid of wilt u gebruik maken van uw rechten? 
              Neem dan contact met ons op via{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>{" "}
              of bel{" "}
              <a href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`} className="text-primary hover:underline">
                {siteConfig.phone}
              </a>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
