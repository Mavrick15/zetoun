import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, ArrowRight, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

// Define the form schema with validation rules
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

  // Initialize the form with react-hook-form and zod validation
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
      // API endpoint for user registration
      const apiUrl = "http://10.0.0.3:5010/api/auth/signup"; // Backend server on port 5010

      // Make the API call
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }), // Send name, email, and password
      });

      // Check if the response was successful
      if (response.ok) {
        const data = await response.json();
        // Assuming the API returns a user object with an isAuthenticated field and potentially a token
        localStorage.setItem('user', JSON.stringify({
          name: values.name,
          email: values.email,
          isAuthenticated: true, // Or use data.isAuthenticated if provided by API
          token: data.token // Store token if API provides one
        }));

        toast({
          title: "Inscription réussie",
          description: "Bienvenue sur notre plateforme de formations.",
        });

        // Redirect to telecom-calendar page
        navigate('/add/telecom-calendar');
      } else {
        // Handle API errors (e.g., email already exists, server errors)
        const errorData = await response.json();
        setError(errorData.message || 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        toast({
          title: "Erreur d'inscription",
          description: errorData.message || "Une erreur est survenue lors de l'inscription.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error('Registration error:', err);
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
        title="Inscription | WRLDS Technologies"
        description="Inscrivez-vous pour accéder à notre calendrier des formations en télécommunication"
      />

      <div className=" pt-24 pb-16 py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 font-space">Créer un compte</h1>
            <p className="mt-2 text-sm text-gray-600">
              Inscrivez-vous pour accéder à notre calendrier des formations
            </p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
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
                    <>Inscription en cours...</>
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignUp;
