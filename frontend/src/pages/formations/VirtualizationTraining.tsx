import { ArrowLeft, Server, Monitor, Layers, Box, Computer, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const VirtualizationTraining = () => {
  // Fait défiler la page vers le haut au montage du composant
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Définit les propriétés d'animation communes pour les éléments de liste
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <PageLayout>
      {/* Composant SEO avec les balises méta optimisées */}
      <SEO
        title="Formation Virtualisation | Hyperviseurs, VM & Conteneurs - Zetoun Labs Kinshasa"
        description="Maîtrisez la virtualisation avec Zetoun Labs à Kinshasa : apprenez les concepts, les hyperviseurs (VirtualBox, VMware, KVM),
        la création et la gestion de machines virtuelles (VMs), les réseaux virtuels et les conteneurs (Docker) pour une infrastructure agile."
        keywords={[
          'formation virtualisation',
          'hyperviseurs',
          'VirtualBox',
          'VMware',
          'KVM',
          'machines virtuelles',
          'gestion VM',
          'réseaux virtuels',
          'conteneurs Docker',
          'virtualisation IT Kinshasa',
          'Zetoun Labs Kinshasa'
        ]}
        imageUrl="../lovable-uploads/training/5a.png" // Chemin d'image mis à jour
      />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>

            <motion.div
              className="relative h-64 md:h-80 w-full mb-12 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="../lovable-uploads/training/5a.png"
                alt="Concepts de virtualisation et serveurs virtuels" // Alt text optimisé
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" // Modifié de object-contain à object-cover
                onError={(e) => {
                  e.currentTarget.onerror = null; // Empêche la boucle infinie en cas d'erreur de chargement
                  e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Formation+Virtualisation"; // Placeholder générique
                  e.currentTarget.alt = "Image de remplacement pour la formation virtualisation";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl sm:text-4xl font-bold mb-2 text-white"
                  >
                    Formation à la Virtualisation
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base sm:text-lg text-white/90"
                  >
                    Cette formation complète initie aux concepts, outils et pratiques essentiels de la virtualisation moderne.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              {/* Section d'introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Objectifs pédagogiques de notre formation en virtualisation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[
                    { text: "Comprendre les principes fondamentaux de la virtualisation et ses avantages", icon: <Computer className="w-6 h-6 text-gray-600" /> },
                    { text: "Maîtriser les hyperviseurs de type 1 et 2, notamment VirtualBox, VMware et KVM", icon: <Layers className="w-6 h-6 text-gray-600" /> },
                    { text: "Créer, configurer et gérer efficacement des machines virtuelles (VMs)", icon: <Monitor className="w-6 h-6 text-gray-600" /> },
                    { text: "Appréhender la virtualisation réseau et de stockage pour des infrastructures optimisées", icon: <Network className="w-6 h-6 text-gray-600" /> }
                  ].map((objective, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 flex items-start"
                    >
                      <div className="mr-4 mt-1 text-gray-500">
                        {objective.icon}
                      </div>
                      <p className="text-gray-700">{objective.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="rounded-lg overflow-hidden mb-10"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src="../lovable-uploads/training/5b.png"
                    alt="Infrastructure de virtualisation avec plusieurs machines virtuelles" // Alt text optimisé
                    className="w-full h-64 md:h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105" /* Effet de zoom maintenu */
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Empêche la boucle infinie en cas d'erreur de chargement
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Machines+Virtuelles"; // Placeholder générique
                      e.currentTarget.alt = "Image de remplacement pour l'infrastructure de virtualisation";
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Section du contenu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Box className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Contenu détaillé de la formation à la virtualisation</h2>
                </div>

                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Notre formation à la virtualisation couvre l'ensemble des concepts, outils et techniques nécessaires pour
                  comprendre, mettre en place et administrer des environnements virtualisés performants.
                </p>

                <Tabs defaultValue="content" className="w-full mb-12">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="content">Contenu</TabsTrigger>
                    <TabsTrigger value="duration">Durée</TabsTrigger>
                    <TabsTrigger value="audience">Public cible</TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <motion.ul
                          className="space-y-4"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                          }}
                        >
                          {[
                            { text: "Concepts fondamentaux de la virtualisation : hyperviseurs de Type 1 et Type 2", icon: <Layers className="w-5 h-5 mr-2" /> },
                            { text: "Pratique sur VirtualBox, VMware Workstation et introduction à Proxmox", icon: <Computer className="w-5 h-5 mr-2" /> },
                            { text: "Gestion des machines virtuelles : snapshots, import/export ISO, sauvegarde et restauration", icon: <Server className="w-5 h-5 mr-2" /> },
                            { text: "Comprendre et configurer les réseaux virtuels et les bridges", icon: <Network className="w-5 h-5 mr-2" /> },
                            { text: "Introduction aux conteneurs avec Docker : concepts et premiers pas", icon: <Box className="w-5 h-5 mr-2" /> }
                          ].map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center"
                              variants={listItemVariants} // Applique les variantes communes
                              transition={{ duration: 0.3 }} // Transition individuelle de l'élément
                            >
                              {item.icon}
                              <span>{item.text}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="duration">
                    <Card>
                      <CardContent className="pt-6">
                        <p>La formation se déroule sur :</p>
                        <motion.ul
                          className="space-y-2 mt-4"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                          }}
                        >
                          <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Server className="w-5 h-5 mr-2" /> Durée totale : 4 semaines</motion.li>
                          <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Layers className="w-5 h-5 mr-2" /> Fréquence : 3 sessions de 3 heures par semaine</motion.li>
                          <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Box className="w-5 h-5 mr-2" /> Volume horaire total : 36 heures de formation encadrée</motion.li>
                          <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Computer className="w-5 h-5 mr-2" /> Inclut des travaux pratiques et projets pour une mise en œuvre concrète</motion.li>
                        </motion.ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="audience">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Cette formation s'adresse principalement aux :</p>
                        <motion.ul
                          className="space-y-2 mt-4"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                          }}
                        >
                          <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Computer className="w-5 h-5 mr-2" /> Débutants en virtualisation et en infrastructure IT</motion.li>
                          <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Server className="w-5 h-5 mr-2" /> Techniciens informatiques souhaitant évoluer</motion.li>
                          <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Network className="w-5 h-5 mr-2" /> Administrateurs système juniors et en formation</motion.li>
                          <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Box className="w-5 h-5 mr-2" /> Professionnels IT désirant élargir leurs compétences en virtualisation et cloud</motion.li>
                        </motion.ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Monitor className="w-5 h-5 text-gray-700" />
                    <h3 className="text-xl font-bold">Prérequis techniques et environnement de travail</h3>
                  </div>
                  <p className="text-gray-600">
                    Pour suivre cette formation de manière optimale, vous aurez besoin d'un ordinateur avec au moins 8 Go de RAM et un
                    processeur multi-cœur récent, compatible avec les technologies de virtualisation. Tous les logiciels nécessaires sont
                    gratuits ou disponibles en version d'évaluation, et seront fournis ainsi que configurés pour vous pendant la formation.
                  </p>
                </div>
              </motion.div>
            </div>
            {/* Cartes d'informations supplémentaires */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Formateurs experts en virtualisation</h3>
                <p className="text-gray-600">Des professionnels certifiés disposant d’une expérience pratique et approfondie dans le
                  déploiement et la gestion d’environnements virtualisés complexes.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Approche pratique et cas réels</h3>
                <p className="text-gray-600">Nos formations en virtualisation combinent théorie et pratique intensive sur des
                  environnements virtualisés modernes, couvrant le déploiement, la gestion, la surveillance et l’optimisation de VM et conteneurs.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Compétences recherchées sur le marché</h3>
                <p className="text-gray-600">Développez des compétences clés en virtualisation, fortement demandées dans les
                  environnements IT actuels et futures, pour renforcer votre employabilité.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prêt à maîtriser la virtualisation pour des infrastructures agiles ?</h2>
              <p className="text-gray-600 mb-6">
                Contactez notre équipe de Zetoun Labs à Kinshasa dès aujourd'hui pour obtenir plus d'informations
                sur les dates de formation, les tarifs et les modalités d'inscription. Nous sommes là pour vous accompagner.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/add/telecom-opinion">
                  <Button size="lg">
                    Demander un devis
                  </Button>
                </Link>
                <Link to="/add/telecom-calendar">
                  <Button variant="outline" size="lg">
                    Voir le calendrier des formations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VirtualizationTraining;
