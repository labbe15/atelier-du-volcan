import fs from 'fs';
import path from 'path';

// Helper pour lire les fichiers JSON de contenu
export const getContentData = (filename: string) => {
  const filePath = path.join(process.cwd(), 'data', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
};

// Fonctions spécifiques pour chaque type de contenu
export const getSiteContent = () => getContentData('content.json');
export const getServicesData = () => getContentData('services.json');
export const getProjectsData = () => getContentData('projects.json');

// Helper pour les images Cloudinary avec fallback Pexels
export const getImageUrl = (cloudinaryId: string, pexelsFallback?: string, options?: {
  width?: number;
  height?: number;
  quality?: string;
}) => {
  // Si on a un ID Cloudinary, on l'utilise
  if (cloudinaryId && !cloudinaryId.startsWith('http')) {
    const { width = 800, height, quality = 'auto' } = options || {};
    const baseUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}/image/upload`;
    const transforms = [
      `w_${width}`,
      height ? `h_${height}` : null,
      `q_${quality}`,
      'f_auto',
      'c_fill',
      'g_auto'
    ].filter(Boolean).join(',');
    
    return `${baseUrl}/${transforms}/${cloudinaryId}`;
  }
  
  // Sinon on utilise le fallback Pexels
  return pexelsFallback || 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800';
};