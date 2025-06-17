import React, { useState, useEffect } from 'react';
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { CalendarIcon, MapPin, Clock, Users, UserCircle, Search, Filter, AlertCircle, ArrowLeft } from "lucide-react";
import { Input } from "../../components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from '../../components/PageLayout';
import SEO from '../../components/SEO';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../components/ui/pagination";
import useFormations, { Formation } from '../../hooks/useFormations';
import { Skeleton } from "../../components/ui/skeleton";
import { Link } from 'react-router-dom';
import { useToast } from "../../components/ui/use-toast";

const TelecomCalendar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  // State to keep track of the formation ID currently being enrolled
  const [enrollingId, setEnrollingId] = useState<string | null>(null);
  const { toast } = useToast();

  // Handle search debounce for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch formations from the API
  // ASSUMPTION: The `useFormations` hook now provides an `isEnrolled` boolean
  // property on each `Formation` object, indicating if the current user is already enrolled.
  const {
    formations,
    loading,
    error,
    pagination,
    goToPage
  } = useFormations({
    limit: 5,
    searchTerm: debouncedSearchTerm
  });

  /**
   * Handles the enrollment process for a given formation.
   * It simulates a 3-second loading time and disables the specific course card
   * during the enrollment process.
   * @param {string} formationId - The ID of the formation to enroll in.
   */
  const handleEnrollment = async (formationId: string) => {
    // Set the enrolling ID to disable the specific course card and button
    setEnrollingId(formationId);

    try {
      // Simulate a 3-second loading time
      await new Promise(resolve => setTimeout(resolve, 3000));

      const userDataString = localStorage.getItem('user');
      let authToken = null;

      if (userDataString) {
        try {
          const userData = JSON.parse(userDataString);
          authToken = userData.token;
        } catch (error) {
          console.error("Erreur lors du parsing des informations utilisateur:", error);
          toast({
            variant: "destructive",
            title: "Erreur d'authentification",
            description: "Impossible de récupérer les informations d'authentification.",
          });
          return; // Exit if user data parsing fails
        }
      }

      console.log("Valeur de authToken avant la vérification:", authToken);

      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      } else {
        toast({
          variant: "destructive",
          title: "Non autorisé.",
          description: "Votre session semble invalide. Veuillez vous reconnecter.",
        });
        return; // Exit if no auth token
      }

      // Make the actual API call for enrollment
      const response = await fetch('http://10.0.0.2:5010/api/enrollments', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ formationId }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Enrôlement réussi:', data);
        toast({
          title: "Enrôlement réussi!",
          description: data.message || "Vous êtes maintenant enrôlé à cette formation.",
        });
        // If your useFormations hook has a `mutate` function to refresh data, you can call it here
        // mutate();
      } else {
        console.error('Erreur lors de l\'enrôlement:', data);
        toast({
          variant: "destructive",
          title: "Erreur d'enrôlement",
          description: data.message || "Une erreur s'est produite lors de l'enrôlement.",
        });
      }
    } catch (error) {
      console.error('Erreur de communication avec le serveur:', error);
      toast({
        variant: "destructive",
        title: "Erreur serveur",
        description: "Erreur de communication avec le serveur.",
      });
    } finally {
      // Reset enrollingId regardless of success or failure
      setEnrollingId(null);
    }
  };

  // Render loading skeletons
  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, index) => (
      <Card key={`skeleton-${index}`} className="overflow-hidden border-0 shadow-md">
        <div className="grid md:grid-cols-3 gap-0">
          <div className="relative h-[200px] md:h-full bg-gray-100">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="p-6 md:col-span-2">
            <div className="space-y-4">
              <div>
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {Array(4).fill(0).map((_, idx) => (
                  <div key={`detail-${idx}`} className="flex items-start">
                    <Skeleton className="h-5 w-5 mr-3" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-20 mb-1" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
                <div className="flex items-center">
                  <Skeleton className="h-5 w-5 mr-2" />
                  <div>
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    ));
  };

  return (
    <PageLayout>
      <SEO
        title="Calendrier des Formations | Zetoun Labs"
        description="Consultez notre calendrier des formations et trouvez la session qui vous convient."
      />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-space">Calendrier des formations</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez nos prochaines sessions de formation et inscrivez-vous dès aujourd'hui !
              </p>
            </motion.div>

            {/* Search and Filter Controls */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="relative w-full sm:max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Rechercher une formation..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border-gray-200 focus:border-blue-500 rounded-lg w-full"
                  />
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-sm text-gray-500 hidden sm:inline">
                    {pagination?.total} formation(s) disponible(s)
                  </span>
                </div>
              </div>
            </div>

            {/* AnimatePresence pour des transitions fluides entre les états de chargement/erreur/vide/contenu */}
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading-skeletons"
                  initial={{ opacity: 0, y: 20 }} // Ajout de l'effet d'entrée
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }} // Ajout de l'effet de sortie
                  transition={{ duration: 0.4 }} // Durée légèrement augmentée
                >
                  {renderSkeletons()}
                </motion.div>
              ) : error ? (
                <motion.div
                  key="error-message"
                  initial={{ opacity: 0, y: 20 }} // Ajout de l'effet d'entrée
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }} // Ajout de l'effet de sortie
                  transition={{ duration: 0.4 }} // Durée légèrement augmentée
                  className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100 mb-8"
                >
                  <AlertCircle className="h-12 w-12 mx-auto text-red-400 mb-3" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Une erreur s'est produite</h3>
                  <p className="text-gray-600">{error}</p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                    className="mt-4"
                  >
                    Réessayer
                  </Button>
                </motion.div>
              ) : formations?.length === 0 ? (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, y: 20 }} // Ajout de l'effet d'entrée
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }} // Ajout de l'effet de sortie
                  transition={{ duration: 0.4 }} // Durée légèrement augmentée
                  className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <Filter className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Aucune formation trouvée</h3>
                  <p className="text-gray-600">Veuillez modifier vos critères de recherche ou consulter notre catalogue complet.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="formations-list"
                  initial={{ opacity: 0, y: 20 }} // Ajout de l'effet d'entrée
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }} // Durée légèrement augmentée
                  className="grid grid-cols-1 gap-8 mb-8"
                >
                  {formations.map((course, index) => (
                    <motion.div
                      key={course._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Apply opacity and disable pointer events if enrolling in this specific course or if already enrolled */}
                      <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md ${enrollingId === course._id || course.isEnrolled
                        ? 'opacity-50 pointer-events-none' : ''}`}>
                        <div className="grid md:grid-cols-3 gap-0">
                          {course.image && (
                            <div className="relative h-full min-h-[200px] md:min-h-0 bg-gray-100">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover absolute inset-0"
                              />
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-white/90 text-blue-600 hover:bg-white/80 backdrop-blur-sm font-medium px-3 py-1">
                                  {course.level}
                                </Badge>
                              </div>
                              <div className="absolute bottom-4 left-4 right-4 md:hidden">
                                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                                  <p className="font-semibold text-blue-600">{course.price}</p>
                                  <p className="text-sm text-gray-700">{course.seats} places disponibles</p>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className={`p-6 ${course.image ? 'md:col-span-2' : 'md:col-span-3'}`}>
                            <div className="space-y-4">
                              <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
                                <p className="text-gray-700">{course.description}</p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                                <div className="flex items-start">
                                  <CalendarIcon className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                                  <div>
                                    <p className="font-medium">Date</p>
                                    <p className="text-gray-700">{course.date}</p>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                                  <div>
                                    <p className="font-medium">Lieu</p>
                                    <p className="text-gray-700">{course.location}</p>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                                  <div>
                                    <p className="font-medium">Durée</p>
                                    <p className="text-gray-700">{course.duration}</p>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <Users className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                                  <div>
                                    <p className="font-medium">Places disponibles</p>
                                    <p className="text-gray-700">{course.seats} places</p>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
                                <div className="flex items-center">
                                  <UserCircle className="h-5 w-5 text-blue-600 mr-2" />
                                  <div>
                                    <p className="font-medium">{course.instructor}</p>
                                    <p className="text-sm text-gray-500">Formateur</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="hidden md:block">
                                    <p className="text-sm text-gray-700">Prix</p>
                                    <p className="font-semibold text-lg text-blue-600">{course.price}</p>
                                  </div>
                                  <Button
                                    size="lg"
                                    className="relative overflow-hidden group"
                                    onClick={() => handleEnrollment(course._id)}
                                    disabled={enrollingId === course._id || course.isEnrolled}
                                  >
                                    <span className="relative z-10">
                                      {enrollingId === course._id
                                        ? "Enrôlement..."
                                        : course.isEnrolled
                                          ? "Déjà enrôlé"
                                          : "S'enroller"}
                                    </span>
                                    <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>


            {/* Pagination */}
            {!loading && !error && formations?.length > 0 && pagination?.pages > 1 && (
              <Pagination className="my-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (pagination.offset > 0) {
                          const prevPage = Math.floor(pagination.offset / pagination.limit);
                          goToPage(prevPage);
                        }
                      }}
                      className={pagination.offset === 0 ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>

                  {Array.from({ length: pagination.pages }, (_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          goToPage(i + 1);
                        }}
                        isActive={Math.floor(pagination.offset / pagination.limit) + 1 === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const currentPage = Math.floor(pagination.offset / pagination.limit) + 1;
                        if (currentPage < pagination.pages) {
                          goToPage(currentPage + 1);
                        }
                      }}
                      className={Math.floor(pagination.offset / pagination.limit) + 1 >= pagination.pages ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl text-center shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vous ne trouvez pas la formation que vous recherchez ?</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Nous proposons également des formations sur mesure adaptées aux besoins spécifiques de votre entreprise.
                Contactez-nous pour discuter de vos besoins en formation.
              </p>
              <Link to="/add/telecom-opinion">
                <Button size="lg" variant="outline" className="bg-white hover:bg-blue-50">
                  Demander une formation personnalisée
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TelecomCalendar;
