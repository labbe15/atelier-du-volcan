import Link from 'next/link';
import Image from 'next/image';
import { getHomeContent } from '@/lib/content';

const home = getHomeContent();

export const HomeHero = () => {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden bg-emerald-900/80">
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt="Atelier du Volcan"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-emerald-900/40" />
      </div>
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-8 px-4 py-24 text-white">
        <p className="font-script text-3xl text-emerald-200">L’Atelier du Volcan</p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">{hero.title}</h1>
        <p className="max-w-2xl text-lg text-emerald-50/90">{hero.subtitle}</p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-400"
          >
            {hero.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};
