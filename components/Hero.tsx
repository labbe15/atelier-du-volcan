'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  showAnimation?: boolean;
}

const Hero = ({ showAnimation = false }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Center Reveal Animation */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`w-full h-[120%] bg-cover bg-center bg-no-repeat will-change-transform ${
            showAnimation ? 'animate-center-reveal' : ''
          }`}
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content with Animation */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        showAnimation ? 'animate-hero-content' : ''
      }`}>
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight ${
            showAnimation ? 'animation-delay-1000' : ''
          }`}>
            Le <span className="text-amber-400">bois</span>,<br />
            la <span className="text-green-400">nature</span>,<br />
            l'<span className="text-amber-400">excellence</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-white/90 mb-8 leading-relaxed ${
            showAnimation ? 'animation-delay-1200' : ''
          }`}>
            Créateurs de mobilier sur-mesure et d'aménagements d'exception 
            au cœur de l'Auvergne. Chaque projet est une œuvre unique.
          </p>

          {/* Location */}
          <p className={`text-lg text-white/80 mb-12 ${
            showAnimation ? 'animation-delay-1400' : ''
          }`}>
            Aurillac • Murat • Salers • Toute l'Auvergne
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 ${
            showAnimation ? 'animation-delay-1600' : ''
          }`}>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-bold text-lg rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;