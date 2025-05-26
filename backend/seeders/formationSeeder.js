const mongoose = require('mongoose');
const Formation = require('../models/Formation');
const connectDB = require('../config/db');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Sample formation data
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
  }
];

// Seed formations
const seedFormations = async () => {
  try {
    // Clear existing data
    await Formation.deleteMany();

    // Insert new data
    const createdFormations = await Formation.insertMany(formationData);

    console.log(`${createdFormations.length} formations inserted`);
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run the seeder
//seedFormations();
module.exports = seedFormations;
