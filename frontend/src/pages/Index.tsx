import React, { useEffect, lazy, Suspense } from 'react'; // Importez lazy et Suspense
import { Link } from 'react-router-dom'; // Toujours là si utilisé par des sous-composants
import { motion } from 'framer-motion'; // Import motion

// Importation dynamique des composants pour le lazy loading
const PageLayout = lazy(() => import('@/components/PageLayout'));
const Hero = lazy(() => import('@/components/Hero'));
const Features = lazy(() => import('@/components/Features'));
const Projects = lazy(() => import('@/components/Projects'));
const WhyWrlds = lazy(() => import('@/components/WhyWrlds'));
const BlogPreview = lazy(() => import('@/components/BlogPreview'));
const SEO = lazy(() => import('@/components/SEO')); // SEO peut aussi être lazy chargé

const Index = () => {
  // Correction des conflits d'ID lorsque la page se charge
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // S'il y a plusieurs éléments avec id="contact", renommez-en un
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 },
  };

  return (
    // Suspense est nécessaire pour envelopper les composants lazy-chargés
    <Suspense fallback={<div>Chargement de la page...</div>}>
      <PageLayout>
        {/* Balises SEO optimisées pour Kinshasa */}
        <SEO
          title="Zetoun Labs - Services IT & Formations | Kinshasa"
          description="Zetoun Labs offre des services IT complets et des formations certifiantes à Kinshasa, incluant le développement logiciel, la cybersécurité, l'ingénierie réseau et l'installation solaire. Boostez votre entreprise et vos compétences avec nos solutions innovantes."
          keywords={[
            'services IT Kinshasa',
            'formations IT Kinshasa',
            'développement logiciel Kinshasa',
            'cybersécurité RDC',
            'ingénierie réseau Kinshasa',
            'installation solaire Kinshasa',
            'Zetoun Labs',
            'IT Congo',
            'formation professionnelle IT'
          ]}
        />
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Hero />
          <Features />
          <WhyWrlds />
          <Projects />
          <BlogPreview />
        </motion.div>
      </PageLayout>
    </Suspense>
  );
};

export default Index;
