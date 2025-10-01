import { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import SeoHead from '../components/SeoHead';

const Privacy: NextPage = () => {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Politique de confidentialité', href: '/privacy' }
  ];

  return (
    <>
      <SeoHead 
        title="Politique de confidentialité - L'Atelier du Volcan"
        description="Politique de confidentialité et protection des données personnelles de L'Atelier du Volcan. RGPD conforme."
        canonical="https://atelier-du-volcan.fr/privacy"
        robots="noindex, nofollow"
      />
      
      <Header />
      <main>
        <div className="bg-stone-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-stone-900 mb-8">
              Politique de Confidentialité
            </h1>
            
            <div className="prose prose-stone max-w-none">
              <p className="text-lg text-stone-600 mb-8">
                <strong>Dernière mise à jour :</strong> 1er janvier 2025
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                1. Responsable du traitement
              </h2>
              <p className="text-stone-600 mb-6">
                L'Atelier du Volcan, SARL au capital de 50 000 €, immatriculée au RCS d'Aurillac sous le numéro 123 456 789, ayant son siège social au 123 Route des Volcans, 15000 Aurillac, France.
              </p>
              <p className="text-stone-600 mb-6">
                <strong>Contact :</strong> contact@atelier-du-volcan.fr - +33 4 71 23 45 67
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                2. Données collectées
              </h2>
              <p className="text-stone-600 mb-4">
                Nous collectons les données suivantes dans le cadre de nos services :
              </p>
              <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
                <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                <li><strong>Données de contact :</strong> adresse postale, informations sur votre projet</li>
                <li><strong>Données de navigation :</strong> cookies, adresse IP, données de connexion</li>
                <li><strong>Données de communication :</strong> échanges par email, téléphone ou courrier</li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                3. Finalités et bases légales
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    Gestion des demandes de devis et services
                  </h3>
                  <p className="text-stone-600">
                    <strong>Base légale :</strong> Exécution de mesures précontractuelles et contractuelles<br/>
                    <strong>Données concernées :</strong> Toutes les données d'identification et de contact<br/>
                    <strong>Durée de conservation :</strong> 3 ans après la fin de la relation commerciale
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    Communication marketing
                  </h3>
                  <p className="text-stone-600">
                    <strong>Base légale :</strong> Consentement (opt-in) ou intérêt légitime (clients existants)<br/>
                    <strong>Données concernées :</strong> Email, nom, préférences<br/>
                    <strong>Durée de conservation :</strong> Jusqu'au retrait du consentement ou 3 ans d'inactivité
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    Amélioration de nos services
                  </h3>
                  <p className="text-stone-600">
                    <strong>Base légale :</strong> Intérêt légitime<br/>
                    <strong>Données concernées :</strong> Données de navigation, retours clients<br/>
                    <strong>Durée de conservation :</strong> 25 mois maximum
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                4. Destinataires des données
              </h2>
              <p className="text-stone-600 mb-4">
                Vos données peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
                <li>Notre équipe interne (commerciaux, artisans, administration)</li>
                <li>Nos sous-traitants techniques (hébergement, maintenance, outils de communication)</li>
                <li>Nos partenaires commerciaux (sur consentement explicite uniquement)</li>
                <li>Les autorités compétentes en cas d'obligation légale</li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                5. Transferts internationaux
              </h2>
              <p className="text-stone-600 mb-6">
                Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types, Privacy Shield, etc.).
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                6. Vos droits
              </h2>
              <p className="text-stone-600 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement pour des raisons légitimes</li>
                <li><strong>Droit de retrait du consentement :</strong> annuler votre consentement à tout moment</li>
              </ul>
              <p className="text-stone-600 mb-6">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:dpo@atelier-du-volcan.fr" className="text-amber-600 hover:text-amber-700">dpo@atelier-du-volcan.fr</a>
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                7. Cookies et traceurs
              </h2>
              <p className="text-stone-600 mb-4">
                Notre site utilise différents types de cookies :
              </p>
              <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
                <li><strong>Cookies techniques :</strong> nécessaires au fonctionnement du site (pas de consentement requis)</li>
                <li><strong>Cookies de mesure d'audience :</strong> Google Analytics (consentement requis)</li>
                <li><strong>Cookies marketing :</strong> publicité ciblée (consentement requis)</li>
              </ul>
              <p className="text-stone-600 mb-6">
                Vous pouvez gérer vos préférences via notre bandeau de consentement ou les paramètres de votre navigateur.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                8. Sécurité des données
              </h2>
              <p className="text-stone-600 mb-6">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction. Nos systèmes sont régulièrement mis à jour et nos équipes formées à la protection des données.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                9. Réclamations
              </h2>
              <p className="text-stone-600 mb-6">
                Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
              </p>
              <p className="text-stone-600 mb-6">
                <strong>CNIL</strong><br/>
                3 Place de Fontenoy - TSA 80715<br/>
                75334 PARIS CEDEX 07<br/>
                Tél : 01 53 73 22 22<br/>
                <a href="https://www.cnil.fr" className="text-amber-600 hover:text-amber-700">www.cnil.fr</a>
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                10. Modifications
              </h2>
              <p className="text-stone-600 mb-6">
                Cette politique de confidentialité peut être modifiée à tout moment. Nous vous informerons de toute modification substantielle par email ou via une notification sur notre site. La version en vigueur est toujours disponible sur cette page avec sa date de dernière mise à jour.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">
                11. Contact
              </h2>
              <p className="text-stone-600 mb-6">
                Pour toute question relative à cette politique de confidentialité ou au traitement de vos données personnelles, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
                <li><strong>Email :</strong> <a href="mailto:dpo@atelier-du-volcan.fr" className="text-amber-600 hover:text-amber-700">dpo@atelier-du-volcan.fr</a></li>
                <li><strong>Téléphone :</strong> +33 4 71 23 45 67</li>
                <li><strong>Courrier :</strong> L'Atelier du Volcan - 123 Route des Volcans - 15000 Aurillac</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;