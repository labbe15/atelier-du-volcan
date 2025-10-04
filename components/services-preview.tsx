import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedServices, getHomeContent } from '@/lib/content';

const home = getHomeContent();
const featuredServices = getFeaturedServices(home.services.featured);

export const ServicesPreview = () => (
  <section className="bg-white py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
      <div className="md:w-1/2">
        <p className="text-sm uppercase tracking-wide text-emerald-600">{home.services.title}</p>
        <h2 className="mt-3 text-3xl font-semibold text-emerald-900">{home.services.description}</h2>
        <Link
          href={featuredServices[0] ? `/services/${featuredServices[0].slug}` : '/services'}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700 hover:bg-emerald-50"
        >
          Découvrir nos services
        </Link>
      </div>
      <div className="grid flex-1 gap-6 md:grid-cols-3">
        {featuredServices.map((service) => (
          <article key={service.slug} className="group rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
            <div className="relative mb-4 h-32 overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold text-emerald-900">{service.title}</h3>
            <p className="mt-2 text-sm text-emerald-900/70">{service.excerpt}</p>
            <Link href={`/services/${service.slug}`} className="mt-4 inline-flex text-sm font-medium text-emerald-700">
              En savoir plus
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
