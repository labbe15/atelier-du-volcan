import Link from 'next/link';
import { getHomeContent } from '@/lib/content';

const home = getHomeContent();

export const ContactCta = () => (
  <section className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 py-16">
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 text-white md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">{home.cta.title}</h2>
        <p className="max-w-xl text-sm text-emerald-50/90">{home.cta.description}</p>
      </div>
      <Link
        href="/contact"
        className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-emerald-700 shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-50"
      >
        {home.cta.button}
      </Link>
    </div>
  </section>
);
