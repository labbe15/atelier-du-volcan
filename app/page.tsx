import type { Metadata } from 'next';
import { HomeHero } from '@/components/home-hero';
import { Highlights } from '@/components/highlights';
import { ServicesPreview } from '@/components/services-preview';
import { ProjectsGrid } from '@/components/projects-grid';
import { Testimonials } from '@/components/testimonials';
import { ContactCta } from '@/components/contact-cta';
import { getSettings } from '@/lib/content';

const settings = getSettings();

export const metadata: Metadata = {
  title: 'Création & rénovation sur mesure',
  description: settings.description,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Highlights />
      <ServicesPreview />
      <ProjectsGrid />
      <Testimonials />
      <ContactCta />
    </>
  );
}
