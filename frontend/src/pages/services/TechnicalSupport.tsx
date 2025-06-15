import PageLayout from '@/components/PageLayout';
import { ArrowLeft, HeadsetIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO'; // Assurez-vous que le chemin est correct

const TechnicalSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout>
        {/* Composant SEO avec les balises méta optimisées */}
        <SEO
          title="Support Technique Informatique | Assistance IT Réactive - Zetoun Labs"
          description="Bénéficiez d'un support technique informatique rapide et fiable avec Zetoun Labs à Kinshasa : assistance multi-canal, dépannage à distance, interventions sur site et formation utilisateur."
          keywords={[
            'support technique',
            'assistance informatique',
            'dépannage informatique',
            'helpdesk IT',
            'support utilisateur',
            'prise en main à distance',
            'intervention sur site informatique',
            'hotline entreprises',
            'formation informatique',
            'Zetoun Labs Kinshasa'
          ]}
          imageUrl="../lovable-uploads/services/3a.png"
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
                <div className="bg-amber-100 p-4 rounded-full">
                  <HeadsetIcon className="h-8 w-8 text-amber-600" />
                </div>
                <h1 className="text-4xl font-bold">Support Technique Informatique</h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-8"
              >
                Zetoun Labs offre une assistance technique réactive et efficace à Kinshasa, garantissant la résolution rapide de tous vos problèmes informatiques pour maintenir la continuité de votre activité.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
              >
                <img 
                  src="../lovable-uploads/services/3a.png" 
                  alt="Centre d'assistance technique avec opérateurs support informatique" // Description alt plus spécifique
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-amber-700">Nos services d'assistance informatique</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-amber-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Support utilisateur multi-canal</span>
                        <p className="text-gray-600 text-base mt-1">Assistance complète par téléphone, email, chat ou visioconférence pour toutes vos requêtes.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-amber-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Assistance téléphonique prioritaire</span>
                        <p className="text-gray-600 text-base mt-1">Ligne directe avec un temps d'attente minimal pour les urgences informatiques.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-amber-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Prise en main à distance sécurisée</span>
                        <p className="text-gray-600 text-base mt-1">Intervention rapide et sécurisée sur vos systèmes sans nécessiter de déplacement.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-amber-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Intervention sur site si nécessaire</span>
                        <p className="text-gray-600 text-base mt-1">Techniciens qualifiés disponibles pour les problèmes matériels ou réseau complexes.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-amber-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Hotline dédiée pour entreprises</span>
                        <p className="text-gray-600 text-base mt-1">Service personnalisé avec un interlocuteur privilégié pour une gestion fluide de vos demandes.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-amber-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Formation et sensibilisation des utilisateurs</span>
                        <p className="text-gray-600 text-base mt-1">Sessions de formation sur mesure pour votre équipe afin de renforcer l'autonomie et la sécurité informatique. Cela complète nos services d'<Link to="/services/it-management" className="text-amber-600 hover:underline font-semibold">infogérance IT</Link>.</p> {/* Lien interne ajouté */}
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
                  <div className="bg-amber-50 p-8 rounded-xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-amber-700">Notre philosophie d'intervention</h2>
                    <p className="text-gray-700 mb-4">
                      Un problème informatique peut rapidement paralyser votre activité. Notre équipe de techniciens qualifiés à Kinshasa intervient dans les plus brefs délais pour diagnostiquer et résoudre vos incidents, qu'il s'agisse de problèmes matériels, logiciels ou réseau.
                    </p>
                    <p className="text-gray-700">
                      Nous privilégions les solutions pérennes plutôt que les correctifs temporaires, et nous expliquons clairement les origines du problème pour éviter qu'il ne se reproduise. Notre objectif est votre tranquillité d'esprit numérique.
                    </p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src="../lovable-uploads/services/3b.png" 
                      alt="Technicien de support informatique travaillant sur un ordinateur" // Description alt plus spécifique
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-amber-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="../lovable-uploads/services/3c.png" 
                    alt="Support informatique à distance pour résolution rapide" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-amber-700">Support à distance</h3>
                    <p className="text-gray-600 text-sm">Intervention rapide et efficace sans déplacement, où que vous soyez à Kinshasa.</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-amber-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="../lovable-uploads/services/3d.png" 
                    alt="Formation des utilisateurs sur les outils informatiques" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-amber-700">Formation et sensibilisation</h3>
                    <p className="text-gray-600 text-sm">Accompagnement de vos équipes pour une meilleure utilisation et sécurité de l'IT.</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-amber-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="../lovable-uploads/services/3e.png" 
                    alt="Intervention technique sur site pour dépannage complexe" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-amber-700">Intervention sur site</h3>
                    <p className="text-gray-600 text-sm">Nos techniciens qualifiés se déplacent pour les diagnostics et réparations complexes.</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Un support informatique adapté à vos besoins à Kinshasa</h3>
                <p className="text-gray-700 mb-6">
                  Que vous soyez une petite entreprise avec quelques postes ou une structure plus importante avec des besoins spécifiques, Zetoun Labs propose des formules de support technique adaptées à votre taille et à vos contraintes opérationnelles à Kinshasa. Nous sommes votre partenaire de confiance pour une informatique sans souci.
                </p>
                
                <div className="bg-amber-500 text-white p-6 rounded-lg hover:bg-amber-600 transition-colors">
                  <p className="font-medium">
                    Contactez-nous pour découvrir nos formules de support informatique et bénéficier d'une assistance rapide et efficace à Kinshasa.
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

export default TechnicalSupport;
