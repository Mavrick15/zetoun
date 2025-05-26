
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO';

const VideoSurveillance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout>
        <SEO 
          title="Vidéosurveillance & Sécurité | Installations adaptées" 
          description="Solutions complètes de vidéosurveillance comprenant étude de site, caméras HD, stockage local ou cloud, et intégration avec systèmes d'alarme."
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
                Installations de vidéosurveillance adaptées à vos besoins spécifiques de sécurité.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Centre de surveillance de sécurité" 
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
                  <h2 className="text-2xl font-semibold mb-4 text-red-700">Notre approche</h2>
                  <p className="text-gray-700 mb-4">
                    La sécurité de vos locaux commence par une analyse précise de vos besoins. Nous réalisons une étude complète de votre site pour identifier les points stratégiques et les vulnérabilités potentielles.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Notre expertise nous permet de vous recommander les équipements les plus adaptés et de concevoir une installation sur mesure, discrète mais efficace.
                  </p>
                  <div className="mt-6 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Analyse de site pour vidéosurveillance" 
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
                  <h2 className="text-2xl font-semibold mb-4 text-red-700">Nos solutions de sécurité</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Caméras HD intérieures et extérieures</span>
                        <p className="text-gray-600 text-base mt-1">Haute résolution, angle de vue optimisé, résistantes aux intempéries</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Vision nocturne et détection de mouvement</span>
                        <p className="text-gray-600 text-base mt-1">Enregistrement intelligent déclenché par événements pour économiser de l'espace</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Stockage sécurisé (local ou cloud)</span>
                        <p className="text-gray-600 text-base mt-1">Conservation des données conforme à la réglementation avec sauvegarde automatique</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Accès à distance via smartphone</span>
                        <p className="text-gray-600 text-base mt-1">Application mobile sécurisée pour surveillance en temps réel</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Intégration avec systèmes d'alarme</span>
                        <p className="text-gray-600 text-base mt-1">Coordination automatisée entre vidéosurveillance et système d'alarme</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Contrôle d'accès et identification</span>
                        <p className="text-gray-600 text-base mt-1">Reconnaissance faciale, badges et capteurs biométriques</p>
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
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Caméra de surveillance HD" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-red-700">Équipements de pointe</h3>
                    <p className="text-gray-600 text-sm">Caméras HD avec fonctions avancées</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551704164-ebe54fe4a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Centre de contrôle sécurité" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-red-700">Surveillance centralisée</h3>
                    <p className="text-gray-600 text-sm">Monitoring en temps réel et historique</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1562277345-c587f59d4d28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Contrôle d'accès sécurisé" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-red-700">Contrôle d'accès</h3>
                    <p className="text-gray-600 text-sm">Solutions sécurisées et évolutives</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-red-700">Une sécurité sur mesure</h3>
                <p className="text-gray-700 mb-6">
                  Que vous cherchiez à protéger un commerce, un bureau ou un site industriel, nous concevons des systèmes de vidéosurveillance adaptés à vos enjeux spécifiques, conformes à la réglementation et respectueux de la vie privée.
                </p>
                
                <div className="bg-red-500 text-white p-6 rounded-lg hover:bg-red-600 transition-colors">
                  <p className="font-medium">
                    Contactez-nous pour une évaluation gratuite de vos besoins en sécurité.
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
