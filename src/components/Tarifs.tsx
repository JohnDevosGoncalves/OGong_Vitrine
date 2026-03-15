"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Découverte",
    price: "Gratuit",
    period: "",
    desc: "Parfait pour tester l'outil lors d'une petite réunion.",
    features: [
      "Jusqu'à 20 participants",
      "Tous les formats disponibles",
      "Chrono temps réel",
      "Assignation automatique des tables",
      "Statistiques de base",
    ],
    cta: "Commencer gratuitement",
    highlight: false,
  },
  {
    name: "Pro",
    price: "29 €",
    period: "/ événement",
    desc: "Sans abonnement. Facturé uniquement le jour J.",
    features: [
      "Jusqu'à 200 participants",
      "Tous les formats",
      "Export CSV des données",
      "SMS aux participants inclus",
      "Statistiques complètes",
      "Support prioritaire",
    ],
    cta: "Créer un événement",
    highlight: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "/ an",
    desc: "Pour les structures qui organisent des dizaines d'événements par an.",
    features: [
      "Participants illimités",
      "Abonnement annuel lissé",
      "Gestionnaire de compte dédié",
      "Multi-administrateurs",
      "Accompagnement & formation",
      "Idéal CCI, grandes écoles, réseaux",
    ],
    cta: "Demander un devis",
    highlight: false,
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple et transparent.
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto">
            Pas d&apos;abonnement obligatoire. Payez à l&apos;événement, ou optez pour un forfait annuel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 rounded-xl border ${
                plan.highlight
                  ? "border-primary bg-background shadow-md"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-primary px-2.5 py-1 rounded-full mb-4">
                  Recommandé
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <div className="mt-2 mb-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-muted">{plan.period}</span>
                )}
              </div>
              <p className="text-sm text-muted mb-6">{plan.desc}</p>
              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={15}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center text-sm font-medium py-2.5 rounded-lg transition-colors ${
                  plan.highlight
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "border border-border hover:border-foreground/20 text-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
