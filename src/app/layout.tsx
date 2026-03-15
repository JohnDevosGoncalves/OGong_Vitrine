import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://o-gong-vitrine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OGong — Logiciel de speed meeting, team building & job dating",
    template: "%s | OGong",
  },
  description:
    "OGong est une plateforme SaaS française pour organiser des rencontres professionnelles : speed meetings, team buildings et job datings. Chronomètre temps réel, assignation automatique des tables, gestion des participants et statistiques. Utilisé par des écoles, CCI et entreprises.",
  keywords: [
    "speed meeting",
    "job dating",
    "team building",
    "networking événementiel",
    "logiciel événementiel",
    "générateur de rencontres",
    "organisation speed meeting",
    "outil job dating",
    "plateforme networking",
    "SaaS événementiel",
    "gestion participants",
    "chronomètre événement",
    "assignation tables automatique",
    "OGong",
    "rencontres professionnelles",
    "événementiel professionnel",
    "speed networking",
    "rotation participants",
  ],
  authors: [{ name: "OGong" }],
  creator: "OGong",
  publisher: "OGong",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "OGong — Logiciel de speed meeting, team building & job dating",
    description:
      "Organisez vos rencontres professionnelles en quelques clics. Tours minutés, tables assignées automatiquement, statistiques détaillées. Sans abonnement.",
    url: siteUrl,
    siteName: "OGong",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "OGong — Logiciel de speed meeting, team building & job dating",
    description:
      "Organisez vos speed meetings, team buildings et job datings. Chronomètre temps réel, assignation automatique des tables, 0 logistique.",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD : SoftwareApplication (utilisé par Google & IA pour comprendre le produit)
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OGong",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Plateforme SaaS française pour organiser des rencontres professionnelles : speed meetings, team buildings et job datings. Chronomètre temps réel, assignation automatique des tables, gestion des participants par import CSV, statistiques détaillées.",
    url: siteUrl,
    inLanguage: "fr",
    offers: [
      {
        "@type": "Offer",
        name: "Découverte",
        price: "0",
        priceCurrency: "EUR",
        description:
          "Gratuit — Jusqu'à 20 participants, tous les formats, chrono temps réel, statistiques de base.",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "29",
        priceCurrency: "EUR",
        description:
          "29 € par événement — Jusqu'à 200 participants, tous les formats, export CSV, SMS inclus. Sans abonnement, facturé le jour J.",
      },
      {
        "@type": "Offer",
        name: "Entreprise",
        price: "0",
        priceCurrency: "EUR",
        description:
          "Sur devis — Abonnement annuel pour grands comptes (CCI, grandes écoles). Participants illimités, gestionnaire de compte dédié.",
      },
    ],
    featureList: [
      "Chronomètre temps réel avec temps de parole configurable",
      "Assignation automatique des participants aux tables",
      "3 formats : Speed Meeting (1v1), Team Building (XS à XL), Job Dating avec exposants",
      "Import CSV des participants",
      "Envoi de SMS aux participants",
      "Statistiques détaillées post-événement",
      "Gestion multi-rôles : Super Admin, Admin, Animateur",
      "Système de tours avec rotation automatique",
      "Liste d'attente automatique",
      "Export des données en CSV",
    ],
  };

  // JSON-LD : Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OGong",
    url: siteUrl,
    description:
      "OGong développe un logiciel SaaS de gestion de rencontres professionnelles (speed meeting, team building, job dating) destiné aux entreprises, écoles et CCI.",
  };

  // JSON-LD : FAQPage (très utilisé par les IA pour extraire des réponses directes)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que OGong ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OGong est une plateforme SaaS française qui permet d'organiser des rencontres professionnelles (speed meetings, team buildings, job datings). Elle gère automatiquement les tours, le chronomètre, l'assignation des tables et les statistiques post-événement.",
        },
      },
      {
        "@type": "Question",
        name: "Quels formats d'événements OGong prend-il en charge ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OGong propose 3 formats : le Speed Meeting (rencontres 1 contre 1 minutées), le Team Building (groupes de 2 à 12 personnes par table, tailles XS à XL) et le Job Dating (avec stands d'exposants et créneaux réservables).",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte OGong ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OGong propose 3 formules : Découverte (gratuit, jusqu'à 20 participants), Pro (29 € par événement, jusqu'à 200 participants, sans abonnement) et Entreprise (sur devis, abonnement annuel pour les grands comptes comme les CCI et grandes écoles).",
        },
      },
      {
        "@type": "Question",
        name: "Comment fonctionne OGong ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En 4 étapes : 1) Créez votre événement en choisissant le format et les durées. 2) Inscrivez les participants (import CSV, inscription manuelle ou lien). 3) Lancez les tours — OGong assigne les tables et gère le chrono automatiquement. 4) Consultez les statistiques détaillées après l'événement.",
        },
      },
      {
        "@type": "Question",
        name: "OGong est-il adapté aux grandes structures ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. La formule Entreprise est conçue pour les CCI, grandes écoles et réseaux qui organisent des dizaines d'événements par an. Elle inclut un nombre illimité de participants, un gestionnaire de compte dédié et un abonnement annuel lissé.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on utiliser OGong sans abonnement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. La formule Pro fonctionne sans abonnement : vous payez 29 € par événement, facturé uniquement le jour J. La formule Découverte est entièrement gratuite pour les événements de moins de 20 participants.",
        },
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
