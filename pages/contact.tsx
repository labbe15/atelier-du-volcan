'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import SeoHead from '../components/SeoHead';
import { contactFormSchema, ContactFormData } from '../types/Form';
import { MapPin, Phone, Mail, Clock, Upload, CheckCircle } from 'lucide-react';

const Contact: NextPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Contact', href: '/contact' }
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      content: '123 Route des Volcans\n15000 Aurillac, France'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      content: '+33 4 71 23 45 67',
      link: 'tel:+33471234567'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@atelier-du-volcan.fr',
      link: 'mailto:contact@atelier-du-volcan.fr'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      content: 'Lun-Ven: 8h-18h\nSam: 9h-12h'
    }
  ];

  const projectTypes = [
    'Escalier sur-mesure',
    'Aménagement intérieur',
    'Dressing / Placard',
    'Cuisine équipée',
    'Terrasse / Pergola',
    'Mobilier sur-mesure',
    'Autre projet'
  ];

  return (
    <>
      <SeoHead 
        title="Contact - L'Atelier du Volcan"
        description="Contactez L'Atelier du Volcan pour votre projet de menuiserie. Devis gratuit, conseil personnalisé. Aurillac, Murat, Salers - Auvergne."
        canonical="https://atelier-du-volcan.fr/contact"
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
                Contactez-Nous
              </h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Vous avez un projet ? Parlons-en ensemble. Notre équipe vous accompagne de l'idée à la réalisation pour créer du sur-mesure qui vous ressemble.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8">
                  Demander un Devis Gratuit
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      Merci pour votre demande !
                    </h3>
                    <p className="text-green-700 mb-6">
                      Nous avons bien reçu votre demande de devis. Notre équipe vous contactera dans les 24h pour discuter de votre projet.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Faire une nouvelle demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          {...register('firstName')}
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Votre prénom"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">
                          Nom *
                        </label>
                        <input
                          {...register('lastName')}
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Votre nom"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="votre@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="06 12 34 56 78"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-stone-700 mb-2">
                        Type de projet *
                      </label>
                      <select
                        {...register('projectType')}
                        id="projectType"
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez votre projet</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Décrivez-nous votre projet : dimensions, matériaux souhaités, délais, budget approximatif..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Joindre des fichiers (optionnel)
                      </label>
                      <div className="border-2 border-dashed border-stone-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                        <p className="text-stone-600">
                          Glissez vos fichiers ici ou cliquez pour sélectionner
                        </p>
                        <p className="text-sm text-stone-500 mt-1">
                          Photos, plans, croquis... (Max 10MB)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input
                        {...register('consent')}
                        type="checkbox"
                        id="consent"
                        className="mt-1 h-4 w-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500"
                      />
                      <label htmlFor="consent" className="ml-3 text-sm text-stone-600">
                        J'accepte que mes données personnelles soient utilisées pour me recontacter concernant ma demande. *
                        <a href="/privacy" className="text-amber-600 hover:text-amber-700 ml-1">
                          Voir notre politique de confidentialité
                        </a>
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-sm text-red-600">{errors.consent.message}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8">
                  Nos Coordonnées
                </h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                        {info.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-stone-900 mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-stone-600 hover:text-amber-600 transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-stone-600 whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action Mobile */}
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-stone-900 mb-4">
                    Besoin d'une réponse rapide ?
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Appelez-nous directement pour un conseil immédiat
                  </p>
                  <a 
                    href="tel:+33471234567"
                    className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors w-full justify-center sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler maintenant
                  </a>
                </div>

                {/* Map Placeholder */}
                <div className="bg-stone-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-stone-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-semibold">Carte Google Maps</p>
                    <p className="text-sm">L'Atelier du Volcan - Aurillac</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">
              Zone d'Intervention
            </h2>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Nous intervenons dans tout le Cantal et les départements limitrophes pour vos projets de menuiserie sur-mesure.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                'Aurillac', 'Murat', 'Salers', 'Saint-Flour', 'Maurs', 'Vic-sur-Cère',
                'Mauriac', 'Pleaux', 'Montsalvy', 'Arpajon-sur-Cère', 'Ytrac', 'Reilhac'
              ].map((city) => (
                <div key={city} className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-stone-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;