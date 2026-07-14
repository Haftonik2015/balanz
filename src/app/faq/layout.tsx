import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen (FAQ) - Bewindvoering, Mentorschap & Curatele",
  description:
    "Antwoorden op veelgestelde vragen over bewindvoering, mentorschap en curatele. Lees hier alles over aanmelding, kosten, procedure en meer.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
