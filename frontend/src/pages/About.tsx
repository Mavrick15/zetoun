import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    teamRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    teamRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: "Benjamin Baki",
      role: "Co-Founder and CEO",
      bio: "Acteur innovant de Zetoun Labs: avec une vision pour transformer le numérique des entreprises.",
      image: "/lovable-uploads/img/moi.jpg"
    },
    {
      name: "Christian Tendo",
      role: "Co-Founder and CTO",
      bio: "Ingénieur télécom, spécialiste IT, réseaux, systèmes et vidéosurveillance.",
      image: "/lovable-uploads/img/tendo.jpg"
    },
    {
      name: "Evra Lashe",
      role: "Co-Founder and COO",
      bio: "Spécialiste réseau & systèmes, garant de la stabilité technique.",
      image: "/lovable-uploads/img/evra.jpg"
    },
    {
      name: "Kevine Etanaka",
      role: "Co-Founder and CFO",
      bio: "Ingénieure télécom, spécialiste de la transmission de données sol-sol.",
      image: "/lovable-uploads/img/kevine.jpg"
    },
    {
      name: "Glody Nzuzi",
      role: "Co-Founder and COO",
      bio: "Spécialiste réseau & systèmes, garant de la stabilité technique.",
      image: "/lovable-uploads/img/glody.jpg"
    },
    {
      name: "Grace Moke",
      role: "Co-Founder and CMO",
      bio: "Ingénieure télécom, spécialiste de la transmission de données sol-sol.",
      image: "/lovable-uploads/img/grace.jpg"
    }
  ];

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              À propos de Zetoun Labs
            </motion.h1>

            <div className="prose prose-lg max-w-none">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 mb-12"
              >
                Nous sommes une équipe d’innovateurs engagés à transformer le quotidien des entreprises et des particuliers en alliant technologies intelligentes, servi
ces informatiques sur mesure, formations adaptées et support technique complet.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Notre Vision</h2>
                  <p className="text-gray-600">
                    Être le partenaire de confiance qui comble le fossé entre les technologies émergentes et les besoins du monde réel, en transformant les idées en sol
utions robustes et intelligentes qui stimulent la croissance et l’innovation des entreprises.
                  </p>
                  <p className="text-gray-600">
                    Notre vision est de devenir le catalyseur de la transformation numérique en démocratisant l’accès aux technologies intelligentes : nous imaginons un
 futur où chaque entreprise et chaque particulier bénéficient d’infrastructures IT flexibles, de savoir-faire pointus et d’un support infaillible, pour libérer tout leu
r potentiel d’innovation et de croissance.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Nos Valeurs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovation:</strong> Nous franchissons les limites technologiques pour donner vie à des solutions inédites.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Qualité:</strong> Nous nous engageons à atteindre l’excellence dans chaque projet que nous entreprenons.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Collaboration:</strong> Nous coopérons étroitement avec nos clients pour concevoir des solutions sur mesure.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Impact:</strong> Le véritable indicateur de notre réussite, ce sont les bénéfices tangibles que nos interventions apportent à nos cl
ients.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Nous sommes partis d’un constat simple : le paysage des services IT et de la formation était trop morcelé et complexe. Dès début 2024, notre ambitio
n était de rassembler ces offres – infrastructures, déploiement logiciel, cybersécurité, support – en modules modulaires et intuitifs, accessibles aussi bien aux entrep
rises qu’aux particuliers.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Grâce à notre premier tour de table, nous avons consacré les six premiers mois au “full code” : concevoir, tester et peaufiner chaque brique logicie
lle et chaque composant de notre plateforme. Pour valider notre approche, nous avons rapidement mis en œuvre des prototypes chez nos premiers clients pilotes – PME loca
les, start-ups et associations – en leur fournissant des environnements réseau clés en main et des modules de formation adaptés à leurs besoins réels.
                  </p>
                  <p className="text-gray-600">
                    À l’aube de 2025, notre plateforme était assez robuste pour passer à l’échelle : nous avons alors élargi notre offre aux grands comptes, en intégran
t des solutions de monitoring, d’automatisation et de formation certifiante.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Notre équipe</h2>
                <p className="text-gray-600 mb-8">
                  Notre équipe se compose d’un ingénieur réseaux certifié Cisco, d’un ingénieur vidéosurveillance et d’ingénieurs télécom,
                  prêts à concevoir et déployer des solutions IT complètes.
                </p>

                <div className="relative">
                  <div ref={teamRef} className="flex overflow-x-auto gap-6 py-4 scroll-smooth">
                    {teamMembers.map((member, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        className="w-72 sm:w-80 flex-shrink-0"
                      >
                        <Card className="bg-gray-50 border border-gray-100 overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover filter grayscale"
                                />
                              </div>
                              <h3 className="font-bold text-lg">{member.name}</h3>
                              <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                              <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                    <Button size="icon" variant="outline" onClick={handleScrollLeft} className="rounded-full border-gray-300">
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <Button size="icon" variant="outline" onClick={handleScrollRight} className="rounded-full border-gray-300">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Points de navigation (à implémenter si nécessaire avec la logique de pagination) */}
                {/* <div className="flex justify-center gap-2 mt-4">
                  {teamMembers.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${scrollPosition / 300 === index ? 'bg-gray-700' : 'bg-gray-300'}`}
                      // onClick={() => scrollToItem(index * 300)} // Fonction à implémenter
                    ></button>
                  ))}
                </div> */}

              </motion.div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-200">
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
