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

export const metadata: Metadata = {
  title: "OGong — Générateur de rencontres professionnelles",
  description:
    "Organisez vos speed meetings, team buildings et job datings en quelques clics. OGong gère les tours, les tables et le temps de parole automatiquement.",
  openGraph: {
    title: "OGong — Générateur de rencontres professionnelles",
    description:
      "Organisez vos speed meetings, team buildings et job datings en quelques clics.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
