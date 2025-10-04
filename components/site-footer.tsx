import Link from 'next/link';
import { getNavigation, getSettings } from '@/lib/content';

const settings = getSettings();
const navigation = getNavigation();

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <p className="font-script text-3xl text-emerald-200">L’Atelier du Volcan</p>
          <p className="text-sm text-emerald-100/80">{settings.slogan}</p>
          <p className="text-sm text-emerald-100/60">{settings.description}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Nous contacter</h3>
          <p className="text-sm text-emerald-100/80">
            {settings.contact.address}
            <br />
            <a className="block text-emerald-100 hover:text-white" href={`tel:${settings.contact.phone.replace(/\s+/g, '')}`}>
              {settings.contact.phone}
            </a>
            <a className="block text-emerald-100 hover:text-white" href={`mailto:${settings.contact.email}`}>
              {settings.contact.email}
            </a>
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Navigation</h3>
          <ul className="space-y-2 text-sm text-emerald-100/80">
            {navigation.map((item) => (
              <li key={`footer-${item.label}`}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-emerald-800/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-emerald-100/70 md:flex-row">
          <p>© {year} L’Atelier du Volcan – Tous droits réservés.</p>
          <div className="flex gap-4">
            <a
              href={settings.social.facebook}
              className="hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href={settings.social.instagram}
              className="hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
