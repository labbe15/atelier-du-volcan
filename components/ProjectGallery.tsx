'use client';

import { useState } from 'react';
import { Project } from '../types/Project';
import { ZoomIn, X } from 'lucide-react';

interface ProjectGalleryProps {
  projects: Project[];
  showFilter?: boolean;
}

const ProjectGallery = ({ projects, showFilter = true }: ProjectGalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<'before' | 'after'>('before');

  const openModal = (project: Project, imageType: 'before' | 'after') => {
    setSelectedProject(project);
    setSelectedImage(imageType);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-2 h-48">
              {/* Before Image */}
              <div className="relative group cursor-pointer" onClick={() => openModal(project, 'before')}>
                <img
                  src={project.beforeImage}
                  alt={`${project.title} - Avant`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  AVANT
                </div>
              </div>
              
              {/* After Image */}
              <div className="relative group cursor-pointer" onClick={() => openModal(project, 'after')}>
                <img
                  src={project.afterImage}
                  alt={`${project.title} - Après`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  APRÈS
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category === 'interior' ? 'Intérieur' : 'Extérieur'}
                </span>
                <span className="text-stone-500 text-sm">{project.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                {project.title}
              </h3>
              <p className="text-stone-600 mb-4">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-stone-500 text-sm">{project.location}</span>
                <span className="text-amber-600 font-semibold">{project.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <img
                  src={selectedProject.beforeImage}
                  alt={`${selectedProject.title} - Avant`}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-2 rounded font-semibold">
                  AVANT
                </div>
              </div>
              <div className="relative">
                <img
                  src={selectedProject.afterImage}
                  alt={`${selectedProject.title} - Après`}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded font-semibold">
                  APRÈS
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedProject.category === 'interior' ? 'Intérieur' : 'Extérieur'}
                </span>
                <span className="text-stone-500">{selectedProject.year}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-stone-900 mb-3">
                {selectedProject.title}
              </h2>
              <p className="text-stone-600 mb-4">
                {selectedProject.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-stone-900">Lieu :</span>
                  <p className="text-stone-600">{selectedProject.location}</p>
                </div>
                <div>
                  <span className="font-semibold text-stone-900">Durée :</span>
                  <p className="text-stone-600">{selectedProject.duration}</p>
                </div>
                <div>
                  <span className="font-semibold text-stone-900">Matériaux :</span>
                  <p className="text-stone-600">{selectedProject.materials?.join(', ') || 'Bois local'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;