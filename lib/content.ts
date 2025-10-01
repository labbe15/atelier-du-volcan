// Helper pour les images Cloudinary avec fallback Pexels (CLIENT-SAFE)
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