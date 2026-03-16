import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Ligne principale */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="3.5" fill="#4a3aff" />
              <circle cx="18" cy="6" r="3.5" fill="#ff8c42" />
              <circle cx="6" cy="18" r="3.5" fill="#ff8c42" />
              <circle cx="18" cy="18" r="3.5" fill="#4a3aff" />
            </svg>
            <span className="text-sm font-semibold">OGong</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="#formats" className="hover:text-foreground transition-colors">
              Formats
            </a>
            <a href="#fonctionnalites" className="hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#tarifs" className="hover:text-foreground transition-colors">
              Tarifs
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-xs text-muted">
            © {new Date().getFullYear()} OGong. Tous droits réservés.
          </p>
        </div>

        {/* Liens légaux */}
        <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted">
          <Link
            href="/mentions-legales"
            className="hover:text-foreground transition-colors"
          >
            Mentions légales
          </Link>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <Link
            href="/confidentialite"
            className="hover:text-foreground transition-colors"
          >
            Politique de confidentialité
          </Link>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <a
            href="mailto:contact@ogong.fr"
            className="hover:text-foreground transition-colors"
          >
            contact@ogong.fr
          </a>
        </div>
      </div>
    </footer>
  );
}
