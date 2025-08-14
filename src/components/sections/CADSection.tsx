import React, { useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface CADProject {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
}

interface CADSectionProps {
  cadProjects: CADProject[];
  selectedCADImage: { projectId: number | null; imageIndex: number };
  setSelectedCADImage: (selection: { projectId: number | null; imageIndex: number }) => void;
  lightboxImage: { src: string; title: string; index: number; projectId: number } | null;
  setLightboxImage: (image: { src: string; title: string; index: number; projectId: number } | null) => void;
}

const CADSection: React.FC<CADSectionProps> = ({
  cadProjects,
  selectedCADImage,
  setSelectedCADImage,
  lightboxImage,
  setLightboxImage
}) => {
  // Find current project for lightbox navigation
  const currentProject = lightboxImage ? cadProjects.find(p => p.title === lightboxImage.title) : null;
  
  const navigateLightboxImage = useCallback((direction: 'next' | 'prev') => {
    if (!currentProject || !lightboxImage) return;
    
    const currentIndex = lightboxImage.index;
    const totalImages = currentProject.images.length;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    }
    
    setLightboxImage({
      ...lightboxImage,
      index: newIndex,
      src: currentProject.images[newIndex]
    });
  }, [currentProject, lightboxImage, setLightboxImage]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      
      if (e.key === 'ArrowLeft') {
        navigateLightboxImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightboxImage('next');
      } else if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxImage, navigateLightboxImage, setLightboxImage]);

  return (
    <>
      <section id="cad" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">CAD Projects</h2>
            <p className="text-gray-300 text-xl">3D Design & Engineering</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {cadProjects.map((project) => (
              <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 group">
                {/* Main CAD Image with Lightbox */}
                <div className="relative h-48 bg-gradient-to-r from-gray-800 to-gray-700 overflow-hidden">
                  <div 
                    className="w-full h-full cursor-pointer"
                    onClick={() => setLightboxImage({
                      src: project.images[selectedCADImage.projectId === project.id ? selectedCADImage.imageIndex : 0],
                      title: project.title,
                      index: selectedCADImage.projectId === project.id ? selectedCADImage.imageIndex : 0,
                      projectId: project.id
                    })}
                  >
                    <Image
                      src={project.images[selectedCADImage.projectId === project.id ? selectedCADImage.imageIndex : 0]}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                      loading="eager"
                      unoptimized={project.images[selectedCADImage.projectId === project.id ? selectedCADImage.imageIndex : 0].includes('picsum.photos')}
                    />
                  </div>
                  
                  {/* Hidden overlay for fallback */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-white text-center">
                      <div className="text-6xl mb-2">🎨</div>
                      <p className="text-lg font-semibold">{project.title}</p>
                    </div>
                  </div>
                </div>

                {/* Image Thumbnails */}
                {project.images.length > 1 && (
                  <div className="px-4 py-3 bg-gray-800/50">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                      {project.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedCADImage({ projectId: project.id, imageIndex: index })}
                          className={`relative w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                            selectedCADImage.projectId === project.id && selectedCADImage.imageIndex === index
                              ? 'border-cyan-400 opacity-100'
                              : 'border-gray-500 opacity-70 hover:opacity-100 hover:border-gray-400'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${project.title} thumbnail ${index + 1}`}
                            width={64}
                            height={48}
                            className="w-full h-full object-cover"
                            unoptimized={image.includes('picsum.photos')}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {project.images.length} image{project.images.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAD Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors z-20 shadow-lg"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Navigation arrows for multiple images */}
            {currentProject && currentProject.images.length > 1 && (
              <>
                <button
                  onClick={() => navigateLightboxImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateLightboxImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Main lightbox image */}
            <Image
              src={lightboxImage.src}
              alt={`${lightboxImage.title} - Full size`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={() => setLightboxImage(null)}
              priority
              loading="eager"
              unoptimized={lightboxImage.src.includes('picsum.photos')}
            />
            
            {/* Navigation hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg opacity-60">
              {currentProject && currentProject.images.length > 1 
                ? 'Use ← → keys or click arrows to navigate • Click anywhere to close'
                : 'Click anywhere to close'
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CADSection;