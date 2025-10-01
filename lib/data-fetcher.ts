import fs from 'fs';
import path from 'path';

// Helper pour lire les fichiers JSON de contenu (SERVER-SIDE ONLY)
export const getContentData = (filename: string) => {
  const filePath = path.join(process.cwd(), 'data', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
};

// Fonctions spécifiques pour chaque type de contenu (SERVER-SIDE ONLY)
export const getSiteContent = () => getContentData('content.json');
export const getServicesData = () => getContentData('services.json');
export const getProjectsData = () => getContentData('projects.json');