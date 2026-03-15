"use client";

import { motion } from "framer-motion";
import {
  Timer,
  TableProperties,
  UserPlus,
  BarChart3,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Chrono temps réel",
    desc: "Chaque tour est minuté avec un chronomètre visible par tous. Temps de parole et pauses configurables.",
  },
  {
    icon: TableProperties,
    title: "Assignation automatique",
    desc: "Les participants sont répartis sur les tables automatiquement, tour après tour. Zéro logistique.",
  },
  {
    icon: UserPlus,
    title: "Gestion des inscriptions",
    desc: "Import CSV, inscription en ligne, liste d'attente. Gérez vos participants sans effort.",
  },
  {
    icon: BarChart3,
    title: "Statistiques détaillées",
    desc: "Nombre de rencontres, taux de présence, durée moyenne par tour. Tout est tracé.",
  },
  {
    icon: Shield,
    title: "Multi-rôles",
    desc: "Super Admin, Admin et Animateur : chaque rôle a ses permissions et sa vue dédiée.",
  },
  {
    icon: Smartphone,
    title: "SMS & notifications",
    desc: "Envoyez les informations pratiques aux participants par SMS avant et pendant l'événement.",
  },
];

export default function Fonctionnalites() {
  return (
    <section id="fonctionnalites" className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
            Fonctionnalités
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Tout ce qu&apos;il faut pour animer
            <br />
            vos rencontres.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 rounded-xl border border-border bg-background"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <feat.icon size={18} />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{feat.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
