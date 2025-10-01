import { Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Jean-Pierre Volcan',
      role: 'Fondateur & Maître Artisan',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '25 ans d\'expérience en menuiserie traditionnelle. Passionné par les techniques ancestrales et la transmission du savoir-faire.',
      email: 'jp.volcan@atelier-du-volcan.fr',
      linkedin: '#'
    },
    {
      name: 'Marie Volcan',
      role: 'Designer & Responsable Commercial',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Diplômée en design d\'espace, elle apporte une vision moderne à nos créations tout en respectant l\'authenticité du bois.',
      email: 'marie.volcan@atelier-du-volcan.fr',
      linkedin: '#'
    },
    {
      name: 'Thomas Dubois',
      role: 'Chef d\'Atelier',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Spécialiste des escaliers complexes et des structures sur-mesure. 15 ans d\'expérience dans la menuiserie de précision.',
      email: 'thomas.dubois@atelier-du-volcan.fr',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Des artisans passionnés unis par l'amour du bois et l'excellence artisanale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-amber-200">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 bg-stone-100 rounded-full hover:bg-amber-100 transition-colors"
                    aria-label={`Envoyer un email à ${member.name}`}
                  >
                    <Mail className="w-5 h-5 text-stone-600" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-stone-100 rounded-full hover:bg-amber-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Profil LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5 text-stone-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">
              Rejoignez Notre Équipe
            </h3>
            <p className="text-stone-600 mb-6">
              Nous recherchons toujours des artisans passionnés pour rejoindre notre atelier. 
              Si vous partagez nos valeurs d'excellence et d'authenticité, contactez-nous !
            </p>
            <a
              href="mailto:recrutement@atelier-du-volcan.fr"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Postuler maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;