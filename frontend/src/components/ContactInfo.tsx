
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="bg-gradient-to-b from-white to-black text-white relative py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Contactez-nous
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contactez-nous dès aujourd’hui
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Et si le numérique devenait le moteur de votre croissance ?
          </p>
	  <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Comment Zetoun Labs peut transformer vos idées en solutions concrètes. Contactez notre équipe dès aujourd’hui et construisons ensemble votre avenir digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Felix's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/moi.jpg"
                alt="Benjamin Baki"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Benjamin Baki</h3>
              <p className="text-gray-600 mb-4">Co-Founder and CEO</p>
              <div className="flex flex-col space-y-3">
                <a href="benyamin@zetounlabs.cd" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  benyamin@zetounlabs.cd
                </a>
                <a 
                  href="https://www.linkedin.com/in/benyamin-baki-a659b421b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Benyamin Baki
                </a>
 		<a href="tel:+243812583947" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +243 812 583 947
                </a>
              </div>
            </div>
          </div>

          {/* Love's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/tendo.jpg"
                alt="Christian Tendo"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Christian Tendo</h3>
              <p className="text-gray-600 mb-4">Co-Founder and CTO</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:tendo@zetounlabs.cd" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  Tendo@zetounlabs.cd
                </a>
                <a 
                  href="https://www.linkedin.com/in/love-anderberg-67549a174/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Tendo Christian
                </a>
                <a href="tel:+243996748628" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +243 996 748 628
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
