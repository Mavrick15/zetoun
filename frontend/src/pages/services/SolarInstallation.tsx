import { ArrowLeft, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import React from 'react';
import PageLayout from '@/components/PageLayout'; // Importation du composant PageLayout
import SEO from '@/components/SEO'; // Importation du composant SEO

const SolarInstallation = () => {
  // Faire défiler la page vers le haut au montage du composant
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <PageLayout>
        {/* Composant SEO avec les balises méta optimisées */}
        <SEO
          title="Installation Solaire | Conception & Systèmes - Zetoun Labs"
          description="Profitez de l'énergie propre à Kinshasa avec Zetoun Labs : conception,
          installation et maintenance de systèmes solaires photovoltaïques résidentiels et commerciaux."
          keywords={[
            'installation solaire',
            'énergie solaire',
            'panneaux solaires',
            'systèmes photovoltaïques',
            'onduleurs solaires',
            'batteries solaires',
            'autoconsommation',
            'entretien solaire',
            'audit énergétique',
            'électricité propre',
            'Kinshasa',
            'Zetoun Labs'
          ]}
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Solar_Panels_on_a_Roof.jpg/1280px-Solar_Panels_on_a_Roof.jpg"
        />

        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              {/* Lien de retour à l'accueil */}
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors rounded-full p-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>

              {/* Section du titre avec icône et animation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-6 space-x-4"
              >
                <div className="bg-yellow-100 p-4 rounded-full shadow-lg">
                  <Sun className="h-8 w-8 text-yellow-600" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">Installation Solaire</h1>
              </motion.div>

              {/* Paragraphe d'introduction avec animation */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Zetoun Labs est votre partenaire de confiance à Kinshasa pour la conception et l'installation de
                systèmes solaires photovoltaïques, vous permettant de bénéficier d'une énergie propre, fiable et économique.
              </motion.p>

              {/* Section de l'image principale avec animation et effet de survol */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Solar_Panels_on_a_Roof.jpg/1280px-Solar_Panels_on_a_Roof.jpg"
                  alt="Panneaux solaires installés sur un toit, produisant de l'énergie propre"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Panneaux+Solaires";
                    e.currentTarget.alt = "Image de remplacement pour les panneaux solaires";
                  }}
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Section : Solutions solaires complètes */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Nos solutions solaires complètes</h2>
                  <ul className="space-y-4 text-lg">
                    {/* Élément de liste : Évaluation initiale et audit */}
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium text-gray-800">Audit énergétique et dimensionnement initial</span>
                        <p className="text-gray-600 text-base mt-1">Analyse de votre consommation et des contraintes
                          spécifiques de votre site à Kinshasa.</p>
                      </div>
                    </li>
                    {/* Élément de liste : Conception de système personnalisé */}
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium text-gray-800">Conception de systèmes photovoltaïques sur mesure</span>
                        <p className="text-gray-600 text-base mt-1">Intégration optimale des panneaux, onduleurs et
                          systèmes de stockage pour une efficacité maximale.</p>
                      </div>
                    </li>
                    {/* Élément de liste : Installation professionnelle */}
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium text-gray-800">Installation professionnelle et sécurisée</span>
                        <p className="text-gray-600 text-base mt-1">Réalisée par des techniciens certifiés,
                          respectant les normes de sécurité et de qualité internationales.</p>
                      </div>
                    </li>
                    {/* Élément de liste : Solutions de stockage de batterie */}
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium text-gray-800">Solutions de stockage d'énergie (batteries)</span>
                        <p className="text-gray-600 text-base mt-1">Pour une autonomie accrue et une disponibilité
                          d'énergie constante, même en l'absence de soleil.</p>
                      </div>
                    </li>
                    {/* Élément de liste : Suivi et maintenance */}
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium text-gray-800">Suivi et maintenance préventive</span>
                        <p className="text-gray-600 text-base mt-1">Assurant la performance et la longévité de votre
                          installation solaire.</p>
                      </div>
                    </li>
                    {/* Élément de liste : Intégration avec des solutions intelligentes */}
                    <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">•</span>
                      <div>
                        <span className="font-medium text-gray-800">Intégration avec les solutions de maison intelligente</span>
                        <p className="text-gray-600 text-base mt-1">Pour une gestion optimisée de votre consommation
                          et de votre production d'énergie.</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                {/* Section : Notre approche personnalisée */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col space-y-8"
                >
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Notre engagement pour une énergie propre</h2>
                    <p className="text-gray-700 mb-4">
                      Chaque projet solaire est unique. Notre équipe d'experts à Kinshasa s'engage à vous fournir une
                      solution énergétique personnalisée, qui maximise votre production d'énergie, réduit vos coûts
                      et contribue à un avenir plus durable.
                    </p>
                    <p className="text-gray-700">
                      Nous sélectionnons des équipements de haute qualité et appliquons des techniques d'installation
                      rigoureuses pour garantir la fiabilité et la performance à long terme de votre système solaire.
                    </p>
                  </div>

                  {/* Image secondaire avec animation et effet de survol */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Solar_panels_on_the_roof_of_a_house_in_Australia.jpg/1280px-Solar_panels_on_the_roof_of_a_house_in_Australia.jpg"
                      alt="Ingénieur examinant les données de production d'un système solaire"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Ingénieur+Solaire";
                        e.currentTarget.alt = "Image de remplacement pour l'ingénieur solaire";
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Grille des fonctionnalités/avantages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Fonctionnalité 1 : Autonomie et économies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-yellow-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/House_with_solar_panels_in_winter.jpg/1280px-House_with_solar_panels_in_winter.jpg"
                    alt="Maison alimentée par l'énergie solaire, symbolisant l'autonomie"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Maison+Autonome";
                      e.currentTarget.alt = "Image de remplacement pour la maison autonome";
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-yellow-700">Autonomie & Économies</h3>
                    <p className="text-gray-600 text-sm">Réduisez significativement vos factures d'électricité et
                      gagnez en indépendance énergétique à Kinshasa.</p>
                  </div>
                </motion.div>

                {/* Fonctionnalité 2 : Fiabilité */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-yellow-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Solar_panels_on_a_building_roof.jpg/1280px-Solar_panels_on_a_building_roof.jpg"
                    alt="Panneaux solaires résistants aux intempéries, illustrant la durabilité"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Panneaux+Fiables";
                      e.currentTarget.alt = "Image de remplacement pour les panneaux fiables";
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-yellow-700">Fiabilité et Durabilité</h3>
                    <p className="text-gray-600 text-sm">Des systèmes conçus pour durer, offrant une source
                      d'énergie stable et performante sur le long terme.</p>
                  </div>
                </motion.div>

                {/* Fonctionnalité 3 : Écologique */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-yellow-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Solar_energy_concept_-_Ecology_and_alternative_energy.jpg/1280px-Solar_energy_concept_-_Ecology_and_alternative_energy.jpg"
                    alt="Arbre et panneaux solaires, symbolisant l'engagement environnemental"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Énergie+Verte";
                      e.currentTarget.alt = "Image de remplacement pour l'énergie verte";
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-yellow-700">Impact Environnemental Positif</h3>
                    <p className="text-gray-600 text-sm">Contribuez à la réduction des émissions de carbone et à
                      la protection de l'environnement.</p>
                  </div>
                </motion.div>
              </div>

              {/* Section d'appel à l'action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">Passez à l'énergie solaire avec Zetoun Labs</h3>
                <p className="text-gray-700 mb-6">
                  Que vous soyez un particulier souhaitant réduire sa facture d'électricité ou une entreprise visant
                  l'autonomie énergétique, Zetoun Labs est votre partenaire idéal à Kinshasa. Nous vous accompagnons
                  à chaque étape de votre projet solaire, de l'étude à la mise en service.
                </p>

                <div className="bg-yellow-500 text-white p-6 rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer shadow-md">
                  <p className="font-medium text-center text-lg">
                    Contactez-nous dès aujourd'hui pour une étude personnalisée de votre projet solaire !
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

export default SolarInstallation;
