import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { getSettings } from '@/lib/content';

const settings = getSettings();

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Formulaire de contact, coordonnées et localisation de L’Atelier du Volcan à Sansac de Marmiesse.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Contact</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Parlons de votre projet bois</h1>
          <p className="text-base text-emerald-50/80">
            Expliquez-nous vos envies : nous répondons sous 48 heures avec des pistes concrètes, un budget clair et un planning estimatif.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-emerald-900">Formulaire de contact</h2>
          <p className="text-sm text-emerald-900/80">
            Remplissez les informations ci-dessous, nous revenons vers vous sous 48h.
          </p>
          <ContactForm />
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Coordonnées</h3>
            <p className="mt-3 text-sm text-emerald-900/80">
              {settings.contact.address}
              <br />
              <a className="block text-emerald-700" href={`tel:${settings.contact.phone.replace(/\s+/g, '')}`}>
                {settings.contact.phone}
              </a>
              <a className="block text-emerald-700" href={`mailto:${settings.contact.email}`}>
                {settings.contact.email}
              </a>
            </p>
            <div className="mt-4 space-y-2 text-sm text-emerald-900/70">
              <p>
                Facebook :{' '}
                <a className="text-emerald-700" href={settings.social.facebook} target="_blank" rel="noreferrer">
                  L’Atelier du Volcan
                </a>
              </p>
              <p>
                Instagram :{' '}
                <a className="text-emerald-700" href={settings.social.instagram} target="_blank" rel="noreferrer">
                  latelierduvolcan
                </a>
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-emerald-100">
            <iframe
              title="L’Atelier du Volcan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.569559137743!2d2.369651277319296!3d44.884341571071556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f81f00a901eb0d%3A0x4d8c8ed603cbdc93!2sLes%204%20Routes%20d'Albussac%2C%2015130%20Sansac-de-Marmiesse!5e0!3m2!1sfr!2sfr!4v1713023456789!5m2!1sfr!2sfr"
              width="100%"
              height="320"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </aside>
      </section>
    </div>
  );
}
