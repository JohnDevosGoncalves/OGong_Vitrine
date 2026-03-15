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

/* ── Mini UI snippets illustrant chaque fonctionnalité ── */

function TimerSnippet() {
  return (
    <div className="mt-3 rounded-md border border-border bg-surface p-2 flex items-center gap-2.5">
      <div className="relative w-8 h-8 shrink-0">
        <svg viewBox="0 0 32 32" className="w-full h-full -rotate-90">
          <circle cx="16" cy="16" r="13" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          <circle cx="16" cy="16" r="13" fill="none" stroke="#5B4CFF" strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 13 * 0.6} ${2 * Math.PI * 13 * 0.4}`}
            strokeLinecap="round" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-foreground">2:24</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[9px] text-muted mb-0.5">Parole 2/3</div>
        <div className="h-1 rounded-full bg-border overflow-hidden">
          <div className="h-full rounded-full bg-accent" style={{ width: "60%" }} />
        </div>
      </div>
    </div>
  );
}

function TableSnippet() {
  return (
    <div className="mt-3 rounded-md border border-border bg-surface p-2">
      <div className="grid grid-cols-3 gap-1">
        {[
          { t: 1, n: 6 },
          { t: 2, n: 6 },
          { t: 3, n: 4 },
        ].map((item) => (
          <div key={item.t} className="p-1 rounded bg-background border border-border/50 text-center">
            <div className="text-[8px] text-muted">Table {item.t}</div>
            <div className="flex justify-center gap-0.5 mt-0.5">
              {Array.from({ length: Math.min(item.n, 4) }).map((_, j) => (
                <div key={j} className="w-2.5 h-2.5 rounded-full bg-primary/20" />
              ))}
              {item.n > 4 && <span className="text-[7px] text-muted">+{item.n - 4}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InscriptionSnippet() {
  return (
    <div className="mt-3 rounded-md border border-border bg-surface p-2">
      <div className="space-y-1">
        {["Marie D.", "Lucas M.", "Sophie L."].map((name) => (
          <div key={name} className="flex items-center justify-between px-1.5 py-0.5 rounded bg-background border border-border/50">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-primary/15 text-primary text-[6px] flex items-center justify-center font-bold">{name[0]}</div>
              <span className="text-[9px] text-foreground">{name}</span>
            </div>
            <span className="px-1 py-0.5 rounded bg-green-100 text-green-600 text-[7px]">Inscrit</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsSnippet() {
  return (
    <div className="mt-3 rounded-md border border-border bg-surface p-2">
      <div className="flex items-end gap-0.5 h-6 mb-1">
        {[30, 55, 45, 80, 60, 75, 50].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-primary/30" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex justify-between text-[8px] text-muted">
        <span>84 rencontres</span>
        <span className="text-green-600">+12%</span>
      </div>
    </div>
  );
}

function RolesSnippet() {
  return (
    <div className="mt-3 rounded-md border border-border bg-surface p-2">
      <div className="space-y-1">
        {[
          { role: "Super Admin", color: "bg-primary/10 text-primary" },
          { role: "Admin", color: "bg-accent/10 text-accent" },
          { role: "Animateur", color: "bg-green-100 text-green-600" },
        ].map((r) => (
          <div key={r.role} className="flex items-center gap-1.5">
            <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${r.color}`}>{r.role}</span>
            <div className="flex-1 h-px bg-border/60" />
            <div className="flex -space-x-1">
              {[0, 1].map((j) => (
                <div key={j} className="w-3 h-3 rounded-full bg-border border border-surface" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmsSnippet() {
  return (
    <div className="mt-3 rounded-md border border-border bg-surface p-2">
      <div className="space-y-1">
        <div className="flex items-start gap-1.5">
          <div className="w-3 h-3 rounded bg-accent/15 shrink-0 mt-0.5" />
          <div className="rounded-md bg-background border border-border/50 px-2 py-1 text-[8px] text-foreground leading-snug">
            Rappel : Demo Day demain à 14h. Table 3.
          </div>
        </div>
        <div className="flex items-center justify-between text-[8px] text-muted px-1">
          <span>42 envoyés</span>
          <span className="text-green-600">100% délivrés</span>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Timer,
    title: "Chrono temps réel",
    desc: "Chaque tour est minuté avec un chronomètre visible par tous. Temps de parole et pauses configurables.",
    snippet: TimerSnippet,
  },
  {
    icon: TableProperties,
    title: "Assignation automatique",
    desc: "Les participants sont répartis sur les tables automatiquement, tour après tour. Zéro logistique.",
    snippet: TableSnippet,
  },
  {
    icon: UserPlus,
    title: "Gestion des inscriptions",
    desc: "Import CSV, inscription en ligne, liste d'attente. Gérez vos participants sans effort.",
    snippet: InscriptionSnippet,
  },
  {
    icon: BarChart3,
    title: "Statistiques détaillées",
    desc: "Nombre de rencontres, taux de présence, durée moyenne par tour. Tout est tracé.",
    snippet: StatsSnippet,
  },
  {
    icon: Shield,
    title: "Multi-rôles",
    desc: "Super Admin, Admin et Animateur : chaque rôle a ses permissions et sa vue dédiée.",
    snippet: RolesSnippet,
  },
  {
    icon: Smartphone,
    title: "SMS & notifications",
    desc: "Envoyez les informations pratiques aux participants par SMS avant et pendant l'événement.",
    snippet: SmsSnippet,
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
              className="p-5 rounded-xl border border-border bg-background flex flex-col"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <feat.icon size={18} />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{feat.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>
              {/* Mini UI snippet */}
              <feat.snippet />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
