import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Escaliers sur-mesure', href: '/services' },
        { name: 'Aménagement intérieur', href: '/services' },
        { name: 'Terrasses & Pergolas', href: '/services' },
        { name: 'Mobilier sur-mesure', href: '/services' }
      ]
    },
    {
      title: 'L\'Entreprise',
      links: [
        { name: 'À propos', href: '/about' },
        { name: 'Nos réalisations', href: '/projects' },
        { name: 'Blog & Conseils', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Zone d\'intervention',
      links: [
        { name: 'Aurillac', href: '/contact' },
        { name: 'Murat', href: '/contact' },
        { name: 'Salers', href: '/contact' },
        { name: 'Saint-Flour', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/atelierduvolcan' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/atelierduvolcan' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/atelierduvolcan' }
  ];

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                AV
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">L'Atelier du Volcan</h2>
                <p className="text-stone-400">Menuiserie d'Art</p>
              </div>
            </Link>
            
            <p className="text-stone-400 mb-6 leading-relaxed">
              Depuis 1998, nous créons du mobilier et des aménagements d'exception 
              au cœur de l'Auvergne. Notre passion pour le bois local et l'artisanat 
              traditionnel guide chaque projet.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>123 Route des Volcans, 15000 Aurillac</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <a href="tel:+33471234567" className="hover:text-amber-400 transition-colors">
                  +33 4 71 23 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <a href="mailto:contact@atelier-du-volcan.fr" className="hover:text-amber-400 transition-colors">
                  contact@atelier-du-volcan.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>Lun-Ven: 8h-18h • Sam: 9h-12h</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Restez informé de nos nouveautés
              </h3>
              <p className="text-stone-400">
                Recevez nos conseils et actualités une fois par mois
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-stone-400"
              />
              <button className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-stone-400 text-sm">
              © {currentYear} L'Atelier du Volcan. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-stone-400">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                Politique de confidentialité
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;