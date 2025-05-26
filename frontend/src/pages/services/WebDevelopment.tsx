
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO';

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout>
        <SEO 
          title="Conception Web | Solutions web pour entreprises" 
          description="Création de sites internet vitrines et e-commerce, responsive design, optimisation SEO, et support technique continu."
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
                Solutions web taillées pour votre activité et adaptées à vos objectifs.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Développement web moderne" 
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
                  <h2 className="text-2xl font-semibold mb-4 text-green-700">Notre offre web</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Sites vitrines professionnels</span>
                        <p className="text-gray-600 text-base mt-1">Design élégant à l'image de votre entreprise et de vos valeurs</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Solutions e-commerce complètes</span>
                        <p className="text-gray-600 text-base mt-1">Boutiques en ligne avec gestion des stocks et paiements sécurisés</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Design responsive (mobile-first)</span>
                        <p className="text-gray-600 text-base mt-1">Expérience utilisateur optimale sur tous les appareils</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Optimisation SEO et performances</span>
                        <p className="text-gray-600 text-base mt-1">Référencement naturel efficace pour une meilleure visibilité</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Intégration CMS (WordPress, etc.)</span>
                        <p className="text-gray-600 text-base mt-1">Administration facile de votre contenu via des interfaces intuitives</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-green-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Support et maintenance continue</span>
                        <p className="text-gray-600 text-base mt-1">Assistance technique et évolution permanente de votre site</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-green-700">Notre méthodologie</h2>
                    <p className="text-gray-700 mb-4">
                      La création d'un site web efficace passe par une compréhension approfondie de votre activité, de vos objectifs et de votre public cible. Nous travaillons en étroite collaboration avec vous pour concevoir une solution web qui reflète votre identité et répond à vos attentes.
                    </p>
                    <p className="text-gray-700">
                      Notre approche privilégie la simplicité d'utilisation, le design moderne et les performances techniques pour garantir une expérience utilisateur optimale.
                    </p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Design web responsive" 
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
                  className="bg-green-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Design UI/UX moderne" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-green-700">Design UI/UX</h3>
                    <p className="text-gray-600 text-sm">Interfaces intuitives et esthétiques</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-green-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" 
                    alt="E-commerce développement" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-green-700">E-commerce</h3>
                    <p className="text-gray-600 text-sm">Solutions de vente en ligne complètes</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-green-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" 
                    alt="Analyse SEO et performance" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-green-700">SEO & Performance</h3>
                    <p className="text-gray-600 text-sm">Optimisation pour les moteurs de recherche</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-700">Un site web à votre image</h3>
                <p className="text-gray-700 mb-6">
                  Que vous ayez besoin d'une simple vitrine ou d'un site e-commerce complet, nous vous accompagnons dans toutes les étapes du projet, de la conception initiale à la mise en ligne, en passant par l'hébergement et la maintenance.
                </p>
                
                <div className="bg-green-500 text-white p-6 rounded-lg hover:bg-green-600 transition-colors">
                  <p className="font-medium">
                    Contactez-nous pour discuter de votre projet web et obtenir un devis personnalisé.
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
