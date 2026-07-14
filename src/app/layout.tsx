import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stichtingbalanz.nl"),
  title: {
    default: "Stichting Balanz | Bewindvoering, Mentorschap & Curatele in Oss",
    template: "%s | Stichting Balanz",
  },
  description:
    "Professionele bewindvoering, mentorschap en curatele in Oss en omgeving. Betrokken, betrouwbaar en deskundig. Neem vrijblijvend contact op: 0412 - 840 009.",
  keywords: [
    "bewindvoering Oss",
    "mentorschap Oss",
    "curatele Oss",
    "schuldhulpverlening",
    "budgetbeheer",
    "beschermingsbewind",
    "financieel beheer",
    "bewindvoerder Brabant",
    "schulden hulp",
    "onderbewindstelling",
    "professioneel bewindvoerder",
    "schuldsanering",
    "inkomensbeheer",
  ],
  authors: [{ name: "Stichting Balanz" }],
  creator: "Stichting Balanz",
  publisher: "Stichting Balanz",
  alternates: {
    canonical: "https://stichtingbalanz.nl",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://stichtingbalanz.nl",
    siteName: "Stichting Balanz",
    title: "Stichting Balanz | Bewindvoering, Mentorschap & Curatele in Oss",
    description:
      "Professionele bewindvoering, mentorschap en curatele in Oss en omgeving. Betrokken, betrouwbaar en deskundig sinds 2012.",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 400,
        alt: "Stichting Balanz - Bewindvoering, Mentorschap & Curatele",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stichting Balanz | Bewindvoering, Mentorschap & Curatele",
    description:
      "Professionele bewindvoering, mentorschap en curatele in Oss. Betrokken, betrouwbaar en deskundig.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "VOTRE_CODE_VERIFICATION_GOOGLE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#c41e3a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
