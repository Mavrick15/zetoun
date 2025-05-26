
import React from 'react';
import { Mail, Linkedin, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ContactInfo = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Contactez-nous
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 mb-12"
            >
              Vous souhaitez en savoir plus sur nos formations ou avoir des informations personnalisées ? 
              N'hésitez pas à nous contacter directement.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Felix's Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200"
              >
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png"
                    alt="Felix von Heland"
                    className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
                  />
                  <h3 className="text-xl font-bold text-gray-900">Felix von Heland</h3>
                  <p className="text-gray-600 mb-4">Directeur des formations</p>
                  <div className="flex flex-col space-y-3">
                    <a href="mailto:felix@wrlds.com" className="flex items-center text-gray-700 hover:text-blue-600">
                      <Mail className="w-5 h-5 mr-2" />
                      felix@wrlds.com
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/felixvonheland/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Love's Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200"
              >
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                    alt="Love Anderberg"
                    className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
                  />
                  <h3 className="text-xl font-bold text-gray-900">Love Anderberg</h3>
                  <p className="text-gray-600 mb-4">Responsable pédagogique</p>
                  <div className="flex flex-col space-y-3">
                    <a href="mailto:love@wrlds.com" className="flex items-center text-gray-700 hover:text-blue-600">
                      <Mail className="w-5 h-5 mr-2" />
                      love@wrlds.com
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/love-anderberg-67549a174/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn Profile
                    </a>
                    <a href="tel:+46760149508" className="flex items-center text-gray-700 hover:text-blue-600">
                      <Phone className="w-5 h-5 mr-2" />
                      076-014 95 08
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4">Informations complémentaires</h3>
              <p className="mb-4">
                Nos formations sont disponibles en présentiel et en distanciel. Nous proposons également des solutions 
                sur mesure pour les entreprises qui souhaitent former leurs équipes sur des technologies spécifiques.
              </p>
              <p className="mb-2">
                N'hésitez pas à nous contacter pour toute question ou pour réserver votre place dans l'une de nos formations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactInfo;
