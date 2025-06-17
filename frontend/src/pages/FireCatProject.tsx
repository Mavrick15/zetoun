import { ArrowLeft, Network, Repeat, TrendingUp, ShieldCheck } from 'lucide-react'; // Icônes adaptées
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // Importation maintenue au cas où Card/CardContent sont utilisés
import { useEffect } from 'react';
import ProjectPageLayout from '@/components/ProjectPageLayout'; // Utilise ce layout
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO'; // Importez le composant SEO, et nous l'utiliserons ici

const FireCatProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ProjectPageLayout
      title="Réhabilitation de l’infrastructure IT de la Police judiciaire" // Titre du layout
      subtitle="Modernisation du réseau pour la performance, la sécurité et la haute disponibilité." // Sous-titre du layout
      imageUrl="/lovable-uploads/img/police.jpg" // Image principale du layout
      brandName="Zetoun Labs"
      darkMode={true}
      imageOnError={(e) => { // Passer la prop onError au ProjectPageLayout si supporté
        e.currentTarget.onerror = null;
        e.currentTarget.src = "https://placehold.co/1200x600/e0e0e0/6a6a6a?text=Police+Judiciaire"; // [Image of Police Judiciaire]
        e.currentTarget.alt = "Image de remplacement pour l'infrastructure IT de la Police judiciaire";
      }}
    >
      {/* Composant SEO pour une meilleure visibilité */}
      <SEO
        title="Étude de Cas : Infrastructure IT Police Judiciaire | Zetoun Labs Kinshasa"
        description="Découvrez comment Zetoun Labs a modernisé l'infrastructure réseau de la Police judiciaire à Kinshasa,
          améliorant performances, sécurité et disponibilité des services IT."
        keywords={[
          'infrastructure IT',
          'réhabilitation réseau',
          'police judiciaire Kinshasa',
          'sécurité réseau',
          'haute disponibilité IT',
          'optimisation performance réseau',
          'étude de cas IT',
          'Zetoun Labs Kinshasa'
        ]}
        imageUrl="/lovable-uploads/img/police.jpg" // Assurez-vous que ce chemin est accessible
      />

      <h2 className="text-3xl font-bold mb-6">Étude de Cas : Réhabilitation de l’infrastructure IT de la Police judiciaire - Zetoun Labs</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 p-6 rounded-lg mb-8"
      >
        <h3 className="text-xl font-semibold mb-2">Contexte</h3>
        <p>
          L’infrastructure réseau de la Police judiciaire était devenue obsolète et dysfonctionnelle depuis un certain temps,
          compromettant gravement la qualité et l’efficacité des services administratifs. Le réseau souffrait de performances
          médiocres, de limitations en termes de capacité et de fiabilité, ainsi que d’une sécurité défaillante,
          exposant ainsi les systèmes à des menaces importantes.
        </p>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl font-semibold mb-4 mt-8"
      >
        Défi
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Moderniser l'infrastructure réseau du Commissariat pour offrir performance, sécurité renforcée,
        haute disponibilité des services et évolutivité face aux besoins futurs.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl font-semibold mb-4 mt-8"
      >
        Solution
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Notre équipe a conçu et déployé une infrastructure réseau moderne, sécurisée et redondante intégrant des équipements de
        dernière génération. Les actions clés incluent :
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-6 my-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Network className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" /> {/* Icône adaptée pour la refonte */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Refonte complète</h4>
            <p>Mise en place d’une topologie hiérarchisée et structurée pour optimiser les performances et simplifier la gestion.</p>
          </div>
        </motion.div>

        <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <ShieldCheck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" /> {/* Icône adaptée pour la sécurité */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Sécurisation avancée</h4>
            <p>Déploiement de pare-feux, VLANs, contrôle d’accès et segmentation du réseau pour protéger les données sensibles</p>
          </div>
        </motion.div>

        <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Repeat className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" /> {/* Icône adaptée pour la haute disponibilité */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Haute disponibilité</h4>
            <p>Intégration de solutions redondantes (liens, équipements) pour assurer une continuité de service sans interruption.</p>
          </div>
        </motion.div>

        <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" /> {/* Icône adaptée pour l'évolutivité */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Évolutivité</h4>
            <p>Conception d’une infrastructure évolutive, capable d’absorber la montée en charge et de s’adapter aux besoins futurs.</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-2xl font-semibold mb-4 mt-8"
      >
        Avantages
      </motion.h3>
      <motion.div
        className="space-y-6 mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Connectivité optimisée</h4>
            <p>Des performances réseau élevées dans tous les services, assurant un fonctionnement fluide des opérations.</p>
          </div>
        </motion.div>

        <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Sécurité des données renforcée</h4>
            <p>Protection des données confidentielles grâce à une infrastructure conforme aux normes de cybersécurité.</p>
          </div>
        </motion.div>

        <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Haute disponibilité des services</h4>
            <p>Architecture redondante permettant une continuité des services, même en cas de panne.</p>
          </div>
        </motion.div>

        <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Évolutivité assurée</h4>
            <p>Un réseau pensé pour s’adapter facilement aux besoins futurs et aux évolutions technologiques.</p>
          </div>
        </motion.div>

        <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Réduction des coûts de maintenance</h4>
            <p>Une infrastructure modernisée, plus stable et plus simple à administrer, réduisant les interventions techniques répétées.</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-2xl font-semibold mb-4 mt-8"
      >
        Résultat
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        La réhabilitation du réseau informatique du commissariat avait permis d’atteindre un niveau de performance et de fiabilité
        nettement supérieur. Grâce à une infrastructure modernisée, sécurisée et évolutive, le commissariat avait disposé d’un
        environnement numérique stable, capable de soutenir efficacement ses missions critiques, avec une réduction notable des
        interruptions de service et une meilleure gestion des flux d’informations sensibles.
      </motion.p>
    </ProjectPageLayout>
  );
};

export default FireCatProject;
