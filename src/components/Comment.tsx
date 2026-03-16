"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── Screenshot with browser frame ── */
function StepScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-4 rounded-lg overflow-hidden border border-border shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-surface border-b border-border">
        <span className="w-2 h-2 rounded-full bg-red-400/60" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <span className="w-2 h-2 rounded-full bg-green-400/60" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto"
      />
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Créez votre événement",
    desc: "Choisissez le format, configurez les durées de tour et de prise de parole, puis publiez.",
    screenshot: { src: "/screenshots/creer-evenement.png", alt: "Formulaire de création d'événement OGong" },
  },
  {
    num: "02",
    title: "Inscrivez les participants",
    desc: "Import CSV, inscription manuelle ou lien d'inscription. Liste d'attente automatique si complet.",
    screenshot: { src: "/screenshots/detail-evenement.png", alt: "Liste des participants inscrits à un événement" },
  },
  {
    num: "03",
    title: "Lancez les tours",
    desc: "OGong assigne les tables, lance le chrono et enchaîne les rotations. Vous n'avez plus qu'à animer.",
    screenshot: { src: "/screenshots/dashboard-evenements.png", alt: "Tableau de bord avec les événements et leur statut" },
  },
  {
    num: "04",
    title: "Consultez les stats",
    desc: "Nombre de rencontres, taux de participation, durée moyenne… tout est mesuré.",
    screenshot: { src: "/screenshots/statistiques.png", alt: "Page des statistiques avec KPIs et historique" },
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
              {/* Real screenshot */}
              <StepScreenshot src={step.screenshot.src} alt={step.screenshot.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
