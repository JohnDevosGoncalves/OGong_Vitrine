"use client";

import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Prêt à simplifier vos événements ?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-lg mx-auto">
            Demandez une démonstration personnalisée ou créez votre premier
            événement gratuitement.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1.5"
              >
                Nom
              </label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="vous@entreprise.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="org"
              className="block text-sm font-medium mb-1.5"
            >
              Organisation
            </label>
            <input
              id="org"
              type="text"
              placeholder="Nom de votre structure"
              className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/40 transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Décrivez votre besoin ou demandez une démo…"
              className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/40 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium text-sm transition-colors"
          >
            Envoyer ma demande
          </button>
        </motion.form>
      </div>
    </section>
  );
}
