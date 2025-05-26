
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO';

const ITManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout>
        <SEO 
          title="Infogérance | Supervision et maintenance IT" 
          description="Services d'infogérance incluant monitoring 24/7, gestion d'incidents, sauvegarde, restauration et maintenance informatique complète."
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
                <div className="bg-purple-100 p-4 rounded-full">
                  <Monitor className="h-8 w-8 text-purple-600" />
                </div>
                <h1 className="text-4xl font-bold">Infogérance</h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-8"
              >
                Supervision et maintenance complète de votre infrastructure informatique.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Centre de supervision informatique" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-purple-50 p-8 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-purple-700">Notre approche</h2>
                  <p className="text-gray-700 mb-4">
                    L'infogérance représente une solution complète pour déléguer la gestion de votre système d'information à une équipe d'experts. Notre service surveille, maintient et optimise votre parc informatique en continu pour vous permettre de vous concentrer sur votre cœur de métier.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Nous détectons et résolvons les problèmes avant qu'ils n'affectent votre activité, garantissant ainsi la continuité de vos opérations et la sécurité de vos données.
                  </p>
                  <div className="mt-6 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Équipe informatique en action" 
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
                  <h2 className="text-2xl font-semibold mb-4 text-purple-700">Nos services d'infogérance</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Monitoring 24/7</span>
                        <p className="text-gray-600 text-base mt-1">Surveillance continue de vos serveurs, réseaux et applications critiques</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Gestion des incidents</span>
                        <p className="text-gray-600 text-base mt-1">Détection et résolution rapide des problèmes techniques</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Sauvegarde et restauration</span>
                        <p className="text-gray-600 text-base mt-1">Protection et récupération de vos données essentielles</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Mises à jour et correctifs</span>
                        <p className="text-gray-600 text-base mt-1">Maintien à jour de vos systèmes pour garantir sécurité et performance</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Reporting et documentation</span>
                        <p className="text-gray-600 text-base mt-1">Rapports détaillés et documentation technique de votre infrastructure</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium">Gestion proactive</span>
                        <p className="text-gray-600 text-base mt-1">Anticipation des problèmes et optimisation continue</p>
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
                  className="bg-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Dashboard de supervision" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-purple-700">Supervision en temps réel</h3>
                    <p className="text-gray-600 text-sm">Tableaux de bord et alertes personnalisées</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                    alt="Serveurs en datacenter" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-purple-700">Infrastructure sécurisée</h3>
                    <p className="text-gray-600 text-sm">Gestion complète de vos serveurs</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1541560052-5e137f229371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                    alt="Protection des données" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-purple-700">Continuité d'activité</h3>
                    <p className="text-gray-600 text-sm">Solutions de sauvegarde et reprise</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Une infogérance sur mesure</h3>
                <p className="text-gray-700 mb-6">
                  Nos formules d'infogérance s'adaptent à vos besoins spécifiques, qu'il s'agisse d'une supervision ponctuelle ou d'une prise en charge complète de votre système d'information. Nous élaborons avec vous un contrat de service (SLA) précisant les niveaux de disponibilité garantis et les temps de réponse en cas d'incident.
                </p>
                
                <div className="bg-purple-500 text-white p-6 rounded-lg hover:bg-purple-600 transition-colors">
                  <p className="font-medium">
                    Contactez-nous pour une évaluation gratuite de vos besoins en infogérance et découvrir comment nos services peuvent sécuriser et optimiser votre infrastructure IT.
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

export default ITManagement;
