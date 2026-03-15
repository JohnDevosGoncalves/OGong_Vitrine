"use client";

import { motion } from "framer-motion";

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

        {/* UI Preview hint */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden lg:block absolute right-0 top-8 w-[380px]"
        >
          <div className="bg-surface rounded-2xl border border-border shadow-lg p-6">
            {/* Mini timer UI */}
            <div className="text-center mb-4">
              <p className="text-xs text-muted uppercase tracking-wider mb-2">
                Tour 1/4
              </p>
              <p className="text-2xl font-bold text-foreground">
                C&apos;est à vous !
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-5">
              {[1, 4, 7].map((n) => (
                <span
                  key={n}
                  className="w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center"
                >
                  {n}
                </span>
              ))}
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs text-muted mb-1.5">
                <span>Prise de parole 1/3</span>
                <span>0:45 / 4:00</span>
              </div>
              <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full w-[19%] bg-accent rounded-full" />
              </div>
            </div>

            {/* Mini table */}
            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-xs font-medium text-foreground mb-2">
                Table 1 &middot; 3 participants
              </p>
              <div className="space-y-1.5">
                {["Pan H.", "Emlen B.", "Jozef K."].map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 text-xs text-muted"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">
                      {name[0]}
                    </span>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
