import { getHomeContent } from '@/lib/content';

const home = getHomeContent();

export const Highlights = () => (
  <section className="bg-emerald-50 py-16">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
      {home.highlights.map((highlight) => (
        <article
          key={highlight.title}
          className="rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm shadow-emerald-100/50"
        >
          <h3 className="text-lg font-semibold text-emerald-900">{highlight.title}</h3>
          <p className="mt-2 text-sm text-emerald-900/80">{highlight.description}</p>
        </article>
      ))}
    </div>
  </section>
);
