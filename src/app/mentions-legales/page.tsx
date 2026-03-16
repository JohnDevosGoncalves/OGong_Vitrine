import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site OGong.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-4 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="6" cy="6" r="3.5" fill="#4a3aff" />
              <circle cx="18" cy="6" r="3.5" fill="#ff8c42" />
              <circle cx="6" cy="18" r="3.5" fill="#ff8c42" />
              <circle cx="18" cy="18" r="3.5" fill="#4a3aff" />
            </svg>
            <span className="font-semibold">OGong</span>
          </Link>
        </div>
      </header>

      {/* Contenu */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Mentions légales</h1>
        <p className="text-sm text-muted mb-10">
          Dernière mise à jour : 15 mars 2026
        </p>

        <section className="space-y-8 text-[15px] leading-relaxed text-foreground/90">
          {/* Article 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>ogong.fr</strong> est édité par :
            </p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                <strong className="text-foreground">OGong SAS</strong> au capital
                de [À COMPLÉTER] €
              </li>
              <li>
                SIRET : [À COMPLÉTER]
              </li>
              <li>
                RCS : [À COMPLÉTER]
              </li>
              <li>
                Siège social : [À COMPLÉTER]
              </li>
              <li>
                Numéro de TVA intracommunautaire : [À COMPLÉTER]
              </li>
            </ul>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              2. Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est{" "}
              <strong>John Devos Goncalves</strong>, en qualité de Président de
              la société OGong SAS.
            </p>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">3. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                <strong className="text-foreground">Vercel Inc.</strong>
              </li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>
                Site :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  vercel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">4. Contact</h2>
            <ul className="space-y-1 pl-5 list-disc text-muted">
              <li>
                Email :{" "}
                <a
                  href="mailto:contact@ogong.fr"
                  className="text-primary hover:underline"
                >
                  contact@ogong.fr
                </a>
              </li>
              <li>Téléphone : [À COMPLÉTER]</li>
            </ul>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              5. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur le site OGong
              (textes, images, logos, icônes, logiciels, algorithmes, bases de
              données, design) sont protégés par le droit de la propriété
              intellectuelle et sont la propriété exclusive d&apos;OGong SAS,
              sauf mention contraire.
            </p>
            <p className="mt-2">
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans
              l&apos;autorisation écrite préalable d&apos;OGong SAS.
            </p>
            <p className="mt-2">
              L&apos;algorithme de matching utilisé par OGong (basé sur
              l&apos;arithmétique modulaire Z<sub>T</sub>) est une création
              originale protégée par le droit d&apos;auteur.
            </p>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              6. Limitation de responsabilité
            </h2>
            <p>
              OGong SAS s&apos;efforce d&apos;assurer l&apos;exactitude et la
              mise à jour des informations diffusées sur le site, dont elle se
              réserve le droit de corriger le contenu à tout moment et sans
              préavis. OGong SAS ne peut cependant garantir l&apos;exactitude,
              la précision ou l&apos;exhaustivité des informations mises à
              disposition sur le site.
            </p>
            <p className="mt-2">
              En conséquence, l&apos;utilisateur reconnaît utiliser ces
              informations sous sa responsabilité exclusive.
            </p>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              7. Technologies utilisées
            </h2>
            <ul className="space-y-1 pl-5 list-disc text-muted">
              <li>Next.js (framework React)</li>
              <li>Prisma (ORM)</li>
              <li>PostgreSQL (base de données)</li>
              <li>Auth.js (authentification)</li>
              <li>Stripe (paiement sécurisé)</li>
              <li>Resend (service d&apos;emails transactionnels)</li>
              <li>Vercel (hébergement et déploiement)</li>
            </ul>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              8. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, et après tentative de recherche d&apos;une
              solution amiable, compétence est attribuée aux tribunaux français
              compétents.
            </p>
          </div>
        </section>

        {/* Liens vers autres pages légales */}
        <div className="mt-12 pt-8 border-t border-border flex gap-6 text-sm">
          <Link
            href="/confidentialite"
            className="text-primary hover:underline"
          >
            Politique de confidentialité
          </Link>
          <Link href="/" className="text-muted hover:text-foreground transition-colors">
            Retour à l&apos;accueil
          </Link>
        </div>
      </article>
    </main>
  );
}
