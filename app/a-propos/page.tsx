import type { Metadata } from 'next';
import { getAboutContent, getSettings } from '@/lib/content';

const about = getAboutContent();
const settings = getSettings();

export const metadata: Metadata = {
  title: 'À propos',
  description: about.introduction,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">À propos</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{about.title}</h1>
          <p className="text-base text-emerald-50/80">{about.introduction}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-4 py-16">
        <div className="space-y-4 text-emerald-900/80">
          <p className="text-lg leading-relaxed">{about.story}</p>
          <p className="text-sm uppercase tracking-wider text-emerald-600">{settings.slogan}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {about.values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
              <h2 className="text-lg font-semibold text-emerald-900">{value.title}</h2>
              <p className="mt-3 text-sm text-emerald-900/80">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50/90 py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 text-center">
          <h2 className="text-3xl font-semibold text-emerald-900">{about.cta.title}</h2>
          <p className="text-base text-emerald-900/80">{about.cta.description}</p>
          <a
            href={`mailto:${settings.contact.email}`}
            className="mx-auto rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-emerald-500"
          >
            Écrire à l’atelier
          </a>
        </div>
      </section>
    </div>
  );
}
