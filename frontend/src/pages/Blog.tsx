import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import { motion } from "framer-motion"; // Import motion

const Blog = () => {
  // Get the first blog post for the featured post section
  const featuredPost = blogPosts.find(post => post.id === '3') || null; // Feature the new post about development process
  // Get the rest of the blog posts for the grid section
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const keywords = [
    'smart textiles',
    'sensor technology',
    'wearable tech',
    'innovation',
    'textile sensors',
    'Zetoun Labs'
  ];

  const description = "Découvrez les dernières actualités et informations sur les textiles intelligents, la technologie des capteurs et les innovations de Zetoun Labs.";

  return (
    <PageLayout>
      <SEO
        title="ZL - Les dernières actualités technologiques"
        description={description}
        imageUrl={featuredPost?.imageUrl || "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"}
        keywords={keywords}
        type="website"
      />

      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              variants={textVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Zetoun Labs Actualités &amp; informations
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 mb-6"
            >
              The latest trends and news in sensor-integrated textiles and smart technology
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <motion.div variants={cardVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
              <Link to={`/blog/${featuredPost.slug}`} className="h-full block">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="grid md:grid-cols-2 h-full">
                    <div
                      className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center"
                      style={{
                        backgroundImage: `url('${featuredPost.imageUrl}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="text-white text-center bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium inline-block mb-4">Featured</span>
                        <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-between">
                      <div>
                        <p className="text-gray-500 text-sm mb-2">Published: {featuredPost.date}</p>
                        <p className="text-gray-700 mb-6">
                          {featuredPost.excerpt}
                        </p>
                      </div>
                      <Button variant="outline" className="group self-start">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          )}

          {otherPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <BlogPostCard
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'}
                date={post.date}
                slug={post.slug}
                category={post.category}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Blog;
