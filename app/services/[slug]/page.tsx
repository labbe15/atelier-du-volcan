import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getServiceBySlug,
  getServices,
  getServicesByCategory,
  getSettings,
} from '@/lib/content';

const settings = getSettings();

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service',
    };
  }

  return {
    title: service.title,
    description: service.excerpt,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedCategories = getServicesByCategory();
  const siblings = relatedCategories[service.categoryLabel]?.filter((item) => item.slug !== service.slug) || [];

  return (
    <article className="bg-white">
      <section className="relative overflow-hidden bg-emerald-900/90 text-white">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/85 to-emerald-900/60" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24">
          <p className="text-sm uppercase tracking-widest text-emerald-200">{service.categoryLabel}</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{service.title}</h1>
          <p className="max-w-3xl text-lg text-emerald-50/90">{service.excerpt}</p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-400"
            >
              Discuter de mon projet
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-emerald-900">Notre approche</h2>
            <p className="text-base leading-relaxed text-emerald-900/80">{service.description}</p>
            <div className="grid gap-4 md:grid-cols-2">
              {service.highlights.map((highlight) => (
                <div key={highlight} className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                  <p className="text-sm font-semibold text-emerald-900">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Coordonnées</h3>
            <p className="text-sm text-emerald-900/80">
              {settings.contact.address}
              <br />
              <a className="block text-emerald-700" href={`tel:${settings.contact.phone.replace(/\s+/g, '')}`}>
                {settings.contact.phone}
              </a>
              <a className="block text-emerald-700" href={`mailto:${settings.contact.email}`}>
                {settings.contact.email}
              </a>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100"
            >
              Demander un devis
            </Link>
          </aside>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-emerald-900">Les étapes clés</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-emerald-900">{step.title}</h3>
                <p className="mt-2 text-sm text-emerald-900/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {siblings.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-900">Autres services {service.categoryLabel.toLowerCase()}</h2>
            <div className="flex flex-wrap gap-3">
              {siblings.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/services/${sibling.slug}`}
                  className="rounded-full border border-emerald-200 px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
                >
                  {sibling.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
