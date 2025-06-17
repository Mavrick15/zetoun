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
  // Formations Télécom existantes conservées
  {
    title: "Réseaux de télécommunication",
    description: "Formation approfondie sur les principes fondamentaux des réseaux de télécommunication modernes.",
    date: "15-19 Juin 2025",
    location: "Paris, France",
    duration: "40 heures",
    instructor: "Ir. Benjamin Baki",
    price: "1,950€",
    seats: 12,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/1.png"
  },
  {
    title: "Technologies mobiles 5G",
    description: "Cette formation couvre les spécifications techniques, l'architecture et les cas d'utilisation de la technologie 5G.",
    date: "6-10 Juillet 2025",
    location: "Lyon, France",
    duration: "35 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,200€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/2.png"
  },
  {
    title: "Systèmes de communication optique",
    description: "Formation technique sur les systèmes de communication par fibre optique.",
    date: "20-24 Juillet 2025",
    location: "Marseille, France",
    duration: "30 heures",
    instructor: "Ir. Grace Moko",
    price: "1,800€",
    seats: 15,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/3.png"
  },
  {
    title: "Sécurité des réseaux télécom",
    description: "Formation spécialisée sur la protection des infrastructures de télécommunication contre les cyberattaques.",
    date: "10-14 Août 2025",
    location: "Toulouse, France",
    duration: "45 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,400€",
    seats: 8,
    level: "Avancé",
    image: "../lovable-uploads/teachs/4.png"
  },
  {
    title: "VoIP et communications unifiées",
    description: "Déployer et gérer des systèmes de voix sur IP et des plateformes de communications unifiées.",
    date: "7-11 Septembre 2025",
    location: "Bordeaux, France",
    duration: "25 heures",
    instructor: "Ir. Benjamin Baki",
    price: "1,600€",
    seats: 12,
    level: "Débutant",
    image: "../lovable-uploads/teachs/5.png"
  },
  {
    title: "Fondamentaux des réseaux informatiques",
    description: "Introduction aux concepts essentiels des réseaux informatiques : modèles OSI et TCP/IP, adressage IP, protocoles de base.",
    date: "22-26 Septembre 2025",
    location: "Lyon, France",
    duration: "35 heures",
    instructor: "Ir. Evra Lashe",
    price: "1,500€",
    seats: 15,
    level: "Débutant",
    image: "../lovable-uploads/teachs/6.png" // Updated path
  },

  // Nouvelles formations basées sur votre demande (première série)
  {
    title: "Administration Système Linux",
    description: "Maîtrisez l'administration des serveurs Linux, la gestion des utilisateurs, des services et la ligne de commande.",
    date: "03-07 Novembre 2025",
    location: "Toulouse, France",
    duration: "40 heures",
    instructor: "Ir. Grace Moko",
    price: "1,900€",
    seats: 12,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/7.png" // Updated path
  },
  {
    title: "Administration Système Windows Server",
    description: "Apprenez à administrer Windows Server, y compris Active Directory, la gestion des rôles et des fonctionnalités.",
    date: "17-21 Novembre 2025",
    location: "Paris, France",
    duration: "40 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,050€",
    seats: 10,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/8.png" // Updated path
  },
  {
    title: "Routage et Switching CISCO",
    description: "Formation essentielle pour la conception, la configuration et le dépannage des réseaux d'entreprise avec les équipements Cisco.",
    date: "01-05 Décembre 2025",
    location: "Marseille, France",
    duration: "35 heures",
    instructor: "Ir. Benjamin Baki",
    price: "2,300€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/9.png" // Updated path
  },
  {
    title: "Maintenance et Dépannage Informatique",
    description: "Acquérez les compétences pour diagnostiquer et résoudre les problèmes matériels et logiciels courants des ordinateurs.",
    date: "15-19 Décembre 2025",
    location: "Bordeaux, France",
    duration: "30 heures",
    instructor: "Ir. Evra Lashe",
    price: "1,500€",
    seats: 15,
    level: "Débutant",
    image: "../lovable-uploads/teachs/10.png" // Updated path
  },
  {
    title: "Technologies de Virtualisation (VMware & Hyper-V)",
    description: "Explorez les concepts de virtualisation et maîtrisez l'utilisation des plateformes comme VMware vSphere et Microsoft Hyper-V.",
    date: "05-09 Janvier 2026",
    location: "Lyon, France",
    duration: "35 heures",
    instructor: "Ir. Grace Moko",
    price: "2,100€",
    seats: 12,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/11.png" // Updated path
  },

  // Autres formations précédentes, si vous souhaitez les conserver, ajustez les dates et les images
  {
    title: "Cloud computing : Fondamentaux AWS",
    description: "Introduction aux services essentiels d'Amazon Web Services (AWS) pour le déploiement et la gestion d'infrastructures cloud.",
    date: "10-14 Mars 2026",
    location: "Paris, La Défense, France",
    duration: "35 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,000€",
    seats: 12,
    level: "Débutant",
    image: "../lovable-uploads/teachs/12.png" // Updated path
  },
  {
    title: "Cybersécurité : Analyse des menaces et réponse aux incidents",
    description: "Apprenez à identifier, analyser et répondre aux menaces de cybersécurité pour protéger les systèmes et les données.",
    date: "24-28 Mars 2026",
    location: "Rennes, France",
    duration: "40 heures",
    instructor: "Ir. Benjamin Baki",
    price: "2,500€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/13.png" // Updated path
  },
  {
    title: "Bases de données : SQL et NoSQL",
    description: "Maîtrise des concepts fondamentaux des bases de données relationnelles (SQL) et non-relationnelles (NoSQL) pour la gestion des données.",
    date: "07-11 Avril 2026",
    location: "Montpellier, France",
    duration: "30 heures",
    instructor: "Ir. Evra Lashe",
    price: "1,700€",
    seats: 15,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/14.png" // Updated path
  },
  {
    title: "Développement Web Full-Stack : React et Node.js",
    description: "Apprenez à construire des applications web complètes en utilisant React pour le frontend et Node.js pour le backend.",
    date: "21-25 Avril 2026",
    location: "Bordeaux, France",
    duration: "45 heures",
    instructor: "Ir. Grace Moko",
    price: "2,800€",
    seats: 8,
    level: "Avancé",
    image: "../lovable-uploads/teachs/15.png" // Updated path
  },
  {
    title: "Intelligence Artificielle : Introduction au machine learning",
    description: "Découvrez les principes du Machine Learning, les algorithmes clés et leurs applications pratiques.",
    date: "05-09 Mai 2026",
    location: "Grenoble, France",
    duration: "35 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,300€",
    seats: 10,
    level: "Débutant",
    image: "../lovable-uploads/teachs/16.png" // Updated path
  },
  {
    title: "Gestion de projet IT : Méthodes agiles (Scrum)",
    description: "Maîtrisez les principes et les pratiques de la méthodologie Scrum pour la gestion efficace de projets informatiques.",
    date: "19-23 Mai 2026",
    location: "Lille, France",
    duration: "25 heures",
    instructor: "Ir. Benjamin Baki",
    price: "1,500€",
    seats: 15,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/17.png" // Updated path
  },
  {
    title: "DevOps : CI/CD avec Jenkins et Docker",
    description: "Mise en place de pipelines d'intégration continue et de déploiement continu (CI/CD) avec Jenkins et Docker.",
    date: "02-06 Juin 2026",
    location: "Nantes, France",
    duration: "40 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,600€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/18.png" // Updated path
  },
  {
    title: "Big Data : Introduction à hadoop et spark",
    description: "Découvrez les concepts du Big Data et explorez les frameworks Hadoop et Spark pour le traitement de données massives.",
    date: "16-20 Juin 2026",
    location: "Strasbourg, France",
    duration: "35 heures",
    instructor: "Ir. Grace Moko",
    price: "2,400€",
    seats: 12,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/19.png" // Updated path
  },
  {
    title: "Sécurité offensive : Pentesting Web Applications",
    description: "Apprenez les techniques de test d'intrusion pour identifier les vulnérabilités dans les applications web.",
    date: "30 Juin - 04 Juillet 2026",
    location: "Paris, Cyber Campus, La Défense, France",
    duration: "40 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,900€",
    seats: 8,
    level: "Avancé",
    image: "../lovable-uploads/teachs/20.png" // Updated path
  },
  {
    title: "Blockchain : Fondamentaux et Applications",
    description: "Comprenez la technologie blockchain, son fonctionnement et ses cas d'utilisation dans divers secteurs.",
    date: "14-18 Juillet 2026",
    location: "Nice, France",
    duration: "30 heures",
    instructor: "Ir. Benjamin Baki",
    price: "1,950€",
    seats: 15,
    level: "Débutant",
    image: "../lovable-uploads/teachs/21.png" // Updated path
  },
  // --- Ajout de 15 nouvelles formations ---
  {
    title: "Réseaux d'entreprise : Conception et Déploiement",
    description: "Concevez et déployez des architectures réseau robustes pour les environnements d'entreprise.",
    date: "01-05 Août 2026",
    location: "Lyon, France",
    duration: "40 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,250€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/22.png" // Updated path
  },
  {
    title: "Administration de bases de données NoSQL (MongoDB)",
    description: "Maîtrise de l'administration et de l'optimisation des bases de données NoSQL, avec un focus sur MongoDB.",
    date: "15-19 Août 2026",
    location: "Toulouse, France",
    duration: "35 heures",
    instructor: "Ir. Grace Moko",
    price: "2,100€",
    seats: 12,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/23.png" // Updated path
  },
  {
    title: "Automatisation IT avec Python",
    description: "Apprenez à automatiser les tâches d'administration système et réseau à l'aide de scripts Python.",
    date: "01-05 Septembre 2026",
    location: "Paris, France",
    duration: "30 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "1,800€",
    seats: 15,
    level: "Débutant",
    image: "../lovable-uploads/teachs/24.png" // Updated path
  },
  {
    title: "Sécurité cloud : Azure et Google Cloud",
    description: "Sécurisez vos infrastructures et applications déployées sur Microsoft Azure et Google Cloud Platform.",
    date: "15-19 Septembre 2026",
    location: "Marseille, France",
    duration: "40 heures",
    instructor: "Ir. Benjamin Baki",
    price: "2,700€",
    seats: 8,
    level: "Avancé",
    image: "../lovable-uploads/teachs/25.png" // Updated path
  },
  {
    title: "Développement mobile : Android avec Kotlin",
    description: "Créez des applications natives pour Android en utilisant le langage de programmation Kotlin.",
    date: "01-05 Octobre 2026",
    location: "Bordeaux, France",
    duration: "45 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,900€",
    seats: 10,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/26.png" // Updated path
  },
  {
    title: "Gestion de la continuité d'activité et reprise après sinistre (BCDR)",
    description: "Mettez en place des stratégies de BCDR pour assurer la résilience de vos systèmes d'information.",
    date: "15-19 Octobre 2026",
    location: "Lille, France",
    duration: "35 heures",
    instructor: "Ir. Grace Moko",
    price: "2,200€",
    seats: 12,
    level: "Avancé",
    image: "../lovable-uploads/teachs/27.png" // Updated path
  },
  {
    title: "Réseaux sans fil : Wi-Fi 6 et au-delà",
    description: "Explorez les dernières avancées en matière de réseaux sans fil, y compris le standard Wi-Fi 6 et les futures évolutions.",
    date: "01-05 Novembre 2026",
    location: "Nantes, France",
    duration: "30 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "1,900€",
    seats: 15,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/28.png" // Updated path
  },
  {
    title: "Administration de systèmes de stockage (SAN/NAS)",
    description: "Gérez et optimisez les solutions de stockage en réseau (SAN et NAS) pour les environnements d'entreprise.",
    date: "15-19 Novembre 2026",
    location: "Strasbourg, France",
    duration: "40 heures",
    instructor: "Ir. Benjamin Baki",
    price: "2,400€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/29.png" // Updated path
  },
  {
    title: "Audit de sécurité des systèmes d'information",
    description: "Réalisez des audits de sécurité complets pour évaluer et améliorer la posture de sécurité de votre organisation.",
    date: "01-05 Décembre 2026",
    location: "Paris, France",
    duration: "45 heures",
    instructor: "Ir. Evra Lashe",
    price: "3,100€",
    seats: 8,
    level: "Avancé",
    image: "../lovable-uploads/teachs/30.png" // Updated path
  },
  {
    title: "Conteneurisation avancée : Docker Swarm et Podman",
    description: "Maîtrisez l'orchestration de conteneurs avec Docker Swarm et explorez Podman comme alternative à Docker.",
    date: "15-19 Décembre 2026",
    location: "Lyon, France",
    duration: "35 heures",
    instructor: "Ir. Grace Moko",
    price: "2,500€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/31.png" // Updated path
  },
  {
    title: "Gestion des identités et des accès (IAM)",
    description: "Implémentez des solutions de gestion des identités et des accès pour sécuriser les ressources de l'entreprise.",
    date: "05-09 Janvier 2027",
    location: "Toulouse, France",
    duration: "30 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,000€",
    seats: 12,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/32.png" // Updated path
  },
  {
    title: "Supervision et monitoring des infrastructures IT",
    description: "Mettez en place des outils et des stratégies de supervision pour garantir la disponibilité et la performance de vos systèmes.",
    date: "19-23 Janvier 2027",
    location: "Bordeaux, France",
    duration: "35 heures",
    instructor: "Ir. Benjamin Baki",
    price: "2,100€",
    seats: 15,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/33.png" // Updated path
  },
  {
    title: "Réseaux définis par logiciel (SDN) et NFV",
    description: "Explorez les concepts de SDN et NFV pour une gestion plus flexible et automatisée des réseaux.",
    date: "02-06 Février 2027",
    location: "Nice, France",
    duration: "40 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,600€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/34.png" // Updated path
  },
  {
    title: "Virtualisation de poste de travail (VDI)",
    description: "Déployez et gérez des infrastructures de virtualisation de poste de travail pour un accès sécurisé et flexible.",
    date: "16-20 Février 2027",
    location: "Montpellier, France",
    duration: "35 heures",
    instructor: "Ir. Grace Moko",
    price: "2,300€",
    seats: 12,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/35.png" // Updated path
  },
  {
    title: "Gestion des services IT (ITSM) avec ITIL",
    description: "Apprenez les meilleures pratiques ITIL pour la gestion des services informatiques et l'amélioration continue.",
    date: "02-06 Mars 2027",
    location: "Lille, France",
    duration: "25 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "1,750€",
    seats: 15,
    level: "Débutant",
    image: "../lovable-uploads/teachs/36.png" // Updated path
  },
  // NOUVELLES FORMATIONS AJOUTÉES
  {
    title: "Sécurité Opérationnelle (SecOps)",
    description: "Maîtrisez les pratiques et outils pour intégrer la sécurité dans les opérations quotidiennes de l'IT.",
    date: "20-24 Mars 2027",
    location: "Paris, France",
    duration: "40 heures",
    instructor: "Ir. Benjamin Baki",
    price: "2,800€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/37.png" // Updated path
  },
  {
    title: "Développement Python pour la Data Science",
    description: "Apprenez à utiliser Python et ses bibliothèques (NumPy, Pandas, Scikit-learn) pour l'analyse et la modélisation de données.",
    date: "03-07 Avril 2027",
    location: "Grenoble, France",
    duration: "35 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,200€",
    seats: 14,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/38.png" // Updated path
  },
  {
    title: "Cloud Native Computing (Kubernetes, Microservices)",
    description: "Concevez, déployez et gérez des applications modernes basées sur des microservices et Kubernetes.",
    date: "17-21 Avril 2027",
    location: "Nantes, France",
    duration: "45 heures",
    instructor: "Ir. Grace Moko",
    price: "3,000€",
    seats: 8,
    level: "Avancé",
    image: "../lovable-uploads/teachs/39.png" // Updated path
  },
  {
    title: "Gestion des projets agiles à l'échelle (SAFe)",
    description: "Implémentez le framework Scaled Agile Framework (SAFe) pour gérer des projets agiles dans de grandes organisations.",
    date: "08-12 Mai 2027",
    location: "Lille, France",
    duration: "30 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,400€",
    seats: 10,
    level: "Avancé",
    image: "../lovable-uploads/teachs/40.png" // Updated path
  },
  {
    title: "Ingénierie du prompt pour l'IA Générative",
    description: "Maîtrisez l'art de créer des prompts efficaces pour interagir avec les modèles d'IA générative et en tirer le meilleur parti.",
    date: "22-26 Mai 2027",
    location: "Lyon, France",
    duration: "25 heures",
    instructor: "Ir. Benjamin Baki",
    price: "1,900€",
    seats: 16,
    level: "Débutant",
    image: "../lovable-uploads/teachs/41.png" // Updated path
  },
  {
    title: "Sécurité des applications Web (OWASP Top 10)",
    description: "Identifiez et corrigez les vulnérabilités les plus courantes des applications web selon l'OWASP Top 10.",
    date: "05-09 Juin 2027",
    location: "Toulouse, France",
    duration: "40 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,700€",
    seats: 9,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/42.png" // Updated path
  },
  {
    title: "Gestion des bases de données relationnelles (PostgreSQL)",
    description: "Apprenez à administrer, optimiser et sécuriser les bases de données PostgreSQL.",
    date: "19-23 Juin 2027",
    location: "Bordeaux, France",
    duration: "35 heures",
    instructor: "Ir. Grace Moko",
    price: "2,000€",
    seats: 13,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/43.png" // Updated path
  },
  {
    title: "Réseaux 5G Privés et Industriels",
    description: "Déploiement et gestion de réseaux 5G privés pour des applications industrielles critiques (IoT, usine 4.0).",
    date: "03-07 Juillet 2027",
    location: "Marseille, France",
    duration: "40 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "3,200€",
    seats: 7,
    level: "Avancé",
    image: "../lovable-uploads/teachs/44.png" // Updated path
  },
  {
    title: "Audit et Conformité RGPD pour les SI",
    description: "Comprenez les exigences du RGPD et apprenez à réaliser des audits pour assurer la conformité de vos systèmes d'information.",
    date: "17-21 Juillet 2027",
    location: "Strasbourg, France",
    duration: "30 heures",
    instructor: "Ir. Benjamin Baki",
    price: "2,500€",
    seats: 11,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/45.png" // Updated path
  },
  {
    title: "Systèmes embarqués et IoT",
    description: "Conception, développement et déploiement de solutions pour les systèmes embarqués et l'Internet des Objets (IoT).",
    date: "07-11 Août 2027",
    location: "Nice, France",
    duration: "45 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,950€",
    seats: 9,
    level: "Avancé",
    image: "../lovable-uploads/teachs/46.png" // Updated path
  },
  // NOUVELLES FORMATIONS AJOUTÉES
  {
    title: "Cisco CCNA: Réseaux Essentiels",
    description: "Acquérez les compétences fondamentales en routage, commutation et services réseau pour la certification Cisco CCNA.",
    date: "21-25 Août 2027",
    location: "Paris, France",
    duration: "40 heures",
    instructor: "Ir. Grace Moko",
    price: "2,400€",
    seats: 10,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/47.png" // Updated path
  },
  {
    title: "Administration Avancée Linux (Red Hat/CentOS)",
    description: "Maîtrisez les concepts avancés d'administration système Linux, la gestion des performances et la sécurité sur Red Hat/CentOS.",
    date: "04-08 Septembre 2027",
    location: "Lyon, France",
    duration: "45 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,200€",
    seats: 8,
    level: "Avancé",
    image: "../lovable-uploads/teachs/48.png" // Updated path
  },
  {
    title: "Windows Server 2022 : Haute Disponibilité et Sauvegarde",
    description: "Implémentez des solutions de haute disponibilité et de récupération après sinistre sur Windows Server 2022.",
    date: "18-22 Septembre 2027",
    location: "Toulouse, France",
    duration: "35 heures",
    instructor: "Ir. Benjamin Baki",
    price: "2,150€",
    seats: 12,
    level: "Avancé",
    image: "../lovable-uploads/teachs/49.png" // Updated path
  },
  {
    title: "Sécurité Réseau Cisco (CCNA Security)",
    description: "Protégez les réseaux en implémentant des solutions de sécurité Cisco, y compris les VPN, les pare-feu et les IPS.",
    date: "02-06 Octobre 2027",
    location: "Marseille, France",
    duration: "40 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,600€",
    seats: 9,
    level: "Avancé",
    image: "../lovable-uploads/teachs/50.png" // Updated path
  },
  {
    title: "Scripting Shell pour l'Administration Linux",
    description: "Apprenez à automatiser les tâches d'administration système Linux avec des scripts Bash et d'autres outils shell.",
    date: "16-20 Octobre 2027",
    location: "Bordeaux, France",
    duration: "30 heures",
    instructor: "Ir. Grace Moko",
    price: "1,700€",
    seats: 14,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/51.png" // Updated path
  },
  {
    title: "PowerShell pour l'Administration Windows",
    description: "Maîtrisez PowerShell pour automatiser et gérer efficacement les environnements Windows Server et clients.",
    date: "30 Octobre - 03 Novembre 2027",
    location: "Lille, France",
    duration: "35 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "1,850€",
    seats: 13,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/52.png" // Updated path
  },
  {
    title: "Préparation Examen Cisco CCNP Enterprise (ENCORE)",
    description: "Préparez-vous à l'examen ENCORE (Implementing and Operating Cisco Enterprise Network Core Technologies) pour la certification CCNP.",
    date: "13-17 Novembre 2027",
    location: "Nantes, France",
    duration: "45 heures",
    instructor: "Ir. Benjamin Baki",
    price: "3,500€",
    seats: 7,
    level: "Avancé",
    image: "../lovable-uploads/teachs/53.png" // Updated path
  },
  {
    title: "Déploiement et Gestion de Conteneurs avec Docker (Linux)",
    description: "Apprenez à déployer, gérer et orchestrer des applications conteneurisées avec Docker sur des systèmes Linux.",
    date: "27 Novembre - 01 Décembre 2027",
    location: "Strasbourg, France",
    duration: "30 heures",
    instructor: "Ir. Evra Lashe",
    price: "2,000€",
    seats: 12,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/54.png" // Updated path
  },
  {
    title: "Gestion des GPO et WSUS sur Windows Server",
    description: "Optimisez la gestion de votre parc Windows avec les GPO (Group Policy Objects) et WSUS (Windows Server Update Services).",
    date: "11-15 Décembre 2027",
    location: "Paris, France",
    duration: "35 heures",
    instructor: "Ir. Grace Moko",
    price: "1,950€",
    seats: 11,
    level: "Intermédiaire",
    image: "../lovable-uploads/teachs/55.png" // Updated path
  },
  {
    title: "Troubleshooting Réseau Avancé (Cisco)",
    description: "Développez des compétences avancées pour diagnostiquer et résoudre des problèmes complexes sur les réseaux Cisco.",
    date: "08-12 Janvier 2028",
    location: "Lyon, France",
    duration: "40 heures",
    instructor: "Ir. Kevine Etanaka",
    price: "2,800€",
    seats: 8,
    level: "Avancé",
    image: "../lovable-uploads/teachs/56.png" // Updated path
  },
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
