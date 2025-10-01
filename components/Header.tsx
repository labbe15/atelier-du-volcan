'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, MessageSquare } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/projects' },
    { name: 'À propos', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    return router.pathname === path;
  };

  const isHomePage = router.pathname === '/';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isHomePage 
        ? (scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent') 
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              AV
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isHomePage && !scrolled ? 'text-white' : 'text-stone-900'
              }`}>
                L'Atelier du Volcan
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isHomePage && !scrolled ? 'text-white/80' : 'text-stone-600'
              }`}>
                Menuiserie d'Art
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:text-amber-400 ${
                  isActivePath(item.href)
                    ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                    : isHomePage && !scrolled 
                      ? 'text-white hover:text-amber-300' 
                      : 'text-stone-700 hover:text-amber-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button - Un seul bouton */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Devis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isHomePage && !scrolled 
                  ? 'text-white hover:text-amber-300' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-medium transition-colors hover:text-amber-600 ${
                  isActivePath(item.href) ? 'text-amber-600' : 'text-stone-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-stone-200">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;