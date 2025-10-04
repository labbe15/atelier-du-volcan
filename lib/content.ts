import home from '@/data/home.json';
import about from '@/data/about.json';
import servicesFile from '@/data/services.json';
import projectsFile from '@/data/projects.json';
import testimonialsFile from '@/data/testimonials.json';
import settings from '@/data/settings.json';

export type Highlight = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  description: string;
  highlights: string[];
  image: string;
  process: ServiceProcessStep[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
};

export type Testimonial = {
  name: string;
  rating: number;
  message: string;
};

export type HomeContent = typeof home;
export type AboutContent = typeof about;
export type Settings = typeof settings;

const services = (servicesFile as { items: Service[] }).items;

export const getHomeContent = (): HomeContent => home;
export const getAboutContent = (): AboutContent => about;
export const getSettings = (): Settings => settings;
export const getServices = (): Service[] => services;
const projects = (projectsFile as { items: Project[] }).items;
const testimonials = (testimonialsFile as { items: Testimonial[] }).items;

export const getProjects = (): Project[] => projects;
export const getTestimonials = (): Testimonial[] => testimonials;

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);

export const getServicesByCategory = () => {
  return services.reduce<Record<string, Service[]>>((acc, service) => {
    const key = service.categoryLabel;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(service);
    return acc;
  }, {});
};

export const getNavigation = () => {
  const categoryOrder = ['Structure', 'Menuiserie', 'Agencement', 'Extension bois'];
  const grouped = getServicesByCategory();

  const serviceGroups = categoryOrder
    .filter((label) => grouped[label]?.length)
    .map((label) => ({
      label,
      href: `/services/${grouped[label][0].slug}`,
      children: grouped[label].map((service) => ({
        label: service.title,
        href: `/services/${service.slug}`,
      })),
    }));

  return [
    ...serviceGroups,
    { label: 'Réalisations', href: '/realisations' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Avis', href: '/avis' },
    { label: 'Contact', href: '/contact' },
  ];
};

export const getFeaturedServices = (slugs: (string | { slug: string })[]) =>
  slugs
    .map((entry) => (typeof entry === 'string' ? entry : entry.slug))
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));

export const getLocalBusinessSchema = () => {
  const siteSettings = getSettings();

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteSettings.siteName,
    description: siteSettings.description,
    slogan: siteSettings.slogan,
    image: '/logo.svg',
    telephone: siteSettings.contact.phone,
    email: siteSettings.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteSettings.contact.address,
      addressLocality: 'Sansac de Marmiesse',
      addressRegion: 'Auvergne-Rhône-Alpes',
      postalCode: '15130',
      addressCountry: 'FR',
    },
    sameAs: Object.values(siteSettings.social),
    url: 'https://atelierduvolcan.fr',
  };
};
