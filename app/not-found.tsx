import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-emerald-50 px-4 text-center">
      <h1 className="text-4xl font-semibold text-emerald-900">Page introuvable</h1>
      <p className="max-w-md text-sm text-emerald-900/80">
        Le contenu que vous cherchez n’existe plus ou a été déplacé. Retournez vers la page d’accueil pour découvrir notre
        savoir-faire.
      </p>
      <Link
        href="/"
        className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-emerald-500"
      >
        Revenir à l’accueil
      </Link>
    </div>
  );
}
