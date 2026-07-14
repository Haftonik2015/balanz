import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Klachtenreglement - Bezwaren en Klachtenprocedure",
  description:
    "Klacht- en bezwarenreglement van Stichting Balanz. Lees hier hoe u een klacht kunt indienen over bewindvoering, mentorschap of curatele.",
};

export default function KlachtenreglementPage() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <Container size="narrow">
        <h1 className="text-4xl font-bold text-secondary-dark mb-8">
          Klacht- en bezwarenreglement
        </h1>

        <div className="bg-white rounded-2xl border border-card-border p-8 md:p-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">Werkwijze</h2>
            <p className="text-foreground-muted leading-relaxed">
              Stichting Balanz neemt klachten serieus. Hieronder vindt u ons klachtenreglement 
              met daarin de procedure voor het indienen en behandelen van klachten.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              Art. 1. Wie mag een klacht indienen
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Een klacht kan worden ingediend door degene die bevoegd is de curatele, 
              onderbewindstelling of het mentorschap te verzoeken. Dit kunnen onder meer zijn:
            </p>
            <ul className="space-y-2 text-foreground-muted">
              {[
                "De betrokkene zelf",
                "Zijn of haar echtgenoot, echtgenote of geregistreerde partner dan wel andere levensgezel",
                "Bloedverwanten in de rechte lijn en in de zijlijn tot en met de vierde graad",
                "Degene die het gezag over de betrokkene uitoefent",
                "Zijn of haar voogd",
                "Zijn of haar bewindvoerder",
                "Zijn of haar mentor",
                "Het Openbaar Ministerie",
                "De instelling waar de betrokkene wordt verzorgd of die begeleiding biedt",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              Art. 2. Onderling overleg
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Indien tussen een cliënt en Stichting Balanz een geschil ontstaat over de wijze 
              waarop de bewindvoerder, mentor of curator de belangen van de cliënt behartigt, 
              wordt in eerste instantie geprobeerd het geschil in onderling overleg op te lossen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              Art. 3. Schriftelijk indienen van een klacht
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Indien de cliënt na het onderlinge overleg niet tevreden is over de afhandeling 
              van het geschil, kan hij of zij een schriftelijke klacht indienen bij Stichting Balanz.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              De klacht kan per brief of per e-mail worden ingediend en bevat bij voorkeur:
            </p>
            <ul className="mt-3 space-y-2 text-foreground-muted">
              {[
                "Naam en adres van de klager",
                "Datum van indiening",
                "Een duidelijke omschrijving van de klacht",
                "Eventuele relevante stukken of bijlagen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              Art. 4. Waarover kan een klacht gaan
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Een klacht kan betrekking hebben op:
            </p>
            <ul className="space-y-2 text-foreground-muted">
              {[
                "De wijze waarop de bewindvoerder, curator of mentor de belangen heeft behartigd",
                "De uitvoering van de gemaakte afspraken",
                "De wijze waarop de bewindvoering, curatele of het mentorschap wordt uitgevoerd",
                "De wijze waarop de cliënt is bejegend",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground-muted leading-relaxed mt-4">
              Na ontvangst van de klacht ontvangt de cliënt binnen acht dagen een schriftelijke 
              ontvangstbevestiging.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              Art. 5. Behandeling van de klacht
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              De behandeling van de klacht vindt plaats onder geheimhouding en met inachtneming 
              van de geldende privacywetgeving. De klager wordt in de gelegenheid gesteld de klacht 
              mondeling of schriftelijk toe te lichten. Zowel de klager als degene op wie de klacht 
              betrekking heeft, kunnen zich laten bijstaan door een derde. Stichting Balanz streeft 
              naar een zorgvuldige, onafhankelijke en objectieve behandeling van iedere klacht.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              Art. 6. Beslissing op de klacht
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Binnen vier weken na ontvangst van de klacht wordt een schriftelijke en gemotiveerde 
              beslissing genomen. Indien meer tijd nodig is, wordt de klager hiervan schriftelijk 
              op de hoogte gesteld. Indien de klacht gegrond wordt verklaard, wordt aangegeven 
              welke maatregelen of verbeteracties hieraan worden verbonden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              Art. 7. Niet eens met de beslissing
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Indien de klager zich niet kan verenigen met de beslissing op de klacht, kan hij 
              of zij de kwestie voorleggen aan de bevoegde kantonrechter. Dit klachtenreglement 
              laat de wettelijke rechten van de cliënt onverlet.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
