"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-6">
              Neem contact op
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Heeft u vragen over bewindvoering, mentorschap of curatele? Of wilt u zich aanmelden? 
              Neem vrijblijvend contact met ons op. Wij helpen u graag verder.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-card-border p-8">
                <h2 className="text-xl font-bold text-secondary-dark mb-6">
                  Stuur ons een bericht
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-dark mb-2">Bericht verzonden!</h3>
                    <p className="text-foreground-muted">
                      Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="voornaam" className="block text-sm font-medium text-secondary-dark mb-1.5">
                          Voornaam *
                        </label>
                        <input
                          type="text"
                          id="voornaam"
                          name="voornaam"
                          required
                          className="w-full rounded-lg border border-card-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                          placeholder="Uw voornaam"
                        />
                      </div>
                      <div>
                        <label htmlFor="achternaam" className="block text-sm font-medium text-secondary-dark mb-1.5">
                          Achternaam *
                        </label>
                        <input
                          type="text"
                          id="achternaam"
                          name="achternaam"
                          required
                          className="w-full rounded-lg border border-card-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                          placeholder="Uw achternaam"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-dark mb-1.5">
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-lg border border-card-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                          placeholder="naam@voorbeeld.nl"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefoon" className="block text-sm font-medium text-secondary-dark mb-1.5">
                          Telefoonnummer
                        </label>
                        <input
                          type="tel"
                          id="telefoon"
                          name="telefoon"
                          className="w-full rounded-lg border border-card-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                          placeholder="06 - 12345678"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="onderwerp" className="block text-sm font-medium text-secondary-dark mb-1.5">
                        Onderwerp *
                      </label>
                      <select
                        id="onderwerp"
                        name="onderwerp"
                        required
                        className="w-full rounded-lg border border-card-border px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="bewindvoering">Bewindvoering</option>
                        <option value="mentorschap">Mentorschap</option>
                        <option value="curatele">Curatele</option>
                        <option value="aanmelding">Aanmelding</option>
                        <option value="overig">Overige vragen</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bericht" className="block text-sm font-medium text-secondary-dark mb-1.5">
                        Uw bericht *
                      </label>
                      <textarea
                        id="bericht"
                        name="bericht"
                        required
                        rows={5}
                        className="w-full rounded-lg border border-card-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-y"
                        placeholder="Beschrijf kort uw situatie of vraag..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1 h-4 w-4 rounded border-card-border text-primary focus:ring-primary"
                      />
                      <label htmlFor="privacy" className="text-xs text-foreground-muted">
                        Ik ga akkoord met het{" "}
                        <a href="/privacy" className="text-primary hover:underline">privacybeleid</a>
                        {" "}en geef toestemming voor het verwerken van mijn gegevens.
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      Bericht versturen
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-card-border p-6">
                <h3 className="font-bold text-secondary-dark mb-4">Contactgegevens</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                      className="flex items-start gap-3 text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-dark">Telefoon</p>
                        <p>{siteConfig.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-start gap-3 text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-dark">E-mail</p>
                        <p>{siteConfig.email}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-foreground-muted">
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-secondary-dark">Adres</p>
                      <p>{siteConfig.address.street}</p>
                      <p>{siteConfig.address.postalCode} {siteConfig.address.city}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-foreground-muted">
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-secondary-dark">Spreekuur</p>
                      <p>{siteConfig.openingHours.days}</p>
                      <p>{siteConfig.openingHours.hours} uur</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-2xl border border-primary-200 p-6">
                <h3 className="font-bold text-secondary-dark mb-2">Direct hulp nodig?</h3>
                <p className="text-sm text-foreground-muted mb-4">
                  Bel ons direct voor een vrijblijvend gesprek. Wij helpen u graag verder.
                </p>
                <Button asChild className="w-full">
                  <a href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    Bel {siteConfig.phone}
                  </a>
                </Button>
              </div>

              <div className="bg-white rounded-2xl border border-card-border p-6">
                <h3 className="font-bold text-secondary-dark mb-2">KVK-gegevens</h3>
                <p className="text-sm text-foreground-muted">
                  <strong>Stichting Balanz</strong><br />
                  KVK: {siteConfig.kvk}<br />
                  {siteConfig.address.street}<br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
