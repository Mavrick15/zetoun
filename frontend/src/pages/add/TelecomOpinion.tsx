import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Send, CheckCircle2, Lightbulb, Clock, ArrowRight, MessageSquare, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const TelecomOpinion = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Demande envoyée",
        description: "Nous avons bien reçu votre demande d'avis et nous vous répondrons dans les plus brefs délais.",
      });
      // Optionally reset the form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  const features = [
    {
      title: "Conseils personnalisés",
      description: "Nos experts analysent vos besoins spécifiques et vous recommandent les formations les plus adaptées.",
      icon: <Lightbulb className="h-10 w-10 p-2 bg-amber-100 text-amber-600 rounded-full" />,
    },
    {
      title: "Parcours sur mesure",
      description: "Obtenez des recommandations pour un parcours de formation optimisé selon vos objectifs professionnels.",
      icon: <ArrowRight className="h-10 w-10 p-2 bg-green-100 text-green-600 rounded-full" />,
    },
    {
      title: "Solutions entreprise",
      description: "Découvrez nos offres spécifiques pour les entreprises souhaitant former plusieurs collaborateurs.",
      icon: <MessageSquare className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-full" />,
    },
    {
      title: "Réponse rapide",
      description: "Recevez des détails complets sur les prérequis, le contenu et les compétences acquises sous 48h.",
      icon: <Clock className="h-10 w-10 p-2 bg-purple-100 text-purple-600 rounded-full" />,
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Demander un Avis | WRLDS Technologies"
        description="Contactez-nous pour obtenir un avis professionnel sur vos besoins en télécommunication."
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
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-space">Demander un Avis</h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Un expert en télécommunication vous répondra dans les plus brefs délais.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-2 md:order-1 mt-8 md:mt-0"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pourquoi demander un avis ?</h2>
                  <div className="grid gap-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex gap-4"
                      >
                        {feature.icon}
                        <div>
                          <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                {!isSubmitted ? (
                  <Card className="shadow-lg border-0">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl">Formulaire de contact</CardTitle>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium hover:bg-blue-200">Réponse sous 48h</Badge>
                      </div>
                      <CardDescription className="text-gray-700">
                        Remplissez ce formulaire pour obtenir l'avis d'un de nos experts sur vos besoins en formation télécom.
                      </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                      <CardContent className="space-y-4 pt-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nom
                          </label>
                          <Input
                            id="name"
                            placeholder="Votre nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="votre.email@exemple.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Sujet
                          </label>
                          <Input
                            id="subject"
                            placeholder="Sujet de votre demande"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Décrivez votre besoin en détail..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full min-h-[150px]"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end pb-6">
                        <Button
                          type="submit"
                          className="w-full md:w-auto px-8 py-2 relative overflow-hidden group"
                          disabled={isSubmitting}
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? 'Envoi en cours...' : (
                              <>
                                <Send className="mr-2 h-4 w-4" />
                                Envoyer ma demande
                              </>
                            )}
                          </span>
                          <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="text-center shadow-lg border-0 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                          className="flex justify-center mb-4"
                        >
                          <CheckCircle2 className="h-16 w-16 text-green-500" />
                        </motion.div>
                      </div>

                      <CardContent className="pt-6 pb-6">
                        <CardTitle className="text-2xl mb-4">Merci pour votre demande !</CardTitle>
                        <CardDescription className="text-base text-gray-700">
                          <p className="mb-4">
                            Nous avons bien reçu votre message et un membre de notre équipe vous contactera
                            dans les plus brefs délais pour discuter de votre projet de formation.
                          </p>
                          <p>
                            Un email de confirmation a été envoyé à l'adresse <span className="font-medium">{email}</span>.
                          </p>
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="justify-center gap-4 pt-0 pb-6">
                        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                          Nouvelle demande
                        </Button>
                        <Button onClick={() => window.location.href = "/add/telecom-calendar"}>
                          Retour aux formations
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TelecomOpinion;
