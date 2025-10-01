import { Star, Quote } from 'lucide-react';
import { Testimonial as TestimonialType } from '../types/Testimonial';

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Quote className="w-8 h-8 text-amber-600 mr-3" />
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      
      <blockquote className="text-stone-700 mb-6 leading-relaxed italic">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <cite className="font-semibold text-stone-900 not-italic">
            {testimonial.author}
          </cite>
          <p className="text-stone-500 text-sm">{testimonial.location}</p>
          {testimonial.project && (
            <p className="text-amber-600 text-sm font-medium">
              Projet : {testimonial.project}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;