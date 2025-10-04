import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getServicesByCategory } from '@/lib/content';

const servicesByCategory = getServicesByCategory();

export const metadata: Metadata = {
  title: 'Nos services bois',
  description: 'Structure, menuiserie, agencement et extensions bois : découvrez l’ensemble de nos prestations sur mesure.',
};

export default function ServicesOverviewPage() {
  return (
    <div className="bg-white">
      <section className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-5xl space-y-6 px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Services</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Structure, menuiserie & agencement sur mesure</h1>
          <p className="text-base text-emerald-50/80">
            L’Atelier du Volcan accompagne vos projets du gros œuvre bois aux finitions intérieures et extérieures.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 py-16">
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="space-y-6">
            <h2 className="text-3xl font-semibold text-emerald-900">{category}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.slug} className="overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/70">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-xl font-semibold text-emerald-900">{service.title}</h3>
                    <p className="text-sm text-emerald-900/80">{service.excerpt}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                    >
                      Voir le service →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
