import { ArrowLeft, ArrowRight, HardDrive, Wrench, Settings, Cpu, Monitor, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO'; // Importez le composant SEO

const ComputerMaintenance = () => {
  const isMobile = useIsMobile();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Formation Maintenance Informatique | Dépannage PC"
        description="Devenez expert en maintenance informatique : apprenez à diagnostiquer, réparer et optimiser les ordinateurs (matériel et logiciel)."
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
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                alt="Maintenance des Ordinateurs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl sm:text-4xl font-bold mb-2 text-white"
                  >
                    Maintenance des Ordinateurs
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base sm:text-lg text-white/90"
                  >
                    Formation pratique pour diagnostiquer et réparer les pannes matérielles/logiciels.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              {/* Introduction Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Objectifs pédagogiques</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[
                    { text: "Identifier composants PC", icon: <Cpu className="w-6 h-6 text-gray-600" /> },
                    { text: "Dépanner matériel et OS", icon: <Wrench className="w-6 h-6 text-gray-600" /> },
                    { text: "Installer Windows/Linux", icon: <Monitor className="w-6 h-6 text-gray-600" /> },
                    { text: "Optimiser et sécuriser le système", icon: <Shield className="w-6 h-6 text-gray-600" /> }
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
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
                    alt="Computer Hardware"
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </motion.div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <HardDrive className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Contenu de la formation</h2>
                </div>

                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Notre formation de maintenance informatique vous apprendra à diagnostiquer et réparer efficacement
                  les problèmes courants sur les ordinateurs, tant au niveau matériel que logiciel.
                </p>

                <Tabs defaultValue="content" className="w-full mb-12">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                    <TabsTrigger value="content">Contenu</TabsTrigger>
                    <TabsTrigger value="methodology">Méthodologie</TabsTrigger>
                    <TabsTrigger value="audience">Public cible</TabsTrigger>
                    <TabsTrigger value="duration">Durée</TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          {[
                            { text: "Architecture PC", icon: <Cpu className="w-5 h-5 mr-2" /> },
                            { text: "Remplacement matériel", icon: <HardDrive className="w-5 h-5 mr-2" /> },
                            { text: "Résolution logicielle", icon: <Monitor className="w-5 h-5 mr-2" /> },
                            { text: "Sécurité de base", icon: <Shield className="w-5 h-5 mr-2" /> },
                            { text: "Notions réseau local", icon: <Settings className="w-5 h-5 mr-2" /> }
                          ].map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              {item.icon}
                              <span>{item.text}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="methodology">
                    <Card>
                      <CardContent className="pt-6">
                        <p className="mb-4">Notre approche pédagogique combine :</p>
                        <ul className="space-y-2">
                          <li className="flex items-center"><HardDrive className="w-5 h-5 mr-2" /> Ateliers pratiques sur machines réelles</li>
                          <li className="flex items-center"><Monitor className="w-5 h-5 mr-2" /> Démonstrations en direct</li>
                          <li className="flex items-center"><Cpu className="w-5 h-5 mr-2" /> Fiches de dépannage et procédures</li>
                          <li className="flex items-center"><Wrench className="w-5 h-5 mr-2" /> Exercices de diagnostic et résolution de problèmes</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="audience">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Cette formation s'adresse principalement aux :</p>
                        <ul className="space-y-2 mt-4">
                          <li className="flex items-center"><Monitor className="w-5 h-5 mr-2" /> Débutants en informatique</li>
                          <li className="flex items-center"><Wrench className="w-5 h-5 mr-2" /> Techniciens de maintenance junior</li>
                          <li className="flex items-center"><HardDrive className="w-5 h-5 mr-2" /> Particuliers souhaitant savoir réparer leur matériel</li>
                          <li className="flex items-center"><Cpu className="w-5 h-5 mr-2" /> Personnes en reconversion vers les métiers techniques</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="duration">
                    <Card>
                      <CardContent className="pt-6">
                        <p>La formation se déroule sur :</p>
                        <ul className="space-y-2 mt-4">
                          <li className="flex items-center"><HardDrive className="w-5 h-5 mr-2" /> 4 semaines au total</li>
                          <li className="flex items-center"><Wrench className="w-5 h-5 mr-2" /> 3 sessions de 3 heures par semaine</li>
                          <li className="flex items-center"><Monitor className="w-5 h-5 mr-2" /> Total : 36 heures de formation</li>
                          <li className="flex items-center"><Cpu className="w-5 h-5 mr-2" /> Exercices pratiques supplémentaires recommandés</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-gray-700" />
                    <h3 className="text-xl font-bold">Matériel fourni</h3>
                  </div>
                  <p className="text-gray-600">
                    Pendant la formation, vous aurez accès à des ordinateurs de différentes générations,
                    des composants de rechange, et tous les outils nécessaires pour les travaux pratiques.
                    Des systèmes d'exploitation et logiciels de diagnostic seront également mis à votre disposition.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Formateurs experts</h3>
                <p className="text-gray-600">Des professionnels certifiés avec une expertise pratique dans la maintenance préventive et corrective des infrastructures i
nformatiques et réseau.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Approche pratique</h3>
                <p className="text-gray-600">Nos formations en maintenance allient théorie et pratique pour assurer le diagnostic, la réparation et la prévention des pa
nnes informatiques.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Certifications reconnues</h3>
                <p className="text-gray-600">Préparation aux certifications de l'industrie les plus demandées sur le marché.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vous souhaitez vous inscrire à l'une de nos formations ?</h2>
              <p className="text-gray-600 mb-6">
                Contactez notre équipe pour obtenir plus d'informations sur les dates, les tarifs et les modalités d'inscription.
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

export default ComputerMaintenance;
