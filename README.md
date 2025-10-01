# L'Atelier du Volcan - Site Web Professionnel

Site web complet pour L'Atelier du Volcan, menuiserie artisanale haut de gamme en Auvergne.

## 🚀 Installation

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour la production
npm run build

# Export statique
npm run export
```

## 📁 Structure du Projet

```
├── pages/                  # Pages Next.js
│   ├── index.tsx          # Accueil
│   ├── services.tsx       # Services
│   ├── projects.tsx       # Réalisations
│   ├── about.tsx          # À propos
│   ├── contact.tsx        # Contact & Devis
│   ├── blog.tsx           # Blog
│   └── privacy.tsx        # Politique de confidentialité
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation principale
│   ├── Hero.tsx           # Section héro
│   ├── ServiceCard.tsx    # Carte service
│   ├── ProjectGallery.tsx # Galerie projets
│   ├── Testimonial.tsx    # Témoignage client
│   ├── Team.tsx           # Équipe
│   ├── BlogCard.tsx       # Carte article
│   ├── Footer.tsx         # Pied de page
│   ├── Breadcrumb.tsx     # Fil d'Ariane
│   ├── CookiesBanner.tsx  # Bannière RGPD
│   ├── LanguageSwitcher.tsx # Sélecteur langue
│   └── SeoHead.tsx        # SEO & Meta tags
├── types/                 # Types TypeScript
├── utils/                 # Utilitaires
└── app/                   # Configuration globale
```

## 🎨 Fonctionnalités

### ✅ Pages Principales
- **Accueil** : Hero, services, témoignages, réalisations
- **Services** : Catalogue complet avec filtres
- **Réalisations** : Galerie avant/après avec zoom
- **À propos** : Histoire, équipe, valeurs, certifications
- **Contact** : Formulaire devis + carte + infos
- **Blog** : Articles SEO avec structured data
- **Confidentialité** : Politique RGPD complète

### ✅ Fonctionnalités Avancées
- 📱 **Responsive Design** : Mobile-first
- 🔍 **SEO Optimisé** : Meta tags, JSON-LD, sitemap
- 🌐 **Multilingue** : FR/EN (mock)
- 🍪 **RGPD** : Bannière cookies conforme
- 📞 **Appels directs** : Boutons tel: en mobile
- 🎯 **Conversion** : CTA strategiques
- ⚡ **Performance** : Images optimisées, lazy loading
- ♿ **Accessibilité** : ARIA, navigation clavier

### ✅ SEO & Structured Data
- Schema.org LocalBusiness
- Schema.org Article (blog)
- Schema.org Product (services)
- Meta tags Open Graph
- Twitter Cards
- Balises géolocalisées

## 🎨 Design System

### Couleurs
- **Primary** : Amber (#D97706, #92400E)
- **Secondary** : Stone (#78716C, #1C1917)
- **Accent** : Green (#065F46)
- **Success** : Green (#059669)
- **Warning** : Orange (#EA580C)
- **Error** : Red (#DC2626)

### Typography
- **Font** : Inter (Google Fonts)
- **Headings** : 120% line-height
- **Body** : 150% line-height
- **Weights** : 400, 600, 700

### Spacing
- **System** : 8px base (Tailwind)
- **Breakpoints** :
  - Mobile : < 768px
  - Tablet : 768px - 1024px
  - Desktop : > 1024px

## 📊 Performance

- ⚡ **Core Web Vitals** optimisés
- 🖼️ **Images** : Format WebP, lazy loading
- 📦 **Bundle** : Code splitting automatique
- 🚀 **CDN Ready** : Déployable sur Vercel/Netlify

## 🔧 Technologies

- **Framework** : Next.js 13.5
- **Styling** : Tailwind CSS
- **TypeScript** : Support complet
- **Forms** : React Hook Form + Zod
- **Icons** : Lucide React
- **SEO** : Next SEO + JSON-LD

## 📈 Analytics & Tracking

- Google Analytics 4 (via cookies)
- Schema.org structured data
- Sitemap XML automatique
- Robots.txt optimisé

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload du dossier .next/
```

### Export Statique
```bash
npm run export
# Upload du dossier out/
```

## 📞 Contact

**L'Atelier du Volcan**
- 📍 123 Route des Volcans, 15000 Aurillac
- ☎️ +33 4 71 23 45 67
- ✉️ contact@atelier-du-volcan.fr
- 🌐 https://atelier-du-volcan.fr

---

*Site développé avec ❤️ pour l'artisanat français*