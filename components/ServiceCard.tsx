import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types/Service';

interface ServiceCardProps {
  service: Service;
  showButton?: boolean;
}

const ServiceCard = ({ service, showButton = false }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {service.category === 'interior' ? 'Intérieur' : 
             service.category === 'exterior' ? 'Extérieur' : 'Escaliers'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-stone-600 mb-4 leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-amber-600">
            À partir de {service.priceRange}
          </span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-stone-600">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        {showButton && (
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="/projects"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-stone-300 text-stone-700 font-semibold rounded-lg hover:border-amber-600 hover:text-amber-600 transition-colors"
            >
              Voir les projets
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;