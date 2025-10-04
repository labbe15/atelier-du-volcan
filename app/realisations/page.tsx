import Image from 'next/image';
import type { Metadata } from 'next';
import { getProjects, getSettings } from '@/lib/content';

const projects = getProjects();
const settings = getSettings();

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Galerie de chantiers bois réalisés dans le Cantal et les départements voisins.',
};

export default function RealisationsPage() {
  return (
    <div className="bg-white">
      <section className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-5xl space-y-6 px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Réalisations</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Des projets menés avec passion</h1>
          <p className="text-base text-emerald-50/80">
            Chaque chantier est conçu dans notre atelier de Sansac de Marmiesse et posé par nos soins. Découvrez une sélection
            de 12 projets qui illustrent notre savoir-faire bois.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/60">
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h2 className="text-lg font-semibold text-emerald-900">{project.title}</h2>
                <p className="text-sm text-emerald-900/70">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50/80 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-center">
          <h2 className="text-3xl font-semibold text-emerald-900">Vous imaginez un projet similaire ?</h2>
          <p className="text-base text-emerald-900/80">
            Prenez rendez-vous avec Tristan et Maxime. Nous passons sur place pour comprendre vos besoins et vous proposer une
            solution sur mesure, claire et durable.
          </p>
          <a
            href={`tel:${settings.contact.phone.replace(/\s+/g, '')}`}
            className="mx-auto rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-emerald-500"
          >
            Appeler le {settings.contact.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
