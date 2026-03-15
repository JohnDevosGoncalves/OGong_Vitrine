"use client";

import { motion } from "framer-motion";

/* ── Mini UI mockups pour chaque étape ── */

function StepCreateMockup() {
  return (
    <div className="mt-4 rounded-lg border border-border bg-surface p-3 text-[11px]">
      <div className="space-y-2">
        <div>
          <span className="text-[9px] text-muted block mb-0.5">Nom de l&apos;événement</span>
          <div className="h-5 rounded bg-background border border-border/60 px-2 flex items-center text-[10px] text-foreground/70">
            Demo Day — Wild Code School
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div>
            <span className="text-[9px] text-muted block mb-0.5">Date</span>
            <div className="h-5 rounded bg-background border border-border/60 px-2 flex items-center text-[10px] text-foreground/70">20/03/2024</div>
          </div>
          <div>
            <span className="text-[9px] text-muted block mb-0.5">Format</span>
            <div className="h-5 rounded bg-primary/10 border border-primary/20 px-2 flex items-center text-[10px] text-primary font-medium">Speed Meeting</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div>
            <span className="text-[9px] text-muted block mb-0.5">Tour</span>
            <div className="h-5 rounded bg-background border border-border/60 px-2 flex items-center text-[10px] text-foreground/70">4 min</div>
          </div>
          <div>
            <span className="text-[9px] text-muted block mb-0.5">Pause</span>
            <div className="h-5 rounded bg-background border border-border/60 px-2 flex items-center text-[10px] text-foreground/70">30 sec</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepParticipantsMockup() {
  return (
    <div className="mt-4 rounded-lg border border-border bg-surface p-3 text-[11px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-medium text-foreground">Participants</span>
        <div className="flex gap-1">
          <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[8px] font-medium">CSV</span>
          <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-[8px] font-medium">+ Ajouter</span>
        </div>
      </div>
      <div className="space-y-1">
        {[
          { name: "Marie Dupont", email: "m.dupont@..." },
          { name: "Lucas Martin", email: "l.martin@..." },
          { name: "Sophie Leroy", email: "s.leroy@..." },
        ].map((p) => (
          <div key={p.name} className="flex items-center justify-between p-1.5 rounded bg-background border border-border/60">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[8px] font-bold">
                {p.name[0]}
              </div>
              <span className="text-[10px] text-foreground">{p.name}</span>
            </div>
            <span className="text-[9px] text-muted">{p.email}</span>
          </div>
        ))}
      </div>
      <div className="mt-1.5 text-center text-[9px] text-muted">42 inscrits</div>
    </div>
  );
}

function StepToursMockup() {
  return (
    <div className="mt-4 rounded-lg border border-border bg-surface p-3 text-[11px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-medium text-foreground">Tour 2/4</span>
        <span className="px-1.5 py-0.5 rounded bg-green-100 text-green-600 text-[9px] font-medium">En cours</span>
      </div>
      {/* Mini timer */}
      <div className="flex items-center justify-center mb-2">
        <div className="relative w-12 h-12">
          <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
            <circle cx="24" cy="24" r="20" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="20" fill="none" stroke="#5B4CFF" strokeWidth="2.5"
              strokeDasharray={`${2 * Math.PI * 20 * 0.45} ${2 * Math.PI * 20 * 0.55}`}
              strokeLinecap="round" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-foreground">1:48</span>
        </div>
      </div>
      {/* Tables */}
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3].map((t) => (
          <div key={t} className="p-1 rounded bg-background border border-border/60 text-center">
            <span className="text-[9px] text-muted">Table</span>
            <div className="text-[10px] font-bold text-primary">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepStatsMockup() {
  return (
    <div className="mt-4 rounded-lg border border-border bg-surface p-3 text-[11px]">
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        {[
          { label: "Rencontres", value: "84" },
          { label: "Présents", value: "38/42" },
          { label: "Durée moy.", value: "3m52" },
          { label: "Satisfaction", value: "94%" },
        ].map((stat) => (
          <div key={stat.label} className="p-1.5 rounded bg-background border border-border/60 text-center">
            <span className="text-[8px] text-muted block">{stat.label}</span>
            <span className="text-[11px] font-bold text-foreground">{stat.value}</span>
          </div>
        ))}
      </div>
      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-6 px-2">
        {[40, 70, 55, 90, 65, 80, 45].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-primary/20" style={{ height: `${h}%` }}>
            <div className="w-full rounded-t bg-primary" style={{ height: `${Math.min(h + 20, 100)}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Créez votre événement",
    desc: "Choisissez le format, configurez les durées de tour et de prise de parole, puis publiez.",
    mockup: StepCreateMockup,
  },
  {
    num: "02",
    title: "Inscrivez les participants",
    desc: "Import CSV, inscription manuelle ou lien d'inscription. Liste d'attente automatique si complet.",
    mockup: StepParticipantsMockup,
  },
  {
    num: "03",
    title: "Lancez les tours",
    desc: "OGong assigne les tables, lance le chrono et enchaîne les rotations. Vous n'avez plus qu'à animer.",
    mockup: StepToursMockup,
  },
  {
    num: "04",
    title: "Consultez les stats",
    desc: "Nombre de rencontres, taux de participation, durée moyenne… tout est mesuré.",
    mockup: StepStatsMockup,
  },
];

export default function Comment() {
  return (
    <section id="comment" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
            Comment ça marche
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            De la création au bilan,
            <br />
            en quatre étapes.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-3xl font-bold text-border">{step.num}</span>
              <h3 className="text-base font-semibold mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              {/* Mini UI mockup */}
              <step.mockup />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
