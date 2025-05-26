import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Factory, Code, Truck, LifeBuoy, CheckCircle, Rocket, MonitorCog, BrainCog, Handshake, RefreshCcw, MessageSquare } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);
  const sensorCaseStudies = [{
    image: "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png",
    title: "Firefighter Safety",
    description: "Advanced protective gear with gas, temperature, positioning, and motion sensors for safer emergency response."
  }, {
    image: "/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png",
    title: "Industrial Worker Protection",
    description: "Safety workwear with vibration, pressure, and heating sensors to prevent injuries and monitor environmental hazards."
  }, {
    image: "/lovable-uploads/c5f8ee24-9815-4ebe-b65d-6f3d449feb8b.png",
    title: "Sports Performance",
    description: "Smart athletic wear with temperature and pressure sensors that track hydration, foot strike patterns, and performance metrics."
  }];
  const stepFlowItems = [{
    icon: <BrainCog className="h-10 w-10 text-gray-700" />,
    title: "Analyse & planification",
    description: "Analyser les besoins du client afin de définir une solution sur-mesure, allouer les ressources adéquates et établir un planning clair."
  }, {
    icon: <MonitorCog className="h-10 w-10 text-gray-700" />,
    title: "Développement & déploiement",
    description: "Concevoir l’architecture, implémenter les fonctionnalités et assurer le déploiement opérationnel de la solution adaptée"
  }, {
    icon: <LifeBuoy className="h-10 w-10 text-gray-700" />,
    title: "Support & optimisation",
    description: "Garantir la pérennité des solutions à travers un support réactif, une maintenance fiable et une optimisation continue"
  }];
  const sprintPhases = [{
    name: "Planification",
    icon: <CheckCircle className="h-4 w-4" />
  }, {
    name: "Développement",
    icon: <Code className="h-4 w-4" />
  }, {
    name: "Essais",
    icon: <Box className="h-4 w-4" />
  }, {
    name: "Examen",
    icon: <RefreshCcw className="h-4 w-4" />
  }];
  return <>
      <section id="technology" className="bg-gray-50 py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Notre manière de transformer vos idées
            </div>
            <h2 className="text-3xl font-bold mb-4">Comprenez notre manière de travailler pour vous</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Zetoun Labs guide ses clients à travers trois étapes essentielles : comprendre leurs exigences, concevoir des solutions personnalisées, et assurer un suivi constant pour optimiser leur efficacité.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stepFlowItems.map((item, index) => <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-50 rounded-full p-4 mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                      {index === 0 && <p className="text-xs text-gray-500">Comprendre les besoins du client et définir la solution, les ressources et le planning</p>}
                      {index === 1 && <p className="text-xs text-gray-500">Concevoir, réaliser et mettre en place la solution adaptée.</p>}
                      {index === 2 && <p className="text-xs text-gray-500">Assurer la maintenance, le support et l’amélioration continue.</p>}
                    </div>
                  </HoverCardContent>
                </HoverCard>)}
            </div>

            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold">Adaptation des nos projets</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Développement interactif</span>
                    <RefreshCcw className="h-5 w-5 text-gray-600 animate-rotate-slow" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">Nous adaptons chaque solution aux besoins du client, étape par étape.</p>
                
                <div className="relative mb-2">
                  <Progress value={progressValue} className="h-3 bg-gray-200" />
                </div>
                
                <div className={cn("grid gap-1 mt-4", isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4")}>
                  {sprintPhases.map((phase, index) => <div key={index} className={cn("text-center p-2 rounded transition-all", progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100 ? "bg-blue-50 border border-blue-100" : "bg-gray-50")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("rounded-full p-1 mb-1", progressValue >= index / sprintPhases.length * 100 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500")}>
                          {phase.icon}
                        </div>
                        <span className="text-xs font-medium">{phase.name}</span>
                      </div>
                    </div>)}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">Retour d'information à la clientèle intégré à chaque étape</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Amélioration continue</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-black/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                  <Rocket className="h-10 w-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Conquérir le marché</h3>
              <p className="text-gray-700">Prêts pour l’utilisation, la production et le déploiement.</p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/tech-details" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-6 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group py-[12px] my-[15px]">
               Découvrez notre méthode de travail
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Button onClick={scrollToContact} className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all ml-4 group">
              Parlez à nos experts
              <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default Features;
