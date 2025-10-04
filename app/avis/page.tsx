import type { Metadata } from 'next';
import { getTestimonials, getSettings } from '@/lib/content';

const testimonials = getTestimonials();
const settings = getSettings();

export const metadata: Metadata = {
  title: 'Avis clients',
  description: 'Découvrez les retours des clients ayant confié leur projet bois à L’Atelier du Volcan.',
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      <section className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Avis clients</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Merci pour votre confiance</h1>
          <p className="text-base text-emerald-50/80">
            Nos clients apprécient la proximité, les finitions soignées et la transparence de nos devis. Leur satisfaction est notre meilleure carte de visite.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-16">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="font-semibold text-emerald-900">{testimonial.name}</div>
              <div className="text-emerald-500">{'★'.repeat(testimonial.rating)}</div>
            </div>
            <p className="mt-4 text-sm text-emerald-900/80">{testimonial.message}</p>
          </article>
        ))}
      </section>

      <section className="bg-emerald-50/80 py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 text-center">
          <h2 className="text-3xl font-semibold text-emerald-900">Vous avez travaillé avec nous ?</h2>
          <p className="text-base text-emerald-900/80">
            Partagez votre expérience : votre avis aide d’autres familles et professionnels à nous faire confiance.
          </p>
          <a
            href={`mailto:${settings.contact.email}`}
            className="mx-auto rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-emerald-500"
          >
            Envoyer mon témoignage
          </a>
        </div>
      </section>
    </div>
  );
}
