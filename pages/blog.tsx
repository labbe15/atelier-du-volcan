import { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import Breadcrumb from '../components/Breadcrumb';
import SeoHead from '../components/SeoHead';
import { blogPosts } from '../utils/mockData';

const Blog: NextPage = () => {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Blog', href: '/blog' }
  ];

  const categories = ['Tous', 'Conseils', 'Tendances', 'Écologie', 'Réalisations'];

  return (
    <>
      <SeoHead 
        title="Blog - L'Atelier du Volcan"
        description="Découvrez nos conseils d'experts en menuiserie : choix des bois, tendances, écologie. Articles de professionnels en Auvergne."
        canonical="https://atelier-du-volcan.fr/blog"
      />
      
      <Header />
      <main>
        <div className="bg-stone-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-stone-900 mb-6">
                Blog & Conseils
              </h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Découvrez nos conseils d'experts, les dernières tendances en menuiserie et nos secrets d'artisans pour réussir vos projets.
              </p>
            </div>

            {/* Categories Filter */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-stone-100 rounded-lg p-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 rounded-md font-medium transition-colors text-stone-600 hover:text-stone-900 first:bg-white first:text-stone-900 first:shadow-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-stone-50 rounded-lg p-8">
                <div>
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Article mis en avant
                  </span>
                  <h2 className="text-3xl font-bold text-stone-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-stone-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt={blogPosts[0].author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-stone-900">{blogPosts[0].author}</p>
                      <p className="text-sm text-stone-500">{blogPosts[0].date}</p>
                    </div>
                  </div>
                  <a 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Lire l'article
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-20 bg-gradient-to-r from-stone-800 to-stone-900 rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Restez Informé
              </h2>
              <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
                Recevez nos derniers articles, conseils et actualités directement dans votre boîte mail. Une newsletter mensuelle pour tout savoir sur la menuiserie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-amber-500"
                />
                <button className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                  S'inscrire
                </button>
              </div>
              <p className="text-sm text-stone-400 mt-4">
                Pas de spam, désinscription facile à tout moment
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;