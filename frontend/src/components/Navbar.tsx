import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Network, Shield, Globe, Server, HeadsetIcon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  // State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // State to manage the mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle scroll events for changing navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to a specific section on the page (used in mobile menu)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    // Close the mobile menu after scrolling
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-sm" : "bg-black"
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Logo and site name link */}
            <Link to="/" className="flex items-center">
              <div className={cn("flex items-center")}>
                <img
                  src="/lovable-uploads/logo/Logo1.svg"
                  alt="ZetounLabs Logo"
                  className={cn(
                    "h-8 mr-2",
                    isScrolled ? "filter-none" : "filter invert"
                  )}
                />
                <span className={cn("text-xl font-bold", isScrolled ? "text-gray-800" : "text-white")}>
                  Zetoun Labs
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                {/* Home link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild // Use asChild to render Link component directly
                  >
                    <Link
                      to="/"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      Accueil
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild // Use asChild to render Link component directly
                  >
                    <Link
                      to="/about"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      À propos
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Achievements dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Réalisations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/projects/firecat"> {/* Added 'to' prop to Link */}
                            <div className="font-medium">Police judiciaire</div>
                            <p className="text-sm text-gray-500">Réhabilitation de l’infrastructure IT</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/projects/sport-retail"> {/* Added 'to' prop to Link */}
                            <div className="font-medium">Centre de Diagnostic EYANO</div>
                            <p className="text-sm text-gray-500">Renforcement et extension du système de sécurité</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/development-process"> {/* Added 'to' prop to Link */}
                            <div className="font-medium">Processus de déploiement</div>
                            <p className="text-sm text-gray-500">Notre approche pour créer des solutions IT sur mesure</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Dropdown Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/network-engineering" className="flex items-center space-x-3"> {/* Added 'to' prop to Link */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                              <Network size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Ingénierie Réseau</div>
                              <p className="text-sm text-gray-500">Conception & installation réseau</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/video-surveillance" className="flex items-center space-x-3"> {/* Added 'to' prop to Link */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600">
                              <Shield size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Vidéosurveillance & Sécurité</div>
                              <p className="text-sm text-gray-500">Installations de vidéosurveillance adaptées</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/web-development" className="flex items-center space-x-3"> {/* Added 'to' prop to Link */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
                              <Globe size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Conception Web</div>
                              <p className="text-sm text-gray-500">Solutions web taillées pour votre activité</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/it-management" className="flex items-center space-x-3"> {/* Added 'to' prop to Link */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                              <Server size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Infogérance</div>
                              <p className="text-sm text-gray-500">Supervision et maintenance IT</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/solar-installation" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600">
                              <Sun size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Installation solaire</div>
                              <p className="text-sm text-gray-500">Conception et installation de systèmes solaires</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/technical-support" className="flex items-center space-x-3"> {/* Added 'to' prop to Link */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600">
                              <HeadsetIcon size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Support Technique</div>
                              <p className="text-sm text-gray-500">Assistance technique réactive</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Formations dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Formations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/linux-administration"> {/* Added 'to' prop to Link */}
                            <div className="font-medium">Administration sous Linux</div>
                            <p className="text-sm text-gray-500">Formation Linux et gestion de serveurs</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/windows-administration"> {/* Added 'to' prop to Link */}
                            <div className="font-medium">Administration sous Windows</div>
                            <p className="text-sm text-gray-500">Formation Linux et gestion de serveurs</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/network-administration"> {/* Added 'to' prop to Link */}
                            <div className="font-medium">Administration Réseau</div>
                            <p className="text-sm text-gray-500">Formation routage et switching CISCO</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/computer-maintenance"> {/* Added 'to' prop to Link */}
                            <div className="font-medium">Maintenance des Ordinateurs</div>
                            <p className="text-sm text-gray-500">Formation dépannage matériel et logiciel</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild // Use asChild to render Link component directly
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/virtualization-training"> {/* Added 'to' prop to Link */}
                            <div className="font-medium">Virtualisation</div>
                            <p className="text-sm text-gray-500"> Formation aux technologies de virtualisation</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* News link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild // Use asChild to render Link component directly
                  >
                    <Link
                      to="/blog"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      Nouveautés
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <div className={cn("h-6 w-px mx-4", isScrolled ? "bg-gray-300" : "bg-gray-600")}></div>
              <div className="flex items-center "> <UserMenu /> </div>

            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Accueil
          </Link>

          <Link to="/about" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            À propos
          </Link>

          {/* Mobile Achievements dropdown */}
          <div className="block">
            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              <span>Réalisations</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/projects/firecat" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Police judiciaire
              </Link>
              <Link to="/projects/sport-retail" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Centre de Diagnostic EYANO
              </Link>
              <Link to="/development-process" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Processus de déploiement
              </Link>
            </div>
          </div>

          {/* Services dropdown for mobile */}
          <div className="block">
            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/services/network-engineering" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Ingénierie Réseau
              </Link>
              <Link to="/services/video-surveillance" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Vidéosurveillance & Sécurité
              </Link>
              <Link to="/services/web-development" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Conception Web
              </Link>
              <Link to="/services/it-management" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Infogérance
              </Link>
              <Link to="/services/solar-installation" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Installation solaire
              </Link>
              <Link to="/services/technical-support" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Support Technique
              </Link>
            </div>
          </div>

          {/* Formations dropdown for mobile */}
          <div className="block">
            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              <span>Formations</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/formations/linux-administration" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Administration sous linux
              </Link>
              <Link to="/formations/windows-administration" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Administration sous Windows
              </Link>
              <Link to="/formations/network-administration" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Administration Réseau
              </Link>
              <Link to="/formations/computer-maintenance" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Maintenance des Ordinateurs
              </Link>
              <Link to="/formations/virtualization-training" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Virtualisation
              </Link>
              <button onClick={() => scrollToSection('why-wrlds')} className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
                Pourquoi Zetoun Labs
              </button>
            </div>
          </div>

          {/* Mobile News link */}
          <Link to="/blog" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            News
          </Link>

          {/* Mobile Contact button */}
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-gray-700 bg-gray-200 hover:bg-gray-300" : "text-white bg-gray-700 hover:bg-gray-600")}>
            Contactez-nous
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
