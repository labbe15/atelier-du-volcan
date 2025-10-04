import { getHomeContent, getTestimonials } from '@/lib/content';

const home = getHomeContent();
const testimonials = getTestimonials();

export const Testimonials = () => (
  <section className="bg-emerald-50 py-20">
    <div className="mx-auto max-w-6xl space-y-12 px-4">
      <div className="md:w-2/3">
        <p className="text-sm uppercase tracking-wide text-emerald-600">{home.testimonials.title}</p>
        <h2 className="mt-3 text-3xl font-semibold text-emerald-900">{home.testimonials.description}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-500">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <span key={index} aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-emerald-900/80">{testimonial.message}</p>
            <p className="mt-6 text-sm font-semibold text-emerald-900">{testimonial.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
