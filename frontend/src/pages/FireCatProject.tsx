
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Shield, Radio, Activity, Box } from 'lucide-react';

const FireCatProject = () => {
  return (
    <ProjectPageLayout
      title="Police judiciaire"
      subtitle="Nous concevons des réseaux robustes et évolutifs pour soutenir votre transformation numérique."
      imageUrl="/lovable-uploads/img/police.jpg"
      brandName="Ingénierie Réseau"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">Étude de Cas : Réhabilitation de l’infrastructure IT de la Police judiciaire - Zetoun Labs</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Contexte</h3>
        <p>
	L’infrastructure réseau de la Police judiciaire était devenue obsolète et dysfonctionnelle depuis un certain temps, 
	compromettant gravement la qualité et l’efficacité des services administratifs. Le réseau souffrait de performances médiocres, 
	de limitations en termes de capacité et de fiabilité, ainsi que d’une sécurité défaillante, exposant ainsi les systèmes à des menaces importantes.
	</p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Défi</h3>
      <p>
        Moderniser l'infrastructure réseau du Commissariat pour offrir performance, sécurité renforcée, 
	haute disponibilité des services et évolutivité face aux besoins futurs.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        Notre équipe a conçu et déployé une infrastructure réseau moderne, sécurisée et redondante intégrant des équipements de dernière génération. 
	Les actions clés incluent :
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Radio className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Refonte complète</h4>
            <p>Mise en place d’une topologie hiérarchisée et structurée pour optimiser les performances et simplifier la gestion.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Sécurisation avancée</h4>
            <p>Déploiement de pare-feux, VLANs, contrôle d’accès et segmentation du réseau pour protéger les données sensibles</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Box className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Haute disponibilité</h4>
            <p>Intégration de solutions redondantes (liens, équipements) pour assurer une continuité de service sans interruption.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Évolutivité</h4>
            <p>Conception d’une infrastructure évolutive, capable d’absorber la montée en charge et de s’adapter aux besoins futurs.</p>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-4 mt-8">Avantages</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Connectivité optimisée</h4>
            <p>Des performances réseau élevées dans tous les services, assurant un fonctionnement fluide des opérations.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Sécurité des données renforcée</h4>
            <p>Protection des données confidentielles grâce à une infrastructure conforme aux normes de cybersécurité.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Haute disponibilité des services</h4>
            <p>Architecture redondante permettant une continuité des services, même en cas de panne.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Évolutivité assurée</h4>
            <p>Un réseau pensé pour s’adapter facilement aux besoins futurs et aux évolutions technologiques.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Réduction des coûts de maintenance</h4>
            <p>Une infrastructure modernisée, plus stable et plus simple à administrer, réduisant les interventions techniques répétées.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Résultat</h3>
      <p>
        La réhabilitation du réseau informatique du commissariat avait permis d’atteindre un niveau de performance et de fiabilité nettement supérieur. 
	Grâce à une infrastructure modernisée, sécurisée et évolutive, le commissariat avait disposé d’un environnement numérique stable, 
	capable de soutenir efficacement ses missions critiques, avec une réduction notable des interruptions de service et une meilleure gestion 
	des flux d’informations sensibles.
      </p>
    </ProjectPageLayout>
  );
};

export default FireCatProject;
