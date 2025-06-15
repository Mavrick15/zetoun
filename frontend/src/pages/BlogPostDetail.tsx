import { useParams } from 'react-router-dom';
// Correction : Ajustement des chemins d'importation pour qu'ils soient relatifs au répertoire parent.
import PageLayout from '../components/PageLayout';
import { Separator } from '../components/ui/separator';
import SEO from '../components/SEO';
import { useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, MessageSquare, Share, Tag } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils'; // Assurez-vous que ce chemin est correct pour votre fonction cn

// Fonction utilitaire pour formater la date au format ISO (YYYY-MM-DD)
// Cette implémentation est basique et suppose que post.date est un format que Date peut analyser.
// Adaptez-la si votre format de date est différent.
const formatDateForISO = (dateString) => {
  const date = new Date(dateString);
  // Vérifie si la date est valide avant de la formater
  if (isNaN(date.getTime())) {
    console.error("Date invalide fournie à formatDateForISO:", dateString);
    return null; // Retourne null ou une chaîne vide pour les dates invalides
  }
  return date.toISOString().split('T')[0];
};

// Fonction utilitaire pour extraire des mots-clés pour le SEO
// Ceci est une implémentation simplifiée. Pour un SEO réel, vous pourriez vouloir une logique plus sophistiquée.
// CORRECTION: Cette fonction retourne maintenant un tableau de mots-clés, et non une chaîne.
const extractKeywords = (post) => {
  const baseKeywords = [post.category];
  const titleWords = post.title.toLowerCase().split(' ').filter(word => word.length > 3);
  // Ajoute les premiers mots du contenu ou de l'extrait comme mots-clés potentiels
  const contentKeywords = post.excerpt ? post.excerpt.toLowerCase().split(' ').slice(0, 5) : [];
    
  const allKeywords = [...new Set([...baseKeywords, ...titleWords, ...contentKeywords])];
  return allKeywords; // Retourne le tableau directement
};


const BlogPostDetail = () => {
  // Récupère le slug de l'URL
  const { slug } = useParams();

  // Trouve l'article de blog correspondant au slug
  const post = blogPosts.find(post => post.slug === slug);

  // Fait défiler la fenêtre vers le haut à chaque changement de slug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Affiche un message si l'article n'est pas trouvé
  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <p>Nous n'avons pas pu trouver l'article que vous recherchez.</p>
        </div>
      </PageLayout>
    );
  }

  // Détermine si c'est un article "Sensor" pour le style spécifique
  // Adaptez cette logique selon vos critères pour les articles "Sensor"
  const isSensorPost = post.category === 'Capteurs'; // Exemple : si la catégorie est 'Capteurs'

  // Calcule le temps de lecture estimé (moyenne de 200 mots par minute)
  const wordCount = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(/\s+/).length;
    } else if (section.items) {
      // Joint les éléments de la liste pour compter les mots
      return count + section.items.join(' ').split(/\s+/).length;
    }
    return count;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <PageLayout>
      {/* Composant SEO pour optimiser le référencement de la page */}
      <SEO
        title={`${post.title} - Zetoun Labs`}
        description={post.excerpt}
        imageUrl={post.imageUrl}
        type="article"
        isBlogPost={true}
        publishDate={formatDateForISO(post.date)}
        modifiedDate={formatDateForISO(post.date)} // Souvent la même que publishDate si pas de modification
        author={post.author}
        category={post.category}
        keywords={extractKeywords(post)} // Passe l'objet post à extractKeywords (maintenant ça retourne un tableau)
      />

      {/* Section d'en-tête de l'article avec image de fond dynamique */}
      <div
        className={cn(
          "w-full pt-32 pb-16 relative",
          isSensorPost ? "bg-black text-white" : "bg-gradient-to-b from-gray-900 to-black text-white"
        )}
        style={{
          backgroundImage: isSensorPost
            ? `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url('${post.imageUrl}')`
            : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${post.imageUrl}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {/* Badges d'informations sur l'article */}
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 flex items-center gap-1.5">
                <Tag size={14} />
                {post.category}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Clock size={14} />
                {readingTime} min de lecture
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-300">
              <BookOpen size={18} className="mr-2" />
              <span>Par {post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contenu de l'article */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none" // 'prose' de Tailwind Typography pour un style de texte agréable
          >
            {post.content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={cn("mb-8", section.type === 'quote' && "my-10")}
              >
                {/* Rendu des différents types de sections de contenu */}
                {section.type === 'paragraph' && <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>}
                {section.type === 'heading' && (
                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <div className="w-1.5 h-7 bg-purple-500 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.content}</h2>
                  </div>
                )}
                {section.type === 'subheading' && (
                  <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {section.content}
                  </h3>
                )}
                {section.type === 'list' && (
                  <ul className="list-disc pl-5 my-4 space-y-2">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
                {section.type === 'quote' && (
                  <blockquote className="border-l-4 border-purple-500 pl-5 py-2 my-8 bg-purple-50 rounded-r-lg italic text-gray-700">
                    <div className="flex">
                      <MessageSquare size={20} className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-lg m-0">{section.content}</p>
                    </div>
                  </blockquote>
                )}
              </motion.div>
            ))}
          </motion.div>

          <Separator className="my-8" />

          {/* Section d'information en bas de l'article */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 bg-gray-50 rounded-lg p-6 shadow-sm">
            <div>
              <p className="text-sm text-gray-600 font-medium">Catégorie: {post.category}</p>
            </div>
            {/* Vous pouvez ajouter des boutons de partage ici si nécessaire, par exemple :
            <div className="flex gap-3 mt-4 sm:mt-0">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-500"><Share size={20} /></Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-500">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
              </Button>
            </div>
            */}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostDetail;
