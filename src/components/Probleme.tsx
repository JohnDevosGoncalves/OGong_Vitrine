"use client";

import { motion } from "framer-motion";

const pains = [
  {
    title: "Des fichiers Excel partout",
    desc: "Listes de participants, plans de tables, rotations… tout est géré à la main, avec des erreurs à chaque événement.",
  },
  {
    title: "Un chrono sur le téléphone",
    desc: "L'animateur jongle entre son timer, ses feuilles et ses annonces micro. Résultat : des tours qui débordent.",
  },
  {
    title: "Des participants perdus",
    desc: "Qui va où ? À quelle table ? Pour quel tour ? Personne ne sait vraiment, et ça se voit.",
  },
];

export default function Probleme() {
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
            Le constat
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Organiser des rencontres pro,
            <br />
            c&apos;est encore artisanal.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-surface"
            >
              <div className="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center text-sm font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold mb-2">{pain.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
