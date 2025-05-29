import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

// Définition des informations de contact
const contactInfos = [
  {
    name: "Benjamin Baki",
    role: "Co-Founder and CEO",
    image: "/lovable-uploads/img/moi.jpg",
    email: "benyamin@zetounlabs.cd",
    linkedin: "https://www.linkedin.com/in/benyamin-baki-a659b421b/",
    phone: "+243 812 583 947",
  },
  {
    name: "Christian Tendo",
    role: "Co-Founder and CTO",
    image: "/lovable-uploads/img/tendo.jpg",
    email: "tendo@zetounlabs.cd",
    linkedin: "https://www.linkedin.com/in/love-anderberg-67549a174/",
    phone: "+243 996 748 628",
  },
  {
    name: "Evra Lashe",
    role: "Co-Founder and COO",
    image: "/lovable-uploads/img/evra.jpg",
    email: "evra@zetounlabs.cd",
    linkedin: "https://www.linkedin.com/in/love-anderberg-67549a174/",
    phone: "+243 810 675 543",
  },
  {
    name: "Kevine Etanaka",
    role: "Co-Founder and CFO",
    image: "/lovable-uploads/img/kevine.jpg",
    email: "kevine@zetounlabs.cd",
    linkedin: "https://www.linkedin.com/in/love-anderberg-67549a174/",
    phone: "+243 996 748 628",
  },
  {
    name: "Glody Nzuzi",
    role: "Co-Founder and COO",
    image: "/lovable-uploads/img/glody.jpg",
    email: "glody@zetounlabs.cd",
    linkedin: "https://www.linkedin.com/in/love-anderberg-67549a174/",
    phone: "+243 819 078 812",
  },
  {
    name: "Grace Moke",
    role: "Co-Founder and CMO",
    image: "/lovable-uploads/img/grace.jpg",
    email: "grace@zetounlabs.cd",
    linkedin: "https://www.linkedin.com/in/love-anderberg-67549a174/",
    phone: "+243 994 484 982",
  },
  // Vous pouvez ajouter d'autres contacts ici
];

const ContactCard = ({ info }) => (
  <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700">
    <div className="flex flex-col items-center text-center">
      <img
        src={info.image}
        alt={info.name}
        className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
      />
      <h3 className="text-xl font-bold text-gray-900">{info.name}</h3>
      <p className="text-gray-600 mb-4">{info.role}</p>
      <div className="flex flex-col space-y-3">
        <a href={`mailto:${info.email}`} className="flex items-center text-gray-700 hover:text-blue-600">
          <Mail className="w-5 h-5 mr-2" />
          {info.email}
        </a>
        <a
          href={info.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          {info.name.split(' ')[0]} {info.name.split(' ')[1]}
        </a>
        <a href={`tel:${info.phone}`} className="flex items-center text-gray-700 hover:text-blue-600">
          <Phone className="w-5 h-5 mr-2" />
          {info.phone}
        </a>
      </div>
    </div>
  </div>
);

const ContactInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contactInfos.length);
    }, 5 * 60 * 1000); // 5 minutes en millisecondes

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-black text-white relative py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Contactez-nous
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contactez-nous dès aujourd’hui
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-4">
            Et si le numérique devenait le moteur de votre croissance ?
          </p>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Comment Zetoun Labs peut transformer vos idées en solutions concrètes. Contactez notre équipe dès aujourd’hui et construisons ensemble votre avenir digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ContactCard info={contactInfos[currentIndex % contactInfos.length]} />
          {contactInfos.length > 1 && (
            <ContactCard info={contactInfos[(currentIndex + 1) % contactInfos.length]} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
