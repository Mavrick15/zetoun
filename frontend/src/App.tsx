
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import NetworkEngineering from "./pages/services/NetworkEngineering";
import VideoSurveillance from "./pages/services/VideoSurveillance";
import WebDevelopment from "./pages/services/WebDevelopment";
import ITManagement from "./pages/services/ITManagement";
import TechnicalSupport from "./pages/services/TechnicalSupport";
import SolarInstallation from "./pages/services/SolarInstallation";
import LinuxAdministration from "./pages/formations/LinuxAdministration";
import NetworkAdministration from "./pages/formations/NetworkAdministration";
import ComputerMaintenance from "./pages/formations/ComputerMaintenance";
import WindowsAdministration from "./pages/formations/WindowsAdministration";
import VirtualizationTraining from "./pages/formations/VirtualizationTraining";
import TelecomOpinion from "./pages/add/TelecomOpinion";
import TelecomCalendar from "./pages/add/TelecomCalendar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
