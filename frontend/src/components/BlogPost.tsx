
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface BlogPostProps {
  title: string;
  content: string;
  date?: Date;
  author?: string;
  category?: string;
  imageUrl?: string;
}

const BlogPost = ({ 
  title, 
  content, 
  date = new Date(), 
  author = "WRLDS Technologies", 
  category = "Actualités", 
  imageUrl 
}: BlogPostProps) => {
  return (
    <Card className="overflow-hidden mb-8">
      {imageUrl && (
        <div 
          className="w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {format(date, "d MMMM yyyy", { locale: fr })} • 
            <span className="ml-1">{author}</span>
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          {content.split('\n').map((paragraph, index) => (
            paragraph ? <p key={index} className="mb-4 text-gray-700">{paragraph}</p> : <br key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
