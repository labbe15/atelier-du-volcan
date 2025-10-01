import Head from 'next/head';

interface SeoHeadProps {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  ogImage?: string;
  structuredData?: object;
}

const SeoHead = ({ 
  title, 
  description, 
  canonical, 
  robots = "index, follow",
  ogImage = "https://atelier-du-volcan.fr/og-image.jpg",
  structuredData
}: SeoHeadProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "L'Atelier du Volcan",
    "description": "Menuiserie artisanale haut de gamme en Auvergne",
    "url": "https://atelier-du-volcan.fr",
    "telephone": "+33471234567",
    "email": "contact@atelier-du-volcan.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Route des Volcans",
      "addressLocality": "Aurillac",
      "postalCode": "15000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.9236",
      "longitude": "2.4447"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-12:00"
    ],
    "priceRange": "€€€",
    "image": ogImage,
    "sameAs": [
      "https://facebook.com/atelierduvolcan",
      "https://instagram.com/atelierduvolcan"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de menuiserie",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Escaliers sur-mesure",
            "description": "Conception et fabrication d'escaliers en bois sur-mesure"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aménagement intérieur",
            "description": "Dressings, placards et mobilier sur-mesure"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Terrasses et pergolas",
            "description": "Aménagements extérieurs en bois local"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="L'Atelier du Volcan" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="FR-15" />
      <meta name="geo.placename" content="Aurillac" />
      <meta name="geo.position" content="44.9236;2.4447" />
      <meta name="ICBM" content="44.9236, 2.4447" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
    </Head>
  );
};

export default SeoHead;