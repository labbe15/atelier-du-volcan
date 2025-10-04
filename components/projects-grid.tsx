import Image from 'next/image';
import { getHomeContent, getProjects } from '@/lib/content';

const home = getHomeContent();
const projects = getProjects();

export const ProjectsGrid = () => (
  <section className="bg-emerald-900 py-20 text-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
      <div className="md:w-2/3">
        <p className="text-sm uppercase tracking-wide text-emerald-200">{home.showcase.title}</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">{home.showcase.description}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <figure key={project.title} className="overflow-hidden rounded-2xl bg-white/5">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="space-y-1 p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-emerald-100/80">{project.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
