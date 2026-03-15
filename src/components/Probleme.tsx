"use client";

import { motion } from "framer-motion";

/* ── Illustrations visuelles des problèmes ── */

function ExcelMockup() {
  return (
    <div className="mt-4 rounded-lg border border-red-200 bg-red-50/50 p-2.5 text-[10px]">
      {/* Fake spreadsheet */}
      <div className="rounded bg-white border border-red-100 overflow-hidden">
        <div className="grid grid-cols-4 text-[8px]">
          {/* Header */}
          <div className="bg-red-100/60 px-1.5 py-1 font-medium text-red-700 border-b border-r border-red-200/60">Nom</div>
          <div className="bg-red-100/60 px-1.5 py-1 font-medium text-red-700 border-b border-r border-red-200/60">Table</div>
          <div className="bg-red-100/60 px-1.5 py-1 font-medium text-red-700 border-b border-r border-red-200/60">Tour 1</div>
          <div className="bg-red-100/60 px-1.5 py-1 font-medium text-red-700 border-b border-red-200/60">Tour 2</div>
          {/* Rows */}
          <div className="px-1.5 py-0.5 border-b border-r border-red-100/50 text-foreground/60">Dupont</div>
          <div className="px-1.5 py-0.5 border-b border-r border-red-100/50 text-red-400 line-through">3</div>
          <div className="px-1.5 py-0.5 border-b border-r border-red-100/50 text-foreground/60">✓</div>
          <div className="px-1.5 py-0.5 border-b border-red-100/50 text-red-400">??</div>
          <div className="px-1.5 py-0.5 border-r border-red-100/50 text-foreground/60">Martin</div>
          <div className="px-1.5 py-0.5 border-r border-red-100/50 text-red-400">5 ?</div>
          <div className="px-1.5 py-0.5 border-r border-red-100/50 text-foreground/60">—</div>
          <div className="px-1.5 py-0.5 border-red-100/50 text-red-400">absent?</div>
        </div>
      </div>
      <div className="mt-1.5 text-center text-[8px] text-red-400/80 italic">planification_v3_FINAL(2).xlsx</div>
    </div>
  );
}

function ChronoMockup() {
  return (
    <div className="mt-4 rounded-lg border border-red-200 bg-red-50/50 p-2.5 text-[10px]">
      <div className="flex items-center gap-3">
        {/* Phone chrono */}
        <div className="w-12 h-18 rounded-md border-2 border-red-200 bg-white p-1 flex flex-col items-center justify-center shrink-0">
          <div className="text-[11px] font-mono font-bold text-red-500">5:12</div>
          <div className="text-[7px] text-red-400 mt-0.5">⚠ +1:12</div>
        </div>
        {/* Chaos indicators */}
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-300 animate-pulse" />
            <span className="text-[9px] text-red-500">Tour qui déborde</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-300" />
            <span className="text-[9px] text-red-400/80">Feuilles volantes</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-200" />
            <span className="text-[9px] text-red-400/80">Annonces au micro</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParticipantsMockup() {
  return (
    <div className="mt-4 rounded-lg border border-red-200 bg-red-50/50 p-2.5 text-[10px]">
      {/* Confused participants */}
      <div className="space-y-1.5">
        {[
          { initials: "MD", question: "Je suis à quelle table ?" },
          { initials: "LM", question: "C'est quel tour là ?" },
          { initials: "SL", question: "J'ai déjà vu cette personne…" },
        ].map((p) => (
          <div key={p.initials} className="flex items-center gap-2 p-1.5 rounded bg-white border border-red-100">
            <div className="w-5 h-5 rounded-full bg-red-100 text-red-400 flex items-center justify-center text-[8px] font-bold shrink-0">
              {p.initials}
            </div>
            <span className="text-[9px] text-red-500/80 italic">&quot;{p.question}&quot;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const pains = [
  {
    title: "Des fichiers Excel partout",
    desc: "Listes de participants, plans de tables, rotations… tout est géré à la main, avec des erreurs à chaque événement.",
    mockup: ExcelMockup,
  },
  {
    title: "Un chrono sur le téléphone",
    desc: "L'animateur jongle entre son timer, ses feuilles et ses annonces micro. Résultat : des tours qui débordent.",
    mockup: ChronoMockup,
  },
  {
    title: "Des participants perdus",
    desc: "Qui va où ? À quelle table ? Pour quel tour ? Personne ne sait vraiment, et ça se voit.",
    mockup: ParticipantsMockup,
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
              className="p-6 rounded-xl border border-border bg-surface flex flex-col"
            >
              <div className="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center text-sm font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold mb-2">{pain.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{pain.desc}</p>
              {/* Visual illustration */}
              <pain.mockup />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
