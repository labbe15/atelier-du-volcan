'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectGallery from '../components/ProjectGallery';
import Breadcrumb from '../components/Breadcrumb';
import Testimonial from '../components/Testimonial';
import SeoHead from '../components/SeoHead';
import { projects, testimonials } from '../utils/mockData';

const Projects: NextPage = () => {
  const [filter, setFilter] = useState<'all' | 'interior' | 'exterior'>('all');

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Réalisations', href: '/projects' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <SeoHead 
        title="Réalisations - L'Atelier du Volcan"
        description="Découvrez nos réalisations de menuiserie : escaliers, aménagements intérieurs, terrasses. Photos avant/après de nos projets en Auvergne."
        canonical="https://atelier-du-volcan.fr/projects"
      />
      
      <Header />
      <main>
        <div className="bg-stone-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-stone-900 mb-6">
                Nos Réalisations
              </h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Découvrez quelques-unes de nos créations sur-mesure réalisées pour nos clients en Auvergne. Chaque projet est unique et reflète notre passion pour l'artisanat du bois.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-stone-100 rounded-lg p-1">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    filter === 'all' 
                      ? 'bg-white text-stone-900 shadow-sm' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Tous les projets
                </button>
                <button
                  onClick={() => setFilter('interior')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    filter === 'interior' 
                      ? 'bg-white text-stone-900 shadow-sm' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Intérieur
                </button>
                <button
                  onClick={() => setFilter('exterior')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    filter === 'exterior' 
                      ? 'bg-white text-stone-900 shadow-sm' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Extérieur
                </button>
              </div>
            </div>

            <ProjectGallery projects={filteredProjects} showFilter={false} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">
                Ce Que Disent Nos Clients
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Leurs témoignages sont la preuve de notre engagement qualité
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Testimonial key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '300+', label: 'Projets réalisés' },
                { number: '25', label: 'Années d\'expérience' },
                { number: '98%', label: 'Clients satisfaits' },
                { number: '100%', label: 'Bois local' }
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-amber-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-stone-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Votre Projet Commence Ici
            </h2>
            <p className="text-xl text-stone-300 mb-8">
              Inspiré par nos réalisations ? Contactez-nous pour créer quelque chose d'unique ensemble
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;