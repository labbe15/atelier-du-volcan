import type { MetadataRoute } from 'next';
import { getServices } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://atelierduvolcan.fr';
  const now = new Date();

  const serviceEntries = getServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
  }));

  return [
    { url: baseUrl, lastModified: now },
    { url: `${baseUrl}/a-propos`, lastModified: now },
    { url: `${baseUrl}/realisations`, lastModified: now },
    { url: `${baseUrl}/avis`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },
    ...serviceEntries,
  ];
}
