
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Router } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO';

const NetworkEngineering = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout>
        <SEO 
          title="Ingénierie Réseau | Conception & installation réseau" 
          description="Nos services d'ingénierie réseau incluent conception d'architectures LAN/WAN, câblage structuré, configuration d'équipements, et sécurité réseau."
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
                <div className="bg-blue-100 p-4 rounded-full">
                  <Router className="h-8 w-8 text-blue-600" />
                </div>
                <h1 className="text-4xl font-bold">Ingénierie Réseau</h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-8"
              >
                Conception et mise en place d'infrastructures réseau performantes et sécurisées.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Infrastructure réseau moderne" 
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
                  <h2 className="text-2xl font-semibold mb-4 text-blue-700">Nos solutions réseau</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Conception d'architectures LAN/WAN évolutives</span>
                        <p className="text-gray-600 text-base mt-1">Optimisées pour répondre aux besoins actuels et futurs de votre entreprise</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Installation de câblage structuré professionnel</span>
                        <p className="text-gray-600 text-base mt-1">Fibre optique, cuivre catégorie 6A/7, certifications et tests de performance</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Configuration de routeurs et switches</span>
                        <p className="text-gray-600 text-base mt-1">Équipements managés de grade professionnel pour performance et fiabilité</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Mise en place de solutions Wi-Fi haute densité</span>
                        <p className="text-gray-600 text-base mt-1">Couverture optimale et gestion centralisée pour grandes surfaces</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Sécurisation de l'infrastructure réseau</span>
                        <p className="text-gray-600 text-base mt-1">Firewalls nouvelle génération, segmentation, détection d'intrusion</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Documentation technique détaillée</span>
                        <p className="text-gray-600 text-base mt-1">Schémas, rapports et documentation complète pour maintenance facile</p>
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
                  <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Notre approche</h2>
                    <p className="text-gray-700 mb-4">
                      Chaque entreprise a des besoins spécifiques en matière de réseau. Notre équipe d'experts analyse vos exigences pour concevoir une infrastructure sur mesure qui répond à vos besoins actuels tout en anticipant votre croissance future.
                    </p>
                    <p className="text-gray-700">
                      Nous privilégions la qualité des composants, la rigueur de l'installation et la documentation complète pour garantir la fiabilité et la pérennité de votre réseau.
                    </p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Configuration de matériel réseau" 
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
                  className="bg-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Centre de données moderne" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-blue-700">Infrastructure évolutive</h3>
                    <p className="text-gray-600 text-sm">Solutions adaptées aux PME et grandes entreprises</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Câblage réseau structuré" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-blue-700">Performance optimale</h3>
                    <p className="text-gray-600 text-sm">Matériel de pointe et configurations optimisées</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80" 
                    alt="Sécurité réseau" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-blue-700">Sécurité intégrée</h3>
                    <p className="text-gray-600 text-sm">Protection contre les menaces avancées</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Un réseau adapté à vos enjeux</h3>
                <p className="text-gray-700 mb-6">
                  Que vous soyez une PME en pleine croissance ou une grande entreprise avec des besoins complexes, nous concevons des architectures réseau qui s'adaptent à vos contraintes techniques et budgétaires. Notre objectif est de vous offrir une infrastructure fiable, performante et évolutive.
                </p>
                
                <div className="bg-blue-500 text-white p-6 rounded-lg hover:bg-blue-600 transition-colors">
                  <p className="font-medium">
                    Contactez-nous pour une étude personnalisée de vos besoins en infrastructure réseau.
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

export default NetworkEngineering;
