export const generateBlogStructuredData = (post: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "L'Atelier du Volcan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://atelier-du-volcan.fr/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://atelier-du-volcan.fr/blog/${post.slug}`
    }
  };
};

export const generateProductStructuredData = (service: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": service.title,
    "description": service.description,
    "image": service.image,
    "offers": {
      "@type": "Offer",
      "price": service.priceRange,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "L'Atelier du Volcan"
      }
    },
    "brand": {
      "@type": "Brand",
      "name": "L'Atelier du Volcan"
    }
  };
};

export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "L'Atelier du Volcan",
    "url": "https://atelier-du-volcan.fr",
    "logo": "https://atelier-du-volcan.fr/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33471234567",
      "contactType": "customer service",
      "availableLanguage": ["French"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Route des Volcans",
      "addressLocality": "Aurillac",
      "postalCode": "15000",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://facebook.com/atelierduvolcan",
      "https://instagram.com/atelierduvolcan"
    ]
  };
};