import { v2 as cloudinary } from 'cloudinary';

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Helper pour générer les URLs optimisées
export const getOptimizedImageUrl = (publicId: string, options?: {
  width?: number;
  height?: number;
  quality?: string;
  format?: string;
}) => {
  const { width = 800, height, quality = 'auto', format = 'auto' } = options || {};
  
  return cloudinary.url(publicId, {
    width,
    height,
    quality,
    format,
    crop: 'fill',
    gravity: 'auto',
  });
};

// Helper pour les images responsives
export const getResponsiveImageUrl = (publicId: string, sizes: number[]) => {
  return sizes.map(size => ({
    src: getOptimizedImageUrl(publicId, { width: size }),
    width: size
  }));
};