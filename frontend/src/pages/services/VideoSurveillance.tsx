import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO'; // Assurez-vous que le chemin est correct

const VideoSurveillance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageLayout>
        {/* Composant SEO avec les balises méta optimisées */}
        <SEO
          title="Vidéosurveillance & Sécurité | Installation Caméras - Zetoun Labs"
          description="Protégez vos locaux avec les solutions de vidéosurveillance de Zetoun Labs à Kinshasa : caméras HD, détection de mouvement, stockage sécurisé et intégration avec systèmes d'alarme."
          keywords={[
            'vidéosurveillance',
            'sécurité',
            'installation caméras',
            'caméra HD',
            'système d alarme',
            'contrôle accès',
            'détection mouvement',
            'stockage vidéo cloud',
            'Zetoun Labs Kinshasa',
            'protection locaux'
          ]}
          imageUrl="../lovable-uploads/services/1a.png" 
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
                <div className="bg-red-100 p-4 rounded-full">
                  <Camera className="h-8 w-8 text-red-600" />
                </div>
                <h1 className="text-4xl font-bold">Vidéosurveillance & Sécurité</h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Zetoun Labs propose des solutions de vidéosurveillance et sécurité sur mesure à Kinshasa, garantissant la protection de vos biens et de vos locaux grâce à des installations adaptées et performantes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
              >
                <img
                  src="../lovable-uploads/services/1a.png"
                  alt="Centre de surveillance de sécurité vidéo pour entreprises" // Description alt plus spécifique
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-red-50 p-8 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-red-700">Notre approche de la sécurité par vidéosurveillance</h2>
                  <p className="text-gray-700 mb-4">
                    La sécurité de vos locaux commence par une analyse précise de vos besoins. Nous réalisons une étude complète de votre site pour identifier les points stratégiques et les vulnérabilités potentielles, à Kinshasa et ses environs.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Notre expertise nous permet de vous recommander les équipements les plus adaptés et de concevoir une installation sur mesure, discrète mais efficace, pour une protection optimale de vos biens.
                  </p>
                  <div className="mt-6 rounded-lg overflow-hidden">
                    <img
                      src="../lovable-uploads/services/1b.png"
                      alt="Analyse de site pour l'installation de systèmes de vidéosurveillance" // Description alt plus spécifique
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-red-700">Nos solutions complètes de sécurité et vidéosurveillance</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Caméras HD intérieures et extérieures</span>
                        <p className="text-gray-600 text-base mt-1">Haute résolution, grand angle de vue et résistantes aux intempéries pour une surveillance optimale.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Vision nocturne et détection de mouvement avancée</span>
                        <p className="text-gray-600 text-base mt-1">Enregistrement intelligent déclenché par événements, optimisant l'espace de stockage.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Stockage sécurisé (Local ou Cloud)</span>
                        <p className="text-gray-600 text-base mt-1">Conservation des données conforme à la réglementation avec sauvegarde automatique et récupération rapide.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Accès à distance via smartphone et alertes</span>
                        <p className="text-gray-600 text-base mt-1">Application mobile sécurisée pour une surveillance en temps réel et des notifications immédiates.</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Intégration avec systèmes d'alarme et infogérance</span>
                        <p className="text-gray-600 text-base mt-1">Coordination automatisée entre votre vidéosurveillance et votre système d'alarme. Pensez aussi à notre service d'<Link to="/services/it-management" className="text-red-600 hover:underline font-semibold">infogérance IT</Link> pour une gestion globale.</p> {/* Lien interne ajouté */}
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Contrôle d'accès et identification avancée</span>
                        <p className="text-gray-600 text-base mt-1">Solutions incluant reconnaissance faciale, badges et capteurs biométriques pour une sécurité renforcée.</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="/lovable-uploads/services/1c.png"
                    alt="Caméra de surveillance HD haute résolution pour une protection optimale" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-red-700">Équipements de pointe</h3>
                    <p className="text-gray-600 text-sm">Caméras HD avec fonctions avancées de détection et vision nocturne.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="/lovable-uploads/services/1d.png" alt="Centre de contrôle de sécurité pour la surveillance centralisée" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-red-700">Surveillance centralisée</h3>
                    <p className="text-gray-600 text-sm">Monitoring en temps réel et accès à l'historique des événements sécurisés.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="/lovable-uploads/services/1e.png"
                    alt="Système de contrôle d'accès sécurisé pour une gestion des entrées" // Description alt plus spécifique
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-red-700">Contrôle d'accès intégré</h3>
                    <p className="text-gray-600 text-sm">Solutions sécurisées et évolutives pour la gestion des accès à vos locaux.</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-red-700">Une sécurité sur mesure pour votre tranquillité d'esprit à Kinshasa</h3>
                <p className="text-gray-700 mb-6">
                  Que vous cherchiez à protéger un commerce, un bureau, un entrepôt ou un site industriel, Zetoun Labs conçoit des systèmes de vidéosurveillance adaptés à vos enjeux spécifiques. Nos solutions sont conformes à la réglementation locale et respectueuses de la vie privée, vous offrant une sécurité complète et une tranquillité d'esprit totale.
                </p>

                <div className="bg-red-500 text-white p-6 rounded-lg hover:bg-red-600 transition-colors">
                  <p className="font-medium">
                    Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos besoins en sécurité et découvrez comment Zetoun Labs peut protéger efficacement vos actifs à Kinshasa.
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

export default VideoSurveillance;
