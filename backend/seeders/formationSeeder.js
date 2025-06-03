const mongoose = require('mongoose');
const Formation = require('../models/Formation'); // Assurez-vous que le chemin est correct
const connectDB = require('../config/db'); // Assurez-vous que le chemin est correct
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Se connecter à la base de données
connectDB();

// Données d'exemple pour les formations
const formationData = [
  {
    title: "Réseaux de Télécommunication",
    description: "Formation approfondie sur les principes fondamentaux des réseaux de télécommunication modernes.",
    date: "15-19 Juin 2025",
    location: "Paris, France",
    duration: "40 heures",
    instructor: "Dr. Jean Dupont",
    price: "1,950€",
    seats: 12,
    level: "Intermédiaire",
    image: "/lovable-uploads/5ca619e6-2139-4879-9b3c-94777ab85e2a.png"
  },
  {
    title: "Technologies Mobiles 5G",
    description: "Cette formation couvre les spécifications techniques, l'architecture et les cas d'utilisation de la technologie 5G.",
    date: "6-10 Juillet 2025",
    location: "Lyon, France",
    duration: "35 heures",
    instructor: "Marie Lambert",
    price: "2,200€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png"
  },
  {
    title: "Systèmes de Communication Optique",
    description: "Formation technique sur les systèmes de communication par fibre optique.",
    date: "20-24 Juillet 2025",
    location: "Marseille, France",
    duration: "30 heures",
    instructor: "Pierre Martin",
    price: "1,800€",
    seats: 15,
    level: "Intermédiaire",
    image: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
  },
  {
    title: "Sécurité des Réseaux Télécom",
    description: "Formation spécialisée sur la protection des infrastructures de télécommunication contre les cyberattaques.",
    date: "10-14 Août 2025",
    location: "Toulouse, France",
    duration: "45 heures",
    instructor: "Sophie Bernard",
    price: "2,400€",
    seats: 8,
    level: "Avancé",
    image: "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png"
  },
  {
    title: "VoIP et Communications Unifiées",
    description: "Déployer et gérer des systèmes de voix sur IP et des plateformes de communications unifiées.",
    date: "7-11 Septembre 2025",
    location: "Bordeaux, France",
    duration: "25 heures",
    instructor: "Michel Dubois",
    price: "1,600€",
    seats: 12,
    level: "Débutant",
    image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png"
  },
  {
    title: "Fondamentaux des Réseaux Informatiques",
    description: "Introduction aux concepts essentiels des réseaux informatiques : modèles OSI et TCP/IP, adressage IP, protocoles de base.",
    date: "22-26 Septembre 2025",
    location: "Lyon, France",
    duration: "35 heures",
    instructor: "Mme. Sophie Dubois",
    price: "1,500€",
    seats: 15,
    level: "Débutant",
    image: "/lovable-uploads/reseaux_info_debutant.png"
  },
  {
    title: "Administration Réseau Avancée",
    description: "Techniques avancées de configuration et de gestion des équipements réseau : routage dynamique, VLANs, sécurité réseau.",
    date: "13-17 Octobre 2025",
    location: "Marseille, France",
    duration: "40 heures",
    instructor: "M. Pierre Leclerc",
    price: "2,100€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/admin_reseau_avance.png"
  },
  {
    title: "Administration Système Linux Server 2022",
    description: "Maîtrise de l'administration des serveurs Linux (ligne de commande, gestion des utilisateurs, services) et Windows Server 2022 (Active Directory, gestion des rôles).",
    date: "03-07 Novembre 2025",
    location: "Toulouse, France",
    duration: "40 heures",
    instructor: "Mme. Alice Bernard",
    price: "1,900€",
    seats: 12,
    level: "Intermédiaire",
    image: "/lovable-uploads/admin_systeme_linux_windows.png"
  },
  {
    title: "Maintenance Informatique : Diagnostic et Réparation",
    description: "Techniques de diagnostic des pannes matérielles et logicielles, procédures de réparation et de remplacement de composants.",
    date: "17-21 Novembre 2025",
    location: "Bordeaux, France",
    duration: "30 heures",
    instructor: "M. François Moreau",
    price: "1,200€",
    seats: 18,
    level: "Débutant",
    image: "/lovable-uploads/maintenance_info.png"
  },
  {
    title: "Virtualisation avec VMware et Hyper-V",
    description: "Implémentation et gestion d'environnements virtualisés à l'aide de VMware vSphere et Microsoft Hyper-V.",
    date: "01-05 Décembre 2025",
    location: "Nice, France",
    duration: "35 heures",
    instructor: "Dr. Laurent Garnier",
    price: "2,000€",
    seats: 10,
    level: "Intermédiaire",
    image: "/lovable-uploads/virtualisation.png"
  },
  {
    title: "Sécurité des Réseaux Informatiques",
    description: "Principes de la sécurité réseau, pare-feu, systèmes de détection d'intrusion, VPN.",
    date: "08-12 Décembre 2025",
    location: "Lille, France",
    duration: "40 heures",
    instructor: "Mme. Chloé Roux",
    price: "2,200€",
    seats: 12,
    level: "Avancé",
    image: "/lovable-uploads/securite_reseaux.png"
  },
  {
    title: "Administration Système Windows Server 2022",
    description: "Approfondissement de l'administration des serveurs Windows Server 2022 : services avancés, automatisation, PowerShell.",
    date: "12-16 Janvier 2026",
    location: "Rennes, France",
    duration: "40 heures",
    instructor: "M. Antoine Chevalier",
    price: "2,050€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/admin_windows_avance.png"
  },
  {
    title: "Administration Système Linux : Niveau Expert",
    description: "Techniques avancées d'administration Linux : performance, scripting, sécurité, conteneurisation (Docker).",
    date: "26-30 Janvier 2026",
    location: "Strasbourg, France",
    duration: "40 heures",
    instructor: "Dr. Isabelle Lefevre",
    price: "2,150€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/admin_linux_expert.png"
  },
  {
    title: "Maintenance des Réseaux Informatiques",
    description: "Outils et techniques pour la surveillance, le dépannage et l'optimisation des performances des réseaux.",
    date: "09-13 Février 2026",
    location: "Montpellier, France",
    duration: "35 heures",
    instructor: "M. Lucas Girard",
    price: "1,600€",
    seats: 15,
    level: "Intermédiaire",
    image: "/lovable-uploads/maintenance_reseaux.png"
  },
  {
    title: "Virtualisation Avancée : Kubernetes et Orchestration",
    description: "Déploiement et gestion d'applications conteneurisées à grande échelle avec Kubernetes.",
    date: "23-27 Février 2026",
    location: "Nantes, France",
    duration: "40 heures",
    instructor: "Mme. Julie Meunier",
    price: "2,300€",
    seats: 8,
    level: "Avancé",
    image: "/lovable-uploads/virtualisation_kubernetes.png"
  },
  // --- Ajout de 10 nouvelles formations précédentes ---
  {
    title: "Cloud Computing : Fondamentaux AWS",
    description: "Introduction aux services essentiels d'Amazon Web Services (AWS) pour le déploiement et la gestion d'infrastructures cloud.",
    date: "10-14 Mars 2026",
    location: "Paris, La Défense, France",
    duration: "35 heures",
    instructor: "M. David Leroy",
    price: "2,000€",
    seats: 12,
    level: "Débutant",
    image: "/lovable-uploads/cloud_aws_fondamentaux.png"
  },
  {
    title: "Cybersécurité : Analyse des Menaces et Réponse aux Incidents",
    description: "Apprenez à identifier, analyser et répondre aux menaces de cybersécurité pour protéger les systèmes et les données.",
    date: "24-28 Mars 2026",
    location: "Rennes, France",
    duration: "40 heures",
    instructor: "Mme. Clara Dubois",
    price: "2,500€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/cybersecurite_menaces.png"
  },
  {
    title: "Bases de Données : SQL et NoSQL",
    description: "Maîtrise des concepts fondamentaux des bases de données relationnelles (SQL) et non-relationnelles (NoSQL) pour la gestion des données.",
    date: "07-11 Avril 2026",
    location: "Montpellier, France",
    duration: "30 heures",
    instructor: "M. Thomas Petit",
    price: "1,700€",
    seats: 15,
    level: "Intermédiaire",
    image: "/lovable-uploads/bases_de_donnees.png"
  },
  {
    title: "Développement Web Full-Stack : React et Node.js",
    description: "Apprenez à construire des applications web complètes en utilisant React pour le frontend et Node.js pour le backend.",
    date: "21-25 Avril 2026",
    location: "Bordeaux, France",
    duration: "45 heures",
    instructor: "Mme. Léa Girard",
    price: "2,800€",
    seats: 8,
    level: "Avancé",
    image: "/lovable-uploads/dev_web_fullstack.png"
  },
  {
    title: "Intelligence Artificielle : Introduction au Machine Learning",
    description: "Découvrez les principes du Machine Learning, les algorithmes clés et leurs applications pratiques.",
    date: "05-09 Mai 2026",
    location: "Grenoble, France",
    duration: "35 heures",
    instructor: "Dr. Marc Lefevre",
    price: "2,300€",
    seats: 10,
    level: "Débutant",
    image: "/lovable-uploads/ia_machine_learning.png"
  },
  {
    title: "Gestion de Projet IT : Méthodes Agiles (Scrum)",
    description: "Maîtrisez les principes et les pratiques de la méthodologie Scrum pour la gestion efficace de projets informatiques.",
    date: "19-23 Mai 2026",
    location: "Lille, France",
    duration: "25 heures",
    instructor: "M. Nicolas Martin",
    price: "1,500€",
    seats: 15,
    level: "Intermédiaire",
    image: "/lovable-uploads/gestion_projet_agile.png"
  },
  {
    title: "DevOps : CI/CD avec Jenkins et Docker",
    description: "Mise en place de pipelines d'intégration continue et de déploiement continu (CI/CD) avec Jenkins et Docker.",
    date: "02-06 Juin 2026",
    location: "Nantes, France",
    duration: "40 heures",
    instructor: "Mme. Sophie Leroy",
    price: "2,600€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/devops_cicd.png"
  },
  {
    title: "Big Data : Introduction à Hadoop et Spark",
    description: "Découvrez les concepts du Big Data et explorez les frameworks Hadoop et Spark pour le traitement de données massives.",
    date: "16-20 Juin 2026",
    location: "Strasbourg, France",
    duration: "35 heures",
    instructor: "Dr. Paul Durand",
    price: "2,400€",
    seats: 12,
    level: "Intermédiaire",
    image: "/lovable-uploads/big_data_hadoop_spark.png"
  },
  {
    title: "Sécurité Offensive : Pentesting Web Applications",
    description: "Apprenez les techniques de test d'intrusion pour identifier les vulnérabilités dans les applications web.",
    date: "30 Juin - 04 Juillet 2026",
    location: "Paris, Cyber Campus, La Défense, France",
    duration: "40 heures",
    instructor: "M. Julien Moreau",
    price: "2,900€",
    seats: 8,
    level: "Avancé",
    image: "/lovable-uploads/pentesting_web.png"
  },
  {
    title: "Blockchain : Fondamentaux et Applications",
    description: "Comprenez la technologie blockchain, son fonctionnement et ses cas d'utilisation dans divers secteurs.",
    date: "14-18 Juillet 2026",
    location: "Nice, France",
    duration: "30 heures",
    instructor: "Mme. Camille Roux",
    price: "1,950€",
    seats: 15,
    level: "Débutant",
    image: "/lovable-uploads/blockchain_fondamentaux.png"
  },
  // --- Ajout de 15 nouvelles formations ---
  {
    title: "Réseaux d'Entreprise : Conception et Déploiement",
    description: "Concevez et déployez des architectures réseau robustes pour les environnements d'entreprise.",
    date: "01-05 Août 2026",
    location: "Lyon, France",
    duration: "40 heures",
    instructor: "M. Éric Fournier",
    price: "2,250€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/reseaux_entreprise_conception.png"
  },
  {
    title: "Administration de Bases de Données NoSQL (MongoDB)",
    description: "Maîtrise de l'administration et de l'optimisation des bases de données NoSQL, avec un focus sur MongoDB.",
    date: "15-19 Août 2026",
    location: "Toulouse, France",
    duration: "35 heures",
    instructor: "Mme. Sarah Leclerc",
    price: "2,100€",
    seats: 12,
    level: "Intermédiaire",
    image: "/lovable-uploads/admin_nosql_mongodb.png"
  },
  {
    title: "Automatisation IT avec Python",
    description: "Apprenez à automatiser les tâches d'administration système et réseau à l'aide de scripts Python.",
    date: "01-05 Septembre 2026",
    location: "Paris, France",
    duration: "30 heures",
    instructor: "M. Kévin Bernard",
    price: "1,800€",
    seats: 15,
    level: "Débutant",
    image: "/lovable-uploads/automatisation_python.png"
  },
  {
    title: "Sécurité Cloud : Azure et Google Cloud",
    description: "Sécurisez vos infrastructures et applications déployées sur Microsoft Azure et Google Cloud Platform.",
    date: "15-19 Septembre 2026",
    location: "Marseille, France",
    duration: "40 heures",
    instructor: "Dr. Laura Petit",
    price: "2,700€",
    seats: 8,
    level: "Avancé",
    image: "/lovable-uploads/securite_cloud_azure_gcp.png"
  },
  {
    title: "Développement Mobile : Android avec Kotlin",
    description: "Créez des applications natives pour Android en utilisant le langage de programmation Kotlin.",
    date: "01-05 Octobre 2026",
    location: "Bordeaux, France",
    duration: "45 heures",
    instructor: "M. Florian Martin",
    price: "2,900€",
    seats: 10,
    level: "Intermédiaire",
    image: "/lovable-uploads/dev_mobile_android_kotlin.png"
  },
  {
    title: "Gestion de la Continuité d'Activité et Reprise après Sinistre (BCDR)",
    description: "Mettez en place des stratégies de BCDR pour assurer la résilience de vos systèmes d'information.",
    date: "15-19 Octobre 2026",
    location: "Lille, France",
    duration: "35 heures",
    instructor: "Mme. Sophie Moreau",
    price: "2,200€",
    seats: 12,
    level: "Avancé",
    image: "/lovable-uploads/bcdr_reprise_sinistre.png"
  },
  {
    title: "Réseaux Sans Fil : Wi-Fi 6 et au-delà",
    description: "Explorez les dernières avancées en matière de réseaux sans fil, y compris le standard Wi-Fi 6 et les futures évolutions.",
    date: "01-05 Novembre 2026",
    location: "Nantes, France",
    duration: "30 heures",
    instructor: "M. Julien Dupont",
    price: "1,900€",
    seats: 15,
    level: "Intermédiaire",
    image: "/lovable-uploads/reseaux_sans_fil_wifi6.png"
  },
  {
    title: "Administration de Systèmes de Stockage (SAN/NAS)",
    description: "Gérez et optimisez les solutions de stockage en réseau (SAN et NAS) pour les environnements d'entreprise.",
    date: "15-19 Novembre 2026",
    location: "Strasbourg, France",
    duration: "40 heures",
    instructor: "M. Vincent Dubois",
    price: "2,400€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/admin_stockage_san_nas.png"
  },
  {
    title: "Audit de Sécurité des Systèmes d'Information",
    description: "Réalisez des audits de sécurité complets pour évaluer et améliorer la posture de sécurité de votre organisation.",
    date: "01-05 Décembre 2026",
    location: "Paris, France",
    duration: "45 heures",
    instructor: "Mme. Émilie Lambert",
    price: "3,100€",
    seats: 8,
    level: "Avancé",
    image: "/lovable-uploads/audit_securite_si.png"
  },
  {
    title: "Conteneurisation Avancée : Docker Swarm et Podman",
    description: "Maîtrisez l'orchestration de conteneurs avec Docker Swarm et explorez Podman comme alternative à Docker.",
    date: "15-19 Décembre 2026",
    location: "Lyon, France",
    duration: "35 heures",
    instructor: "M. Rémi Girard",
    price: "2,500€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/conteneurisation_docker_podman.png"
  },
  {
    title: "Gestion des Identités et des Accès (IAM)",
    description: "Implémentez des solutions de gestion des identités et des accès pour sécuriser les ressources de l'entreprise.",
    date: "05-09 Janvier 2027",
    location: "Toulouse, France",
    duration: "30 heures",
    instructor: "Mme. Pauline Roussel",
    price: "2,000€",
    seats: 12,
    level: "Intermédiaire",
    image: "/lovable-uploads/gestion_identites_acces.png"
  },
  {
    title: "Supervision et Monitoring des Infrastructures IT",
    description: "Mettez en place des outils et des stratégies de supervision pour garantir la disponibilité et la performance de vos systèmes.",
    date: "19-23 Janvier 2027",
    location: "Bordeaux, France",
    duration: "35 heures",
    instructor: "M. David Leroy",
    price: "2,100€",
    seats: 15,
    level: "Intermédiaire",
    image: "/lovable-uploads/supervision_monitoring_it.png"
  },
  {
    title: "Réseaux Définis par Logiciel (SDN) et NFV",
    description: "Explorez les concepts de SDN et NFV pour une gestion plus flexible et automatisée des réseaux.",
    date: "02-06 Février 2027",
    location: "Nice, France",
    duration: "40 heures",
    instructor: "Dr. Jean-Luc Moreau",
    price: "2,600€",
    seats: 10,
    level: "Avancé",
    image: "/lovable-uploads/sdn_nfv.png"
  },
  {
    title: "Virtualisation de Poste de Travail (VDI)",
    description: "Déployez et gérez des infrastructures de virtualisation de poste de travail pour un accès sécurisé et flexible.",
    date: "16-20 Février 2027",
    location: "Montpellier, France",
    duration: "35 heures",
    instructor: "Mme. Claire Bernard",
    price: "2,300€",
    seats: 12,
    level: "Intermédiaire",
    image: "/lovable-uploads/virtualisation_vdi.png"
  },
  {
    title: "Gestion des Services IT (ITSM) avec ITIL",
    description: "Apprenez les meilleures pratiques ITIL pour la gestion des services informatiques et l'amélioration continue.",
    date: "02-06 Mars 2027",
    location: "Lille, France",
    duration: "25 heures",
    instructor: "M. Philippe Martin",
    price: "1,750€",
    seats: 15,
    level: "Débutant",
    image: "/lovable-uploads/itsm_itil.png"
  }
];

// Fonction pour insérer les formations dans la base de données
const seedFormations = async () => {
  try {
    // Supprimer toutes les données existantes de la collection Formation
    await Formation.deleteMany();
    console.log('Anciennes formations supprimées.');

    // Insérer les nouvelles données de formations
    const createdFormations = await Formation.insertMany(formationData);
    console.log(`${createdFormations.length} formations insérées avec succès.`);
    
    // Quitter le processus avec succès
    process.exit(0);
  } catch (error) {
    // Afficher l'erreur et quitter le processus avec un code d'erreur
    console.error(`Erreur lors de l'insertion des formations : ${error.message}`);
    process.exit(1);
  }
};

// Exécuter la fonction de seeding
seedFormations();
