"use client";

import { motion } from "framer-motion";

const temoignages = [
  {
    quote:
      "On a organisé un Demo Day pour 60 étudiants avec OGong. En 10 minutes, les tables étaient prêtes et les tours lancés. Avant, ça nous prenait une demi-journée.",
    name: "Marie L.",
    role: "Coordinatrice pédagogique",
    org: "Wild Code School",
  },
  {
    quote:
      "Le chronomètre projeté sur écran, c'est un game changer. Les participants respectent les temps, et l'enchaînement est fluide.",
    name: "Thomas R.",
    role: "Responsable événementiel",
    org: "CCI Bordeaux",
  },
  {
    quote:
      "J'ai pu importer ma liste de 120 candidats en CSV et tout était assigné en quelques secondes. Plus besoin de jongler avec des tableaux Excel.",
    name: "Sophie M.",
    role: "Chargée de recrutement",
    org: "Startup RH",
  },
];

export default function Temoignages() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Ils utilisent OGong.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {temoignages.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-surface"
            >
              <p className="text-sm text-foreground leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">
                  {t.role} · {t.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
