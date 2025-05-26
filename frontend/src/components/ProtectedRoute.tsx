import React from 'react';
import { Navigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo = '/signup'
}) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    // Check if user is authenticated
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user && JSON.parse(user).isAuthenticated);
  }, []);

  // While checking authentication status
  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-blue-100 mb-4"></div>
          <div className="h-4 w-48 bg-blue-100 rounded"></div>
        </div>
      </div>
    );
  }

  // If not authenticated, show a custom alert
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="w-full max-w-md">
          <Alert className="mb-4 border-blue-200 bg-blue-50">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-800 font-medium text-lg">
              Accès restreint
            </AlertTitle>
            <AlertDescription className="text-blue-700 mt-2 text-center"> {/* Added text-center here */}
              <p className="mb-4">
                Vous devez être inscrit pour accéder au calendrier des formations.
                Créez un compte ou connectez-vous pour continuer.
              </p>
              <div className="flex flex-wrap gap-3 mt-2 justify-center"> {/* Added justify-center here for buttons */}
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
        </div>
      </div>
    );
  }

  // User is authenticated, render children
  return <>{children}</>;
};

export default ProtectedRoute;
