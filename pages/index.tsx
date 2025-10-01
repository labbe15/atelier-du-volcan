'use client';

import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ProjectGallery from '../components/ProjectGallery';
import Testimonial from '../components/Testimonial';
import SeoHead from '../components/SeoHead';
import { services, projects, testimonials } from '../utils/mockData';
import { Award, Leaf, Users, Clock } from 'lucide-react';

// Composant LoadingIntro intégré directement
const LoadingIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<'logo' | 'name' | 'fade-out' | 'complete'>('logo');

  useEffect(() => {
    const timer1 = window.setTimeout(() => {
      setStage('name');
    }, 800); // Logo apparaît d'abord

    const timer2 = window.setTimeout(() => {
      setStage('fade-out');
    }, 2500); // Nom apparaît puis commence à disparaître

    const timer3 = window.setTimeout(() => {
      setStage('complete');
      onComplete();
    }, 3500); // Transition complète après 3.5s

    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      window.clearTimeout(timer3);
    };
  }, [onComplete]);

  if (stage === 'complete') return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-all duration-1000 ${
        stage === 'fade-out' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className={`mb-8 transition-all duration-1000 transform ${
          stage === 'logo' || stage === 'name' ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'
        }`}>
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center text-white font-bold text-4xl mb-6 shadow-2xl animate-glow">
            AV
          </div>
        </div>

        {/* Nom de l'entreprise */}
        <div className={`transition-all duration-1000 transform ${
          stage === 'name' || stage === 'fade-out' ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">
            L'Atelier du Volcan
          </h1>
          <p className="text-xl text-stone-600 font-light tracking-wide">
            Menuiserie d'Art
          </p>
        </div>

        {/* Ligne de chargement */}
        <div className={`mt-12 transition-all duration-1000 transform ${
          stage === 'name' || stage === 'fade-out' ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'
        }`}>
          <div className="w-64 h-0.5 bg-stone-200 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-600 to-amber-700 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showHeroAnimation, setShowHeroAnimation] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    window.setTimeout(() => {
      setShowContent(true);
      setShowHeroAnimation(true);
    }, 100);
  };

  const whyUsFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: "25 ans d'expérience",
      description: "Un savoir-faire artisanal transmis de génération en génération"
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Labels Qualité",
      description: "Certifiés RGE et Artisan Qualité pour votre tranquillité"
    },
    {
      icon: <Leaf className="w-8 h-8 text-amber-600" />,
      title: "Bois local",
      description: "Matériaux sourcés en Auvergne pour un impact réduit"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Équipe passionnée",
      description: "Des artisans dévoués à l'excellence de chaque projet"
    }
  ];

  return (
    <>
      <SeoHead 
        title="L'Atelier du Volcan - Menuiserie haut de gamme en Auvergne"
        description="Menuiserie sur-mesure à Aurillac, Murat, Salers et alentours. Escaliers, aménagements intérieurs, terrasses en bois local. Artisans certifiés RGE."
        canonical="https://atelier-du-volcan.fr"
      />
      
      {/* Loading Intro */}
      {showIntro && <LoadingIntro onComplete={handleIntroComplete} />}
      
      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <Hero showAnimation={showHeroAnimation} />
          
          {/* Services Section */}
          <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-stone-900 mb-4">
                  Nos Services
                </h2>
                <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                  De l'aménagement intérieur aux terrasses extérieures, nous créons du sur-mesure
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 3).map((service) => (
                  <ServiceCard key={service.id} service={service} showButton />
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a 
                  href="/services" 
                  className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Voir tous nos services
                </a>
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-stone-900 mb-4">
                  Pourquoi Nous Choisir ?
                </h2>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                  Menuiserie sur-mesure à Aurillac, Murat, Salers et alentours. L'excellence artisanale au service de vos projets.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyUsFeatures.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Preview */}
          <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-stone-900 mb-4">
                  Nos Réalisations
                </h2>
                <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                  Découvrez quelques-unes de nos créations sur-mesure
                </p>
              </div>
              
              <ProjectGallery projects={projects.slice(0, 6)} showFilter={false} />
              
              <div className="text-center mt-12">
                <a 
                  href="/projects" 
                  className="inline-flex items-center px-8 py-3 bg-stone-800 text-white font-semibold rounded-lg hover:bg-stone-900 transition-colors"
                >
                  Voir toutes nos réalisations
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-stone-900 mb-4">
                  Témoignages Clients
                </h2>
                <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                  La satisfaction de nos clients est notre plus belle récompense
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.slice(0, 3).map((testimonial) => (
                  <Testimonial key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-white mb-6">
                Prêt à Concrétiser Votre Projet ?
              </h2>
              <p className="text-xl text-amber-100 mb-8">
                Contactez-nous pour un devis gratuit et personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Demander un devis
                </a>
                <a 
                  href="tel:+33471234567" 
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;