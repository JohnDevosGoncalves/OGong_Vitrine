"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/dashboard-evenements.png",
    alt: "Tableau de bord avec la liste des événements planifiés",
    label: "Tableau de bord",
  },
  {
    src: "/screenshots/detail-evenement.png",
    alt: "Détail d'un événement avec 30 participants et statistiques de l'algorithme",
    label: "Détail événement",
  },
  {
    src: "/screenshots/statistiques.png",
    alt: "Page des statistiques avec KPIs et historique des événements",
    label: "Statistiques",
  },
  {
    src: "/screenshots/creer-evenement.png",
    alt: "Formulaire de création d'événement avec sélection du format",
    label: "Création",
  },
  {
    src: "/screenshots/admin-dashboard.png",
    alt: "Panneau d'administration avec KPIs et graphiques",
    label: "Administration",
  },
  {
    src: "/screenshots/credits.png",
    alt: "Système de crédits avec tarification Stripe",
    label: "Crédits",
  },
];

export default function Apercu() {
  return (
    <section id="apercu" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
            Aperçu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Une interface pensée pour vous
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Chaque écran a été conçu pour simplifier l&apos;organisation de vos événements. Découvrez les principales vues de l&apos;application.
          </p>
        </motion.div>

        {/* Desktop: overlapping grid / Mobile: stacked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-surface transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* Browser chrome bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-surface border-b border-border">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-2 flex-1 h-5 rounded bg-background border border-border/60" />
                </div>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-muted text-center mt-3 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
