import { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import Breadcrumb from '../components/Breadcrumb';
import SeoHead from '../components/SeoHead';
import { services } from '../utils/mockData';

const Services: NextPage = () => {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' }
  ];

  const serviceCategories = [
    {
      title: 'Menuiserie Intérieure',
      description: 'Aménagements sur-mesure pour sublimer vos espaces de vie',
      services: services.filter(s => s.category === 'interior')
    },
    {
      title: 'Menuiserie Extérieure', 
      description: 'Terrasses, pergolas et aménagements pour vos extérieurs',
      services: services.filter(s => s.category === 'exterior')
    },
    {
      title: 'Escaliers',
      description: 'Escaliers d\'exception, droits, hélicoïdaux ou sur-mesure',
      services: services.filter(s => s.category === 'stairs')
    }
  ];

  return (
    <>
      <SeoHead 
        title="Services de Menuiserie - L'Atelier du Volcan"
        description="Découvrez tous nos services de menuiserie : aménagements intérieurs, terrasses, escaliers sur-mesure. Artisans menuisiers en Auvergne."
        canonical="https://atelier-du-volcan.fr/services"
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
                Nos Services de Menuiserie
              </h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Du mobilier sur-mesure aux aménagements extérieurs, découvrez l'étendue de notre savoir-faire artisanal en menuiserie haut de gamme.
              </p>
            </div>

            {serviceCategories.map((category, index) => (
              <div key={index} className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-stone-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <ServiceCard key={service.id} service={service} showButton />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">
                Notre Processus
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                De l'idée à la réalisation, nous vous accompagnons à chaque étape
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Consultation', description: 'Échange sur vos besoins et visite des lieux' },
                { step: '2', title: 'Conception', description: 'Création des plans et choix des matériaux' },
                { step: '3', title: 'Fabrication', description: 'Réalisation artisanale dans notre atelier' },
                { step: '4', title: 'Installation', description: 'Pose professionnelle et finitions soignées' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-600 text-white font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Un Projet en Tête ?
            </h2>
            <p className="text-xl text-stone-200 mb-8">
              Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Demander un devis gratuit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;