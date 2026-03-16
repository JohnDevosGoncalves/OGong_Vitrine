import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles d'OGong, conforme au RGPD.",
};

export default function Confidentialite() {
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
        <h1 className="text-3xl font-bold mb-2">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-muted mb-10">
          Dernière mise à jour : 15 mars 2026
        </p>

        <section className="space-y-8 text-[15px] leading-relaxed text-foreground/90">
          {/* Article 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles collectées
              sur le site et l&apos;application <strong>OGong</strong> est :
            </p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                <strong className="text-foreground">OGong SAS</strong>
              </li>
              <li>Siège social : [À COMPLÉTER]</li>
              <li>
                Email DPO :{" "}
                <a
                  href="mailto:dpo@ogong.fr"
                  className="text-primary hover:underline"
                >
                  dpo@ogong.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              2. Données collectées
            </h2>
            <p>
              Dans le cadre de l&apos;utilisation du service OGong, nous
              collectons les catégories de données suivantes :
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-2 font-medium">
                      Catégorie
                    </th>
                    <th className="text-left px-4 py-2 font-medium">
                      Données
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 text-foreground font-medium">
                      Identité
                    </td>
                    <td className="px-4 py-2">
                      Nom, prénom, adresse email, téléphone (optionnel)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 text-foreground font-medium">
                      Compte
                    </td>
                    <td className="px-4 py-2">
                      Mot de passe (hashé bcrypt), date d&apos;inscription,
                      statut de vérification email
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 text-foreground font-medium">
                      Événements
                    </td>
                    <td className="px-4 py-2">
                      Titre, description, date, lieu, format, nombre de
                      participants, données d&apos;assignation aux tables
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 text-foreground font-medium">
                      Paiement
                    </td>
                    <td className="px-4 py-2">
                      Montant, date, identifiant de session Stripe (les données
                      bancaires ne transitent jamais par nos serveurs)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-foreground font-medium">
                      Technique
                    </td>
                    <td className="px-4 py-2">
                      Adresse IP, type de navigateur, pages visitées, horodatage
                      des connexions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              3. Finalités du traitement
            </h2>
            <p>Vos données sont traitées pour les finalités suivantes :</p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                <strong className="text-foreground">
                  Gestion de votre compte
                </strong>{" "}
                — création, authentification, personnalisation
              </li>
              <li>
                <strong className="text-foreground">
                  Organisation d&apos;événements
                </strong>{" "}
                — gestion des participants, algorithme de matching, assignation
                des tables, chronomètre
              </li>
              <li>
                <strong className="text-foreground">
                  Notifications
                </strong>{" "}
                — emails de confirmation, rappels, résultats d&apos;événement
              </li>
              <li>
                <strong className="text-foreground">Paiement</strong> — achat de
                crédits via Stripe, facturation
              </li>
              <li>
                <strong className="text-foreground">
                  Amélioration du service
                </strong>{" "}
                — statistiques d&apos;utilisation anonymisées, correction de
                bugs
              </li>
              <li>
                <strong className="text-foreground">
                  Obligations légales
                </strong>{" "}
                — réponse aux demandes des autorités compétentes
              </li>
            </ul>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">4. Base légale</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), chaque traitement repose sur une base légale :
            </p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                <strong className="text-foreground">
                  Exécution contractuelle
                </strong>{" "}
                (art. 6.1.b RGPD) — gestion du compte, organisation des
                événements, paiement
              </li>
              <li>
                <strong className="text-foreground">Consentement</strong> (art.
                6.1.a RGPD) — envoi de communications marketing (si applicable)
              </li>
              <li>
                <strong className="text-foreground">Intérêt légitime</strong>{" "}
                (art. 6.1.f RGPD) — amélioration du service, sécurité,
                prévention de la fraude
              </li>
              <li>
                <strong className="text-foreground">Obligation légale</strong>{" "}
                (art. 6.1.c RGPD) — conservation des données de facturation
              </li>
            </ul>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              5. Destinataires des données
            </h2>
            <p>
              Vos données peuvent être partagées avec les sous-traitants
              suivants, dans le strict cadre des finalités décrites ci-dessus :
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-2 font-medium">
                      Sous-traitant
                    </th>
                    <th className="text-left px-4 py-2 font-medium">
                      Finalité
                    </th>
                    <th className="text-left px-4 py-2 font-medium">Pays</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 text-foreground font-medium">
                      Vercel Inc.
                    </td>
                    <td className="px-4 py-2">Hébergement de l&apos;application</td>
                    <td className="px-4 py-2">États-Unis</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 text-foreground font-medium">
                      Stripe Inc.
                    </td>
                    <td className="px-4 py-2">Traitement des paiements</td>
                    <td className="px-4 py-2">États-Unis</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-foreground font-medium">
                      Resend Inc.
                    </td>
                    <td className="px-4 py-2">
                      Envoi d&apos;emails transactionnels
                    </td>
                    <td className="px-4 py-2">États-Unis</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">
              Ces prestataires sont conformes aux exigences du RGPD via les
              Clauses Contractuelles Types (CCT) de la Commission européenne
              et/ou le Data Privacy Framework UE-US.
            </p>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              6. Durée de conservation
            </h2>
            <ul className="space-y-1 pl-5 list-disc text-muted">
              <li>
                <strong className="text-foreground">Données de compte</strong> —
                conservées tant que le compte est actif, puis supprimées dans les
                30 jours suivant la demande de suppression
              </li>
              <li>
                <strong className="text-foreground">
                  Données d&apos;événements
                </strong>{" "}
                — conservées 12 mois après la date de l&apos;événement, puis
                anonymisées
              </li>
              <li>
                <strong className="text-foreground">
                  Données de facturation
                </strong>{" "}
                — conservées 10 ans conformément aux obligations comptables
                françaises
              </li>
              <li>
                <strong className="text-foreground">Logs techniques</strong> —
                conservés 12 mois
              </li>
            </ul>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              7. Vos droits
            </h2>
            <p>
              Conformément au RGPD (articles 15 à 22), vous disposez des droits
              suivants sur vos données personnelles :
            </p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                <strong className="text-foreground">Droit d&apos;accès</strong>{" "}
                — obtenir une copie de vos données personnelles
              </li>
              <li>
                <strong className="text-foreground">
                  Droit de rectification
                </strong>{" "}
                — corriger des données inexactes ou incomplètes
              </li>
              <li>
                <strong className="text-foreground">
                  Droit à l&apos;effacement
                </strong>{" "}
                — demander la suppression de vos données (« droit à
                l&apos;oubli »)
              </li>
              <li>
                <strong className="text-foreground">
                  Droit à la portabilité
                </strong>{" "}
                — recevoir vos données dans un format structuré (JSON)
              </li>
              <li>
                <strong className="text-foreground">
                  Droit d&apos;opposition
                </strong>{" "}
                — vous opposer au traitement de vos données
              </li>
              <li>
                <strong className="text-foreground">
                  Droit à la limitation
                </strong>{" "}
                — restreindre le traitement dans certains cas
              </li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:dpo@ogong.fr"
                className="text-primary hover:underline"
              >
                dpo@ogong.fr
              </a>
              . Nous répondrons dans un délai maximum de 30 jours.
            </p>
            <p className="mt-2">
              OGong intègre directement deux de ces droits dans
              l&apos;application : l&apos;export de vos données au format JSON
              et la suppression de votre compte sont accessibles depuis la page
              « Mon compte ».
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CNIL
              </a>{" "}
              (Commission Nationale de l&apos;Informatique et des Libertés).
            </p>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">8. Cookies</h2>
            <p>
              OGong utilise uniquement des <strong>cookies techniques</strong>{" "}
              strictement nécessaires au fonctionnement du service :
            </p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                <strong className="text-foreground">Session</strong> — maintien
                de votre connexion (cookie httpOnly sécurisé)
              </li>
              <li>
                <strong className="text-foreground">Préférences</strong> — thème
                (clair/sombre) et langue (localStorage)
              </li>
            </ul>
            <p className="mt-3">
              <strong>Aucun cookie publicitaire, analytique ou de tracking</strong>{" "}
              n&apos;est utilisé. Aucune donnée n&apos;est transmise à des
              régies publicitaires ou à des outils d&apos;analyse tiers.
            </p>
          </div>

          {/* Article 9 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              9. Sécurité des données
            </h2>
            <p>
              OGong met en oeuvre les mesures techniques et organisationnelles
              suivantes pour protéger vos données :
            </p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                Chiffrement des communications via <strong>HTTPS/TLS</strong>
              </li>
              <li>
                Hachage des mots de passe avec <strong>bcrypt</strong> (12
                rounds)
              </li>
              <li>
                Tokens de réinitialisation à usage unique avec expiration
              </li>
              <li>
                Protection CSRF sur toutes les actions sensibles
              </li>
              <li>
                Validation et assainissement de toutes les entrées utilisateur
                (Zod)
              </li>
              <li>
                Rate-limiting sur les endpoints sensibles (réinitialisation mot
                de passe, vérification email)
              </li>
              <li>
                Isolation des données par utilisateur (contrôle de propriété sur
                chaque requête)
              </li>
            </ul>
          </div>

          {/* Article 10 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              10. Transferts hors UE
            </h2>
            <p>
              Certains de nos sous-traitants (Vercel, Stripe, Resend) sont
              basés aux États-Unis. Ces transferts sont encadrés par :
            </p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-muted">
              <li>
                Le <strong>Data Privacy Framework</strong> UE-US (décision
                d&apos;adéquation de la Commission européenne du 10 juillet
                2023)
              </li>
              <li>
                Les <strong>Clauses Contractuelles Types</strong> (CCT) de la
                Commission européenne
              </li>
            </ul>
          </div>

          {/* Article 11 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              11. Mineurs
            </h2>
            <p>
              OGong est un service professionnel destiné aux organisateurs
              d&apos;événements. L&apos;inscription est réservée aux personnes
              âgées de 16 ans ou plus. Si un mineur de moins de 16 ans a créé
              un compte sans autorisation parentale, nous procéderons à sa
              suppression sur simple demande.
            </p>
          </div>

          {/* Article 12 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              12. Modifications de cette politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. En cas de modification
              substantielle, les utilisateurs inscrits seront informés par email
              au moins 15 jours avant l&apos;entrée en vigueur des changements.
            </p>
            <p className="mt-2">
              La date de dernière mise à jour est indiquée en haut de cette
              page.
            </p>
          </div>

          {/* Contact */}
          <div className="p-5 bg-surface border border-border rounded-xl">
            <h2 className="text-lg font-semibold mb-2">
              Contact — Délégué à la Protection des Données
            </h2>
            <p className="text-muted">
              Pour toute question relative à cette politique ou pour exercer vos
              droits, contactez notre DPO :
            </p>
            <p className="mt-2">
              <a
                href="mailto:dpo@ogong.fr"
                className="text-primary hover:underline font-medium"
              >
                dpo@ogong.fr
              </a>
            </p>
          </div>
        </section>

        {/* Liens vers autres pages légales */}
        <div className="mt-12 pt-8 border-t border-border flex gap-6 text-sm">
          <Link
            href="/mentions-legales"
            className="text-primary hover:underline"
          >
            Mentions légales
          </Link>
          <Link href="/" className="text-muted hover:text-foreground transition-colors">
            Retour à l&apos;accueil
          </Link>
        </div>
      </article>
    </main>
  );
}
