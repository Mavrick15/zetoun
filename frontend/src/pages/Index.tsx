import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="ZL - IT Services & Training" 
        description="Zetoun Labs: Pioneering smart engineering solutions with textile sensors for sports, safety, and performance monitoring."
        keywords={['smart textiles', 'wearable technology', 'textile sensors', 'sports tech', 'safety monitoring', 'performance analytics', 'manufacturing']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      <BlogPreview />
      
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Nos formations techniques</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez nos programmes de formation spécialisés pour développer vos compétences techniques
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Link to="/formations/linux-administration" className="inline-block px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
              Admin. système sous Linux
            </Link>
	    <Link to="/formations/windows-administration" className="inline-block px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
              Admin. système sous Windows
            </Link>
            <Link to="/formations/network-administration" className="inline-block px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
              Admin. Réseaux
            </Link>
            <Link to="/formations/computer-maintenance" className="inline-block px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
              Maintenance Informatique
            </Link>
            <Link to="/formations/virtualization-training" className="inline-block px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
              Virtualisation
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
