"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-surface">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-surface border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 flex-1 h-5 rounded bg-background border border-border/60" />
      </div>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-5">
              Networking événementiel
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Vos rencontres pro,
              <br />
              <span className="text-primary">orchestrées au chrono.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
              OGong organise vos speed meetings, team buildings et job datings.
              Tours minutés, tables assignées, zéro logistique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium text-sm transition-colors"
            >
              Demander une démo
            </a>
            <a
              href="#comment"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-border hover:border-foreground/20 text-foreground font-medium text-sm transition-colors"
            >
              Voir comment ça marche
            </a>
          </motion.div>
        </div>

        {/* Dashboard screenshot in browser frame */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -5 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden lg:block absolute right-0 top-4 w-[440px]"
          style={{ perspective: "1000px" }}
        >
          <div className="transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <BrowserFrame>
              <Image
                src="/screenshots/dashboard-evenements.png"
                alt="Tableau de bord OGong avec la liste des événements"
                width={880}
                height={600}
                className="w-full h-auto"
                priority
              />
            </BrowserFrame>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
