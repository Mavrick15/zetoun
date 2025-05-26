
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6">
                <AlertCircle className="h-10 w-10 text-red-600" />
              </div>

              <h1 className="text-5xl font-bold text-gray-900 dark:text-white font-space">404</h1>
              <p className="mt-3 text-xl font-medium text-gray-700 dark:text-gray-300">Page introuvable</p>
              <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                Désolé, nous n'avons pas pu trouver la page que vous recherchez.
              </p>

              <div className="mt-8 space-y-4">
                <Button 
                  className="w-full hover:scale-105 transition-transform"
                  onClick={() => navigate(-1)}
                >
                  Retourner en arrière
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full hover:bg-gray-100 dark:hover:bg-gray-800" 
                  onClick={() => navigate("/")}
                >
                  Retourner à l'accueil
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
