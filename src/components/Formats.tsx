"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Building2 } from "lucide-react";

/* ── Mini UI mockups reproduisant l'app OGong ── */

function SpeedMeetingMockup() {
  return (
    <div className="mt-5 rounded-lg border border-border bg-background p-3 text-[11px]">
      {/* Timer header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-muted text-[10px]">Tour 1/4</span>
        <span className="px-1.5 py-0.5 rounded bg-green-100 text-green-600 text-[9px] font-medium">En cours</span>
      </div>
      {/* Circular timer */}
      <div className="flex items-center justify-center mb-2">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#e5e7eb" strokeWidth="3" />
            <circle cx="32" cy="32" r="28" fill="none" stroke="#5B4CFF" strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 28 * 0.7} ${2 * Math.PI * 28 * 0.3}`}
              strokeLinecap="round" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">2:48</span>
        </div>
      </div>
      {/* Participants row */}
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[9px] font-bold">A</div>
          <span className="text-muted">↔</span>
          <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[9px] font-bold">B</div>
        </div>
      </div>
      <div className="mt-2 h-1 rounded-full bg-border overflow-hidden">
        <div className="h-full rounded-full bg-primary" style={{ width: "70%" }} />
      </div>
    </div>
  );
}

function TeamMockup() {
  return (
    <div className="mt-5 rounded-lg border border-border bg-background p-3 text-[11px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-muted text-[10px]">Tables 1 à 3</span>
        <span className="text-[10px] text-foreground font-medium">6 participants</span>
      </div>
      {/* Table grid */}
      <div className="space-y-1.5">
        {[
          { num: 1, people: ["Ma", "Lu", "So"] },
          { num: 2, people: ["Ti", "Al", "No"] },
        ].map((table) => (
          <div key={table.num} className="flex items-center gap-2 p-1.5 rounded bg-surface border border-border/60">
            <span className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center text-[9px] font-bold shrink-0">
              {table.num}
            </span>
            <div className="flex gap-1">
              {table.people.map((p) => (
                <span key={p} className="w-5 h-5 rounded-full bg-accent/10 text-accent text-[8px] font-medium flex items-center justify-center">
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-[9px] text-muted">Répartition automatique</div>
    </div>
  );
}

function JobDatingMockup() {
  return (
    <div className="mt-5 rounded-lg border border-border bg-background p-3 text-[11px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-muted text-[10px]">Exposants</span>
        <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-[9px] font-medium">3 stands</span>
      </div>
      {/* Stands list */}
      <div className="space-y-1.5">
        {[
          { name: "TechCorp", slots: "3/5" },
          { name: "InnoLab", slots: "5/5" },
          { name: "DataCo", slots: "1/5" },
        ].map((stand) => (
          <div key={stand.name} className="flex items-center justify-between p-1.5 rounded bg-surface border border-border/60">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-green-100 text-green-600 flex items-center justify-center text-[9px] font-bold">
                {stand.name[0]}
              </div>
              <span className="text-foreground text-[10px] font-medium">{stand.name}</span>
            </div>
            <span className={`text-[9px] font-medium ${stand.slots === "5/5" ? "text-red-400" : "text-green-600"}`}>
              {stand.slots}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-[9px] text-muted">Créneaux réservés</div>
    </div>
  );
}

const formats = [
  {
    icon: Users,
    name: "Speed Meeting",
    subtitle: "1 contre 1",
    desc: "Des rencontres en face-à-face, minutées et enchaînées. Idéal pour du networking classique ou des entretiens rapides.",
    details: ["Tours automatiques", "Rotation des participants", "Chrono configurable"],
    mockup: SpeedMeetingMockup,
  },
  {
    icon: Briefcase,
    name: "Team Building",
    subtitle: "XS à XL",
    desc: "Des groupes de tailles variées, assignés à des tables. Parfait pour des ateliers collaboratifs ou des brainstormings.",
    details: ["2 à 12 par table", "Temps de parole individuel", "Répartition automatique"],
    mockup: TeamMockup,
  },
  {
    icon: Building2,
    name: "Job Dating",
    subtitle: "Avec exposants",
    desc: "Des sociétés exposantes accueillent les candidats sur leurs stands. Les créneaux sont réservés à l'avance.",
    details: ["Stands & créneaux", "Inscription candidat", "Gestion des exposants"],
    mockup: JobDatingMockup,
  },
];

export default function Formats() {
  return (
    <section id="formats" className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
            Formats
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Trois formats, une seule plateforme.
          </h2>
          <p className="text-muted mt-4 max-w-lg">
            Chaque type de rencontre a ses contraintes. OGong s&apos;adapte à chacune.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {formats.map((format, i) => (
            <motion.div
              key={format.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-background flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <format.icon size={20} />
              </div>
              <h3 className="text-base font-semibold mb-0.5">{format.name}</h3>
              <p className="text-xs text-accent font-medium mb-3">{format.subtitle}</p>
              <p className="text-sm text-muted leading-relaxed mb-4">{format.desc}</p>
              <ul className="space-y-1.5 mb-auto">
                {format.details.map((d) => (
                  <li key={d} className="text-xs text-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              {/* Mini mockup UI */}
              <format.mockup />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
