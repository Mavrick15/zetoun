import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion"; // Import motion

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo = '/signup'
}) => {
  const navigate = useNavigate();
  // State pour suivre l'état d'authentification de l'utilisateur
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    // Vérifie si l'utilisateur est authentifié en lisant le localStorage
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user && JSON.parse(user).isAuthenticated);
  }, []); // Exécuté une seule fois au montage du composant

  // Définition des variantes pour les animations Framer Motion
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const loadingVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const alertVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4, type: 'spring', stiffness: 100 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  // Afficher un état de chargement pendant que l'authentification est vérifiée
  if (isAuthenticated === null) {
    return (
      <motion.div
        variants={loadingVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex justify-center items-center min-h-[60vh]"
      >
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-blue-100 mb-4"></div>
          <div className="h-4 w-48 bg-blue-100 rounded"></div>
        </div>
      </motion.div>
    );
  }

  // Si l'utilisateur n'est pas authentifié, afficher une alerte personnalisée
  if (!isAuthenticated) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center min-h-[60vh] px-4"
      >
        <motion.div
          variants={alertVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full max-w-md"
        >
          <Alert className="mb-4 border-blue-200 bg-blue-50">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-800 font-medium text-lg">
              Accès restreint
            </AlertTitle>
            <AlertDescription className="text-blue-700 mt-2 text-center">
              <p className="mb-4">
                Vous devez être inscrit pour accéder au calendrier des formations.
                Créez un compte ou connectez-vous pour continuer.
              </p>
              <div className="flex flex-wrap gap-3 mt-2 justify-center">
                <Button
                  onClick={() => navigate('/signup')}
                  variant="default"
                >
                  S'inscrire
                </Button>
                <Button
                  onClick={() => navigate('/login')}
                  variant="outline"
                  className="border-blue-300"
                >
                  Se connecter
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </motion.div>
      </motion.div>
    );
  }

  // Si l'utilisateur est authentifié, rendre les composants enfants
  return <>{children}</>;
};

export default ProtectedRoute;
