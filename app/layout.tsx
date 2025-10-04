import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Dancing_Script } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Preloader } from '@/components/preloader';
import { getLocalBusinessSchema, getNavigation, getSettings } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-script' });

const settings = getSettings();
const navigation = getNavigation();
const schema = JSON.stringify(getLocalBusinessSchema());

export const metadata: Metadata = {
  metadataBase: new URL('https://atelierduvolcan.fr'),
  title: {
    default: `${settings.siteName} | Menuiserie & structures bois dans le Cantal`,
    template: `%s | ${settings.siteName}`,
  },
  description: settings.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${settings.siteName} | Menuiserie & structures bois dans le Cantal`,
    description: settings.description,
    type: 'website',
    locale: 'fr_FR',
    url: 'https://atelierduvolcan.fr',
    siteName: settings.siteName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${dancing.variable}`}>
      <body className="min-h-screen bg-emerald-50 text-slate-900 font-sans">
        <Preloader />
        <SiteHeader navigation={navigation} />
        <main>{children}</main>
        <SiteFooter />
        <Script id="schema-local-business" type="application/ld+json">
          {schema}
        </Script>
      </body>
    </html>
  );
}
