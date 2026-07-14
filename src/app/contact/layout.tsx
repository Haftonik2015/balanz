import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Neem Vrijblijvend Contact Op",
  description:
    "Neem contact op met Stichting Balanz voor bewindvoering, mentorschap of curatele. Bel 0412 - 840 009 of vul ons contactformulier in. Wij helpen u graag.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
