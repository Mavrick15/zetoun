import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client"; // Assurez-vous que Supabase est correctement configuré
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre adresse e-mail.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Vérifier d'abord si l'email existe déjà dans la base de données
      const { data: existingEmail } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .limit(1);
      
      // Si l'email existe déjà, informer l'utilisateur
      if (existingEmail && existingEmail.length > 0) {
        toast({
          title: "Information",
          description: "Cette adresse e-mail est déjà inscrite à notre newsletter.",
          variant: "default"
        });
      } else {
        // Si l'email n'existe pas encore, l'ajouter
        const { error } = await supabase
          .from('newsletter_subscribers')
          .insert([{ email, message }]);
        
        if (error) throw error;
        
        toast({
          title: "Merci !",
          description: "Votre message a été enregistré avec succès. Nous vous répondrons sous peu.",
          variant: "default"
        });
      }
      
      setEmail(""); // Réinitialiser le champ email
      setMessage(""); // Réinitialiser le champ message
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de votre inscription. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
             <div className="h-12 w-12 mr-2">
                <img 
                  src="/lovable-uploads/logo/Logo2.png" 
                  alt="ZetounLabs Logo" 
                  className="h-full w-full object-contain"
                  onError={(e) => { // Fallback for image loading error
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/48x48/000000/FFFFFF?text=ZL"; // Placeholder image
                    e.currentTarget.alt = "ZetounLabs Logo Placeholder";
                  }}
                />
             </div>
             <span className="text-2xl font-bold text-white">Zetoun Labs</span>
            </div>
            <p className="text-gray-300 mb-6">
              Zetoun Labs est une plateforme tout-en-un pour le développement et le déploiement
              de solutions informatiques intelligentes, offrant à ses clients une maîtrise totale
              de leurs outils tout en assurant la prise en charge complète du développement technologique.
            </p>
            <p className="text-gray-300 mb-6">
              6284 1st Street<br />
              Matete, Kinshasa DRCongo
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/zetounlabs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">À propos de nous</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Parcours professionnel</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contactez-nous</h3>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Votre message" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400 min-h-[100px] resize-y"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoies du message..." : (
                  <>
                    Écrivez-nous !
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Zetoun Labs inc. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
