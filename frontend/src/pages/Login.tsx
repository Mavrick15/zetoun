import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, LogIn, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion"; // Import motion

// Define the form schema with validation rules
const formSchema = z.object({
  email: z.string()
    .email({ message: 'Veuillez entrer une adresse email valide' }),
  password: z.string()
    .min(1, { message: 'Le mot de passe est requis' }),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Initialize the form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simuler un délai de 3 secondes
      await new Promise(resolve => setTimeout(resolve, 3000));

      // API endpoint for authentication, updated to use port 5010
      const apiUrl = "http://10.0.0.3:5010/api/auth/login";

      // Make the API call
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Send email and password
      });

      // Check if the response was successful
      if (response.ok) {
        const data = await response.json();
        // Assuming the API returns a user object with an isAuthenticated field
        localStorage.setItem('user', JSON.stringify({
          email: values.email,
          isAuthenticated: true, // Or use data.isAuthenticated if provided by API
          token: data.token // Store token if API provides one
        }));

        toast({
          title: "Connexion réussie",
          description: "Vous êtes maintenant connecté à votre compte.",
        });

        // Redirect to telecom-calendar page
        navigate('/add/telecom-calendar');
      } else {
        // Handle API errors (e.g., invalid credentials, server errors)
        const errorData = await response.json();
        setError(errorData.message || 'Identifiants invalides. Veuillez réessayer.');
        toast({
          title: "Erreur de connexion",
          description: errorData.message || "Une erreur est survenue lors de la connexion.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error('Login error:', err);
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
        title="Connexion | WRLDS Technologies"
        description="Connectez-vous pour accéder à notre calendrier des formations en télécommunication"
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
              Connexion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-sm text-gray-600"
            >
              Connectez-vous pour accéder à notre calendrier des formations
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

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connexion en cours...
                    </>
                  ) : (
                    <>
                      Se connecter <LogIn className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Pas encore de compte ?
                <Button
                  variant="link"
                  onClick={() => navigate('/signup')}
                  className="p-0 ml-2 text-blue-600 hover:text-blue-500"
                >
                  Inscrivez-vous
                </Button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Login;
