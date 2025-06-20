import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, UserPlus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion"; // Import motion

// Définition du schéma de formulaire avec les règles de validation
const formSchema = z.object({
  name: z.string()
    .min(3, { message: 'Le nom doit contenir au moins 3 caractères' })
    .max(20, { message: 'Le nom ne peut pas dépasser 20 caractères' }),
  email: z.string()
    .email({ message: 'Veuillez entrer une adresse email valide' }),
  password: z.string()
    .min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
    .max(20, { message: 'Le mot de passe ne peut pas dépasser 20 caractères' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Initialisation du formulaire avec react-hook-form et la validation Zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simuler un délai de 3 secondes pour l'expérience utilisateur
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Point de terminaison API pour l'enregistrement de l'utilisateur.
      // IMPORTANT: Remplacez cette IP par votre véritable endpoint de backend.
      const apiUrl = "http://10.0.0.2:5010/api/auth/signup";

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Stocker les informations de l'utilisateur.
        // Pour la production, envisagez des méthodes de stockage plus sécurisées comme les cookies HttpOnly.
        localStorage.setItem('user', JSON.stringify({
          name: values.name,
          email: values.email,
          isAuthenticated: true,
          token: data.token
        }));

        toast({
          title: "Inscription réussie",
          description: "Bienvenue sur notre plateforme de formations.",
        });

        // Rediriger vers la page du calendrier des formations après une inscription réussie
        navigate('/add/telecom-calendar');
      } else {
        // Gérer les erreurs API (ex: email déjà enregistré, erreurs serveur)
        const errorData = await response.json();
        setError(errorData.message || 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        toast({
          title: "Erreur d'inscription",
          description: errorData.message || "Une erreur est survenue lors de l'inscription.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error('Erreur d\'inscription:', err);
      setError('Impossible de se connecter au serveur. Veuillez vérifier votre connexion.');
      toast({
        title: "Erreur réseau",
        description: "Impossible de se connecter au serveur. Veuillez vérifier votre connexion.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout showContact={false}>
      <SEO
        title="Inscription | Zetoun Labs"
        description="Inscrivez-vous pour accéder à notre calendrier des formations en télécommunication"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" pt-24 pb-16 py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center bg-gray-50"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 font-space"
            >
              Créer un compte
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-sm text-gray-600"
            >
              Inscrivez-vous pour accéder à notre calendrier des formations
            </motion.p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrez votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmation du mot de passe</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Inscription en cours...
                    </>
                  ) : (
                    <>
                      S'inscrire <UserPlus className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Déjà un compte ?
                <Button
                  variant="link"
                  onClick={() => navigate('/login')}
                  className="p-0 ml-2 text-blue-600 hover:text-blue-500"
                >
                  Connectez-vous
                </Button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default SignUp;
