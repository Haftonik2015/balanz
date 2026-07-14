"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-secondary-dark to-[#1a0e10] text-white" role="contentinfo">
      <div className="py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-sm">
                  <img
                    src="/logo.svg"
                    alt="Stichting Balanz"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold leading-tight block">Stichting Balanz</span>
                  <span className="text-xs text-gray-400 leading-tight">Bewindvoering & Mentorschap</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professionele en betrokken organisatie met ruime ervaring in de sociale- en juridische hulpverlening. Wij helpen u bij het beheer van uw financiën.
              </p>
              <p className="text-gray-400 text-xs">KVK: {siteConfig.kvk}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-base">Onze diensten</h3>
              <nav aria-label="Footer diensten">
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/diensten/bewindvoering" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Bewindvoering
                    </Link>
                  </li>
                  <li>
                    <Link href="/diensten/mentorschap" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Mentorschap
                    </Link>
                  </li>
                  <li>
                    <Link href="/diensten/curatele" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Curatele
                    </Link>
                  </li>
                  <li>
                    <Link href="/tarieven" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Tarieven 2026
                    </Link>
                  </li>
                  <li>
                    <Link href="/werkwijze" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Onze werkwijze
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-base">Informatie</h3>
              <nav aria-label="Footer informatie">
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/over-ons" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Over ons
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Veelgestelde vragen
                    </Link>
                  </li>
                  <li>
                    <Link href="/aanmelden" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Aanmelden
                    </Link>
                  </li>
                  <li>
                    <a href={siteConfig.onviewUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1">
                      OnView portaal <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <Link href="/algemene-voorwaarden" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Algemene voorwaarden
                    </Link>
                  </li>
                  <li>
                    <Link href="/klachtenreglement" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Klachtenreglement
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-base">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                    className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-300" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-300" />
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-300" />
                  <span>
                    {siteConfig.address.street}<br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary-300" />
                  <span>
                    Spreekuur: {siteConfig.openingHours.days}<br />
                    {siteConfig.openingHours.hours} uur
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-gray-700 py-6">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; 2012 - {currentYear} {siteConfig.name}. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacybeleid
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">
                Voorwaarden
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
