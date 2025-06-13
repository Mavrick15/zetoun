import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Camera, MapPin, ShieldCheck, HardDrive, Settings } from 'lucide-react'; // Importation des icônes pertinentes

const EyanoSecurityProject = () => {
  const title = "Sécurité renforcée Centre Diagnostic EYANO"; // Titre raccourci
  const brandName = "Centre de Diagnostic EYANO";
  // Proposition d'une image plus spécifique pour la vidéosurveillance
  const imageUrl = "/lovable-uploads/img/Eyano.png"; 

  return (
    <ProjectPageLayout
      title={title}
      subtitle="Modernisation et déploiement étendu de la vidéosurveillance pour une sécurité optimale." // Sous-titre proposé
      imageUrl={imageUrl}
      brandName={brandName}
    >
      {/* Composant SEO pour l'optimisation des moteurs de recherche */}
      <SEO
        title={title}
        description="Extension et renforcement du système de vidéosurveillance pour le Centre de Diagnostic EYANO, assurant une couverture étendue et une sécurité optimale de ses installations."
        type="article"
      />

      <h2 className="text-3xl font-bold mb-6">Étude de Cas : Renforcement et extension du système de sécurité du Centre de Diagnostic EYANO</h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Contexte du Projet</h3>
        <p>
          Face à l'accroissement de ses activités et à l'expansion de ses infrastructures, le Centre de Diagnostic EYANO a ressenti un besoin impératif d'agrandir et de moderniser son système de surveillance. L'objectif était d'adapter l'infrastructure de sécurité aux nouvelles dimensions du centre, garantissant ainsi une protection complète et efficace de ses biens et de son personnel.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Défi à Relever</h3>
      <p>
        Le principal défi consistait à concevoir et déployer un système de vidéosurveillance capable de couvrir une vaste superficie de plus de 70 m², incluant diverses zones d'activité du centre. Il était crucial d'assurer une intégration fluide des nouvelles caméras avec le système existant, tout en améliorant la qualité de l'image, la capacité d'enregistrement et la réactivité globale du dispositif de sécurité.
      </p>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution mise en oeuvre</h3>
      <p>
        Notre équipe a conçu et déployé une solution de vidéosurveillance avancée, intégrant des technologies de pointe pour répondre aux exigences spécifiques du Centre de Diagnostic EYANO :
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Camera className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Déploiement de caméras HIKVISION</h4>
            <p>Installation stratégique de caméras de surveillance HIKVISION, reconnues pour leur robustesse, leur haute résolution et leurs fonctionnalités intelligentes (détection de mouvement, analyse comportementale).</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <MapPin className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Couverture géographique étendue</h4>
            <p>Mise en place d'un réseau de caméras couvrant l'intégralité des 70 m² du centre, y compris les zones sensibles, les accès et les périmètres extérieurs, pour une surveillance sans angle mort.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <ShieldCheck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Intégration et centralisation</h4>
            <p>Intégration des nouvelles caméras au système de gestion vidéo existant, permettant une surveillance centralisée et une gestion simplifiée de l'ensemble du dispositif.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <HardDrive className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Capacité d'enregistrement améliorée</h4>
            <p>Augmentation de la capacité de stockage et optimisation des systèmes d'enregistrement pour conserver les flux vidéo sur une période prolongée, conformément aux exigences de sécurité.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Avantages clés</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Sécurité renforcée et dissuasion</h4>
            <p>Une présence visible et efficace de caméras HIKVISION dissuade les intrusions et les actes malveillants, protégeant ainsi les actifs et les personnes.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Surveillance complète et continue</h4>
            <p>La couverture étendue sur 70 m² assure une surveillance ininterrompue de toutes les zones critiques, de jour comme de nuit.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Réactivité accrue en cas d'incident</h4>
            <p>La surveillance en temps réel et les enregistrements de haute qualité permettent une détection rapide des incidents et facilitent les enquêtes post-événement.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Optimisation des opérations de sécurité</h4>
            <p>La gestion centralisée du système simplifie la surveillance pour les équipes de sécurité, améliorant leur efficacité opérationnelle.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Résultats obtenus</h3>
      <p>
        Grâce au renforcement et à l'extension de son système de vidéosurveillance, le Centre de Diagnostic EYANO dispose désormais d'une infrastructure de sécurité à la pointe de la technologie. Cette modernisation a significativement amélioré la capacité du centre à surveiller ses installations, à prévenir les risques et à réagir efficacement en cas d'incident, offrant ainsi un environnement plus sûr pour tous.
      </p>
    </ProjectPageLayout>
  );
};

export default EyanoSecurityProject;
