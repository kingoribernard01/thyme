import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../types';
import { PageHero } from '../components/PageHero';

const IMAGES: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000", category: "ambience", alt: "Evening Garden" },
  { id: 2, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000", category: "food", alt: "Plated Dish" },
  { id: 3, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000", category: "ambience", alt: "Outdoor Seating" },
  { id: 4, src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000", category: "food", alt: "Dessert" },
  { id: 5, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", category: "ambience", alt: "Cozy Corner" },
  { id: 6, src: "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=1000", category: "drinks", alt: "Cocktail" },
  { id: 7, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000", category: "food", alt: "Fine Dining" },
  { id: 8, src: "https://images.unsplash.com/photo-1525266383472-8726d3c91a58?q=80&w=1000", category: "events", alt: "Wedding Setup" },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + IMAGES.length) % IMAGES.length);
    }
  };

  return (
    <div className="animate-fade-in bg-[#faf9f6] min-h-screen">
      <PageHero 
        title="Our Gallery"
        subtitle="Visuals of Serenity and Flavor"
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((img, index) => (
            <div 
              key={img.id} 
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-xs border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X className="h-10 w-10" />
          </button>

          <button 
            className="absolute left-4 p-4 text-white/70 hover:text-white transition-colors"
            onClick={prevImage}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <img 
            src={IMAGES[selectedImage].src} 
            alt={IMAGES[selectedImage].alt} 
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            className="absolute right-4 p-4 text-white/70 hover:text-white transition-colors"
            onClick={nextImage}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <h3 className="text-2xl font-serif mb-1">{IMAGES[selectedImage].alt}</h3>
            <span className="text-sm uppercase tracking-widest text-gray-400">{IMAGES[selectedImage].category}</span>
          </div>
        </div>
      )}
    </div>
  );
};