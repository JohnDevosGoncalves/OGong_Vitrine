"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Building2 } from "lucide-react";

const formats = [
  {
    icon: Users,
    name: "Speed Meeting",
    subtitle: "1 contre 1",
    desc: "Des rencontres en face-à-face, minutées et enchaînées. Idéal pour du networking classique ou des entretiens rapides.",
    details: ["Tours automatiques", "Rotation des participants", "Chrono configurable"],
  },
  {
    icon: Briefcase,
    name: "Team Building",
    subtitle: "XS à XL",
    desc: "Des groupes de tailles variées, assignés à des tables. Parfait pour des ateliers collaboratifs ou des brainstormings.",
    details: ["2 à 12 par table", "Temps de parole individuel", "Répartition automatique"],
  },
  {
    icon: Building2,
    name: "Job Dating",
    subtitle: "Avec exposants",
    desc: "Des sociétés exposantes accueillent les candidats sur leurs stands. Les créneaux sont réservés à l'avance.",
    details: ["Stands & créneaux", "Inscription candidat", "Gestion des exposants"],
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
              className="p-6 rounded-xl border border-border bg-background"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <format.icon size={20} />
              </div>
              <h3 className="text-base font-semibold mb-0.5">{format.name}</h3>
              <p className="text-xs text-accent font-medium mb-3">{format.subtitle}</p>
              <p className="text-sm text-muted leading-relaxed mb-4">{format.desc}</p>
              <ul className="space-y-1.5">
                {format.details.map((d) => (
                  <li key={d} className="text-xs text-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
