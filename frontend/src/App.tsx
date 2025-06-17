import React, { useState, lazy, Suspense } from "react"; // Ajout de lazy et Suspense
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importations dynamiques pour le lazy loading de toutes les pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FireCatProject = lazy(() => import("./pages/FireCatProject"));
const SportRetailProject = lazy(() => import("./pages/SportRetailProject"));
const DevelopmentProcess = lazy(() => import("./pages/DevelopmentProcess"));
const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostDetail = lazy(() => import("./pages/BlogPostDetail"));
const NetworkEngineering = lazy(() => import("./pages/services/NetworkEngineering"));
const VideoSurveillance = lazy(() => import("./pages/services/VideoSurveillance"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const ITManagement = lazy(() => import("./pages/services/ITManagement"));
const TechnicalSupport = lazy(() => import("./pages/services/TechnicalSupport"));
const SolarInstallation = lazy(() => import("./pages/services/SolarInstallation"));
const LinuxAdministration = lazy(() => import("./pages/formations/LinuxAdministration"));
const NetworkAdministration = lazy(() => import("./pages/formations/NetworkAdministration"));
const ComputerMaintenance = lazy(() => import("./pages/formations/ComputerMaintenance"));
const WindowsAdministration = lazy(() => import("./pages/formations/WindowsAdministration"));
const VirtualizationTraining = lazy(() => import("./pages/formations/VirtualizationTraining"));
const TelecomOpinion = lazy(() => import("./pages/add/TelecomOpinion"));
const TelecomCalendar = lazy(() => import("./pages/add/TelecomCalendar"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute")); // Le ProtectedRoute lui-même peut être lazy-chargé s'il n'est pas essentiel au démarrage

// Composant simple de limite d'erreur
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l'état pour que le prochain rendu affiche l'UI de secours.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez également enregistrer l'erreur dans un service de rapport d'erreurs
    console.error("Erreur détectée par ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle UI de secours personnalisée
      return (
        <div className="flex items-center justify-center min-h-screen bg-red-50 text-red-700 p-4 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Oups ! Quelque chose s'est mal passé.
            </h2>
            <p className="mb-2">
              Nous rencontrons un problème pour afficher cette partie de la page.
            </p>
            <p className="text-sm text-red-500">
              Veuillez essayer de rafraîchir la page ou de revenir plus tard.
            </p>
            {/* Pour le débogage, vous pouvez afficher les détails de l'erreur en mode développement */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left p-2 bg-red-100 rounded">
                <summary>Détails de l'erreur</summary>
                <pre className="whitespace-pre-wrap break-all text-xs">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Suspense est nécessaire pour envelopper toutes les routes lazy-chargées */}
          {/* Limite d'erreur ajoutée autour de Suspense pour une meilleure gestion des erreurs */}
          <ErrorBoundary>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen text-lg text-gray-700">
                Chargement de la page...
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects/firecat" element={<FireCatProject />} />
                <Route path="/projects/sport-retail" element={<SportRetailProject />} />
                <Route path="/development-process" element={<DevelopmentProcess />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPostDetail />} />
                <Route path="/services/network-engineering" element={<NetworkEngineering />} />
                <Route path="/services/video-surveillance" element={<VideoSurveillance />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/it-management" element={<ITManagement />} />
                <Route path="/services/technical-support" element={<TechnicalSupport />} />
                <Route path="/services/solar-installation" element={<SolarInstallation />} />
                <Route path="/formations/linux-administration" element={<LinuxAdministration />} />
                <Route path="/formations/windows-administration" element={<WindowsAdministration />} />
                <Route path="/formations/virtualization-training" element={<VirtualizationTraining />} />
                <Route path="/formations/network-administration" element={<NetworkAdministration />} />
                <Route path="/formations/computer-maintenance" element={<ComputerMaintenance />} />
                <Route path="/add/telecom-opinion" element={<TelecomOpinion />} />
                <Route path="/add/telecom-calendar" element={
                  <ProtectedRoute>
                    <TelecomCalendar />
                  </ProtectedRoute>
                } />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
