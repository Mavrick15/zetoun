import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO'; // Assurez-vous que le chemin est correct

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageLayout>
        {/* Composant SEO avec les balises méta optimisées */}
        <SEO
          title="Conception Web | Création Sites Internet & E-commerce - Zetoun Labs"
          description="Zetoun Labs conçoit des sites web professionnels à Kinshasa :
          sites vitrines, e-commerce, design responsive, optimisation SEO et maintenance continue pour votre activité."
          keywords={[
            'conception web',
            'création site internet',
            'développement web',
            'site vitrine',
            'e-commerce',
            'design responsive',
            'optimisation SEO',
            'intégration CMS',
            'maintenance web',
            'Zetoun Labs Kinshasa',
            'solutions web entreprises'
          ]}
          imageUrl="../lovable-uploads/services/2a.png"
        />

        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-6 space-x-4"
              >
                <div className="bg-green-100 p-4 rounded-full">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold">Conception Web</h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Zetoun Labs conçoit des solutions web sur mesure pour votre activité à Kinshasa,
                créant des plateformes performantes et adaptées à vos objectifs de croissance numérique.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
              >
                <img
                  src="../lovable-uploads/services/2a.png"
                  alt="Développement web moderne et design responsive pour entreprises" // Description alt plus spécifique
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Développement+Web"; // [Image of Web Development]
                    e.currentTarget.alt = "Image de remplacement pour le développement web";
                  }}
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-green-700">Notre offre de création et développement web</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Sites vitrines professionnels sur mesure</span>
                        <p className="text-gray-600 text-base mt-1">Design élégant reflétant l'image de votre
                          entreprise et ses valeurs, optimisé pour l'impact.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Solutions e-commerce complètes et sécurisées</span>
                        <p className="text-gray-600 text-base mt-1">Boutiques en ligne performantes avec gestion des
                          stocks, systèmes de paiement sécurisés et expérience client fluide.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Design responsive (mobile-first)</span>
                        <p className="text-gray-600 text-base mt-1">Expérience utilisateur optimale et affichage
                          parfait sur tous les appareils : ordinateurs, tablettes et smartphones.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Optimisation SEO avancée et performances web</span>
                        <p className="text-gray-600 text-base mt-1">Référencement naturel efficace pour une meilleure
                          visibilité sur Google et des temps de chargement ultra-rapides.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Intégration CMS (WordPress, Joomla, etc.)</span>
                        <p className="text-gray-600 text-base mt-1">Administration facile de votre contenu via des
                          interfaces intuitives pour une autonomie totale.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Support technique et maintenance continue</span>
                        <p className="text-gray-600 text-base mt-1">Assistance technique réactive et évolution
                          permanente de votre site. Découvrez aussi notre service de
                          <Link to="/services/technical-support" className="text-green-600 hover:underline font-semibold">support technique informatique</Link>.
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col space-y-8"
                >
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-green-700">Notre méthodologie de conception web</h2>
                    <p className="text-gray-700 mb-4">
                      La création d'un site web efficace passe par une compréhension approfondie de votre activité,
                      de vos objectifs et de votre public cible. Chez Zetoun Labs, nous travaillons en étroite
                      collaboration avec vous à Kinshasa pour concevoir une solution web qui reflète votre identité
                      et répond précisément à vos attentes.
                    </p>
                    <p className="text-gray-700">
                      Notre approche privilégie la simplicité d'utilisation, un design moderne et les performances
                      techniques pour garantir une expérience utilisateur optimale et un référencement solide.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src="../lovable-uploads/services/2b.png"
                      alt="Design web responsive et adaptatif sur différents appareils" // Description alt plus spécifique
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Design+Responsive"; // [Image of Responsive Design]
                        e.currentTarget.alt = "Image de remplacement pour le design web responsive";
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-green-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="../lovable-uploads/services/2c.png"
                    alt="Design UI/UX moderne pour sites web intuitifs" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=UI%2FUX+Design"; // [Image of UI/UX Design]
                      e.currentTarget.alt = "Image de remplacement pour le design UI/UX";
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-green-700">Design UI/UX intuitif</h3>
                    <p className="text-gray-600 text-sm">Interfaces utilisateurs intuitives et esthétiques pour une expérience optimale.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-green-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="/lovable-uploads/services/2d.png"
                    alt="Solution e-commerce complète pour la vente en ligne" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=E-commerce"; // [Image of E-commerce Solution]
                      e.currentTarget.alt = "Image de remplacement pour la solution e-commerce";
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-green-700">E-commerce performant</h3>
                    <p className="text-gray-600 text-sm">Solutions de vente en ligne complètes et sécurisées pour maximiser vos ventes.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-green-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="/lovable-uploads/services/2e.png"
                    alt="Analyse SEO et optimisation de la performance web" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=SEO+%26+Performance"; // [Image of SEO & Performance]
                      e.currentTarget.alt = "Image de remplacement pour l'analyse SEO et optimisation de la performance web";
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-green-700">SEO & Performance web</h3>
                    <p className="text-gray-600 text-sm">Optimisation pour les moteurs de recherche et amélioration des temps de chargement.</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-700">Un site web professionnel à votre image avec Zetoun Labs à Kinshasa</h3>
                <p className="text-gray-700 mb-6">
                  Que vous ayez besoin d'une simple vitrine numérique ou d'un site e-commerce complet,
                  Zetoun Labs vous accompagne dans toutes les étapes de votre projet web. De la conception initiale à la mise en ligne,
                  en passant par l'hébergement et la maintenance, nous garantissons une solution web
                  qui renforce votre présence en ligne et atteint vos objectifs commerciaux.
                </p>

                <div className="bg-green-500 text-white p-6 rounded-lg hover:bg-green-600 transition-colors">
                  <p className="font-medium">
                    Contactez-nous pour discuter de votre projet de conception web et obtenir un devis personnalisé
                    pour une solution sur mesure à Kinshasa.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default WebDevelopment;
