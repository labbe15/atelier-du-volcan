import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/Blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <header className="mb-4">
          <h2 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-stone-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </header>
        
        <div className="flex items-center text-sm text-stone-500 mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-stone-500">
            Lecture : {post.readTime}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            Lire l'article
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-stone-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard;