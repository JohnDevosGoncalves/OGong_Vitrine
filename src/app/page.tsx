import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "OGong — Logiciel de speed meeting, team building & job dating",
  description:
    "Organisez vos rencontres professionnelles en quelques clics avec OGong. Speed meetings, team buildings, job datings : chronomètre temps réel, assignation automatique des tables, import CSV, statistiques. Gratuit jusqu'à 20 participants.",
  alternates: {
    canonical: "https://o-gong-vitrine.vercel.app",
  },
};

export default function Page() {
  return (
    <>
      {/* Contenu sémantique pour les crawlers SEO et IA (sr-only = invisible à l'écran) */}
      <div className="sr-only" role="region" aria-label="Présentation OGong">
        <h1>OGong — Logiciel de speed meeting, team building et job dating</h1>
        <p>
          OGong est une plateforme SaaS française pour organiser des rencontres
          professionnelles. Elle prend en charge trois formats : le Speed Meeting
          (rencontres 1 contre 1 minutées avec rotation automatique), le Team
          Building (groupes de 2 à 12 personnes répartis sur des tables) et le
          Job Dating (avec stands d&apos;exposants et créneaux réservables).
        </p>
        <h2>Fonctionnement</h2>
        <p>
          En 4 étapes : créer un événement, inscrire les participants (import
          CSV, inscription en ligne ou lien partageable), lancer les tours
          (chronomètre temps réel, assignation automatique des tables, rotation
          des participants) et consulter les statistiques post-événement.
        </p>
        <h2>Fonctionnalités principales</h2>
        <ul>
          <li>Chronomètre temps réel avec temps de parole et pauses configurables</li>
          <li>Assignation automatique des participants aux tables numérotées</li>
          <li>Import CSV et gestion des inscriptions avec liste d&apos;attente</li>
          <li>Statistiques détaillées : nombre de rencontres, taux de présence, durée moyenne</li>
          <li>Gestion multi-rôles : Super Admin, Admin et Animateur</li>
          <li>Envoi de SMS aux participants avant et pendant l&apos;événement</li>
          <li>Export des données en CSV</li>
        </ul>
        <h2>Tarifs</h2>
        <ul>
          <li>Découverte : gratuit, jusqu&apos;à 20 participants</li>
          <li>Pro : 29 € par événement, jusqu&apos;à 200 participants, sans abonnement</li>
          <li>Entreprise : sur devis, abonnement annuel pour CCI, grandes écoles et réseaux</li>
        </ul>
        <h2>Cas d&apos;usage</h2>
        <p>
          OGong est utilisé pour des Demo Days (Wild Code School), des forums
          de recrutement (CCI), des ateliers de networking (incubateurs), des
          journées portes ouvertes et des événements de speed recruiting.
        </p>
      </div>

      <HomePage />
    </>
  );
}
