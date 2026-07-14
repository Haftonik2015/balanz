import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description:
    "Algemene voorwaarden van Stichting Balanz voor bewindvoering, mentorschap en curatele diensten.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <Container size="narrow">
        <h1 className="text-4xl font-bold text-secondary-dark mb-8">
          Algemene voorwaarden
        </h1>

        <div className="bg-white rounded-2xl border border-card-border p-8 md:p-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">1. Algemeen</h2>
            <p className="text-foreground-muted leading-relaxed">
              Deze algemene voorwaarden zijn van toepassing op alle werkzaamheden en overeenkomsten 
              tussen Stichting Balanz en opdrachtgevers, dan wel hun rechtsopvolgers, tenzij 
              schriftelijk anders is overeengekomen. Door het sluiten van een overeenkomst erkent 
              de opdrachtgever deze algemene voorwaarden te kennen en te aanvaarden. Algemene 
              voorwaarden van de opdrachtgever zijn niet van toepassing, noch zelfstandig, noch 
              in combinatie met de onderhavige algemene voorwaarden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              2. Terbeschikkingstelling van informatie en medewerkers door de opdrachtgever
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              De opdrachtgever is verplicht alle informatie en gegevens die nodig zijn voor de 
              uitvoering van de opdracht tijdig en volledig aan Stichting Balanz te verstrekken. 
              De opdrachtgever staat in voor de juistheid en volledigheid van de verstrekte informatie.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              3. Het betrekken van derden bij de uitvoering van de opdracht
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Het betrekken of inschakelen van derden bij de uitvoering van de opdracht door 
              Stichting Balanz geschiedt uitsluitend in onderling overleg, doch hier heeft te 
              gelden dat onderhavige algemene voorwaarden ook op hen van toepassing zijn.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              4. Tarieven en kosten van de opdracht
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Het honorarium wordt overeenkomstig vigerende regelgeving separaat met de opdrachtgever 
              overeengekomen en vastgelegd in een kantoorovereenkomst, welke door partijen zullen 
              worden ondertekend. Voor zover de gemaakte kosten in het honorarium niet zijn inbegrepen, 
              kunnen deze afzonderlijk in rekening worden gebracht. Een tussentijdse verandering van 
              de tarieven die Stichting Balanz in rekening brengt, wordt tijdig en vooraf kenbaar gemaakt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">5. Betalingsvoorwaarden</h2>
            <p className="text-foreground-muted leading-relaxed">
              Het honorarium evenals de kosten worden maandelijks in rekening gebracht, tenzij anders 
              is overeengekomen. Indien de opdrachtgever niet binnen zeven dagen na declaratiedatum 
              betaald heeft, wordt de opdrachtgever van rechtswege geacht in verzuim te zijn zonder 
              dat enige sommatie of ingebrekestelling vereist is en kan de wettelijke rente in rekening 
              worden gebracht. Indien betaling achterwege blijft, kan Stichting Balanz haar werkzaamheden 
              opschorten.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              6. Wijziging van de opdracht / meerwerk
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              De opdrachtgever aanvaardt dat de tijdsplanning van de opdracht kan worden beïnvloed, 
              indien partijen tussentijds schriftelijk overeenkomen de aanpak, werkwijze of omvang 
              van de opdracht uit te breiden of te wijzigen. Indien de tussentijdse wijziging het 
              overeengekomen honorarium beïnvloedt, zal Stichting Balanz dit de opdrachtgever zo 
              spoedig mogelijk berichten.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">7. Duur van de opdracht</h2>
            <p className="text-foreground-muted leading-relaxed">
              De duur van de opdracht kan, behalve door de inspanning van Stichting Balanz, worden 
              beïnvloed door allerlei (externe) factoren, zoals de kwaliteit van de informatie die 
              Stichting Balanz verkrijgt en de medewerking die wordt verleend. Stichting Balanz kan 
              dan ook niet van tevoren exact aangeven hoelang de doorlooptijd voor het uitvoeren 
              van de opdracht zal zijn.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">8. Vertrouwelijkheid</h2>
            <p className="text-foreground-muted leading-relaxed">
              Stichting Balanz is verplicht tot geheimhouding van alle informatie en gegevens van 
              de opdrachtgever tegenover derden. Stichting Balanz zal in het kader van de opdracht 
              alle mogelijke voorzorgsmaatregelen nemen ter bescherming van de belangen van de 
              opdrachtgever.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">9. Aansprakelijkheid</h2>
            <p className="text-foreground-muted leading-relaxed">
              Iedere aansprakelijkheid van Stichting Balanz is steeds beperkt tot het bedrag dat 
              in het desbetreffende geval door de (beroeps)aansprakelijkheidsverzekering(en) wordt 
              uitbetaald, te vermeerderen met het bedrag van het eigen risico dat als gevolg van 
              de polisvoorwaarden niet ten laste van de verzekeraar(s) is.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">10. Toepasselijk recht</h2>
            <p className="text-foreground-muted leading-relaxed">
              Op de overeenkomst(en) tussen opdrachtgever en Stichting Balanz is uitsluitend 
              Nederlands recht van toepassing, meer in het bijzonder de bepalingen van het 
              Nederlands Burgerlijk Wetboek.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">11. Geschillenregeling</h2>
            <p className="text-foreground-muted leading-relaxed">
              Alle geschillen welke mochten ontstaan tussen opdrachtgever en Stichting Balanz 
              in verband met of naar aanleiding van een tussen hen gesloten overeenkomst zullen 
              slechts worden berecht door de bevoegde rechter in het arrondissement te Den Bosch.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              12. Bezwaren- en Klachtenreglement
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Stichting Balanz beschikt over een klachtenreglement. Indien u een klacht wilt 
              indienen, verwijzen wij u naar ons{" "}
              <a href="/klachtenreglement" className="text-primary hover:underline font-medium">
                klachtenreglement
              </a>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
