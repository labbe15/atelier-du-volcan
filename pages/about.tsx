import { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Team from '../components/Team';
import SeoHead from '../components/SeoHead';
import { Award, Leaf, Heart, Shield } from 'lucide-react';

const About: NextPage = () => {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Passion',
      description: 'Chaque projet est une œuvre d\'art unique, réalisée avec amour et dedication.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Écologie',
      description: 'Nous privilégions les bois locaux et les pratiques respectueuses de l\'environnement.'
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: 'Excellence',
      description: 'Un savoir-faire artisanal transmis de génération en génération depuis 25 ans.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Confiance',
      description: 'Certifiés RGE et Artisan Qualité, nous garantissons la qualité de nos prestations.'
    }
  ];

  const certifications = [
    { name: 'RGE Qualibois', description: 'Reconnu Garant de l\'Environnement' },
    { name: 'Artisan Qualité', description: 'Gage de savoir-faire et de confiance' },
    { name: 'FSC Certifié', description: 'Bois issu de forêts gérées durablement' },
    { name: 'Assurance Décennale', description: 'Protection complète de vos investissements' }
  ];

  return (
    <>
      <SeoHead 
        title="À propos - L'Atelier du Volcan"
        description="Découvrez L'Atelier du Volcan, menuiserie artisanale en Auvergne. 25 ans d'expérience, équipe passionnée, engagement écologique et labels qualité."
        canonical="https://atelier-du-volcan.fr/about"
      />
      
      <Header />
      <main>
        <div className="bg-stone-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-stone-900 mb-6">
                  L'Histoire de L'Atelier du Volcan
                </h1>
                <p className="text-xl text-stone-600 mb-6">
                  Depuis 1998, notre atelier perpétue les traditions de la menuiserie artisanale au cœur de l'Auvergne. Installés à proximité des volcans d'Auvergne, nous puisons notre inspiration dans la beauté naturelle de notre région.
                </p>
                <p className="text-lg text-stone-600 mb-8">
                  Notre philosophie est simple : allier le savoir-faire traditionnel aux techniques modernes pour créer des pièces uniques qui traverseront les générations. Chaque projet est une collaboration étroite avec nos clients pour donner vie à leurs rêves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Nous contacter
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-flex items-center px-6 py-3 border-2 border-stone-300 text-stone-700 font-semibold rounded-lg hover:border-stone-400 transition-colors"
                  >
                    Voir nos réalisations
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5691648/pexels-photo-5691648.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Artisan menuisier travaillant le bois"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Ce qui nous anime au quotidien et guide chacune de nos créations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-stone-50 rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-stone-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-gradient-to-r from-green-700 to-green-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6">
                  Notre Engagement Écologique
                </h2>
                <p className="text-xl text-green-100 mb-6">
                  L'Auvergne regorge de forêts magnifiques qui nous fournissent des essences de qualité exceptionnelle. En privilégiant les circuits courts, nous réduisons notre empreinte carbone tout en soutenant l'économie locale.
                </p>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-center">
                    <Leaf className="w-5 h-5 mr-3" />
                    Bois sourcés dans un rayon de 50km
                  </li>
                  <li className="flex items-center">
                    <Leaf className="w-5 h-5 mr-3" />
                    Partenariat avec des scieries locales certifiées
                  </li>
                  <li className="flex items-center">
                    <Leaf className="w-5 h-5 mr-3" />
                    Valorisation des chutes et résidus de bois
                  </li>
                  <li className="flex items-center">
                    <Leaf className="w-5 h-5 mr-3" />
                    Finitions écologiques sans solvants
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Forêt d'Auvergne"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">
                Labels & Certifications
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Des garanties officielles qui attestent de notre professionnalisme et de notre engagement qualité
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-6 border border-stone-200 rounded-lg hover:border-amber-300 transition-colors">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-stone-600 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <Team />

        {/* Timeline Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">
                Notre Parcours
              </h2>
              <p className="text-xl text-stone-600">
                25 années de passion et d'évolution
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { year: '1998', title: 'Création de l\'atelier', description: 'Jean-Pierre Volcan fonde l\'atelier avec une vision : créer du mobilier d\'exception.' },
                { year: '2005', title: 'Première certification', description: 'Obtention du label Artisan Qualité et agrandissement de l\'équipe.' },
                { year: '2012', title: 'Engagement écologique', description: 'Certification RGE et partenariat avec les scieries locales.' },
                { year: '2018', title: 'Transmission familiale', description: 'Marie Volcan rejoint l\'entreprise familiale avec de nouvelles idées.' },
                { year: '2023', title: 'Innovation continue', description: 'Intégration d\'outils numériques tout en préservant l\'artisanat traditionnel.' }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-amber-600">{milestone.year}</span>
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-stone-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Rejoignez Notre Histoire
            </h2>
            <p className="text-xl text-stone-300 mb-8">
              Faites confiance à notre expertise pour donner vie à vos projets les plus ambitieux
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Commencer votre projet
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;