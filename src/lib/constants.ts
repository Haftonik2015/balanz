export const siteConfig = {
  name: "Stichting Balanz",
  description:
    "Professionele bewindvoering, mentorschap en curatele in Oss en omgeving. Wij helpen u bij het beheer van uw financiën en persoonlijke zaken.",
  url: "https://stichtingbalanz.nl",
  phone: "0412 - 840 009",
  email: "info@stichtingbalanz.nl",
  address: {
    street: "Postbus 85",
    postalCode: "5340 AB",
    city: "Oss",
  },
  kvk: "554 768 48",
  openingHours: {
    days: "Maandag t/m donderdag",
    hours: "10:00 - 12:00",
  },
  onviewUrl: "https://mijn.onview.nl/",
  socials: {
    facebook: "#",
    linkedin: "#",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Diensten",
    href: "/diensten",
    children: [
      { name: "Bewindvoering", href: "/diensten/bewindvoering" },
      { name: "Mentorschap", href: "/diensten/mentorschap" },
      { name: "Curatele", href: "/diensten/curatele" },
    ],
  },
  { name: "Tarieven", href: "/tarieven" },
  { name: "Werkwijze", href: "/werkwijze" },
  { name: "Over ons", href: "/over-ons" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];
