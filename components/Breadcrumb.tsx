import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center space-x-2 text-sm">
      <Link 
        href="/"
        className="flex items-center text-stone-500 hover:text-amber-600 transition-colors"
        aria-label="Retour à l'accueil"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-stone-400" />
          {index === items.length - 1 ? (
            <span className="text-stone-900 font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href}
              className="text-stone-500 hover:text-amber-600 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;